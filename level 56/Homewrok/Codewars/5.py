def unique_in_order(sequence):
    if not sequence:
        return []

    result = [sequence[0]]  

    for elem in sequence[1:]:
        if elem != result[-1]:  
            result.append(elem)  

    return result
