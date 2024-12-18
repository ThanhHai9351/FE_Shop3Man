"use client"

import Loading from "@/components/ui/loading"
import type { ICategory } from "@/lib/types"
import { useGetCategoriesQuery } from "@/store/services/category.service"
import Link from "next/link"
import { FaApple, FaShirtsinbulk } from "react-icons/fa"
import { GiMailShirt } from "react-icons/gi"

const icons = [GiMailShirt, FaShirtsinbulk, FaApple]

const Menu = () => {
  const { isFetching, data } = useGetCategoriesQuery({})
  const categories: ICategory[] | undefined = data?.data

  if (isFetching) {
    return (
      <div className='bg-white'>
        <Loading />
      </div>
    )
  }

  return (
    <div className='p-5'>
      <div className='flex flex-row gap-4'>
        {categories &&
          categories.map((menuItem, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Link
                key={index}
                href={`/collections/${menuItem.slug}`}
                className='flex items-center gap-2 text-gray-600 font-bold hover:text-slate-900 duration-200 transition-all mx-2 '
              >
                <Icon className='text-xl' />
                <span className='mx-2'>{menuItem.name}</span>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Menu
