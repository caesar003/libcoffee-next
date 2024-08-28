import { GetServerSidePropsContext } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { Product as ProductInterface } from "@/utils/types";
import serviceInstance from "@/services/instance";
import { RESPONSE_STATUS } from "@/constants/response-status";

interface ProductProps {
  product?: ProductInterface | null;
  error?: string | null;
}

export default function ProductSingle({ product, error }: ProductProps) {
  return (
    <main>
      <SectionWrapper id="product">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {product && (
              <>
                <img
                  src={`/images/products/${product.imgUrl}`}
                  alt={product.product || "Product Image"}
                  className="product-thumbnail"
                />
                <h4>{product.product}</h4>
                <p className="text-center">{product.product_description}</p>

                <div className="flex gap-1 items-center bg-gray-100 p-2">
                  <p>{product.current_retail_price}</p>
                </div>
              </>
            )}
          </>
        )}
      </SectionWrapper>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  try {
    const response = await serviceInstance.get(`/api/products/${id}`);

    if (response.status === RESPONSE_STATUS.NOT_FOUND) {
      return {
        notFound: true,
      };
    }

    const product = response.data;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        error: "An error occurred while fetching the product.",
      },
    };
  }
}
