// let age: number = 20;

// if (age < 50) {
// 	age += 10;
// }

// console.log(age);

let sales = 123_456_789;

let course = "Typescript";
let is_published = true;
let level;

function render(document: any) {
	console.log(document);
}

//Arrays
let numbers: number[] = [];
numbers.forEach((n) => n.toFixed());

let user: [number, string] = [1, "Mosh"];
// PascalCase - Auto increments if you don't explicitly set the value
const enum Size {
	Small = 1,
	Medium,
	Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
// function functionName (parameters + types) : returnValue type

function calculateTax(income: number, taxYear: number): number {
	if (taxYear < 2022) return income * 1.12;
	return income * 1.3;
}
// Question marks make it so that you can optionally pass parameters
function calculateTaxWithOptional(income: number, taxYear?: number): number {
	if ((taxYear || 2022) < 2022) return income * 1.12;
	return income * 1.3;
}
// You can also pass a default value
function calculateTaxWithSetValue(income: number, taxYear = 2022): number {
	if (taxYear < 2022) return income * 1.12;
	return income * 1.3;
}
calculateTax(10_000, 2022);

// Employee object
// let employee: {
// 	// Set the types of what the employee object expects
// 	id: number;
// 	name: string;
// 	// set the parameters of the employee.retire function and it's return type
// 	retire: (date: Date) => void;
// } = {
// 	// Give the employee object values
// 	id: 1,
// 	name: "Khalil",
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

//type alias

type Employee = {
	// Set the types of what the employee object expects
	id: number;
	name: string;
	// set the parameters of the employee.retire function and it's return type
	retire: (date: Date) => void;
};
// Using type alias
let employee: Employee = {
	id: 1,
	name: "Khalil",
	retire: (date: Date) => {
		console.log(date);
	},
};
// union type uses | to specify that a variable can be of many types that are specified
function kgToLbs(weight: number | string): number {
	//narrowing
	if (typeof weight === "number") return weight * 2.2;
	else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// Type intersection
// Type 1
type Draggable = {
	drag: () => void;
};
// Type 2
type Resizable = {
	resize: () => void;
};
// Type combine the types
type UIWidget = Draggable & Resizable;

// define an object with the combined types and set their values
let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

// Literal (exact, specified)
// Can be numbers or strings
// a Quantity type can only hav ethe value 50 or 100
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// Nullable types
function greet(name: string | null) {
	if (name) console.log(name);
	else console.log("Hola!");
}
greet(null);

type Customer = {
	birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}
// optional property access operator
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
// Optional element access oprator
// customers?.[0]

// Optional call
let log: any = null;
log?.("a");
