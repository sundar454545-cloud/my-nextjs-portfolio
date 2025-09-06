import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/customcard";
import { Button } from "@/components/ui/button";
import { Star, Tag, Heart } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductCard = ({
  title,
  price,
  image,
  rating,
  reviews,
  originalPrice = null,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? "text-red-500 fill-current" : "text-gray-500"
              }`}
            />
          </Button>
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
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>
        <div className="mb-3">
          <p className="font-bold text-xl text-foreground">{price}</p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </p>
          )}
          <p className="text-xs text-green-600 dark:text-green-400">
            FREE delivery tomorrow
          </p>
        </div>
        <Button
          size="sm"
          className="w-full bg-[#FEBD69] hover:bg-[#f3a847] text-black font-medium"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

const sampleProducts = [
  {
    title: "Sony WH-1000XM4 Wireless Premium Noise Cancelling Headphones",
    price: "$249.99",
    originalPrice: "$349.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    rating: 5,
    reviews: 8765,
  },
  {
    title:
      "Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones",
    price: "$279.00",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800",
    rating: 4,
    reviews: 12345,
  },
  {
    title: "Apple AirPods Pro (2nd Generation) with MagSafe Case",
    price: "$199.99",
    originalPrice: "$249.00",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800",
    rating: 4,
    reviews: 23456,
  },
  {
    title: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones",
    price: "$179.95",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800",
    rating: 4,
    reviews: 5432,
  },
  {
    title: "Sennheiser HD 660 S - HiRes Audiophile Open Back Headphone",
    price: "$399.00",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800",
    rating: 5,
    reviews: 3456,
  },
  {
    title: "Audio-Technica ATH-M50x Professional Studio Monitor Headphones",
    price: "$149.00",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=800",
    rating: 4,
    reviews: 7890,
  },
  {
    title: "Jabra Elite 85h Wireless Noise-Cancelling Headphones",
    price: "$199.99",
    originalPrice: "$249.99",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800",
    rating: 4,
    reviews: 4321,
  },
  {
    title: "Plantronics BackBeat PRO 2 Wireless Noise Cancelling Headphones",
    price: "$159.99",
    image:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=800",
    rating: 4,
    reviews: 6543,
  },
];

export default function AmazonProductsPage() {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Home &gt; Electronics &gt; Audio &gt; Headphones
        </p>
        <h1 className="text-3xl font-bold text-foreground mt-2">
          Headphones & Earbuds
        </h1>
        <p className="text-muted-foreground mt-1">
          1-16 of over 2,000 results for "headphones"
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4">
          <Card className="p-6 bg-card sticky top-28">
            <h2 className="text-xl font-bold mb-6">Refine by</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Department
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary font-bold">
                      Over-Ear Headphones
                    </a>{" "}
                    (1,234)
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary text-muted-foreground"
                    >
                      In-Ear Headphones
                    </a>{" "}
                    (567)
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary text-muted-foreground"
                    >
                      On-Ear Headphones
                    </a>{" "}
                    (890)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-foreground">Brand</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sony" />
                    <label htmlFor="sony" className="text-sm text-foreground">
                      Sony
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bose" />
                    <label htmlFor="bose" className="text-sm text-foreground">
                      Bose
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="apple" />
                    <label htmlFor="apple" className="text-sm text-foreground">
                      Apple
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beats" />
                    <label htmlFor="beats" className="text-sm text-foreground">
                      Beats
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-foreground">Price</h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="$ Min"
                      type="number"
                      className="text-sm"
                    />
                    <Input
                      placeholder="$ Max"
                      type="number"
                      className="text-sm"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Go
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Customer Reviews
                </h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((r) => (
                    <div
                      key={r}
                      className="flex items-center gap-1 cursor-pointer hover:text-primary"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < r
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm ml-1">& Up</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </aside>

        {/* Products Grid */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-card rounded-lg gap-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">1-16</span> of over{" "}
              <span className="font-medium">2,000</span> results for
              <span className="font-medium text-foreground"> "headphones"</span>
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by: Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Sort by: Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Reviews</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button className="bg-[#FEBD69] text-black">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
