"use client"
import Loading from "@/components/ui/loading"
import type { IProduct } from "@/lib/types"
import { useGetProductDetailQuery } from "@/store/services/product.service"
import { usePathname } from "next/navigation"
import React from "react"

const Page = () => {
  const path = usePathname()
  const slug = path.split("/")[2]
  const {isFetching,data} = useGetProductDetailQuery(slug);
  const product: IProduct | undefined = data?.data;

  if(isFetching) {
    return <Loading />
  }
  console.log(product);
  return <div>page</div>
}

export default Page
