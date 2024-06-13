def user_contacts(data):
    contacts = {}
    for user in data:
        name = user[0]
        zipcode = user[1] if len(user) == 2 else None
        contacts[name] = zipcode
    return contacts