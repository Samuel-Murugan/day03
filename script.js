var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    var res =JSON.parse(request.response);
    console.log(res);
    for (var i=0;i<res.length;i++){
        // question 2:
        //Ans:
    console.log(res[i].flags.png); 
    //question 3 :
    //Ans:   
    console.log(res[i].name.common);
    console.log(res[i].postalCode.region);
    console.log(res[i].postalCode.sub-region);
    console.log(resi[i].postalCode.population);

    //i cannot give correct answers but i try this program little bit of learnig i hope in future i will complete all ta
    //task   
}
}