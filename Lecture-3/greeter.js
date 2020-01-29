// As we know in java script functions treat like variables

function getLastName(fullname){
    return fullname.split(" ")[1];
}

function geFirstName(fullname){
    return fullname.split(" ")[0];
}
//composition - it is used in react
function greeter(fullname,cb){ //cb-call back function
    var message=cb(fullname);
    console.log(`Hello ${message}`);
}
greeter("rahul punia",geFirstName);
greeter("rahul punia",getLastName);