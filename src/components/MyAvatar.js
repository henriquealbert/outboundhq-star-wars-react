import { useEffect, useRef } from 'react';
import Avatar from 'avataaars';

export const MyAvatar = ({ data, width, height }) => {
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
        eye.setAttribute('fill', data.eye_color);
      });
    }
  }, [data]);

  return (
    <div ref={containerRef}>
      <Avatar
        id={data.name}
        avatarStyle="Circle"
        accessoriesType="Blank"
        eyeType="Default"
        eyebrowType="DefaultNatural"
        hairColor={data.hair_color}
        facialHairType={data.gender === 'male' ? 'BeardLight' : 'Blank'}
        skinColor={data.skin_color === 'gold' ? 'Yellow' : data.skin_color}
        topType={
          data.gender === 'male'
            ? 'ShortHairShortFlat'
            : data.gender === 'n/a'
            ? 'NoHair'
            : data.gender === 'female'
            ? 'LongHairCurvy'
            : data.gender === 'hermaphrodite'
            ? 'LongHairNotTooLong'
            : 'NoHair'
        }
        clotheType={
          data.gender === 'male'
            ? 'BlazerShirt'
            : data.gender === 'n/a'
            ? 'ShirtScoopNeck'
            : data.gender === 'female'
            ? 'ShirtVNeck'
            : data.gender === 'hermaphrodite'
            ? 'Hoodie'
            : 'ShirtScoopNeck'
        }
        clotheColor={
          data.gender === 'n/a'
            ? 'Blue01'
            : data.gender === 'female'
            ? 'Pink'
            : data.gender === 'hermaphrodite'
            ? 'PastelYellow'
            : 'Blue01'
        }
        mouthType={
          data.gender === 'male'
            ? 'Default'
            : data.gender === 'n/a'
            ? 'Serious'
            : data.gender === 'female'
            ? 'Smile'
            : data.gender === 'hermaphrodite'
            ? 'Twinkle'
            : 'Serious'
        }
        style={{
          width: width ? width : '80px',
          height: height ? height : '80px'
        }}
      />
    </div>
  );
};
