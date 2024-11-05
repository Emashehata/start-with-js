/* 1- Write a program that allow to user enter number then print it */
// var x= +window.prompt("Enter a number");
// console.log(x);

/* 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no  */
// var x= +window.prompt("Enter a number");
// if(x%3==0&&x%4==0)
//     console.log("yes");
// else 
//     console.log("no");


/* 3- Write a program that allows the user to insert 2 integers then print the max  */
// var x= +window.prompt("Enter first number");
// var y= +window.prompt("Enter second number");
// if(x>=y)
//     console.log("the max is "+x);
// else
//     console.log("the max is "+y); 

/*4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.  */
// var x= +window.prompt("Enter a number");
// if(x<0)
//     console.log("negative");
// else 
//     console.log("positive");


/*5- Write a program that take 3 integers from user then print the max element and the min element.  */
// var x= +window.prompt("Enter first number");
// var y= +window.prompt("Enter second number");
// var z= +window.prompt("Enter third number");
// var mn=x;
// var mx=x;
// if(mn>y)
// {
//     mn=y;
//     if(mn>z)
//         mn=z;
// }
// if(mx<y)
// {
//     mx=y;
//     if(mx<z)
//         mx=z;
// }
// console.log("The max number is "+mx);
// console.log("The min number is "+mn);


/*6- Write a program that allows the user to insert integer number then check If a number is oven or odd  */
// var x= +window.prompt("Enter first number");
// if(x%2==0)
//     console.log("even");
// else
//     console.log("odd");
    


/*8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant  */
// var x= window.prompt("Enter a charchter to detect if it's a vowel or not");
// var vowels= "aelou";
// for(var i=0;i<vowels.length;i++){
//     if(x==vowels[i])
//     {
//         console.log("vowel");
//         break;
//     }
// }
// if(i==vowels.length)
//     console.log("constant");
    

/*9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number  */
// var x= +window.prompt("Enter a number");
// for(var i=1;i<=x;i++)
//     console.log(i);
    


/*10- Write a program that allows user to insert integer then print a multiplication table up to 12. */
// var x= +window.prompt("Enter a number");
// for(var i=1;i<=12;i++)
//     console.log(i*x);



/*11- Write a program that allows to user to insert number then print all even numbers between 1 to this number  */
// var x= +window.prompt("Enter a number");
// for(var i=2;i<=x;i++){
//     if(i%2==0)
//         console.log(i);
        
// }


/*12- Write a program that take two integers then print the power  */
// var x= +window.prompt("Enter a number");
// var y= +window.prompt("Enter a power");
// console.log(x**y);



/*12- Write a program to enter marks of five subjects and calculate total, average and percentage.  */
// var sum=0;
// for(var i=0;i<5;i++){
//     var x= +window.prompt("Enter a number");
//     sum+=x;
// }
// console.log(sum);
// console.log(sum/5);
// console.log((sum/500)*100);


/*13-Write a program to input month number and print number of days in that month.  */
// var x= +window.prompt("Enter a number");
// if(x==1||x==3||x==5||x==7||x==8||x==10||x==12)
//     console.log("Number of Days : 31");
// else if(x==11||x==9||x==6||x==4)
//     console.log("Number of Days : 30");
// else 
//     console.log("Number of Days : 28");


/*14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer  , Find percentage and grade   */
// for(var i=0;i<5;i++){
//     var x= +window.prompt("Enter a number");
//     console.log("percentage is : "+(x/100)*100 +"%");
//     if((x/100)*100>=90)
//         console.log("grade A");
//     else if((x/100)*100>=80)
//         console.log("grade B");
//     else if((x/100)*100>=70)
//         console.log("grade C");
//     else if((x/100)*100>=60)
//         console.log("grade D");
//     else if((x/100)*100>=50)
//         console.log("grade E");
//     else
//         console.log("grade F");
    
// }



/*15- Write a program to print total number of days in month   */
// var x = +window.prompt("Enter a number");
// switch(true){
// case x == 1:  
// case x==3:
// case x==5:
// case x==7: 
// case x==8:
// case x==10:
// case x==12:
//     console.log("Number of Days : 31");
//     break;
// case x==11:
// case x==9 :
// case x==6 :
// case x==4 :
//     console.log("Number of Days : 30");
//     break;
// default:
//     console.log("Number of Days : 28");
// }


/*16- Write a program to check whether an alphabet is vowel or consonant */
// var x= window.prompt("Enter an alphapet");
// switch(true){
//     case x=='a':
//     case x=='e':
//     case x=='i':
//     case x=='o':
//     case x=='u':
//         console.log("vowel");
//         break;
//     default:
//             console.log("constant");
            
        
// }


/*17- Write a program to find maximum between two numbers   */
// var x= +window.prompt("Enter first number");
// var y= +window.prompt("Enter second number");
// switch(true){
//     case x>y:
//         console.log("x is bigger");
//         break;
//     case x<y:
//         console.log("y is bigger");
//         break;
//         default:
//             console.log("x and y are equal");
            
        
// }


/*18- Write a program to check whether a number is even or odd   */
// var x= +window.prompt("Enter a number");
// switch(true){
//     case (x%2)==0:
//         console.log("even");
//         break;
//     default:
//         console.log("odd");
                
// }


/*19- Write a program to check whether a number is positive or negative or zero  */
// var x= +window.prompt("Enter a number");
// switch(true){
//     case x<0:
//         console.log("negative");
//         break;
//     case x>0:
//         console.log("positive");
//         break;
//     default:
//         console.log("0");       
// }


/*20- Write a program to create Simple Calculator */
var x= +window.prompt("Enter first number");
var y= +window.prompt("Enter second number");
var sign= window.prompt("Enter a sign");
switch (true) {
    case sign=='+':
        console.log("the sum is " + (x+y));
        break;
    case sign=='-':
        console.log("the differance is " + (x-y));
        break;
    case sign=='-':
        console.log("the multiplication is " + (x*y));
        break;
    default:
        console.log("the division is " + (x/y));
}
