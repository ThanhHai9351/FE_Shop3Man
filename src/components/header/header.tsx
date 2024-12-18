import AccountBar from "@/components/header/account_bar"
import CartSideBar from "@/components/header/cart-side-bar"
import Menu from "@/components/header/menu"
import Menulog from "@/components/header/menulog"
import SearchText from "@/components/header/search-text"
import Logo from "@/components/logo/logo"
import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <>
      <div className='bg-slate-600 p-5 flex items-center justify-between'>
        <Logo width={50} />
        <SearchText />
        <Menulog />
        <div className='flex items-center'>
          <AccountBar />
          <CartSideBar />
        </div>
      </div>
      <div className='border-neutral-300 border-b bg-slate-300'>
        <Menu />
      </div>
    </>
  )
}

export default Header
