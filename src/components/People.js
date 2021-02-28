import { Link } from 'react-router-dom';
import { HomeWorld } from './HomeWorld';
import { MyAvatar } from './MyAvatar';
import { extractID } from 'helper/extractID';

import styles from 'styles/components/People.module.css';

export const People = ({ people }) => {
  const planetID = extractID(people.homeworld);
  const peopleID = extractID(people.url);

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
