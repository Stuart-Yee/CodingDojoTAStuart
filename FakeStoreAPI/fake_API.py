import requests

class fake_store():
    HEADER = {"content-type": "application/json"}

    @staticmethod
    def get_categories():
        return requests.get("https://fakestoreapi.com/products/categories", headers=fake_store.HEADER).json()

    @staticmethod
    def get_by_category(category):
        url = f"https://fakestoreapi.com/products/category/{category}"
        response =  requests.get(url, headers=fake_store.HEADER).json()
        if len(response) > 0:
            return response
        else:
            print(f"Could not find anything for {category}")
            return None

print(fake_store.get_categories())
print(fake_store.get_by_category("jewelery"))
print(fake_store.get_by_category("nuclear_reactors"))
