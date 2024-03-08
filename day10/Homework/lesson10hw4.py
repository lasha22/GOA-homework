# Create a list of odd numbers from 30 to 50
odd_numbers = [i for i in range(31, 51) if i % 2 != 0]

# Print out the list
print(odd_numbers)

# Find the sum of the three smallest elements
sum_of_smallest = sum(sorted(odd_numbers)[:3])

# Print the sum of the three smallest elements
print("The sum of the three smallest elements is:", sum_of_smallest)