import { useMemo, useRef, useState } from 'react'
import type { Gym } from '../data/gyms'

interface Props {
  gyms: Gym[]
  onResult: (gym: Gym) => void
  onBack: () => void
}

const COLORS = [
  '#ef476f',
  '#f78c6b',
  '#ffd166',
  '#83d483',
  '#06d6a0',
  '#0cb0a9',
  '#118ab2',
  '#6a4c93',
]

const SIZE = 360
const CENTER = SIZE / 2
const RADIUS = SIZE / 2 - 6

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  }
}

// 中心角 startDeg〜endDeg の扇形パス(12時方向が 0deg、時計回り)
function sectorPath(startDeg: number, endDeg: number) {
  const start = polar(startDeg, RADIUS)
  const end = polar(endDeg, RADIUS)
  const largeArc = endDeg - startDeg > 180 ? 1 : 0
  return `M ${CENTER} ${CENTER} L ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${end.x} ${end.y} Z`
}

export default function RouletteWheel({ gyms, onResult, onBack }: Props) {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const timerRef = useRef<number | null>(null)

  const sectorAngle = 360 / gyms.length

  const sectors = useMemo(
    () =>
      gyms.map((gym, i) => {
        const start = i * sectorAngle
        const end = (i + 1) * sectorAngle
        const mid = (start + end) / 2
        return { gym, start, end, mid, color: COLORS[i % COLORS.length] }
      }),
    [gyms, sectorAngle],
  )

  const spin = () => {
    if (spinning) return
    setSpinning(true)

    const winnerIndex = Math.floor(Math.random() * gyms.length)
    const winner = gyms[winnerIndex]

    // 当選セクタの中央が 12 時(ポインタ位置)に来る回転角。
    // セクタ内のどこで止まるかは毎回少しランダムにずらす
    const winnerMid = winnerIndex * sectorAngle + sectorAngle / 2
    const jitter = (Math.random() - 0.5) * sectorAngle * 0.7
    const extraTurns = 5 + Math.floor(Math.random() * 3)
    const current = rotation % 360
    const target =
      rotation - current + extraTurns * 360 + (360 - winnerMid - jitter)

    const durationMs = 5000
    setRotation(target)

    timerRef.current = window.setTimeout(() => {
      setSpinning(false)
      onResult(winner)
    }, durationMs + 200)
  }

  return (
    <section className="roulette">
      <div className="wheel-wrap">
        <div className="pointer" aria-hidden />
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? 'transform 5s cubic-bezier(0.12, 0.8, 0.08, 1)'
              : 'none',
          }}
        >
          {sectors.map(({ gym, start, end, mid, color }) => {
            // ラベルは中心→外周の放射方向に配置。左半分は 180° 反転して上下逆さを防ぐ
            const flip = mid > 180
            const labelPos = polar(mid, RADIUS * 0.93)
            const angle = mid - 90 + (flip ? 180 : 0)
            return (
              <g key={gym.id}>
                <path d={sectorPath(start, end)} fill={color} stroke="#fff" strokeWidth="2" />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  className="wheel-label"
                  textAnchor={flip ? 'start' : 'end'}
                  transform={`rotate(${angle}, ${labelPos.x}, ${labelPos.y})`}
                >
                  {gym.name.length > 12 ? gym.name.slice(0, 11) + '…' : gym.name}
                </text>
              </g>
            )
          })}
          <circle cx={CENTER} cy={CENTER} r={26} fill="#fff" stroke="#ddd" />
          <text x={CENTER} y={CENTER + 7} className="wheel-center">
            🧗
          </text>
        </svg>
      </div>

      <div className="roulette-actions">
        <button className="btn btn-primary btn-spin" onClick={spin} disabled={spinning}>
          {spinning ? '回転中…' : '回す!'}
        </button>
        <button className="btn btn-ghost" onClick={onBack} disabled={spinning}>
          候補を選び直す
        </button>
      </div>
    </section>
  )
}
