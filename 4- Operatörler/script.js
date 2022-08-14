//OPERATöRLER
   
    var sonuc;
    const x = 60;
    const y = 12;
    let z = 7;

    //Aritmetik Operatörler
        //Toplama
        sonuc = x + y;
        console.log(sonuc);
        console.log(typeof sonuc);

        //Çıkarma
        sonuc = x - y;
        console.log(sonuc);

        //Çarpma
        sonuc = x * y;
        console.log(sonuc);

        //Bölme
        sonuc = x / y;
        console.log(sonuc);

        //Mod Bölmesi
        sonuc = x % y;
        console.log(sonuc);
        sonuc = x % z;
        console.log(sonuc);

        //z'yi bir arttır
        sonuc = z++; //z'yi ilk once sonuc'a aktar, sonra arttir.
        console.log(sonuc);//7

         //z'yi bir arttır ama hafizaya atma
         sonuc = ++z;//z'yi ilk once arttir sonra sonuc'a aktar.
         console.log(sonuc);//9

        //z'yi bir azalt
        sonuc =z--; //Toplama ile ayni mantik gecerlidir.
        console.log(z);
        sonuc = --z;
        console.log(z);

    //Atama Operatörleri
        //Sagdaki deger soldakine aktarilir.
        sonuc = x;
        console.log(sonuc);

        //sonuc'un uzerine x'i ekler.
        sonuc += x;//sonuc = sonuc + x;
        console.log(sonuc);

        //sonuc'tan x'i cikartir, sonuc'a yazar..
        sonuc -= x;//sonuc = sonuc - x;
        console.log(sonuc);

        //sonuc ile x'i carpar, sonuc'a yazar..
        sonuc *= x;//sonuc = sonuc * x;
        console.log(sonuc);

        //sonuc ile x'i boler, sonuc'a yazar..
        sonuc /= x;//sonuc = sonuc * x;
        console.log(sonuc);

        //sonuc ile x'i kalan bolmes ile boler, sonuc'a yazar..
        sonuc %= x;//sonuc = sonuc % x;
        console.log(sonuc);

    //Karşılaştırma Operatörleri
        z = 9;
        t = '9';
        console.log(z);
        console.log(t);
        
        // z ile t'yi esitlik olarak kontrol eder boolean olarak sonuc doner.
        // ve sonucu sonuc degiskenine aktarir.
        sonuc = z == t;
        console.log(sonuc);

        //degisken tipi acisindan kontrol eder. z number'dir t string'dir. (typeof acisindan)
        sonuc = z === t;
        console.log(sonuc);

        // z ve t esit degilse true doner.
        sonuc = z != t;
        console.log(sonuc);

        //kucukluk kontrolu yapar.
        sonuc = z > t;
        console.log(sonuc);

        //buyukluk kontrolu yapar.
        sonuc = z < t;
        console.log(sonuc);

        //buyuk-esit kontrolu yapar.
        sonuc = z >= t;
        console.log(sonuc);

        //kucuk-esit kontrolu yapar.
         sonuc = z <= t;
         console.log(sonuc);

    //Mantıksal Operatörler
        // && (AND ve)
        // || (OR  veya)
        // !  (NOT değil)

        var a1=10,a2=20,b1=5,b2=6;

        // && kullanildigi icin true gelmesi icin iki parantezde true olmalidir.
        sonuc=(a1>b1) && (a2>b2);
        console.log(sonuc);

        //  || kullanildigi icin true gelmesi icin parantezlerden birinin true vermesi yeterlidir.
        sonuc=(a1>b1) || (a2<b2);
        console.log(sonuc);

        // a1>b1'den buyuk ancak ! oldugu icin false doner, ikinci parantezde false oldugundan
        // genel durum false olur.
        sonuc=!(a1>b1) || (a2<b2);
        console.log(sonuc);