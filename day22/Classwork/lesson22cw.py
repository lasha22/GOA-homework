def manual_pop(collection, delete_index):
    new_collection = []
    
    for index in range(0,len(collection)):
       if index != delete_index:
           new_collection.append(collection[index])
    
    return new_collection
names = ["Potatoes","Watermelon", "Strawberries", "Grapes"]   

print(manual_pop(names, 0))
