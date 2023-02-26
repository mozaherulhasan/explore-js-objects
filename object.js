// create object using object literals

const palyer = {};
palyer.name = 'small nirob';
palyer.specialty = 'batsman';
palyer.bat = function(){
    console.log('swing your bat');
}
console.log(palyer);
palyer.bat();



const student = {
    name: 'masud',
    job: 'study',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 10000
}

// 2. object constructor
const laywer = new Object();

// 3. object create method
const item = object.create(null);


// 4. class
class person{
    name = 'abul';
    address = 'raozan';
    constructor(age){
        this.age = age;
    }
}

const person1 = new person(55);
console.log(person1);