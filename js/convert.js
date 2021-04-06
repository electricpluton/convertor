conversion = function(value){
   value = parseInt(value);
  let  unite = ['zero','un','deux','trois','quatre','cinq','six','sept','huit','neuf'],
   dizaine = ['onze','douze','treize','quartoze','quinze','seize','dix-sept','dix-huit','dix-neuf'],
   centaine = ['dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix'],
   valueLetter = '';

//    console.log(unite[2]);

   if ( (value >= 0) && (value < 1000) ){

    x = Math.floor(value/100);
    y = Math.floor((value%100)/10);
    z = (value%100)%10;
   

    if( x == 0){
        
        if(y== 0){
            valueLetter = unite[z];
        } else {
            
            if(z == 0){
                valueLetter = centaine[y-1];
            } else {
                if (y == 1) {
                    valueLetter = dizaine[z-1];

                }else if ((y== 7) || (y == 9)) {
                    valueLetter = centaine[y-2] + ' ' + dizaine[z-1];

                } else {
                    valueLetter = centaine[y-1] + ' ' + unite[z];
                }
            }
        }

    } else {

        if ((y==0) && (z==0)) {

            if(x == 1){
                valueLetter = 'cent';
            } else {
                valueLetter = unite[x] +' cent';
            }

        }else if( (y==0) && (z != 0)) {
            
            if(x==1){
                valueLetter = 'cent ' + unite[z];
            }else{
                valueLetter = unite[x] + ' cent ' + unite[z];
            }

        }else if ((y!=0 ) && (z==0)) {
            if ( x == 1){
                valueLetter = 'cent ' + centaine[y-1];
            }else {
                valueLetter = unite[x] + ' cent ' + centaine[y-1];
            }
            
        } else {

            if (x == 1){
                if (y==1){
                    valueLetter = 'cent '+ dizaine[z-1];

                } else if ((y==7) || (y==9)) {
                    valueLetter = 'cent '+ centaine[y-2] + ' ' + dizaine[z-1];

                }else{
                    valueLetter =  'cent ' + centaine[y-1] + ' ' + unite[z];

                }

            }else {

                if (y==1){
                    valueLetter = unite[x] + ' cent ' + dizaine[z-1];

                } else if ((y==7) || (y==9)) {
                    valueLetter = unite[x] + ' cent '+ centaine[y-2] + ' '+ dizaine[z-1];

                }else{
                    valueLetter = unite[x] + ' cent '+ centaine[y-1] +' '+ unite[z];
                    
                }

            }

        }

    }

   } else {
      console.log('error of number') ;
   }

   return  valueLetter;
}


conversionExpand = function(value) {
value = parseInt(value);
if ((value >= 0) && (value < 1000000000000) ) {
    let milPart = Math.floor(value/1000000000),
    centPart = Math.floor((value%1000000000)/1000000),
    dizPart = Math.floor(((value%1000000000)%1000000)/1000),
    unitPart = ((value%1000000000)%1000000)%1000

    milPartLetter = conversion(milPart),
    centPartLetter = conversion(centPart),
    dizPartLetter = conversion(dizPart),
    unitPartLetter = conversion(unitPart);

    if (milPartLetter == 'zero'){
        milPartLetter = '';

    }else if(milPartLetter == 'un') {
        milPartLetter += ' milliard ' ;
    }else {
         milPartLetter += ' milliards ';
    }

    if (centPartLetter == 'zero'){
        centPartLetter = '';
    }else if(centPartLetter == 'un'){
        centPartLetter += ' million ';
    } else {
        centPartLetter += ' millions '
    }

    if (dizPartLetter == 'zero'){
        dizPartLetter = '';
    
    }else if (dizPartLetter == 'un'){
        dizPartLetter = 'mille ';
    
    }else{
        dizPartLetter += ' milles '
    }

    if(unitPartLetter == 'zero'){
        if ((milPart != 0) || (centPart != 0) || (dizPart != 0)){
            unitPartLetter = '';

        }

    }
    return milPartLetter+centPartLetter+dizPartLetter+unitPartLetter; 
} else {
    return -1;
}

   
}