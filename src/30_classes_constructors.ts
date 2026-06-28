/*
=========================================================
CLASSES & CONSTRUCTORS IN TYPESCRIPT
=========================================================

INDEX

1. What is a Class?
2. Why Classes?
3. Blueprint vs Object
4. Creating Objects
5. The new Keyword
6. Fields (Properties)
7. Constructors
8. Property Initialization
9. Optional Properties
10. Parameter Properties
11. Readonly Fields
12. Definite Assignment Assertion (!)
13. Real World Backend Examples
14. Common Mistakes
15. Best Practices
16. Interview Definitions
17. Summary

=========================================================
1. WHAT IS A CLASS?
=========================================================

Definition:

A Class is a blueprint for creating objects.

It defines:
✔ Properties (Data)
✔ Methods (Behavior)

Objects created from the class contain those
properties and methods.

=========================================================
2. WHY CLASSES?
=========================================================

Without classes we'd repeatedly create similar objects.

One Class
    ↓
Many Objects

=========================================================
3. BLUEPRINT VS OBJECT
=========================================================

Blueprint
    ↓
House

Class
    ↓
Object

=========================================================
4. BASIC EXAMPLE
=========================================================
*/

class User {

    id: string;
    name: string;
    email?: string;

    // Initialized automatically for every object
    createdAt: Date = new Date();

    constructor(
        id: string,
        name: string,
        email?: string
    ) {
        this.id = id;
        this.name = name;

        if (email) {
            this.email = email;
        }
    }
}

const user1 = new User("1", "Diwakar");
const user2 = new User("2", "Bhaskar", "bhaskar@gmail.com");

console.log(user1);
console.log(user2);

/*
=========================================================
5. THE new KEYWORD
=========================================================

new User(...)

↓

1. Memory allocated

↓

2. Constructor runs

↓

3. Properties initialized

↓

4. Object returned

=========================================================
6. FIELDS (PROPERTIES)
=========================================================

Fields store data.

id
name
email
createdAt

=========================================================
7. CONSTRUCTOR
=========================================================

constructor(){}

Runs automatically whenever an object
is created.

Purpose:

✔ Initialize object state
✔ Assign values
✔ Prepare object

=========================================================
8. PROPERTY INITIALIZATION
=========================================================

Instead of assigning inside the constructor:

this.createdAt = new Date();

we can initialize directly:

createdAt: Date = new Date();

Every object receives its own value.

=========================================================
9. OPTIONAL PROPERTIES
=========================================================

email?: string

Means the property may exist
or may be undefined.

=========================================================
10. PARAMETER PROPERTIES
=========================================================

Instead of:

class ManualUser {

    id:string;
    name:string;

    constructor(id:string,name:string){
        this.id=id;
        this.name=name;
    }
}

TypeScript allows:

*/

class ShortUser {

    constructor(
        public id: string,
        public name: string,
        public email?: string
    ) {}

}

const shortUser = new ShortUser("10", "Alice");
console.log(shortUser);

/*
TypeScript automatically creates and
assigns the properties.

Commonly used in:
- NestJS
- Angular
- TypeORM

=========================================================
11. READONLY FIELDS
=========================================================
*/

class ReadonlyUser {

    readonly id: string;

    constructor(id: string) {
        this.id = id;
    }
}

const readonlyUser = new ReadonlyUser("100");

// readonlyUser.id = "200"; // Error

/*
readonly allows assignment only during initialization
(constructor or declaration).

=========================================================
12. DEFINITE ASSIGNMENT ASSERTION (!)
=========================================================

Sometimes initialization happens later.
*/

class DeferredUser {

    name!: string;

    initialize(name: string) {
        this.name = name;
    }
}

const deferred = new DeferredUser();
deferred.initialize("Diwakar");

console.log(deferred.name);

/*
The ! tells TypeScript:

"I guarantee this property
will be initialized."

Use carefully.

=========================================================
13. REAL WORLD BACKEND EXAMPLES
=========================================================

User      -> MongoDB Entity
Product   -> Product Entity
Order     -> Order Entity
Invoice   -> Invoice Entity

Classes commonly represent:

- DTOs
- Entities
- Models
- Services

=========================================================
14. COMMON MISTAKES
=========================================================

❌ Forgetting this

Wrong:
name = name;

Correct:
this.name = name;

-----------------------------

❌ Forgetting new

Wrong:
User(...)

Correct:
new User(...)

-----------------------------

❌ Not initializing required fields

-----------------------------

❌ Huge constructors with many parameters

=========================================================
15. BEST PRACTICES
=========================================================

✔ Keep constructors small.

✔ Use parameter properties when appropriate.

✔ Use readonly for immutable fields.

✔ Initialize required fields.

✔ One class should represent one concept.

=========================================================
16. INTERVIEW DEFINITIONS
=========================================================

Class
→ Blueprint for creating objects.

Object
→ Actual instance created from a class.

Constructor
→ Special method that initializes an object.

Parameter Property
→ Shorthand that declares and initializes
  class properties directly from constructor
  parameters.

Readonly Property
→ Can be assigned only during initialization.

Definite Assignment Assertion (!)
→ Tells TypeScript the property will be
  initialized later.

=========================================================
17. SUMMARY
=========================================================

Class
    ↓
Blueprint

Object
    ↓
Instance

new
    ↓
Creates object

Constructor
    ↓
Initializes object

Parameter Properties
    ↓
Reduce boilerplate

readonly
    ↓
Immutable after initialization

!
    ↓
Initialized later

=========================================================
END OF NOTES
=========================================================
*/

export {};
