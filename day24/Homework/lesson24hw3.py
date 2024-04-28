def swap_case(word):
    swapped_word = ""
    
    for letter in word:
        if letter.islower():
            swapped_word += letter.upper()
        elif letter.isupper():
            swapped_word += letter.lower()
        else:
            swapped_word += letter
    return swapped_word

user_word = input("Enter a word: ")

print("Word with swapped cases:", swap_case(user_word))
