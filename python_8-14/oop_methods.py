class Car():
    num_cars = 0
    cars_goal_amount = 5

    def __init__(self, model, color, mileage=0):
        self.model = model
        self.mileage = mileage
        self.color = color
        Car.num_cars += 1

    def show_mileage(self):
        print(f"This {self.model} has {self.mileage} miles")
        print(f"By the way, there are {Car.num_cars - 1} other cars on the lot")
        # print("(Old way to format strings)This is a %s and there are %d other cars" % (self.model, Car.num_cars-1))
        return self.mileage


    def paint(self, color):
        self.color = color
    
    def drive(self, miles):
        self.mileage += miles

    @classmethod
    def get_cars_amount(cls):
        print(f"There are {cls.num_cars} cars on the lot.")
        if cls.num_cars >= cls.cars_goal_amount:
            print("That's enough cars!")
            return None
        else:
            print("Better add another Toyota to the lot")
            return cls("Toyota", "White")

    @classmethod
    def buy_tesla(cls):
        print("Buying a new red Tesla")
        return cls("Tesla", "Red")

    @classmethod
    def buy_ford(cls):
        # call the database
        # parse the database information
        # use cls to construct an object from the db information
        print("Buying a new black Ford truck")
        return cls("Ford Truck", "Black")

    @staticmethod
    def get_available_colors():
        return["red", "black", "White", "gray"]

if __name__ == "__main__":

    my_car = Car("Honda CRV", "Gray", 40000)
    new_car = Car("Corvette", "red")


    my_car.show_mileage()

    new_car.show_mileage()
    print("You can get these colors")
    for color in Car.get_available_colors():
        print(color)



# Car.buy_tesla()
# Car.buy_ford()

# for i in range(5):
#     car = Car.get_cars_amount()
#     if car:
#         car.show_mileage()
#     else:
#         print("Didn't create a new car")

class stock_price_api_connector():

    @staticmethod
    def get_prices():
        return #insert API call

class Coffee_cup():
    def __init__(self, bean) -> None:
        self.bean = bean

class Bean():
    pass

class Order():
    def __init__(self, amount, items) -> None:
        self.amount = amount
        self.items = items

class Vendor_order(Order):
    def __init__(self, amount, items, vendor) -> None:
        super().__init__(amount, items)
        self.vendor = vendor

class Employee():
    pass

class Payment_Stream():
    pass

class Customer_WIFI_Configuration():
    pass

class Reward():
    def __init__(self, desc, active, exp_date) -> None:
        self.desc = desc
        self.active = active
        self.exp_date = exp_date

    def deactivate_reward(self):
        self.active = False

