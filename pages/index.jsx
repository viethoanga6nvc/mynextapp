import Banner from "@/components/Banner";
import ProductItem from "@/components/productItem";
import connetMongoDB from "@/lib/mongodb";
import Product from "@/models/product";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      <div className="bg-gray-300 grid grid-cols-3 mx-auto pt-5">
        {products.length === 0 ? (
          <h2>No product</h2>
        ) : (
          products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await connetMongoDB();
  const products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
