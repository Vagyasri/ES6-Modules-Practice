/* eslint-disable no-console */
export default class Bio {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export function displayName(bio) {
  console.log(`Name: ${bio.name}`);
}
export function displayAge(bio) {
  console.log(`Age: ${bio.age}`);
}