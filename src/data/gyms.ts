export interface Gym {
  id: string
  name: string
  area: string
  url?: string
}

// 2026年7月時点で営業を確認済みの、都内で人気・メジャーなボルダリングジム
// (各ジムの公式サイト・SNSで営業状況を確認したうえで掲載)
export const DEFAULT_GYMS: Gym[] = [
  {
    id: 'bpump-akihabara',
    name: 'B-PUMP TOKYO 秋葉原',
    area: '秋葉原・御茶ノ水',
    url: 'https://pump-climbing.com/gym/akiba/',
  },
  {
    id: 'bpump-ogikubo',
    name: 'B-PUMP OGIKUBO',
    area: '荻窪',
    url: 'https://pump-climbing.com/gym/bpump/',
  },
  {
    id: 'pekipeki-shibuya',
    name: 'PEKIPEKI 渋谷明治通り本店',
    area: '渋谷',
    url: 'https://www.pekipeki.jp/shibuya/',
  },
  {
    id: 'beta-akebonobashi',
    name: 'BETA クライミングジム',
    area: '曙橋',
    url: 'https://beta-climbing.com/',
  },
  {
    id: 'rocky-shinagawa',
    name: 'Rocky 品川店',
    area: '品川',
    url: 'https://www.rockyclimbing.com/shinagawa/',
  },
  {
    id: 'noborock-takadanobaba',
    name: 'NOBOROCK 高田馬場店',
    area: '高田馬場',
    url: 'https://noborock-climbing.com/program/takadanobaba/',
  },
  {
    id: 'rocklands-kasai',
    name: 'ROCKLANDS',
    area: '葛西',
    url: 'https://www.climbinggymrocklands.com/',
  },
  {
    id: 'granny-higashiueno',
    name: 'ボルダリングジム グラニー',
    area: '東上野',
    url: 'https://granny-ueno.com/',
  },
  {
    id: 'twall-kinshicho',
    name: 'T-WALL 錦糸町店',
    area: '錦糸町',
    url: 'https://twall.jp/',
  },
  {
    id: 'escalade-shinjuku',
    name: 'エスカラード クライミングジム',
    area: '西新宿',
    url: 'https://escalade-climbing.com/',
  },
]
