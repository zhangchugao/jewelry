import featured1 from '@/assets/featured/featured1.jpg';
import featured2 from '@/assets/featured/featured2.jpg';
import featured3 from '@/assets/featured/featured3.jpg';
import featured4 from '@/assets/featured/featured4.jpg';
import featured5 from '@/assets/featured/featured5.jpg';
import featured6 from '@/assets/featured/featured6.jpg';
import featured7 from '@/assets/featured/featured7.jpg';
import featured8 from '@/assets/featured/featured8.jpg';

// 静态导入所有banner图片
import jewelry1Png from '@/assets/img/jewelry1.png';
import jewelry1Jpg from '@/assets/img/jewelry1.jpg';
import jewelry2Png from '@/assets/img/jewelry2.png';
import jewelry2Jpg from '@/assets/img/jewelry2.jpg';
import jewelry3Png from '@/assets/img/jewelry3.png';
import jewelry3Jpg from '@/assets/img/jewelry3.jpg';
import jewelry4Png from '@/assets/img/jewelry4.png';
import jewelry4Jpg from '@/assets/img/jewelry4.jpg';

// 定义图片映射对象，方便根据设备类型选择图片
const bannerImageMap: Record<string, { png: string; jpg: string }> = {
  jewelry1: { png: jewelry1Png, jpg: jewelry1Jpg },
  jewelry2: { png: jewelry2Png, jpg: jewelry2Jpg },
  jewelry3: { png: jewelry3Png, jpg: jewelry3Jpg },
  jewelry4: { png: jewelry4Png, jpg: jewelry4Jpg },
};
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
    name: 'Ruby Necklace',
    imageUrl: featured1,
    time: '2024-09-04 16:04:31',
    description: 'This exquisite necklace features a cushion-cut Burmese pigeon-blood ruby, prized for its intense crimson hue, set in polished 18K rose gold. Delicate diamond tassels dangle from the main stone, adding subtle sparkle that catches the light at every turn. Perfect for black-tie galas or formal events, it blends timeless elegance with a touch of romantic drama, making it a standout accessory for special moments.'
  },
  {
    id: '2',
    name: 'Sapphire Ring',
    imageUrl: featured2,
    time: '2024-09-04 15:59:58',
    description: 'Crafted with a princess-cut Ceylon royal blue sapphire—known for its deep, vivid tone—this ring shines in a sleek platinum four-claw setting. Flanked by two trapezoid diamonds that enhance its brilliance, the design balances sophistication and simplicity. Ideal for professional settings or evening gatherings, it’s a versatile piece that exudes quiet luxury and refined taste.'
  },
  {
    id: '3',
    name: 'Diamond Earrings',
    imageUrl: featured3,
    time: '2024-09-04 15:44:45',
    description: 'These classic studs showcase round brilliant-cut South African diamonds, each 1.5 carats, set in 18K white gold prongs. The cut maximizes fire and sparkle, creating a luminous glow that complements any outfit. Timeless and versatile, they’re a staple for weddings, anniversaries, or everyday elegance, adding a touch of pure sophistication to every look.'
  },
  {
    id: '4',
    name: 'Amethyst Bracelet',
    imageUrl: featured4,
    time: '2024-09-04 15:44:45',
    description: 'This charming bracelet features grape-cluster-cut Uruguayan amethyst, with rich purple hues that feel both mysterious and elegant. Strung on rhodium-plated silver with tiny silver spacers, it offers a comfortable fit and subtle shine. Perfect for casual outings or office wear, it adds a pop of color without being overstated, blending bohemian charm with everyday practicality.'
  },
  {
    id: '5',
    name: 'Citrine Brooch',
    imageUrl: featured5,
    time: '2024-09-04 15:18:36',
    description: 'A vibrant lemon-drop-cut Brazilian citrine takes center stage in this 14K gold brooch, shaped like a delicate leaf. Small yellow diamond accents dot the edges, echoing the gem’s sunny hue. Symbolizing joy and abundance, it’s a versatile accessory—pin it to a blazer, scarf, or dress—to infuse any ensemble with warmth and energetic style.'
  },
  {
    id: '6',
    name: 'Topaz Bracelet',
    imageUrl: featured6,
    time: '2020-04-02 15:36:30',
    description: 'This stunning open-design bracelet features step-cut Swiss blue topaz stones, arranged in a gentle gradient from pale to deep sky blue. Set in polished 18K white gold, the gemstones resemble glistening glacier water, offering a cool, refreshing vibe. Lightweight and eye-catching, it’s the perfect summer accessory, elevating sundresses or casual linen looks with aquatic elegance.'
  },
  {
    id: '7',
    name: 'Peridot Earrings',
    imageUrl: featured7,
    time: '2020-04-02 15:36:03',
    description: 'These dainty earrings highlight oval-cut Egyptian peridot, with soft lime-green tones that evoke nature’s freshness. Set in 18K gold ear hooks, each gem is accented by tiny diamonds that add a subtle sparkle. Lightweight and comfortable for all-day wear, they’re ideal for beach getaways, garden parties, or adding a touch of verdant charm to everyday outfits.'
  },
  {
    id: '8',
    name: 'Morganite Pendant',
    imageUrl: featured8,
    time: '2020-04-02 15:35:42',
    description: 'This romantic pendant features a round-cut pink morganite, with a soft, blush hue that feels feminine and delicate. Crafted in rose gold with a intricate vine design, the setting wraps gently around the gem, enhancing its gentle glow. Suspended from a thin rose gold chain, it’s perfect for daily wear—adding a subtle pop of color and romantic flair to blouses, sweaters, or dresses.'
  }
];

// 根据ID获取宝石详情的工具函数
export const getGemById = (id: string): Gem | undefined => {
  return gems.find(gem => gem.id === id);
};

// 获取所有轮播图片
export const getBannerImages = (): string[] => {
  // 检测屏幕宽度，小于768px为移动设备
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // 移动设备使用小尺寸jpg图片，PC使用大尺寸png图片
  const imageFormat = isMobile ? 'jpg' : 'png';
  
  // 直接从映射对象中获取图片路径
  return [
    bannerImageMap.jewelry4[imageFormat],
    bannerImageMap.jewelry3[imageFormat],
    bannerImageMap.jewelry2[imageFormat],
    bannerImageMap.jewelry1[imageFormat],
  ];
};

// 获取固定的顶部背景图
export const getRandomBannerImage = (pageType?: string): string => {
  // 根据页面类型返回固定的图片名称
  let imageName: string;
  switch (pageType) {
    case 'home':
      imageName = 'jewelry1'; // 固定使用第一张图片
      break;
    case 'featured':
      imageName = 'jewelry3'; // 固定使用第三张图片
      break;
    case 'featuredDetail':
      imageName = 'jewelry3'; // 固定使用第三张图片
      break;
    case 'about':
      imageName = 'jewelry2'; // 固定使用第二张图片
      break;
    case 'news':
      imageName = 'jewelry4'; // 固定使用第四张图片
      break;
    case 'newsDetail':
      imageName = 'jewelry4'; // 与news页面使用同一张图片
      break;
    case 'contact':
      imageName = 'jewelry4'; // 固定使用第四张图片
      break;
    default:
      imageName = 'jewelry4'; // 默认使用第四张图片
  }
  
  // 检测屏幕宽度，小于768px为移动设备
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // 移动设备使用小尺寸jpg图片，PC使用大尺寸png图片
  const imageFormat = isMobile ? 'jpg' : 'png';
  
  // 直接从映射对象中获取图片路径
  return bannerImageMap[imageName][imageFormat];
};
