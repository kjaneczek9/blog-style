// import Link from 'next/link';

// // const navItems = {
// //   '/': {
// //     name: 'Home',
// //   },
// //   '/about':{
// //     name: "About"
// //   },
// //   '/work': {
// //     name: 'Works',
// //   },
// //   '/gallery': {
// //     name: 'Gallery',
// //   },
// //   '/contact': {
// //     name: 'Contact',
// //   },
// // };


// const navItems = [
//   {name: "Home", path:"/"},
//   {name: "About", path:"/about"},
//   {name: "Works", path:"/work", dropdown:["testing"]},
//   {name: "Gallery", path:"/gallery"},
//   {name: "Contact", path:"/contact"},
// ]

// export function Navbar() {
//   return (
//     <div className="position-sticky top-0 flex fixed z-50 w-full h-[70px] no-underline nav-bar-color">
//       {navItems.map((link) => {
//         {link.dropdown ? (
//             <span>{link.title}</span>
//         ) : (
//           <Link href={link.path} className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic?"></Link>
//         )}
//         {link.dropdown && (
//           {link.dropdown.map((item) => (
//           <Link href={`/work/${item.toLowercase()}`} className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic?"></Link>
//           ))}
//         )}
//           },
// };
import Link from 'next/link';
import React from 'react';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/work", dropdown: ["testing"] },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  return (
    <div className="position-sticky top-0 flex fixed z-50 w-full h-[70px] no-underline nav-bar-color">
      {navItems.map((link) => (
        <React.Fragment key={link.name}>
          {link.dropdown ? (
            <span>{link.name}</span>
          ) : (
            <Link href={link.path}>
              <a className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic">{link.name}</a>
            </Link>
          )}
          {link.dropdown && (
            link.dropdown.map((item, index) => (
              <Link key={index} href={`/work/${item.toLowerCase()}`}>
                <a className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic">{item}</a>
              </Link>
            ))
          )}
        </React.Fragment>
      ))}
    </div>
  );
}


//         // return (
//         //   <Link
//         //     key={path}
//         //     href={path}
//         //     className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic"
//         //   >
//         //     {name}
//         //   </Link>
//         );
//       })}
//   </div>
//   );
// }



// export function Navbar() {
//   return (
//     <div className="position-sticky top-0 flex fixed z-50 w-full h-[70px] no-underline nav-bar-color">
//       {Object.entries(navItems).map(([path, { name }]) => {
//         return (
//           <Link
//             key={path}
//             href={path}
//             className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic"
//           >
//             {name}
//           </Link>
//         );
//       })}
//   </div>
//   );
// }