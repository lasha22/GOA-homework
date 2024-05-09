#შექმენით ფუნქცია სახელად manual_min, რომელსაც შესაძლოა გადაეცეს მთელი რიცხვების სია - გაიხსენეთ function default argument. 
#თუ ფუნქციას სია გადაეცემა, დააბრუნეთ ამ სიის მინიმალური მნიშვნელობა, არ გამოიყენოთ min. თუ ფუნქციას არ გადაეცემა სია, მაშინ იმუშავეთ 1-იდან 10-ის ჩათვლით არსებული მთელი რიცხვების სიაზე.


def manual_min(lst=None):
    if lst is None:
        lst = list(range(1, 11))
    
    min_val = lst[0]  
    for num in lst:
        if num < min_val:
            min_val = num
    return min_val


custom_list = [3, 7, 2, 9, 5]

print("Minimum value in custom list:", manual_min(custom_list))  

print("Minimum value in default list:", manual_min())  



#შექმენით ფუნქცია სახელად manual_max, რომელსაც შესაძლოა გადაეცეს მთელი რიცხვების სია - გაიხსენეთ function default argument. თუ ფუნქციას სია გადაეცემა, 
#დააბრუნეთ ამ სიის მაქსიმალური მნიშვნელობა, არ გამოიყენოთ max. თუ ფუნქციას არ გადაეცემა სია, მაშინ იმუშავეთ 1-იდან 10-ის ჩათვლით არსებული მთელი რიცხვების სიაზე.
def manual_max(lst=None):
    if lst is None:
        lst = list(range(1, 11))
    
    max_num = lst[0] 
    for num in lst:
        if num > max_num:
            max_num = num
    return max_num




custom_list = [3, 7, 2, 9, 5]

print("max num for list:", manual_max(custom_list)) 


print("max num for standard list:", manual_max())  
