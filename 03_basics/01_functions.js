function sayMyName() {
     console.log("h");
     console.log("a");
     console.log("r");
     console.log("i");
     console.log("o");
     console.log("m");

}

// sayMyName()


// function addTwonumbers(num1, num2){
    
//     console.log(num1 + num2)

    
// }

//this will show the output as Nan beacuse no no. is defined 
// console.log(addTwonumbers()) 

// console.log(addTwonumbers(4,5))

// console.log(addTwonumbers(4,"a"))  //ye khud se nahi check krta ki kya value defined hai directly aad kardeta hai
// hume khud se starting mein funtion defination time pe check krna pddega ki tabhi add karo jab ddo integers given ho

// lets check kya hum is funtion ki jo bhi value aarhi wo kisi variable mein store kar pa rhe ya nahi 

// const result = console.log(addTwonumbers(4,5)) // dekho print karne  pe to aayega ki result 9 hogya jodd kar 
// but jab hum directtly result print karke dekhnge to kya hoga 

//lets ccheck............
// console.log(result) // therefore by this humne smjha ki diirectly store nahi ho sakta hai bhale hi wo sahi reslut return kar rha ho


// console.log(typeof(result)) // type 


function addTwonumbers(num1, num2){

    // let result = num1 + num2 // iske likhe bina bhi direct kaam ho jayega 
    // upar wali line  na likhne ka ek aur fayada hai humne storege kam use kiya 
    return  num1 + num2
    console.log("return ke bbaad likha hua") //ye kabhi run nahi hoga compiler always ignore kar dega isko 


}

// REMEMBER!!!!!!!!!!!!!
// one more thing humne jo funtion defination ke andar result  declare kiya hai wo alg hai
// aur just neeche likha funtion ke brackeet ke bahr wo alga hai 


// const result = addTwonumbers(4,5)  //ye maine value store ki console log nahi kiya ynha confusion hota hi value print ho jayeegi asia kuch bbhi nahi hoga 
 

// ab print karke dekhoo result ke andar kkya show kar rha hai 

// console.log(result) // ab iske andar value store ho rahi jo funtion ke andar add ho rha hai 
// and it is the right way to store a value(or output of function)

// console.log("Result: ", result)

// ###############################################

// function loginMessage(username){
    
//     return `${username} just logged in`

// }

// loginMessage()// ynha pe confuse mat hona.... ye humne funtion call kiya hai aur defination mein koi bhi console log nahi tha to kuch bhi print nahi hoga 
// console.log(loginMessage()) // ye undefined show karega 
// console.log(loginMessage("hariom")) // ye print karega "hariom just logged in" kyunki hhumne value provide kkardi 


// mai chaht hun ki undefined ki jagh koi meesage aajaye if koi username na provide kiya gya ho 

// to uske liye ye krna hoga 

function loginMessage(username){
    if(username === undefined){
        console.log("Please Enter Username!!!")
        return

    }
    return `${username} just logged in`

}

// loginMessage() // this will also run the if ke andar ka statment (output meinn print hoga mssg kyunki console.log defination ke andar hi likha hua hai )

// console.log(loginMessage()) // ynha kuch bhi nahi given hai bracket andr to ye if wala statement run karega aur given mssg ko print karga 

// console.log(loginMessage("hariom singh"))  ismein humne user nam ki value " hariom singh" provide kardi 

// ####################################################
// accha agr hum undefined wali cheez se bchna chahte hain to hum default vaule provide kar sakte hai upar wale code mein 

// karke dekhtein hain 

// function loginMessage(username = "sam"){  // ab ynha kabhi iski value undefined ho hi nahi sakti...if kuch nahi bhhi paas karnge humto sam raehga hi rahega which means if wala block run nahi hoga 
//     if(!username){ // this implies exactly (username === undefined) just syntax hai !!
//         console.log("Please Enter Username!!!")
//         return

//     }
//     return `${username} just logged in`

// }

// console.log(loginMessage()) // therefore bina kuch paa kiye hue humne dekha ki "sam " print ho rha hai 

// console.log(loginMessage("HAariom")) // aur agr koi vale paaas ki to default wali overwrite kar di jjayegi 








