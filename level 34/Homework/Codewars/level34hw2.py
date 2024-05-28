def square_digits(num):
    
    num_str = str(num)
    
    result = ""
    
    
    for digit in num_str:
        
        result += str(int(digit) ** 2)
    
    
    return int(result)