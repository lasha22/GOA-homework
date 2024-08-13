def  reverse_words(text):
    x = text.split(" ")
    listn = []

    for i in x:
       listn.append(i[::-1])
       return " ".join(listn)