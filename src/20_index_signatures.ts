/*
=========================================================
INDEX SIGNATURES, RECORDS & MAPS
=========================================================

INDEX

1. What is an Index Signature?
2. Why Use Index Signatures?
3. Index Signature Example
4. Problems With Index Signatures
5. Record Utility Type
6. Record vs Index Signature
7. JavaScript Map
8. Map vs Object
9. Loose Records
10. Real World Examples
11. Interview Definitions

=========================================================
1. WHAT IS AN INDEX SIGNATURE?
=========================================================

Definition:

An Index Signature allows
dynamic property names.

Syntax:

{
  [key: string]: ValueType
}

Meaning:

Any string key is allowed.

=========================================================
2. WHY USE INDEX SIGNATURES?
=========================================================

Sometimes we don't know
all property names in advance.

Examples:

✔ Analytics

✔ Counters

✔ Dynamic Settings

✔ Configuration Objects

=========================================================
3. INDEX SIGNATURE EXAMPLE
=========================================================
*/

type NumberDict = {

  [key: string]: number;

};

const counters:
NumberDict = {};

counters["Likes"] = 555;

counters["Comments"] = 100;

console.log(counters);

/*
Result:

{
  Likes: 555,
  Comments: 100
}

---------------------------------------------------------

Any string key is allowed.
*/

/*
Valid:
*/

counters["Views"] = 500;

counters["Shares"] = 20;

/*
=========================================================
4. PROBLEMS WITH INDEX SIGNATURES
=========================================================
*/

/*
TypeScript allows:

*/

counters["Anything"] = 999;

counters["RandomKey"] = 10;

/*
Because:

[key:string]

means:

ANY string key.

---------------------------------------------------------

This can be too loose.

Sometimes we want only
specific keys.

=========================================================
5. RECORD UTILITY TYPE
=========================================================

Record<Key, Value>

Creates an object type
with fixed keys.
=========================================================
*/

type Metrics =
Record<
  "Likes" |
  "Views" |
  "Shares",
  number
>;

const record: Metrics = {

  Likes: 23,

  Shares: 44,

  Views: 23

};

/*
Equivalent:

{
  Likes:number;
  Views:number;
  Shares:number;
}
*/

/*
=========================================================
6. RECORD VS INDEX SIGNATURE
=========================================================

INDEX SIGNATURE
=========================================================
*/

type NumberDictionary = {

  [key: string]: number;

};

/*
Keys:

Unknown

Unlimited

---------------------------------------------------------

Valid:

Likes

Views

Anything

RandomKey

=========================================================
RECORD
=========================================================
*/

type MetricsRecord =
Record<
  "Likes" |
  "Views" |
  "Shares",
  number
>;

/*
Keys:

Known

Fixed

---------------------------------------------------------

Allowed:

Likes

Views

Shares
*/

/*
Not Allowed:

Comments

Followers

RandomKey
*/

/*
=========================================================
WHY RECORD IS SAFER
=========================================================
*/

/*
Valid:
*/

const analytics:
MetricsRecord = {

  Likes: 10,

  Views: 100,

  Shares: 5

};

/*
Invalid:

const analytics:
MetricsRecord = {

  Likes:10,

  Views:100

}

Error:

Missing Shares
*/

/*
=========================================================
7. JAVASCRIPT MAP
=========================================================

Map is a built-in
JavaScript data structure.

Syntax:
*/

const priceMap =
new Map<
  string,
  number
>();

priceMap.set(
  "Likes",
  1
);

priceMap.set(
  "Views",
  5
);

console.log(
  priceMap.get("Likes")
);

/*
Output:

1
*/

/*
=========================================================
8. MAP VS OBJECT
=========================================================

OBJECT
=========================================================
*/

const obj = {

  Likes: 1

};

/*
Access:

obj["Likes"]

---------------------------------------------------------

MAP
=========================================================
*/

const map =
new Map<
  string,
  number
>();

map.set(
  "Likes",
  1
);

/*
Access:

map.get("Likes")
*/

/*
Benefits of Map:

✔ Better performance
  for frequent insertions

✔ Preserves insertion order

✔ Rich API

✔ Can use non-string keys

=========================================================
9. LOOSE RECORDS
=========================================================
*/

/*
Sometimes values
may be missing.
*/

type LooseMap =
Record<
  string,
  number | undefined
>;

const lm:
LooseMap = {};

lm["x"] =
undefined;

lm["y"] =
100;

console.log(lm);

/*
Meaning:

Any string key.

Value can be:

number

OR

undefined
*/

/*
Useful when values
are loaded later.
*/

/*
=========================================================
10. REAL WORLD EXAMPLES
=========================================================
*/

/*
Analytics
*/

type Analytics =
Record<
  "Views" |
  "Likes" |
  "Shares",
  number
>;

/*
Dynamic User Scores
*/

type UserScores = {

  [userId: string]:
  number;

};

/*
Cache
*/

type Cache =
Record<
  string,
  string | undefined
>;

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

INDEX SIGNATURE

Allows dynamic property names.

Example:

{
  [key:string]:number
}

---------------------------------------------------------

RECORD

Creates an object type
with predefined keys.

Example:

Record<
  "Likes" |
  "Views",
  number
>

---------------------------------------------------------

MAP

A built-in JavaScript
key-value collection.

Example:

new Map<string, number>()

---------------------------------------------------------

INDEX SIGNATURE
VS
RECORD

Index Signature

Keys unknown.

---------------------------------------------------------

Record

Keys known.

---------------------------------------------------------

RECORD
VS
MAP

Record

Plain Object

Compile-time type safety

---------------------------------------------------------

Map

Runtime data structure

Rich API

Insertion order preserved

Can use any value as key

=========================================================
MOST IMPORTANT INTERVIEW QUESTION
=========================================================

When should I use each?

Use Index Signature:

✔ Unknown dynamic keys

---------------------------------------------------------

Use Record:

✔ Fixed known keys

✔ Better type safety

---------------------------------------------------------

Use Map:

✔ Runtime key-value storage

✔ Frequent inserts/deletes

✔ Non-string keys

=========================================================
END OF NOTES
=========================================================
*/

export {};