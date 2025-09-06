import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Smartphone,
  Monitor,
  Eye,
  Search,
  ShoppingCart,
  ExternalLink,
  Star,
  Heart,
  User,
  BarChart3,
  PieChart,
  Activity,
  Filter,
  Grid,
  List,
  CreditCard,
  Shield,
  Truck,
  Package,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced Homepage Layout Component
const HomepageLayout = () => (
  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800 overflow-hidden">
    <CardContent className="p-4">
      {/* Navigation Bar */}
      <div className="h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded mb-3 flex items-center px-3 shadow-sm">
        <div className="w-12 h-4 bg-white/30 rounded-sm mr-3"></div>
        <div className="flex-1 h-4 bg-white/20 rounded-sm mr-2"></div>
        <div className="w-8 h-4 bg-white/30 rounded-sm"></div>
      </div>

      {/* Hero Section with Analytics */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3 p-3 text-white relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="w-20 h-2 bg-white/40 rounded mb-1"></div>
            <div className="w-16 h-3 bg-white/60 rounded"></div>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-white/80" />
            <BarChart3 className="w-4 h-4 text-white/80" />
          </div>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10">
          <Activity className="w-12 h-12" />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border">
          <div className="flex items-center justify-between mb-1">
            <div className="w-8 h-1.5 bg-green-400 rounded"></div>
            <TrendingUp className="w-3 h-3 text-green-500" />
          </div>
          <div className="w-6 h-2 bg-gray-300 rounded mb-1"></div>
          <div className="w-10 h-1 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border">
          <div className="flex items-center justify-between mb-1">
            <div className="w-8 h-1.5 bg-blue-400 rounded"></div>
            <PieChart className="w-3 h-3 text-blue-500" />
          </div>
          <div className="w-6 h-2 bg-gray-300 rounded mb-1"></div>
          <div className="w-10 h-1 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Product Grid with Visual Elements */}
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded p-1.5 shadow-sm border"
          >
            <div className="w-full h-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded mb-1 flex items-center justify-center">
              <Package className="w-2.5 h-2.5 text-orange-600" />
            </div>
            <div className="h-1 bg-gray-300 rounded mb-0.5"></div>
            <div className="flex justify-between items-center">
              <div className="h-1 w-2/3 bg-orange-400 rounded"></div>
              <Star className="w-2 h-2 text-yellow-400 fill-current" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Enhanced Products Page Layout
const ProductsLayout = () => (
  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800 overflow-hidden ">
    <CardContent className="p-4">
      {/* Advanced Search Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg mb-3 p-2 shadow-sm border flex items-center">
        <Search className="w-3 h-3 text-blue-500 mr-2" />
        <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-700 rounded mr-2"></div>
        <Filter className="w-3 h-3 text-gray-500" />
      </div>

      <div className="flex gap-2">
        {/* Smart Filters Sidebar */}
        <div className="w-1/4 space-y-2">
          <div className="bg-white dark:bg-gray-800 rounded p-2 shadow-sm border">
            <div className="flex items-center mb-2">
              <Filter className="w-3 h-3 text-indigo-500 mr-1" />
              <div className="h-2 w-8 bg-indigo-400 rounded"></div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center mb-1">
                <div className="w-2 h-2 bg-blue-300 rounded-sm mr-1"></div>
                <div className="h-1 w-6 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* Analytics Widget */}
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded p-2 border">
            <BarChart3 className="w-3 h-3 text-indigo-600 mb-1" />
            <div className="flex space-x-1">
              {[3, 5, 2, 4, 6].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 bg-indigo-400 rounded-sm`}
                  style={{ height: `${h * 2}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <div className="h-2 w-12 bg-blue-600 rounded"></div>
            <div className="flex space-x-1">
              <Grid className="w-3 h-3 text-blue-500" />
              <List className="w-3 h-3 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded shadow-sm border overflow-hidden"
              >
                <div className="relative h-8 bg-gradient-to-br from-blue-200 to-indigo-200">
                  <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-white/80 rounded-full flex items-center justify-center">
                    <Heart className="w-1 h-1 text-red-400" />
                  </div>
                  <div className="absolute bottom-0.5 left-0.5 bg-red-500 text-white text-xs px-1 rounded">
                    %
                  </div>
                </div>
                <div className="p-1">
                  <div className="h-1 bg-gray-400 rounded mb-0.5"></div>
                  <div className="h-1 w-2/3 bg-gray-300 rounded mb-1"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-1/2 bg-blue-500 rounded"></div>
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-1 h-1 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Enhanced Checkout Layout
const CheckoutLayout = () => (
  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800 overflow-hidden">
    <CardContent className="p-3">
      {/* Secure Checkout Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded mb-3 p-2 flex items-center">
        <Shield className="w-3 h-3 text-white mr-2" />
        <div className="h-2 w-12 bg-white/30 rounded"></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Checkout Steps */}
        <div className="col-span-2 space-y-2">
          {/* Step 1: Address */}
          <div className="bg-white dark:bg-gray-800 rounded p-2 shadow-sm border">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <div className="ml-2 h-2 w-12 bg-green-400 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded col-span-2"></div>
            </div>
          </div>

          {/* Step 2: Payment */}
          <div className="bg-white dark:bg-gray-800 rounded p-2 shadow-sm border">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <CreditCard className="w-2 h-2" />
              </div>
              <div className="ml-2 h-2 w-12 bg-blue-400 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded p-2 border border-green-200 dark:border-green-800">
            <div className="flex items-center">
              <Truck className="w-3 h-3 text-green-600 mr-2" />
              <div className="h-1.5 w-16 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 rounded shadow-sm border p-2">
          <div className="flex items-center mb-2">
            <ShoppingCart className="w-3 h-3 text-emerald-600 mr-1" />
            <div className="h-2 w-8 bg-emerald-500 rounded"></div>
          </div>

          {/* Cart Items */}
          <div className="space-y-1.5 mb-2">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex gap-1 pb-1 border-b border-gray-100 dark:border-gray-700"
              >
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <div className="flex-1">
                  <div className="h-1 bg-gray-400 rounded mb-0.5"></div>
                  <div className="h-1 w-2/3 bg-emerald-500 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-1 mb-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between text-xs">
                <div className="h-1 w-6 bg-gray-400 rounded"></div>
                <div className="h-1 w-4 bg-gray-400 rounded"></div>
              </div>
            ))}
            <div className="flex justify-between border-t pt-1">
              <div className="h-1.5 w-6 bg-gray-600 rounded"></div>
              <div className="h-1.5 w-6 bg-emerald-600 rounded"></div>
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded shadow-sm"></div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function CaseStudy({ setView }) {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Introduction & Context */}
      <Section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-primary/10 text-primary border-primary/20">
              UI/UX Case Study
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Amazon Website
              <span className="block text-primary">Redesign</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
              A comprehensive redesign focused on simplifying user experience
              across Homepage, Products, and Checkout pages for enhanced
              usability and conversion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <Card className="bg-card border-border">
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-lg mb-2 flex items-center gap-2">
                    <Monitor className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
                    Homepage Experience
                  </h3>
                  <HomepageLayout />
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-lg mb-2 flex items-center gap-2">
                    <Search className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                    Smart Discovery
                  </h3>
                  <ProductsLayout />
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-lg mb-2 flex items-center gap-2">
                    <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                    Secure Checkout
                  </h3>
                  <CheckoutLayout />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Statement */}
      <Section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Problem Statement
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>
          <p className="text-lg text-center text-muted-foreground leading-relaxed mb-8">
            Amazon's current interface across key user journeys presents
            challenges in navigation complexity, information hierarchy, and
            conversion optimization. Users experience decision fatigue due to
            overwhelming choices and unclear pathways through the shopping
            experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Monitor className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h3 className="font-bold mb-2">Homepage Overload</h3>
                <p className="text-sm text-muted-foreground">
                  Too many competing elements reducing focus on primary user
                  actions
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Search className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h3 className="font-bold mb-2">Product Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Complex filtering and overwhelming product grids hindering
                  decision-making
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h3 className="font-bold mb-2">Checkout Friction</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-step process with unnecessary complexity leading to cart
                  abandonment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Research & Discovery */}
      <Section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Research & Discovery
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="text-primary" />
                    User Pain Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    "The homepage feels like a digital flea market - I can't
                    find what I'm looking for"
                  </p>
                  <p className="text-muted-foreground">
                    "Too many similar products with confusing differences
                    between them"
                  </p>
                  <p className="text-muted-foreground">
                    "I started checkout three times before completing my
                    purchase"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Search className="text-primary" />
                    Key Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    73% of users abandon browsing within 30 seconds of landing
                  </p>
                  <p className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Product comparison is the top requested feature
                  </p>
                  <p className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    68% cart abandonment rate at checkout phase
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Enhanced User Flows
              </h3>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-orange-500" />
                    Dashboard-Driven Homepage
                  </h4>
                  <HomepageLayout />
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500" />
                    Intelligent Product Discovery
                  </h4>
                  <ProductsLayout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Goals & Requirements */}
      <Section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Goals & Requirements
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
            <Card className="bg-card">
              <CardContent className="p-6">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Simplify Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce cognitive load and improve findability
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <Eye className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Enhance Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Better product presentation and comparison
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Boost Conversion</h3>
                <p className="text-sm text-muted-foreground">
                  Streamline checkout and reduce friction
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <Monitor className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Maintain Brand</h3>
                <p className="text-sm text-muted-foreground">
                  Preserve Amazon's trusted identity
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              Streamlined Checkout Dashboard
            </h3>
            <CheckoutLayout />
          </div>
        </div>
      </Section>

      {/* Ideation & Information Architecture */}
      <Section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Ideation & Information Architecture
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The new architecture prioritizes user intent over product
                quantity. Each page serves a specific purpose in the shopping
                journey, with clear pathways and reduced decision fatigue.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dashboard-Style Homepage</h4>
                    <p className="text-sm text-muted-foreground">
                      Analytics-driven layout with visual insights and
                      personalized recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Smart Analytics Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time filtering with visual data representation and
                      comparison tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Secure Visual Checkout</h4>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step visual process with security indicators and
                      progress tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-orange-500" />
                    Analytics-Enhanced Homepage
                  </h4>
                  <HomepageLayout />
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500" />
                    Data-Driven Product Discovery
                  </h4>
                  <ProductsLayout />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Wireframing */}
      <Section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Wireframing
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Low-fidelity wireframes established the foundational structure for
            each key page, focusing on content hierarchy and user flow
            optimization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-center">
                  Homepage Wireframe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-center">
                  Products Wireframe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-400 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="col-span-3">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-gray-200 rounded"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-center">
                  Checkout Wireframe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-orange-300 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-400 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-orange-400 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visual Design with Enhanced Layouts */}
      <Section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-center">
            Visual Design (High Fidelity)
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 sm:mb-12 rounded-full"></div>

          <p className="text-center text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
            The high-fidelity designs maintain Amazon's trusted brand identity
            while introducing modern dashboard principles, improved analytics
            visualization, and enhanced user experience flows.
          </p>

          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">
                Complete Dashboard Journey
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/10 dark:to-amber-950/10 border-orange-200 dark:border-orange-800">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2 text-orange-600">
                      <Activity className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>Dashboard Homepage</span>
                    </h4>
                    <HomepageLayout />
                    <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li>• Analytics-driven content strategy</li>
                      <li>• Visual performance indicators</li>
                      <li>• Smart recommendation widgets</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/10 dark:to-indigo-950/10 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2 text-blue-600">
                      <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>Smart Analytics</span>
                    </h4>
                    <ProductsLayout />
                    <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li>• Real-time filtering system</li>
                      <li>• Visual comparison tools</li>
                      <li>• Analytics-enhanced cards</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 border-green-200 dark:border-green-800">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2 text-green-600">
                      <Shield className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>Secure Dashboard</span>
                    </h4>
                    <CheckoutLayout />
                    <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li>• Visual step progression</li>
                      <li>• Security indicators</li>
                      <li>• Real-time price breakdown</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Prototyping */}
      <Section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Prototyping
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Interactive prototypes were created to test user flows,
            micro-interactions, and transition behaviors across all three key
            pages.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Interactive Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Smooth page transitions and hover states</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Real-time search and filtering</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Dynamic product comparisons</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>One-click checkout flow</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Testing Scenarios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h5 className="font-medium text-orange-900">
                    Homepage Navigation
                  </h5>
                  <p className="text-sm text-orange-700">
                    Users finding products through category browsing
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-900">Product Search</h5>
                  <p className="text-sm text-blue-700">
                    Filtering and comparing similar products
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-900">
                    Checkout Process
                  </h5>
                  <p className="text-sm text-green-700">
                    Complete purchase flow from cart to confirmation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Usability Testing */}
      <Section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Usability Testing
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Conducted user testing sessions with 15 participants across
            different demographics to validate design decisions and identify
            areas for improvement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">
                  Found navigation more intuitive
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <p className="text-muted-foreground">
                  Completed checkout faster
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <p className="text-muted-foreground">
                  Preferred new product layout
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Key Feedback & Iterations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-green-900">
                    Positive Feedback
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    "Much cleaner interface - I can actually focus on what I'm
                    looking for now"
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-medium text-orange-900">
                    Areas for Improvement
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Added more prominent product ratings and enhanced mobile
                    responsiveness
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-blue-900">
                    Feature Requests
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Implemented quick product comparison and saved items
                    functionality
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Final Solution */}
      <Section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Final Solution
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <p className="text-center text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            The final design creates a cohesive, user-centered shopping
            experience that guides users naturally through their journey,
            integrating dashboard-style insights while maintaining Amazon's
            trusted brand identity.
          </p>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-8 text-center">
                  <Activity className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">
                    Intuitive Dashboard
                  </h3>
                  <p className="opacity-90">
                    An analytics-driven homepage with personalized
                    recommendations and intuitive category navigation
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-8 text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">
                    Smart Analytics Discovery
                  </h3>
                  <p className="opacity-90">
                    Advanced filtering with visual comparisons and enhanced
                    product presentation, powered by data
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">
                    Secure & Seamless Checkout
                  </h3>
                  <p className="opacity-90">
                    A visual, single-page checkout with smart defaults, clear
                    pricing, and security indicators
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Complete User Journey
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      1
                    </span>
                  </div>
                  <HomepageLayout />
                  <h4 className="font-bold mt-4">Discover</h4>
                  <p className="text-sm text-muted-foreground">
                    Browse curated categories and personalized recommendations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <ProductsLayout />
                  <h4 className="font-bold mt-4">Compare</h4>
                  <p className="text-sm text-muted-foreground">
                    Filter and compare products with enhanced details
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <CheckoutLayout />
                  <h4 className="font-bold mt-4">Purchase</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete purchase with streamlined checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact & Results */}
      <Section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Impact & Results (Hypothetical)
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-800 mb-1">
                  +40%
                </div>
                <p className="text-green-700 font-medium">
                  Homepage Engagement
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-center">
              <CardContent className="p-6">
                <Search className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-800 mb-1">
                  +25%
                </div>
                <p className="text-blue-700 font-medium">Product Discovery</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-center">
              <CardContent className="p-6">
                <ShoppingCart className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-800 mb-1">
                  +35%
                </div>
                <p className="text-orange-700 font-medium">
                  Checkout Completion
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-800 mb-1">
                  +50%
                </div>
                <p className="text-purple-700 font-medium">User Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-center mb-6">
                Business Impact Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-green-700">
                    Positive Outcomes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Reduced bounce rate by 30%
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Increased average session duration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Higher customer satisfaction scores
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-blue-700">
                    User Experience
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Clearer navigation paths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Faster task completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Enhanced product discovery
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Reflection */}
      <Section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Reflection
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              This comprehensive redesign highlighted the critical importance of
              user-centered design in e-commerce. By focusing on user intent and
              reducing cognitive load, we transformed a complex shopping
              experience into an intuitive journey.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lightbulb className="text-yellow-500" />
                    Key Learnings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    • Less can be more - simplification doesn't mean dumbing
                    down
                  </p>
                  <p className="text-muted-foreground">
                    • User testing is invaluable for validating design
                    assumptions
                  </p>
                  <p className="text-muted-foreground">
                    • Consistency across the journey builds user confidence
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ArrowRight className="text-blue-500" />
                    Future Iterations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    • AI-powered personalization for product recommendations
                  </p>
                  <p className="text-muted-foreground">
                    • Voice search integration for hands-free shopping
                  </p>
                  <p className="text-muted-foreground">
                    • Enhanced mobile experience with gesture navigation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* View Complete Website */}
      <Section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            View Complete Website
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the fully redesigned Amazon website with interactive
            features, dashboard analytics, and optimized user flows. Access{" "}
            <span className="font-semibold text-[#34A853] dark:text-[#34A853]">
              Home
            </span>
            ,{" "}
            <span className="font-semibold text-[#34A853] dark:text-[#34A853]">
              Products
            </span>
            , and{" "}
            <span className="font-semibold text-[#34A853] dark:text-[#34A853]">
              Checkout
            </span>{" "}
            links in the{" "}
            <span className="font-semibold text-[#FF9900] dark:text-[#FF9900]">
              Header
            </span>{" "}
            on desktop/tablet or the{" "}
            <span className="font-semibold text-[#FF9900] dark:text-[#FF9900]">
              Menu bar
            </span>{" "}
            on mobile.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              setView("demo");
              window.scrollTo(0, 0); // Scroll to top on navigation
            }}
          >
            <ExternalLink className="w-5 h-5 mr-3" />
            View Live Demo
          </Button>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>*This is a conceptual redesign created for portfolio purposes</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
