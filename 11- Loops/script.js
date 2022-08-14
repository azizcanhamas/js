// Loops

    //while
        let i=0;
        while(i<10){
            console.log(i);
            i++;
        }

    //do-while
        let z=0;
        do{
            console.log(z);
            z++
        }while(z<10){
            console.log("Döngü bitti!");
        };

    //for
        // 0...9 rakamlarini yazar.
        for(let m=0;m<10;m++){
            console.log(m);
        }

        // 5'i yazmaz.
        for(let m=0;m<10;m++){
            if(m==5)continue;
            console.log(m);
        }

        // 0 ve 1 yazar, 2'de sonlanir.
        for(let m=0;m<10;m++){
            if(m==2)break;
            console.log(m);
        }

    //iç içe for
        for(var a=0;a<10;a++){
            for(b=0;b<10;b++){
                console.log("["+a+"]["+b+"]");
            }
        }