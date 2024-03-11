import Image from 'next/image';
import styles from './list.module.css';
import CurrencyLogo from './assets/currency-dollar.svg';

export function Skeleton() {
  const data: any[] = Array.from(Array(10).keys()); 
  return (
    <div className="grid gap-5 p-5">
      {data.map((item, index) => {
        return (
          <div key={index} className={`${styles.card} flex gap-3`}>
            <div className={`rounded-md overflow-hidden ${styles.artwork} animate-pulse`}>
              <Image
                src={item?.artworkUrl100}
                alt={item?.trackName}
                height={100}
                width={100}
                objectFit="cover"
                className="bg-slate-400"
              />
            </div>
            <div className="flex justify-between flex-col w-8/12 animate-pulse">
              <div>
                <div className="h-2 w-10 bg-slate-400 rounded">{item?.artistName}</div>
                <div className="h-3 w-40 mt-2 bg-slate-400 rounded">{item?.trackName}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className={styles.genre}>
                  {item?.primaryGenreName}
                </div>
                <div className="flex">
                  <Image
                    src={CurrencyLogo}
                    width={16}
                    height={16}
                    alt="curreny"
                  />
                  <span className={styles.trackPrice}>{item?.trackPrice}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}