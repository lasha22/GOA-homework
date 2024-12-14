N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))


arr = [int(input( i + 1 )) 
       for i in range(N)]


arr[0], arr[-1] = arr[-1], arr[0]


print("განახლებული მასივი:")
print(arr)
