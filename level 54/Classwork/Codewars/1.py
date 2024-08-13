def solution(s):
    result = []
    
    for char in s:
        if char.isupper() and result:
            result.append(' ')
        result.append(char)
    
    return ''.join(result)
