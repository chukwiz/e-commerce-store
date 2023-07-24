import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

export const revalidate = 0;

const IndexPage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("a65340b0-21f3-4194-bf1c-2aa0d5cf69b5");
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className=" flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
