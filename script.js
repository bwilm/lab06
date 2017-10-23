
        let accusation;
        let friends =["Beverly","Norma","Patrick","Jim","Donna"];
        let locations =["Bedroom","Garden","Laundry Room","Kitchen","Pool House","Garage","Bathroom","Living Room","Attic","Basement"];
        let weapons = ["knife","door handle","Ice cube","crayon","nuclear warhead","human hand","kick to the teeth","water bottle","chair","Hairpin","DVD","push cart","broom","disenfectant","bleach","plyers","hammer","chainsaw","hamster wheel"];
        


$(document).ready(function (){



console.log('ready');
    
for ( i = 0; i < 100; i++){

    
        
        let h3 = $('<h3><h3').text('Accusation '+(i+1));
        //$(h3).attr("id",[i])
        $('body').append(h3);
        var alerter = createAccuser(i);
        h3.click(alerter);
        //$('h3').on("click",function(){
            
          //  alert("I accuse "+friends[m]+" with the "+weapons[m]+" in the "+locations[m]);
           



            
            
        
    }
})

function createAccuser(num){
    return function(){
        var friend = friends[num % friends.length];
        var location = locations[num % locations.length];
        var weapon = weapons[num % weapons.length];
        alert('Accusation '+ (num +1)+' :I accuse '+ friend+',with the '+ weapon+' in the '+ location+'.');
    }
}
    



            
            

    




//$(document.createElement(<h3></h3>));
//$('.h3').text("Accusation"+[i]);
    





