def correct(s):
    
    translation_table = str.maketrans('501', 'SOI')
    
    
    corrected_text = s.translate(translation_table)
    
    return corrected_text
