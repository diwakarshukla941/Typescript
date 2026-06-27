/*
=========================================================
FUNCTION UTILITY TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What are Function Utility Types?
2. Why do we need them?
3. typeof with Functions
4. ReturnType<T>
5. Parameters<T>
6. InstanceType<T>
7. ConstructorParameters<T>
8. Real World Backend Examples
9. Common Mistakes
10. Best Practices
11. Interview Definitions

=========================================================
1. WHAT ARE FUNCTION UTILITY TYPES?
=========================================================

Definition:

Function Utility Types are built-in
generic utility types that extract
information from functions and classes.

Instead of manually writing types,
TypeScript can infer them automatically.

Examples:

ReturnType<T>

Parameters<T>

InstanceType<T>

ConstructorParameters<T>

=========================================================
2. WHY DO WE NEED THEM?
=========================================================

Suppose we have:

function getUser() {
    return {
        id: "1",
        name: "Diwakar"
    };
}

Instead of manually writing:

type User = {
    id: string;
    name: string;
};

we can simply write:

type User = ReturnType<typeof getUser>;

Now whenever the function changes,
the type updates automatically.

This prevents duplicate code.

=========================================================
3. TYPEOF WITH FUNCTIONS
=========================================================

Before using these utility types,
we need:

typeof

Example:

function greet(name:string){
    return `Hello ${name}`;
}

typeof greet

does NOT call the function.

It simply refers to the function's type.

Think:

greet

↓

Actual Function

typeof greet

↓

Function Signature

=========================================================
EXAMPLE FUNCTION
=========================================================
*/

function ExtractUserInfo(
    id: string,
    isExtraInfo = false
) {

    return {

        id,

        name: "Diwakar",

        log: isExtraInfo
            ? "details"
            : (undefined as string | undefined)

    };

}

/*
Function Signature

(id:string,isExtraInfo?:boolean)

↓

{

id:string;

name:string;

log:string|undefined;

}

=========================================================
4. RETURNTYPE<T>
=========================================================

Definition:

Extracts the return type of
a function.

Syntax:

ReturnType<typeof functionName>

=========================================================
*/

type UserReturn =
ReturnType<
typeof ExtractUserInfo
>;

/*
Result

{

id:string;

name:string;

log:string|undefined;

}
*/

const user:UserReturn =
ExtractUserInfo(
    "U1",
    true
);

console.log(user);

/*
Why useful?

No need to manually
duplicate object types.

=========================================================
5. PARAMETERS<T>
=========================================================

Definition:

Extracts all parameters
of a function as a tuple.

Syntax:

Parameters<typeof fn>

=========================================================
*/

type UserParams =
Parameters<
typeof ExtractUserInfo
>;

/*
Result

[

id:string,

isExtraInfo?:boolean

]
*/

const args:
UserParams =
[
    "U1",
    true
];

const result =
ExtractUserInfo(
    ...args
);

/*
Notice

Parameters

returns a Tuple

NOT an object.

=========================================================
VISUAL
=========================================================

function

↓

(

id:string,

flag:boolean

)

↓

Parameters

↓

[

string,

boolean

]

=========================================================
6. INSTANCETYPE<T>
=========================================================

Definition:

Extracts the object type
created by a class.

=========================================================
*/

class Person {

    constructor(

        public name:string,

        public age:number

    ){}

    greet(){

        return `Hi I am ${this.name}. My age is ${this.age}`;

    }

}

/*
Person

↓

Class

---------------------------------------------------------

new Person()

↓

Object

---------------------------------------------------------

InstanceType

extracts

↓

Object Type
*/

type PersonInstance =
InstanceType<
typeof Person
>;

const p:
PersonInstance =
new Person(
    "Diwakar",
    29
);

console.log(
    p.greet()
);

/*
Type

{

name:string;

age:number;

greet():string;

}

=========================================================
7. CONSTRUCTORPARAMETERS<T>
=========================================================

Definition:

Extracts constructor
arguments as a tuple.

Syntax:

ConstructorParameters<typeof Class>

=========================================================
*/

type PersonArgs =
ConstructorParameters<
typeof Person
>;

/*
Result

[

string,

number

]
*/

const personArgs:
PersonArgs =

[
    "Diwakar",
    29
];

const person =
new Person(
    ...personArgs
);

/*
Visual

constructor(

string,

number

)

↓

[

string,

number

]

=========================================================
8. REAL WORLD BACKEND EXAMPLES
=========================================================

Repository

*/

function createUser(){

    return {

        id:"1",

        name:"Diwakar"

    };

}

type UserEntity =
ReturnType<
typeof createUser
>;

/*
Express Middleware

*/

function auth(

token:string,

admin:boolean

){}

type AuthArgs =
Parameters<
typeof auth
>;

/*
Factory Pattern

*/

class Database{

    constructor(

        public url:string,

        public port:number

    ){}

}

type DBArgs =
ConstructorParameters<
typeof Database
>;

type DBInstance =
InstanceType<
typeof Database
>;
/*
=========================================================
9. COMMON MISTAKES
=========================================================

❌ Forgetting typeof

Wrong

ReturnType<Person>

---------------------------------------------------------

Correct

ReturnType<
typeof Person
>

---------------------------------------------------------

❌ Calling function

Wrong

ReturnType<
typeof fn()
>

---------------------------------------------------------

Correct

ReturnType<
typeof fn
>

---------------------------------------------------------

❌ Confusing Parameters
with ReturnType

Parameters

↓

Tuple

ReturnType

↓

Returned Object

=========================================================
10. BEST PRACTICES
=========================================================

✔ Prefer ReturnType
instead of rewriting
object types.

✔ Use Parameters
for wrapper functions.

✔ Use ConstructorParameters
when creating factories.

✔ Use InstanceType
when working with classes.

=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

RETURNTYPE<T>

Extracts the return type
of a function.

---------------------------------------------------------

PARAMETERS<T>

Extracts function parameters
as a tuple.

---------------------------------------------------------

INSTANCETYPE<T>

Extracts the object type
created by a class.

---------------------------------------------------------

CONSTRUCTORPARAMETERS<T>

Extracts constructor
arguments as a tuple.

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Why use ReturnType?

Answer:

To avoid duplicating types
and automatically stay in
sync with function changes.

=========================================================
ANALOGY
=========================================================

Imagine a factory.

Function

↓

Factory

---------------------------------------------------------

Parameters

↓

Raw Materials

---------------------------------------------------------

ReturnType

↓

Finished Product

---------------------------------------------------------

Constructor

↓

Blueprint

---------------------------------------------------------

ConstructorParameters

↓

Blueprint Requirements

---------------------------------------------------------

InstanceType

↓

Finished House

=========================================================
SUMMARY
=========================================================

ReturnType<T>

↓

What comes OUT
of the function.

------------------------------------

Parameters<T>

↓

What goes INTO
the function.

------------------------------------

ConstructorParameters<T>

↓

What goes INTO
the constructor.

------------------------------------

InstanceType<T>

↓

What comes OUT
after using new.

=========================================================
END OF NOTES
=========================================================
*/

export {};