def count_sheep(sheep_list):
    
    return sum(1 for sheep in sheep_list if sheep is True)


sheep_list = [
    True, True, True, False,
    True, True, True, True,
    True, False, True, False,
    True, False, False, True,
    True, True, True, True,
    False, False, True, True
]

