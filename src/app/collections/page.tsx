"use client"
import { ICategory } from "@/lib/types"
import React, { useEffect, useState } from "react"

const Page = () => {
  const [collections, setCollections] = useState<ICategory[]>([])
  useEffect(() => {
    const getCollections = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BEHOST}/category/getAll`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        const categoryData = await response.json()
        setCollections(categoryData.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCollections()
  }, [])
  console.log(collections)
  return (
    <>
      {collections.length ? (
        <div>
          {collections.map((itemCate, index) => (
            <div key={index}>
              {itemCate.name} {itemCate.image}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}

export default Page
