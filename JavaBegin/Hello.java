public class Hello {

    public static void main(String[] args){
        System.out.println("Yo, " + args[0]);
        for (String element : args){
            System.out.println(element); //equivalent to print() in Python
        }
    }
    
}

// for element in args:
//     print(element)
