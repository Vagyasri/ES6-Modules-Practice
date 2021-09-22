/* eslint-disable no-console */
class Bio {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function displayName(bio) {
  console.log(`Name: ${bio.name}`);
}
function displayAge(bio) {
  console.log(`Age: ${bio.age}`);
}