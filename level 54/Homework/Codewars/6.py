def persistence(n):
    
    count = 0
    
    
    while n >= 10:
        
        digits = str(n)
        
        
        product = 1
        
        
        for digit in digits:
            product *= int(digit)
        
        
        n = product
        
        
        count += 1
    
    return count
