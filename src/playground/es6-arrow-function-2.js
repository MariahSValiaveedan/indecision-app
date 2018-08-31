const add=(a,b) =>{
    //console.log(arguments);
    return a+b;
}

console.log(add(50,1));

const user= {
    name:'Mariah',
    cities:['ktm','pala'],
    printplaceslived() {
        //console.log(this.name);
        //console.log(this.cities);

        const citymessage=this.cities.map((city) => {
            return city+'!';
        });

       /* this.cities.forEach((city) =>{
            console.log(this.name+' has lived in '+city);
        });*/
        return citymessage;
    }

};

console.log(user.printplaceslived());

const multiplier = {
    numbers :[1,6],
    num : 5 ,
    multiply() {
        return this.numbers.map((number) => number*this.num);
    }
};
console.log(multiplier.multiply());