
'use client';
import styles from './navbar.module.css';
import logo from '../../assets/ngmusic.svg';
import Image from 'next/image';
import SearchLogo from '../../assets/search.svg';
import MenuLogo from '../../assets/menu.svg';
import { useState } from 'react';
import { Modal } from '..';

export function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => setShowModal(false);
  return (
    <div>
      <Modal visible={showModal} hideModal={hideModal}  />
      <nav className={styles.navbar}>
        <div>
          <Image
            src={MenuLogo}
            alt="logo"
            width={14}
            height={14}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src={logo}
            alt="logo"
            width={72.2}
            height={15.8}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src={SearchLogo}
            alt="search"
            width={14}
            height={14}
            objectFit="contain"
            onClick={() => setShowModal(true)}
          />
        </div>
      </nav>
    </div>
  )
}