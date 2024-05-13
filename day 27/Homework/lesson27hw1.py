# შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. ლუწ ინდექსებზე მყოფი სახელები გადაიყვანეთ uppercase-ში, ხოლო კენტ ინდექსებზე მყოფნი კი lowercase-ში.
def convert_names(name_list):
    converted_names = []
    for i in range(len(name_list)):
        if i % 2 == 0:  # Even index
            converted_names.append(name_list[i].upper())
        else:
            converted_names.append(name_list[i].lower())
    return converted_names


names = ["Lasha", "Lizi", "Nesvi", "sazamtro", "atami"]
print(convert_names(names))
    
    
    

