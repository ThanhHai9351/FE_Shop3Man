import ProductCard from "@/components/product/product-card"
import Loading from "@/components/ui/loading"
import { IProduct } from "@/lib/types"
import { useGetProductsQuery } from "@/store/services/product.service"

const relatedProductsSection = () => {
  const { isFetching, data } = useGetProductsQuery({})
  const products: IProduct[] | undefined = data?.data

  if (isFetching) {
    return <Loading />
  }
  return (
    <section>
      <div className='pb-24 p-3'>
        <div className=' mb-6'>
          <h2 className='text-2xl font-semibold'>Related Products</h2>
        </div>
        <div>
          <ul className='grid grid-cols-12 gap-3'>
            {products &&
              products.map((product) => (
                <li key={product.name} className='col-span-12 md:col-span-4 lg:col-span-2'>
                  <ProductCard className='w-full' {...product} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default relatedProductsSection
