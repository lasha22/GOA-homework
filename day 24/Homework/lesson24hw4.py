def most_frequent_count(numbers):
    count_dict = {}
    for number in numbers:
        if number in count_dict:
            count_dict[number] += 1
        else:
            count_dict[number] = 1
    max_count = max(count_dict.values())
    return max_count

numbers = [1, 1, 1, 1, 3, 4, 5, 6]

print("It happened to me most often:", most_frequent_count(numbers))

