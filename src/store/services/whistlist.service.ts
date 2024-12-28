import configs from "@/lib/config"
import { IProduct } from "@/lib/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface WhistlistHandleResponse {
  userId: string
  product: IProduct
  _id: string
}
interface WhistlistResponse {
  status: number
  message: string
  data: WhistlistHandleResponse
}

export const whistlistApi = createApi({
  reducerPath: "whistlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${configs.HOST}/api` }),
  tagTypes: ["Whistlist"],
  endpoints: (build) => ({
    addWhistlist: build.mutation<WhistlistResponse, { productId: string; accessToken: string }>({
      query: (values: { productId: string; accessToken: string }) => {
        return {
          url: `whistlist`,
          method: "POST",
          credentials: "include",
          body: { productId: values.productId },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${values.accessToken}`,
          },
        }
      },
    }),
    removeWhistlist: build.mutation<WhistlistResponse, { productId: string; accessToken: string }>({
      query: (values: { productId: string; accessToken: string }) => {
        return {
          url: `whistlist`,
          method: "DELETE",
          credentials: "include",
          body: { productId: values.productId },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${values.accessToken}`,
          },
        }
      },
    }),
  }),
})

export const { useAddWhistlistMutation, useRemoveWhistlistMutation } = whistlistApi
