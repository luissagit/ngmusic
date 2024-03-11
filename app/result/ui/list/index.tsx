import Image from 'next/image';
import styles from './list.module.css';
import CurrencyLogo from './assets/currency-dollar.svg';

interface Props {
  data: any[]
}

export function List(props: Props) {
  const { data = [] } = props;
  return (
    <div className="grid gap-5 p-5">
      {data.map((item, index) => {
        return (
          <div key={index} className={`${styles.card} flex gap-3`}>
            <div className={`rounded-md overflow-hidden ${styles.artwork}`}>
              <Image
                src={item?.artworkUrl100}
                alt={item?.trackName}
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div className="flex justify-between flex-col w-8/12">
              <div>
                <div className={styles.artistName}>{item?.artistName}</div>
                <div className={styles.trackName}>{item?.trackName}</div>
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