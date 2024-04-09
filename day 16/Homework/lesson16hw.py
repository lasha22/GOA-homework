#შექმენით ფუნქცია რომელიც სიაში ლუწ ინდექსებზე მდგომ რიცხვთა ჯამს დააბრუნებს, შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი): 9 


def sum_even_indices(lst):
    return sum(lst[::2])

input_data = [1, 2, 3, 4, 5]
output_data = sum_even_indices(input_data)
print(output_data) 

    

