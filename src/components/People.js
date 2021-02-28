import Avatar from 'avataaars';
import { HomeWorld } from './HomeWorld';

import styles from 'styles/components/People.module.css';
import { Link } from 'react-router-dom';

export const People = ({ people }) => {
  const planetID = people.homeworld.replace(/[^0-9]/g, '');
  const peopleID = people.url.replace(/[^0-9]/g, '');

  return (
    <Link to={`people/${peopleID}`}>
      <div className={styles.people}>
        <Avatar
          avatarStyle="Circle"
          topType="LongHairStraight"
          accessoriesType="Blank"
          hairColor="BrownDark"
          facialHairType="Blank"
          clotheType="BlazerShirt"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Default"
          skinColor="Light"
        />
        <h4>name:</h4>
        <p>{people.name}</p>
        <h4>homeworld:</h4>
        <p>
          <HomeWorld planetID={planetID} />
        </p>
      </div>
    </Link>
  );
};
