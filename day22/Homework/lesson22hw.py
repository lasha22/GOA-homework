#შექმენით ფუნქცია სახელად manual_pop, რომელსაც გადაეცემა სია და ასევე შესაძლოა ინდექსი. როდესაც გადაეცემა ინდექსი, სიიდან უნდა ამოიშალოს ამ ინდექსზე მყოფი ელემენტი და დაბრუნდეს სია ამ სახით. 
#თუ ფუნქციას არ გადაეცემა index, მაშინ default მნიშვნელობა უნდა იყოს სიის ბოლო ელემენტი - ზოგადად pop როგორც მუშაობს. ამ დავალებაში რათქმაუნდა pop არ უნდა გამოიყენოთ

def manual_pop(lst, index=None):
    if index is None:
        index = len(lst) - 1
    
    if index < 0 or index >= len(lst):
        print("Index out of range")
        return lst

    return lst[:index] + lst[index+1:]

my_list = [1, 2, 3, 4, 5]


result = manual_pop(my_list, 2)
print("List after manual_pop:", result)  


result = manual_pop(my_list)
print("List after manual_pop:", result)  
    


        
   
    