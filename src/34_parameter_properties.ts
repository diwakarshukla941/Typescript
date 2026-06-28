/*
=========================================================
PARAMETER PROPERTIES
=========================================================

INDEX

1. What are Parameter Properties?
2. Why Do We Need Them?
3. Traditional Way
4. Parameter Property Syntax
5. How TypeScript Converts It
6. Public Parameter Properties
7. Private Parameter Properties
8. Protected Parameter Properties
9. Readonly Parameter Properties
10. Multiple Parameter Properties
11. Mixed Constructor Parameters
12. Optional Parameter Properties
13. Default Values
14. Parameter Properties with Objects
15. Parameter Properties with Interfaces
16. Real World Backend Example
17. Dependency Injection Example
18. Common Mistakes
19. Best Practices
20. Interview Definitions

=========================================================
1. WHAT ARE PARAMETER PROPERTIES?
=========================================================

Parameter Properties are a shorthand feature in
TypeScript that lets us declare and initialize
class properties directly from constructor
parameters.

Instead of writing:

class User {

    name:string;

    constructor(name:string){
        this.name = name;
    }

}

We can simply write:

class User{

    constructor(
        public name:string
    ){}

}

TypeScript automatically:

✔ Creates the property

✔ Assigns the value

✔ Keeps the access modifier

✔ Reduces boilerplate code

=========================================================
2. WHY DO WE NEED THEM?
=========================================================

Without Parameter Properties

Every property requires:

Step 1

Declare Property

class User{

    name:string;

}

-------------------------------

Step 2

Accept Constructor Parameter

constructor(name:string)

-------------------------------

Step 3

Assign Property

this.name = name;

-------------------------------

Lots of repeated code.

Imagine a class with

20 properties.

You would have

20 declarations

+

20 constructor parameters

+

20 assignments

That's 60 lines of repetitive code.

Parameter Properties remove all this repetition.

=========================================================
3. TRADITIONAL WAY
=========================================================
*/

class EmployeeOld {

    id:number;

    name:string;

    salary:number;

    constructor(
        id:number,
        name:string,
        salary:number
    ){

        this.id=id;
        this.name=name;
        this.salary=salary;

    }

}

const oldEmployee = new EmployeeOld(
    1,
    "Diwakar",
    90000
);

console.log(oldEmployee);

/*
Problems

❌ Duplicate variable names

❌ Too much boilerplate

❌ Difficult to maintain

=========================================================
4. PARAMETER PROPERTY SYNTAX
=========================================================

General Syntax

constructor(

    public property:type

){}

-------------------------------

private

constructor(

    private property:type

){}

-------------------------------

protected

constructor(

    protected property:type

){}

-------------------------------

readonly

constructor(

    readonly property:type

){}

-------------------------------

public readonly

constructor(

    public readonly property:type

){}

-------------------------------

private readonly

constructor(

    private readonly property:type

){}

=========================================================
5. HOW TYPESCRIPT CONVERTS IT
=========================================================

When you write

constructor(
    public name:string
){}

TypeScript internally generates something similar to

class User{

    name:string;

    constructor(name:string){

        this.name=name;

    }

}

Remember

Parameter Properties

are ONLY syntax sugar.

JavaScript never sees them.

=========================================================
6. PUBLIC PARAMETER PROPERTIES
=========================================================
*/

class User{

    constructor(

        public id:number,

        public name:string,

        public email:string

    ){}

}

const user=new User(
    1,
    "Diwakar",
    "abc@gmail.com"
);

console.log(user.id);

console.log(user.name);

console.log(user.email);

/*
Visualization

constructor(

public id:number,

public name:string

)

↓

Creates

id:number;

name:string;

↓

Automatically

this.id=id;

this.name=name;

=========================================================
Public Members
=========================================================

Accessible

✔ Inside Class

✔ Outside Class

✔ Child Classes

=========================================================
7. PRIVATE PARAMETER PROPERTIES
=========================================================
*/

class BankAccount{

    constructor(

        private balance:number

    ){}

    getBalance(){

        return this.balance;

    }

    deposit(amount:number){

        this.balance += amount;

    }

}

const account = new BankAccount(5000);

account.deposit(1000);

console.log(account.getBalance());

/*

Error

account.balance

❌ Property is private

=========================================================
Private Members
=========================================================

Accessible

✔ Inside Class

❌ Outside Class

❌ Child Classes

=========================================================
8. PROTECTED PARAMETER PROPERTIES
=========================================================
*/

class Animal{

    constructor(

        protected name:string

    ){}

}

class Dog extends Animal{

    printName(){

        console.log(this.name);

    }

}

const dog = new Dog("Tommy");

dog.printName();

/*

dog.name

❌ Error

Protected means

Accessible

✔ Inside Class

✔ Child Class

❌ Outside

=========================================================
9. READONLY PARAMETER PROPERTIES
=========================================================
*/

class Student{

    constructor(

        readonly rollNo:number,

        public name:string

    ){}

}

const student = new Student(
    101,
    "Diwakar"
);

console.log(student.rollNo);

/*

student.rollNo = 200;

❌ Error

Reason

readonly properties

can only be assigned

inside constructor.

=========================================================
READONLY + PUBLIC
=========================================================
*/

class Product{

    constructor(

        public readonly id:number,

        public name:string,

        public price:number

    ){}

}

const laptop = new Product(
    1,
    "MacBook",
    150000
);

laptop.price=160000;

// laptop.id=5

/*
❌ Error

=========================================================
READONLY + PRIVATE
=========================================================
*/

class Secret{

    constructor(

        private readonly apiKey:string

    ){}

    show(){

        console.log(this.apiKey);

    }

}

const secret = new Secret("ABC123");

secret.show();

/*
=========================================================
10. MULTIPLE PARAMETER PROPERTIES
=========================================================
*/

class Car{

    constructor(

        public brand:string,

        public model:string,

        public year:number,

        public color:string,

        public price:number

    ){}

}

const car = new Car(

    "Toyota",

    "Fortuner",

    2025,

    "Black",

    4800000

);

console.log(car);

/*
Benefits

✔ Less Code

✔ Cleaner Constructor

✔ Easy Maintenance

✔ Preferred in TS Projects

=========================================================
11. MIXED CONSTRUCTOR PARAMETERS
=========================================================

Not every constructor parameter
must become a property.
*/

class Order{

    constructor(

        public id:number,

        public amount:number,

        discount:number

    ){

        console.log(
            "Discount",
            discount
        );

    }

}

const order = new Order(
    1,
    5000,
    1000
);

console.log(order.id);

/*

discount

is NOT

a parameter property.

Reason

No access modifier.

Only parameters having

public

private

protected

readonly

become properties.

/*
=========================================================
12. OPTIONAL PARAMETER PROPERTIES
=========================================================

Just like normal constructor parameters,
Parameter Properties can also be optional.

Syntax

constructor(

    public name:string,

    public email?:string

){}

The ? means

"This value may or may not exist."

=========================================================
EXAMPLE
=========================================================
*/

class Customer{

    constructor(

        public id:number,

        public name:string,

        public email?:string

    ){}

}

const customer1 = new Customer(

    1,

    "Diwakar"

);

const customer2 = new Customer(

    2,

    "Bhaskar",

    "bhaskar@gmail.com"

);

console.log(customer1);

console.log(customer2);

/*
Type of email

↓

string | undefined

Because the property is optional.

=========================================================
13. DEFAULT VALUES
=========================================================

Parameter Properties can also have
default values.

Syntax

constructor(

    public city:string = "Mumbai"

){}

If no value is passed,

TypeScript automatically
uses the default value.

=========================================================
EXAMPLE
=========================================================
*/

class Employee{

    constructor(

        public id:number,

        public name:string,

        public city:string="Mumbai"

    ){}

}

const employee1 = new Employee(

    1,

    "Diwakar"

);

const employee2 = new Employee(

    2,

    "Rahul",

    "Delhi"

);

console.log(employee1);

console.log(employee2);

/*
Output

employee1

↓

city = Mumbai

----------------------------

employee2

↓

city = Delhi

=========================================================
14. PARAMETER PROPERTIES WITH OBJECT TYPES
=========================================================

Parameter Properties are not limited
to primitive types.

They can also store objects.

=========================================================
EXAMPLE
=========================================================
*/

class Address{

    constructor(

        public city:string,

        public state:string

    ){}

}

class Person{

    constructor(

        public name:string,

        public address:{

            city:string;

            state:string;

            pincode:number;

        }

    ){}

}

const person = new Person(

    "Diwakar",

    {

        city:"Mumbai",

        state:"Maharashtra",

        pincode:400001

    }

);

console.log(person.address.city);

console.log(person.address.state);

/*
=========================================================
15. PARAMETER PROPERTIES WITH INTERFACES
=========================================================
*/

interface Company{

    id:number;

    name:string;

    location:string;

}

class Developer{

    constructor(

        public name:string,

        public company:Company

    ){}

}

const developer = new Developer(

    "Diwakar",

    {

        id:1,

        name:"OpenAI",

        location:"Mumbai"

    }

);

console.log(developer.company.name);

/*
Why use Interfaces?

✔ Better Reusability

✔ Cleaner Code

✔ Type Safety

=========================================================
16. REAL WORLD BACKEND EXAMPLE
=========================================================

Imagine an Express Backend.

Instead of writing

class UserService{

    private repository;

    private logger;

    private cache;

    constructor(

        repository,

        logger,

        cache

    ){

        this.repository = repository;

        this.logger = logger;

        this.cache = cache;

    }

}

We can simply write
*/

class UserService{

    constructor(

        private repository:string,

        private logger:string,

        private cache:string

    ){}

    initialize(){

        console.log(this.repository);

        console.log(this.logger);

        console.log(this.cache);

    }

}

const service = new UserService(

    "Mongo Repository",

    "Winston Logger",

    "Redis Cache"

);

service.initialize();

/*
This pattern is heavily used in

✔ NestJS

✔ Angular

✔ Backend Services

✔ Enterprise Applications

because constructors often receive
many dependencies.

=========================================================
17. DEPENDENCY INJECTION EXAMPLE
=========================================================

Dependency Injection means

Instead of creating objects inside
a class,

we receive them from outside.

This makes code

✔ Reusable

✔ Testable

✔ Loosely Coupled

=========================================================
EXAMPLE
=========================================================
*/

class Database{

    connect(){

        console.log("Database Connected");

    }

}

class Logger{

    log(message:string){

        console.log(message);

    }

}

class UserRepository{

    constructor(

        private db:Database,

        private logger:Logger

    ){}

    getUsers(){

        this.logger.log("Fetching Users...");

        this.db.connect();

        console.log("Users Returned");

    }

}

const repository = new UserRepository(

    new Database(),

    new Logger()

);

repository.getUsers();

/*
Notice

db

and

logger

became properties automatically.

No manual assignments.

=========================================================
18. COMMON MISTAKES
=========================================================

Mistake 1

constructor(

    name:string

){}

Many beginners think

name

becomes a property.

Wrong.

Without

public

private

protected

readonly

it is only a constructor parameter.

---------------------------------------------------------

Mistake 2

constructor(

    public name:string

){

    this.name = name;

}

Wrong.

TypeScript already performs

this.name = name

automatically.

This assignment is redundant.

---------------------------------------------------------

Mistake 3

class Employee{

    constructor(

        private salary:number

    ){}

}

const emp = new Employee(1000);

console.log(emp.salary);

❌ Error

Reason

salary

is private.

---------------------------------------------------------

Mistake 4

class Student{

    constructor(

        readonly rollNo:number

    ){}

}

student.rollNo = 500;

❌ Error

Reason

readonly properties cannot
be reassigned.

---------------------------------------------------------

Mistake 5

Using Parameter Properties
outside constructors.

Example

class User{

    public name:string;

}

❌ Invalid

Parameter Properties exist ONLY
inside constructor parameters.

=========================================================
19. BEST PRACTICES
=========================================================

✔ Use Parameter Properties when
the constructor only assigns values.

✔ Use private for implementation
details.

✔ Use protected only when child
classes need access.

✔ Use readonly for IDs,
configuration values,
tokens,
creation dates,
and immutable properties.

✔ Prefer interfaces for complex
object types.

✔ Avoid unnecessary constructor
assignments.

✔ Keep constructors small.

✔ Use Dependency Injection
instead of creating dependencies
inside classes.

=========================================================
20. INTERVIEW DEFINITIONS
=========================================================

What are Parameter Properties?

Answer

Parameter Properties are a
TypeScript feature that allows
constructor parameters to become
class properties automatically
using access modifiers.

---------------------------------------------------------

Which modifiers are supported?

✔ public

✔ private

✔ protected

✔ readonly

Also valid

✔ public readonly

✔ private readonly

✔ protected readonly

---------------------------------------------------------

Are Parameter Properties available
in JavaScript?

No.

They are a TypeScript-only feature.

The compiler converts them into
normal property declarations and
assignments.

---------------------------------------------------------

Why do companies prefer
Parameter Properties?

Because they

✔ Reduce boilerplate

✔ Improve readability

✔ Keep constructors clean

✔ Work well with Dependency Injection

✔ Simplify enterprise codebases

---------------------------------------------------------

What happens internally?

TypeScript converts

constructor(

    public name:string

){}

into

name:string;

constructor(name:string){

    this.name = name;

}

=========================================================
ANALOGY
=========================================================

Imagine a hotel.

Without Parameter Properties

Step 1

Build a room.

↓

Step 2

Give it a room number.

↓

Step 3

Move the guest into the room.

Three separate steps.

---------------------------------------------------------

With Parameter Properties

The guest checks in,

and the hotel automatically

✔ Creates the room

✔ Assigns the room number

✔ Places the guest inside

Everything happens in one step.

Parameter Properties work exactly
the same way.

You declare the constructor parameter
once,

and TypeScript automatically creates
and initializes the class property.

=========================================================
END OF NOTES
=========================================================
*/

export {};