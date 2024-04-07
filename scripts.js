let userName = "bryan";


console.log(userName)

// console.log(myFunction(userName));

function myFunction(username){
    return username;
}

function sayHelloWorld(){
    return "Hello World1";
}



class Arithmetic{
    
    constructor(a, b){
        this.a = a;
        this.b = b;
        console.log('I was called')
    }

    addition(a, b){
        return this.a + this.b;
    }

    subtraction(a,b){
        return this.a - this.b;
    }
    multiplication(a,b){
        return this.a * this.b;
    }
    division(){
        return this.a /  this.b;
    }
}


let num1 = new Arithmetic(1,1);
console.log(`This is the result for addition:${num1.addition()}`);
console.log('Hello')

console.log(`This is a test case: ${num1.division()}`)


// function 