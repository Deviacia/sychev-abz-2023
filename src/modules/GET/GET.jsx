import React, {useRef, useEffect} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchUsers} from '../../api/fetchUsers';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';
import {Button, Preloader} from '../../components/UI';
import styles from './GET.module.scss';

const GET = () => {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({pageParam = 1}) => fetchUsers(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage.total_pages;
      const nextPage = allPages.length + 1;

      return nextPage <= maxPages ? nextPage : undefined;
    },
    keepPreviousData: true,
    // suspense: true,
  });

  const gridRef = useRef(null);

  useEffect(() => {
    if (isFetchingNextPage) {
      window.scrollTo(0, gridRef.current.clientHeight);
    }
  }, [isFetchingNextPage]);

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.get} ref={gridRef}>
      <h1>Working with GET request</h1>
      {isLoading ? <Preloader/> :
        <Grid>
          {data.pages.map((page) => (
            page.users.map((user) => (
              <Card
                key={user.id}
                photo={user.photo}
                name={user.name}
                position={user.position}
                email={user.email}
                phone={user.phone}
              />
            ))
          ))}
          {isFetchingNextPage && <Preloader/>}
        </Grid>}
      <Button
        disabled={!hasNextPage || isFetchingNextPage || isLoading}
        onClick={() => fetchNextPage()}
      >
          Load more
      </Button>
    </div>
  );
};

export default GET;
