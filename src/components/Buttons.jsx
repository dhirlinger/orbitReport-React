import satData from "./satData";

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
const clickHandler = () => {
  setSat(satData)
}
  return (
    <div>
      {orbitTypes.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit
          </button>
        );
      })}
    
      <button onClick={clickHandler}>All Orbits</button>
    </div>
  );
};

export default Buttons;