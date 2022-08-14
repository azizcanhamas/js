// WINDOW Object

    // Kodda yazdigimiz butun tanimlamalar window nesnesinin
    // icine yerlestirilir.
    let val;
    var a=10;
    function b(){
        return 0;
    }

    // alert() : Siteye giris aninda tarayicida pencere acarak
    // belirtilen mesaji kullaniciya gosterir.
    alert("Merhaba");

    // prompt() : Kullanıcıdan pencere ile girdi alır.
    var c=prompt('Bir sayı giriniz:');
    console.log(c);

    // confirm() : Kullanıcıya 'Evet' 'Hayır' seçimi yapabileceği
    // ekran gösterir. Boolean değer döner.
    var x=confirm('Emin misiniz?');
    if(x)
        console.log("Tamam");
    else
        console.log("İptal");

    // location: Sayfa ile alakalı bilgileri getirir.
    var x=window.location;
    console.log(x);
    console.log("HREF    : "+x.href);
    console.log("HOSTNAME: "+x.hostname);
    console.log("HOST: "+x.host);

    val=window;
    console.log(window);