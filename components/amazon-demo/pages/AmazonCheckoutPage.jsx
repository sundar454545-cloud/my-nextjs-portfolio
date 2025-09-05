import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, CreditCard, Truck, Shield } from "lucide-react";

// Single order item
const OrderItem = ({ item }) => (
  <div className="flex gap-4 p-4 border-b border-border last:border-b-0">
    <img
      src={item.image}
      alt={item.title}
      className="w-20 h-20 object-cover rounded"
    />
    <div className="flex-1">
      <h3 className="font-medium text-sm line-clamp-2 mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-1">Qty: {item.quantity}</p>
      <p className="font-bold text-lg text-foreground">{item.price}</p>
    </div>
  </div>
);

// Order summary
const OrderSummary = () => {
  const orderItems = [
    {
      title: "Sony WH-1000XM4 Wireless Premium Noise Cancelling Headphones",
      price: "$249.99",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    },
    {
      title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
      price: "$39.99",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=800",
    },
  ];

  return (
    <Card className="bg-card sticky top-28">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          Order Summary
        </h2>

        <div className="space-y-0 mb-6">
          {orderItems.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm mb-6">
          <div className="flex justify-between">
            <span>Items (2):</span>
            <span>$289.98</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping & handling:</span>
            <span className="text-green-600">FREE</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated tax:</span>
            <span>$23.20</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg pt-2">
            <span>Order total:</span>
            <span className="text-red-700">$313.18</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-green-600">
            <Truck className="w-4 h-4" />
            <span>FREE delivery by tomorrow</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <Shield className="w-4 h-4" />
            <span>Protected by Amazon A-to-z Guarantee</span>
          </div>
        </div>

        <Button className="w-full bg-[#FEBD69] hover:bg-[#f3a847] text-black font-semibold py-3 text-lg">
          Place your order
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-3">
          By placing your order, you agree to Amazon's privacy notice and
          conditions of use.
        </p>
      </CardContent>
    </Card>
  );
};

// Main checkout page
export default function AmazonCheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState("existing");
  const [selectedPayment, setSelectedPayment] = useState("card");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
        <p className="text-muted-foreground">
          Review your order and complete your purchase
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Shipping Address
              </h2>

              <RadioGroup
                value={selectedAddress}
                onValueChange={setSelectedAddress}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3 border rounded-lg p-4">
                  <RadioGroupItem
                    value="existing"
                    id="existing"
                    className="mt-1"
                  />
                  <Label
                    htmlFor="existing"
                    className="flex-grow cursor-pointer"
                  >
                    <div className="font-medium">Sundar</div>
                    <div className="text-sm text-muted-foreground">
                      123 Main Street
                      <br />
                      Chennai, Tamil Nadu 600001
                      <br />
                      India
                    </div>
                  </Label>
                </div>

                <div className="flex items-start space-x-3 border rounded-lg p-4">
                  <RadioGroupItem value="new" id="new" className="mt-1" />
                  <Label htmlFor="new" className="cursor-pointer">
                    <div className="font-medium text-primary">
                      Add a new address
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {selectedAddress === "new" && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-secondary rounded-lg">
                  <div>
                    <Label htmlFor="newName">Full name</Label>
                    <Input id="newName" placeholder="Enter full name" />
                  </div>
                  <div>
                    <Label htmlFor="newPhone">Phone number</Label>
                    <Input id="newPhone" placeholder="Enter phone number" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="newAddress">Address</Label>
                    <Input
                      id="newAddress"
                      placeholder="Street address or P.O. Box"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newCity">City</Label>
                    <Input id="newCity" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="newState">State</Label>
                    <Input id="newState" placeholder="State" />
                  </div>
                  <div>
                    <Label htmlFor="newZip">ZIP Code</Label>
                    <Input id="newZip" placeholder="ZIP Code" />
                  </div>
                  <div>
                    <Label htmlFor="newCountry">Country</Label>
                    <Input id="newCountry" defaultValue="India" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Payment Method
              </h2>

              <RadioGroup
                value={selectedPayment}
                onValueChange={setSelectedPayment}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3 border rounded-lg p-4">
                  <RadioGroupItem value="card" id="card" className="mt-1" />
                  <Label htmlFor="card" className="flex-grow cursor-pointer">
                    <div className="flex items-center gap-2 font-medium mb-3">
                      <CreditCard className="w-4 h-4" />
                      Card
                    </div>
                    {selectedPayment === "card" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input
                          placeholder="1234 5678 9012 3456"
                          className="sm:col-span-2"
                        />
                        <Input placeholder="Name on card" />
                        <div className="grid grid-cols-2 gap-2">
                          <Input placeholder="MM/YY" />
                          <Input placeholder="CVV" />
                        </div>
                      </div>
                    )}
                  </Label>
                </div>

                <div className="flex items-start space-x-3 border rounded-lg p-4">
                  <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                  <Label htmlFor="paypal" className="cursor-pointer">
                    <div className="font-medium text-blue-600">PayPal</div>
                    <p className="text-sm text-muted-foreground">
                      You will be redirected to PayPal to complete your purchase
                      securely.
                    </p>
                  </Label>
                </div>

                <div className="flex items-start space-x-3 border rounded-lg p-4">
                  <RadioGroupItem value="upi" id="upi" className="mt-1" />
                  <Label htmlFor="upi" className="cursor-pointer">
                    <div className="font-medium text-purple-600">UPI</div>
                    <p className="text-sm text-muted-foreground">
                      Pay with your UPI ID for instant transactions.
                    </p>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Review Items */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Review Items and Delivery
              </h2>

              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800 dark:text-green-200">
                    FREE delivery tomorrow
                  </span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Order within 8 hrs 23 mins to receive by tomorrow
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
