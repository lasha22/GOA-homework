# Create a list containing odd numbers from 30 to 50
odd_numbers = [i for i in range(30, 51) if i % 2 != 0]

# Print the multiples of three
multiples_of_three = [num for num in odd_numbers if num % 3 == 0]

print("Multiples of three in the list:", multiples_of_three)