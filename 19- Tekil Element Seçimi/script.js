// SINGLE ELEMENT SELECTOR

    //Bir elemanin kendisine ID'si araciligiyla ulasmak.

    var val=document.getElementById("altDiv2");
    console.log(val);

    //Bir elemanin sinif adina ulasmak.
    var val=document.getElementById("anaDiv").className;
    console.log(val);

    //Bir elemana ID'si ulasip CSS vermek.
    var val=document.getElementById("anaDiv");
    val.style.fontSize='30px';
    val.style.color='red';

    // innerText & innerHTML etiketleri ile  text guncelleme
    var val=document.getElementById("selam");
    //innerText, HTML etiketlerini dikkate almaz.
    val.innerText='HELLO';
    //innerHTML, HTML etiketlerini işleyebilir.
    val.innerHTML="<b>HELLO</b>";

    //ALTERNATIF SECME YONTEMI
    //document.querySelector() : Element secmeyi saglar.
    // ID ile secilecekse ismin basina '#' koyulmalidir.
    // Class ile secilecekse ismin basina '.' koyulmalidir.
    val=document.querySelector('#altDiv1');
    console.log(val);
    //class ile secme isleminde yalnizca ilk eleman getirilir!
    val=document.querySelector('.divClass');
    //div'ler arasindan ilk cocugu secer ve arka plan rengini mavi yapar.
    val=document.querySelector('div:first-child').style="background-color:blue;";
    //div'ler arasindan ikinci cocugu secer ve arka plan rengini kirmizi yapar.
    val=document.querySelector('div:nth-child(2)').style="background-color:red;";
    console.log(val);