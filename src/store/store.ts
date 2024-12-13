import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { accountApi } from "@/store/services/account.service"
import { setupListeners } from "@reduxjs/toolkit/query"
import { categoryApi } from "@/store/services/category.service"

const store = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(accountApi.middleware).concat(categoryApi.middleware)
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
