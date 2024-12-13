import type { FC } from "react"
import { ICategory } from "@/lib/types"
import Link from "next/link"

const CategoryCard: FC<ICategory> = ({ slug, name, imageUrl }) => {
  return (
    <Link href={`/collections/${slug}`}>
      <div className='mb-3 lg:mb-0'>
        <div className='relative aspect-square overflow-hidden rounded-md bg-white'>
          <img src={imageUrl} alt='category rep' className='object-cover w-full h-full' sizes='10%' />
        </div>
        <div className='lg:mt-6'>
          <p className='text-center font-semibold'>{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
