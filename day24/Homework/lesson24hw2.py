def get_divisors(num):
    divisors = []
    for i in range(1, num + 1):
        if num % i == 0:
            divisors.append(i)
    return divisors


num = int(input("Enter a positive integer: "))


divisors_list = []

for i in range(1, num + 1):
    divisors_list += get_divisors(i)


print("List of divisors:", divisors_list)
