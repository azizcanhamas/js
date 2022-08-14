// Number Metotları

    //Number
        // String '10' ifadesini number'a cevirir.
        x=Number('10');
        console.log(typeof x);

        //Donusum yapamayacagi icin NaN doner.
        x=Number('x10');
        console.log(x);

        // Bir ifadenin number'a donusturulup donusturulemeyecegi 
        // isNaN metodu ile kontrol edilebilir. Donusturulemiyorsa
        // true doner.
        x=isNaN('10x');
        console.log(x);

    // parseInt ve parseFloat
        //parseInt : Verilen sayisal ifadeyi Integer'a cevirir.
        var sayi=24.587469;
        sayi=parseInt(sayi);
        console.log(sayi);

        //parseFloat : Verilen sayisal ifadeyi float'a cevirir.
        var sayi=24.587469;
        sayi=parseFloat(sayi);
        console.log(sayi);

    // toPrecision() : Sayisal ifadeyi belirtilen basamak kadar alip stringe cevirir.
        var sayi=24.6895745;
        sayi=sayi.toPrecision(4);
        console.log(sayi);
        console.log(typeof sayi);

    // toFixed() : Virgulden sonraki belirtilen deger kadar basamagi alir, string doner.
        var sayi=12.32547896;
        sayi=sayi.toFixed(3);
        console.log(sayi);
        console.log(typeof sayi);

    //MATH Metotları
        //Math.PI : Pi sayisini verir.
        var sayi=Math.PI;
        console.log(sayi);

        //Math.round(): Virgullu sayiyi en yakin tam sayiya yuvarlar.
        var sayi=3.59;
        sayi=Math.round(sayi);
        console.log(sayi);

        //Math.ceil(): Virgullu sayiyi yukariya yuvarlar.
        var sayi=3.10;
        sayi=Math.ceil(sayi);
        console.log(sayi);

        //Math.floor(): Virgullu sayiyi asagiya yuvarlar.
        var sayi=3.99;
        sayi=Math.floor(sayi);
        console.log(sayi);

        //Math.sqrt(): Sayinin karekokunu alir..
        var sayi=64;
        sayi=Math.sqrt(sayi);
        console.log(sayi);

        //Math.pow(): Sayinin ussunu alir.
        var sayi=64;
        sayi=Math.pow(2,3); //2 ^ 3
        console.log(sayi);

        //Math.abs(): Sayinin mutlagini alir.
        var sayi=-10;
        sayi=Math.abs(sayi);
        console.log(sayi);

        //Math.min(): Verilen dizide bulunan en kucuk degeri doner.
        //Math.min(): Verilen dizide bulunan en buyuk degeri doner.
        var min=Math.min(32,54,13,2,8,7,6,54);
        var max=Math.max(32,54,13,2,8,7,6,54);
        console.log(min);
        console.log(max);

        //Math.random(): 0...1 araliginda random sayi doner.
        //Uretilen deger 100 ile carpilirsa 0...100 araliginda deger doner.
        //Carpim isleminde sonra kalan virgullerden kurtulmak icin sonuc Math.round
        //metodundan gecirilebilir.
        var sayi=Math.random();
        console.log(sayi);