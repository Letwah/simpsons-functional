import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons, onDelete, onLikeToggle, onLikeDislikeInput } = props;
  return (
    <>
      {simpsons.map((item) => {
        return (
          <Character
            item={item}
            key={item.id}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
            onLikeDislikeInput={onLikeDislikeInput}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
