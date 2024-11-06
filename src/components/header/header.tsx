import AccountBar from "@/components/header/account_bar"
import CartBar from "@/components/header/cart_bar"
import Menu from "@/components/header/menu"
import Logo from "@/shared/logo/logo"
import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <div>
      <div className='bg-slate-500 p-5 flex items-center justify-around'>
        <Logo width={50} />
        <Menu />
        <div className='flex items-center'>
          <AccountBar />
          <Link href={"/cart"}>
            <CartBar itemCount={3} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header