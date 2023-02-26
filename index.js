/**
 * Question 1
Using the constructor method, create an InstagramPost() constructor function that takes the properties 
below as arguments.
    ●Handle of author
    ●content, 
    ●An image link posted by the author of the post
    ●Number of views, 
    ●Number of likes, 
 */

    function instagramPost (handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes){
        this.handleOfAuthor = handleOfAuthor;
        this.content = content;
        this.imageLink = imageLink;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
    }

    const cynthia = new instagramPost ("@pricelesscee", "Local Delicacy", "./Abacha-and-ugba.jfif",500000,200000 );
    console.log(cynthia);

/**  Question 2
 * Create 2 Instagram post objects from the constructor function you created above
 */

let amaka = new instagramPost ("@amaka_babe", "Relationship talks", "./relationship.img","2 Million",700000 );
console.log({amaka});

let tayo = new instagramPost ("@cutetayo", "Education", "./reading.gif","5.2 Million", "1.5 Million" );
console.log({tayo});

/** Question 3.
Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

a)Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. 
Afterwards, create an object representing Musa from the factory function. 
b)Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
 */

// Question 3a
function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location,
        musaJambScore:{
            ENG: 70,
            GOVT: 85,
            LIT: 82,
            CRK: 94,     
        }
    };
}

const Musa = createPerson('Musa Dawodu', '19 years', 'Lekki');
console.log({Musa});

// Question 3b

function createJambScores(Eng, Govt, lit, crk ){
    return{
        ENG: Eng,
        GOVT: Govt,
        LIT: lit,
        CRK: crk,
    }
}
const musaJambScore = createJambScores (70, 85, 82, 94);
console.log({musaJambScore})

/** Question 4.
 What are the different ways you can clone an object? Give examples for each of them.
 */


 // Objects can be cloned in 3  different ways:-
 // 1. Using Object.assign()
 // 2. Using spread syntax i.e, ...
 // 3. Using the method JSON.parse


 //  1. Using Object.assign()

const createMe = {
    skinColor: "Fair",
    height: "1.5m",
    hairColor: "Golden"
}

const myId = Object.assign({}, createMe);
console.log("Using Object.assign()");
console.log({createMe});
console.log({myId});


 // 2. Using spread syntax i.e, ...

const myLikes = {
    food: "Abacha",
    drink: "Sprite",
    wears: "Short Gown"
}
const myLike = {...myLikes};

console.log("Using spread syntax");

console.log({myLikes});
console.log({myLike});


// 3. Using the method JSON.parse -  let me copy example 1 and  2 above

const mySelf = {
    hobby: "travelling",
    favMovie: "Any good one"
    
}
    const mySelf1 = JSON.parse(JSON.stringify(mySelf));
    console.log("Using JSON.parse method");
    console.log({mySelf});
    console.log({mySelf1});



 /* Question 5.
 As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

6.const presidentialCandidates = {
7.   AAC: 'Omoyele Sowore',
8.   ACCORD: 'Christopher Imumolen',
9.   APC: 'Bola Ahmed Tinubu',
10.   LP: 'Peter Obi',
11.   NNPP: 'Rabiu Kwankwaso',
12.   PDP: 'Atiku Abubakar',
13.}


Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
  */

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
 }

 

for (const candidate in presidentialCandidates){
    console.log(presidentialCandidates[candidate]+ " is the presidential candidate of " + candidate);
    
}

