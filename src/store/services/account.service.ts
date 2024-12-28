import type { RegisterFormInputs } from "@/app/account/register/form_register"
import configs from "@/lib/config"
import type { IAccount } from "@/lib/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${configs.HOST}/api` }),
  tagTypes: ["Accounts"],
  // keepUnusedDataFor: 60, // cache lưu trữ trong vòng 60s
  // refetchOnMountOrArgChange: 30,
  // refetchOnFocus: true, //gọi lại api khi focus
  // refetchOnReconnect: true, // gọi lại api khi truy cập lại web
  endpoints: (build) => ({
    getAccount: build.query<ResponseAccount, string>({
      query: (accessToken: string) => {
        return {
          url: `user/me`,
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      },
    }),
    loginAccount: build.mutation<AccountResponseLogin, { email: string; password: string }>({
      query: (values: { email: string; password: string }) => {
        return {
          url: `auth/login`,
          method: "POST",
          credentials: "include",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      },
    }),
    registerAccount: build.mutation<ResponseAccount, Omit<RegisterFormInputs, "repassword">>({
      query: (values: Omit<RegisterFormInputs, "repassword">) => {
        return {
          url: `auth/register`,
          method: "POST",
          credentials: "include",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      },
    }),
  }),
})

export interface ResponseAccount {
  status: number
  message: string
  data: IAccount
}

interface AccountResponseLogin {
  status: number
  message: string
  accessToken: string
  refreshToken: string
}

export const { useGetAccountQuery, useLoginAccountMutation, useRegisterAccountMutation } = accountApi
