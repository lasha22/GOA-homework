def switcheroo(s):
    translation_table = str.maketrans('ab', 'ba')
    
    return s.translate(translation_table)
