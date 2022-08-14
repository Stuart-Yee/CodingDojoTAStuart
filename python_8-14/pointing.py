x = [1, 2, 3]
y = x

#deep copy if you don't want to mutate the original list or array

print("beginning list", x)

y.append(7)

print("appended y:", y)
print("and now x:", x)

# a = 3
# b = a
# print("A and B")
# print("b:", b)
# print("making A 5")
# a = 5
# print("b again:", b)

from oop_methods import Car

print(Car.get_available_colors())