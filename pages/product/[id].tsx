import { useState, useEffect } from "react";
import { NextRouter, useRouter } from 'next/router';
import SectionWrapper from "@/components/SectionWrapper";
import { Product as ProductInterface } from "@/utils/types";
import serviceInstance from "@/services/instance";

export default function ProductSingle() {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router:NextRouter = useRouter();
  const {query: {id: productId}} = router;

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const response = await serviceInstance.get(
          `/api/products/${productId}`,
        );

        if (response.status === 404) {
          setError(`Product with ID ${productId} not found.`);
          setProduct(null);
        } else {
          setProduct(response.data);
          setError(null);
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
        console.error(err);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <main>
      <SectionWrapper id="product">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <img
              src={`/images/products/${product?.imgUrl}`}
              alt={product?.product || "Product Image"}
              className="product-thumbnail"
            />
            <h4>{product?.product}</h4>
            <p className="text-center">{product?.product_description}</p>

            <div className="flex gap-1 items-center bg-gray-100 p-2">
              <p>{product?.current_retail_price}</p>
            </div>
          </>
        )}
      </SectionWrapper>
    </main>
  );
}
