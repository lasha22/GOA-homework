print("Hello, World!")

user_input = input("Enter something: ")
print("You entered:", user_input)

if True:
    print("This line is indented")
else:
    print("This line is not")
  


long_line = "This is a very long line that "\
            "needs to be broken into two lines"
print(long_line)



x = 5


print(x)


def add_numbers(a, b):
   
    return a + b


a = 5
b = 3.14
c = "Python"
d = True



a = 5
b = 3.14
c = "Python"
d = True


name = input("Enter your name: ")
age = int(input("Enter your age: "))


global_var = 10

def my_function():
    local_var = 5
    print(global_var)
    print(local_var)

my_function()



integer_var = 5
float_var = 3.14
string_var = "Python"
bool_var = True



num_str = "123"
num_int = int(num_str)
num_float = float(num_int)



a = 10
b = 3
print(a + b)   
print(a - b)   
print(a * b)   
print(a / b)   
print(a % b)  


num_str = "abc"
try:
    num_int = int(num_str)
except ValueError:
    print("Cannot cast to integer")
