import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 3, 6, 2, 8, 2};

        // Using HashSet to remove duplicates
        Set<Integer> uniqueElements = new HashSet<>();
        for (int num : arr) {
            uniqueElements.add(num);
        }

        // Printing unique elements
        System.out.println("Array after removing duplicates: " + uniqueElements);
    }
}
