numbers = list(map(int, input("Enter 4 integers separated by space: ").split()))
even_numbers = [num for num in numbers if num % 2 == 0]
if len(even_numbers) >= 2:
    even_numbers.sort(reverse=True)
    max_product = even_numbers[0] * even_numbers[1]
    print(max_product)
else:
    print("No sufficient even numbers")
