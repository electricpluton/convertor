
let storedNumber = '',
    storedLetter = '';

updateDisplayNumber = function(screenValue) {
    let screenNumber = document.getElementById('screen-number');
    screenNumber.value = screenValue;
}

updateDisplayLetter =  function (screenvalue){
   let screenLetter =  document.getElementById('screen-letter');
   screenLetter.value = screenvalue;
}

pressBtn = function(element){
    if (element.className === 'operator'){
       
        if (element.id == 'clear-number'){
            storedNumber = '';
            storedLetter = '';
            updateDisplayNumber(0);
            updateDisplayLetter('zero');

        } else if (element.id == 'del-number') {
            storedNumber = storedNumber.substring(0,storedNumber.length-1) ;
            updateDisplayNumber(storedNumber);
            if (storedNumber){
                updateDisplayLetter(conversionExpand(storedNumber));
            } else {
                storedLetter = '';
                updateDisplayLetter(storedLetter);
            }
            

        } else if (element.id == 'clear-letter') {
            storedLetter = '';
            storedNumber = '';
            updateDisplayLetter('zero');
            updateDisplayNumber(0);
            
        }else {
            if (storedNumber){
                storedLetter = conversionExpand(storedNumber);
                if (storedLetter == -1){
                    updateDisplayLetter("Error Number equal or greater than 1000 000 000 000");

                } else {
                    updateDisplayNumber(storedNumber);
                    updateDisplayLetter(storedLetter);

                }
              
            } else {
                updateDisplayNumber('Enter valid number');
                updateDisplayLetter('No valid number');

            }
            
            
        }

    } else {

        storedNumber+= element.value;
        updateDisplayNumber(storedNumber);
    }
}
        
    

updateDisplayNumber(0);
updateDisplayLetter('zero');
let btn = document.getElementsByTagName('button');
for(let i=0; i<btn.length;i++){
    btn[i].addEventListener('click', function(){
        pressBtn(btn[i]);

    });
}

