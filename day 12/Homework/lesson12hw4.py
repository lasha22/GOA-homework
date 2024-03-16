#სიაში შეინახეთ მინიმუმ 5 საყვარელი ფილმი. გამოიყენეთ Slicing და  დაბეჭდეთ რამდენიმე კომბინაციით. Bonus (არ არის აუცილებელი): იგივე კომბინაციები დაბეჭდეთ უარყოფითი ინდექსების გამოყენებით.

# Store the favorite movies in a list
favorite_movies = ["Fight club", " Scary Movie", "Batman", "Sen to Chihiro no Kamikakushi", "The Green Mile"]

# Using slicing, print with several combinations
print("First three movies:", favorite_movies[:3])
print("Movies from index 1 to 4:", favorite_movies[1:5])
print("Last two movies:", favorite_movies[3:])
print("Every other movie:", favorite_movies[::2])

print("negative indices for slicing: ")
# Using negative indices for slicing
print("First three movies:", favorite_movies[:-2])
print("Movies from index 1 to 4:", favorite_movies[1:])
print("Last two movies:", favorite_movies[-2:])
print("Every other movie:", favorite_movies[1::2])

