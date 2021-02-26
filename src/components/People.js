import { HomeWorld } from './HomeWorld';

import styles from 'styles/components/People.module.css';
import Avatar from 'avataaars';

export const People = ({ people }) => {
  const id = people.homeworld.replace(/[^0-9]/g, '');

  console.log(people);

  return (
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
        <HomeWorld id={id} />
      </p>
    </div>
  );
};
