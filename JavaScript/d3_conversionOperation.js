let score = "33abc"   // converted number
// let score1 = null;
// let score2 = undefined;
// let score3 = true

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);  
// console.log(typeof valueInNumber);
// console.log(valueInNumber)   // NaN => Not a Number

// let valueInNumber1 = Number(score1);
// console.log(valueInNumber)  //  => NaN

// let valueInNumber2 = Number(score2);
// console.log(valueInNumber)  // => NaN

// let valueInNumber3 = Number(score3);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // =>


    // Note:  "33" => 33
    //        "33abc" => NaN
    // true => 1;
    // false => 0;


    let isLoggedIn = 1   // true   // converted boolean
    let isLoggedIn1 = 0  // false
    let isLoggedIn2 = "" // false
    let isLoggedIn3 = "Ravishankar"  // true

    let booleanLoggedIn = Boolean(isLoggedIn)
    // console.log(booleanLoggedIn);    // true

    let booleanLoggedIn1 = Boolean(isLoggedIn1)
    // console.log(booleanLoggedIn1);   // false

    let booleanLoggedIn2 = Boolean(isLoggedIn2)
    // console.log(booleanLoggedIn2); // false


    let booleanLoggedIn3 = Boolean(isLoggedIn3)
    // console.log(booleanLoggedIn3);  // true

    // Note: boolean me
    // 1 => true    0 => false
    // "" => false
    // "Ravishankar" =. true
                                                        // investigation study

    let someNumber = 33                                  // javaScript hmesa string value deta hai pr usko hum 
    let stringNumber = String(someNumber)                //  jarurat ka according boolean, number, floar... me 
    // console.log(stringNumber);                           //  convert karte hai
    // console.log(typeof stringNumber);


    // ******************************************* Operations ****************************************************


    let value = 3
    let negValue = -value
    // console.log(negValue)  // -3
    // console.log(typeof negValue)  // number

    // console.log(2+3)
    // console.log(2-3)
    // console.log(2*3)
    // console.log(2/3)
    // console.log(2**3)
    // console.log(2%3)


    let str1 = "Ravishankar"
    let str2 = " Kumar"

    let str3 = str1 + str2
    console.log(str3);

    console.log("1" + 2)      // 12
    console.log(1 + "2")      // 12         ECMAScript guidelines that follow behaves of print
    console.log("1" + 2 + 2)  // 122        this types of output.
    console.log(1 + 2 + "2")  // 32

    console.log(3 + 4 * 5 / 6)  // 6.3333333333333   but in real world not consider 
                                                //   this type of code
    console.log((3 + 4) * (5 / 6)) // 5.83333333333

