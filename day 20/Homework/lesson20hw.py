my_list = [5, 6, 325, 21, 24, 67, 43]

total_sum = 0
count = 0
for num in my_list:
    total_sum += num
    count += 1

mean = total_sum
for i in range(count - 1):
    mean -= 1

print("pass arithmetic:", mean)

               