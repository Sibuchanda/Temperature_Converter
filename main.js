const CalculateTemp=()=>{



 const userInput=document.getElementById('input_val').value;
//  console.log(userInput);


//  From section
 const tempFromOptionSection=document.getElementById('temp_from');
 const FromOption=temp_from.options[tempFromOptionSection.selectedIndex].value;
//  console.log(FromOption);


// To section
 const tempToOptionSection=document.getElementById('temp_to');
 const ToOption=temp_to.options[tempToOptionSection.selectedIndex].value;
//  console.log(ToOption);



// Celsius to Fahrenheit and Kelvin

CelToFah=(cel)=>{

 let fahrenheit=(9*cel+160)/5;
 return fahrenheit.toFixed(2);

//  toFixed() is for fixed amount of decimal number

}

CelToKel=(cel)=>{


    let kelvin=(cel+273.15);
    return kelvin.toFixed(2);
}

// Fahrenheit to Celsius and Kelvin

FahToCel=(fah)=>{

    let celsius=(5*fahrenheit-160)/9;
    return celsius.toFixed(2);
}

FahToKel=(fah)=>{


    let kelvin=(fah-32)*(5/9)+273.15;
    return kelvin.toFixed(2);
}




// Kelvin to Fahrenheit and Celsius

 KelToCel=(kel)=>{

    let celsius=(kal-273.15);
    return celsius.toFixed(2);
 }

 KelToFah=(kel)=>{

    let fahrenheit=(kel-273.15)*(9/5)+32;
    return fahrenheit.toFixed(2);
 }



 // Result section



 let result;

 if(FromOption=='Celsius' && ToOption=='Fahrenheit'){
    
     result=CelToFah(userInput);
     document.getElementById('resultValue').innerHTML=` ${result}° Fahrenheit`;

 }
 else if(FromOption=='Celsius' && ToOption=='Kelvin'){

    result=CelToKel(userInput);
    document.getElementById('resultValue').innerHTML=` ${result}° Kelvin`;
 }
 else if(FromOption=='Fahrenheit' && ToOption=='Celsius'){

    result=FahToCel(userInput);
    document.getElementById('resultValue').innerHTML=` ${result}° Celsius`;
 }
 else if(FromOption=='Fahrenheit' && ToOption=='Kelvin'){

    result=FahToKel(userInput);
    document.getElementById('resultValue').innerHTML=` ${result}° Kelvin`;
 }
 else if(FromOption=='Kelvin' && ToOption=='Celsius'){

    result=KelToCel(userInput);
    document.getElementById('resultValue').innerHTML=` ${result}° Celsius`;
 }
 else if(FromOption=='Kelvin' && ToOption=='Fahrenheit'){

    result=KelToFah(userInput);
    document.getElementById('resultValue').innerHTML=` ${result}° Fahrenheit`;
 }
 else if(FromOption=='Kelvin' && ToOption=='Kelvin'){

    result=KelToFah(userInput);
    document.getElementById('resultValue').innerHTML=`Can't convert temperature from Kelvin to Kelvin`;
 }
 else if(FromOption=='Fahrenheit' && ToOption=='Fahrenheit'){

    result=KelToFah(userInput);
    document.getElementById('resultValue').innerHTML=` Can't convert temperature from Fahrenheit to Fahrenheit`;
 }
 else if(FromOption=='Celsius' && ToOption=='Celsius'){

    result=KelToFah(userInput);
    document.getElementById('resultValue').innerHTML=` Can't convert temperature from Celsius to Celsius`;
 }









}