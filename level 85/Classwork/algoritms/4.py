N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))

arr = [int(input(i + 1 )) 
       for i in range(N)]

print("შებრუნებული თანმიმდევრობა:")
for i in range(N-1, -1, -1):
    print(arr[i])
