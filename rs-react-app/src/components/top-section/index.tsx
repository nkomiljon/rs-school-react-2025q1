import { ChangeEvent, FC, useEffect, useState } from 'react';

interface TopSectionProps {
  onSearchClick: (searchValue: string) => void;
}

const useLocalStorage = (): [string, (value: string) => void] => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const storedValue = localStorage.getItem('searchString') || '';
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);

  const setSearchValue = (value: string) => {
    setInputValue(value);
    localStorage.setItem('searchString', value);
  };

  return [inputValue, setSearchValue];
};

export const TopSection: FC<TopSectionProps> = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useLocalStorage();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSearchClick();
  };

  const handleSearchClick = () => {
    onSearchClick(inputValue);
  };

  return (
    <>
      <header className="top-section" id="top-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="query"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};
