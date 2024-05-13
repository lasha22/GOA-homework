#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების კოლექცია. თქვენ უნდა განიხილოთ მთლიანი კოლექცია: 
#თუ რიცხვი იქნება მთელი - გაამრავლეთ ორზე, ხოლო თუ რიცხვი იქნება ათწილადი - გაამრავლეთ ოთხზე. ყველა რიცხვი დაამატეთ ახალ სიაში და დააბრუნეთ ეს სია.

def entire_number(collection):
    entire_number = []
    for number in collection:
        if number == int(number):  
            entire_number.append(number * 2)
        else:
            entire_number.append(number * 4)
    return entire_number


numbers = [2.5, 8, 5.5, 9, 99]
print(entire_number(numbers))