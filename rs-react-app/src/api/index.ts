import { useState, useEffect } from 'react';
import { Film } from '../models/film';

export interface DataResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Film[];
}

export async function fetchFilms(
  value: string = ''
): Promise<DataResponse | number> {
  const url: string = `https://swapi.dev/api/films/?search=${value}`; // `https://swapi.dev/api/planets/?search=${value}`;

  const res = await fetch(url);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export async function fetchFilmsById(id: number): Promise<Film | number> {
  const url: string = `https://swapi.dev/api/films/${id}/`;

  const res = await fetch(url);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export const useFetchData = (
  searchString: string
): { data: Film[] | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<Film[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFilms(searchString)
      .then((res) => {
        if (typeof res === 'number') {
          throw new Error(`Error: ${res}`);
        }
        setData(res.results);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [searchString]);

  return { data, loading, error };
};

export const useFetchDataById = (
  id: number
): { data: Film | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<Film | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFilmsById(id)
      .then((res) => {
        if (typeof res === 'number') {
          throw new Error(`Error: ${res}`);
        }
        setData(res);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
};
