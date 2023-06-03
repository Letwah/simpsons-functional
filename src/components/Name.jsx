const Name = (props) => {
  const { liked, character, onLikeToggle, id } = props;
  // console.log(props);
  return (
    <div>
      <h2>{character}</h2>
      <button className="liked" onClick={() => onLikeToggle(!liked)}>
        {liked ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
