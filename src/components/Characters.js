import { Link } from 'react-router-dom';

import { HomeWorld } from './HomeWorld';
import { MyAvatar } from './MyAvatar';
import { extractID } from 'helper/extractID';

import styles from 'styles/components/Characters.module.css';

export const Characters = ({ character }) => {
  const homeworldID = extractID(character.homeworld);
  const characterID = extractID(character.url);

  return (
    <Link to={`character/${characterID}`}>
      <div className={styles.character}>
        <MyAvatar data={character} />

        <div className={styles.characterInfo}>
          <h4>{character.name}</h4>
          <div>
            <p>Homeworld:</p>
            <p>
              <HomeWorld homeworldID={homeworldID} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
