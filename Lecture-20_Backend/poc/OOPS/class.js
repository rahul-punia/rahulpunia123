
class car{
    constructor(name,color,topSpeed,currentSpeed){
       this.name=name;
       this.color=color;
       this.topSpeed=topSpeed || 200;
       this.currentSpeed=currentSpeed || 0;
    }

    displayFeatures(){
        console.log(`It is a ${this.name} with ${this.color} color and acheived speed up to ${this.topSpeed}`)
    return this;
    }
    accelerate(){
        this.currentSpeed++;
        return this;
    }
    break(){
        this.currentSpeed--;
        return this;
    }
    displayCurrentSpeed(){
        console.log(`Current Speed is ${this.currentSpeed}`)
        return this;
    }
}

const swift=new car("swift","white",150);
const lamb=new car("lamb","green",300);
const ferrari=new car("ferrari","red",350);

ferrari.accelerate().accelerate().break().displayCurrentSpeed().break().displayCurrentSpeed();
