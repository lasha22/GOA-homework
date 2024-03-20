
num_elements = 5
my_list = []

for i in range(num_elements):
    element = input("Enter element {}: ".format(i+1))  
    my_list.append(element)


for element in my_list:
    print(element)