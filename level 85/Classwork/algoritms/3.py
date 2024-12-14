arr = []
print("შეიყვანეთ 10 რიცხვი:")


for i in range(10):
    arr.append(int(input(f"რიცხვი {i + 1}: ")))


doubled_arr = [x * 2 for x in arr]
print(doubled_arr)
 