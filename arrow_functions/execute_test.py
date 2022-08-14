




# from distutils.util import execute


# def server_py(param):
#     print(param)

# my_var = "server_py"

# exec(f"my_func = {my_var}")

# my_func("juice")

# def myo():
#     retvalue = ""
#     exec("retvalue = 'potato'")
#     return retvalue

# print(myo())

Blah = "noodle juice"

def extract_value(my_str):
    exec(f"retvalue = {my_str}")
    return retvalue

print(extract_value("Blah"))