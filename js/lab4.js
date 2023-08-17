function pulsFunction(){
    var counter = parseInt (document.getElementById("result").innerText);
    counter++;
    document.getElementById("result").innerText=counter
    totalpriceFunction();
    //text++
    //document.getElementById("result").style.fontSize=10+counter+"px";
}
function minusFunction(){
    var counter = parseInt (document.getElementById("result").innerText);
    if(counter >0){
    counter--;
    
    document.getElementById("result").innerText=counter
    totalpriceFunction();}
    //text++
    //document.getElementById("result").style.fontSize=10+counter+"px";
}

function puls2Function(){
    var counter = parseInt (document.getElementById("result2").innerText);
    counter++;
    document.getElementById("result2").innerText=counter
    totalpriceFunction();
    
}
function minus2Function(){
    var counter = parseInt (document.getElementById("result2").innerText);
    if(counter >0){
    counter--;
    
    document.getElementById("result2").innerText=counter
    totalpriceFunction();}
    
}

function puls3Function(){
    var counter = parseInt (document.getElementById("result3").innerText);
    counter++;
    document.getElementById("result3").innerText=counter
    totalpriceFunction();
    
}
function minus3Function(){
    var counter = parseInt (document.getElementById("result3").innerText);
    if(counter >0){
    counter--;

    document.getElementById("result3").innerText=counter
    totalpriceFunction();}
    
}

function puls4Function(){
    var counter = parseInt (document.getElementById("result4").innerText);
    counter++;
    document.getElementById("result4").innerText=counter
    totalpriceFunction();
}
function minus4Function(){
    
    var counter = parseInt (document.getElementById("result4").innerText);
    if(counter > 0){
    counter--;
    
    document.getElementById("result4").innerText=counter
    totalpriceFunction();}
    
}
function totalpriceFunction() {
    var counter1 = parseInt(document.getElementById("result").innerText);
    var counter2 = parseInt(document.getElementById("result2").innerText);
    var counter3 = parseInt(document.getElementById("result3").innerText);
    var counter4 = parseInt(document.getElementById("result4").innerText);

    var price_cat_bag = parseInt(document.getElementById("price_cat_bag").innerText);
    var price_cat_box = parseInt(document.getElementById("price_cat_box").innerText);
    var price_cat_cd = parseInt(document.getElementById("price_cat_cd").innerText);
    var price_cat_toilet = parseInt(document.getElementById("price_cat_toilet").innerText);
    
    var totalprice1 = counter1 * price_cat_bag;
    var totalprice2 = counter2 * price_cat_box;
    var totalprice3 = counter3 * price_cat_cd;
    var totalprice4 = counter4 * price_cat_toilet;
    var unit_final = counter1 + counter2 + counter3 + counter4;
    var total_final = totalprice1 + totalprice2 + totalprice3 + totalprice4;
    var discount = 0;

    if (total_final >= 1000) {
        discount = total_final * 0.1;
        total_final *= 0.9;
    }
    document.getElementById("totalprice").innerText = total_final.toFixed(2);
    document.getElementById("unit").innerText = unit_final;
    document.getElementById("discount").innerText = discount.toFixed(2);
}
