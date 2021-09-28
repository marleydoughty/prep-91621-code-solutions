var person = {
  firstName: 'Marley',
  lastName: 'Doughty',
  hobby: 'Minecraft'
};
console.log(person);
var fullName;
fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Behavior Technician';
console.log("The person's current job is:", person.job);
person.previousJob = 'Server';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
