import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { accountApi } from "@/store/services/account.service"
import { setupListeners } from "@reduxjs/toolkit/query"
import { categoryApi } from "@/store/services/category.service"
import { productApi } from "@/store/services/product.service"


const store = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(accountApi.middleware)
      .concat(categoryApi.middleware)
      .concat(productApi.middleware)
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
