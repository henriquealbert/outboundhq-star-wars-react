import { Film } from './Film';

import styles from 'styles/components/PeopleDetails.module.css';

export const PeopleDetails = ({ data }) => {
  return (
    <div className={styles.peopleDetails}>
      <p>{data.name}</p>
      <p>{data.gender}</p>
      <p>{data.hair_color}</p>
      <p>{data.eye_color}</p>
      <p>{data.height}</p>
      <p>{data.mass}</p>
      <p>{data.skin_color}</p>
      <p>{data.birth_year}</p>
      <ul>
        {data.films.map((film) => {
          const filmID = film.replace(/[^0-9]/g, '');
          return (
            <li key={film}>
              <Film filmID={filmID} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
