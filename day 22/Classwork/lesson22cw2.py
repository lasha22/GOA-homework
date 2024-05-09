def manual_index(collection, value):

    for index in range(0, len(collection)):
        if collection[index] == value:
            return index
    
    return -1


print(manual_index("lasha", "s"))