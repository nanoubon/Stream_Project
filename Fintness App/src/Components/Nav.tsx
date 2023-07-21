import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '../assets/st_logo.png';
import useMediaQuery from './hooks/useMediaQuery';



function Nav() {

  const flexBetween = "flex justify-between";
  const navbarBackground = "bg-primary-100 drop-shadow";
  const textMenu = "uppercase text-white pt-5 pb-5  hover:text-secondary-500 duration-100";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <>
      <nav className='pb-3 sm:pb-10'>
        <div className={`${navbarBackground}{flexBetween} fixed top-0 z-30 w-full py-2 bg-primary-500`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16 `}>
              {/* left side */}
              <img className="object-cover h-4 w-auto m-3 sm:h-8" src={Logo} alt="logo" />
              {/* right side */}
              {isAboveMediumScreens ?
                (<div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-10 text-sm`}>
                    <Link to="/" className={`${textMenu}`}>Home</Link>
                    <Link to="/about" className={`${textMenu}`} >About</Link>
                    <Link to="/blog" className={`${textMenu}`}>Blog</Link>
                    <Link to="/contact" className={`${textMenu}`}>Contact</Link>
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <div className=" rounded-md bg-secondary-500 hover:bg-primary-300 text-sm pt-3 pb-3 m-3 py-10 px-10">
                      <Link to="/login" className='uppercase text-white pt-5 pb-5 duration-100'>Login</Link>
                    </div>
                  </div>
                </div>
                ) : (
                  <button
                    className=" rounded-full bg-secondary-500 p-4"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-6 w-6 text-white" />

                  </button>

                )}
            </div>
          </div>
        </div>
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-500 drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[20%] flex flex-col gap-1 text-lg">
              <Link to="/" className={`${textMenu}`}>Home</Link>
              <Link to="/about" className={`${textMenu}`} >About</Link>
              <Link to="/blog" className={`${textMenu}`}>Blog</Link>
              <Link to="/contact" className={`${textMenu}`}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav;