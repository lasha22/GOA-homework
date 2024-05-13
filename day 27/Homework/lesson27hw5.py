#შექმენით ფუნქცია, რომელსაც გადაეცემა სია. თქვენი დავალებაა, რომ დააბრუნოთ ამ სიაში არსებული დუპლიკატები.
def find_duplicates(input_list):
    duplicates = []
    for i in range(len(input_list)):
        element = input_list[i]
        if input_list.count(element) == 2:
            duplicates.append(element)
    return duplicates


input_list = [1, 2, 3, 4, 2, 3, 5, 6, 6, 7]
print(find_duplicates(input_list)) 