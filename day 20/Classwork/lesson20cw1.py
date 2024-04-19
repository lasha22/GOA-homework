numbers = [3, 15, 7, 22, 14, 18, 9, 12, 5, 27]

for i in range(0, len(numbers)):
    if numbers[i] % 2 != 0:
        numbers.pop(i)
        
print(numbers)



