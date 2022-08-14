// DATES

    // Date Object
        var d=new Date();
        console.log("Tam Tarih  : "+d);

    //set methods
        d.setFullYear(1996); //Yili degistir.
        d.setMonth(10);      //Ayi degistir.
        d.setDate(25);       //Gunu degistir.

    //get methods
        console.log("Yil        : "+d.getFullYear());
        console.log("Ay Indıs   : "+d.getMonth()); // 0 -> Ocak , 11-> Aralik
        console.log("Gun        : "+d.getDate());
        console.log("Saat       : "+d.getHours());
        console.log("Dakika     : "+d.getMinutes());
        console.log("Saniye     : "+d.getSeconds());
        console.log("Milisaniye : "+d.getMilliseconds());;
        console.log("Gun Indıs  : "+d.getDay()); // 0 -> Pazar