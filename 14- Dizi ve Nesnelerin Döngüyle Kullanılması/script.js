// Dizi ve Nesnelerin Döngüyle Kullanılması

let cars=['BMW','Mercedes-Benz','Audi'];
    
    //for yapisi
    for(var i=0;i<cars.length;i++){
        console.log(cars[i]);
    };
    
    //for-in yapisi
    for(let i in cars){
        console.log(cars[i]);
    };

    //for-each yapisi
    cars.forEach(function(item){
        console.log(item);
    });




let people=[
    {
        firstName:'Mustafa',lastName:'Yilmaz'
    },
    {
        firstName:'Gulcan',lastName:'Kaya'
    }
];
    //for Yapisi
    for(var i=0;i<people.length;i++){
        console.log("First Name: "+people[i].firstName+"   Last Name: "+people[i].lastName);
    };

    //forin Yapisi
    for(let m in people){
        console.log(people[m].firstName+"  "+people[m].lastName);
    };

    //foreach Yapisi
    people.forEach(function(item){
        console.log(item.firstName);
        console.log(item.lastName);
    });