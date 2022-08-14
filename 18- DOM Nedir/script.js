/*
    DOM; Document Object Model'dir.
    HTML5 şablonudur ve bir iskelettir.
    DOM yapısı üzerinde Javascript kullanarak
    bazı nesnelerin, objelerin üzerinde değişiklik yapabiliriz.   
*/

let val=window.document;

// HTML sayfasindaki iskelette bulunan tum elemanlari getirir.
console.log(val.all);

//Birbirinden farkli olan eleman sayisini verir.
console.log(val.all.length);

//İskelette bulunan bir elemani indis ile secmeye yarar.
console.log(val.all[8]);

//Head etiketini dogrudan secmeye yarar.
console.log(val.head);

//Body etiketini dogrudan secmeye yarar.
console.log(val.body);

//title etiketini dogrudan secmeye yarar.
console.log(val.title);

//Sayfada bulunan resimleri dogrudan secmeye yarar.
console.log(val.images);

//Sayfanin URL adresini verir.
console.log(val.URL);

//Sayfanin form etiketlerini verir.
console.log(val.forms);

//Sayfada bulunan form etiketlerinden ilkinin id'sini verir.
console.log(val.forms[0].id);

