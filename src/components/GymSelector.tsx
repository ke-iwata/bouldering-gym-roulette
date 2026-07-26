import { useState, type CSSProperties } from 'react'
import {
  CHAIN_COLORS,
  CUSTOM_CHAIN,
  CUSTOM_CHAIN_COLOR,
  type Gym,
} from '../data/gyms'

interface Props {
  gyms: Gym[]
  selectedIds: string[]
  onToggle: (id: string) => void
  onSelectAll: () => void
  onDeselectAll: () => void
  onAddGym: (name: string, area: string) => void
  onRemoveGym: (id: string) => void
  customGymIds: Set<string>
  onConfirm: () => void
}

interface Section {
  chain: string
  color: string
  gyms: Gym[]
}

export default function GymSelector({
  gyms,
  selectedIds,
  onToggle,
  onSelectAll,
  onDeselectAll,
  onAddGym,
  onRemoveGym,
  customGymIds,
  onConfirm,
}: Props) {
  const [newName, setNewName] = useState('')
  const [newArea, setNewArea] = useState('')

  const selected = new Set(selectedIds)
  const canConfirm = selectedIds.length >= 2

  const sections: Section[] = []
  for (const gym of gyms) {
    const chain = gym.chain ?? CUSTOM_CHAIN
    let section = sections.find((s) => s.chain === chain)
    if (!section) {
      section = {
        chain,
        color: CHAIN_COLORS[chain] ?? CUSTOM_CHAIN_COLOR,
        gyms: [],
      }
      sections.push(section)
    }
    section.gyms.push(gym)
  }

  const handleAdd = () => {
    const name = newName.trim()
    if (!name) return
    onAddGym(name, newArea.trim())
    setNewName('')
    setNewArea('')
  }

  return (
    <section className="selector">
      <div className="selector-header">
        <h2>ジム候補を選ぶ</h2>
        <div className="selector-actions">
          <button className="btn btn-ghost" onClick={onSelectAll}>
            すべて選択
          </button>
          <button className="btn btn-ghost" onClick={onDeselectAll}>
            すべて解除
          </button>
        </div>
      </div>

      {sections.map(({ chain, color, gyms: chainGyms }) => {
        const count = chainGyms.filter((g) => selected.has(g.id)).length
        return (
          <div
            key={chain}
            className="chain-section"
            style={{ '--chain': color } as CSSProperties}
          >
            <div className="chain-header">
              <span className="chain-dot" aria-hidden />
              <span className="chain-name">{chain}</span>
              <span className="chain-count">
                {count}/{chainGyms.length}
              </span>
            </div>
            <div className="chip-grid">
              {chainGyms.map((gym) => {
                const checked = selected.has(gym.id)
                return (
                  <button
                    key={gym.id}
                    type="button"
                    className={`gym-chip ${checked ? 'checked' : ''}`}
                    aria-pressed={checked}
                    onClick={() => onToggle(gym.id)}
                  >
                    <span className="chip-check" aria-hidden>
                      ✓
                    </span>
                    <span className="chip-name">{gym.name}</span>
                    <span className="chip-area">{gym.area}</span>
                    {customGymIds.has(gym.id) && (
                      <span
                        className="chip-remove"
                        role="button"
                        title="このジムを削除"
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemoveGym(gym.id)
                        }}
                      >
                        ×
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="add-gym">
        <input
          type="text"
          placeholder="ジム名を追加(例: マイジム)"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <input
          type="text"
          className="add-gym-area"
          placeholder="エリア(任意)"
          value={newArea}
          onChange={(e) => setNewArea(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button className="btn" onClick={handleAdd} disabled={!newName.trim()}>
          追加
        </button>
      </div>

      <div className="confirm-bar">
        <span className="confirm-count">{selectedIds.length} 件選択中</span>
        <button className="btn btn-primary" onClick={onConfirm} disabled={!canConfirm}>
          {canConfirm ? '候補を確定してルーレットへ' : '2件以上選んでください'}
        </button>
      </div>
    </section>
  )
}
