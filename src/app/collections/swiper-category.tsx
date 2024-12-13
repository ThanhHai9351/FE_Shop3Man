"use client"

import CategoryCard from "@/app/collections/CategoryCard"
import type { ICategory } from "@/lib/types"
import { useEffect } from "react"
import Swiper from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const SwiperCategory = ({ categories }: { categories: ICategory[] }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 6,
      spaceBetween: 16,
      direction: getDirection(),
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: () => {
          swiper.changeDirection(getDirection())
        },
      },
    })

    function getDirection() {
      return window.innerWidth <= 760 ? "vertical" : "horizontal"
    }
  }, [])

  return (
    <div className='swiper hover:cursor-pointer'>
      <div className='swiper-wrapper'>
        {categories.map((item, index) => (
          <div className='swiper-slide' key={index}>
            <CategoryCard {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SwiperCategory
