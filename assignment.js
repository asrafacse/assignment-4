//Problem:1
/**convert radians to degree**/
function radianToDegree(radians)
 {
     // validation diclaration
    let pi = Math.PI;
    const degree = radians * (180/pi);
    return parseFloat(degree.toFixed(2));
   
 }
 console.log(radianToDegree(10));



//Problem:2
/*--check whether the given file name is a JavaScrift file or not--*/
 function isJavaScriptFile(string)
 
 { 
    // validation diclaration
     if(string.endsWith('.js'))
     {
        return true;
     }
     else
     {
        return false;
     }
     
    }
    const string ='app.pdf';
    const strings = isJavaScriptFile(string);
      console.log(strings);



//Problem:3
/**--Total OilPrice--**/
 function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity)
 { 
    // validation diclaration
    const dieselCost =114;
    const petrolCost =130;
    const octaneCost =135;

    const diesel = dieselQuantity * dieselCost;
    const petrol = petrolQuantity * petrolCost;
    const octane = octaneQuantity * octaneCost;

    const oilTotal = diesel + petrol + octane;
    return oilTotal;
}
const oilTotal = oilPrice(30,20,10);
console.log(oilTotal);



//Problem:4
/*-- AllpublicBusFare--*/
function publicBusFare(number)
{  
    //validation diclaration
    let reservedBus = 50;
    let microBus = 11;
    let publicBusFare = 250;
    let reservedBusleft = number % reservedBus;
    let microBusLeft = reservedBusleft % microBus;
    let AllPublicBusFare = publicBusFare * microBusLeft;
    return AllPublicBusFare;
}
let AllPublicBusFare = publicBusFare(112);
console.log(AllPublicBusFare);




//Problem:5
/*---Check bestfriend or Not---*/
function isBestFriend(friend1,friend2)
{   
    //validation diclaration
    if(friend1.name===friend2.friend && friend1.friend===friend2.name)
    {
        return true;
    }
    else
    {
        return false;
    }
}
  const friend1 = {name:'abul',friend:'babul'}; 
  const friend2 = {name:'babul',friend:'abul'}; 
  const bestfriend = isBestFriend(friend1,friend2) 
  console.log(bestfriend);
 

  
 


