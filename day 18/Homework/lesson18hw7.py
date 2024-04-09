word = input("Enter a word: ")
letter = input("Enter a letter to search for: ")

index = word.find(letter)

if index != -1:
    print(f"The index of the first occurrence of '{letter}' in '{word}' is: {index}")
else:
    print(f"The letter '{letter}' does not exist in the word '{word}'. Index: -1")
