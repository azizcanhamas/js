//DEGISKEN TANIMLAMA KURALLARI

    //name isminde değişken tanımlar.
    var name;

    /*  Değişken isimleri sayı ile başlayamaz,
        ve komut setlerinden oluşamaz.
            HATALI Kullanımlar;
            * var 2name;
            * var if;
            * var for;
    */

    //Bir satırda birden fazla değişken tanımlanması
        var name,surname;


    // "var" IFADESI KULLANIMI
        var x;
        x="Aziz";
        console.log(x); //F12'e basildigi zaman gozlemlenir.

        //var ifadesi genellikle daha local alanlarda kullanılır.
       

   // "let" IFADESI KULLANIMI
         //let ifadesi global alanlarda kullanılabilir.
        let fullname="Aziz Can";
        console.log(fullname);

    // "const" IFADESI KULLANIMI
        //const ifadesi degisken degeri sabitlemeye yarar.
        //const ifadesi ile degisken tanimlanirken deger verilmek zorundadir.
        const email="azizcanhamas@gmail.com";
        console.log(email);
        //Console ekraninda asagidaki islem hata verir.
        email="hakanyilmaz@gmail.com";