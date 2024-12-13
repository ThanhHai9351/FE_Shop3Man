import AccountBar from "@/components/header/account_bar"
import CartSideBar from "@/components/header/cart-side-bar"
import Menu from "@/components/header/menu"
import Menulog from "@/components/header/menulog"
import SearchText from "@/components/header/search-text"
import Logo from "@/shared/logo/logo"
import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <div>
      <div className='bg-slate-700 p-5 flex items-center justify-between'>
        <Logo width={50} />
        <SearchText />
        <Menulog />
        <div className='flex items-center'>
          <AccountBar />
          <CartSideBar />
        </div>
      </div>
      <div className='bg-gray-600'>
        <Menu />
      </div>
    </div>
  )
}

export default Header
