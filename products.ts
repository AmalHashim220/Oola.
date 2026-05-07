export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  category: string;
  categoryAr: string;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isTrending?: boolean;
  discount?: number;
}

export const categories = [
  { id: "all", name: "All", nameAr: "الكل" },
  { id: "skincare", name: "Skincare", nameAr: "العناية بالبشرة" },
  { id: "makeup", name: "Makeup", nameAr: "المكياج" },
  { id: "perfume", name: "Perfume", nameAr: "العطور" },
  { id: "haircare", name: "Haircare", nameAr: "العناية بالشعر" },
  { id: "bodycare", name: "Body Care", nameAr: "العناية بالجسم" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury Rose Serum",
    nameAr: "سيروم الورد الفاخر",
    description: "Premium rose extract serum for radiant skin",
    descriptionAr: "سيروم مستخلص الورد الفاخر لبشرة متألقة",
    price: 189,
    originalPrice: 249,
    category: "skincare",
    categoryAr: "العناية بالبشرة",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 234,
    isNew: true,
    isTrending: true,
    discount: 24,
  },
  {
    id: "2",
    name: "24K Gold Eye Cream",
    nameAr: "كريم العيون بالذهب",
    description: "Anti-aging eye cream with real gold particles",
    descriptionAr: "كريم مضاد للشيخوخة بجزيئات الذهب الحقيقي",
    price: 299,
    category: "skincare",
    categoryAr: "العناية بالبشرة",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 189,
    isTrending: true,
  },
  {
    id: "3",
    name: "Velvet Matte Lipstick",
    nameAr: "أحمر شفاه مخملي مات",
    description: "Long-lasting matte finish in luxurious shades",
    descriptionAr: "لمسة نهائية مطفية تدوم طويلاً بألوان فاخرة",
    price: 89,
    originalPrice: 119,
    category: "makeup",
    categoryAr: "المكياج",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 456,
    discount: 25,
  },
  {
    id: "4",
    name: "Midnight Oud Perfume",
    nameAr: "عطر العود الليلي",
    description: "Exotic oud fragrance for evening elegance",
    descriptionAr: "عطر عود غريب لأناقة المساء",
    price: 459,
    category: "perfume",
    categoryAr: "العطور",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 312,
    isNew: true,
    isTrending: true,
  },
  {
    id: "5",
    name: "Silk Hair Oil",
    nameAr: "زيت الشعر الحريري",
    description: "Nourishing hair oil for silky smooth results",
    descriptionAr: "زيت مغذي للشعر لنتائج حريرية ناعمة",
    price: 129,
    category: "haircare",
    categoryAr: "العناية بالشعر",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: "6",
    name: "Diamond Highlighter Palette",
    nameAr: "باليت الإضاءة الماسي",
    description: "Multi-shade highlighter for a stunning glow",
    descriptionAr: "إضاءة متعددة الألوان لتوهج مذهل",
    price: 149,
    originalPrice: 199,
    category: "makeup",
    categoryAr: "المكياج",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 289,
    isTrending: true,
    discount: 25,
  },
  {
    id: "7",
    name: "Royal Jasmine Body Lotion",
    nameAr: "لوشن الجسم بالياسمين الملكي",
    description: "Luxurious body lotion with jasmine essence",
    descriptionAr: "لوشن فاخر للجسم بخلاصة الياسمين",
    price: 99,
    category: "bodycare",
    categoryAr: "العناية بالجسم",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 145,
  },
  {
    id: "8",
    name: "Caviar Face Mask",
    nameAr: "قناع الكافيار للوجه",
    description: "Premium caviar-infused hydrating face mask",
    descriptionAr: "قناع وجه مرطب بالكافيار الفاخر",
    price: 219,
    category: "skincare",
    categoryAr: "العناية بالبشرة",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4ee7f3b?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 198,
    isNew: true,
  },
  {
    id: "9",
    name: "Amber Rose Perfume",
    nameAr: "عطر الورد العنبري",
    description: "Delicate blend of amber and rose notes",
    descriptionAr: "مزيج رقيق من نغمات العنبر والورد",
    price: 389,
    originalPrice: 459,
    category: "perfume",
    categoryAr: "العطور",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 267,
    discount: 15,
  },
  {
    id: "10",
    name: "Keratin Hair Mask",
    nameAr: "قناع الكيراتين للشعر",
    description: "Deep conditioning keratin treatment",
    descriptionAr: "علاج كيراتين ترطيب عميق",
    price: 159,
    category: "haircare",
    categoryAr: "العناية بالشعر",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 134,
  },
  {
    id: "11",
    name: "Foundation Luxe Pro",
    nameAr: "كريم أساس لوكس برو",
    description: "Full coverage foundation with SPF protection",
    descriptionAr: "كريم أساس بتغطية كاملة مع حماية من الشمس",
    price: 179,
    category: "makeup",
    categoryAr: "المكياج",
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 345,
    isTrending: true,
  },
  {
    id: "12",
    name: "Pearl Body Scrub",
    nameAr: "مقشر الجسم باللؤلؤ",
    description: "Gentle exfoliating scrub with pearl extract",
    descriptionAr: "مقشر لطيف بمستخلص اللؤلؤ",
    price: 119,
    originalPrice: 149,
    category: "bodycare",
    categoryAr: "العناية بالجسم",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 112,
    discount: 20,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.isTrending);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}
