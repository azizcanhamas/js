// FONKSIYONLAR

    // Kendisine parametre olarak gelen sayinin 
    // karesini alir ve geri dondurur.
    function karesiniAl(sayi){
        return sayi*sayi;
    }
    console.log(karesiniAl(2));

    //Kendisine parametre olarak gelen sayilari
    //toplar ve geri dondurur.
    function topla(sayi1,sayi2){
        return sayi1+sayi2;
    }
    var toplam=topla(5,10);
    console.log(toplam);

    //Fonksiyon icinde fonksiyon tanimlama
    function kareleriniAlTopla(sayi1,sayi2){
        function kareAl(x){
            return x*x;
        }
        return kareAl(sayi1)+kareAl(sayi2);
    }
    var a=kareleriniAlTopla(2,3);
    console.log(a);