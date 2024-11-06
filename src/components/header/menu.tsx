
import Link from 'next/link';

const dataMenu: { name: string; href: string }[] = [
  {
    name: 'Collections',
    href: '/collections',
  },
  {
    name: 'Products',
    href: '/products',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Menu = () => {
  return (
    <div className="p-3">
      {dataMenu.map((menuItem, index) => (
        <Link
          key={index}
          href={menuItem.href}
          className={
         'p-3 text-slate-50'
          }
        >
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;