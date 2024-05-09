def manual_len(collection):
    count = 0
    for item in collection:
        count = count + 1
    return count

print(manual_len(["Lasha","lizi", 5, True, "Nana"]))