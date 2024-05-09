def manual_pop(collection, remove_index):
    if remove_index >= len(collection):
        return "index out of range"

    result = []
    for index in range(len(collection)):
        if index != remove_index:
            result.append(collection[index])
    return result
 
print(manual_pop(["lasha","lizi"], 1))
