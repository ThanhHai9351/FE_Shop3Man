"use client"
import SidebarFilters from "@/components/product/filter"
import ProductListing from "@/components/product/product-listing"
import Sorter from "@/components/product/sorter"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import { Button } from "@/components/ui/button"
import Loading from "@/components/ui/loading"
import {  IProduct } from "@/lib/types"
import { useGetProductsQuery } from "@/store/services/product.service"
import Link from "next/link"
import React from "react"

const Page = () => {
  const { isFetching, data } = useGetProductsQuery({})
  const products: IProduct[] | undefined = data?.data

  const breadcrumbItems = [
    {
      title: (
        <Link className='underline' href={"/"}>
          Home
        </Link>
      ),
    },
    { title: "Products" },
  ]

  if (isFetching) {
    return <Loading />
  }
  return (
    <div className='p-5'>
      <div className='container'>
        <Breadcrumbs Items={breadcrumbItems} />
      </div>
      <h2 className='scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0 p-5 mb-5 mt-5'>PRODUCTS</h2>
      <div className='flex flex-col h-full'>
        <Sorter sortBy={""} sortDir={""} setSortDir={() => {}} setSortBy={() => {}} />
      </div>
      <div className='container pb-8 lg:pb-24'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='hidden md:col-span-5 md:block lg:col-span-3'>
            <SidebarFilters rangePrices={[0, 2000]} setRangePrices={() => {}} text={""} setText={() => {}} />
            <div className='flex place-items-end justify-end pr-5'>
              <Button onClick={() => {}}>Search</Button>
            </div>
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            {products ? <ProductListing products={products} />
            : "Not found!"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
