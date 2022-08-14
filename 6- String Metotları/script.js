// String Metotları
    const ad="Mustafa";
    const soyad="Filiz";

    // String toplama
    var x=ad+" "+soyad;
    console.log(x);
    console.log(typeof x);

    // concat : Ikı stringi birlestirir.
    x=ad.concat(' ',soyad);
    console.log(x);

    // length : Belirtilen string degiskendeki degerin uzunlugunu verir.
    x=ad.length;
    console.log("'Mustafa' degerinin uzunlugu : "+x);

    // uppercase : String degiskendeki tum karakterleri buyuk yapar.
    x=ad.toUpperCase();
    console.log(x);

    // lowercase : String degiskendeki tum karakterleri kucuk yapar.
    x=ad.toLowerCase();
    console.log(x);

    // indexOf : String degiskende belirtilen harfi arar ve indexini verir..
    // Bulamazsa -1 verir.
    x=ad.indexOf('f');
    console.log(x);

    //substring : Belirtilen baslangic ve bitis indisleri arasindaki
    // string ifadeyi verir.
    x=ad.substring(0,3);
    console.log(x);

    //slice : Belirtilen baslangic ve bitis indisleri arasindaki
    // string ifadeyi verir.
    x=ad.slice(0,3);
    console.log(x);
    //3. indisten itibaren sona kadar alir.
    x=ad.slice(3);
    console.log(x);

    //replace : String icinde bulunan belirtilen ifadeyi kaldirir
    // yerine ikinci parametre olarak verilen ifadeyi yerlestirir.
    x=ad.replace("ust","han");
    console.log(x);

    // Daha fazlası için W3School Javascript Tutorial'a bakiniz.