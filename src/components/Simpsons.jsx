import Character from "./Character";

const Simpsons = (props) => {
  const {
    simpsons,
    onDelete,
    onLikeToggle,
    onLikeDislikeInput,
    onDirection,
    onSetDirectionToggle,
  } = props;
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
            onDirection={onDirection}
            setDirectionToggle={onSetDirectionToggle}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
