age = int(input("Please enter your age: "))

if age >= 0 and age < 13:
    print("You are a child.")
elif age >= 13 and  age < 18:
    print("You are a teenager.")
elif age >= 18 and age < 60:
    print("You are an adult.")
else:
    print("You are an old person.")