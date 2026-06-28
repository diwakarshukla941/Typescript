/*
=========================================================
ACCESS MODIFIER - PROTECTED
=========================================================

INDEX

1. What is protected?
2. Why Do We Need protected?
3. protected vs public vs private
4. Basic Example
5. How Inheritance Uses protected
6. Why Not Use private Here?
7. Real World Backend Examples
8. Common Mistakes
9. Best Practices
10. Interview Definitions
11. Summary

=========================================================
1. WHAT IS protected?
=========================================================

Definition:

protected means the member can
be accessed

✔ Inside its own class

✔ Inside subclasses (derived classes)

❌ NOT outside the class hierarchy

Think of it as

"Family Access"

Only the parent class and
its children can use it.

=========================================================
2. WHY DO WE NEED protected?
=========================================================

Imagine we have

Animal

↓

Dog

↓

GermanShepherd

Every animal has

energy.

Should outside code modify it?

No.

Should child classes like
Dog modify it?

Yes.

That's exactly why
protected exists.

=========================================================
3. protected vs public vs private
=========================================================

public

↓

Everyone can access.

------------------------------------

private

↓

Only the same class.

------------------------------------

protected

↓

Same class

+

Subclasses

=========================================================
4. BASIC EXAMPLE
=========================================================
*/

class Animal {

    protected energy = 25;

    eat(amount: number) {

        this.energy = Math.min(
            100,
            this.energy + amount
        );

    }

}

class Dog extends Animal {

    run() {

        this.energy -= 10;

    }

    status() {

        return this.energy;

    }

}

const dog = new Dog();

dog.eat(20);

dog.run();

console.log(
    dog.status()
);

// dog.energy;

/*
Error

energy

is protected.

Cannot access from
outside the class.

=========================================================
VISUAL
=========================================================

Outside Code

↓

energy

❌

----------------------------

Animal

↓

energy

✔

----------------------------

Dog

↓

energy

✔

=========================================================
5. HOW INHERITANCE USES protected
=========================================================

Animal

↓

energy

↓

protected

↓

Dog

↓

Can use energy

↓

GermanShepherd

↓

Can also use energy

Every subclass inherits
the protected member.

=========================================================
6. WHY NOT USE private?
=========================================================

Suppose

*/

class AnimalPrivate {

    private energy = 25;

}

/*
Now

*/

class DogPrivate extends AnimalPrivate {

    run(){

        // this.energy--;

    }

}

/*
Error

energy

is private.

private blocks access
even from subclasses.

protected solves this problem.

=========================================================
7. REAL WORLD BACKEND EXAMPLES
=========================================================

Authentication Base Class

↓

protected token

------------------------------------

Database Base Class

↓

protected connection

------------------------------------

API Base Controller

↓

protected logger

------------------------------------

Payment Base Class

↓

protected apiKey

Child classes can use them.

Outside code cannot.

=========================================================
8. COMMON MISTAKES
=========================================================

❌ Using protected when
public is enough.

Not everything needs
restricted access.

------------------------------------

❌ Using private when
child classes need access.

Choose protected instead.

------------------------------------

❌ Accessing protected
outside the class.

Example

dog.energy

Error.

=========================================================
9. BEST PRACTICES
=========================================================

✔ Use protected for members
that child classes need.

✔ Keep implementation
hidden from outside.

✔ Prefer private unless
inheritance requires access.

✔ Expose public methods
instead of protected data.

=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

protected

A member accessible inside
its own class and all
subclasses, but not
outside the class hierarchy.

---------------------------------------------------------

Difference

public

↓

Everywhere

----------------------------

private

↓

Same class only

----------------------------

protected

↓

Same class

+

Subclasses

=========================================================
MOST COMMON INTERVIEW QUESTIONS
=========================================================

Q.

Why use protected?

Answer

To allow subclasses
to reuse internal state
while preventing outside
code from accessing it.

---------------------------------------------------------

Q.

Difference between

private

and

protected?

Answer

private

↓

Only same class.

protected

↓

Same class

+

Derived classes.

=========================================================
SUMMARY
=========================================================

public

↓

Everywhere

------------------------------------

private

↓

Only same class

------------------------------------

protected

↓

Same class

+

Subclasses

------------------------------------

Best Use

↓

Inheritance

------------------------------------

Purpose

↓

Controlled sharing
between parent
and child classes

=========================================================
END OF NOTES
=========================================================
*/

export {};