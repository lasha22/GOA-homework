#მომხმარებელს შემოატანინეთ აკადემიის სახელი. თუ ის "G"-თი იწყება, დაუპრინტეთ რომ გოა არის საუკეთესო არჩევანი. სხვა შემთხვევაში დაუპრინტეთ, რომ არასწორი გადაწყვეტილება მიიღო.

# Get the name of the academy from the user
academy_name = input("Enter the name of the academy: ")

# Check if the academy name starts with "G"
if academy_name.startswith("G"):
    print("Goa is the best choice.")
else:
    print("You made a wrong decision.")
    