'use client';

import { useState } from 'react';
import styles from './search.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  isModal?: boolean;
  onSearchTrigger?(value: string): void;
}

export function SearchComponent(props: Props) {
  const { isModal, onSearchTrigger } = props;
  const [searchValue, setSearchValue] = useState('');
  function onChange(event: any) {
    const value = event.target.value;
    setSearchValue(value);
  }

  const searchParams = useSearchParams();
  const { push } = useRouter();

  async function onSearch() {
    const term = searchValue;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    if (onSearchTrigger) onSearchTrigger(term);
    push(`result?${params.toString()}`);
  };
  
  return (
    <div>
      <input autoFocus className={styles.rectangle} placeholder="Artist / Album / Title" onChange={onChange} value={searchValue} />
      <button className={isModal ? styles.buttonModal : styles.button} onClick={onSearch}>
        <span className={styles.label}>Search</span>
      </button>
    </div>
  );
}