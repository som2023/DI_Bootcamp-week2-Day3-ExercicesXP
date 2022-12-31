/*  Exercise 1 : List Of People */ 

// Part I - Review About Arrays

const people = ["Greg", "Mary", "Devon", "James"];
//Write code to remove “Greg” from the people array.
people.shift();
//Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason");
//Write code to add your name to the end of the people array.
people.push("SOM");
console.log(people);
//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
/*Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method*/
console.log(people);
const newpeople=people.slice(3);
console.log(people.slice(1,3));
console.log(people.indexOf("Foo")); // donne -1 parce qu'il n'est pas une value du tableau
let last =people[people.length-1] // le dernier element de l'indice du tableau est -1
console.log('last:' + last);

// Part II
//Using a loop, iterate through the people array and console.log each person.

let longp=people.length;

for(let i= 0; i<longp; i++)
{
 alert( people[i]);
}
//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
let long=people.length;

for(let i= 0; i<long-1; i++)
{
 
 alert( people[i]);
 if (i === long-1) { break; }

}
 
/*------------------EXERCISE_2---------------------*/



//Create an array called colors where the value is a list of your five favorite colors.
const colors=["white","green","blue","orange","purple"]
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for(let i= 0; i<colors.length; i++)
{    

     console.log("Mon choix  n° "+(i+1)+ " est : " + (colors[i]))
}
//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus
const suffice=["st","nd","rd","th","th"]
for(let i= 0; i<colors.length; i++)
{    

     console.log("My "+(i+1)+suffice[i] +" choice is : " + (colors[i]))
}
//----------------------------------------------------------------------------------------
                   //--EXERCISE_3--

//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let number= null;
//console.log("Number : "+(number+1));
while(number < 10)
{
    const answer =prompt("Please enter a number ")
    const number=Number(answer)
}
//While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?
//--------------------------------------------------------------------------------   
                       /*-----Exercise_4--------- */

 //1-Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
} 

//Console.log the number of floors in the building.
console.log(building.numberOfFloors);
//Console.log how many apartments are on the floors 1 and 3.
console.log("apartements on first ",building.numberOfAptByFloor.firstFloor);
console.log("apartements on third ",building.numberOfAptByFloor.thirdFloor);
//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("second tenant : ",building.nameOfTenants[1])
console.log("Dan has this many rooms  : ",building.numberOfRoomsAndRent.dan[0])
 
//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent=building.numberOfRoomsAndRent.sarah[1];
const davidRent=building.numberOfRoomsAndRent.david[1];
const dandRent=building.numberOfRoomsAndRent.dan[1];
if(sarahRent+davidRent>dandRent)
{
    building.numberOfRoomsAndRent.dan[1]=1200;
}
console.log(building);

//----------------------------EXERCISE_5---------------------------------------------
//Create an object called family with a few key value pairs.
//Using a for in loop, console.log the keys of the object.
//Using a for in loop, console.log the values of the object.

const family={
    dad:"John",
    mom:"Mary",
    daughter:"Jane"
}
for(const item in family)
{
console.log("key: ",item);
console.log("value: ",family[item]);
}
//**********************-----EXERCISE_6---************************************************ */const details = {
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
   
  const details = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
      }
      let sentence=""
      for(const item in details)
      {
        console.log(item);
        sentence=sentence+" "+item+" "+details[item];
        console.log("key", details[item])
      }
      console.log(sentence)

      /***********************-----EXERCISE_7----*************************/

//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let acronym=""
const sorteNames=names.sort();
for(const name of sorteNames)
{
 console.log(name);
 acronym=acronym+name[0]
}
console.log(acronym)