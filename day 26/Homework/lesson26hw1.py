def finf_index(word, find_char):
    for index in range(len(word)):
        if word[index] == find_char:
            return index
print(finf_index("lasha","h"))


