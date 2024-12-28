import Banner from "@/components/banner/banner"
import ProductCard from "@/components/product/product-card"
import ProductSelector from "@/components/product/product-selector"
import ProductSlider from "@/components/product/product-slider"
import ProductTabs from "@/components/product/product-tabs"
import { Button } from "@/components/ui/button"
import ImageShowCase from "@/components/ui/image-show-case"
import Loading from "@/components/ui/loading"
import type { IProduct } from "@/lib/types"
import { useGetProductsQuery } from "@/store/services/product.service"
import type { FC } from "react"
import { BsLightningCharge } from "react-icons/bs"
import { FaCheck } from "react-icons/fa6"
import { HiMiniArrowUturnLeft } from "react-icons/hi2"
import { LuInfo, LuTruck } from "react-icons/lu"
interface Props {
  product: IProduct
}

const SessionProduct: FC<Props> = ({ product }) => {
  const { isFetching, data } = useGetProductsQuery({})
  const products: IProduct[] | undefined = data?.data
  if (isFetching) {
    return <Loading />
  }

  return (
    <div className='grid grid-cols-12 gap-4 lg:gap-6'>
      <div className='col-span-12 md:col-span-6 lg:col-span-8'>
        <ImageShowCase shots={product.imageUrl} />
        <div className='hidden md:block'>
          <ProductTabs />
          <>
            <ProductSlider
              products={products}
              title='Similar Items You Might Like'
              subText='Based on what customers bought'
            />
            <ProductSlider
              products={products}
              title='Shop For More Compatible Items'
              subText='Items that pair well together'
            />
          </>
          <Banner />
        </div>
      </div>

      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
        <span className='mb-2 text-xs'>STOCKMART</span>
        <h1 className='mb-0 text-3xl font-bold'>{product.name}</h1>
        {product.items?.length ? (
          <ProductSelector product={product} />
        ) : (
          <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mt-1 mb-2 p-3 bg-red-600 text-white'>
            Sold Out!
          </h3>
        )}
        <div className='mb-6 flex'>
          <div className='p-1 text-green-700'>
            <FaCheck />
          </div>
          <div>
            <p className='text-sm text-slate-700'>Pickup available at shop location</p>
            <p className='text-sm text-slate-700 mb-1'>Usually read in 24 hours</p>
            <p className='text-sm text-slate-700'>View store information</p>
          </div>
        </div>

        <div className='divide-y divide-neutral-300  dark:divide-neutral-400'>
          <div className='flex gap-4 py-4'>
            <div>
              <BsLightningCharge />
            </div>
            <div>
              <h3 className='text-sm text-red-600'>2 in Stock Now</h3>
              <p className='mt-1 text-neutral-500  dark:text-neutral-300'>
                Upgrade your tech collection with the latest must-have item, available now in limited quantities.
              </p>
            </div>
          </div>
          <div className='flex gap-4 py-4'>
            <div>
              <LuTruck />
            </div>
            <div>
              <h3 className='flex items-start gap-2 text-sm font-semibold'>
                <span className='inline-block'>Next Day Delivery</span>
                <LuInfo className='inline-block' size={12} />
              </h3>
              <p className='text-neutral-500  dark:text-neutral-300'>Lightning-fast shipping, guaranteed.</p>
            </div>
          </div>
          <div className='flex gap-4 py-4'>
            <div className='text-primary  dark:text-white'>
              <HiMiniArrowUturnLeft />
            </div>
            <div>
              <h3 className='text-sm font-semibold text-primary dark:text-white'>Free 90-day returns</h3>
              <p className='text-neutral-500  dark:text-neutral-300'>Shop risk-free with easy returns.</p>
            </div>
          </div>
        </div>

        <div className='mb-8 flex items-center justify-between gap-4 rounded-md  border-2 border-blue-600 px-9 py-4 dark:border-neutral-400'>
          <div>
            <h3 className='text-sm font-semibold'>Packaging Note:</h3>
            <p className='text-neutral-500  dark:text-neutral-300'>
              Research and development value proposition graphical user interface investor. Startup business plan user
              experience
            </p>
          </div>
          <div className='text-primary'>
            <LuInfo />
          </div>
        </div>
        <div className='mb-8 rounded-md bg-primary px-10 py-4 text-white'>
          <div>
            <span className='mb-5 inline-block'>StockMart</span>
            <h3 className='font-semibold'>Discount & Free shipping on Your first purchase.</h3>
            <Button className='text-yellow-500'>{` First-Timer's Deal`}</Button>
          </div>
        </div>

        <div className='mb-8'>
          <div>
            <h3 className='mb-5'>RELATED PRODUCT</h3>
            <ProductCard className='w-64' {...product} />
          </div>
        </div>
      </div>

      <div className='col-span-12 md:hidden'>
        <ProductTabs />
        <>
          <ProductSlider
            products={products}
            title='Similar Items You Might Like'
            subText='Based on what customers bought'
          />
          <ProductSlider
            products={products}
            title='Shop For More Compatible Items'
            subText='Items that pair well together'
          />
        </>
        <Banner />
      </div>
    </div>
  )
}

export default SessionProduct
