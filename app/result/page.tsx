'use client'

import { List, NavBar, Skeleton } from "./ui";
import styles from './result.module.css';
import { getResultData } from "./lib";
import { Suspense, useEffect, useState } from "react";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function getData(searchParams: any) {
    setLoading(true);
    const resultData = await getResultData(searchParams);
    const listData = resultData?.results ?? [];
    setListData(listData);
    setLoading(false);
  }

  useEffect(() => {
    getData(searchParams);
  }, [searchParams?.query]);

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <span className={styles.searchResultFor}>Search Result For:</span>
        <span className={styles.keyword}>{searchParams?.query ?? ''}</span>
      </div>
      {!loading && (
        <List data={listData} />
      )}
      {loading && <Skeleton />}
    </div>
  ) 
}