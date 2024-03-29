import { calculateAge } from "./utils/age";
import Title from "./Title";
import ModuleDetails from "./ModuleDetails";

function HelloWorld() {
  const name = 'John Connor';
  const birth = '11/02/1989';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  )
}

export default HelloWorld;