export interface Gym {
  id: string
  name: string
  area: string
  url?: string
}

// 2026年7月時点で各系列の公式サイトの店舗一覧から確認した、都内の店舗
// (Rocky / Base Camp / PUMP / Fish and Bird / NOBOROCK の5系列)
export const DEFAULT_GYMS: Gym[] = [
  // PUMP系列 (pump-climbing.com)
  {
    id: 'pump-bpump-akihabara',
    name: 'B-PUMP TOKYO 秋葉原',
    area: '秋葉原・御茶ノ水',
    url: 'https://pump-climbing.com/gym/akiba/',
  },
  {
    id: 'pump-bpump-ogikubo',
    name: 'B-PUMP OGIKUBO',
    area: '荻窪',
    url: 'https://pump-climbing.com/gym/bpump/',
  },

  // Rocky系列 (rockyclimbing.com)
  {
    id: 'rocky-shinagawa',
    name: 'Rocky 品川店',
    area: '品川',
    url: 'https://www.rockyclimbing.com/shinagawa',
  },
  {
    id: 'rocky-shinjuku-akebonobashi',
    name: 'Rocky 新宿曙橋店',
    area: '曙橋',
    url: 'https://www.rockyclimbing.com/shinjukuakebonobashi',
  },
  {
    id: 'rocky-ryogoku',
    name: 'Rocky 両国店',
    area: '両国',
    url: 'https://www.rockyclimbing.com/ryougoku/',
  },

  // Base Camp系列 (b-camp.jp)
  {
    id: 'basecamp-shinjuku',
    name: 'Urban Base Camp 新宿',
    area: '新宿',
    url: 'https://b-camp.jp/shinjuku/',
  },
  {
    id: 'basecamp-shinbashi',
    name: 'Urban Base Camp 新橋',
    area: '新橋',
    url: 'https://b-camp.jp/shinbashi/',
  },
  {
    id: 'basecamp-edogawabashi',
    name: 'Base Camp Tokyo 江戸川橋',
    area: '江戸川橋',
    url: 'https://b-camp.jp/edogawabashi/',
  },
  {
    id: 'basecamp-kinshicho',
    name: 'Base Camp Tokyo 錦糸町',
    area: '錦糸町',
    url: 'https://b-camp.jp/kinshicho/',
  },
  {
    id: 'basecamp-higashimurayama',
    name: 'Boulder Park Base Camp 東村山',
    area: '東村山',
    url: 'https://b-camp.jp/higashimurayama/',
  },

  // Fish and Bird系列 (fish-bird.co.jp)
  {
    id: 'fab-toyocho',
    name: 'Fish and Bird 東陽町',
    area: '東陽町',
    url: 'https://fish-bird.co.jp/fishandbird/',
  },
  {
    id: 'fab-rhino-nippori',
    name: 'Rhino and Bird 日暮里',
    area: '日暮里',
    url: 'https://www.rhino-bird.com/',
  },

  // NOBOROCK系列 (noborock-climbing.com)
  {
    id: 'noborock-shinjuku',
    name: 'NOBOROCK 新宿店',
    area: '新宿',
    url: 'https://noborock-climbing.com/program/%e6%96%b0%e5%ae%bf%e5%ba%97/',
  },
  {
    id: 'noborock-asakusa',
    name: 'NOBOROCK 浅草店',
    area: '浅草',
    url: 'https://noborock-climbing.com/program/%e6%b5%85%e8%8d%89%e5%ba%97/',
  },
  {
    id: 'noborock-takadanobaba',
    name: 'NOBOROCK 高田馬場店',
    area: '高田馬場',
    url: 'https://noborock-climbing.com/program/takadanobaba/',
  },
  {
    id: 'noborock-shibuya',
    name: 'NOBOROCK 渋谷店',
    area: '渋谷',
    url: 'https://noborock-climbing.com/program/shibuya/',
  },
  {
    id: 'noborock-ikebukuro',
    name: 'NOBOROCK 池袋店',
    area: '池袋',
    url: 'https://noborock-climbing.com/program/ikebukuro/',
  },
  {
    id: 'noborock-machida',
    name: 'NOBOROCK 町田店',
    area: '町田',
    url: 'https://noborock-climbing.com/program/machida/',
  },
]
