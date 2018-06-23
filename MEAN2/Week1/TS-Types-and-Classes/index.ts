const myNum: number = 5;
const myString: string = "Hello Universe";
const myArr: number[] = [1,2,3,4];
let myObj: object = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25; 
const arrayOne: boolean[] = [true, false, true, true]; 
const arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;
    _priv: number;

    constructor(val) {
        this.val = 0;
        this.val = val;
    }
    
    doSomething() {
        this._priv = 10;
    };
};
const myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(message: string) : void {
    console.log(message);
    return;
}
function sendingErrors(message: string): never {
	throw new Error(message);
}
