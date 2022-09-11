request_form = {
    "name": "Stuart",
    # "hungry": "on"
}

print(request_form["name"])

hungry = False
if request_form.get("hungry"):
    hungry = True





print("hungry", hungry)
# print("using bracket notation", request_form["hungry"])