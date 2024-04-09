#შექმენით ფუნქცია, რომელშიც გააერთიანებთ იმ ფუნქციებს რაც დღეს ვისწავლეთ (lower(), upper(), capitalize(), find())
def combine_string_operations(input_string):
    
    results = {}

  
    results['lower'] = input_string.lower()
    results['upper'] = input_string.upper()
    results['capitalize'] = input_string.capitalize()

   
    search_term = "Goa"
    index = input_string.find(search_term)
    results['find'] = f"'{search_term}' index: {index}" if index != -1 else f"'{search_term}' not found"

    return results


input_str = "Goa is best academy"
combined_results = combine_string_operations(input_str)
print(combined_results)


