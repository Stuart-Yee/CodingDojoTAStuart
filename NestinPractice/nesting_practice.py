students =[
    {'first_name': 'Michael', 'last_name': 'Jordan', 'position': 'forward'},
    {'first_name': 'Charles', 'last_name': 'Barclay', 'position': 'defense'},
    {'first_name': 'Kobe', 'last_name': 'Bryant', 'position': 'forward'},
    {'first_name': 'Magic', 'last_name': 'Johnson', 'position': 'forward'}
    ]

def iteratete_students(students):
    for v in students:
        print_str = ""
        for key, val in v.items():
            print_str += f"{key} - {val}, "
        print(print_str[:-2])



iteratete_students(students)