"use client"
import SwiperCategory from "@/app/collections/swiper-category"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import Loading from "@/components/ui/loading"
import { ICategory } from "@/lib/types"
import { useGetCategoriesQuery } from "@/store/services/category.service"
import Link from "next/link"
import React from "react"

const Page = () => {
  const { isFetching, data } = useGetCategoriesQuery({})
  const categories: ICategory[] | undefined = data?.data

  const breadcrumbItems = [
    {
      title: (
        <Link className='underline' href={"/"}>
          Home
        </Link>
      ),
    },
    { title: "Collections" },
  ]

  if (isFetching) {
    return <Loading />
  }
  return (
    <div className='p-5'>
      <div className='container'>
        <Breadcrumbs Items={breadcrumbItems} />
      </div>
      <div className='pt-5 pb-5'>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-5'>
          TOP CATEGORY
        </h2>
        {categories ? <SwiperCategory categories={categories} /> : "Not found!"}
      </div>
    </div>
  )
}

export default Page
