"use client"
import SidebarFilters from "@/components/product/filter"
import ProductListing from "@/components/product/product-listing"
import Sorter from "@/components/product/sorter"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import { Button } from "@/components/ui/button"
import Loading from "@/components/ui/loading"
import { IProduct } from "@/lib/types"
import { useGetProductsQuery } from "@/store/services/product.service"
import Link from "next/link"
import React, { useState } from "react"

const Page = () => {
  const [page, setPage] = useState(0)
  const [sortDir, setSortDir] = useState("")
  const [search, setSearch] = useState("")
  const [price, setPrice] = useState([0, 20000000])
  const { isFetching, data } = useGetProductsQuery({
    page: page,
    sortDir: sortDir,
    search: search,
    priceFrom: price[0],
    priceTo: price[1],
  })
  const products: IProduct[] | undefined = data?.data

  const fetchData = (search: string, price: number[]) => {
    setSearch(search)
    setPrice(price)
  }

  const resetFilter = () =>{
    setSearch("")
    setPrice([0, 20000000])
    setSortDir("");
  }

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
        <Sorter sortDir={sortDir} setSortDir={setSortDir} />
      </div>
      <div className='container pb-8 lg:pb-24'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='hidden md:col-span-5 md:block lg:col-span-3'>
            <div className='flex items-end justify-end'>
              <Button onClick={resetFilter} variant={"outline"} className='underline text-slate-500 mr-5'>
                Reset all
              </Button>
            </div>
            <SidebarFilters search={search} price={price} fetchData={fetchData} />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            {products ? <ProductListing products={products} /> : "Not found!"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
