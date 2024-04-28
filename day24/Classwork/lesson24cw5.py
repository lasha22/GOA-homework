def to_jaden_case(string):
    words = string.split()
    jaden_cased_words = []

    for word in words:

        jaden_cased_words.append(word.capitalize())

    return ' '.join(jaden_cased_words)