import { Book } from '@/app/models/Book'

const testBooks: Book[] = [
  {
    id: 1,
    title: '君の名は。',
    author: '新海誠',
    isbn: '978-4063536659',
    publisher: '角川書店',
    publishedDate: '2016-06-18',
    description:
      '長野県の山間の町に残された神秘的な儀式とつながる、不思議な運命を描いた青春ファンタジー。',
    coverImage: 'kimi-no-na-wa.jpg',
  },
  {
    id: 2,
    title: 'ハリー・ポッターと賢者の石',
    author: 'J.K.ローリング',
    isbn: '978-4265036068',
    publisher: '静山社',
    publishedDate: '1999-07-01',
    description:
      '魔法使いの世界を舞台に、ハリー・ポッターと仲間たちの冒険を描いたファンタジー小説。',
    coverImage: 'harry-potter-1.jpg',
  },
  {
    id: 3,
    title: '銀河鉄道の夜',
    author: '宮沢賢治',
    isbn: '978-4103272018',
    publisher: '新潮社',
    publishedDate: '1989-03-18',
    description:
      '宮沢賢治の代表的な童話作品。宇宙の広がりを背景に、少年ジョバンニの冒険を描く。',
    coverImage: 'ginga-tetsudo-no-yoru.jpg',
  },
  {
    id: 4,
    title: '百年の孤独',
    author: 'ガブリエル・ガルシア・マルケス',
    isbn: '978-4105018013',
    publisher: '新潮社',
    publishedDate: '1972-06-20',
    description:
      'マジックリアリズム小説の代表作。ブエンディア家の七代にわたる盛衰を描く。',
    coverImage: 'cien-anos-de-soledad.jpg',
  },
  {
    id: 5,
    title: 'アリス・イン・ワンダーランド',
    author: 'ルイス・キャロル',
    isbn: '978-4003311598',
    publisher: '岩波書店',
    publishedDate: '2000-11-28',
    description:
      '不思議の国を冒険するアリスの物語。ナンセンスな世界観が魅力の児童文学の古典。',
    coverImage: 'alice-in-wonderland.jpg',
  },
  {
    id: 6,
    title: '時計じかけのオレンジ',
    author: 'アンソニー・バージェス',
    isbn: '978-4101347215',
    publisher: '新潮社',
    publishedDate: '1972-03-25',
    description:
      '近未来の英国を舞台に、暴力的な青年集団の行動と矯正プログラムを描いたSF小説。',
    coverImage: 'a-clockwork-orange.jpg',
  },
  {
    id: 7,
    title: '1Q84',
    author: '村上春樹',
    isbn: '978-4103635171',
    publisher: '新潮社',
    publishedDate: '2009-05-28',
    description:
      '二つの月が存在する1984年の東京を舞台に、男女の運命が交差するファンタジー長編小説。',
    coverImage: '1q84.jpg',
  },
  {
    id: 8,
    title: '老人と海',
    author: 'アーネスト・ヘミングウェイ',
    isbn: '978-4101338214',
    publisher: '新潮社',
    publishedDate: '1954-09-01',
    description:
      'キューバの漁師の老人が大物の魚と戦う姿を描いた小説。人間の尊厳と力強さを表現している。',
    coverImage: 'the-old-man-and-the-sea.jpg',
  },
  {
    id: 9,
    title: '人間失格',
    author: '太宰治',
    isbn: '978-4101308038',
    publisher: '新潮社',
    publishedDate: '1948-06-05',
    description:
      '自己嫌悪と倦怠感に苛まれる主人公の葛藤を描いた自伝的小説。太宰治の代表作。',
    coverImage: 'ningen-shikkaku.jpg',
  },
  {
    id: 10,
    title: '源氏物語',
    author: '紫式部',
    isbn: '978-4003410919',
    publisher: '岩波書店',
    publishedDate: '2003-05-23',
    description:
      '日本文学の古典。朝顔、若紫、浮舟など光源氏の数々の恋愛模様を描いた長編物語。',
    coverImage: 'genji-monogatari.jpg',
  },
  {
    id: 11,
    title: '涼宮ハルヒの憂鬱',
    author: '谷川流',
    isbn: '978-4048677017',
    publisher: '角川書店',
    publishedDate: '2003-06-20',
    description:
      'クセの強い少女ハルヒと彼女に振り回される仲間たちのユーモア溢れる学園物語。',
    coverImage: 'suzumiya-haruhi.jpg',
  },
  {
    id: 12,
    title: 'ロビン・フッド',
    author: 'ハワード・パイル',
    isbn: '978-4062871991',
    publisher: '講談社',
    publishedDate: '2017-09-11',
    description:
      'ロビン・フッドとその盟友たちが、王侯貴族から収奪した富を庶民に分け与えるお話。',
    coverImage: 'robin-hood.jpg',
  },
  {
    id: 13,
    title: 'ロミオとジュリエット',
    author: 'ウィリアム・シェイクスピア',
    isbn: '978-4062782331',
    publisher: '講談社',
    publishedDate: '2013-06-20',
    description:
      'モンタギュー家とキャピュレット家の確執の中で、ロミオとジュリエットが燃え上がる禁じ愛を描いた古典。',
    coverImage: 'romeo-and-juliet.jpg',
  },
  {
    id: 14,
    title: '〆切までに終わらない話',
    author: '村田沙耶香',
    isbn: '978-4040696189',
    publisher: '講談社',
    publishedDate: '2021-04-16',
    description:
      '仕事での出会いや別れ、恋愛や夢を描いた短編集。女性の生き方や人間関係を描く。',
    coverImage: 'shimekiri-made-ni-owaranai-hanashi.jpg',
  },
  {
    id: 15,
    title: 'ドラゴンボール',
    author: '鳥山明',
    isbn: '978-4088775991',
    publisher: '集英社',
    publishedDate: '1984-12-03',
    description:
      '孫悟空の冒険を描いたバトル漫画の代表作。長期間にわたり人気を博した。',
    coverImage: 'dragon-ball.jpg',
  },
  {
    id: 16,
    title: 'ワンピース',
    author: '尾田栄一郎',
    isbn: '978-4088725148',
    publisher: '集英社',
    publishedDate: '1997-07-22',
    description:
      '海賊王を目指す者たちの冒険を描いた、長期連載の冒険漫画の人気作品。',
    coverImage: 'one-piece.jpg',
  },
  {
    id: 17,
    title: '富岳百景',
    author: '川端康成',
    isbn: '978-4101277039',
    publisher: '新潮社',
    publishedDate: '2002-05-10',
    description:
      '富士山の景観を題材にした短編集。川端文学の特徴である繊細な自然描写と人物の内面描写が光る。',
    coverImage: 'tomikura-hyakkei.jpg',
  },
  {
    id: 18,
    title: 'スタートレック',
    author: 'ジーン・ロデンベリー',
    isbn: '978-4101375561',
    publisher: '新潮社',
    publishedDate: '1979-07-20',
    description:
      '宇宙船エンタープライズのクルーたちの冒険を描いた、SF作品の金字塔。',
    coverImage: 'star-trek.jpg',
  },
  {
    id: 19,
    title: '星の王子さま',
    author: 'アントワーヌ・ド・サント=エクジュペリ',
    isbn: '978-4102110019',
    publisher: '新潮社',
    publishedDate: '1943-04-06',
    description:
      '砂漠に不時着した飛行士が出会った、小さな王子さまの物語を通して、大人になると忘れがちな心の大切さを教える。',
    coverImage: 'le-petit-prince.jpg',
  },
  {
    id: 20,
    title: '吾輩は猫である',
    author: '夏目漱石',
    isbn: '978-4101360216',
    publisher: '新潮社',
    publishedDate: '1905-01-01',
    description: '猫の視点から人間社会を皮肉たっぷりに描いた、漱石の代表作。',
    coverImage: 'wagahai-wa-neko-de-aru.jpg',
  },
  {
    id: 21,
    title: 'ファウスト',
    author: 'ヨハン・ヴォルフガング・フォン・ゲーテ',
    isbn: '978-4003331339',
    publisher: '岩波書店',
    publishedDate: '1987-04-20',
    description:
      'ファウストという人物が悪魔メフィストフェレスと契約して得た知識と享楽の代償を描く。',
    coverImage: 'faust.jpg',
  },
  {
    id: 22,
    title: '虐殺器官',
    author: '伊藤計劃',
    isbn: '978-4101356214',
    publisher: '新潮社',
    publishedDate: '2014-02-22',
    description:
      '人体を解体・改造する"無力化児童搬送戦士"が活躍するダーク・ヒューモア作品。',
    coverImage: 'kurusagari-no-kikan.jpg',
  },
  {
    id: 23,
    title: 'ファーレンハイト451',
    author: 'レイ・ブラッドベリ',
    isbn: '978-4101340217',
    publisher: '新潮社',
    publishedDate: '1954-10-19',
    description:
      '思想統制と検閲が行き過ぎた近未来社会を描いたディストピア小説の古典。',
    coverImage: 'fahrenheit-451.jpg',
  },
  {
    id: 23,
    title: 'ファーレンハイト451',
    author: 'レイ・ブラッドベリ',
    isbn: '978-4101340217',
    publisher: '新潮社',
    publishedDate: '1954-10-19',
    description:
      '思想統制と検閲が行き過ぎた近未来社会を描いたディストピア小説の古典。',
    coverImage: 'fahrenheit-451.jpg',
  },
  {
    id: 23,
    title: 'ファーレンハイト451',
    author: 'レイ・ブラッドベリ',
    isbn: '978-4101340217',
    publisher: '新潮社',
    publishedDate: '1954-10-19',
    description:
      '思想統制と検閲が行き過ぎた近未来社会を描いたディストピア小説の古典。',
    coverImage: 'fahrenheit-451.jpg',
  },
  {
    id: 23,
    title: 'ファーレンハイト451',
    author: 'レイ・ブラッドベリ',
    isbn: '978-4101340217',
    publisher: '新潮社',
    publishedDate: '1954-10-19',
    description:
      '思想統制と検閲が行き過ぎた近未来社会を描いたディストピア小説の古典。',
    coverImage: 'fahrenheit-451.jpg',
  },
  {
    id: 23,
    title: 'ファーレンハイト451',
    author: 'レイ・ブラッドベリ',
    isbn: '978-4101340217',
    publisher: '新潮社',
    publishedDate: '1954-10-19',
    description:
      '思想統制と検閲が行き過ぎた近未来社会を描いたディストピア小説の古典。',
    coverImage: 'fahrenheit-451.jpg',
  },
  {
    id: 23,
    title: 'ファーレンハイト451',
    author: 'レイ・ブラッドベリ',
    isbn: '978-4101340217',
    publisher: '新潮社',
    publishedDate: '1954-10-19',
    description:
      '思想統制と検閲が行き過ぎた近未来社会を描いたディストピア小説の古典。',
    coverImage: 'fahrenheit-451.jpg',
  },
]
export const fetchBooks = (): Book[] => {
  return testBooks
}
