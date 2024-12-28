import configs from "@/lib/config"
import type { ICategory } from "@/lib/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface CategoryResponse {
  status: number
  message: string
  data: ICategory[]
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${configs.HOST}/api` }),
  tagTypes: ["Categories"],
  // keepUnusedDataFor: 60, // Cache storage duration
  // refetchOnMountOrArgChange: 30, // Re-fetch duration
  // refetchOnFocus: true, // Re-fetch when the browser regains focus
  // refetchOnReconnect: true, // Re-fetch on reconnect
  endpoints: (build) => ({
    getCategories: build.query<CategoryResponse, { limit?: number; page?: number; search?: string; sortDir?: string }>({
      query: ({ limit, page, search, sortDir }) => {
        const params = new URLSearchParams()
        if (limit) params.append("limit", String(limit))
        if (page) params.append("page", String(page))
        if (search) params.append("search", search)
        if (sortDir) params.append("sortDir", sortDir)
        return {
          url: `category?${params.toString()}`,
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      },
      providesTags: (results) => {
        if (results) {
          return [
            ...results.data.map(({ _id }) => ({ type: "Categories" as const, id: _id })),
            { type: "Categories" as const, id: "LIST" },
          ]
        }
        return [{ type: "Categories" as const, id: "LIST" }]
      },
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryApi
