# შექმენით ფუნქცია, რომელსაც გადაეცემა კოლექცია და საძიებელი სიტყვა. 
#თქვენი დავალებაა, რომ დააბრუნოთ თუ რამდენჯერ გვხვდება საძიებელი სიტყვა კოლექციაში.
def count_occurrences(collection, search_term):
    count = 0
    for item in collection:
        if item == search_term:
            count += 1
    return count


collection = [1, 2, 3, 4, 2, 3, 5, 6, 6, 7]
search_term = 2
print(count_occurrences(collection, search_term))  