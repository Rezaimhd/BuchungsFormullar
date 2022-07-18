
function buchung(){
    const nacht = document.querySelector("#nacht").value;
    const gäste = document.querySelector("#gäste").value;
    const breakfast = document.querySelector("#breakfast").checked;

    const priceNight = 50;
    const priceExtraperson = 10;
    const priceBreakfast = 8;

    let result = nacht * priceNight + (gäste - 1) * priceExtraperson;

    if(breakfast == true){
        price = gäste * priceBreakfast + result;
    }else{
        price = result;
    };

    document.querySelector("#price").innerHTML= "Die Beträgt:" + price + "€";
   };
