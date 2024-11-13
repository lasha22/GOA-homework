import random

def create_groups(students, leaders):
    
    students += leaders
    random.shuffle(students)  
    num_groups = len(leaders)  
    groups = [[] for _ in range(num_groups)]

    for i, student in enumerate(students):
        groups[i % num_groups].append(student)

    return groups


students = [
   "ცოტნე", "გიორგი", "დათო", "ნიკოლოზი", "დემე",
    "დიმიტრი", "მათე", "იოანე", "სანდრო", "გიო",
    "თორნიკე", "ლაშა"   
]
leaders = ["საბა", "ნიკა", "დავით"]

groups = create_groups(students, leaders)

for i, group in enumerate(groups, 1):
    print(f"ჯგუფი {i}: {', '.join(group)}")
