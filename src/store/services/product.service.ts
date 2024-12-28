import configs from "@/lib/config"
import type { IProduct } from "@/lib/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface ProductResponse {
  status: number
  message: string
  data: IProduct[]
  totalPage: number
}

interface ProductDetailResponse {
  status: number
  message: string
  data: IProduct
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${configs.HOST}/api` }),
  tagTypes: ["Products"],
  // keepUnusedDataFor: 60, // Cache storage duration
  // refetchOnMountOrArgChange: 30, // Re-fetch duration
  // refetchOnFocus: true, // Re-fetch when the browser regains focus
  // refetchOnReconnect: true, // Re-fetch on reconnect
  endpoints: (build) => ({
    getProducts: build.query<
      ProductResponse,
      { limit?: number; page?: number; search?: string; sortDir?: string; priceFrom?: number; priceTo?: number }
    >({
      query: ({ limit, page, search, sortDir, priceFrom, priceTo }) => {
        const params = new URLSearchParams()
        if (limit) params.append("limit", String(limit))
        if (page) params.append("page", String(page))
        if (search) params.append("search", search)
        if (sortDir) params.append("sortDir", sortDir)
        if (priceFrom) params.append("priceFrom", String(priceFrom))
        if (priceTo) params.append("priceTo", String(priceTo))
        return `product?${params.toString()}`
      },
      providesTags: (results) => {
        if (results) {
          return [
            ...results.data.map(({ _id }) => ({ type: "Products" as const, id: _id })),
            { type: "Products" as const, id: "LIST" },
          ]
        }
        return [{ type: "Products" as const, id: "LIST" }]
      },
    }),

    getProductDetail: build.query<ProductDetailResponse, { slug: string; accessToken: string }>({
      query: (values: { slug: string; accessToken: string }) => {
        return {
          url: `product/${values.slug}`,
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${values.accessToken}`,
          },
        }
      },
    }),
  }),
})

export const { useGetProductsQuery, useGetProductDetailQuery } = productApi
