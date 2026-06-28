/*
=========================================================
UNION HELPER UTILITY TYPES
=========================================================

INDEX

1. What are Union Helper Types?
2. Why do We Need Them?
3. Exclude<T, U>
4. Extract<T, U>
5. NonNullable<T>
6. Real World Backend Examples
7. Common Mistakes
8. Best Practices
9. Interview Definitions

=========================================================
1. WHAT ARE UNION HELPER TYPES?
=========================================================

Definition:

Union Helper Types are built-in
utility types that manipulate
Union Types.

Instead of creating new unions
manually, TypeScript can transform
them automatically.

The three most commonly used are:

Exclude<T, U>

Extract<T, U>

NonNullable<T>

=========================================================
2. WHY DO WE NEED THEM?
=========================================================

Suppose we have:

type Event =
"click"
|
"submit"
|
"hover"
|
"keydown"
|
"keyup"

Sometimes we need to:

✔ Remove values

✔ Keep only specific values

✔ Remove null and undefined

Instead of rewriting unions,
TypeScript can generate them.

=========================================================
3. EXCLUDE<T, U>
=========================================================

Definition:

Removes from T all members
that are assignable to U.

Syntax:

Exclude<T, U>

Read it as:

Take T

Remove everything
that exists in U.

=========================================================
*/

type EventType =

"click"

|

"submit"

|

"hover"

|

"keydown"

|

"keyup";

type AllowedEvents =
Exclude<

EventType,

"keydown"

>;

/*
Visual

EventType

↓

click

submit

hover

keydown

keyup

↓

Remove

keydown

↓

click

submit

hover

keyup
*/

function handleEvent(
    event: AllowedEvents
){

    console.log(event);

}

handleEvent("keyup");

// handleEvent("keydown");

/*
Error

"keydown"

was removed.

=========================================================
REAL WORLD USE
=========================================================

Disable some API actions.

Example:

type Roles =
"Admin"
|
"User"
|
"Guest";

type AllowedRoles =
Exclude<
Roles,
"Guest"
>;

=========================================================
4. EXTRACT<T, U>
=========================================================

Definition:

Keeps from T only those
members assignable to U.

Syntax:

Extract<T, U>

Read it as:

Take T

Keep only
what exists in U.

=========================================================
*/

type Actions =

"create"

|

"update"

|

"delete"

|

"read";

type WriteActions =
Extract<

Actions,

"create"

|

"update"

|

"delete"

>;

function handleAction(
    action: WriteActions
){

    console.log(action);

}

handleAction("create");

// handleAction("read");

/*
Error

Only

create

update

delete

are allowed.

=========================================================
VISUAL
=========================================================

Actions

↓

create

update

delete

read

↓

Keep

create

update

delete

↓

create

update

delete

=========================================================
REAL WORLD USE
=========================================================

Permissions

Extract admin-only routes

Extract write permissions

Extract API methods

=========================================================
5. NONNULLABLE<T>
=========================================================

Definition:

Removes

null

and

undefined

from a type.

Syntax:

NonNullable<T>

=========================================================
*/

type MaybeNumber =

number

|

null

|

undefined;

type CleanNumber =
NonNullable<
MaybeNumber
>;

function square(
    value: CleanNumber
){

    return value * value;

}

console.log(
    square(10)
);

// square(null);

// square(undefined);

/*
Error

null

and

undefined

were removed.

=========================================================
VISUAL
=========================================================

number

|

null

|

undefined

↓

NonNullable

↓

number

=========================================================
REAL WORLD USE
=========================================================

Database IDs

API Responses

Authenticated Users

JWT Payloads

=========================================================
6. REAL WORLD BACKEND EXAMPLES
=========================================================

API Methods

*/

type HttpMethod =

"GET"

|

"POST"

|

"PUT"

|

"PATCH"

|

"DELETE";

type WriteMethod =
Exclude<
HttpMethod,
"GET"
>;

type ReadMethod =
Extract<
HttpMethod,
"GET"
>;

/*
Database User

*/

type DatabaseUser = {

    id:string;

    email:string;

};

type LoggedInUser =
NonNullable<
DatabaseUser
>;

/*
=========================================================
7. COMMON MISTAKES
=========================================================

❌ Confusing Exclude
and Extract

Exclude

↓

Removes

---------------------------------------------------------

Extract

↓

Keeps

---------------------------------------------------------

❌ Thinking NonNullable
removes all falsy values.

Wrong.

It removes ONLY

null

and

undefined.

Example:

0

remains.

false

remains.

"" (empty string)

remains.

=========================================================
8. BEST PRACTICES
=========================================================

✔ Use Exclude
to remove members
from unions.

✔ Use Extract
to keep members.

✔ Use NonNullable
when a value has already
been checked for null.

✔ Prefer utility types
instead of rewriting unions.

=========================================================
9. INTERVIEW DEFINITIONS
=========================================================

EXCLUDE<T, U>

Removes from T every
member assignable to U.

---------------------------------------------------------

EXTRACT<T, U>

Keeps from T every
member assignable to U.

---------------------------------------------------------

NONNULLABLE<T>

Removes

null

and

undefined

from T.

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Difference between

Exclude

and

Extract?

Answer

Exclude

↓

Removes matching members.

Extract

↓

Keeps matching members.

=========================================================
ANALOGY
=========================================================

Imagine a classroom.

Students

↓

A

B

C

D

---------------------------------------------------------

Exclude

Remove

C

↓

A

B

D

---------------------------------------------------------

Extract

Keep only

C

↓

C

---------------------------------------------------------

NonNullable

Imagine attendance.

Present

Absent

Unknown

↓

Remove

Absent

Unknown

↓

Present

=========================================================
SUMMARY
=========================================================

Exclude<T, U>

↓

Remove members

------------------------------------

Extract<T, U>

↓

Keep members

------------------------------------

NonNullable<T>

↓

Remove

null

and

undefined

=========================================================
END OF NOTES
=========================================================
*/

export {};