"""
Generators are functions that have a yield statement in a loop
instead of a return statement
"""
def my_gen(x):
    y = 0
    while y < x:
        yield y
        y+=1

# Generators can be called within a for loop
for x in my_gen(10):
    print(x)

# Generators can be used to create lists
y = list(my_gen(5))
print(y)

# The next() function will grab the next value
# in a generator. The app keeps track of where the
# generator is iterating at.
j = my_gen(19)
print(next(j))
print(next(j))
print(next(j))
print(next(j))