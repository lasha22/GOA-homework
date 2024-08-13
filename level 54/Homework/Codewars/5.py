def max_diff(lst):
    
    if len(lst) <= 1:
        return 0
    
    
    max_val = max(lst)
    min_val = min(lst)
    
    
    return max_val - min_val
