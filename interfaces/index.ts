export interface Product {
  id: number;
  title: string;
  weight?: string;
  unit: string;
  categories: [Category];
  author?: string;
  images: [Gallery];
  description: string;
  price: number;
  category: Category;
  inStock?: number;
  image: string;
  quantity?: number;
  salePrice: number;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  parent: Category;
  children: [Category];
}
export interface Gallery {
  image: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface RadioDataType {
  id: number;
  title: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CardType {
  id: number;
  type: string;
  cardNumber: string;
  cardName: string;
  disabled?: boolean;
}

export interface PaymentOptionType {
  showCard?: boolean;
  addedCard?: CardType[];
  mobileWallet?: boolean;
  cashOnDelivery?: boolean;
}

export interface Progress {
  checked?: boolean;
  title: string;
  subtitle?: string;
}

export interface Coupon {
  id?: number;
  code?: string;
  discountInPercent?: number;
}
