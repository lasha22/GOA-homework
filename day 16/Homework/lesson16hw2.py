# შექმენით ფუნქცია რომელიც დაგიბრუნებთ სიაში მყოფ ელემენტების რაოდენობას, შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი): 5
#შესატან მონაცემებში იგულისხმება ის რომ ფუნქციას გადაცეთ კონკრეტული მნიშვნელობა
def sum_odd_even(numbers):
    odd_sum = 0
    even_sum = 0
    for num in numbers:
        if num % 2 == 0:
            even_sum += num
        else:
            odd_sum += num
    return [even_sum, odd_sum]

input_data = [1, 2, 3, 4, 5]
output_data = sum_odd_even(input_data)
print(output_data) 






