// src\app\shop\page.tsx
import ProductSearch from "@/components/ProductSearch";
import { client } from "@/sanity/lib/client";

async function ShopProducts() {
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
  }

  const response: Product[] = await client.fetch(`*[_type=='product']{
    _id,
     "image": image.asset->url,
    description,
    price,
    name,
    category,
    discountPercentage,
    isFeaturedProduct,
    stockLevel
  }`);

  return <ProductSearch products={response} />;
}

export default ShopProducts;