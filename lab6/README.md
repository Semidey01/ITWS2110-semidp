# Lab 4 - PHP, OOP and Input Handling

## Lab Description:

This lab demonstrates the use of Object-Oriented Programming (OOP) principles in PHP and the handling of form input through the POST method. The goal is to implement a simple calculator that performs addition, subtraction, multiplication, and division using class inheritance and polymorphism.

## Part 1 - OOP

An abstract class Operation is defined as the base for all arithmetic operations.
It holds two operands and defines two abstract methods:

- operate(): performs the mathematical operation.

- getEquation(): returns a formatted equation string showing the full calculation.

Three subclasses: Subtraction, Multiplication, and Division were added, each implementing these abstract methods differently.
A special exception was added in the Division class to prevent division by zero.

### Class Breakdown:

Operation (Abstract Class):
Defines the structure for all math operations and validates that operands are numeric.
Requires subclasses to define operate() and getEquation().

Addition:
Adds the two operands and returns the result.

Subtraction:
Subtracts the second operand from the first.

Multiplication:
Multiplies the two operands together.

Division:
Divides the first operand by the second and throws an exception if the second operand is zero.

## Part 2 - POST Handling

When a user enters two numbers and clicks a button (Add, Subtract, Multiply, or Divide),
the form sends a POST request back to the same file (lab6.php).
The script checks which button was pressed using isset($_POST['button_name']),
then instantiates the corresponding operation class with the two input values.

The program then:

-  operate() to perform the calculation.

- Calls getEquation() to display the formatted result.

- Handles any exceptions (non-numeric input or division by zero).

## Answers to Lab Questions

1) What does each class and method do, and what is the flow of execution after a button is clicked?

- Operation: Abstract base class that validates input and defines the required structure for operations.

- Addition, Subtraction, Multiplication, Division: Implement their respective arithmetic logic in operate() and return a formatted string in getEquation().

- operate(): Executes the actual math.

- getEquation(): Returns a readable equation with the result.

### Flow of Execution:

- The user inputs two values and clicks a button.

- A POST request is sent to lab6.php.

- The script determines which button was pressed using isset().

- The appropriate operation class is instantiated (e.g., new Division($o1, $o2)).

- The constructor validates the operands.

- getEquation() calls operate() and displays the result.

- Any exceptions are caught and displayed as error messages.

2) How would the application differ if we used $_GET instead of $_POST?

Using $_GET:

- The form data would appear in the URL (e.g., lab6.php?op1=5&op2=2&add=Add).

- Input would be visible in the address bar and stored in browser history.

- This would allow bookmarking or sharing specific calculations.

However, it is less secure and not ideal for sensitive or changing data. $_POST is preferred here because it keeps the input hidden and represents a data-processing action more accurately.
