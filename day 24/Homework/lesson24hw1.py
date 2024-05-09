def sum_(numbers):
    
    if not numbers:
        return 0
    
  
    max_val = max(numbers)
    min_val = min(numbers)
    
    
    sum_ = sum(numbers) - max_val - min_val
    
    return sum_


numbers = [24, 42, 32, 87,5.5,2.3]

print("Sum without extremes:", sum_(numbers))
