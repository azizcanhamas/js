// FUNCTION DECLARATION & EXPRESSION

    //DECLARATION
        function sum1(a,b){
            var c=a+b;
            return c;
        }
        console.log(sum1(10,20));

    //EXPRESSION
        const sum2=function(a,b){
            var c=a+b;
            return c;
        }
        console.log(sum2(10,20));



        //Fonksiyon icindeki geleneksel yontem ile NaN
        //kontrolu yapmak yerine a ve b'ye baslangic degeri
        //olarak 0 verilebilir
        const sum3=function(a=0,b=0){
            //Parametrelerden biri yuklenmezse 0 yukle.
            // if(typeof a==='undefined')
            // a=0;
            // if(typeof b==='undefined')
            // b=0;
            var c=a+b;
            return c;
        }
        console.log(sum3(10,20));
        //ikinci parametre yuklenmedigi icin NaN doner.
        console.log(sum3(10));