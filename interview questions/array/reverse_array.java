package array;

import java.util.Arrays;

public class reverse_array {
    public static void main(String[] args) {
        int []arr={1,2,3,4,5,6};
        int[]reverse_array=new int[arr.length];

        for (int i=0;i<arr.length;i++){

            reverse_array[i]=arr[arr.length-1-i];
        }
        System.out.print("reversed_arr:"+Arrays.toString(reverse_array));
    }
    
}
