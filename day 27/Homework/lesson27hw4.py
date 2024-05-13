#შექმენით ფუნქცია, რომელსაც გადაეცემა სია. თქვენი დავალებაა, რომ ამ სიიდან მოაშოროთ დუპლიკატები
#(ისეთი ელემენტები, რომლებიც სიაში ერთზე მეტჯერ გვხვდება) და დააბრუნოთ განახლებული სია.
def remove_duplicates(input_list):
    unique_list = []
    for element in input_list:
        if element not in unique_list:
            unique_list.append(element)
    return unique_list


input_list = [4, 1, 1, 5, 4, 3, 3, 6, 6, 7]
print(remove_duplicates(input_list)) 