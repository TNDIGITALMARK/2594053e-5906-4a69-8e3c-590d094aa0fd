"use client";

import { useCart } from '@/contexts/cart-context';
import { ShoppingCart } from 'lucide-react';

export function CartButton() {
  const { cartCount, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="fixed right-6 bottom-6 z-30 btn-gradient p-4 rounded-full shadow-2xl hover:scale-110 transition-all group"
      aria-label={`Open cart (${cartCount} items)`}
    >
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-destructive text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
          {cartCount}
        </span>
      )}
    </button>
  );
}
