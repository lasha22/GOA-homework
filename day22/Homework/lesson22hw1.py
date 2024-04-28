#შექმენით ფუნქცია სახელად manual_count: ფუნქციას გადაეცემა სია და ასევე შესაძლოა ელემენტი. როდესაც ფუნქციას ელემენტიც გადაეცემა, თქვენ უნდა დაითვალოთ სიაში ამ ელემენტის რაოდენობა, არ გამოიყენოთ count. როდესაც არ გადაეცემა ელემენტი, 
#მისთვის გამოიყენეთ default მნიშვნელობა და გაუტოლეთ საწყისი სიის საშუალო არითმეტიკულს, ოღონდ მთელი რიცხვის სახით (int(აქ საშუალოს კოდი)).
def manual_count(lst, element=None):
    if element is None:
        element = int(sum(lst) / len(lst)) if len(lst) > 0 else 0
    
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count


my_list = [12, 56, 42, 42, 53, 51, 79]



print("Count of 5 in the list:", manual_count(my_list, 42))  

print("Count of average value in the list:", manual_count(my_list))  