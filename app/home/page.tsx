import Image from 'next/image';
import styles from './home.module.css';
import logo from './assets/logo.svg';
import { SearchComponent } from '../result/ui';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense>
      <div className={styles.bg}>
        <Image
          src={logo}
          width={72.2}
          height={83.8}
          alt="logo image"
          className={styles.logo}
        />
        <div className={styles.bottom}>
          <SearchComponent />
        </div>
      </div>
    </Suspense>
  );
}