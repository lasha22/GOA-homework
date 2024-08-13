def get_issuer(card_number):
    card_number_str = str(card_number)  

    card_criteria = {
        "AMEX":    {"prefixes": ["34", "37"], "lengths": [15]},
        "Discover": {"prefixes": ["6011"], "lengths": [16]},
        "Mastercard": {"prefixes": ["51", "52", "53", "54", "55"], "lengths": [16]},
        "VISA":    {"prefixes": ["4"], "lengths": [13, 16]}
    }
    

    for issuer, criteria in card_criteria.items():
        for prefix in criteria["prefixes"]:
            if card_number_str.startswith(prefix):
                if len(card_number_str) in criteria["lengths"]:
                    return issuer
    

    return "Unknown"
