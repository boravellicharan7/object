//Question-1:-
var car={
    make:"IND",
    model:"GT-5",
    year:2003
}
Object.freeze(car);
car.model="GT-7";
console.log(car);

//Question-2:-
var user={
    name:"surya",
    age:25,
    email:"ocean@gmail.com"
}
user.age=27;
console.log(Object.isFrozen());

//Question-3:-
var product={
    name:"mouse",
    category:"hardware",
    price:100
}
console.log(Object.isSealed());

//Question-4:-
var laptop={
    brand:"dell",
    model:"corei5",
    price:45000
}
console.log(Object.keys(laptop));

//Question-5:-
var house={
    location:"JNTU meto station",
    size:"25*34",
    price:2000000
}
console.log(Object.values(house));

//Question-6:-
var smartphone={
    brand:"redme",
    model:"13 series",
    price:14000
}
Object.seal(smartphone);
smartphone.price=15000;
console.log(smartphone);
console.log(Object.isSealed());

//Question-7:-
var book={
    title:"remember me",
    author:"john durairaj",
    publishedyear:2015
}
Object.freeze(book);
book.publishedyear=2016;
console.log(book);
console.log(Object.isFrozen());

//Question-8:-
var person={
    firstname:"ravipati",
    lastname:"surya",
    age:24
}
console.log(Object.values(person),Object.keys(person));

//Question-9:-
var course={
    title:"full stack",
    trainer:"vamsi sir",
    duration:"6 months"
}
console.log(Object.entries(course));
delete course.duration;
console.log(course);

//Question-10:-
var employee={
    name:"deva",
    position:"Jn manager",
    salary:50000
}
Object.seal(employee);
employee.position="Sr manager";
console.log(employee);
