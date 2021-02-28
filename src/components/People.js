import { Link } from 'react-router-dom';
import { HomeWorld } from './HomeWorld';
import { MyAvatar } from './MyAvatar';

import styles from 'styles/components/People.module.css';

export const People = ({ people }) => {
  const planetID = people.homeworld.replace(/[^0-9]/g, '');
  const peopleID = people.url.replace(/[^0-9]/g, '');

  return (
    <Link to={`people/${peopleID}`}>
      <div className={styles.people}>
        <MyAvatar people={people} />
        <div className={styles.peopleInfo}>
          <h4>{people.name}</h4>
          <div>
            <p>Homeworld:</p>
            <p>
              <HomeWorld planetID={planetID} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
