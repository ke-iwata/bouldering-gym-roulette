export interface Gym {
  id: string
  name: string
  area: string
}

// 都内(および近郊)の主要ボルダリングジム
export const DEFAULT_GYMS: Gym[] = [
  { id: 'bpump-akihabara', name: 'B-PUMP TOKYO 秋葉原', area: '秋葉原' },
  { id: 'bpump-ogikubo', name: 'B-PUMP 荻窪', area: '荻窪' },
  { id: 'rocky-shinagawa', name: 'Rocky 品川', area: '品川' },
  { id: 'rocky-akebonobashi', name: 'Rocky 新宿曙橋', area: '曙橋' },
  { id: 'noborock-takadanobaba', name: 'NOBOROCK 高田馬場', area: '高田馬場' },
  { id: 'noborock-machida', name: 'NOBOROCK 町田', area: '町田' },
  { id: 'energy-koenji', name: 'クライミングジムエナジー 高円寺', area: '高円寺' },
  { id: 'twall-kinshicho', name: 'T-WALL 錦糸町', area: '錦糸町' },
  { id: 'pekipeki-shibuya', name: 'PEKIPEKI 渋谷', area: '渋谷' },
  { id: 'fishandbird-toyocho', name: 'Fish and Bird 東陽町', area: '東陽町' },
  { id: 'gravity-shinjuku', name: 'GRAVITY RESEARCH 新宿', area: '新宿' },
  { id: 'basecamp-iriya', name: 'BaseCamp 入谷', area: '入谷' },
  { id: 'apex-nakano', name: 'APEX CLIMBING GYM 新中野', area: '新中野' },
  { id: 'folk-oimachi', name: 'folkstone climbing 大井町', area: '大井町' },
  { id: 'dogwood-sakuragaoka', name: 'CLIMBING GYM DOGWOOD 調布', area: '調布' },
]
