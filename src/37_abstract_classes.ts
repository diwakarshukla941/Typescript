/*
=========================================================
ABSTRACT CLASSES
=========================================================

INDEX

1. What is an Abstract Class?
2. Why Do We Need Abstract Classes?
3. Declaring an Abstract Class
4. Creating Objects
5. Abstract Methods
6. Concrete Methods
7. Extending an Abstract Class
8. Implementing Abstract Methods
9. Constructor in Abstract Classes
10. Access Modifiers
11. Abstract Properties
12. Abstract Class vs Normal Class
13. Real World Backend Examples
14. Common Mistakes
15. Best Practices
16. Interview Definitions

=========================================================
1. WHAT IS AN ABSTRACT CLASS?
=========================================================

An Abstract Class is a special class
that cannot be instantiated.

Meaning

We cannot create objects directly
from it.

Instead,

other classes inherit from it.

---------------------------------------------------------

Think of it as a blueprint.

It provides

✔ Common Properties

✔ Common Methods

✔ Rules that child classes
must follow.

=========================================================
Definition
=========================================================

An Abstract Class is a class
declared using

abstract

keyword.

It may contain

✔ Normal Methods

✔ Abstract Methods

✔ Properties

✔ Constructors

=========================================================
Syntax
=========================================================

abstract class ClassName{

}

=========================================================
2. WHY DO WE NEED ABSTRACT CLASSES?
=========================================================

Suppose we are creating
different payment methods.

We have

Credit Card

UPI

Net Banking

Wallet

Every payment has

✔ amount

✔ pay()

✔ validate()

Instead of writing everything
again and again,

we create one

Abstract Class.

Child classes inherit
common functionality

and implement
their own logic.

=========================================================
Visualization
=========================================================

           Payment
        (Abstract)

          /   |   \

         /    |    \

      UPI   Card   Wallet

=========================================================
Benefits
=========================================================

✔ Code Reusability

✔ Better Architecture

✔ Forces Consistency

✔ Easy Maintenance

✔ Prevents Invalid Objects

=========================================================
3. DECLARING AN ABSTRACT CLASS
=========================================================
*/

abstract class Animal{

    name:string;

    constructor(name:string){

        this.name = name;

    }

}

/*
Notice

abstract

before

class.

Now

Animal

cannot be instantiated.

=========================================================
4. CREATING OBJECTS
=========================================================

Wrong
=========================================================

const animal = new Animal("Dog");

❌ Error

Reason

Abstract classes cannot
create objects.

=========================================================
Correct
=========================================================
*/

class Dog extends Animal{

}

const dog = new Dog("Tommy");

console.log(dog.name);

/*
Only child classes can create
objects.

=========================================================
5. ABSTRACT METHODS
=========================================================

An Abstract Method has

NO implementation.

It only declares

what must exist.

Every child class MUST
implement it.

=========================================================
Syntax
=========================================================

abstract methodName():void;

Notice

No {}

No body.

=========================================================
Example
=========================================================
*/

abstract class Shape{

    abstract draw():void;

}

/*
draw()

has no implementation.

Every child class must define it.

=========================================================
Example
=========================================================
*/

class Circle extends Shape{

    override draw(){

        console.log(

            "Drawing Circle"

        );

    }

}

class Square extends Shape{

    override draw(){

        console.log(

            "Drawing Square"

        );

    }

}

const circle = new Circle();

circle.draw();

const square = new Square();

square.draw();

/*
Output

Drawing Circle

Drawing Square

=========================================================
Why?
=========================================================

The parent class says

Every Shape

must know

how to draw itself.

But

it doesn't know HOW.

Only child classes know that.

=========================================================
6. CONCRETE METHODS
=========================================================

Abstract Classes can also
contain normal methods.

These methods already have
implementation.

Child classes automatically
inherit them.

=========================================================
Example
=========================================================
*/

abstract class Vehicle{

    abstract start():void;

    stop(){

        console.log(

            "Vehicle Stopped"

        );

    }

}

class Car extends Vehicle{

    override start(){

        console.log(

            "Car Started"

        );

    }

}

const car = new Car();

car.start();

car.stop();

/*
Vehicle

contains

✔ abstract method

start()

✔ concrete method

stop()

=========================================================
7. EXTENDING AN ABSTRACT CLASS
=========================================================

Abstract Classes are inherited
using

extends

just like normal classes.

=========================================================
Example
=========================================================
*/

abstract class Employee{

    constructor(

        public name:string

    ){}

    abstract work():void;

}

class Developer extends Employee{

    override work(){

        console.log(

            this.name,

            "is writing code."

        );

    }

}

const developer = new Developer(

    "Diwakar"

);

developer.work();

/*
Execution

Developer

↓

extends

Employee

↓

inherits

name

↓

implements

work()

=========================================================
8. IMPLEMENTING ABSTRACT METHODS
=========================================================

Rule

Every concrete child class
must implement all abstract
methods.

=========================================================
Wrong Example
=========================================================

abstract class Bird{

    abstract fly():void;

}

class Sparrow extends Bird{

}

❌ Error

Reason

fly()

is missing.

=========================================================
Correct Example
=========================================================
*/

abstract class Bird{

    abstract fly():void;

}

class Sparrow extends Bird{

    override fly(){

        console.log(

            "Sparrow Flying"

        );

    }

}

const sparrow = new Sparrow();

sparrow.fly();

/*
=========================================================
9. CONSTRUCTOR IN ABSTRACT CLASSES
=========================================================

Abstract Classes can have
constructors.

Child classes call them
using

super()

=========================================================
Example
=========================================================
*/

abstract class Person{

    constructor(

        public name:string,

        public age:number

    ){}

}

class Student extends Person{

    constructor(

        name:string,

        age:number,

        public course:string

    ){

        super(

            name,

            age

        );

    }

}

const student = new Student(

    "Diwakar",

    24,

    "Backend"

);

console.log(student.name);

console.log(student.age);

console.log(student.course);

/*
Execution

Student Constructor

↓

super()

↓

Person Constructor

↓

Initialization Complete

*/

/*
=========================================================
10. ACCESS MODIFIERS
=========================================================

Access modifiers work exactly the
same inside Abstract Classes.

The only difference is that
child classes inherit them.

=========================================================
public
=========================================================

✔ Parent Class

✔ Child Class

✔ Outside Class

=========================================================
Example
=========================================================
*/

abstract class AnimalEx{

    public name:string;

    constructor(name:string){

        this.name = name;

    }

}

class DogEx extends AnimalEx{

}

const dogex = new DogEx("Tommy");

console.log(dogex.name);

/*
=========================================================
protected
=========================================================

✔ Parent

✔ Child

❌ Outside

=========================================================
Example
=========================================================
*/

abstract class EmployeeEx{

    protected salary:number;

    constructor(salary:number){

        this.salary = salary;

    }

}

class DeveloperEx extends EmployeeEx{

    showSalary(){

        console.log(this.salary);

    }

}

const developerex = new DeveloperEx(90000);

developerex.showSalary();

// developer.salary

/*
❌ Error

Reason

protected members are accessible
only inside

Parent

and

Child

=========================================================
private
=========================================================

✔ Parent

❌ Child

❌ Outside

=========================================================
Example
=========================================================
*/

abstract class BankAccount{

    private balance = 5000;

    showBalance(){

        console.log(this.balance);

    }

}

class SavingsAccount extends BankAccount{

    print(){

        // console.log(this.balance);

    }

}

/*
Reason

private members belong only
to the class where they are
declared.

=========================================================
11. ABSTRACT PROPERTIES
=========================================================

Abstract Classes can also declare
properties without assigning values.

Child classes MUST define them.

=========================================================
Syntax
=========================================================

abstract property:type;

=========================================================
Example
=========================================================
*/

abstract class ShapeEx{

    abstract color:string;

    abstract draw():void;

}

class CircleEx extends ShapeEx{

    color = "Red";

    override draw(){

        console.log(

            "Drawing Circle"

        );

    }

}

const circleex = new CircleEx();

console.log(circleex.color);

circleex.draw();

/*
Notice

color

was declared in the parent,

implemented in the child.

=========================================================
12. ABSTRACT CLASS vs NORMAL CLASS
=========================================================

Normal Class

↓

Can create objects

↓

May contain methods

↓

May contain constructors

↓

Can be inherited

=========================================================

Abstract Class

↓

Cannot create objects

↓

Can contain abstract methods

↓

Can contain normal methods

↓

Can contain constructors

↓

Must be inherited

=========================================================
Comparison Example
=========================================================
*/

class CarExample{

    start(){

        console.log("Car Started");

    }

}

const carEx = new CarExample();

carEx.start();

/*
---------------------------------------------------------
Abstract Version
---------------------------------------------------------

abstract class Vehicle{

    abstract start():void;

}

Cannot create

new Vehicle()

❌ Error

=========================================================
13. REAL WORLD BACKEND EXAMPLES
=========================================================

Example 1

Repository Pattern

=========================================================
*/

abstract class BaseRepository{

    save(){

        console.log("Saving Data");

    }

    delete(){

        console.log("Deleting Data");

    }

    abstract find():void;

}

class UserRepository extends BaseRepository{

    override find(){

        console.log("Finding User");

    }

}

const repository = new UserRepository();

repository.save();

repository.delete();

repository.find();

/*
Every repository gets

✔ save()

✔ delete()

But every repository implements
its own

find()

=========================================================
Example 2

Payment Gateway

=========================================================
*/

abstract class PaymentGateway{

    abstract pay(amount:number):void;

    logTransaction(){

        console.log("Transaction Logged");

    }

}

class Razorpay extends PaymentGateway{

    override pay(amount:number){

        console.log(

            "Paid",

            amount,

            "using Razorpay"

        );

    }

}

const payment = new Razorpay();

payment.pay(1000);

payment.logTransaction();

/*
=========================================================
Example 3

Notification Service

=========================================================
*/

abstract class Notification{

    abstract send(message:string):void;

}

class EmailNotification
extends Notification{

    override send(message:string){

        console.log(

            "Email:",

            message

        );

    }

}

class SmsNotification
extends Notification{

    override send(message:string){

        console.log(

            "SMS:",

            message

        );

    }

}

const email = new EmailNotification();

email.send("Welcome");

const sms = new SmsNotification();

sms.send("OTP Sent");

/*
=========================================================
14. COMMON MISTAKES
=========================================================

Mistake 1

Trying to create an object
of an Abstract Class.

Example

abstract class Animal{

}

const animal = new Animal();

❌ Error

=========================================================

Mistake 2

Forgetting to implement
abstract methods.

Example

abstract class Shape{

    abstract draw():void;

}

class Circle extends Shape{

}

❌ Error

=========================================================

Mistake 3

Giving a body to an
abstract method.

Wrong

abstract draw(){

}

❌ Error

Correct

abstract draw():void;

=========================================================

Mistake 4

Thinking Abstract Classes
cannot have constructors.

Wrong

Abstract Classes CAN
have constructors.

=========================================================

Mistake 5

Thinking Abstract Classes
contain only abstract methods.

Wrong

They can contain

✔ Properties

✔ Constructors

✔ Normal Methods

✔ Static Members

✔ Abstract Methods

=========================================================
15. BEST PRACTICES
=========================================================

✔ Put common implementation
inside the Abstract Class.

---------------------------------------------------------

✔ Keep only necessary methods
abstract.

---------------------------------------------------------

✔ Use Abstract Classes when
child classes share behavior.

---------------------------------------------------------

✔ Use interfaces when you only
need a contract.

---------------------------------------------------------

✔ Prefer meaningful abstract
method names.

---------------------------------------------------------

✔ Use

override

when implementing
abstract methods.

=========================================================
16. INTERVIEW DEFINITIONS
=========================================================

What is an Abstract Class?

Answer

An Abstract Class is a class
that cannot be instantiated
and is meant to be inherited.

---------------------------------------------------------

Can we create an object
of an Abstract Class?

Answer

No.

---------------------------------------------------------

Can an Abstract Class have
constructors?

Answer

Yes.

---------------------------------------------------------

Can an Abstract Class contain
normal methods?

Answer

Yes.

---------------------------------------------------------

Can an Abstract Class contain
abstract methods?

Answer

Yes.

---------------------------------------------------------

Why use an Abstract Class?

Answer

To provide common functionality
while forcing child classes
to implement specific behavior.

=========================================================
ANALOGY
=========================================================

Imagine an architect.

The architect creates

a building blueprint.

The blueprint itself

cannot become a building.

↓

Abstract Class

---------------------------------------------------------

Builders use the blueprint

to build

House

School

Hospital

Mall

↓

Child Classes

Every building follows
the blueprint,

but each has its own design.

Abstract Classes work
the same way.

=========================================================
SUMMARY
=========================================================

✔ Abstract Classes cannot
create objects.

✔ Use

abstract

keyword.

✔ Can contain constructors.

✔ Can contain properties.

✔ Can contain normal methods.

✔ Can contain abstract methods.

✔ Child classes must implement
every abstract method.

✔ Use Abstract Classes when
classes share behavior and
implementation.

=========================================================
END OF NOTES
=========================================================
*/

export {};