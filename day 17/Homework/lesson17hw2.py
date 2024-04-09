#შექმენით ფუნქცია რომელსაც გადაეცემა list = ["name1" , "name2" , "name3"....] შემდეგ მომხმარებელს კითხეთ რომელი ინდექსის შეცვლა სურს და ამის მიხედვით 
#შეცვალეთ ის კონკრეტული ინდექსი თქვენი სასურველი სტრინგით და ბოლოს შეაერთეთ join() ფუნქციის მეშვეობით 

def replace_and_join_names(names_list):
    
    index_to_change = int(input("Enter the index you want to change (0 to {}): ".format(len(names_list) - 1)))

    
    if 0 <= index_to_change < len(names_list):
      
        desired_name = input("Enter the desired name: ")

        
        names_list[index_to_change] = desired_name

        
        joined_names = ', '.join(names_list)
        return joined_names
    else:
        return "Invalid index!"


names_list = ["banana", "apple", "coconut", "Orange", "Pineapple"]
result = replace_and_join_names(names_list)
print("Resulting string:", result)
