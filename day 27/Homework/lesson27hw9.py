
def find_unique_elements(collection):
    unique_elements = []
    for item in collection:
        if collection.count(item) == 1:  
            unique_elements.append(item)
    return unique_elements


collection = [1, 2, 3, 4, 2, 3, 5, 6, 6, 7]
result = find_unique_elements(collection)
print(result) 