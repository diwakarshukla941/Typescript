/*
=========================================================
AWAITED<T> & PROMISES IN TYPESCRIPT
=========================================================

INDEX

1. What is Promise<T>?
2. What is Awaited<T>?
3. Why do We Need Awaited?
4. Promise Examples
5. Nested Promises
6. Thenables
7. Awaited with async Functions
8. Awaited with Promise.all()
9. Real World Backend Examples
10. Common Mistakes
11. Best Practices
12. Interview Definitions

=========================================================
1. WHAT IS Promise<T>?
=========================================================

Definition:

A Promise represents a value
that will be available
in the future.

Syntax:

Promise<T>

T represents the type of the
resolved value.

Example:

Promise<number>

means

"The promise will eventually
return a number."

=========================================================
VISUAL
=========================================================

Promise<number>

↓

(wait...)

↓

number

=========================================================
2. WHAT IS Awaited<T>?
=========================================================

Definition:

Awaited<T> extracts the final
resolved type from a Promise.

Syntax:

Awaited<T>

Think:

Promise<number>

↓

Awaited

↓

number

=========================================================
3. WHY DO WE NEED Awaited?
=========================================================

Suppose we have:

async function fetchUser(){

    return {

        id:"1",

        name:"Diwakar"

    };

}

Return Type:

Promise<{

id:string;

name:string;

}>

Sometimes we need the
actual object type.

Instead of manually writing it,

we use:

Awaited<
ReturnType<typeof fetchUser>
>

=========================================================
4. BASIC EXAMPLES
=========================================================
*/

type NumberResult =
Awaited<
Promise<number>
>;

/*
Result

number
*/

type StringResult =
Awaited<
Promise<string>
>;

/*
Result

string
*/

type DirectValue =
Awaited<string>;

/*
Result

string

Nothing changes because
it is already resolved.
*/

/*
=========================================================
5. NESTED PROMISES
=========================================================

Awaited unwraps
multiple Promise layers.
=========================================================
*/

type NestedPromise =
Awaited<
Promise<
Promise<string>
>
>;

/*
Result

string
*/

/*
Visual

Promise

↓

Promise

↓

string

↓

Awaited

↓

string

=========================================================
6. THENABLES
=========================================================

Definition:

A Thenable is any object
having a .then() method.

Example:

Promise

is a Thenable.

Awaited also unwraps
Thenables.

You rarely create them
manually.

=========================================================
7. ASYNC FUNCTIONS
=========================================================
*/

async function fetchCount(){

    return 42 as const;

}

/*
Return Type

Promise<42>
*/

type Count =
Awaited<
ReturnType<
typeof fetchCount
>
>;

/*
Result

42
*/

/*
Visual

fetchCount()

↓

Promise<42>

↓

Awaited

↓

42

=========================================================
8. PROMISE.ALL()
=========================================================
*/

async function getData(){

    return Promise.all(

        [

            Promise.resolve(
                1 as const
            ),

            Promise.resolve(
                "x" as const
            )

        ] as const

    );

}

type DataTuple =
Awaited<
ReturnType<
typeof getData
>
>;

/*
Result

readonly

[

1,

"x"

]

=========================================================
WHY?
=========================================================

Promise.all()

returns

Promise<readonly [...]>

Awaited removes only
the Promise.

Readonly remains.

=========================================================
9. REAL WORLD BACKEND EXAMPLES
=========================================================

Database Query

*/

async function getUser(){

    return {

        id:"1",

        name:"Diwakar"

    };

}

type User =
Awaited<
ReturnType<
typeof getUser
>
>;

/*
Express API

*/

async function getProducts(){

    return [

        {

            id:"1",

            title:"Laptop"

        }

    ];

}

type ProductResponse =
Awaited<
ReturnType<
typeof getProducts
>
>;

/*
=========================================================
10. COMMON MISTAKES
=========================================================

❌ Thinking Awaited
only works with Promise.

Wrong.

Awaited<string>

↓

string

---------------------------------------------------------

❌ Thinking Awaited
removes readonly.

Wrong.

It removes only Promise.

---------------------------------------------------------

❌ Confusing Promise<T>

with

Awaited<T>

Promise<number>

↓

Future number

Awaited<Promise<number>>

↓

number

=========================================================
11. BEST PRACTICES
=========================================================

✔ Use Awaited with
ReturnType for async
functions.

✔ Avoid manually writing
resolved types.

✔ Let TypeScript infer
Promise results.

✔ Use Promise.all()
when multiple independent
async tasks can run together.

=========================================================
12. INTERVIEW DEFINITIONS
=========================================================

PROMISE<T>

Represents a future value.

T is the resolved type.

---------------------------------------------------------

AWAITED<T>

Extracts the final
resolved type.

---------------------------------------------------------

THENABLE

Any object having
a .then() method.

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Difference between

Promise<T>

and

Awaited<T>

Answer

Promise<T>

↓

Future value

Awaited<T>

↓

Resolved value

=========================================================
ANALOGY
=========================================================

Imagine ordering food.

Promise

↓

Food is being prepared.

---------------------------------------------------------

Awaited

↓

Food has arrived.

---------------------------------------------------------

Promise<Promise<string>>

↓

Restaurant

↓

Delivery Partner

↓

Food

---------------------------------------------------------

Awaited

↓

Food

=========================================================
SUMMARY
=========================================================

Promise<T>

↓

Future value

------------------------------------

Awaited<T>

↓

Resolved value

------------------------------------

Promise<Promise<T>>

↓

Awaited

↓

T

------------------------------------

Awaited<
ReturnType<typeof fn>
>

↓

Resolved return type
of async functions

=========================================================
END OF NOTES
=========================================================
*/

export {};