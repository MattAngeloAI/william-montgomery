export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  compare_at_price: number | null;
  images: string[];
  category: "apparel" | "accessories" | "digital" | "other";
  sizes: string[] | null;
  in_stock: boolean;
  stripe_price_id: string | null;
  url: string | null;
  sort_order: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string | null;
}
