def addition(a, b):
    return a + b

def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b != 0:
        return a / b
  

print("Addition:", addition(6, 8))         
print("Subtraction:", subtraction(3, 6))   
print("Multiplication:", multiplication(8, 2))  
print("Division:", division(4, 2))         
print("Division by zero:", division(15, 3))  
