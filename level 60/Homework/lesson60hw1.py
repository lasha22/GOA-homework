def solution(array_a, array_b):
   
    squared_differences = [(a - b) ** 2 for a, b in zip(array_a, array_b)]
    
   
    average = sum(squared_differences) / len(array_a)
    
    return average

