# შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი დიდი წინადადება. ამ წინადადებაში, ყველა სიტყვა დაიწყეთ დიდი ასოთი და დააბრუნეთ წინადადება ამ სახით.
def capitalize_sentence(sentence):
    words = sentence.split()  
    capitalized_words = []
    for word in words:
        capitalized_words.append(word.capitalize())  
    capitalized_sentence = " ".join(capitalized_words)  
    return capitalized_sentence

input_sentence = "goa is best programing academy"
print(capitalize_sentence(input_sentence))