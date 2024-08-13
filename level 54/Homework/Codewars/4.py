def stray(arr):
    
    unique_elements = set(arr)
    
    
    
    unique_elements_list = list(unique_elements)
    
    
    if arr.count(unique_elements_list[0]) == 1:
        return unique_elements_list[0]
    else:
        return unique_elements_list[1]