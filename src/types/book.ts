export interface Book {
  id: number;
  title: string;
  cover: string;
  description: string;
  genre: string;
  published: string;
  pages: number;
  rating: string;
  price: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order extends CheckoutFormData {
  orderId: string;
  items: CartItem[];
  total: number;
  date: string;
}
