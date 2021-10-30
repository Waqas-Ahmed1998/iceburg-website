'use strict';
import { useState, useEffect } from 'react';
import style from '../styles/navbar.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Navbar = function () {
  let [onClick, setClass] = useState(true);
  const [effect, setEffect] = useState(true);

  setClass = () => {
    document.getElementById('manueItems').classList.toggle(style.active);

    setEffect(!effect);
  };

  useEffect(() => {}, [effect]);

  return (
    <nav id='navbar' className={style.navbar}>
      <div className={`container ${style.flex}`}>
        <div>
          <h1 className={style.logo}>
            {' '}
            <Image
              src={'/ice.png'}
              alt='web'
              height={100}
              width={100}
              priority={true}
            />
          </h1>
        </div>
        <div className={style.manue}>
          <motion.p whileTap={{ scale: 1.2 }} onClick={setClass}>
            {effect ? (
              <i className={`fas fa-stream ${style.icon}`}></i>
            ) : (
              // <CloseIcon fontSize='large' />
              <i className={`fas fa-times ${style.icon}`}></i>
            )}
          </motion.p>
        </div>
        <div id='manueItems' className={style.linkItems}>
          <ul>
            <li>
              <a href='#navbar'>HOME</a>
            </li>
            <li>
              <a href='#about'>ABOUT</a>
            </li>
            <li>
              <a href='#services'>SERVICES</a>
            </li>{' '}
            <li className={style.btnContact}>
              {' '}
              <a href='#footer'>Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// <h1 className={style.logo}>logo</h1>

// < MenuIcon fontSize='large' />
export default Navbar;
