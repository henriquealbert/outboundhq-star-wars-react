import { Film } from './Film';

import styles from 'styles/components/PeopleDetails.module.css';
import { MyAvatar } from './MyAvatar';

export const PeopleDetails = ({ data }) => {
  return (
    <div className={styles.peopleDetailsWrapper}>
      <div className={styles.peopleDetails}>
        <MyAvatar people={data} width="150px" height="150px" />
        <table className={styles.tableDetails}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <td>Hair Color:</td>
              <td>{data.hair_color}</td>
            </tr>
            <tr>
              <td>Eye Color:</td>
              <td>{data.eye_color}</td>
            </tr>
            <tr>
              <td>Height:</td>
              <td>{data.height}</td>
            </tr>
            <tr>
              <td>Mass:</td>
              <td>{data.mass}</td>
            </tr>
            <tr>
              <td>Skin Color:</td>
              <td>{data.skin_color}</td>
            </tr>
            <tr>
              <td>Birth Year:</td>
              <td>{data.birth_year}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.listOfFilms}>
        <p>List of Films:</p>
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
    </div>
  );
};
