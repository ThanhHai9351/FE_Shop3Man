"use client"

import type { ICategory } from "@/lib/types"
import { useGetCategoriesQuery } from "@/store/services/category.service"
import Link from "next/link"

const Menu = () => {
  const { isFetching, data } = useGetCategoriesQuery({})
  const categories: ICategory[] | undefined = data?.data
  if (isFetching) {
    return <div>...</div>
  }
  return (
    <div className='p-5'>
      {categories &&
        categories.map((menuItem, index) => {
          return (
            <Link key={index} href={`/collections/${menuItem.slug}`} className='gap-2 p-3 text-slate-50'>
              <span className='mx-2'>{menuItem.name}</span>
            </Link>
          )
        })}
    </div>
  )
}

export default Menu
