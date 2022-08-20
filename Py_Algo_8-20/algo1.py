def largest_two(A):
    my_max, second = A[:2]
    #uses slice to assign the first
    #two values to my_max and second

    ops = 0
    # let's count the number of operations

    if my_max < second:
        my_max, second = second, my_max
    
    for idx in range(2, len(A)):
        ops += 1
        if my_max < A[idx]:
            my_max, second = A[idx], my_max
        elif second < A[idx]:
            second = A[idx]
    print("operations", ops)
    return (my_max, second)

two = [1, 2]

three = [1, 7, 4]

rando = [2, 45, 3, 86, 103]

ascending = [1, 2, 3, 4, 8]

desc = [87, 5, 3, 2, 1]

all = [two, three, rando, ascending, desc]

for i in all:
    print("Length of array:", len(i))
    print(largest_two(i))