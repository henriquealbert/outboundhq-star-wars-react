import { useEffect, useRef } from 'react';
import Avatar from 'avataaars';

export const MyAvatar = ({ people }) => {
  // if the character is male: BeardLight + BlazerShirt + ShortHairShortFlat
  // if the character is female: no beard + Pink ShirtVNeck + LongHairCurvy
  // if the character is n/a: no beard + Blue ShirtScoopNeck + NoHair
  // if the character is hermaphrodite: no beard + PastelYellow Hoodie + LongHairNotTooLong

  // created the reference to get the eyes html elements
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      // selected the eyes
      const eyesHtmlCollection =
        containerRef.current.children[0].children[2].children[0].children[0]
          .children[3].children[2].children[2].children;

      // converted eyes html collection to array
      const eyesArray = Array.from(eyesHtmlCollection);

      // looped through eyesArray to change each eye color
      eyesArray?.map((eye) => {
        eye.setAttribute('fill', people.eye_color);
      });
    }
  }, [people]);

  return (
    <div ref={containerRef}>
      <Avatar
        id={people.name}
        avatarStyle="Circle"
        accessoriesType="Blank"
        eyeType="Default"
        eyebrowType="DefaultNatural"
        hairColor={people.hair_color}
        facialHairType={people.gender === 'male' ? 'BeardLight' : 'Blank'}
        skinColor={people.skin_color === 'gold' ? 'Yellow' : people.skin_color}
        topType={
          people.gender === 'male'
            ? 'ShortHairShortFlat'
            : people.gender === 'n/a'
            ? 'NoHair'
            : people.gender === 'female'
            ? 'LongHairCurvy'
            : people.gender === 'hermaphrodite'
            ? 'LongHairNotTooLong'
            : 'NoHair'
        }
        clotheType={
          people.gender === 'male'
            ? 'BlazerShirt'
            : people.gender === 'n/a'
            ? 'ShirtScoopNeck'
            : people.gender === 'female'
            ? 'ShirtVNeck'
            : people.gender === 'hermaphrodite'
            ? 'Hoodie'
            : 'ShirtScoopNeck'
        }
        clotheColor={
          people.gender === 'n/a'
            ? 'Blue01'
            : people.gender === 'female'
            ? 'Pink'
            : people.gender === 'hermaphrodite'
            ? 'PastelYellow'
            : 'Blue01'
        }
        mouthType={
          people.gender === 'male'
            ? 'Default'
            : people.gender === 'n/a'
            ? 'Serious'
            : people.gender === 'female'
            ? 'Smile'
            : people.gender === 'hermaphrodite'
            ? 'Twinkle'
            : 'Serious'
        }
        style={{
          width: '80px',
          height: '80px'
        }}
      />
    </div>
  );
};
