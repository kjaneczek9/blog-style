import Link from 'next/link';
const clientEmail = "gotoceleste@gmail.com";
const subject = "Ur mom";
const body = "Ur mom gae";

const mailtoLink = `mailto:${clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const navItems = {
  '/': {
    name: 'Home',
  },
  '/about':{
    name: "About"
  },
  '/work': {
    name: 'Works',
  },
  '/gallery': {
    name: 'Gallery',
  },
  [mailtoLink]: {
    name: 'Contact',
  },
};

export function Navbar() {
  return (
    <div className="position-sticky top-0 flex fixed z-50 w-full h-[70px] no-underline nav-bar-color">
      {Object.entries(navItems).map(([path, { name }]) => {
        if (path == mailtoLink) {
          return (
            <Link
              key={path}
              href={path}
              target="_blank"
              className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic"
            >
              {name}
            </Link>
          );
        } else {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic"
            >
              {name}
            </Link>
          );
        }
      })}
  </div>
  );
}
