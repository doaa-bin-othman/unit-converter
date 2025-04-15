let kilo = 0;

let mile = 0;

let Result = 0; 

Result = JSON.parse(localStorage.getItem('save'))
document.querySelector('.js-output').innerHTML = `Result: ${Result}`;
function convert() {

  let typeConvert = document.querySelector('.js-selector');

  typeConvert = typeConvert.value;

  if (typeConvert === 'kiloToMile') {
    kilo = document.querySelector('.js-number-input');

    

    Result = kilo.value * 0.621371;

    Result = Math.round(Result * 1000 ) / 1000 ;

    document.querySelector('.js-output').innerHTML = `Result: ${Result} miles`; 
    document.querySelector('.js-number-input').value ='';
    saving(' miles');
  } else if (typeConvert === 'mileToKilo') {

    mile = document.querySelector('.js-number-input');

    Result = mile.value * (1/0.621371);

    Result = Math.round(Result * 1000 ) / 1000 ;

    document.querySelector('.js-output').innerHTML = `Result: ${Result} kilometer`; 

    document.querySelector('.js-number-input').value ='';
    
    saving(' kilometer');
  }
  
}
function saving(measure) {
  localStorage.setItem('save',JSON.stringify(Result + measure));
}
