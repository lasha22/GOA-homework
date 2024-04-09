#შექმენით replace ფუნქციის კოპიო
def custom_replace(string, old_sub, new_sub):
    result = ''
    i = 0
    while i < len(string):
       
        if string[i:i + len(old_sub)] == old_sub:
            result += new_sub  
            i += len(old_sub)  
        else:
            result += string[i]  
            i += 1 
    return result

original_string = "Novatori is best academy!"
old_substring = "Novatori"
new_substring = "Goa"
result_string = custom_replace(original_string, old_substring, new_substring)
print(result_string) 

