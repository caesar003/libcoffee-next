import { useState, useEffect } from 'react';
import ProductList from "@/components/ProductList";
import instance from "@/services/instance";
import {Product as ProductInterface} from "@/utils/types";

export default function Product(){

  const [products, setProducts] = useState<ProductInterface[]>([]);

  const getProducts = async () => {
    try {
      const { data } = await instance.get("/api/products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main>
      <ProductList title="Our Products" products={products} />
    </main>
  );
}
