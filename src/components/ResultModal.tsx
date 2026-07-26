import type { Gym } from '../data/gyms'

interface Props {
  gym: Gym
  onRespin: () => void
  onBack: () => void
  onClose: () => void
}

export default function ResultModal({ gym, onRespin, onBack, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p className="modal-lead">🎉 明日行くジムは…</p>
        <p className="modal-gym">{gym.name}</p>
        {gym.area && <p className="modal-area">📍 {gym.area}</p>}
        <div className="modal-actions">
          <button className="btn btn-primary" onClick={onRespin}>
            もう一度回す
          </button>
          <button className="btn btn-ghost" onClick={onBack}>
            候補を選び直す
          </button>
        </div>
      </div>
    </div>
  )
}
