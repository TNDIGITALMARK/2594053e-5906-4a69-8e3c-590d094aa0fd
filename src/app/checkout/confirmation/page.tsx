"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Package, Mail, Home } from "lucide-react";
import { Order } from "@/types/book";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      const orderData = JSON.parse(savedOrder);
      setOrder(orderData);
    }
  }, []);

  if (!order || !orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-12 rounded-2xl max-w-md w-full text-center">
          <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Order not found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find your order information.
          </p>
          <Link
            href="/books"
            className="inline-block btn-gradient px-8 py-3 rounded-full font-semibold"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  const orderDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you for your purchase! Your order has been successfully placed and you'll receive a confirmation email shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="glass-card p-8 rounded-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Order Number</h3>
              <p className="text-lg font-semibold">{orderId}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Order Date</h3>
              <p className="text-lg font-semibold">{orderDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Email</h3>
              <p className="text-lg font-semibold">{order.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Total</h3>
              <p className="text-lg font-semibold text-primary">${order.total.toFixed(2)}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mb-8 pb-8 border-b border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Shipping Address
            </h3>
            <p className="text-muted-foreground">
              {order.name}<br />
              {order.address}<br />
              {order.city}, {order.state} {order.zip}<br />
              {order.country}
            </p>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.book.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="relative w-16 h-24 flex-shrink-0">
                    <Image
                      src={item.book.cover}
                      alt={item.book.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.book.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.book.genre} • {item.book.pages} pages
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </span>
                      <span className="font-semibold text-primary">
                        ${(item.book.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card p-8 rounded-2xl mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            What's Next?
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>You'll receive a confirmation email at <strong>{order.email}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Your books will be carefully packaged and shipped within 1-2 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>You'll receive tracking information once your order ships</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Estimated delivery: 3-5 business days</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-card hover:bg-muted transition-colors font-semibold border-2 border-border"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 btn-gradient px-8 py-4 rounded-full font-semibold"
          >
            <Package className="w-5 h-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
