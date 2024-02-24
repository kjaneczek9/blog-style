import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/art': {
    name: 'Works',
  },
  '/about':{
    name: "About"
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
    <div className="position-sticky top-0 flex fixed z-50 w-full h-[70px] no-underline bg-white">
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
