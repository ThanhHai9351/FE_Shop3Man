"use client"
import { Button } from "@/components/ui/button"
import { formatCurrencyVND } from "@/helpers/format"
import type { IProduct, ISize } from "@/lib/types"
import React, { useState, type FC } from "react"

interface Props {
  product: IProduct
}
const ProductSelector: FC<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.items[0]._id || 0)
  const sizeIndex = product.items.findIndex((p)=> p._id === selectedSize)

  const [selectedColor,setSelectedColor] = useState(product.items[sizeIndex].items[0].color)
  const colorIndex = product.items[sizeIndex].items.findIndex((s)=>s.color===selectedColor)

  const varient = product.items[sizeIndex].items[colorIndex];

  return (
    <>
      <div className='mb-5 space-y-1'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-green-700'>{formatCurrencyVND(varient.price)}</span>{" "}
        </h1>
        <p className={` ${!product.items.length && "text-red-700"}`}>
          {product.items.length ? "Tax included." : "Sold out."}
        </p>
      </div>
      <div className='mb-6'>
        <p className='text-neutral-500 dark:text-neutral-300'>{product.description}</p>
      </div>
      <div className='flex gap-2 items-center '>
        <p>Size: </p>
        {product.items.map((item, index) => (
          <Button onClick={() => setSelectedSize(item._id)} variant={selectedSize === item._id ? "default" : "outline"} key={index}>
            {item._id}
          </Button>
        ))}
      </div>
      <div className='flex gap-2 items-center mt-2'>
        <p>Color:</p>
        {product.items[sizeIndex].items.map((item, index) => (
          <Button onClick={()=>setSelectedColor(item.color)} variant={selectedColor === item.color ? "default" : "outline"} key={index}>
            {item.color}
          </Button>
        ))}
      </div>
      <div className='mb-5 mt-2 flex items-center gap-5'>
        <Button variant={"outline"} className='w-full underline'>
          Add To Cart
        </Button>
      </div>
    </>
  )
}

export default ProductSelector
