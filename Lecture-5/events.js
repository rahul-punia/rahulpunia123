//class
var EventEmitter=require("events");//event is a class
//instance-make an object of events class
var eventMaker=new EventEmitter();
//=> consume
//server
eventMaker.on("submit",function fn1(email,password){
    console.log(email+" "+password);
});

eventMaker.on("submit",function fn2(email,password){//for different parameter also run fn2(email)
if(email=="abc@gmail.com"){
    console.log("Welcome admin");
}else{
    console.log("Welcome user");
}
});

eventMaker.on("click",function fn3(){
    console.log("i was called");
    eventMaker.emit("submit","abc@gmail.com","123444"); //call
});

eventMaker.on("submit",function fn4(){
    console.log("I am third submit event");
});
eventMaker.emit("click");
eventMaker.emit("submit","abcd@gmail.com","1243");


//create =>emit

//form submit
//c1
// eventMaker.emit("submit","abc@gmail.com","123444");
//c2
// eventMaker.emit("submit","abcd@gmail.com","123444");
// //c3
// eventMaker.emit("submit","abcde@gmail.com","123444");