import Link from "next/link"
import React from "react"

const Menulog = () => {
  const navItems: { name: string; href: string }[] = [
    {
      name: "Catalog",
      href: "/collections",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
  ]
  return (
    <div className='flex items-center justify-end gap-4'>
      <div className='hidden  xl:block'>
        <ul className='flex'>
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className='underline p-3 text-sm text-slate-100 duration-300 hover:text-neutral-800 dark:text-neutral-300  dark:hover:text-neutral-100'
            >
              <Link href={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menulog
