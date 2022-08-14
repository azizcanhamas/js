//OBJECT LITERALS
 
//Aşağıdaki 3 yöntemin yerine Object Literal yapısı kullanılmalıdır.
// let firstName='Aziz';
// let lastName='Hamasoglu';

// let firstName1='Aziz';
// let lastName2='Hamasoglu';

// let Aziz=['Aziz','Hamasoglu',24];
// let Ali=['Ali','Can',14];



// person objedir ve firstName,lastName,age gibi 
// ozellikleri,objeleri,fonksiyonlari vardir.
let person={
    firstName:'Mustafa',
    lastName:'Canan',
    age:24,
    hobbies:['music','csgo'],
    address:{
        city:'Bursa',
        country:'Türkiye'
    },
    getBirthYear:function(){
        return this.age;
    }
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.getBirthYear());



// people bir array'dir ve elemanlari objedir ve 
// firstName,lastName ozellikleri vardir.
let people=[
    {
        firstName:'Ali',
        lastName:'Can'
    },
    {
        firstName:'Hakan',
        lastName:'Guler'
    },
    {
        firstName:'Yilmaz',
        lastName:'Kaya'
    },
];
console.log(people[0].firstName);