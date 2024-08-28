import { useAtomValue } from "jotai";
// import { isUserLoginAtom } from "@/store/auth";
import ProductList from "@/components/ProductList";
import instance from "@/services/instance";
import { Product as ProductInterface } from "@/utils/types";

interface ProductProps {
  products: ProductInterface[];
}

export default function Product({ products }: ProductProps) {
  // const userCredential = useAtomValue(isUserLoginAtom);

  // console.log({ userCredential });

  return (
    <main>
      <ProductList title="Our Products" products={products} />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const { data: products } = await instance.get("/api/products");

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
