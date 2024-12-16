import { FC } from "react"
import { IProduct } from "@/lib/types"
import ProductCard from "@/components/product/product-card"

interface ProductListingProps {
  products: IProduct[]
}

const ProductListing: FC<ProductListingProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-10 gap-3'>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} className='col-span-10 md:col-span-5 lg:col-span-2' />
      ))}
    </div>
  )
}

export default ProductListing
