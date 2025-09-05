import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

const ProductCard = ({ title, price, image, originalPrice = null }) => (
  <div className="bg-card p-4 rounded-lg shadow-sm h-full hover:shadow-lg transition-shadow">
    <div className="relative mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      {originalPrice && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          Save 20%
        </div>
      )}
    </div>
    <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 h-10">
      {title}
    </h3>
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">(1,234)</span>
    </div>
    <div className="mb-3">
      <p className="font-bold text-lg text-foreground">{price}</p>
      {originalPrice && (
        <p className="text-sm text-muted-foreground line-through">
          {originalPrice}
        </p>
      )}
      <p className="text-xs text-green-600 dark:text-green-400">
        FREE delivery
      </p>
    </div>
    <Button
      size="sm"
      className="w-full bg-[#FEBD69] hover:bg-[#f3a847] text-black font-medium"
    >
      Add to Cart
    </Button>
  </div>
);

const CategoryCard = ({ title, subtitle, image }) => (
  <Card className="bg-card hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
    <CardContent className="p-0">
      <div className="h-32 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <Button variant="link" className="p-0 h-auto text-primary mt-2">
          Shop now <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

const ProductCarousel = ({ title, products }) => (
  <section className="mb-12">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <Button variant="link" className="text-primary font-medium">
        See all <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </section>
);

const sampleProducts = [
  {
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    price: "$39.99",
    originalPrice: "$49.99",
    image:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=800",
  },
  {
    title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    price: "$249.99",
    originalPrice: "$349.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
  },
  {
    title: "Fire TV Stick 4K Max with Voice Remote",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800",
  },
  {
    title: "Apple Watch Series 9 GPS 45mm",
    price: "$399.00",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=800",
  },
  {
    title: "MacBook Air 13-inch M2 Chip",
    price: "$999.00",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
  },
];

const categories = [
  {
    title: "Electronics",
    subtitle: "Latest gadgets & tech",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800",
  },
  {
    title: "Home & Kitchen",
    subtitle: "Everything for your home",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800",
  },
  {
    title: "Fashion",
    subtitle: "Trending styles",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
  },
  {
    title: "Books",
    subtitle: "Bestsellers & more",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800",
  },
];

export default function AmazonHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Great deals, delivered fast
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Shop millions of products with free shipping
          </p>
          <Button className="bg-[#FEBD69] hover:bg-[#f3a847] text-black w-fit px-8 py-3 text-lg font-semibold">
            Shop now
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>

        <ProductCarousel title="Today's Deals" products={sampleProducts} />
        <ProductCarousel
          title="Recommended for you"
          products={[
            {
              title: 'Kindle Paperwhite (11th Gen) 6.8" Display',
              price: "$139.99",
              image:
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800",
            },
            {
              title: "Ring Video Doorbell Pro 2",
              price: "$199.99",
              image:
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
            },
            {
              title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
              price: "$79.95",
              image:
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800",
            },
            {
              title: "Nike Air Max 270 Running Shoes",
              price: "$129.99",
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
            },
            {
              title: "YETI Rambler 20 oz Tumbler with MagSlider Lid",
              price: "$34.95",
              image:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
            },
          ]}
        />
      </div>
    </div>
  );
}
