alert("Hello, World!");
console.log("Hello, World!");
console.log("3 + 6 = ", 3 + 6);
console.log("This is a simple JavaScript program ");
console.log("Goodbye, World!");
console.error("This is an error message");
console.warn("This is a warning message");
console.info("This is an informational message");
console.debug("This is a debug message");

console.log(process.platform);
console.log(global.lnumber);
global.lnumber = 10;
console.log(global.lnumber);

const {EventEmmiter} = require('events');
const { convertProcessSignalToExitCode } = require('util');
const eventEmitter = new EventEmmiter();

eventEmitter.on('launch', () => {
    console.log('Welcome');
}
);

eventEmitter.emit('launch');
