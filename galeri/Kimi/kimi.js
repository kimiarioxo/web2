function saatim(){
    var aylar = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    tarih=new Date();
    saat=tarih.getHours();
    dakika=tarih.getMinutes();
    if(dakika-10<0){
        dakika="0"+tarih.getMinutes();
    }
    hdk=saat+":"+dakika;
    gun=tarih.getDate();
    ay=aylar[tarih.getMonth()];
    if(ay-10<0){
        ay="0"+aylar[tarih.getMonth()];
    }
    yil=tarih.getFullYear();
    yga=gun+":"+ay+":"+yil;
    document.getElementById("tarih").innerHTML=yga;
    document.getElementById("saatdakika").innerHTML=hdk;
}
function galeri(fotoid,fotorsc){
    fotolar=document.getElementsByTagName("img").item(fotoid).style.cssText="border:1px solid red; opacity:0.5;"
    document.getElementById("large").src=fotorsc;
}
function galericik(fotoid){
    fotolar=document.getElementsByTagName("img").item(fotoid).style.cssText="border:0px; opacity:1;"
}