console.log("This is file1.js");
export const file1 = "This is the content of file1.js";
export function greet() {
    console.log("Hello from file1.js");
}
export class File1Class {           
    constructor() {
        this.name = "File1Class";
    }
    sayHello() {
        console.log(`Hello from ${this.name}`);
    }
}
export default function defaultExport() {
    console.log("This is the default export from file1.js");
}
export { default as defaultExport } from './file1.js';
export * from './file1.js';     