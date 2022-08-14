first_list = [1, 3, 4, 5, 6, 7]

# new_list = []
# for x in first_list:
#     if x % 2 == 1:
#         new_list.append(x)

new_list = [x for x in first_list if x % 2 == 1]

print(new_list)