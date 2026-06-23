/*
=========================================================
OPTIONAL PARAMETERS & DEFAULT PARAMETERS
IN TYPESCRIPT
=========================================================

INDEX

1. What are Optional Parameters?
2. Why Optional Parameters?
3. Optional Parameter Syntax
4. Handling Undefined Values
5. Optional Chaining
6. Default Parameters
7. Optional vs Default Parameters
8. Real World Examples
9. Best Practices
10. Interview Definitions

=========================================================
1. WHAT ARE OPTIONAL PARAMETERS?
=========================================================

Definition:

Optional Parameters allow a function
parameter to be omitted when calling
the function.

Syntax:

parameter?: Type

Example:

function greet(
  name?: string
)

The function can be called:

greet("Diwakar")

OR

greet()

=========================================================
2. WHY OPTIONAL PARAMETERS?
=========================================================

Sometimes a value may or may not
be provided.

Examples:

✔ User Name

✔ Search Query

✔ Filter Values

✔ Optional Settings

Optional parameters make
function calls flexible.

=========================================================
3. OPTIONAL PARAMETER SYNTAX
=========================================================
*/

function greetPersonOptional(
  name?: string
): string {

  const userName =
    name
      ? name.toUpperCase()
      : "GUEST";

  return `Hello ${userName}`;

}

console.log(
  greetPersonOptional(
    "Diwakar"
  )
);

console.log(
  greetPersonOptional()
);

/*
Output:

Hello DIWAKAR

Hello GUEST

---------------------------------------------------------

Type of name:

string | undefined

because:

name?

means:

name may exist

OR

name may be undefined
*/

/*
=========================================================
4. HANDLING UNDEFINED VALUES
=========================================================
*/

/*
Bad Example
*/

function badGreeting(
  name?: string
) {

  const upperCase =
    name?.toUpperCase();

  return upperCase;

}

/*
Problem:

Return Type:

string | undefined

If name is missing:

undefined

is returned.

This may not be what
we want.
*/

/*
Good Example
*/

function goodGreeting(
  name?: string
): string {

  const userName =
    name
      ? name.toUpperCase()
      : "GUEST";

  return userName;

}

/*
Now we always return
a valid string.
*/

/*
=========================================================
5. OPTIONAL CHAINING
=========================================================
*/

/*
Optional Chaining:

?.
*/

function example(
  name?: string
) {

  const result =
    name?.toUpperCase();

  return result;

}

/*
Meaning:

If name exists:

name.toUpperCase()

Otherwise:

undefined

---------------------------------------------------------

Example:

example("Diwakar")

↓

"DIWAKAR"

---------------------------------------------------------

Example:

example()

↓

undefined
*/

/*
Optional Chaining
prevents crashes.

Without it:

name.toUpperCase()

would throw an error
when name is undefined.
*/

/*
=========================================================
6. DEFAULT PARAMETERS
=========================================================
*/

/*
Default Parameters provide
a fallback value automatically.
*/

function greetPersonDefault(
  name: string = "Guest"
): string {

  return `Hello ${name.toUpperCase()}`;

}

console.log(
  greetPersonDefault(
    "Diwakar"
  )
);

console.log(
  greetPersonDefault()
);

/*
Output:

Hello DIWAKAR

Hello GUEST

---------------------------------------------------------

Type of name:

string

NOT

string | undefined

because a default value
is always available.
*/

/*
=========================================================
HOW DEFAULT PARAMETERS WORK
=========================================================

Call:

greetPersonDefault()

---------------------------------------------------------

Internally:

name = "Guest"

---------------------------------------------------------

Equivalent:

function greet(
  name?: string
){

  const actualName =
    name ?? "Guest";

}

=========================================================
7. OPTIONAL VS DEFAULT PARAMETERS
=========================================================

OPTIONAL PARAMETER

name?: string

Type:

string | undefined

---------------------------------------------------------

Function can receive:

string

or

undefined

---------------------------------------------------------

Must handle undefined
manually.

=========================================================

DEFAULT PARAMETER

name: string = "Guest"

Type:

string

---------------------------------------------------------

Function always receives
a valid string.

---------------------------------------------------------

No manual undefined
handling needed.

=========================================================
8. REAL WORLD EXAMPLES
=========================================================
*/

/*
Search Function
*/

function search(
  query: string = ""
) {

  console.log(
    query
  );

}

/*
Pagination
*/

function getUsers(
  page: number = 1
) {

  console.log(
    page
  );

}

/*
Greeting
*/

function welcome(
  name: string = "Guest"
) {

  return `Welcome ${name}`;

}

/*
=========================================================
9. BEST PRACTICES
=========================================================

✔ Use default parameters
  when a sensible fallback
  exists.

✔ Use optional parameters
  when the value may truly
  be missing.

✔ Avoid returning undefined
  accidentally.

✔ Prefer:

name: string = "Guest"

over:

name?: string

when a default value exists.

=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

OPTIONAL PARAMETER

A parameter that may be omitted
when calling a function.

Syntax:

name?: string

Type:

string | undefined

---------------------------------------------------------

DEFAULT PARAMETER

A parameter with a fallback
value used when no argument
is provided.

Syntax:

name: string = "Guest"

Type:

string

---------------------------------------------------------

OPTIONAL CHAINING

The ?. operator safely accesses
properties or methods on values
that might be undefined or null.

Example:

name?.toUpperCase()

---------------------------------------------------------

OPTIONAL VS DEFAULT

Optional Parameter:

Must handle undefined.

---------------------------------------------------------

Default Parameter:

Automatically receives a
fallback value.

=========================================================
END OF NOTES
=========================================================
*/

export {};