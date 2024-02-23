import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/art': {
    name: 'My Art',
  },
  '/gallery': {
    name: 'Gallery',
  },
  '/contact': {
    name: 'Contact',
  },
};

export function Navbar() {
  return (
    <div className="z-100 flex fixed top-0 w-full h-[70px] no-underline bg-#5e5959">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-bold"
          >
            {name}
          </Link>
        );
      })}
  </div>
  );
}
