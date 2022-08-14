// KOŞUL İFADELERİ

    // if İfadeleri
        var name='Mustafa';
        var age=23;
        var drivingLicense=true;

        if(name=='Mustafa')
            console.log("Evet, adı Mustafa!");

        if(age==23)
            console.log("Evet, 23 yaşında!");

        // drivingLicense boolean oldugu icin 
        // true ile karsilastirilmasa da olur.
        if(drivingLicense==true)
            console.log("Evet, ehliyeti var!");

    //if-else İfadeleri
        var passport=false;
        var yourAge=23;
        if(passport){
            if(yourAge>18){
                console.log("You can pass!");
            }
        }
        else{
            console.log("You can not pass!");
        }
            