def manual_count(collection, item_to_count):
    count = 0

    for item in collection:
        if item == item_to_count:
            count = count + 1
    return count

names = ["lizi", "lasha", "nana", "lizi"]

print(manual_count(names,"lizi"))