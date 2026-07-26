import { useState } from 'react'
import type { Gym } from '../data/gyms'

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

      <ul className="gym-list">
        {gyms.map((gym) => {
          const checked = selected.has(gym.id)
          return (
            <li key={gym.id}>
              <label className={`gym-card ${checked ? 'checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(gym.id)}
                />
                <span className="gym-name">{gym.name}</span>
                {gym.area && <span className="gym-area">{gym.area}</span>}
                {customGymIds.has(gym.id) && (
                  <button
                    className="gym-remove"
                    title="このジムを削除"
                    onClick={(e) => {
                      e.preventDefault()
                      onRemoveGym(gym.id)
                    }}
                  >
                    ×
                  </button>
                )}
              </label>
            </li>
          )
        })}
      </ul>

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
          {canConfirm ? '候補を確定してルーレットへ 🎡' : '2件以上選んでください'}
        </button>
      </div>
    </section>
  )
}
