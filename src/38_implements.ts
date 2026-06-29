/*
=========================================================
IMPLEMENTS
=========================================================

INDEX

1. What is implements?
2. Why Do We Need implements?
3. implements Syntax
4. Implementing an Interface
5. Implementing Properties
6. Implementing Methods
7. Multiple Interfaces
8. Interface Inheritance
9. implements with Classes
10. implements vs extends
11. implements vs Abstract Classes
12. Real World Backend Examples
13. Common Mistakes
14. Best Practices
15. Interview Definitions

=========================================================
1. WHAT IS IMPLEMENTS?
=========================================================

In TypeScript,

implements

is a keyword used by a class
to promise that it will follow
the structure of an interface.

Unlike

extends,

it DOES NOT inherit any code.

It only checks whether the class
contains all the required
properties and methods.

=========================================================
Definition
=========================================================

implements tells TypeScript

"This class agrees to follow
the contract defined by
an interface."

=========================================================
Think of it like a Contract
=========================================================

Interface

↓

Defines Rules

↓

Class

↓

Must Follow Rules

=========================================================
Visualization
=========================================================

        Vehicle
      (Interface)

        start()

        stop()

           ▲

           │

     implements

           │

        Car Class

           │

    start()

    stop()

=========================================================
2. WHY DO WE NEED IMPLEMENTS?
=========================================================

Suppose a company has
multiple payment providers.

We have

Razorpay

Stripe

PayPal

PhonePe

Every payment provider must have

✔ pay()

✔ refund()

Instead of checking manually,

we create one interface.

Every payment provider
implements that interface.

Now every class is forced
to follow the same structure.

=========================================================
Benefits
=========================================================

✔ Consistent Code

✔ Type Safety

✔ Easy Maintenance

✔ Better Scalability

✔ Common API Design

=========================================================
3. IMPLEMENTS SYNTAX
=========================================================

Syntax

interface InterfaceName{

}

----------------------------------------

class ClassName
implements InterfaceName{

}

=========================================================
Example
=========================================================
*/

interface Animal{

    eat():void;

}

class Dog implements Animal{

    eat(){

        console.log(

            "Dog is eating."

        );

    }

}

const dog = new Dog();

dog.eat();

/*
Notice

Dog

did not inherit anything.

It only promised

to implement

eat()

=========================================================
4. IMPLEMENTING AN INTERFACE
=========================================================

Interfaces can contain

✔ Properties

✔ Methods

✔ Optional Properties

✔ Readonly Properties

The implementing class
must define all required
members.

=========================================================
Example
=========================================================
*/

interface Person{

    name:string;

    age:number;

}

class Student
implements Person{

    constructor(

        public name:string,

        public age:number

    ){}

}

const student =
new Student(

    "Diwakar",

    24

);

console.log(student.name);

console.log(student.age);

/*
Execution

Person Interface

↓

name

age

↓

Student

↓

name

age

=========================================================
5. IMPLEMENTING PROPERTIES
=========================================================

Interfaces commonly define
properties.

Classes implementing them
must provide those properties.

=========================================================
Example
=========================================================
*/

interface Product{

    id:number;

    title:string;

    price:number;

}

class Laptop
implements Product{

    constructor(

        public id:number,

        public title:string,

        public price:number

    ){}

}

const laptop = new Laptop(

    1,

    "MacBook",

    150000

);

console.log(laptop);

/*
Notice

Every required property
is implemented.

=========================================================
Wrong Example
=========================================================

interface User{

    id:number;

    name:string;

}

class Customer
implements User{

    id = 1;

}

❌ Error

Reason

name

is missing.

=========================================================
6. IMPLEMENTING METHODS
=========================================================

Interfaces can declare methods.

Classes must provide
their implementation.

=========================================================
Example
=========================================================
*/

interface Payment{

    pay(amount:number):void;

}

class Razorpay
implements Payment{

    pay(amount:number){

        console.log(

            "Paid",

            amount,

            "using Razorpay"

        );

    }

}

const payment =
new Razorpay();

payment.pay(1000);

/*
Notice

The interface only declares

pay()

The class defines

HOW

the payment happens.

=========================================================
7. MULTIPLE INTERFACES
=========================================================

A class can implement

multiple interfaces.

Unlike

extends,

there is no limitation.

=========================================================
Syntax
=========================================================

class User
implements A,B,C{

}

=========================================================
Example
=========================================================
*/

interface Flyable{

    fly():void;

}

interface Swimmable{

    swim():void;

}

class Duck
implements
Flyable,
Swimmable{

    fly(){

        console.log(

            "Duck Flying"

        );

    }

    swim(){

        console.log(

            "Duck Swimming"

        );

    }

}

const duck = new Duck();

duck.fly();

duck.swim();

/*
Visualization

Flyable

↓

fly()

------------------------

Swimmable

↓

swim()

------------------------

Duck

↓

fly()

swim()

=========================================================
8. INTERFACE INHERITANCE
=========================================================

Interfaces can inherit
from other interfaces.

Keyword

extends

=========================================================
Example
=========================================================
*/

interface Animal{

    eat():void;

}

interface Bird
extends Animal{

    fly():void;

}

class Sparrow
implements Bird{

    eat(){

        console.log("Eating");

    }

    fly(){

        console.log("Flying");

    }

}

const sparrow =
new Sparrow();

sparrow.eat();

sparrow.fly();

/*
Notice

Bird

inherits

Animal

So

Sparrow

must implement

✔ eat()

✔ fly()


*/

/*
=========================================================
9. IMPLEMENTS WITH CLASSES
=========================================================

Many beginners think

implements

can only be used with interfaces.

Actually,

a class can also implement
another class.

In this case,

only the public structure
of that class is checked.

No implementation is inherited.

=========================================================
Example
=========================================================
*/

class Person{

    name:string = "";

    age:number = 0;

}

class StudentEx
implements Person{

    name = "Diwakar";

    age = 24;

}

const studentex = new StudentEx();

console.log(studentex.name);

console.log(studentex.age);

/*
Notice

Student

does NOT inherit

Person.

It only matches its structure.

=========================================================
Difference
=========================================================

implements

↓

Checks Structure

---------------------------------------------------------

extends

↓

Inherits Code

=========================================================
10. IMPLEMENTS vs EXTENDS
=========================================================

This is one of the most
important interview questions.

=========================================================
extends
=========================================================

✔ Inherits properties

✔ Inherits methods

✔ Inherits implementation

✔ Parent constructor available

✔ Can call super()

=========================================================
Example
=========================================================
*/

class AnimalBase{

    eat(){

        console.log("Eating");

    }

}

class DogEx extends AnimalBase{

}

const dogEx = new DogEx();

dogEx.eat();

/*
DogEx inherited

eat()

=========================================================
implements
=========================================================

✔ No implementation inherited

✔ Only checks structure

✔ No super()

✔ Must define everything manually

=========================================================
Example
=========================================================
*/

interface AnimalContract{

    eat():void;

}

class Cat
implements AnimalContract{

    eat(){

        console.log("Cat Eating");

    }

}

const cat = new Cat();

cat.eat();

/*
=========================================================
Visualization
=========================================================

extends

Parent

↓

Properties

Methods

Implementation

↓

Child

=========================================================

implements

Interface

↓

Rules

↓

Class

↓

Own Implementation

=========================================================
Comparison Table
=========================================================

extends

↓

Code Reuse

---------------------------------------------------------

implements

↓

Contract Enforcement

=========================================================
11. IMPLEMENTS vs ABSTRACT CLASS
=========================================================

Another common interview
question.

=========================================================
Interface
=========================================================

✔ No implementation

✔ Multiple interfaces allowed

✔ Used as contracts

=========================================================
Abstract Class
=========================================================

✔ Can contain implementation

✔ Constructors allowed

✔ Properties allowed

✔ Only one parent class

=========================================================
Example
=========================================================
*/

interface Logger{

    log(message:string):void;

}

abstract class BaseLogger{

    logInfo(){

        console.log(

            "Information Logged"

        );

    }

    abstract logError():void;

}

class ConsoleLogger
extends BaseLogger
implements Logger{

    log(message:string){

        console.log(message);

    }

    override logError(){

        console.log(

            "Error Logged"

        );

    }

}

const logger =
new ConsoleLogger();

logger.log("Server Started");

logger.logInfo();

logger.logError();

/*
Visualization

Interface

↓

Only Rules

---------------------------------------------------------

Abstract Class

↓

Rules

+

Implementation

=========================================================
When should we use Interface?
=========================================================

When classes only need
to follow a structure.

Examples

Payment Gateway

Repository

Logger

Notification Service

=========================================================
When should we use
Abstract Class?
=========================================================

When child classes share
common implementation.

=========================================================
12. REAL WORLD BACKEND EXAMPLES
=========================================================

Example 1

Payment Gateway

=========================================================
*/

interface PaymentGateway{

    pay(amount:number):void;

}

class Stripe
implements PaymentGateway{

    pay(amount:number){

        console.log(

            "Stripe Payment:",

            amount

        );

    }

}

class Paypal
implements PaymentGateway{

    pay(amount:number){

        console.log(

            "Paypal Payment:",

            amount

        );

    }

}

const stripe =
new Stripe();

stripe.pay(1000);

const paypal =
new Paypal();

paypal.pay(2000);

/*
Because every payment
provider follows the same
contract,

the application can switch
providers easily.

=========================================================
Example 2

Authentication
=========================================================
*/

interface AuthService{

    login():void;

    logout():void;

}

class JwtAuth
implements AuthService{

    login(){

        console.log(

            "JWT Login"

        );

    }

    logout(){

        console.log(

            "JWT Logout"

        );

    }

}

const auth = new JwtAuth();

auth.login();

auth.logout();

/*
=========================================================
Example 3

Logger
=========================================================
*/

interface LoggerService{

    log(message:string):void;

}

class FileLogger
implements LoggerService{

    log(message:string){

        console.log(

            "File:",

            message

        );

    }

}

const fileLogger =
new FileLogger();

fileLogger.log("Server Running");

/*
=========================================================
13. COMMON MISTAKES
=========================================================

Mistake 1

Thinking

implements

inherits code.

Wrong

interface Animal{

    eat():void;

}

class Dog
implements Animal{

}

Dog does NOT inherit

eat().

It must implement it.

=========================================================
Correct
=========================================================
*/

interface AnimalContract{

    eat():void;

}

class DogExample
implements AnimalContract{

    eat(){

        console.log(

            "Dog is eating."

        );

    }

}

/*
=========================================================
Mistake 2

Forgetting to implement
required members.
=========================================================

Example

interface Vehicle{

    start():void;

}

class Car
implements Vehicle{

}

❌ Error

Reason

start()

is missing.

---------------------------------------------------------
Correct
---------------------------------------------------------
*/
interface VehicleContract {

    start(): void;

}


class CarExample
implements VehicleContract{

    start(){

        console.log(

            "Car Started"

        );

    }

}

/*
=========================================================
Mistake 3

Wrong Property Type
=========================================================

interface User{

    age:number;

}

class Customer
implements User{

    age = "24";

}

❌ Error

Reason

Expected

number

Received

string

---------------------------------------------------------
Correct
---------------------------------------------------------
*/

interface User {

    age:number;

}

class CustomerExample implements User {

    age = 24;

}

/*
=========================================================
Mistake 4

Wrong Method Signature
=========================================================

interface Payment{

    pay(amount:number):void;

}

class RazorpayExample
implements Payment{

    pay(){

    }

}

❌ Error

Reason

Method signatures
must match.

---------------------------------------------------------
Correct
---------------------------------------------------------
*/

class RazorpayCorrect
implements Payment{

    pay(amount:number){

        console.log(amount);

    }

}

/*
=========================================================
Mistake 5

Using extends instead of
implements
=========================================================

Wrong

class Dog extends AnimalContract{

}

❌ Error

Reason

Interfaces are implemented,

not inherited.

---------------------------------------------------------
Correct

class Dog
implements AnimalContract{

}

=========================================================
Mistake 6

Trying to instantiate
an interface.
=========================================================

interface Person{

    name:string;

}

const person =
new Person();

❌ Error

Reason

Interfaces disappear after
TypeScript compilation.

They do not exist at runtime.

=========================================================
Mistake 7

Thinking interfaces can store
implementation.
=========================================================

Wrong

interface Logger{

    log(){

        console.log("Hello");

    }

}

❌ Error

Interfaces only describe
structure.

=========================================================
14. BEST PRACTICES
=========================================================

✔ Use interfaces for contracts.

---------------------------------------------------------

✔ Keep interfaces focused on
one responsibility.

---------------------------------------------------------

✔ Prefer multiple small interfaces
instead of one huge interface.

---------------------------------------------------------

✔ Name interfaces clearly.

Examples

UserRepository

Logger

PaymentGateway

NotificationService

---------------------------------------------------------

✔ Use implements whenever
multiple classes should follow
the same API.

---------------------------------------------------------

✔ Combine

extends

and

implements

when needed.

Example

class UserRepository

extends BaseRepository

implements Repository

{}

---------------------------------------------------------

✔ Avoid putting business logic
inside interfaces.

=========================================================
15. INTERVIEW DEFINITIONS
=========================================================

What is implements?

Answer

implements is a keyword that
forces a class to follow the
structure of an interface.

---------------------------------------------------------

Does implements inherit code?

Answer

No.

It only checks the structure.

---------------------------------------------------------

Can a class implement multiple
interfaces?

Answer

Yes.

Example

class Duck

implements

Flyable,

Swimmable,

Runnable

{}

---------------------------------------------------------

Can a class both extend a class
and implement interfaces?

Answer

Yes.

Example

class UserRepository

extends BaseRepository

implements Repository, Logger

{}

---------------------------------------------------------

Difference between

implements

and

extends

=========================================================

implements

↓

Contract

↓

No Code Reuse

↓

Multiple Allowed

↓

Used With Interfaces

=========================================================

extends

↓

Inheritance

↓

Code Reuse

↓

Single Parent

↓

Used With Classes

=========================================================
REAL WORLD SCENARIOS
=========================================================

Repository Pattern

↓

MongoRepository

SqlRepository

RedisRepository

All implement

Repository Interface

---------------------------------------------------------

Authentication

↓

JwtAuth

OAuth

FirebaseAuth

All implement

AuthService

---------------------------------------------------------

Payment Gateway

↓

Stripe

Razorpay

PayPal

PhonePe

All implement

PaymentGateway

---------------------------------------------------------

Notification Service

↓

Email

SMS

Push Notification

All implement

NotificationService

=========================================================
ANALOGY
=========================================================

Imagine a driving license test.

The government says

To drive,

everyone must know

✔ Start Vehicle

✔ Stop Vehicle

✔ Follow Rules

This is the

Interface.

---------------------------------------------------------

Person A

↓

Car Driver

Implements the rules
using a car.

---------------------------------------------------------

Person B

↓

Truck Driver

Implements the same rules
using a truck.

---------------------------------------------------------

Person C

↓

Bus Driver

Implements the same rules
using a bus.

Each driver follows
the same contract,

but each has a different
implementation.

That is exactly how

implements

works in TypeScript.

=========================================================
SUMMARY
=========================================================

✔ implements creates a contract.

✔ No implementation is inherited.

✔ Classes must define every
required member.

✔ A class can implement
multiple interfaces.

✔ Interfaces can extend
other interfaces.

✔ Classes can both

extend

a class

and

implement

interfaces.

✔ Use interfaces for contracts.

✔ Use abstract classes for
shared implementation.

=========================================================
END OF NOTES
=========================================================
*/

export {};