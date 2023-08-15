import satData from "./satData.js";

//Pass the props created from the App() function: filterByType, setSat, and displaySats.
// <button onClick () => {
  //return (props.setSat(satData)})
  //{props.setSat} {props.filterByType} {props.displaySats}
//  </button>
const Buttons = (props) => {
  const AllOrbits = () => {
    //props.setData(satData)
  
return (
     <></>
)
}

  return (
    <div>
{props.displaySats.map((sat, id) => {
    
    return (
      <button onClick={() => props.filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })}
 <button onClick ={() => props.setSat(satData)}>
        All Orbits
      </button>
      </div>
)
}


export default Buttons;;