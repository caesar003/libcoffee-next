import { useState } from "react";
import { ShoppingCart, Asterisk, Trash } from "lucide-react";
import { Product as ProductInterface } from "@/utils/types";

export default function CartButton({
  products,
  deleteProduct,
}: {
  products: ProductInterface[];
  deleteProduct: (productId: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-green-600 border-none text-white p-2 text-center inline-flex items-center justify-center cursor-pointer rounded relative hover:bg-green-500 active:bg-green-700"
        onClick={toggleMenu}
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {products.length ? (
            <div className="absolute top-[-5px] right-[-5px] bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
              <Asterisk className="w-2.5 h-2.5 text-white" />
            </div>
          ) : null}
        </div>
      </button>
      {isOpen && (
        <ul className="absolute top-10 right-0 bg-white border border-gray-300 rounded shadow-md p-2 list-none m-0 min-w-[160px] z-50">
          {products?.length > 0 ? (
            products.map((product) => (
              <li
                key={product.product_id}
                className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100"
              >
                {product.product}
                <button
                  className="bg-none border-none cursor-pointer p-0 ml-2"
                  onClick={() => deleteProduct(product.product_id)}
                >
                  <Trash className="w-4 h-4 text-gray-500 hover:text-red-500" />
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic p-2 text-center">
              There are no items in your cart, add some now.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
