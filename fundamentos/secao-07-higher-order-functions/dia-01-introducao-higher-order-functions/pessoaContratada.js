const employeEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return {fullName, email:`${email}@trybe.com`};
}; 


const newEmployees = (employeEmail) => {
  const employees = {
    id1: employeEmail('Pedro Guerra'),
    id2: employeEmail('Luiza Drumond '),
    id3: employeEmail('Carla Paiva '),
    }
  return employees;
};
console.log(newEmployees(employeEmail))