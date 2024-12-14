
N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))


arr = [int(input( i + 1 )) 
       for i in range(N)]


print("კენტ ინდექსებზე მყოფი ელემენტები:")
for i in range(1, N, 2):
    print(arr[i])
