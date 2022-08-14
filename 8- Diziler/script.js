//ARRAYS

    //Dizi tanımlama
    var country=['Turkey','Holland','Deutschland','United States'];
    var numbers=[10,20,30,40,50];
    var temp=['Turkey',15,null,undefined,['mustafa',23]];

    //Dizi elemanlarina dogrudan erisim
    console.log(country[0]);
    console.log(numbers[0]);
    console.log(temp[2]);

    //Ekrana dizinin kendisinin,tipinin ve uzunlugunun yazilmasi
    console.log(country);
    console.log(typeof country);
    console.log(country.length);

    //Dizi elemaninin guncellenmesi
    country[0]='Etiyopya';
    console.log(country);

    //Dizinin son elemanina erisilmesi
    console.log(country[country.length-1]);

    // push() : Dizinin sonuna eleman eklenmesi
    country.push('England');
    console.log(country);

    // unshift () : Dizinin basina eleman eklenmesi
    country.unshift('Dubai');
    console.log(country);

    // pop() : Dizinin sondaki elemaninin kaldirilmasi
    country.pop();
    console.log(country);

    // shift() : Dizinin basindaki elemaninin kaldirilmasi
    country.shift();
    console.log(country);

    // reverse() : Diziyi ters cevirir.
    country.reverse();
    console.log(country);

    // sort() : Diziyi siralar. String dizileri alfabetik olarak siralar.
    country.sort();
    console.log(country);

    // concat() : İki diziyi birlestirir.
    var merged=country.concat(numbers);
    console.log(merged);