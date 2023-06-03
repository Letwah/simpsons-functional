import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } = props.item;
  const { onLikeToggle, onDelete } = props;

  if (characterDirection === "Right") {
    return (
      //this is like each "card"
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} character={character} liked={liked} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  }
  return (
    //this is like each "card" character direction
    <div className="characterContainer">
      <Name
        character={character}
        onLikeToggle={onLikeToggle}
        id={id}
        liked={liked}
      />
      <Image image={image} character={character} liked={liked} />
      <Quote quote={quote} />
      <Delete onDelete={onDelete} id={id} />
    </div>
  );
};
export default Character;
