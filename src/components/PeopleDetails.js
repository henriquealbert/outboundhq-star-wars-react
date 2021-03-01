import { Film } from './Film';

import styles from 'styles/components/PeopleDetails.module.css';
import { MyAvatar } from './MyAvatar';
import { HomeWorld } from './HomeWorld';
import { extractID } from 'helper/extractID';

export const PeopleDetails = ({ data }) => {
  const planetID = extractID(data.homeworld);

  return (
    <div className={styles.peopleDetailsWrapper}>
      <div className={styles.avatarWrapper}>
        <MyAvatar people={data} width="200px" height="200px" />
        <h1>{data.name}</h1>
      </div>
      <div className={styles.cardDetailsWrapper}>
        <h2>Character Details:</h2>
        <div className={styles.cardDetails}>
          <ul>
            <li>Gender:</li>
            <li>Hair Color:</li>
            <li>Eye Color:</li>
            <li>Height:</li>
            <li>Mass:</li>
            <li>Skin Color:</li>
            <li>Birth Year:</li>
            <li>Homeworld:</li>
            <li>Films:</li>
          </ul>
          <ul>
            <li>{data.gender}</li>
            <li>{data.hair_color}</li>
            <li>{data.eye_color}</li>
            <li>{data.height} cm</li>
            <li>{data.mass} kg</li>
            <li>{data.skin_color}</li>
            <li>{data.birth_year}</li>
            <li>
              <HomeWorld planetID={planetID} />
            </li>
            <li>
              {data.films.map((film) => {
                const filmID = film.replace(/[^0-9]/g, '');
                return (
                  <p key={filmID}>
                    <Film filmID={filmID} />
                  </p>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
