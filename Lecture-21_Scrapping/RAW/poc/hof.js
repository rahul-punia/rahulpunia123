function getfirstname(fullname){
    return fullname.split(" ")[0];
}

function getlastname(fullname){
    return fullname.split(" ")[1];
}

function greeter(data,cb){
    let message=cb(data);
    console.log(message);
}

greeter("Rahul Punia",getfirstname);
greeter("Rahul Punia",getlastname);
