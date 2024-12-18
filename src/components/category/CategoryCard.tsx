import type { FC } from "react"
import { ICategory } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"

const CategoryCard: FC<ICategory> = ({ slug, name, imageUrl }) => {
  return (
    <Link href={`/collections/${slug}`}>
      <div className='mb-3 lg:mb-0'>
        <div className='relative aspect-square overflow-hidden rounded-md bg-white'>
          <Image
            src={imageUrl}
            alt={`Category: ${name}`}
            layout='fill'
            objectFit='cover'
            className='transition-transform duration-700 hover:scale-105'
          />
        </div>
        <div className='lg:mt-6'>
          <p className='text-center font-semibold'>{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
