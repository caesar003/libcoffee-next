import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// import { Product as ProductInterface } from "@utils/types";


export interface ProductInterface {
  product_id: number;
  product_group: string;
  product_category: string;
  product_type: string;
  product: string;
  product_description: string;
  unit_of_measure: string;
  current_wholesale_price: number;
  current_retail_price: string;
  tax_exempt_yn: string;
  promo_yn: string;
  new_product_yn: string;
  imgUrl: string;
}

export default function Hero({
  products,
  isLoading,
}: {
  products: ProductInterface[];
  isLoading: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }


  return (
    <section className="p-4">
      <div className="flex relative m-auto aspect-video max-h-[420px] justify-center">
        <img
          className="h-full"
          src={`/images/${products[currentIndex].imgUrl}`}
          alt={products[currentIndex].product}
        />
        <div className="absolute w-full p-6 left-0 bottom-[5px] text-white bg-black opacity-75">
          <p className="text-center">
            {products[currentIndex].product_description}
          </p>
        </div>
        <button
          onClick={handlePrev}
          className="absolute p-2 rounded-[4px] top-1/2 transform -translate-y-1/2 bg-black/50 border-none cursor-pointer text-white left-[5px]"
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute p-2 rounded-[4px] top-1/2 transform -translate-y-1/2 bg-black/50 border-none cursor-pointer text-white right-[5px]"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
