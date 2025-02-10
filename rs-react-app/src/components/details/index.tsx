import { FC } from 'react';
import { useParams } from 'react-router';
import { useFetchDataById } from '../../api';

export const Details: FC = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchDataById(Number(id));

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="detail">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="film"
          />
          <h1>{data.title}</h1>
          <p>{data.director}</p>
          <p>{data.opening_crawl}</p>
        </div>
      )}
    </>
  );
};
