import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Testimony from "@/components/Testimony";
import instance from "@/services/instance";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      const { data } = await instance.get("/api/products?is_featured=true");
      setFeaturedProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main className="w-full">
      <Hero isLoading={isLoading} products={featuredProducts} />
      <ProductList title="Featured Products" products={featuredProducts} />
      <Testimony />
    </main>
  );
}
