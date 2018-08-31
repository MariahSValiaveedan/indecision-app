class Person{
   constructor(name='anonymous',age=0) {
       this.name=name ;
       this.age=age;
   }
   getGreetings() {
      // return 'hi iam ' +this.name +'!';
      return `hi iam ${this.name}!`;
   }
   getDescription() {
       return this.name + ' is ' + this.age + ' years(s) old';
   }

}

class Student extends Person {
    constructor (name,age,major) {
            super(name,age);
            this.major=major;
    } 
      
    hasmajor() {
        return !!this.major;
    }

    getDescription() {
       let description=super.getDescription();
       //return description;
       if(this.hasmajor())
       {
           description +=`. Their major is ${this.major}`;
       }     
       return description;
    }
}

class Traveller extends Person {
    constructor (name,age,homelocation) {
        super(name,age);
        this.homelocation=homelocation;
    }

    hashomelocation() {
        return !!this.homelocation;
    }

    getGreetings() {
        let tag=super.getGreetings();

        if(this.hashomelocation()) {
            tag += `I'm visiting from ${this.homelocation}`;
        }
        return tag;
    }
}

const me= new Student('Mariah S',12,'computer science');
console.log(me.getDescription());

const other=new Student();
console.log(other.getDescription());

const t=new Traveller('mariah',22,'ktm');
console.log(t.getGreetings());

const t1=new Traveller();
console.log(t1.getGreetings());