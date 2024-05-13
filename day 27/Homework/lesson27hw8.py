#შექმენით ფუნქცია, რომელსაც გადაეცემა ორი სია. თქვენი დავალებაა, გააერთიანოთ ეს ორი სია და დააბრუნოთ ერთი დიდი სიის სახით.
def combine_lists(list1, list2):
    combined_list = []
    for item in list1:
        combined_list.append(item)
    for item in list2:
        combined_list.append(item)
    return combined_list


list1 = [1, 2, 3]
list2 = [4, 5, 6]
print(combine_lists(list1, list2)) 