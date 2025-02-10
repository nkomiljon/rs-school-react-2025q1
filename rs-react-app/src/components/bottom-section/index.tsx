import { FC } from 'react';
import { Loading } from '../loading';
import { useFetchData } from '../../api';
import { Film } from '../../models/film';
import { Link } from 'react-router';

interface BottomSectionProps {
  searchString: string;
}

export const BottomSection: FC<BottomSectionProps> = ({ searchString }) => {
  const { data, loading, error } = useFetchData(searchString);

  return (
    <section className="bottom-section">
      <div className="searched-text">
        <h1>Searched text: {searchString}</h1>
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <div className="list">
              {data &&
                data.map((film: Film, i) => (
                  <Link to={`details/${film.episode_id}`} key={i}>
                    <div className="card">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="film"
                      />
                      <h2>{film.title}</h2>
                      <p>
                        <b>Director:</b> {film.director}
                      </p>
                      <span>
                        <b>Producer:</b> {film.producer}
                      </span>
                      <p>
                        <b>Release date:</b> {film.release_date}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};
