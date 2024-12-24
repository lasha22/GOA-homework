A = 1  
B = 0  
C = 0  #

expression_1 = (A and not B) or (B and not A)
expression_2 = (B and C) and (A or B)
expression_3 = (A and not C) or (B and not A) or (B and not C)

print("Expression 1:", expression_1)
print("Expression 2:", expression_2)
print("Expression 3:", expression_3)