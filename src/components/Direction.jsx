const Direction = (props) => {
  const { onDirection, setDirection, characterDirection } = props;
  return (
    <>
      <div>
        <label
          onClick={() => onDirection(setDirection, characterDirection)}
          className="directionToggle"
        >
          Switch Character Direction
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>

        {/* {toggle ? setToggle : toggle} */}
      </div>
    </>
  );
};

export default Direction;
