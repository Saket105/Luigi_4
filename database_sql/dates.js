const date = new Date();

let d = date.getDate();
let m = date.getMonth() + 1;
let y = date.getFullYear();

let today = y+'-'+m+'-'+d;

console.log(today);