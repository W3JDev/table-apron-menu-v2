import { Language, MenuItem } from '../types/menu';

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'th', name: 'Thai', nativeName: 'ภาษาไทย' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: {
      en: "Prosperity Yee Sang",
      zh: "发财鱼生",
      vi: "Gỏi cá hồi thịnh vượng",
      ms: "Yee Sang Kemakmuran"
    },
    description: {
      en: "Cold smoked salmon, cherry compote, murabba, coconut flakes, sengkuang, pomegranate, alam raja, beetroot, lettuce, carrots, white radish, bunga kantan, kaffir lime leaf, pickles, peanut crumbs and more",
      zh: "冷熏三文鱼配各种配料",
      vi: "Cá hồi hun khói lạnh, mứt anh đào, mứt hoa hồng, vụn dừa, củ sắn, lựu...",
      ms: "Salmon salai sejuk dengan pelbagai bahan"
    },
    price: 118,
    pax: "6-8",
    allergens: ['nuts', 'seafood', 'raw'],
    dietary: ['sharing'],
    isSpicy: false,
    isPopular: true,
    servingNote: "feeds 6-8 pax"
  },
  // Add the rest of the menu items here
];

export const dietaryFilters = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'halal', label: 'Halal' },
  { id: 'glutenFree', label: 'Gluten Free' },
  { id: 'dairyFree', label: 'Dairy Free' },
  { id: 'nutFree', label: 'Nut Free' },
  { id: 'noSpicy', label: 'No Spicy' },
  { id: 'noCoriander', label: 'No Coriander' },
  { id: 'noAlcohol', label: 'No Alcohol' },
  { id: 'pregnancy', label: 'Pregnancy Safe' }
];