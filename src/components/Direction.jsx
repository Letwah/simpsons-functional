const Direction = (props) => {
  const { onDirection, id } = props;
  return (
    <>
      <div>
        <label className="directionToggle">
          Switch Character Direction
          <input
            type="checkbox"
            onClick={() => {
              console.log("ran", Date.now());
              onDirection(id);
            }}
          />
          <span className="slider round"></span>
        </label>

        {/* {onDirection ? setDirectionToggle : } */}
      </div>
    </>
  );
};

export default Direction;
