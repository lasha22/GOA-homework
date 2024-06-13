About_me = {
    "name": "lasha",
    "surname": "taziashvili",
    "age": "16"
}

to_join = About_me.values()
values_joined = " ".join([str(i) for i in to_join])

print(values_joined)

