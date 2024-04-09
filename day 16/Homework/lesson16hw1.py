#შექმენით ფუნქცია რომელიც გამოითვლის კენტების და ლუწების ჯამს ცალცალკე, დააბრუნეთ სია სადაც იქნება ეს ჯამები ჩასმული, შესატანი მონაცემები [1,2,3,4,5] ---- გამოსატანი მონაცემები [6, 9] 
def calculate_odd_even_sums(input_list):
   
    odd_sum = 0
    even_sum = 0

    
    for num in input_list:
        if num % 2 == 0:
         
            even_sum += num
        else:
            
            odd_sum += num

   
    sums_list = [even_sum, odd_sum]
    return sums_list

input_data = [1, 2, 3, 4, 5]
output_data = calculate_odd_even_sums(input_data)
print("Output data:", output_data)


