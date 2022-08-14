// SWITCH-CASE

let category='Coffee';

switch(category){
    case 'Coffee':
        console.log('Sade kahveniz hazırlanıyor...');
        break;

    case 'Coffee Milk':
        console.log('Sütlü kahveniz hazırlanıyor...');
        break;

    default:
        console.log('Hatalı kategori!');
        break;
}


switch(new Date().getDay()){
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
}