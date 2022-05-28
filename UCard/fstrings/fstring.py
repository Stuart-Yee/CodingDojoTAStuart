a_word = "Steps"
a_number = 23
a_different_word = "pineapple"
print(f"The word of the day is {a_word}. My favorite number is {a_number}")

print("The word of the day is " + a_word + ". My favorite number is "+str(a_number))

print("The word of the days is", a_word, "My favorite number is", a_number)

print("The word of the day is %s. My favorite number is %d and I like to eat %s" % (a_word, a_number, a_different_word))

the_setence = "The word of the days is", a_word, "My favorite number is", a_number
my_data_structure = (1, False, "banana")
print(the_setence)
print(my_data_structure)

# is a list? no, not quite
# is a dictionary? nope
# IT IS A TUPLE
#
