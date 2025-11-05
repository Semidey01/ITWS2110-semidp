<?php 

abstract class Operation {
  protected $operand_1;
  protected $operand_2;
  public function __construct($o1, $o2) {
    // Make sure we're working with numbers...
    if (!is_numeric($o1) || !is_numeric($o2)) {
      throw new Exception('Non-numeric operand.');
    }
    
    // Assign passed values to member variables
    $this->operand_1 = $o1;
    $this->operand_2 = $o2;
  }
  public abstract function operate();
  public abstract function getEquation(); 
}

// Addition subclass inherits from Operation
class Addition extends Operation {
  public function operate() {
    return $this->operand_1 + $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' + ' . $this->operand_2 . ' = ' . $this->operate();
  }
}


// Part 1 - Add subclasses for Subtraction, Multiplication and Division here

class Subtraction extends Operation {
  public function operate() {
    return $this->operand_1 - $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' - ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

class Multiplication extends Operation {
  public function operate() {
    return $this->operand_1 * $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' * ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

class Division extends Operation {
  public function operate() {
    if ($this->operand_2 == 0) {
      throw new Exception("Error: Division by zero is not allowed.");
    }
    return $this->operand_1 / $this->operand_2;
  }

  public function getEquation() {
    try {
      $result = $this->operate();
      return $this->operand_1 . ' / ' . $this->operand_2 . ' = ' . $result;
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }
}



// End Part 1




// Some debugs - un comment them to see what is happening...
// echo '$_POST print_r=>',print_r($_POST);
// echo "<br>",'$_POST vardump=>',var_dump($_POST);
// echo '<br/>$_POST is ', (isset($_POST) ? 'set' : 'NOT set'), "<br/>";
// echo "<br/>---";




// Check to make sure that POST was received 
// upon initial load, the page will be sent back via the initial GET at which time
// the $_POST array will not have values - trying to access it will give undefined message

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $o1 = $_POST['op1'];
    $o2 = $_POST['op2'];
  }
  $err = Array();


// Part 2 - Instantiate an object for each operation based on the values returned on the form
//          For example, check to make sure that $_POST is set and then check its value and 
//          instantiate its object
// 
// The Add is done below.  Go ahead and finish the remiannig functions.  
// Then tell me if there is a way to do this without the ifs

  try {
    if (isset($_POST['add']) && $_POST['add'] == 'Add') {
      $op = new Addition($o1, $o2);
    }
// Put the code for Part 2 here  \/
    if (isset($_POST['sub']) && $_POST['sub'] == 'Substract') {
      $op = new Substraction($o1, $o2);
    }

    if (isset($_POST['mult']) && $_POST['mult'] == 'Multiply') {
      $op = new Multiplication($o1, $o2);
    }

    if (isset($_POST['div']) && $_POST['div'] == 'Divide') {
      $op = new Division($o1, $o2);
    }


// End of Part 2   /\

  }
  catch (Exception $e) {
    $err[] = $e->getMessage();
  }
?>

<!doctype html>
<html>
<head>
<title>Lab 6</title>
</head>
<body>
  <pre id="result">
  <?php 
    if (isset($op)) {
      try {
        echo $op->getEquation();
      }
      catch (Exception $e) { 
        $err[] = $e->getMessage();
      }
    }
      
    foreach($err as $error) {
        echo $error . "\n";
    } 
  ?>
  </pre>
  <form method="post" action="lab6.php">
    <input type="text" name="op1" id="name" value="" />
    <input type="text" name="op2" id="name" value="" />
    <br/>
    <!-- Only one of these will be set with their respective value at a time -->
    <input type="submit" name="add" value="Add" />  
    <input type="submit" name="sub" value="Subtract" />  
    <input type="submit" name="mult" value="Multiply" />  
    <input type="submit" name="div" value="Divide" />  
  </form>

  <div><h4>1- What does each class and method do, and what is the flow of execution after a button is clicked?</h4>
    <ul>
- Operation: Abstract base class that validates input and defines the required structure for operations.

- Addition, Subtraction, Multiplication, Division: Implement their respective arithmetic logic in operate() and return a formatted string in getEquation().

- operate(): Executes the actual math.

- getEquation(): Returns a readable equation with the result.
  </ul>

### Flow of Execution:

- The user inputs two values and clicks a button.

- A POST request is sent to lab6.php.

- The script determines which button was pressed using isset().

- The appropriate operation class is instantiated (e.g., new Division($o1, $o2)).

- The constructor validates the operands.

- getEquation() calls operate() and displays the result.

- Any exceptions are caught and displayed as error messages.
  </div>
  <div>

<h4> 2 - How would the application differ if we used $_GET instead of $_POST? </h4>

Using $_GET:

- The form data would appear in the URL (e.g., lab6.php?op1=5&op2=2&add=Add).

- Input would be visible in the address bar and stored in browser history.

- This would allow bookmarking or sharing specific calculations.

However, it is less secure and not ideal for sensitive or changing data. $_POST is preferred here because it keeps the input hidden and represents a data-processing action more accurately.
  </div>
  <div>
<h4> 3 - Finally, please explain whether or not there might be another (better +/-) way to determine which button has been pressed and take the appropriate action </h4>

Another way we can determine what button was pressed is instead of checking multiple isset($_POST['add']), isset($_POST['subtract']), etc., you can give all buttons the same name (e.g., name="operation") but different values (e.g., value="add", value="divide"). Then you only need to check one variable like: $opType = $_POST['operation']; and use a switch or match statement to create the correct object.
This approach makes it easier to maintain the code if new operations are added later.
</div>
</body>
</html>

