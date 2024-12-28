"use client"
import { useAppContext } from "@/app/app_provider"
import GuideSession from "@/components/guide/guide-session"
import RelatedProducts from "@/components/product/related-products"
import SessionProduct from "@/components/product/session-product"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import Loading from "@/components/ui/loading"
import { getToLocalstorage } from "@/lib/storage"
import type { IProduct } from "@/lib/types"
import { useGetProductDetailQuery } from "@/store/services/product.service"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Page = async () => {
  const path = usePathname()
  const accessToken = getToLocalstorage("accessToken") || ""
  const { isFetching, data } = useGetProductDetailQuery({ slug: path.split("/")[2] as string, accessToken })
  const product: IProduct | undefined = data?.data

  if (isFetching) {
    return <Loading />
  }
  const breadcrumbItems = [
    {
      title: (
        <Link className='underline' href='/'>
          Home
        </Link>
      ),
    },
    {
      title: (
        <Link className='underline' href={`/collections/${product?.category?.slug}`}>
          {product?.category?.name || ""}
        </Link>
      ),
    },
    { title: product?.name },
  ].filter(Boolean)
  return (
    <main>
      <div className='container p-5'>
        <div className='mb-6'>
          <Breadcrumbs Items={breadcrumbItems} />
        </div>

        <div className='mb-20'>
          <SessionProduct product={product as IProduct} />
        </div>
      </div>

      <RelatedProducts />

      <GuideSession />
    </main>
  )
}

export default Page
