import { SearchComponent } from '..';
import styles from './modal.module.css';
import CloseButton from './assets/x.svg';
import Image from 'next/image';

interface Props {
  visible?: boolean;
  hideModal?(): void;
}

export function Modal(props: Props) {
  const { visible = true, hideModal } = props;
  if (!visible) return <></>;
  return (
    <div className={`${styles.modal} place-content-center`}>
      <button onClick={hideModal}>
        <Image
          src={CloseButton}
          height={12}
          width={12}
          alt="close button"
          className="absolute top-4 right-4"
        />
      </button>
      <div className="text-center">
        <div className={styles.searchLabel}>
          Search
        </div>
        <div className="p-10">
          <SearchComponent isModal={true} onSearchTrigger={hideModal} />
        </div>
      </div>
    </div>
  )
}