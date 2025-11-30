// 宝石类型定义
export interface Gem {
  id: string;
  name: string;
  imageUrl: string;
  time: string;
  description: string;
}

// 公共gems数据数组
export const gems: Gem[] = [
  {
    id: '1',
    name: 'KUNZITE',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/20249416426297.jpg',
    time: '2024-09-04 16:04:31',
    description: 'Kunzite is the best-known variety of the mineral spodumene. It\'s named after famed gemologist Gege Frederick Kunz, who was the first to identify it as a unique variety of spodumene. Kunzite gets its delicate col from trace amounts of manganese. Califnia\'s San Diego County is an imptant source of kunzite.'
  },
  {
    id: '2',
    name: 'AQUAMARINE',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202494155953991.jpg',
    time: '2024-09-04 15:59:58',
    description: 'Aquamarine\'s name comes from the Latin f seawater it was said to calm waves keep sails safe at sea. March\'s birthstone was also thought to enhance the happiness of marriages. The best gems combine high clarity with limpid transparency blue to slightly greenish blue hues. Like many beryls, aquamarine fms large crystals suitable f sizable fashioned gems carvings.'
  },
  {
    id: '3',
    name: 'EMERALD',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202494154439784.jpg',
    time: '2024-09-04 15:44:45',
    description: 'Gem experts differ on the degree of green that makes one stone an emerald another stone a less-expensive green beryl. Most gemologists, gemological labaties, coled stone dealers call a stone green beryl when its col is "too light" f it to be classified as emerald. Even among that group, however, there\'s a difference of opinion about what\'s considered "too light."'
  },
  {
    id: '4',
    name: 'CITRINE',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202494152820979.jpg',
    time: '2024-09-04 15:44:45',
    description: 'Citrine is rare in nature. In the days befe modern gemology, its tawny col caused it to be confused with topaz. Today, its attractive col, plus the durability affdability it shares with most other quartzes, makes it the top-selling yellow-to-ange gem. In the contempary market, citrine\'s most popular shade is an earthy, deep, brownish reddish ange.'
  },
  {
    id: '5',
    name: 'DIAMOND',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202494151758576.jpg',
    time: '2024-09-04 15:18:36',
    description: 'Diamond fms under high temperature pressure conditions that exist only about 100 miles beneath the earths surface. Diamonds carbon atoms are bonded in essentially the same way in all directions. Another mineral, graphite, also contain'
  },
  {
    id: '6',
    name: 'KUNZITE',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202042153624803.png',
    time: '2020-04-02 15:36:30',
    description: 'Kunzite is the best-known variety of the mineral spodumene. It\'s named after famed gemologist Gege Frederick Kunz, who was the first to identify it as a unique variety of spodumene. Kunzite gets its delicate col from trace amounts of manganese. Califnia\'s San Diego County is an imptant source of kunzite.'
  },
  {
    id: '7',
    name: 'ALEXANDRITE',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202042153556712.png',
    time: '2020-04-02 15:36:03',
    description: 'Often described by gem aficionados as "emerald by day, ruby by night," alexrite is the very rare col-change variety of the mineral chrysoberyl. iginally discovered in Russia\'s Ural Mountains in the 1830s, it\'s now found in Sri Lanka, East Africa,  Brazil, but fine material is exceptionally rare  valuable.'
  },
  {
    id: '8',
    name: 'CITRINE',
    imageUrl: 'http://www.gramoissanite.net/UploadFile/202042153527487.png',
    time: '2020-04-02 15:35:42',
    description: 'Citrine is rare in nature. In the days befe modern gemology, its tawny col caused it to be confused with topaz. Today, its attractive col, plus the durability  affdability it shares with most other quartzes, makes it the top-selling yellow-to-ange gem. In the contempary market, citrine\'s most popular shade is an earthy, deep, brownish  reddish ange.'
  }
];

// 根据ID获取宝石详情的工具函数
export const getGemById = (id: string): Gem | undefined => {
  return gems.find(gem => gem.id === id);
};

// 获取所有轮播图片
export const getBannerImages = (): string[] => {
  // assets/img 目录下的图片文件名
  const bannerImages = [
    "jewelry1.jpg",
    "jewelry2.jpg",
    "jewelry3.jpg",
    "jewelry4.jpg",
    "jewelry5.jpg",
    "jewelry6.jpg"
  ];
  
  // 使用new URL()确保Vite能正确打包图片资源
  return bannerImages.map(image => {
    try {
      return new URL(`/src/assets/img/${image}`, import.meta.url).href;
    } catch (error) {
      console.error(`Error loading image ${image}:`, error);
      return `/src/assets/img/${image}`; // 回退到原始路径
    }
  });
};

// 获取固定的顶部背景图
export const getRandomBannerImage = (pageType?: string): string => {
  // assets/img 目录下的图片文件名
  const bannerImages = [
    "jewelry1.jpg",
    "jewelry2.jpg",
    "jewelry3.jpg",
    "jewelry4.jpg",
    "jewelry5.jpg",
    "jewelry6.jpg"
  ];
  
  // 根据页面类型返回固定的图片
  let imageIndex: number;
  switch (pageType) {
    case 'home':
      imageIndex = 0; // 固定使用第一张图片
      break;
    case 'featured':
      imageIndex = 1; // 固定使用第二张图片
      break;
    case 'featuredDetail':
      imageIndex = 2; // 固定使用第三张图片
      break;
    case 'about':
      imageIndex = 3; // 固定使用第四张图片
      break;
    case 'news':
      imageIndex = 4; // 固定使用第五张图片
      break;
    case 'newsDetail':
      imageIndex = 4; // 与news页面使用同一张图片
      break;
    case 'contact':
      imageIndex = 5; // 固定使用第六张图片
      break;
    default:
      imageIndex = 0; // 默认使用第一张图片
  }
  
  // 使用new URL()确保Vite能正确打包图片资源
  try {
    return new URL(`/src/assets/img/${bannerImages[imageIndex]}`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${bannerImages[imageIndex]}:`, error);
    return `/src/assets/img/${bannerImages[imageIndex]}`; // 回退到原始路径
  }
};
