#გადმოგეცემათ სია რომელშიც იქნება რიცხვები int ტიპის მონაცემები.
#დააბრუნეთ ახალი სია მაგრამ ამ სიაში უნდა იყოს მხოლოდ ლუწი რიცხვები და დაპრინტეთ ახალი სია 
list = [3, 15, 7, 22, 14, 18, 9, 12, 5, 27]

even_list = []
odd_list = []

for num in list:
    if num % 2 == 0:
        even_list.append(num)   
    else:
       odd_list.append(num)


#2 ჩემთხვევა
print(even_list, odd_list)


my_list = [3, 15, 7, 22, 14, 18, 9, 12, 5, 27]
even_list = []
odd_list = []

for i in range(len(my_list)):
  if my_list[i] % 2 == 0:
    even_list.append(my_list[i])
  else:
    odd_list.append(my_list[i])

print(even_list,odd_list)





























