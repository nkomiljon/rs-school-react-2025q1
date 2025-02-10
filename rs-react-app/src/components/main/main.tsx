import { FC, useEffect, useState } from 'react';
import { TopSection } from '../top-section';
import { BottomSection } from '../bottom-section';

export const Main: FC = () => {
  const [searchString, setSearchSrting] = useState<string>('');

  useEffect(() => {
    const localStorageKey = localStorage.getItem('searchValue') || '';
    setSearchSrting(localStorageKey);
  }, []);

  const handleSearchClick = (searchValue: string) => {
    setSearchSrting(searchValue);
  };

  return (
    <>
      <TopSection onSearchClick={handleSearchClick} />
      <BottomSection searchString={searchString} />
    </>
  );
};
