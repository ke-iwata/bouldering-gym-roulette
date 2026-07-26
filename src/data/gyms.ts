export interface Gym {
  id: string
  name: string
  area: string
  url?: string
  chain?: string
}

// 系列ごとのアクセントカラー(一覧のグルーピング表示に使用)
export const CHAIN_COLORS: Record<string, string> = {
  PUMP: '#ef476f',
  Rocky: '#f7822b',
  'Base Camp': '#118ab2',
  'Fish and Bird': '#06a77d',
  NOBOROCK: '#6a4c93',
}

export const CUSTOM_CHAIN = '追加したジム'
export const CUSTOM_CHAIN_COLOR = '#5f6b85'

// 2026年7月時点で各系列の公式サイトの店舗一覧から確認した、都内の店舗
// (Rocky / Base Camp / PUMP / Fish and Bird / NOBOROCK の5系列)
export const DEFAULT_GYMS: Gym[] = [
  // PUMP系列 (pump-climbing.com)
  {
    id: 'pump-bpump-akihabara',
    name: 'B-PUMP TOKYO 秋葉原',
    area: '秋葉原・御茶ノ水',
    url: 'https://pump-climbing.com/gym/akiba/',
    chain: 'PUMP',
  },
  {
    id: 'pump-bpump-ogikubo',
    name: 'B-PUMP OGIKUBO',
    area: '荻窪',
    url: 'https://pump-climbing.com/gym/bpump/',
    chain: 'PUMP',
  },

  // Rocky系列 (rockyclimbing.com)
  {
    id: 'rocky-shinagawa',
    name: 'Rocky 品川店',
    area: '品川',
    url: 'https://www.rockyclimbing.com/shinagawa',
    chain: 'Rocky',
  },
  {
    id: 'rocky-shinjuku-akebonobashi',
    name: 'Rocky 新宿曙橋店',
    area: '曙橋',
    url: 'https://www.rockyclimbing.com/shinjukuakebonobashi',
    chain: 'Rocky',
  },
  {
    id: 'rocky-ryogoku',
    name: 'Rocky 両国店',
    area: '両国',
    url: 'https://www.rockyclimbing.com/ryougoku/',
    chain: 'Rocky',
  },

  // Base Camp系列 (b-camp.jp)
  {
    id: 'basecamp-shinjuku',
    name: 'Urban Base Camp 新宿',
    area: '新宿',
    url: 'https://b-camp.jp/shinjuku/',
    chain: 'Base Camp',
  },
  {
    id: 'basecamp-shinbashi',
    name: 'Urban Base Camp 新橋',
    area: '新橋',
    url: 'https://b-camp.jp/shinbashi/',
    chain: 'Base Camp',
  },
  {
    id: 'basecamp-edogawabashi',
    name: 'Base Camp Tokyo 江戸川橋',
    area: '江戸川橋',
    url: 'https://b-camp.jp/edogawabashi/',
    chain: 'Base Camp',
  },
  {
    id: 'basecamp-kinshicho',
    name: 'Base Camp Tokyo 錦糸町',
    area: '錦糸町',
    url: 'https://b-camp.jp/kinshicho/',
    chain: 'Base Camp',
  },
  {
    id: 'basecamp-higashimurayama',
    name: 'Boulder Park Base Camp 東村山',
    area: '東村山',
    url: 'https://b-camp.jp/higashimurayama/',
    chain: 'Base Camp',
  },

  // Fish and Bird系列 (fish-bird.co.jp)
  {
    id: 'fab-toyocho',
    name: 'Fish and Bird 東陽町',
    area: '東陽町',
    url: 'https://fish-bird.co.jp/fishandbird/',
    chain: 'Fish and Bird',
  },
  {
    id: 'fab-rhino-nippori',
    name: 'Rhino and Bird 日暮里',
    area: '日暮里',
    url: 'https://www.rhino-bird.com/',
    chain: 'Fish and Bird',
  },

  // NOBOROCK系列 (noborock-climbing.com)
  {
    id: 'noborock-shinjuku',
    name: 'NOBOROCK 新宿店',
    area: '新宿',
    url: 'https://noborock-climbing.com/program/%e6%96%b0%e5%ae%bf%e5%ba%97/',
    chain: 'NOBOROCK',
  },
  {
    id: 'noborock-asakusa',
    name: 'NOBOROCK 浅草店',
    area: '浅草',
    url: 'https://noborock-climbing.com/program/%e6%b5%85%e8%8d%89%e5%ba%97/',
    chain: 'NOBOROCK',
  },
  {
    id: 'noborock-takadanobaba',
    name: 'NOBOROCK 高田馬場店',
    area: '高田馬場',
    url: 'https://noborock-climbing.com/program/takadanobaba/',
    chain: 'NOBOROCK',
  },
  {
    id: 'noborock-shibuya',
    name: 'NOBOROCK 渋谷店',
    area: '渋谷',
    url: 'https://noborock-climbing.com/program/shibuya/',
    chain: 'NOBOROCK',
  },
  {
    id: 'noborock-ikebukuro',
    name: 'NOBOROCK 池袋店',
    area: '池袋',
    url: 'https://noborock-climbing.com/program/ikebukuro/',
    chain: 'NOBOROCK',
  },
  {
    id: 'noborock-machida',
    name: 'NOBOROCK 町田店',
    area: '町田',
    url: 'https://noborock-climbing.com/program/machida/',
    chain: 'NOBOROCK',
  },
]
