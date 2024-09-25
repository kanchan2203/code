import java.security.acl.Group;
import java.util.Scanner;

public class assignment1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String Name = scanner.nextLine();
        System.out.print("Enter your age: ");
        int Age = scanner.nextInt();;
        System.out.print("Enter your Blood group: ");
        char BloodGroup = scanner.next().charAt(0);
        String GroupName = "";
        
        if(Age>=20){
            GroupName = "RED";
        } else if(Age>=15){
            GroupName = "BLUE";
        } else if(Age>=10 && Age<15) {
            GroupName = "YELLOW";
        }

        System.out.println("Name: " + Name);
        System.out.println("Age: " + Age);
        System.out.println("Blood Group: " + BloodGroup);
        System.out.println("Your Group Name is: " + GroupName);
}
}