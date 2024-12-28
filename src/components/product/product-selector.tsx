"use client"

import ButtonWhistlisted from "@/components/product/button-whistlisted"
import { Button } from "@/components/ui/button"
import { formatCurrencyVND } from "@/helpers/format"
import type { IProduct } from "@/lib/types"
import React, { useEffect, useState, type FC } from "react"

interface Props {
  product: IProduct
}

const ProductSelector: FC<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.items[0]?._id)
  const [selectedColor, setSelectedColor] = useState(product.items[0]?.items[0]?.color)

  useEffect(() => {
    const sizeIndex = product.items.findIndex((p) => p._id === selectedSize)
    const newColor = product.items[sizeIndex]?.items[0]?.color
    setSelectedColor(newColor)
  }, [selectedSize])

  const sizeIndex = product.items.findIndex((p) => p._id === selectedSize)
  const colorIndex = product.items[sizeIndex]?.items.findIndex((s) => s.color === selectedColor)

  const variant = product.items[sizeIndex]?.items[colorIndex]

  return (
    <>
      <div className='mb-5 space-y-1'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-green-700'>{variant ? formatCurrencyVND(variant.price) : "N/A"}</span>{" "}
        </h1>
        <p className={`${!product?.items.length && "text-red-700"}`}>
          {product.items.length > 0 ? "Tax included." : "Sold out."}
        </p>
      </div>
      <div className='mb-6'>
        <p className='text-neutral-500 dark:text-neutral-300'>{product.description}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <p>Size:</p>
        {product.items.map((item) => (
          <Button
            onClick={() => setSelectedSize(item._id)}
            variant={selectedSize === item._id ? "default" : "outline"}
            key={item._id}
          >
            {item._id}
          </Button>
        ))}
      </div>
      <div className='flex gap-2 items-center mt-2'>
        <p>Color:</p>
        {sizeIndex !== -1 &&
          product.items[sizeIndex]?.items.map((item) => (
            <Button
              onClick={() => setSelectedColor(item.color)}
              variant={selectedColor === item.color ? "default" : "outline"}
              key={item.color}
            >
              {item.color}
            </Button>
          ))}
      </div>
      <div className='mb-5 mt-2 flex items-center gap-5'>
        <Button variant={"outline"} className='w-full underline'>
          Add To Cart
        </Button>
        <ButtonWhistlisted product={product} />
      </div>
    </>
  )
}

export default ProductSelector
