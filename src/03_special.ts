/*
=========================================================
SPECIAL TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What are Special Types?
2. undefined
3. Union Types
4. void
5. never
6. any
7. Why any is Dangerous
8. any vs unknown
9. Real World Examples
10. Interview Definitions

=========================================================
1. WHAT ARE SPECIAL TYPES?
=========================================================

TypeScript provides several
special types that help model
different situations.

Common Special Types:

✔ undefined
✔ null
✔ void
✔ never
✔ any
✔ unknown

These types are used when normal
primitive types are not enough.

=========================================================
2. UNDEFINED
=========================================================
*/

let subtitle:
string | undefined =
undefined;

/*
Meaning:

subtitle can be:

string

OR

undefined
*/

subtitle = "Diwakar";

console.log(subtitle);

/*
Common Use Cases:

✔ Optional values

✔ API responses

✔ Form inputs

✔ Configuration values
*/

/*
=========================================================
3. UNION TYPES
=========================================================

Union Type allows a value
to be one of multiple types.

Syntax:

TypeA | TypeB

Example:
*/

let title:
string | undefined;

/*
Meaning:

title can be:

string

OR

undefined
*/

/*
Another Example:
*/

let result:
string | number;

result = "Success";

result = 200;

/*
Both are valid.
*/

/*
=========================================================
4. VOID
=========================================================
*/

/*
void means:

This function does not
return a useful value.
*/

function log(
  msg: string
): void {

  console.log(msg);

}

log("Hello");

/*
Output:

Hello

---------------------------------------------------------

Equivalent:

function log(
  msg:string
){
  console.log(msg);
}

TypeScript infers:

void
*/

/*
Common Use Cases:

✔ Logging

✔ Event Handlers

✔ Side Effects

✔ Database Writes
*/

/*
=========================================================
5. NEVER
=========================================================
*/

/*
never means:

This function never
successfully returns.

Reasons:

✔ Throws an Error

✔ Infinite Loop
*/

function fail(
  msg: string
): never {

  throw new Error(msg);

}

/*
This function never reaches:

return

because execution stops
when error is thrown.
*/

/*
Another Example
*/

function infiniteLoop():
never {

  while (true) {

  }

}

/*
=========================================================
VOID VS NEVER
=========================================================

void

Function finishes execution.

Returns:

undefined

Example:
*/

function greet():
void {

  console.log(
    "Hello"
  );

}

/*
---------------------------------------------------------

never

Function never finishes.

Example:
*/

function crash():
never {

  throw new Error(
    "Boom"
  );

}

/*
=========================================================
6. ANY
=========================================================
*/

/*
any disables TypeScript.

TypeScript stops checking
the value.
*/

const valueAny: any =
JSON.parse(
  '{"x":1}'
);

/*
Type:

any

Meaning:

"Do whatever you want."
*/

valueAny.notThere.toFixed(2);

/*
TypeScript:

No Error

Because:

valueAny is any
*/

/*
=========================================================
7. WHY ANY IS DANGEROUS
=========================================================
*/

/*
Example:
*/

const userData: any = {
  name: "Diwakar"
};

userData.age.toFixed(2);

/*
Compiles Successfully.

Runtime:

Crash

Reason:

age does not exist.

---------------------------------------------------------

TypeScript could not help
because any disables
type checking.
*/

/*
Rule:

Avoid any whenever possible.

=========================================================
8. ANY VS UNKNOWN
=========================================================
*/

/*
ANY

Unsafe
*/

const data1: any =
JSON.parse(
  '{"name":"Diwakar"}'
);

data1.age.toFixed(2);

/*
No TypeScript Error

May crash at runtime.
*/

/*
---------------------------------------------------------

UNKNOWN

Safe
*/

const data2: unknown =
JSON.parse(
  '{"name":"Diwakar"}'
);

/*
data2.age

Error

Object is of type unknown.
*/

/*
TypeScript forces you
to check first.
*/

if (
  typeof data2 ===
  "object" &&
  data2 !== null
) {

  console.log(data2);

}

/*
unknown is preferred over any.

=========================================================
9. REAL WORLD EXAMPLES
=========================================================
*/

/*
Optional API Field
*/

let profileImage:
string | undefined;

/*
Logger
*/

function logger(
  message: string
): void {

  console.log(
    message
  );

}

/*
Error Handler
*/

function throwError(
  message: string
): never {

  throw new Error(
    message
  );

}

/*
JSON Parsing
*/

const parsed:
unknown =
JSON.parse("{}");

/*
=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

UNDEFINED

Represents a value that
has not been assigned.

---------------------------------------------------------

UNION TYPE

Allows a value to be
one of multiple types.

Example:

string | number

---------------------------------------------------------

VOID

Represents the absence of
a useful return value.

Example:

function log():
void

---------------------------------------------------------

NEVER

Represents a value that
never occurs.

Used in functions that:

✔ Throw Errors

✔ Run Forever

---------------------------------------------------------

ANY

Disables TypeScript's
type checking.

Avoid whenever possible.

---------------------------------------------------------

UNKNOWN

A safer version of any.

Requires validation before use.

=========================================================
END OF NOTES
=========================================================
*/

export {};