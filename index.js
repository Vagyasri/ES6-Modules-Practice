/* eslint-disable no-console */
// * Import class
// import Bio from './app.js';

import Bio from "./app"

// const user1 = new Bio('Lucky', 28);
// console.log(user1);

// * CAN BE DONE LIKE BELOW as import can change the name of an object
// import B from './app.js';
// const user1 = new B('Lucky', 28);
// console.log(user1);

// Import class along with functions
import Bio, {displayName, displayAge} from './app.js'

// *You can change the function name using 'as'
// import Bio, {displayName as displayUserName, displayAge as displayUserAge} from './app.js'





