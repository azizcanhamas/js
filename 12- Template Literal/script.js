//Template Literals
    const fullName='Aziz Can';
    const country='Norveç';
    const yearOfBirth=2000;

    //Geleneksel yöntem
    let val='Benim adım '+fullName+". "+country+"'de yaşıyorum. "+(2022-yearOfBirth)+" yaşındayım.";
    console.log(val);

    //Template Literal Yöntemi
    // Alt GR + Virgül
    val=`Benim adım ${fullName}. ${country}'de yaşıyorum. ${2020-yearOfBirth} yaşındayım.`;
    console.log(val);

    //Koşul Yazma                                           
    /* ilk olarak kosul yazilir. true ise soru işaretinden sonraki ilk kısım çalışır, false ise ikinci kısım çalışır. */
    val=`Benim adım ${fullName}. ${country}'de yaşıyorum. ${(2020-yearOfBirth<=18)?'18 yaşının altında.':'18 yaşının üstünde.'} yaşındayım.`;
    console.log(val);