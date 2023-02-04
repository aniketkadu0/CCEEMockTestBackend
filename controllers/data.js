let data = [
{
    moduleName : "Concepts of Programming and Operating System",
    questions : [
        {
            id : 1,
            question : `What is the output of the below code snippet: 
<pre class="language-java"><code>
int marks = 29;
if ( marks &gt; 29 );
    System.out.println("PASS");
System.out.println("RANK");
</code></pre>`,
            options : ["RANK", "PASS", "PASS RANK", "Compiler error"],
            answer : "RANK"
        },
        {
            id : 2,
            question : `What is the output of the below code snippet:
<pre class="language-java"><code>
int a = 4, b = 6, c = 8;
boolean d = a &gt; 5 &amp;&amp; b &gt; 5 &amp;&amp; c++ &lt; 10;
System.out.println(c);
</code></pre>`,
            options : ["8", "9", "10", "Compiler error"],
            answer : "8"
        },
        {
            id : 3,
            question : `What is the output of the below code snippet:
<pre class="language-java"><code>
int points = 6;
switch (points) {
case 6: ;
case 7: System.out.println("Seven"); break;
case 8: ;
case 9: System.out.println("Nine"); break;
case 10: System.out.println("Ten"); break;
default: System.out.println("None");
}
</code></pre>`,
            options : ["Seven", "Nine", "Ten", "None"],
            answer : "Seven"
        },
        {
            id : 4,
            question : `What is the output of the below code snippet:
<pre class="language-java"><code>
class selection_statements 
{
    public static void main(String args[])
    {
        int var1 = 5; 
        int var2 = 6;
        if ((var2 = 1) == var1)
            System.out.print(var2);
        else 
            System.out.print(++var2);
    } 
}
</code></pre>`,
            options : ["1","2","3","4"],
            answer : "2"
        },
        {
            id : 5,
            question : `What is the output of the below code snippet:
<pre class="language-java"><code>
public class Test{
    public static void main(String args[]){
            int[] x = { 120, 200, 016 };
            for(int i = 0; i &lt; x.length; i++)   
            System.out.println(x[i] + " ");      
    }
}
</code></pre>`,
            options : ["120 200 16", "120 200 14", "120 200 016", 
            "016 is a compile error. It should be written as 16."],
            answer : "120 200 14"
        },
        {
            id : 6,
            question : "When an array is passed to a method, what does the method receive?",
            options : ["The reference of the array", "A copy of the array", 
                        "Length of the array", "Copy of first element"],
            answer : "The reference of the array"
        },
        {
            id : 7,
            question : "To copy the content of a filename1.txt to filename2.txt in the same directory, enter",
            options : ["copy filename1.txt filename2.txt","cp filename1.txt filename2.txt",
                        "cp filename1.txt >> filename2.txt", "cp filename1.txt << filename2.txt"],
            answer : "cp filename1.txt filename2.txt"
        },
        {
            id : 8,
            question : "Process control block has _________",
            options : ["Process State","Process Number","Program Counter","All of the above"],
            answer : "All of the above"
        },
        {
            id : 9,
            question : "In linux which command will give read, write, and execute permissions for everyone?",
            options : ["chmod all foldername","chmod 644 foldername","chmod 700 filename","chmod 777 filename"],
            answer : "chmod 777 filename"
        },
        {
            id : 10,
            question : "In bash script to compare if one number is greater than or equal to a number which expression will be used?",
            options : ["[ n1 -ge n2 ]","[ n1 -gt n2 ]","[ n1 > n2 ]","All of the above"],
            answer : "[ n1 -ge n2 ]"
        },
        {
            id : 11,
            question : "If a page number is not found in the TLB, then it is known as a ____________",
            options : ["TLB miss", "Buffer miss", "TLB hit", "All of the mentioned"],
            answer : "TLB miss"
        },
        {
            id : 12,
            question : "Which signal is used for immediate termination of a process?",
            options : ["SIGTERM","SIGKILL","SIGINT","None of the above"],
            answer : "SIGKILL"
        },
        {
            id : 13,
            question : `Consider the set of 4 processes whose arrival time and burst time are given below-
                        <img class = 'mt-3' src='https://cceestudy.online/images/tests/fcfs problem.jpg' style='width : 100%;' />
                        If the CPU scheduling policy is FCFS, calculate the average waiting time and average turn around time.`,
            options : ["14.25, 8.75","10, 7","22.5, 12.5","8.7, 6.7"],
            answer : "14.25, 8.75"
        },
        {
            id : 14,
            question : "Each entry in a translation lookaside buffer (TLB) consists of ____________",
            options : ["key","value","bit value","constant"],
            answer : "key"
        },
        {
            id : 15,
            question : "Physical memory is broken into fixed-sized blocks called ________",
            options : ["pages","frames","backing store","none of the mentioned"],
            answer : "frames"
        },
        {
            id : 16,
            question : "The technique that increases the system's productivity",
            options : ["multiprogramming","multitasking","multitasking","single-programming"],
            answer : "multiprogramming"
        },
        {
            id : 17,
            question : "What is Interprocess communication?",
            options : ["allows processes to communicate and synchronize their actions when using the same address space",
                       "allows processes to communicate and synchronize their actions",
                        "allows the processes to only synchronize their actions without communication",
                        "none of the mentioned"],
            answer : "allows processes to communicate and synchronize their actions"
        },
        {
            id : 18,
            question : `The following C program is exexuted on a Unix/Linux system :
<pre class="language-c"><code>
int main(){
    int i;
    for( i = 0 ; i &lt; 10 ; i++) {
        if( i % 2 == 0 ) fork();
    }
    return 0;
}
</code></pre>
The total number of child processes created is _________`,
            options : ["0","31","10", "99"],
            answer : "31"
        },
        {
            id : 19,
            question : "In which of the following directory does the configuration files are present?",
            options : ["/bin/", "/root/", "/etc/", "/dev/"],
            answer : "/etc/"
        },
        {
            id : 20,
            question : "To display all running processes for all users on your machine, including their usernames, and to show processes not attached to your terminal, which command is used?",
            options : ["ps","ls -la","ps aux","ps -a"],
            answer : "ps aux"
        },
        {
            id : 21,
            question : "What is the entry point of a program in Java?",
            options : ["main() method","The first line of code",
                        "Last line of code","main class"],
            answer : "main() method"
        },
        {
            id : 22,
            question : `Number of levels of page table = 1,
                        TLB access time = 10ns,
                        Main memory access time = 50ns,
                        What is the effective memory access time (in ns) if 
                        the TLB hit ratio is 90% and there is no page fault ?`,
            options : ["54","60","65","75"],
            answer : "65"
        },
        {
            id : 23,
            question : `In ___________ memory binding are changed in such manner that all free memory area
                        can be merged to form a single free memory.`,
            options : ["Memory Paging", "Memory Swapping",
                        "Memory Compaction", "Memory Segmentation"],
            answer : "Memory Compaction"
        },
        {
            id : 24,
            question : `Which set of necessary conditions causes a 'deadlock' in an
                         operating system?`,
            options : ["Blocking send, race condition, hold and wait and RAM overflow",
                        "Blocking send, race condition, cache incoherency and RAM overflow",
                        "Mutual exclusion, no pre-emption, hold and wait, and circular wait",
                        "Mutual exclusion, race condition, cache incoherency and RAM overflow"],
            answer : "Mutual exclusion, no pre-emption, hold and wait, and circular wait"
        },
        {
            id : 25,
            question : `Given a set of four, two resources with two units, each. The following resources allocation graph exits at a point in time:
                        <img class = 'mt-3' src='https://cceestudy.online/images/tests/deadlock.png' style='width : 100%;' />
                        The graph indicates:`,
            options : ["Cycle and deadlock", "No cycle but deadlock", "Neither cycle nor deadlock", "Cycle but no deadlock"],
            answer : "Cycle but no deadlock"
        },
        {
            id : 26,
            question : "Which of these is a type of variable in Java?",
            options : ["Instance Variable", "Local Variable", "Static Varaible", "All of these"],
            answer : "All of these"
        },
        {
            id : 27,
            question : `A process whose parent process no more exists i.e. either finished or 
                        terminated without waiting for its child process to 
                        terminate is called an ________`,
            options : ["Child process","Zombie process","Daemon process","Orphan process"],
            answer : "Orphan process"
        },
        {
            id : 28,
            question : `Most operating systems (including UNIX, Linux and Windows)
                        identify processes according to unique _________`,
            options : ["program counter", "process state", "process number", "process identifier"],
            answer : "process identifier"
        },
        {
            id : 29,
            question : "Memory fragmentation can be defined as",
            options : ["The existence of usable area in the memory of computer system",
                        "The existence of unusable area in the memory of computer system",
                        "The existence of unreachable area in the memory of computer system",
                        "None of the above"],
            answer : "The existence of unusable area in the memory of computer system"
        },
        {
            id : 30,
            question : `Process A is waiting for the result produced by process B. 
                        Also, process A has higher priority than B. 
                        So the OS prefers process A and refuses to give CPU time to
                        B. Therefore, both A and B are stuck. What is this scenario called?`,
            options : ["Starvation","Deadlock","Livelock","Cycle"],
            answer : "Starvation"
        },
        {
            id : 31,
            question : "The primary difference between user-level threads and kernel threads is ______",
            options : ["User level threads do not use OS services via system calls, whereas kernel threads require system calls.",
                        "User level threads are independent of each other, whereas kernel threads can write into each other's memory space.",
                        "User level threads require memory management where kernel threads do not.",
                        "None of above."],
            answer : "User level threads do not use OS services via system calls, whereas kernel threads require system calls."
        },
        {
            id : 32,
            question : "Scheduling of threads are done by:",
            options : ["Input","Output","Operating System","Main Memory"],
            answer : "Operating System"
        },
        {
            id : 33,
            question : "_________ refer to the integer variables that are primarily used to solve the critical section problem via combining two of the atomic procedures, wait and signal, for the process synchronization.",
            options : ["Mutex", "Signals","Semaphores","Threads"],
            answer : "Semaphores"
        },
        {
            id : 34,
            question : `A memory page containing a heavily used variable that was initialized
                        very early and is in constant use is removed, then the page replacement
                        algorithm used is ____________`,
            options : ["LRU", "LFU", "FIFO", "None of the mentioned"],
            answer : "FIFO"
        },
        {
            id : 35,
            question : `Consider the page reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3 with 4 page frames. 
                        Find out the number of page faults using LRU (Lease recently used) Page Replacement Algorithm.`,
            options : ["10","8","6","7"],
            answer : "6"
        },
        {
            id : 36,
            question : "Multithreading on a multi - CPU machine ___________",
            options : ["decreases concurrency","increases concurrency",
                        "doesn't affect the concurrency","can increase or decrease the concurrency"],
            answer : "increases concurrency"
        },
        {
            id : 37,
            question : "What is interprocess communication?",
            options : ["communication within the process", "communication between two process",
                        "communication between two threads of same process", "none of the mentioned"],
            answer : "communication between two process"
        },
        {
            id : 38,
            question : `A process terminates when it finishes executing its final statement
                        and asks the operating system to delete it by using the  ____________ system call.`,
            options : ["wait()" , "exit()", "fork()", "exit()"],
            answer : "exit()"
        },
        {
            id : 39,
            question : "Calculate the number of bits required in the address for memory having size of 16 GB. Assume the memory is 4-byte addressable.",
            options : ["32 bits", "16 bits", "128 bits", "64 bits"],
            answer : "32 bits"
        },
        {
            id : 40,
            question : "What is Portability offered by Java language?",
            options : ["Small code size easy to carry occupying less disk space",
                        "Generating suitable Byte Code for each machine by the Compiler",
                        "Ability to run the Byte on different machines producing the same behaviour and output",
                        "Java does not actually provide portability"],
            answer : "Ability to run the Byte on different machines producing the same behaviour and output"
        }
    ]
},
{
    moduleName : "Object Oriented Programming with Java",
    questions : [
        {
            id : 1,
            question : `Which of the following statements is/are true regarding JAVA? <br>
                        A. Constants that cannot be changed are declared using the 'Static' keyword. <br>
                        B. A class can only inherit one class that can implement multiple interfaces.`,
            options : ["A is true", "B is true", "Both (A) and (B) are true", 
                        "Neither (A) nor (B) is true"],
            answer : "B is true"
        },
        {
            id : 2,
            question : "Which package contains the String class",
            options : ["java.util package", "java.string package", "java.lang package", "java.io package"],
            answer : "java.lang package"
        },
        {
            id : 3,
            question : `What will be the output of following snippet :
<pre class="language-java"><code>
public class Program {
    public static void main(String args[]){
        String s1 = new String("cceestudy");
        String s2 = s1;
        s1 = "cceestudy";
        if( s1 == s2)
        System.out.println("Equal");
        else
        System.out.println("Not Equal");
    }
}</code></pre>            
`,
            options : ["Equal", "Not Equal", "Compile time error", "Runtime error"],
            answer : "Not Equal"
        },
        {
            id : 4,
            question : `What will be the output of following snippet :
<pre class="language-java"><code>
public class Program {
    public static void main ( String[] args ) {
        System.out.print("1");
        try {
            System.out.print("2");
            System.exit(0);
        } finally {
            System.out.print("3");
        }
    }
}
</code></pre>`,
            options : ["1", "123", "Compile time error", "12"],
            answer : "12"
        },
        {
            id : 5,
            question : "What is the extension of compiled java classes?",
            options : [".class", ".java", ".exe", ".txt"],
            answer : ".class"
        },
        {
            id : 6,
            question : "To access a protected variable or method of a Class outside the package, you need to _____________ in Java.",
            options : ["Create an instance and call the protected variable or method", 
            "Create a Subclass by extending Class that have protected variable or method and call the same", 
            "Both A & B", 
            "Call the protected variable or method directly using Class name"],
            answer : "Create a Subclass by extending Class that have protected variable or method and call the same"
        },
        {
            id : 7,
            question : `What will be the output for given statement?
<pre class="language-java"><code>
class Program {
    int i = 10;
    
    public void method1(){
        System.out.println("Value of i : " + i);
    } 
    
    public static void method2(){
        int i = 20;
        method1();
    }
}

public class MainClass{
    public static void main (String args[]){
        Program.method2();
    }
}</code></pre>`,
            options : ["Value of i : 20", "Value of i : 10", "Compile time error", "method2() can't called using Class name"],
            answer : "Compile time error"
        },
        {
            id : 8,
            question : "Which keyword is used to explicitly throw an exception",
            options : ["try", "throwing", "catch", "throw"],
            answer : "throw"
        },
        {
            id : 9,
            question : "What is Math.floor(3.6)?",
            options : ["3.0", "3", "4", "4.0"],
            answer : "3.0"
        },
        {
            id : 10,
            question : "Which is the correct option for creating thread?",
            options : [`<pre class="language-java"><code>
class Program extends Runnable {
    public void run() {
        System.out.println("thread is running...");
    }

    public static void main(String args[]) {
        Program obj = new Program();
        Thread t1 = new Thread(obj);
        t1.start();
    }
}
</code></pre>`,
`<pre class="language-java"><code>
class Program implements Runnable {
    public void run() {
        System.out.println("thread is running...");
    }

    public static void main(String args[]) {
        Program obj = new Program();
        Thread t1 = new Thread(obj);
        t1.start();
    }
}
</code></pre>`,
`<pre class="language-java"><code>
class Program implements Runnable {
    public void run() {
        System.out.println("thread is running...");
    }

    public static void main(String args[]) {
        Program obj = new Program();
        Thread t1 = new Thread();
        t1.start();
    }
}
</code></pre>`,
`<pre class="language-java"><code>
class Program implements Runnable {
    public void start() {
        System.out.println("thread is running...");
    }

    public static void main(String args[]) {
        Program obj = new Program();
        Thread t1 = new Thread(obj);
        t1.start();
    }
}
</code></pre>`
        ],
            answer : `<pre class="language-java"><code>
class Program implements Runnable {
    public void run() {
        System.out.println("thread is running...");
    }

    public static void main(String args[]) {
        Program obj = new Program();
        Thread t1 = new Thread(obj);
        t1.start();
    }
}
</code></pre>`
        },
        {
            id : 11,
            question : "Runtime polymorphism is also known as ___________",
            options : ["Static binding", "Early binding", "Dynamic method dispatch", "Method overloading"],
            answer : "Dynamic method dispatch"
        },
        {
            id : 12,
            question : `Consider the following code snippet in Java:
<pre class="language-java"><code>
class Employee {

}

public class MainClass{
    public staic void main (String args[]){
        Employee obj1 = new Employee();
        Employee obj2 = new Employee();
        Employee obj3 = obj2;
        Employee obj4 = obj1;
    }
}
</code></pre>
How many reference variables and objects are created? 
            `,
            options : ["4,4", "3,4", "4,2", "2,2"],
            answer : "4,2"
        },
        {
            id : 13,
            question : "What is the use of final keyword in Java?",
            options : ["When a class is made final, a subclass of it can not be created.", 
            "When a method is final, it can not be overridden.", 
            "When a method is final, it can not be overridden.", 
            "All of the above"],
            answer : "All of the above"
        },
        {
            id : 14,
            question : `What will be the output?
<pre class="language-java"><code>
interface ClassA {
    public void method();
}

class ClassOne{
    public void method() {
        System.out.println("Class One method");
    }
}

class ClassTwo extends ClassOne implements ClassA {
    public void method() {
        System.out.println("Class Two method");
    }
}

public class Test extends Two {
    public static void main(String[] args) {
        ClassA a = new ClassTwo();
        a.method();
    }
}
</code></pre>`,
            options : ["Class One method", "Compilation Error", "Class Two method", "None of these"],
            answer : "Class Two method"
        },
        {
            id : 15,
            question : "In java, ________ can only test for equality, where as ________ can evaluate any type of the Boolean expression.",
            options : ["switch, if", "if, switch", "if, break", "continue, if"],
            answer : "switch, if"
        },
        {
            id : 16,
            question : "Which one is not unchecked exception",
            options : ["NumberFormat Exception", "IndexOutOfBound Exception", "Arithmatic Exception", "FileNotFound Exception"],
            answer : "FileNotFound Exception"
        },
        {
            id : 17,
            question : "System class is defined in _________",
            options : ["java.lang package", "java.util package", "java.awt.package", "None of these"],
            answer : "java.lang package"
        },
        {
            id : 18,
            question : "What is the size of double data type in java?",
            options : ["8 bytes", "4 bytes", "16 bytes", "2 bytes"],
            answer : "8 bytes"
        },
        {
            id : 19,
            question : "Which of these class represents mutable character sequence?",
            options : ["String", "StringBuffer", "StringBuilder", "Both StringBuffer & StringBuilder"],
            answer : "Both StringBuffer & StringBuilder"
        },
        {
            id : 20,
            question : `What will be the output?
<pre class="language-java"><code>
import java.util.*;

public class Test {
    public static void main(String[] args) {
        LinkedHashSet<String> list = new LinkedHashSet<>();
        list.add("CCEE");
        list.add("study");
        list.add("online");
        list.add("CCEE");
        list.add("online");

        for(String str : list){
            System.out.print(str + " ");
        }
    }
}
</code></pre>`,
            options : ["CCEE study online CCEE online", "study", "CCEE study online", "CCEE study online CCEE"],
            answer : "CCEE study online"
        },
        {
            id : 21,
            question : "Which of the following class we can used to read the data in the form of character from text file?",
            options : ["FileWriter", "FileReader", "FileInputStream", "FileOutputStream"],
            answer : "FileReader"
        },
        {
            id : 22,
            question : `What will be the output of the following Java code?
<pre class="language-java"><code>  
enum Color
{
RED, WHITE, GREEN, BLUE
};
System.out.println(Color.WHITE.ordinal());          
</code></pre>`,
            options : ["0", "1", "2", "3"],
            answer : "1"
        },
        {
            id : 23,
            question : "Which is valid declaration of a float?",
            options : ["float f = 1F;", "float f = 1.0;", "float f = `1`;", "float f = 1.0d;"],
            answer : "float f = 1F;"
        },
        {
            id : 24,
            question : "Which component is used to compile, debug and execute the java programs?",
            options : ["JRE", "JIT", "JDK", "JVM"],
            answer : "JDK"
        },
        {
            id : 25,
            question : "What is Ahead of Time Compiler in Java?",
            options : ["Ahead of time compiler compiles java files as and when you type and save.",
                        "Ahead of time compiler turns byte code to executable code line by line based on requirement.",
                        "Ahead of time compiler is a replacement for JIT compiler to translate all byte code to a single executable file or code to run the program fast and efficient.",
                        "None of the above"],
            answer : "Ahead of time compiler is a replacement for JIT compiler to translate all byte code to a single executable file or code to run the program fast and efficient."
        },
        {
            id : 26,
            question : "The synchronized keyword is applicable for whom?",
            options : ["Variables and Methods", "Methods and Classes", "Variables and Classes", "Methods and Blocks"],
            answer : "Methods and Blocks"
        },
        {
            id : 27,
            question : `You need to store elements in a collection that guarantees that no duplicates are 
            stored and all elements can be accessed in natural order. 
            Which interface provides that capability?`,
            options : ["java.util.Map", "java.util.Set", "java.util.List", "java.util.Collection"],
            answer : "java.util.Set"
        },
        {
            id : 28,
            question : "How can you serialize an object?",
            options : ["You have to make the class of the object implement the interface Serializable.",
             "You must call the method serializeObject() on the object.", 
             "You should call the static method serialize(Object obj) from class Serializer, with as argument the object to be serialized.", 
             "You don't have to do anything, because all objects are serializable by default."],
            answer : "You have to make the class of the object implement the interface Serializable."
        },
        {
            id : 29,
            question : `What is the output of the below Java Program?
<pre class="language-java"><code>
public class TestingConstructor{
    void TestingConstructor(){
        System.out.println("USA");
    }

    TestingConstructor(){
        System.out.println("INDIA");
    }

    public static void main(String[] args){
        TestingConstructor tc = new TestingConstructor();
    }
}
</code></pre>`,
            options : ["INDIA", "USA", "USA INDIA", "INDIA USA"],
            answer : "INDIA"
        },
        {
            id : 30,
            question : "Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
            options : ["java.lang.String", "java.lang.Double", "java.lang.StringBuffer", "java.lang.Character"],
            answer : "java.lang.StringBuffer"
        },
        {
            id : 31,
            question : `<pre class="language-java"><code>  
class Person 
{
    public Person x;
    public static void main(String [] args) 
    {
        Person x2 = new Person();  /* Line 6 */
        Person x3 = new Person();  /* Line 7 */
        x2.x = x3;
        x3.x = x2;
        x2 = new Person();
        x3 = x2; /* Line 11 */
        doComplexStuff();
    }
}         
</code></pre>
after line 11 runs, how many objects are eligible for garbage collection?`,
            options : ["0", "1", "2", "3"],
            answer : "2"
        },
        {
            id : 32,
            question : "Inheritance represents the _________",
            options : ["HAS-A relationship", "AND relationship", "IS-A relationship", "All of the above"],
            answer : "IS-A relationship"
        },
        {
            id : 33,
            question : "Object class have following methods :",
            options : ["equals()", "hashCode()" ,"toString()", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 34,
            question : `What is the output of the below Java Program?
<pre class="language-java"><code>  
public class Bank 
{
    private int interestRate;

    public Bank(){

    }

    public Bank(int interestRate){
        this.interestRate = 10;
    }

    public static void main(String [] args) 
    {
        Bank obj = new Bank();
        System.out.println(obj.interestRate);
    }
}         
</code></pre>`,
            options : ["10", "0", "10%", "10/100"],
            answer : "0"
        },
        {
            id : 35,
            question : `What is the output of the below Java Program?
<pre class="language-java"><code>  
public class Main {
    public static void main(String[] args) {
        int arr[] = {'a','b','c','d','e'};  
        for(int i = 0 ; i<5; i++){ 
                System.out.print(" " + arr[i]);
        }
    }
}      
</code></pre>`,
            options : ["a b c d e", "abcde", "97 98 99 100 101", "65 66 67 68 69"],
            answer : "97 98 99 100 101"
        },
        {
            id : 36,
            question : "Which statement is true about a static nested class?",
            options : ["You must have a reference to an instance of the enclosing class in order to instantiate it.",
                        "It does not have access to nonstatic members of the enclosing class.",
                        "It's variables and methods must be static.", 
                        "It must extend the enclosing class."],
            answer : "It does not have access to nonstatic members of the enclosing class."
        },
        {
            id : 37,
            question : "Where an object of a class get stored?",
            options : ["Heap", "Stack", "Disk", "File"],
            answer : "Heap"
        },
        {
            id : 38,
            question : "Which mechanism helps in the process of naming as well as visibility control of the classes and their content?",
            options : ["Packages", "Interfaces", "Object", "Class"],
            answer : "Packages"
        },
        {
            id : 39,
            question : "_________ used to remove all the elements from the ArrayList.",
            options : ["removeAll()", "clear()", "deleteAll()", "remove()"],
            answer : "removeAll()"
        },
        {
            id : 40,
            question : "What is used to get class name in the reflection?",
            options : ["getClass().getName()", "getClass().getFields()", 
            "getClass().getDeclaredFields()", "new getClass()"],
            answer : "getClass().getName()"
        }
    ]
},
{
    moduleName : "Algorithms and Data Structures (Using Java)",
    questions : [
        {
            id : 1,
            question : "The time complexity of the binary search algorithm is ",
            options : ["O(logn)", "O(nlogn)", "O(n)", "O(n^2)"],
            answer : "O(logn)"
        },
        {
            id : 2,
            question : `What is the time comlexity of following code : 
<pre class="language-java"><code>
for(int i = n/2; i <= n; i++){
    for( int j = 1; j <= n; j = j * 2 ){
        System.out.println("Hello, World!");
    }
}
</code></pre>`,
            options : ["O(n^2)", "O(n)", "O(nlogn)", "O(n/2)"],
            answer : "O(nlogn)"
        },
        {
            id : 3,
            question : "The postfix form of the expression (A+B)*C+(D-E)/F+G",
            options : ["ABC+*DE-F+G/+", "A+BC+*DE-F+G+/", "AB+C*DE-F/+G+", "AB+C*DE/F-+G+"],
            answer : "AB+C*DE-F/+G+"
        },
        {
            id : 4,
            question : "Which of the following statement is not true about the doubly linked list?",
            options : ["We can traverse in both the directions", 
            "It requires extra space", 
            "Implementation of doubly linked list is easier than the singly linked list", 
            "It stores the addresses of the next and the previous node"],
            answer : "Implementation of doubly linked list is easier than the singly linked list"
        },
        {
            id : 5,
            question : "If several elements are competing for the same bucket in the hash table, what is it called?",
            options : ["Diffusion", "Replication", "Collision", "Duplication"],
            answer : "Collision"
        },
        {
            id : 6,
            question : " The number of edges from the root to the node is called __________ of the tree.",
            options : ["Height", "Depth", "Length", "Width"],
            answer : "Depth"
        },
        {
            id : 7,
            question : `What does method1 do in following code : 
<pre class="language-java"><code>
class Node {
    int item; 
    Node next; 
    
    public Node (int item) {
        this.item = item;
        this.next = null;
    }
}
public class SinglyLinkedList {  
    Node head;

    public void insertAtEnd(int item) {
        Node temp = new Node (item); 
        if(head == null)
        head = temp;
        else {
            Node curr = head;
            while(curr.next != null){
                curr = curr.next;
            }
            curr.next = temp;
        }
    }
}   
</code></pre>`,
            options : ["Inserting node at end", "Inserting node at beginning", "Deleting node at end", "Deleting node at beginning"],
            answer : "Inserting node at end"
        },
        {
            id : 8,
            question : `Consider the stack shown below: <br>
           ------------------------------------------------------- <br>
           |  25  |  60  |  34  |  7  |  9  |  54  |  76  |  81  |  <-- Top <br>
           -------------------------------------------------------  <br>
            After performing the following operations in sequence, which value will 
            be at the top of the stack ?
            pop, pop, push 55, pop, pop, push 12, push 48, pop, pop, pop`,
            options : ["48", "76", "9", "7"],
            answer : "7"
        },
        {
            id : 9,
            question : " The spanning tree of connected graph with 10 vertices contains",
            options : ["9 edges", "10 edges", "11 edges", "11 vertices"],
            answer : "9 edges"
        },
        {
            id : 10,
            question : `Which of the below diagram is following AVL tree property? <br>
            i. <img class = 'mt-3' src='https://cceestudy.online/images/tests/avl1.jpg' style='width : 100%;' />
            ii. <img class = 'mt-3' src='https://cceestudy.online/images/tests/avl2.jpg' style='width : 100%;' />`,
            options : ["only i", "only ii", "both i & ii", "None of the above"],
            answer : "both i & ii"
        },
        {
            id : 11,
            question : "What is taking a complex problem and breaking it down into a series of small more manageable problems called?",
            options : ["Decomposition", "Abstraction", "Pattern Recognition", "Algorithms"],
            answer : "Decomposition"
        },
        {
            id : 12,
            question : `The keys 1, 3, 12, 4, 25, 6, 18, 20, 8 are inserted
            into empty hash table of length 10 using open addressing with hash
            function h(i) = i^2 mod 10 and linear probing,
            After adding all keys, which key will be at index 7?`,
            options : ["6", "12", "18", "1"],
            answer : "6"
        },
        {
            id : 13,
            question : `Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, 
            which of the following are TRUE? <br>
            I. Quicksort runs in Θ(n2) time <br>
            II. Bubblesort runs in Θ(n2) time <br>
            III. Mergesort runs in Θ(n) time <br>
            IV. Insertion sort runs in Θ(n) time`,
            options : ["I and II only", "I and III only", "II and IV only ", "I and IV only"],
            answer : "I and IV only"
        },
        {
            id : 14,
            question : "Algorithm can be represented as",
            options : ["Flowchart", "Pseudocode", "All of above", "None"],
            answer : "All of above"
        },
        {
            id : 15,
            question : `Find the MST for below figure and List order in which 
            the edged are added in MST using Kruskals algorithm.
            <img class = 'mt-3' src='https://cceestudy.online/images/tests/graph.jpg' style='width : 100%;' />`,
            options : ["A-C, B-D, C-D, D-T, S-A", "B-D, D-T, A-C, C-D, S-A", 
            "S-A, B-D, C-D, A-C, D-T", "A-C, C-D, B-D, D-T, S-A"],
            answer : "B-D, D-T, A-C, C-D, S-A"
        },
        {
            id : 16,
            question : "Which of the following problems can’t be solved using recursion?",
            options : ["factorial of a number", "nth fibonacci number", "length of a string", "problems without base case"],
            answer : "problems without base case"
        },
        {
            id : 17,
            question : `What is the inorder traversal following tree?
            <img class = 'mt-3' src='https://cceestudy.online/images/tests/tree.jpg' style='width : 100%;' />`,
            options : ["30 , 20 , 15 , 5 , 18 , 25 , 40 , 35 , 50 , 45 , 60", 
            "5 , 18 , 15 , 25 , 20 , 35 , 45 , 60 , 50 , 40 , 30", 
            "5 , 15 , 18 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 60", 
            "5 , 18 , 15 , 60 , 50 , 40 , 30 , 25 , 20 , 35 , 45"],
            answer : "5 , 15 , 18 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 60"
        },
        {
            id : 18,
            question : " A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as _____________",
            options : ["Queue", "Stack", "Tree", "Linked list"],
            answer : "Queue"
        },
        {
            id : 19,
            question : "Time Complexity of Breadth First Search is? (V - number of vertices, E - number of edges)",
            options : ["O(V + E)", "O(V)", "O(E)", "O(V*E)"],
            answer : "O(V + E)"
        },
        {
            id : 20,
            question : `Create a Binary search tree for the given set of strings : <br> 
            JAVA, OS, DBT, WPT, DOTNET, WBJ, ASDM, DSA <br>
            What are the leaf nodes generated in the tree?`,
            options : ["WPT, WBJ, OS", "DOTNET, DSA, WPT", "ASDM, DSA, WBJ", "ASDM, DSA, JAVA"],
            answer : "ASDM, DSA, WBJ"
        },
        {
            id : 21,
            question : "What differentiates a circular linked list from a normal linked list?",
            options : ["You cannot have the 'next' pointer point to null in a circular linked list", 
            "It is faster to traverse the circular linked list", 
            "You may or may not have the 'next' pointer point to null in a circular linked list", 
            "Head node is known in circular linked list"],
            answer : "You may or may not have the 'next' pointer point to null in a circular linked list"
        },
        {
            id : 22,
            question : `Which of the following is recursive postorder traversal function,
            if class Node is defined as follows?
<pre class="language-java"><code> 
class Node {    
    public int value;    
    public Node left, right;    
    
    public Node(int element)    
    {    
        value = element;    
        left = right = null;    
    }    
}               
</code></pre>`,
            options : [
`<pre class="language-java"><code>
void traversePostOrder(Node node)    
    {    
        if (node == null)    
            return;    
        System.out.print(node.value + " ");    
        traversePostOrder(node.left);    
        traversePostOrder(node.right);    
    } 
</code></pre>`,
`<pre class="language-java"><code>
void traversePostOrder(Node node)    
    {    
        if (node == null)    
            return;    
        traversePostOrder(node.left);    
        System.out.print(node.value + " ");    
        traversePostOrder(node.right);    
    } 
</code></pre>`,
`<pre class="language-java"><code>
void traversePostOrder(Node node)    
    {    
        if (node == null)    
            return;    
        traversePostOrder(node.right);    
        traversePostOrder(node.left);    
        System.out.print(node.value + " ");    
    } 
</code></pre>`,
`<pre class="language-java"><code>
void traversePostOrder(Node node)    
    {    
        if (node == null)    
            return;    
        System.out.print(node.value + " ");    
        traversePostOrder(node.left);    
        traversePostOrder(node.right);    
    } 
</code></pre>`],
            answer : `<pre class="language-java"><code>
void traversePostOrder(Node node)    
    {    
        if (node == null)    
            return;    
        traversePostOrder(node.left);    
        traversePostOrder(node.right);    
        System.out.print(node.value + " ");    
    } 
</code></pre>`
        },
        {
            id : 23,
            question : "What will be the best case time complexity of merge sort?",
            options : ["O(n logn)", "O(n^2)", "O(n)", "O(n^2 logn)"],
            answer : "O(n logn)"
        },
        {
            id : 24,
            question : "Depth First Search is equivalent to which of the traversal in the Binary Trees?",
            options : ["Pre-order Traversal", "Post-order Traversal", "Level-order Traversal", "In-order Traversal"],
            answer : "Pre-order Traversal"
        },
        {
            id : 25,
            question : "At least how many comparisons are required for merging two sorted lists of n elements each?",
            options : ["2n - 1", "n - 1", "2n + 1", "n"],
            answer : "2n - 1"
        },
        {
            id : 26,
            question : "A logical way of getting from the problem to the solution. If the steps you take to solve a problem follow an algorithm then they can be reused and adapted to solve similar problems in the future.",
            options : ["Decomposition", "Abstraction", "Programming", "Algorithmic Thinking"],
            answer : "Algorithmic Thinking"
        },
        {
            id : 27,
            question : "The advantage of link list over array is",
            options : ["Link list can grow and shrink in size during the time", 
            "Less space is required for storing elements", 
            "Both 1 and 2 are correct", 
            "None of the above"],
            answer : "Link list can grow and shrink in size during the time"
        },
        {
            id : 28,
            question : "Consider the Array: 26, 35, 1, 49, 54, 30, 99. How array will look like after 2 (two) iterations of Bubble Sort?",
            options : ["26, 1, 35, 49, 54, 30, 99", "26, 1, 35, 49, 30, 54, 99", 
            "1, 26, 35, 30, 49, 54, 99", "None of these"],
            answer : "1, 26, 35, 30, 49, 54, 99"
        },
        {
            id : 29,
            question : "If already sorted array is passed to a sorting algorithm, which one will be the slowest?",
            options : ["Insertion sort", "Selection sort", "Heap sort", "Merge sort"],
            answer : "Selection sort"
        },
        {
            id : 30,
            question : `Complete the following code if the function implements binary search
<pre class="language-java"><code> 
void binarySearch(int arr[], int first, int last, int key){  
    int mid = (first + last)/2;  
    
    ---------------- //code

    if ( first > last ){  
       System.out.println("Element is not found!");  
    }  
  }  
</code></pre>`,
            options : [
`<pre class="language-java"><code>    
while( first <= last ){  
    if ( arr[mid] < key ){  
        first = mid + 1;     
    }  
    else{  
        System.out.println("Element is found at index: " + mid);
        last = mid - 1;  
    }  
    mid = (first + last)/2;  
} 
</code></pre>`,
`<pre class="language-java"><code>    
while( first <= last ){  
    if ( arr[mid] < key ){  
        first = mid + 1;     
    }else if ( arr[mid] == key ){  
        System.out.println("Element is found at index: " + mid);  
        break;  
    }else{  
        last = mid - 1;  
    }  
    mid = (first + last)/2;  
} 
</code></pre>`,
`<pre class="language-java"><code>    
while( first <= last ){  
    if ( arr[mid] > key ){  
        first = mid + 1;     
    }else if ( arr[mid] < key ){  
        System.out.println("Element is found at index: " + mid);  
        break;  
    }else{  
        last = mid - 1;  
    }  
    mid = (first + last)/2;  
} 
</code></pre>`,
`<pre class="language-java"><code>    
while( first <= last ){  
    if ( arr[mid] < key ){  
        first = mid + 1;     
    }else {  
        System.out.println("Element is found at index: " + mid);  
        break;  
    }
} 
</code></pre>`
],
            answer : 
`<pre class="language-java"><code>    
while( first <= last ){  
    if ( arr[mid] < key ){  
        first = mid + 1;     
    }else if ( arr[mid] == key ){  
        System.out.println("Element is found at index: " + mid);  
        break;  
    }else{  
        last = mid - 1;  
    }  
    mid = (first + last)/2;  
} 
</code></pre>`
        },
        {
            id : 31,
            question : "Which is the correct list of complexities in increasing order?",
            options : ["O(1) -> O(nlogn) -> O(n^2) -> O(logn) -> O(n) -> O(n^3)", 
            "O(n) -> O(logn) -> O(n) -> O(1) -> O(n^2) -> O(n^3)", 
            "O(1) -> O(logn) -> O(n) -> O(nlogn) -> O(n^2) -> O(n^3)", 
            "O(1) -> O(n) -> O(logn) -> O(nlogn) -> O(n^2) -> O(n^3)"],
            answer : "O(1) -> O(logn) -> O(n) -> O(nlogn) -> O(n^2) -> O(n^3)"
        },
        {
            id : 32,
            question : "N-Queens Problem can be solved easily by",
            options : ["Dynamic Programming", "Backtracking Method", "Greedy Method", "Divide and Conquer Method"],
            answer : "Backtracking Method"
        },
        {
            id : 33,
            question : "When new data are to be inserted into a data structure, but there is no available space; this situation is usually called",
            options : ["underflow", "overflow", "housefull", "saturated"],
            answer : "overflow"
        },
        {
            id : 34,
            question : "Which of the following algorithm can be used to detect negative cycle in a graph?",
            options : ["Prim", "Kruskal", "Dijkstra", "Bellman Ford"],
            answer : "Bellman Ford"
        },
        {
            id : 35,
            question : "Which of the following sorting algorithm has minimum worst case time complexity?",
            options : ["Selection Sort", "Bubble Sort", "Quick Sort", "Merge Sort"],
            answer : "Merge Sort"
        },
        {
            id : 36,
            question : `What is the time complexity of the following code:
<pre class="language-java"><code>
int a = 0, b = 0;
for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
        a = a + j;
    }
}
for (int k = 0; k < n; ++k) {
    b = b + k;
}
</code></pre>`,
            options : ["n^2", "n", "n^3", "nlogn"],
            answer : "n^2"
        },
        {
            id : 37,
            question : "In ________ , keys are stored in linked lists attached to cells of a hash table. Each list contains all the keys hashed to its cell.",
            options : ["Open hashing", "Close hashing", "linear hashing", "None of the above"],
            answer : "Open hashing"
        },
        {
            id : 38,
            question : "Breadth First Traversal (BFS) is a method to traverse",
            options : ["Graph using shortest path", "All successors of a visited node before any successors of any of those successors", 
            "A single path of the graph as far as it can go", "None of these"],
            answer : "All successors of a visited node before any successors of any of those successors"
        },
        {
            id : 39,
            question : "Bellmann ford algorithm provides solution for ____________ problems.",
            options : ["All pair shortest path", "Sorting", "Network flow", "Single source shortest path"],
            answer : "Single source shortest path"
        },
        {
            id : 40,
            question : "Applying Krushkal's algorithm to find Minimum Spanning Tree is more suitable for",
            options : ["Sparse Matrix", "Dense Graph", "Sparse Graph", "None of these"],
            answer : "Sparse Graph"
        }
    ]
},
{
    moduleName : "Database Technologies",
    questions : [
        {
            id : 1,
            question : "A Key which uniquely identifies each row in the table is known as?",
            options : ["Primary Key", "Unique Key", "Composite Key", "Foreign Key"],
            answer : "Primary Key"
        },
        {
            id : 2,
            question : "Commands that comes under DDL is/are ",
            options : ["INSERT, UPDATE, DELETE", "CREATE, ALTER, DROP, TRUNCATE", "COMMIT, ROLLBACK, SAVEPOINT", "GRANT, REVOKE"],
            answer : "CREATE, ALTER, DROP, TRUNCATE"
        },
        {
            id : 3,
            question : "By normalizing relations or sets of relations, one minimizes ___.",
            options : ["Data", "Fields", "Redundancy", "Database"],
            answer : "Redundancy"
        },
        {
            id : 4,
            question : "What does the following code snippet do? <br> ALTER TABLE STUDENT ADD(ADDRESS VARCHAR(20));",
            options : ["Adds a column called ADDRESS in the table student", 
            "Checks if a column called ADDERESS is present in the table student", 
            "Adds student details", "Invalid Syntax"],
            answer : "Adds a column called ADDRESS in the table student"
        },
        {
            id : 5,
            question : "In the ER model, the derived attributes are represented by a __________",
            options : ["rectangle", "Ellipse", "Diamond", "Dashed oval"],
            answer : "Dashed oval"
        },
        {
            id : 6,
            question : "Which of the following is the correct syntax for using the HAVING clause?",
            options : [
`<pre class="SQL"><code>
SELECT (column_name) 
HAVING (function condition)
GROUP BY (column_name)
FROM (entity_name);
</code></pre>`,
`<pre class="SQL"><code>
SELECT (column_name) 
FROM (entity_name)
GROUP BY (column_name)
HAVING (function condition);
</code></pre>`,
`<pre class="SQL"><code>
SELECT (column_name)
FROM (entity_name)
HAVING (function condition)
GROUP BY (column_name);
</code></pre>`,
`<pre class="SQL"><code>
SELECT (column_name) 
HAVING (function condition)
FROM (entity_name)
GROUP BY (column_name);
</code></pre>`],
            answer : 
`<pre class="SQL"><code>
SELECT (column_name) 
FROM (entity_name)
GROUP BY (column_name)
HAVING (function condition);
</code></pre>`
        },
        {
            id : 7,
            question : "Which triggers automatically invoked after adding a new row in the table?",
            options : ["AFTER CREATE", "BEFORE UPDATE", "AFTER INSERT", "AFTER DELETE"],
            answer : "AFTER INSERT"
        },
        {
            id : 8,
            question : "In localhost MySQL connection runs on which port number?",
            options : ["8080", "8000", "3306", "3000"],
            answer : "3306"
        },
        {
            id : 9,
            question : "Which operator is used to test whether or not a value lies within a specified range?",
            options : ["LIKE", "BETWEEN", "IN", "FOR"],
            answer : "BETWEEN"
        },
        {
            id : 10,
            question : `__________ means that all clients see the same data at the same time, no matter which node they connect to &
            ____________ means that any client making a request for data gets a response, even if one or more nodes are down.`,
            options : ["Availability, Consistency", "Consistency, Availability", "Availability, Partition tolerance", "Consistency, Partition tolerance"],
            answer : "Consistency, Availability"
        },
        {
            id : 11,
            question : "What is true about indexes?",
            options : ["Indexes enhance the performance even if the table is updated frequently", 
            "It makes harder for sql server engines to work to work on index which have large keys", 
            "It doesn't make harder for sql server engines to work to work on index which have large keys", 
            "None of the mentioned"],
            answer : "None of the mentioned"
        },
        {
            id : 12,
            question : "What is TRUE about the Third Normal Form (3NF)?",
            options : ["When a relation is in 2NF and does not contain transitive partial dependencies, it will be in 3NF.", 
            "Data duplication is reduced by using 3NF.", 
            "It helps maintain the integrity of the data.", 
            "All of the above"],
            answer : "All of the above"
        },
        {
            id : 13,
            question : "How to select all data from studentinfo table with the name that have 'r' in the second position?",
            options : ["SELECT * FROM studentinfo WHERE sname LIKE 'r%';",
            "SELECT * FROM studentinfo WHERE sname LIKE '%r%';",
            "SELECT * FROM studentinfo WHERE sname LIKE '%r';",
            "SELECT * FROM studentinfo WHERE sname LIKE '_r%';"],
            answer : "SELECT * FROM studentinfo WHERE sname LIKE '_r%';"
        },
        {
            id : 14,
            question : "Which of the following is TRUE about UNIQUE constraint?",
            options : ["In columns that are subject to the UNIQUE constraint, duplicate values are not allowed.", 
            "In columns that are subject to the UNIQUE constraint, duplicate values are not allowed.", 
            "A single table can have more than one unique constraint, since it can be applied to more than one column.", 
            "All of the above"],
            answer : "All of the above"
        },
        {
            id : 15,
            question : "Relation R1 has 10 tuples and 5 attributes. Relation R2 has 0 tuples and 7 attributes. When a CROSS JOIN is achieved between R1 and R2, how many tuples would the resultant set have?",
            options : ["70", "10", "0", "35"],
            answer : "0"
        },
        {
            id : 16,
            question : "What is true about view?",
            options : ["Database views are created using the CREATE VIEW statement.", 
            "To create a view, a user must have the appropriate system privilege according to the specific implementation.", 
            "Both A & B", 
            "None of these"],
            answer : "Both A & B"
        },
        {
            id : 17,
            question : `Which of the following can replace the below query?
<pre class="SQL"><code>
SELECT Name, ID
FROM Student, Courses
WHERE Student_ID = Courses_ID;
</code></pre>`,
            options : ["Select Name, ID from Courses, Student where Student_ID = ID", 
            "Select Name, ID from Student natural join Courses;", 
            "Select Name, ID from Student;", "Select ID from Student join Courses;"],
            answer : "Select Name, ID from Student natural join Courses;"
        },
        {
            id : 18,
            question : `In below diagram which type of cardinal relationship is shown?
            <img class = 'mt-3' src='https://cceestudy.online/images/tests/onetomany.jpg' style='width : 100%;' />`,
            options : ["One to One", "One to Many", "Many to One", "Many to Many"],
            answer : "One to Many"
        },
        {
            id : 19,
            question : `Consider a relation R(A, B, C, D) with the following functional dependencies: <br>
            A -> (B, C, D), (A, D) -> (B, C) and (C, D) -> (A, B). <br>
            Identify the candidate key(s).`,
            options : ["{A}", "{A}, {C, D}", " {A}, {C, D}, {A, D}", "{C, D}"],
            answer : "{A}, {C, D}"
        },
        {
            id : 20,
            question : `Which of the following MongoDB query is equivalent to the following SQL query: <br>
            UPDATE users SET status = "C" WHERE age > 25`,
            options : [
`<pre class="SQL"><code>
db.users.update(
   { age: { $gt: 25 } },
   { status: "C" }
)
</code></pre>`, 
`<pre class="SQL"><code>
db.users.update(
    { age: { $gt: 25 } },
    { $set: { status: "C" } }
)
</code></pre>`,
`<pre class="SQL"><code>
db.users.update(
    { age: { $gt: 25 } },
    { $set: { status: "C" } },
    { multi: true }
)
</code></pre>`,
`<pre class="SQL"><code>
db.users.update(
    { age: { $gt: 25 } },
    { status: "C" },
    { multi: true }
)
</code></pre>`],
            answer : 
`<pre class="SQL"><code>
db.users.update(
    { age: { $gt: 25 } },
    { $set: { status: "C" } },
    { multi: true }
)
</code></pre>`
        },
        {
            id : 21,
            question : "MongoDB includes _________ in its bin folder",
            options : ["MongoData", "MongoFind", "Mongod", "All of the above"],
            answer : "Mongod"
        },
        {
            id : 22,
            question : "Joining a table with itself is called",
            options : ["Self Join", "Equi Join", "Join", "Full Join"],
            answer : "Self Join"
        },
        {
            id : 23,
            question : "__________ function in SQL is used to get the number of rows with the SELECT statement.",
            options : ["SUM()", "MAX()", "COUNT()", "MIN()"],
            answer : "COUNT()"
        },
        {
            id : 24,
            question : `SQL Database have below two tables : <br>
<img class = 'mt-3' src='https://cceestudy.online/images/tests/table.jpg' style='width : 100%;' />
What will be the query to fetch city names of Maharashtra state?`,
            options : [
`<pre class="SQL"><code>
SELECT City_name FROM Cities WHERE State.State_id = Cities.State_id; 
</code></pre>`, 
`<pre class="SQL"><code>
SELECT * FROM States,Cities;
</code></pre>`,
`<pre class="SQL"><code>
SELECT City_name FROM States INNER JOIN Cities WHERE State.State_id = Cities.State_id;
</code></pre>`,
`<pre class="SQL"><code>
SELECT City_name FROM Cities IN SELECT * FROM States;
</code></pre>`],
            answer : 
`<pre class="SQL"><code>
SELECT City_name FROM States INNER JOIN Cities WHERE State.State_id = Cities.State_id;
</code></pre>`
        },
        {
            id : 25,
            question : "Modelling of relationship between a collection of entities and relationships is __________",
            options : ["Relational Algebra", "Relation schema", "Aggregation", "Relationship set"],
            answer : "Aggregation"
        },
        {
            id : 26,
            question : "One table can combine upto ___ columns in a composite primary key.",
            options : ["2", "16", "12", "None of the above"],
            answer : "16"
        },
        {
            id : 27,
            question : "The DELETE command is used to _____________ from a table. The TRUNCATE command is used to ______________ from the table.",
            options : ["delete complete database, delete the table", "delete the complete data, delete particular records", 
            "delete particular records, delete the complete data", "delete the table, delete the database"],
            answer : "delete particular records, delete the complete data"
        },
        {
            id : 28,
            question : "Which operator is used to compare a value to a specified list of values?",
            options : ["ANY", "BETWEEN", "ALL", "IN"],
            answer : "IN"
        },
        {
            id : 29,
            question : "Which of the following statements does not change the state of the database?",
            options : ["Where", "Select", "Insert", "Drop"],
            answer : "Select"
        },
        {
            id : 30,
            question : "With ________ MongoDB supports a complete backup solution and full deployment monitoring.",
            options : ["MMS", "AMS", "CMS", "DMS"],
            answer : "MMS"
        },
        {
            id : 31,
            question : "When is it best to use a NoSQL database?",
            options : ["When providing confidentiality, integrity and availability id crucial", 
            "When the data is predictable", 
            "When the retrieval of large quantities of data is needed", 
            "When the retrieval speed of data is not critical"],
            answer : "When the retrieval of large quantities of data is needed"
        },
        {
            id : 32,
            question : "Which is the correct order (lowest to highest) in which MongoDB compares the BSON types?",
            options : ["Null, Number, String and Object", "Number, Null, String and Object", 
            "String, Null, Number and Object", "Null, Number, Object and String"],
            answer : "Null, Number, String and Object"
        },
        {
            id : 33,
            question : "What is the feature of Stored Procedure?",
            options : ["Stored Procedure increases the performance of the applications. Once stored procedures are created, they are compiled and stored in the database.", 
            "Stored procedure reduces the traffic between application and database server. Because the application has to send only the stored procedure's name and parameters instead of sending multiple SQL statements.", 
            "Stored procedures are reusable and transparent to any applications.", 
            "All of the above"],
            answer : "All of the above"
        },
        {
            id : 34,
            question : "Which of the following represent column in NoSQL __________ ",
            options : ["Field", "Database", "Collection", "Document"],
            answer : "Field"
        },
        {
            id : 35,
            question : "Which one of the following provides the ability to query information from the database and to insert tuples into, delete tuples from, and modify tuples in the database?",
            options : ["DML(Data Manipulation Langauge)", "DDL(Data Definition Langauge)", "Query", "Relational Schema"],
            answer : "DML(Data Manipulation Langauge)"
        },
        {
            id : 36,
            question : "Which of the following statement(s) is TRUE regarding subqueries?",
            options : ["Inner queries in WHERE clause can contain ORDER BY", 
            "Outer query and inner query can get data from different tables", 
            "Outer query and inner query must get data from the same table", 
            "Inner queries cannot contain GROUP BY clause"],
            answer : "Outer query and inner query can get data from different tables"
        },
        {
            id : 37,
            question : "Third normal form is based on the concept of _________",
            options : ["Closure Dependency", "Normal Dependency", "Transitive Dependency", "Functional Dependency"],
            answer : "Transitive Dependency"
        },
        {
            id : 38,
            question : "What does BLOB in SQL stand for?",
            options : ["Binary Large Objects", "Big Large Objects", 
            "Binary Language for Objects", "None of the above"],
            answer : "Binary Large Objects"
        },
        {
            id : 39,
            question : "In MongoDB document '_id' uses how many bytes of storage?",
            options : ["12 bytes", "8 bytes", "16 bytes", "32 bytes"],
            answer : "12 bytes"
        },
        {
            id : 40,
            question : "Which ACID property specifies that once the transaction is committed, its permanent even in case of power failures?",
            options : ["Atomicity", "Consistency", "Isolation", "Durability"],
            answer : "Durability"
        }
    ]
},
{
    moduleName : "Web Programming Technologies",
    questions : [
        {
            id : 1,
            question : "Which HTML tag is called the root element of an HTML document?",
            options : ["<xmp><html></xmp>" , "<xmp><body></xmp>", "<xmp><title></xmp>", "<xmp><head></xmp>"],
            answer : "<xmp><html></xmp>"
        },
        {
            id : 2,
            question : "Node.js is an _________________",
            options : ["open source, cross-platform runtime environment for client-side JavaScript", 
            "javaScript library for server-side JavaScript", 
            "open source, cross-platform runtime environment for server-side JavaScript", 
            "open source, platform dependant runtime environment for server-side JavaScript"],
            answer : "open source, cross-platform runtime environment for server-side JavaScript"
        },
        {
            id : 3,
            question : "Which of the following are examples of block-level elements in HTML?",
            options : ["<xmp><div></xmp>", "<xmp><p></xmp>", "<xmp><h1></xmp>", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 4,
            question : "Which object can be used to exchange data with a server behind the scenes?",
            options : ["XMLHttpRequest", "HttpsRequest", "JSONHttpRequest", "All of the above"],
            answer : "XMLHttpRequest"
        },
        {
            id : 5,
            question : "Which css properties will be applied for to p tag making text bold & italic in HTML page?",
            options : ["font-thickness & font-variant", "font-family & font-size",
            "font-size & font-style", "font-weight & font-style"],
            answer : "font-weight & font-style"
        },
        {
            id : 6,
            question : "In HTML, which attribute is used to create a link that opens in a new window tab?",
            options : ["src = '_blank'", "alt = '_blank'", "target = '_self'", "target = '_blank'"],
            answer : "target = '_blank'"
        },
        {
            id : 7,
            question : "Which of the following grid class in Bootstrap is used for desktops?",
            options : ["xs", "sm", "lg", "md"],
            answer : "md"
        },
        {
            id : 8,
            question : `What does following code do?
<pre class="JavaScript"><code>
var fs = require("fs");
var data = "cceestudy.online"
fs.open('sample.txt', 'r', function (err, fd) {
    if(err)
        return console.error(err);
    var buffr = Buffer.alloc(1024);

    fs.read (fd, buffr, 0, buffr.length, 0, function (err, bytes){
        if (err) throw err;
        if (bytes > 0) {
            console.log(buffer.toString());
        }

        fs.close(fd, function (err) {
            if (err) throw err;
        });
    });
});
</code></pre>`,
            options : ["Writes the data into sample.txt file", "Copies the data of sample.txt file to another file", 
            "Reads the sample.txt file and logs the data of it to console", "None of these."],
            answer : "Reads the sample.txt file and logs the data of it to console"
        },
        {
            id : 9,
            question : "What is Babel?",
            options : ["JavaScript compiler", "JavaScript interpreter", "JavaScript transpiler", "None of the above"],
            answer : "JavaScript compiler"
        },
        {
            id : 10,
            question : `In below code snippet, in what order will the margins be added?
<pre class="CSS"><code>
p {
    margin : 25px 50px 75px 100px;
}
</code></pre>`,
            options : ["Top, Right, Bottom, Left", "Top, Left, Bottom, Right", "Top, Bottom, Right, Left", "Right, Left, Top, Bottom"],
            answer : "Top, Right, Bottom, Left"
        },
        {
            id : 11,
            question : "The correct order of CSS box model from outer to inner that wraps around HTML elements:",
            options : ["Margin, Border, Padding, Content", "Border, Margin, Padding, Content",
            "Margin, Padding, Border, Content", "Content, Margin, Border, Padding" ],
            answer : "Margin, Border, Padding, Content"
        },
        {
            id : 12,
            question : `The style of programming whereby instead of using a return value defined functions
            are called by the system when interesting events occur is called ___________`,
            options : ["Event-driven programming", "Synchronous programming", "Callback programming", "functional programming"],
            answer : "Event-driven programming"
        },
        {
            id : 13,
            question : "Which of the following command is used to install create-react-app?",
            options : ["npm install -g create-react-app", "npm install create-react-app", 
            "npm install -f create-react-app", "install -g create-react-app"],
            answer : "npm install -g create-react-app"
        },
        {
            id : 14,
            question : "Which attribute specifies the path to the image?",
            options : ["href", "link", "src", "All of the above"],
            answer : "src"
        },
        {
            id : 15,
            question : "ReactJS uses _______ to increase performance.",
            options : ["Virtual DOM", "Original DOM", "Primary DOM", "All of the above"],
            answer : "Virtual DOM"
        },
        {
            id : 16,
            question : `What will be the output of below javaScript code: 
<pre class="JavaScript"><code>
const numbers = [ 20, 21, 22 ];
const newNumbers = [ ...numbers, 5 ]
console.log(newNumbers)
</code></pre>`,
            options : ["[ 20, 21, 22, 23, 24, 25, 26, 27 ]", 
            "[ 20, 21, 22, 5 ]", "[ [20, 21, 22] ,5 ]", 
            "[ 5, 20, 21, 22 ]"],
            answer : "[ 20, 21, 22, 5 ]"
        },
        {
            id : 17,
            question : "What is the correct syntax of writing JSON name/value pair, where the value is of string type?",
            options : [`"name" : "value"`, `"name" : value`, `name : "value"`, "'name' : 'value'"],
            answer : `"name" : "value"`
        },
        {
            id : 18,
            question : "Which is the default port on which the development server for React runs on?",
            options : ["3050", "8080", "3000", "8000"],
            answer : "3000"
        },
        {
            id : 19,
            question : "Which function is used to serialize an object into JSON string in Javascript",
            options : ["stringify()", "parse()", "convert()", "None of the above"],
            answer : "stringify()"
        },
        {
            id : 20,
            question : `<pre class="JavaScript"><code>
import React from 'react';
import ReactDOM from 'react-dom'/client; 
const authenticate = false;
function ComponentOne(){
    return <xmp><h1> ComponentOne </h1></xmp>;
}

function ComponentTwo(){
    return <xmp><h1> ComponentTwo </h1></xmp>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( authenticate ? <ComponentOne /> : <ComponentTwo />)
</code></pre>
after start the ReactJS application using npm start what will render on browser?`,
            options : ["ComponentOne", "ComponentTwo", "ComponentOne ComponentTwo", "ComponentTwo ComponentOne"],
            answer : "ComponentTwo"
        },
        {
            id : 21,
            question : `Which file contains human-readable metadata about the project (like the project name and description) as well as
            functional metadata like the package version number and a list of dependencies required by the
            application?`,
            options : ["app.js", "index.html", "package.json", "pom.xml"],
            answer : "package.json"
        },
        {
            id : 22,
            question : "Which of the following tag insists to have a value in an input control in HTML5?",
            options : ["output", "placeholder", "autofocus", "required"],
            answer : "required"
        },
        {
            id : 23,
            question : "ES6 stands for?",
            options : ["ECMAScript 6", "ECMA 6", "ECMAJavaScript 6 ", "EJavascript 6"],
            answer : "ECMAScript 6"
        },
        {
            id : 24,
            question : "Node.js uses the __________ Event Loop acrhitecture to handle multiple concurrent clients.",
            options : ["Single Threaded", "Multi Threaded", "Non Threaded", "All of the above"],
            answer : "Single Threaded"
        },
        {
            id : 25,
            question : "Which of the following is not feature of jQuery?",
            options : ["Efficient query method fro finding the set of document elements", 
            "Expressive syntax for referring to elements in the document", 
            "Useful set of methods for manipulating selected elements", 
            "Powerful functional programming techniques is not used fro operating on sets of elements as a group"],
            answer : "Powerful functional programming techniques is not used fro operating on sets of elements as a group"
        },
        {
            id : 26,
            question : "The correct sequence of HTML tags for starting a webpage is -",
            options : ["Head, Title, HTML, body", "HTML, Body, Title, Head", 
            "HTML, Head, Title, Body", "HTML, Body, Title, Head"],
            answer : "HTML, Head, Title, Body"
        },
        {
            id : 27,
            question : "What are the two ways to handle data in React?",
            options : ["State & Props", "Services & Components", "State & Services", "State & Component"],
            answer : "State & Props"
        },
        {
            id : 28,
            question : "How to get input text value given by user in input text box having id='userInput' using JavaScript",
            options : [
`<pre class="JavaScript"><code>
var text = document.getElementId('userInput').innerHTML;
</code></pre>`,
`<pre class="JavaScript"><code>
var text = document.getElementId('userInput').value;
</code></pre>`,
`<pre class="JavaScript"><code>
var text = document.getElementId('userInput').text;
</code></pre>`,
`<pre class="JavaScript"><code>
var text = document.getElementId('userInput').data;
</code></pre>`
            ],
            answer : `<pre class="JavaScript"><code>
var text = document.getElementId('userInput').value;
</code></pre>`
        },
        {
            id : 29,
            question : `Below which line shows output without any error?
<pre class="JavaScript"><code>
const a = 10;  a = a + 10;  console.log(a); //line 1
const arr = [10,20,30];  arr.push(40);  console.log(arr); //line 2
</code></pre>`,
            options : ["line 1", "line 2", "both lines", "None of these"],
            answer : "line 2"
        },
        {
            id : 30,
            question : "How to change color to red of p tag having id text using jQuery?",
            options : ["$('#text').color('red')", "$('.text').css('color','red')", 
            "$('#text').css('color','red')", "$('p').css('color','red')"],
            answer : "$('.text').css('color','red')"
        },
        {
            id : 31,
            question : `What will be the output of following code?
<pre class="JavaScript"><code>
let promise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        resolve('Promise resolved')}, 4000);
});

async function asyncFunc() {
    let result = await promise;
    console.log(result);
    console.log('Hello world');
}

asyncFunc();
</code></pre>`,
            options : ["Hello world", "Hello world <br> Promise resolved", 
            "Promise resolved <br> Hello world", "Promise resolved"],
            answer : "Promise resolved <br> Hello world"
        },
        {
            id : 32,
            question : "Which method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI?",
            options : ["GET", "PUT", "SET", "POST"],
            answer : "POST"
        },
        {
            id : 33,
            question : "________ is a middleware which parses cookies attached to the client request object.",
            options : ["cookie", "req.cookies", "cookie-parser", "cookie-storage"],
            answer : "cookie-parser"
        },
        {
            id : 34,
            question : "Which is the correct arrow function to add two numbers?",
            options : ["add = (a,b) => a+b;", "add = (a,b) => return a+b;", 
            "add = (a,b) => { return a+b;}", "both second and third option"],
            answer : "both second and third option"
        },
        {
            id : 35,
            question : "Which statement is valid in using a Node module fs in a Node-based application?",
            options : ["import fs", "package fs", "var fs = require('fs')", "var fs = import('fs')"],
            answer : "var fs = import('fs')"
        },
        {
            id : 36,
            question : "Redux solves this problem by managing application's state with a single global object called?",
            options : ["directory", "file", "store", "Component"],
            answer : "store"
        },
        {
            id : 37,
            question : `<pre class="JavaScript"><code>
var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
    res.send("Hello World!");
})

app.post('/hello', function (req, res) {
    res.send("Hi World!")
})

app.get('/hi', function (req, res) {
    res.send("Hello World!");
})

app.listen(3000);
</code></pre>
If the above code is run on Node and user entered the URL 'http://127.0.0.1:8000/hello', 
what response will be shown?`,
            options : ["Hello World!", "Hi World!", "Hello World! Hi World!", "127.0.0.1 refused to connect will be shown"],
            answer : "127.0.0.1 refused to connect will be shown"
        },
        {
            id : 38,
            question : "Third-party packages can be install/update/delete using ______",
            options : ["Node Package Manager", "Node.exe", "module.exports", "REPL"],
            answer : ""
        },
        {
            id : 39,
            question : "The state in React can be updated by call to setState method. These calls are",
            options : ["Synchronous in nature", "Asynchronous in nature", 
            "Are asynchronous but can be made synchronous when required", "None of above"],
            answer : "Asynchronous in nature"
        },
        {
            id : 40,
            question : "Which is the correct symbol to insert a comment in HTML?",
            options : ["//", "/* ... */", "<pre><xmp><!-- ... --></xmp></pre>", "// ... //"],
            answer : "<pre><xmp><!-- ... --></xmp></pre>"
        }
    ]
},
{
    moduleName : "Web-based Java Programming",
    questions : [
        {
            id : 1,
            question : "@SpringBootApplication is a combination of three annotations ________",
            options : ["@ComponentScan, @ResponseBody and @Controller", 
            "@Autowired, @Component and @Bean", 
            "@Controller, @Service and @Repository", 
            "@EnableAutoConfiguration, @ComponentScan and @Configuration"],
            answer : "@EnableAutoConfiguration, @ComponentScan and @Configuration"
        },
        {
            id : 2,
            question : "Which of the following is not a J2EE client?",
            options : ["Web applications", "Applets", "Applets", "JSP"],
            answer : "JSP"
        },
        {
            id : 3,
            question : "The __________ is responsible to instantiate, configure and assemble the objects.",
            options : ["Component", "Bean", "Class", "IoC container"],
            answer : "IoC container"
        },
        {
            id : 4,
            question : `What will be the output if we run MainApp.java: <br>
mainApp.java
<pre class="Java"><code>
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

class HelloWorld {
    private String message;
    public void setMessage(String message){
        this.message = message;
    }
    public void getMessage(){
        System.out.println("Your Message : " + message);
    }
}

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        HelloWorld objA = (HelloWorld) context.getBean("helloWorld");
        objA.setMessage("I'm object A");

        HelloWorld objB = (HelloWorld) context.getBean("helloWorld");
        objB.setMessage("I'm object B");

        objA.getMessage();
        objB.getMessage();
    }
}
</code></pre>

beans.xml

<pre class="XML"><code>
<xmp>
<bean id="helloWorld" class="com.tutorialspoint.HelloWorld"
scope="singleton">
</bean>
</xmp>
</code></pre>`,
            options : ["I'm object B <br> I'm object B", "I'm object A <br> I'm object B", 
            "I'm object B <br> I'm object A", "I'm object A <br> I'm object A"],
            answer : "I'm object B <br> I'm object B"
        },
        {
            id : 5,
            question : "Which of the following statements is true?",
            options : ["BeanFactory implements ApplicationContext", 
            "BeanFactory extends ApplicationContext", 
            "ApplicationContext extends BeanFactory", 
            "ApplicationContext implements BeanFactory"],
            answer : "ApplicationContext extends BeanFactory"
        },
        {
            id : 6,
            question : "Which of the following is not a feature of Beans?",
            options : ["Introspection", "Events", "Persistence", "Serialization"],
            answer : "Serialization"
        },
        {
            id : 7,
            question : "What is Spring MVC framework?",
            options : ["Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",
            "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.", 
            "Spring MVC framework is used for Transaction management for Web Applications.", 
            "Spring MVC framework is used for AOP for Web Applications."],
            answer : "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications."
        },
        {
            id : 8,
            question : "Which of the following is used to rollback a JDBC transaction?",
            options : ["rollback()", "rollforward()", "deleteTransaction()", "RemoveTransaction()"],
            answer : "rollback()"
        },
        {
            id : 9,
            question : "Servlet are used to program which component in a web application?",
            options : ["client", "server", "tomcat", "applet"],
            answer : "server"
        },
        {
            id : 10,
            question : "What POM stands for?",
            options : ["Project Object Mode", "Project Object Model", "Project Objective Mode", "Project Objective Model"],
            answer : "Project Object Model"
        },
        {
            id : 11,
            question : "What is the correct syntax for annotation wiring?",
            options : ["<annotation-context:config /> to bean configuration.", 
            "<annotation-config /> to bean configuration.", 
            "<annotation-context-config /> to bean configuration.", 
            "<context:annotaion-config /> to bean configuration."],
            answer : "<context:annotaion-config /> to bean configuration."
        },
        {
            id : 12,
            question : "How are java web applications packaged?",
            options : ["jar", "war", "zip", "both jar and war"],
            answer : "both jar and war"
        },
        {
            id : 13,
            question : "Which design pattern provides a single class which provides simplified methods required by client and delegates call to those methods?",
            options : ["Adapter pattern", "Builder pattern", "Facade pattern", "Prototype pattern"],
            answer : "Facade pattern"
        },
        {
            id : 14,
            question : "Which of the following is correct about messaging in RESTful web services?",
            options : ["A client sends a message in form of a HTTP Request and server responds in form of a HTTP Response.", 
            "These messages contain message data and metadata i.e. information about message itself.", 
            "Both of the above", 
            "None of the above."],
            answer : "Both of the above"
        },
        {
            id : 15,
            question : "@Component annotation on class indicates",
            options : ["that a bean should be created for the class", 
            "that a bean should not be created for the class", 
            "that autowiring should be enabled for the class", 
            "that autowiring should not be enabled for the class"],
            answer : "that a bean should be created for the class"
        },
        {
            id : 16,
            question : "Which is mandatory in <xmp><jsp:useBean /></xmp> tag?",
            options : ["id, class", "id, type", "type, property", "type,id"],
            answer : "id, class"
        },
        {
            id : 17,
            question : "Sessionfactory can manage contextual sessions for you and allows you to retrieve them by the :-",
            options : ["getSession() method", "getCurrent() method", "getCurrentSession() method", "none of the mentioned"],
            answer : "getCurrentSession() method"
        },
        {
            id : 18,
            question : `The classes in the _________ directory must be available for the "Classloader" of the application?`,
            options : ["/root/lib/classes/", "/root/classes/", "/WEB-INF/lib/classes/", "/WEB-INF/classes/"],
            answer : "/WEB-INF/classes/"
        },
        {
            id : 19,
            question : "What is bean in Spring?",
            options : ["A component", "An Object", "A class", "A container"],
            answer : "An Object"
        },
        {
            id : 20,
            question : `find out correct annotations on mentioned letters A,B,C & D in below classes defined in SpringBoot Application:
<pre class="Java"><code>
// A
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
-------------------------------
// B
public class User {
	
	@Id
	private int userId;
	private String firstName;
	private String lastName;

	//constructors, getters & setters method 
}
-------------------------------
// C
public class UserController {
	
	// D
	UserService userService;
	
	@GetMapping("/getuser")
	User getUser(){
		return userService.getUser(); 
	}
}
-------------------------------
@Service
public class UserService {

	User getUser() {
		return new User(1,"abc","def");
	}
}
</code></pre>`,
            options : ["@Bean, @Entity, @RestController, @Component", 
            "@Controller, @Component, @Service, @Autowired", 
            "@SpringBootApplication, @Entity, @RestController, @Autowired", 
            "@Spring, @Required, @RestController, @Autowired"],
            answer : "@SpringBootApplication, @Entity, @RestController, @Autowired"
        },
        {
            id : 21,
            question : "What temporarily redirects response to the browser?",
            options : ["<xmp><jsp:forward></xmp>", "<%@directive%>", "response.sendRedirect(URL)", "response.setRedirect(URL)"],
            answer : "response.sendRedirect(URL)"
        },
        {
            id : 22,
            question : "Once the hibernate session is closed, in which state the object remains?",
            options : ["detached", "transient", "persistent", "garbage collector"],
            answer : "detached"
        },
        {
            id : 23,
            question : "_________ annotation maps the HttpRequest body to a transfer or domain object, enabling automatic deserialization of the inbound HttpRequest body onto a Java object.",
            options : ["@RequestParams", "@RequestBody", "@RequestMapping", "@Body"],
            answer : "@RequestBody"
        },
        {
            id : 24,
            question : "Which element of hbm.xml automatically generate the primary key values?",
            options : ["id", "generator", "primaryKey", "None of the above"],
            answer : "generator"
        },
        {
            id : 25,
            question : "Which file is used to specify the packaging cycle?",
            options : ["build.xml", "pom.xml", "dependency.xml", "version.xml"],
            answer : "build.xml"
        },
        {
            id : 26,
            question : "Which of the following method is used to perform DML statements in JDBC?",
            options : ["executeResult()", "executeQuery()", "executeUpdate()", "execute()"],
            answer : "executeUpdate()"
        },
        {
            id : 27,
            question : "Which of the following is true about 'build' Maven life cycle?",
            options : ["It cleans up artifacts created by prior builds.", "This is used to build the application.", 
            "This generates site documentation for the project.", "None of the above."],
            answer : "This is used to build the application."
        },
        {
            id : 28,
            question : `Which is the correct way of Constructor-based Dependency Injection for below code:
<pre class="Java"><code>
package online.cceestudy;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

class TextEditor {

    private SpellChecker spellChecker;

    public TextEditor(SpellChecker spellChecker) {
        System.out.println("Inside TextEditor constructor." );
        this.spellChecker = spellChecker;
    }

    public void spellCheck() {
        spellChecker.checkSpelling();
    }
}

class SpellChecker {

    public SpellChecker(){
        System.out.println("Inside SpellChecker constructor." );
    }

    public void checkSpelling() {
        System.out.println("Inside checkSpelling." );
    }
}

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
        TextEditor te = (TextEditor) context.getBean("textEditor");
        te.spellCheck();
    }
}
</code></pre>`,
            options : [`<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="TextEditor"><br><constructor-arg ref="spellChecker"/>
</bean>
<bean id="spellChecker" class="SpellChecker"></bean>
</xmp>
</code></pre>` 
            ,`<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spellChecker"/>
</bean>
<bean id="spellChecker" class="online.cceestudy.SpellChecker">
</bean>
</xmp>
</code></pre>`
            ,`<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spell"/>
</bean>
<bean id="spellChecker" class="online.cceestudy.SpellChecker">
</bean>
</xmp>
</code></pre>`
            ,`<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spellChecker"/>
</bean>
</xmp>
</code></pre>`],
            answer : `<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spellChecker"/>
</bean>
<bean id="spellChecker" class="online.cceestudy.SpellChecker">
</bean>
</xmp>
</code></pre>`
        },
        {
            id : 29,
            question : "Which one of the following annotations is not used in Hibernate?",
            options : ["@Entity", "@Column", "@Basic", "@Query"],
            answer : "@Query"
        },
        {
            id : 30,
            question : "Why use Request Dispatcher to forward a request to another resource, instead of using a sendRedirect?",
            options : ["Redirects are no longer supported in the current servlet API", 
            "Redirects are not a cross-platform portable mechanism", 
            "The RequestDispatcher does not use the reflection API", 
            "The RequestDispatcher does not require a rounf trip to the client, and thus is more efficient and allows ther server to maintain request state"],
            answer : "The RequestDispatcher does not require a rounf trip to the client, and thus is more efficient and allows ther server to maintain request state"
        },
        {
            id : 31,
            question : "Which of the following statements about the fetch modes in Entity beans is FALSE?",
            options : ["There are two fetch modes: EAGER and LAZY", "The default fetching mode for a field in an Entity bean annotated by @Basic is LAZY", 
            "The default fetching mode for a field in an Entity bean annotated by @Basic is LAZY", 
            "Lob annotation does not have a default fetch mode"],
            answer : "The default fetching mode for a field in an Entity bean annotated by @OneToMany is LAZY"
        },
        {
            id : 32,
            question : "What is the storage capacity of single cookie?",
            options : ["2048 MB", "2048 bytes", "4095 bytes", "4095 MB"],
            answer : "4095 bytes"
        },
        {
            id : 33,
            question : "Any client request to access resources in the WEb-INF/ directory must be returned with",
            options : ["BAD_REQUEST", "SC_NOT_FOUND", "SC_INTERNAL_SERVER_ERROR", "ESC_BAD_REQUEST"],
            answer : "SC_NOT_FOUND"
        },
        {
            id : 34,
            question : "Which option is true about session scope?",
            options : ["Objects are accessible only from the page in which they are created", 
            "Objects are accessible only from the pages which are in same session", 
            "Objects are accessible only from the pages which are processing the same request", 
            "Objects are accessible only from the pages which reside in same application"],
            answer : "Objects are accessible only from the pages which are in same session"
        },
        {
            id : 35,
            question : "When the JPA Entities will become detached?",
            options : ["When the transaction (in transaction-scoped persistence context) commits, entities managed by the persistence context become detached.", 
            "If an application-managed persistence context is closed, all managed entities become detached.", 
            "Using a clear method", 
            "All of these"],
            answer : "Using a clear method"
        },
        {
            id : 36,
            question : "Which of the following statements are correct about the status of the Http response?",
            options : ["HTTP status codes in the 500 to 599 range indicate that the error is related to the client", 
            "HTTP status codes in the 400 to 499 range indicate that the error is related to the server", 
            "HTTP status codes in the 300 to 399 range are informational messages.", 
            "HTTP status codes in the 200 to 299 range means that the client's request was successful."],
            answer : "HTTP status codes in the 200 to 299 range means that the client's request was successful."
        },
        {
            id : 37,
            question : `What is the correct sequence to create a database connection? <br>
            i. Import JDBC packages. <br>
            ii. Open a connection to the database. <br>
            iii. Load and register the JDBC driver. <br>
            iv. Execute the statement object and return a query resultset. <br>
            v. Create a statement object to perform a query. <br>
            vi. Close the resultset and statement objects. <br>
            vii. Process the resultset. <br>
            viii. Close the connection.`,
            options : ["i, ii, iii, v, iv, vii, viii, vi", "i, iii, ii, v, iv, vii, vi, viii", 
            "ii, i, iii, iv, viii, vii, v, vi", "i, iii, ii, iv, v, vi, vii, viii"],
            answer : "i, iii, ii, v, iv, vii, vi, viii"
        },
        {
            id : 38,
            question : "What are the advantage of Hibernate?",
            options : ["Hibernate takes care of mapping Java classes to database tables using XML files and without writing any line of code.", 
            "Provides simple APIs for storing and retrieving Java objects directly to and from the database.", 
            "Minimizes database access with smart fetching strategies.", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 39,
            question : "Which of the following is true about persistent state of a persistent entity?",
            options : ["You can make a transient instance persistent by associating it with a Session.", 
            "A persistent instance has a representation in the database.", 
            "A persistent instance has an identifier value.", 
            "All of the above."],
            answer : "All of the above."
        },
        {
            id : 40,
            question : "What are the types of IOC Containers in Spring:",
            options : ["Bean Factory", "ApplicationContext", "Both of the above", "None of these"],
            answer : "Both of the above"
        }
    ]
},
{
    moduleName : "Microsoft .Net Technologies",
    questions : [
        {
            id : 1,
            question : "How many Bytes are stored by 'Long' Datatype in C# .net?",
            options : ["8", "4", "2", "1"],
            answer : "8"
        },
        {
            id : 2,
            question : `What will be the output of the following code snippet?
<pre class="language-java"><code>
using System;
class program
{
    static void Main(string[] args)
    {
        int x = 8;
        int b = 16;
        int c = 64;
        x /= c /= b;
        Console.WriteLine(x + " " + b+ " " +c);
        Console.ReadLine();
    }
}
</code></pre>`,
            options : ["2 16 4", "4 8 16", "2 4 8", "8 16 64"],
            answer : "2 16 4"
        },
        {
            id : 3,
            question : "Struct's data members are ___ by default.",
            options : ["Protected", "Public", "Private", "Default"],
            answer : "Private"
        },
        {
            id : 4,
            question : "In C# which keywords are used to declare reference types: ",
            options : ["class", "interface", "delegate", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 5,
            question : "Correct way to overload +operator?",
            options : ["public sample operator + (sample a, sample b)", 
            "public abstract operator + (sample a,sample b)", 
            "public static sample operator + (sample a, sample b)", 
            "all of the mentioned"],
            answer : "all of the mentioned"
        },
        {
            id : 6,
            question : `What could be the output for the set of code?
<pre class="language-java"><code>  
class overload
{
    public int x;
    int y;

    public int add(int a)
    {
        x = a + 1;
        return x;
    }

    public int add(int a, int b)
    {
        x = a + 2;
        return x;
    }
}

class Program
{
    static void Main(string[] args)
    {
        overload obj = new overload();
        overload obj1 = new overload();
        int a = 0;
        obj.add(6);
        obj1.add(6, 2);
        Console.WriteLine(obj.x);
        Console.WriteLine(obj1.x);
        Console.ReadLine();
    }
}
</code></pre>`,
            options : ["8, 8", "0, 2", "8, 10", "7, 8"],
            answer : "7, 8"
        },
        {
            id : 7,
            question : `What will be the output for the given set of code?
<pre class="language-java"><code>            
class a {
    public void fun()
    {
    Console.WriteLine("base method");
    }
}

class b: a
{
    public new void fun()
    {
    Console.WriteLine(" derived method ");
    }
}

class Program
{
    static void Main(string[] args)
    {
    b k = new b(); k.fun();
    Console.ReadLine();
    }
}
</code></pre>`,
            options : ["base method", "derived method", "Code runs successfully prints nothing", "Compile time error"],
            answer : "derived method"
        },
        {
            id : 8,
            question : "If base class consist of two private integers, one static integer and derived class consist of two static integers and one private integer. What would be the size of derived class object?",
            options : ["size of object depends on sizes of its non static data members", 
            "size of a derived class object is sum of sizes of non static data members of base class and derived class", 
            "size of object is calculated using sizeof() method", 
            "none of the mentioned"],
            answer : "size of object depends on sizes of its non static data members"
        },
        {
            id : 9,
            question : `What will be the output for the given set of code?
<pre class="language-java"><code>            
using System;

class Class2 {
    void change( out int x, out int y)
    {
        x = 10;
        y = 20;
    }

    static void Main() {
        int a = 50; 
        int b = 100; 
        Class2 obj1 = new Class2();
        obj1.change(out a, out b);
        Console.WriteLine("a is " + a + " and b is " + b );
    }
}
</code></pre>`,
            options : ["a is 60 and b is 120", "a is 10 and b is 20", "a is 50 and b is 100", "Compile time error"],
            answer : "a is 10 and b is 20"
        },
        {
            id : 10,
            question : `In _________ , the value of an argument is copied into 
            the formal parameter of the method & in _________, the changes made to the
            Reference parameter will affect the actual argument passed.`,
            options : ["call-by-reference, call-by-value", "call-by-value, call-by-reference", 
            "method overloading, method overriding", "call-by-value, call-by-reference"],
            answer : "call-by-value, call-by-reference"
        },
        {
            id : 11,
            question : "What is true about Destructor in C#",
            options : ["A destructor is a method in a class that is called when the object is destroyed.", 
            "Like constructors destructors will not have any return type.", 
            "Destructors don't take any arguments & are always public.", 
            "All of the above"],
            answer : "All of the above"
        },
        {
            id : 12,
            question : `What will be the output for the given set of code?
<pre class="language-java"><code>            
using System;

class Class1 {

    void change(ref int x)
    {
        x = x * 10;
        Console.WriteLine("Inside method change x is " + x);
    }

    static void Main() {
        int y;
        Class1 obj = new Class1();
        Console.WriteLine("Before calling change y is " + y);
        obj.change(ref y);
        Console.WriteLine("After calling change y is " + y);
    }
}
</code></pre>`,
            options : [
`Before calling change y is 100 <br>
Inside method change x is 100 <br>
After calling change y is 10 <br>`, 
`Before calling change y is 100 <br>
Inside method change x is 10 <br>
After calling change y is 100 <br>`,
`Before calling change y is 10 <br>
Inside method change x is 100 <br>
After calling change y is 100 <br>`,
"Compile time error",
],
            answer : "Compile time error"
        },
        {
            id : 13,
            question : "The ____________ is the execution engine for .NET applications and servers as the interface between .NET applications and the operating system.",
            options : ["Common Language Specifications (CLS)", 
            "Common Language Runtime (CLR)", 
            "Common Type System (CTS)", 
            "Framework Class Library (FCL)"],
            answer : "Common Language Runtime (CLR)"
        },
        {
            id : 14,
            question : `Which of the following statements are TRUE about the .NET CLR? <br>
1. It provides a language-neutral development & execution environment. <br>
2. It ensures that an application would not be able to access memory that it is not authorized to access. <br>
3. It provides services to run "managed" applications. <br>
4. The resources are garbage collected. <br>
5. It provides services to run "unmanaged" applications.`,
            options : ["Only 1 and 2", "Only 1, 2 and 4", "1, 2, 3, 4", "Only 3 and 4"],
            answer : "1, 2, 3, 4"
        },
        {
            id : 15,
            question : "How can you comment using Razor Syntax?",
            options : ["*@ Comment me *@", "@* Comment me *@", 
            "@* Comment me @*", "*@ Comment me @*"],
            answer : "@* Comment me *@"
        },
        {
            id : 16,
            question : "Which HTML helper method is used for rendering the partial view in the parent view?",
            options : ["@html.Partial()", "@html.RenderPartial()", "@html.RenderAction()", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 17,
            question : "Which of the following is not a namespace in the .NET Framework Class Library?",
            options : ["System.Process", "System.Security", "System.Threading", "System.xml"],
            answer : "System.Process"
        },
        {
            id : 18,
            question : "Two types of cookies are available in ASP.NET, ___________ resides on the client machine for a single session and is valid until the user logs out & ___________ resides on the user machine for a period specified for its expiry. It may be an hour, a day, a month, or never.",
            options : ["Session Cookie, Persistent Cookie", "Persistent Cookie, Session Cookie", 
            "First-party Cookie, Permanent Cookie", "Persistent Cookie, Secure Cookie"],
            answer : "Session Cookie, Persistent Cookie"
        },
        {
            id : 19,
            question : "_________ is a stored-value type that keeps track of each executing thread and its location. It is used for static memory allocation. __________ is a stored reference type that keeps track of the more precise objects or data. It is used for dynamic memory allocation.",
            options : ["Heap, Stack", "Stack, Heap", "RAM, Hard drive", "Queue, Heap"],
            answer : "Stack, Heap"
        },
        {
            id : 20,
            question : `State whether the following statements about the Microsoft Intermediate Language (MSIL) are TRUE or FALSE. <br>
            i) The MSIL code includes instructions to load, initialize and invoke methods on objects. <br>
            ii) The MSIL code is collected and assembled in the form of byte codes and is converted to a .NET assembly.`,
            options : ["i-True, ii-False", "i-False, ii-True", "i-True, ii-True", "i-False, ii-False"],
            answer : "i-True, ii-True"
        },
        {
            id : 21,
            question : "Which object in ASP.NET provides a global storage mechanism for state data that needs to be accessible to all pages in a given Web application?",
            options : ["Session", "Application", "ViewState", "None of the above"],
            answer : "Application"
        },
        {
            id : 22,
            question : "The __________ in MVC architecture handles any incoming URL request",
            options : ["Model", "Controller", "View", "All of the above"],
            answer : "Controller"
        },
        {
            id : 23,
            question : "How will you create the SQL Server Connection Objects in Code? Choose the correct option.",
            options : [`SqlConnection con = new SqlConnection ("Data Source=ServerName; <br>
            Initial Catalog=DatabaseName;Integrated Security=True");`, 
            `SqlConnection con = new SqlConnection(); <br>
            con.ConnectionString = ("Data Source=ServerName; Initial Catalog=DatabaseName;Integrated Security=True");`, 
            `using (SqlConnection con = new SqlConnection("Data Source=ServerName; <br>
            Initial Catalog=DatabaseName;Integrated Security=True")) <br>
            { <br>
            con.Open(); <br>
            - - - - - - <br>
            - - - - - - <br>
            }`, 
            "All of the above codes are correct."],
            answer : "All of the above codes are correct."
        },
        {
            id : 24,
            question : `Which of the following is the correct way to call the function MyFun() of the Sample class given below?
<pre class="language-java"><code>   
class Sample
{
    public int MyFun(int i)
    {
        Console.WriteLine("Welcome to cceestudy.online !" );
        return 0;
    }
}
</code></pre>`,
            options : [
`<pre class="language-java"><code>   
delegate void del(int i);
Sample s = new Sample();
deld = new del(ref s.MyFun);
d(10);
</code></pre>`,
`<pre class="language-java"><code>   
delegate int del(int i);
Sample s = new Sample(.);
del = new delegate(ref MyFun);
del(10);
</code></pre>`,
`<pre class="language-java"><code>   
Sample s = new Sample();
delegate void del = new delegate(ref MyFun);
del(10);
</code></pre>`,
`<pre class="language-java"><code>   
delegate int del(int i);
del d;
Sample s = new Sample();
d = new del(ref s.MyFun);
d(10);
</code></pre>`,
],
            answer : 
`<pre class="language-java"><code>   
delegate int del(int i);
del d;
Sample s = new Sample();
d = new del(ref s.MyFun);
d(10);
</code></pre>`
        },
        {
            id : 25,
            question : "ByDefault ASP.Net SessionID is stored in _________.",
            options : ["Application", "Session", "Cookies", "ViewState"],
            answer : "Cookies"
        },
        {
            id : 26,
            question : "How do you execute multiple SQL statements using a DataReader?",
            options : ["Call the ExecuteReadermethod of two Command objects and assign the results tothe same instance of a DataReader.", 
            "Call the ExecuteReadermethod of a single Command object twice.", 
            "Set the Command.CommandTextproperty to multiple SQL statements delimited by a semicolon.", 
            "Set the Command.CommandTypeproperty to multiple result sets."],
            answer : "Set the Command.CommandTextproperty to multiple SQL statements delimited by a semicolon."
        },
        {
            id : 27,
            question : "What is synchronization in reference to a thread?",
            options : ["It's a process of handling situations when two or more threads need access to a shared resource", 
            "It's a process by which many threads are able to access the same shared resource simultaneously", 
            "It's a process by which a method is able to access many different threads simultaneously", 
            "It's a method that allows too many threads to access any information they require"],
            answer : "It's a process of handling situations when two or more threads need access to a shared resource"
        },
        {
            id : 28,
            question : "The _________ namespace includes classes and interfaces that return information about types, methods, and fields.",
            options : ["system", "system.security", "system.data", "system.reflection"],
            answer : "system.reflection"
        },
        {
            id : 29,
            question : `What will be the output of the following C# code?
<pre class="language-java"><code>   
{
    try 
    {
        int []a = {1, 2, 3, 4, 5};
        for (int i = 0; i < 5; ++i) 
        Console.WriteLine(a[i]);
        int x = (1 / Convert.ToInt32(0));
    }
    catch(IndexOutOfRangeException e) 
    {
        Console.WriteLine("A");        	
    }
    catch(ArithmeticException e) 
    {     	
        Console.WriteLine("B");
    }
    Console.ReadLine();
}
</code></pre>`,
            options : ["1234", "12345", "Run time error", "12345B"],
            answer : "12345B"
        },
        {
            id : 30,
            question : "RedirectToAction() Method for which Status code represents?",
            options : ["304", "302", "300", "None"],
            answer : "302"
        },
        {
            id : 31,
            question : `State whether the following statements about .NET assembly are True or False. <br>
i) Assembly physically exists as DLLs or EXEs. <br>
ii) Assembly can include any file types like image files, text files, etc. along with DLLs or EXEs. <br>
iii) One assembly can contain only one file.`,
            options : ["i-True, ii-True, iii-True", "i-False, ii-True, iii-True", "i-True, ii-False, iii-True", "i-True, ii- True, iii-False"],
            answer : "i-True, ii- True, iii-False"
        },
        {
            id : 32,
            question : "How will you store and retrieve value in viewstate?",
            options : [
`// Storing the data in viewstate <br>
ViewState["SiteName"]="cceestudy"; <br>
// Retrieving Value from a View State <br>
Label1.Text = ViewState["SiteName"].ToString();`, 

`// Storing the data in viewstate <br>
ViewState obj=new ViewState <br>
ViewState [obj]="cceestudy"; <br>
// Retrieving Value from a View State <br>
Label1.Text = ViewState[obj].ToString();`,

`// Storing the data in viewstate <br>
ViewState obj=new ViewState <br>
ViewState [obj]="cceestudy"; <br>
// Retrieving Value from a View State <br>
Label1.Text = ViewState[obj].ToString();`,

"None of the above."],
            answer : 
`// Storing the data in viewstate
ViewState["SiteName"]="cceestudy";
// Retrieving Value from a View State
Label1.Text = ViewState["SiteName"].ToString();`
        },
        {
            id : 33,
            question : `Which of the following are the advantages of Garbage Collector? <br>
            i) Allow us to develop an application without having worry to about free memory. <br>
            ii) Allocates memory for objects efficiently on the managed heap. <br>
            iii) Provides memory safety by making sure that an object cannot use the content of another object.`,
            options : ["i and ii only", "ii and iii only", "i and iii only", "All i, ii and iii"],
            answer : "All i, ii and iii"
        },
        {
            id : 34,
            question : `Suppose a Student class has an indexed property. This property is used to set or retrieve values to/from an array of 5 integers called scores[]. We want the property to report "Invalid Index" message if the user attempts to exceed the bounds of the array. Which of the following is the correct way to implement this property?`,
            options : [
`<pre class="language-java"><code>   
class Student
{
    int[] scores = new int[5] {3, 2, 4, 1, 5};
    public int this[ int index ]
    {
        set
        {
            if (index < 5)
                scores[index] = value;
            else 
                Console.WriteLine("invalid Index");
        }
    }
}
</code></pre>`,
`<pre class="language-java"><code>   
class Student
{
    int[] scores = new int[5] {3, 2, 4, 1, 5};
    public int this[ int index ]
    {
        get
        {
            if (index < 5)
                return scores[ index ];
            else
            {
                Console.WriteLine("Invalid Index");
                return 0;
            }
        }
        set
        {
            if (index < 5)
                scores[ index ] = value;
            else    
                Console.WriteLine("Invalid Index");
        }
    }
}
</code></pre>`,
`<pre class="language-java"><code>   
class Student
{
    int[] scores = new int[5] {3, 2, 4, 1, 5};
    public int this[ int index ]
    {
        get
        {
            if (index < 5)
                return scores[ index ];
            else
            {
                Console.WriteLine("Invalid Index");
                return 0;
            }
        }
    }
}
</code></pre>`,
`<pre class="language-java"><code>   
class Student
{
    int[] scores = new int[5] {3, 2, 4, 1, 5};
    public int this[ int index ]
    {
        get
        {
            if (index < 5)
               scores[ index ] = value;
            else
            {
                Console.WriteLine("Invalid Index");
            }
        }
        set
        {
            if (index < 5)
                return scores[ index ];
            else   
            {
                Console.WriteLine("Invalid Index");
                return 0;
            } 
        }
    }
}
</code></pre>`
            ],
            answer : 
`<pre class="language-java"><code>   
class Student
{
    int[] scores = new int[5] {3, 2, 4, 1, 5};
    public int this[ int index ]
    {
        get
        {
            if (index < 5)
                return scores[ index ];
            else
            {
                Console.WriteLine("Invalid Index");
                return 0;
            }
        }
        set
        {
            if (index < 5)
                scores[ index ] = value;
            else    
                Console.WriteLine("Invalid Index");
        }
    }
}
</code></pre>`
        },
        {
            id : 35,
            question : "What is the extension of MVC view when using C#?",
            options : ["cshtml", "vbhtml", "Both of the above", "None of these"],
            answer : "Both of the above"
        },
        {
            id : 36,
            question : "On call of which type of method the new created thread will not start executing?",
            options : ["Begin()", "Start()", "New()", "All of the mentioned"],
            answer : "Start()"
        },
        {
            id : 37,
            question : "Which of the following statements are correct about delegates?",
            options : ["Delegates cannot be used to call a static method of a class.", 
            "Delegates cannot be used to call procedures that receive variable number of arguments.", 
            "If signatures of two methods are same they can be called through the same delegate object.", 
            "Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine."],
            answer : "Delegates cannot be used to call procedures that receive variable number of arguments."
        },
        {
            id : 38,
            question : `Choose the correct one.  
<pre class="language-java"><code>   
int[] A = { 0, 2, 4, 5, 6, 8 };
int[] B = { 1, 3, 5, 7, 8 };
  
var nums = A.Union(B);   
   
foreach (var n in nums)
{
    Console.Write(n + " ");
}
</code></pre>`,
            options : ["0 2 4 5 6 8 1 3 5 7 8", "0 2 4 5 6 8 1 3 7", 
            "0 1 2 3 4 5 6 7 8", "None of the above"],
            answer : "0 2 4 5 6 8 1 3 7"
        },
        {
            id : 39,
            question : "What is RouteConfig.cs in ASP.Net MVC?",
            options : ["RouteConfig.cs is used to register MVC config statements, route config.", 
            "RouteCOnfig.css is used to register global MVC bundles.", "Both of the above", "None of these"],
            answer : "Both of the above"
        },
        {
            id : 40,
            question : `For the given set of codes, what is the output?
<pre class="language-java"><code>   
class Program
{
    static void Main(string[] args)
    {
        int[] nums = { 1, -2, -3, 5 };
        var posNums = from n in nums
                      orderby n descending
                      select n*4 / 2;
        Console.Write("The values in nums: ");
        foreach (int i in posNums) Console.Write(i + " ");
        Console.WriteLine();
        Console.ReadLine();
    }
}
</code></pre>`,
            options : ["10 2 -4 -6", "5 1 -2 -3", "1 5 -2 -3", "Run time error"],
            answer : "10 2 -4 -6"
        }
    ]
},
{
    moduleName : "Software Development Methodologies",
    questions : [
        {
            id : 1,
            question : "Agile Software Development is based on",
            options : ["Incremental Development", "Iterative Development", 
            "Both of the above", "Waterfall Model"],
            answer : "Both of the above"
        },
        {
            id : 2,
            question : `__________ Testing <br>
            i) Performed by end-users and also by testers and developers <br>
            ii) Based on external expectations <br>
            iii) Exhaustive and the least timeconsuming <br>
            iv) The internal workings need not be known`,
            options : ["Black-Box", "Grey-Box", "White-Box", "None of these"],
            answer : "Black-Box"
        },
        {
            id : 3,
            question : "In V model, Validation refers a process of evaluating a system after successfully completion to find out whether __________ and __________ are meet or not.",
            options : ["Customer expectations, Requirements", "System development, Testing", 
            "Analysis, design", "None of the mentioned above"],
            answer : "Customer expectations, Requirements"
        },
        {
            id : 4,
            question : "Which of the following type of virtualization is also characteristic of cloud computing?",
            options : ["Storage", "Application", "CPU", "All of the mentioned"],
            answer : "All of the mentioned"
        },
        {
            id : 5,
            question : "A _________ keeps track of the contributions of the developers working as a team on the projects.",
            options : ["CVS", "DVF", "VCS", "LFS"],
            answer : "VCS"
        },
        {
            id : 6,
            question : "What is the correct sequence of stages of waterfall model?",
            options : ["Implementation --> Design --> Requirement Specification --> Verification and Testing --> Deployment --> Maintenance", 
            "Implementation --> Design --> Requirement Specification --> Verification and Testing --> Deployment --> Maintenance", 
            "Requirement Specification --> Design --> Implementation --> Verification and Testing --> Deployment --> Maintenance", 
            "Requirement Specification --> Design --> Deployment --> Maintenance --> Implementation --> Verification and Testing"],
            answer : "Requirement Specification --> Design --> Implementation --> Verification and Testing --> Deployment --> Maintenance"
        },
        {
            id : 7,
            question : "The files that can be committed are always present in git ",
            options : ["working directory", "staging area", "unstaged area", "Anywhere, there is no barrier"],
            answer : "staging area"
        },
        {
            id : 8,
            question : "__________ is a tool for automating testing web applications & Interacts directly with the browser and uses the browser's engine to control it.",
            options : ["Selenuim", "WebDriver", "jUnit", "JIRA"],
            answer : ""
        },
        {
            id : 9,
            question : "Under which condition the developers should use microservices?",
            options : ["When they want to develop apps for mobile phones that run quickly", 
            "When they need to create large, enterprise-level applications that are subject to frequent changes", 
            "When they want to develop scientific test equipment applications", 
            "None of the above"],
            answer : "When they need to create large, enterprise-level applications that are subject to frequent changes"
        },
        {
            id : 10,
            question : `Match the following problems with their appropriate solutions: 
            <img class = 'mt-3' src='https://cceestudy.online/images/tests/asdm.jpg' style='width : 100%;' />`,
            options : ["1-D, 2-E, 3-A, 4-C, 5-B", "1-D, 2-A, 3-E, 4-C, 5-B",
                    "1-E, 2-B, 3-D, 4-C, 5-A", "1-D, 2-C, 3-A, 4-B, 5-E"],
            answer : "1-D, 2-E, 3-A, 4-C, 5-B"
        },
        {
            id : 11,
            question : "___________, also known as K8s, is an open-source orchestartion system for automating deployment, scaling, and management of contanerized applications.",
            options : ["Atlassian Jira", "docker swarm", "Kubernetes", "GitHub"],
            answer : "Kubernetes"
        },
        {
            id : 12,
            question : "The intent of ___________ is to ensure that a change, such as a bug fix should not result in another fault being uncovered in the application?",
            options : ["functional testing", "regression testing", "integration testing", "unit testing"],
            answer : "regression testing"
        },
        {
            id : 13,
            question : "Which term defines the process of project compliance with policies and procedures?",
            options : ["Quality control", "Quality assurances", "Quality audits", "Quality control management"],
            answer : "Quality control management"
        },
        {
            id : 14,
            question : "Which command creates a copy of an existing git repository.",
            options : ["git copy", "git clone", "git replace", "git move"],
            answer : "git clone"
        },
        {
            id : 15,
            question : `In Agile product development, A __________ is a short (ideally two to 4 week) period 
            in which a development team implements and delivers functionality by completing stories.`,
            options : ["Story", "Task", "Event", "Sprint"],
            answer : "Sprint"
        },
        {
            id : 16,
            question : "Which of the following is not included in SRS?",
            options : ["Performance", "Functionality", "Design solutions", "External interfaces"],
            answer : "Design solutions"
        },
        {
            id : 17,
            question : "_________ provides complete isolation from the host operating system and the other Virtual Machines (VMs), so it is fully secure.",
            options : ["Virtualization", "Containerization", "Security", "Cloud"],
            answer : "Virtualization"
        },
        {
            id : 18,
            question : "How many buckets can you create in AWS by default?",
            options : ["25 buckets", "50 buckets", "100 buckets", "200 buckets"],
            answer : "100 buckets"
        },
        {
            id : 19,
            question : "Jenkins was developed for",
            options : ["Continuous Integration", "Continuous Deployment", "Continuous Monitoring", "Continuous Delivery"],
            answer : "Continuous Integration"
        },
        {
            id : 20,
            question : "__________ is a human-friendly data serialization language for all programming languages.",
            options : ["XAML", "XML", "YAML", "JSON"],
            answer : "YAML"
        },
        {
            id : 21,
            question : "A user story that is too large is broken into smaller stories called ________.",
            options : ["Epic", "Story", "Change", "Incident"],
            answer : "Epic"
        },
        {
            id : 22,
            question : "DevOps imroved collabration and productivity by",
            options : ["Automating infrastructure", "Automating workflow", "Continuously measuring application performance", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 23,
            question : "Which command is used to undone the commit in git?",
            options : ["git revert", "git undo", "git prev", "git reset"],
            answer : "git revert"
        },
        {
            id : 24,
            question : "In WebDriver, __________ command can be used to enter values onto text boxes?",
            options : ["selenium.type()", "type()", `sendKeys("text")`, `driver.type("text")`],
            answer : ""
        },
        {
            id : 25,
            question : "How to remove a running container in docker?",
            options : ["docker container rm <container id/name>", 
            "docker rm <container id/name>", 
            "docker container delete <container id/name>", 
            "docker container rm --force <container id/name>"],
            answer : "docker container rm --force <container id/name>"
        },
        {
            id : 26,
            question : "Which of the following testing is also known as white-box testing?",
            options : ["Structural testing", "Error guessing technique", "Design based testing", "None of the above"],
            answer : "Structural testing"
        },
        {
            id : 27,
            question : "_________ is a software development life cycle model that is chosen if the development team has less experience on similar projects.",
            options : ["Iterative Enhancement Model", "RAD", "Spiral", "Waterfall"],
            answer : "Spiral"
        },
        {
            id : 28,
            question : "Which of the following file you can configures to ensure that certain file types are never commited to the local Git repository?",
            options : [".gitignore", "gitignore.txt", "git.ignore", "ignore.git"],
            answer : ".gitignore"
        },
        {
            id : 29,
            question : "To get details of a selected node in Kubernets which command is used?",
            options : ["kubectl get nodes", "kubectl describe node <node name>", "kubestl select", "kubestl fetch"],
            answer : "kubectl describe node <node name>"
        },
        {
            id : 30,
            question : "EC2 stands for ?",
            options : ["Elastic Compute Cloud", "Elastic Cloud Compute", "Elastic Configuration Cloud", "Elastic Cloud Configuration"],
            answer : "Elastic Compute Cloud"
        },
        {
            id : 31,
            question : "Scrum development teams consist of ____________.",
            options : ["Developers", "Quality assurance specialists", "Scrum Masters", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 32,
            question : "What is version control?",
            options : ["a type of architecture used to manage large databases", 
            "a system that shows, tracks, and controls changes to a set of files over time", 
            "a programmatic design pattern used to manage code between multiple engineering teams", 
            "a type of software that links a project with a gitHub repository"],
            answer : "a system that shows, tracks, and controls changes to a set of files over time"
        },
        {
            id : 33,
            question : "In which of the following service models the hardware is virtualized in the cloud?",
            options : ["Saas", "Paas", "Caas", "Iaas"],
            answer : "Iaas"
        },
        {
            id : 34,
            question : "What is a microservice?",
            options : ["A design used primarily in functional programming and object-oriented programming", 
            "A style of design for enterprise systems based on a loosely coupled component architecture", 
            "A small program that represents discrete logic that executes within a well-defined boundary on dedicated hardware", 
            "A very small piece of code that never gets any bigger than 10 lines"],
            answer : "A style of design for enterprise systems based on a loosely coupled component architecture`"
        },
        {
            id : 35,
            question : "Object oriented technology's use of ___________ facilitates reuse of the code and architecture while its ______________ feature provides systems with stability, as a small change in requirements doesn't require massive changes in the system.",
            options : ["Inheritance, Encapsulation", "Inheritance, Polymorphism", 
            "Encapsulation, Polymorphism", "Polymorphism, Abstraction"],
            answer : "Inheritance, Encapsulation"
        },
        {
            id : 36,
            question : "The UML supports event-based modeling using _________ diagrams.",
            options : ["Deployment", "Collaboration", "State chart", "All of the mentioned"],
            answer : "State chart"
        },
        {
            id : 37,
            question : "SDLC stands for",
            options : ["Software Development Life Cycle", "System Development Life cycle",
                        "Software Design Life Cycle", "System Design Life Cycle"],
            answer : "Software Development Life Cycle"
        },
        {
            id : 38,
            question : "Which is the most important feature of spiral model?",
            options : ["Quality management", "Risk management", "Performance management", "Efficiency management"],
            answer : "Risk management"
        },
        {
            id : 39,
            question : "The SDLC Model most suitable for small projects with clear requirements is",
            options : ["Spiral Model", "Incremental Model", "Waterfall Model", "Prototyping Model"],
            answer : "Waterfall Model"
        },
        {
            id : 40,
            question : "An Enterprise application runs on Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer. If one of these instances fails, what occurs?",
            options : ["The load balancer will automatically replace the failed instance.", 
            "The load balancer will stop sending requests to the failed instance.", 
            "The load balancer will terminate the failed instance.", 
            "The load balancer will return 504 Gateway Timeout errors until the instance is replaced."],
            answer : "The load balancer will stop sending requests to the failed instance."
        }
    ]
},
{
    moduleName : "Object Oriented Programming with Java - test 2",
    questions : [
        {
            id : 1,
            question : `What is the output of the below code snippet:
<pre class="language-java"><code>
class Base {

    public void fun() {
        System.out.println("Base fun()");
    }

    public void fun1() {
        System.out.println("Base fun1()");
        fun();
    }

}

class derived extends Base {

    public void fun() {
        System.out.println("Derived fun()");
    } 
}

public class MainClass {

    public static void main(String[] args){
        derived d1 = new Base();
        d1.fun1();
    }
}

</code></pre>`,
            options : ["Error: Type mismatch: cannot convert from Base to derived", 
            "Base fun1() <br> Derived fun()", 
            "Base fun1() <br> Base fun()", 
            "Error : cannot call the method of the base class"],
            answer : "Error: Type mismatch: cannot convert from Base1 to derived"
        },
        {
            id : 2,
            question : `What will happen when you attempt to compile and run this code
<pre class="language-java"><code>
class Base {

    public final void method1() {
        System.out.println("method");
    }
}

public class Fin extends Base {

    public static void main(String args[]){
        Base b = new Base();
        b.method1();
    }
}
</code></pre>`,
            options : ["It will print method", "Compile time error", "Runtime error", "It will compile but doesn't print anything"],
            answer : "It will print method"
        },
        {
            id : 3,
            question : "Which assignments are illegal?",
            options : ["long test = 012;", "float f = -412;", "int other = (int)true;", "double d = 0x12345678;"],
            answer : "int other = (int)true;"
        },
        {
            id : 4,
            question : `What will happen when you attempt to compile and run this code
<pre class="language-java"><code>
public class Over {

    public static void main(String[] args){
        Under u = new Under();
        u.test();
    }

    int test(){
        System.out.println("over");
        return 1;
    }
}

class Under extends Over {

    int test(){
        super.test();
        System.out.println("Under");
        return 1;
    }
}

</code></pre>`,
            options : ["This code compiles, runs and displays over followed by Under", 
            "This code compiles, runs and displays Under followed by over", 
            "This code does not compile", 
            "Code will compile but gives runtime error"],
            answer : "This code compiles, runs and displays over followed by Under"
        },
        {
            id : 5,
            question : `What will be the output of this code:
<pre class="language-java"><code>
public class TestClass {
    
    public static void main ( String args[] ){
        Strings s = "hello";
        StringBuffer sb = new StringBuffer("hello");

        if(s == sb.toString()){
            System.out.println("Equal");
        }
        else 
            System.out.println("Not Equal");
    } 
}
</code></pre>`,
            options : ["Equal", "Not Equal", "Compile time error", "Nothing will print"],
            answer : "Not Equal"
        },
        {
            id : 6,
            question : `What will be the output of this code:
<pre class="language-java"><code>
public class Exceptiondemo {
    
    public static void main ( String args[] ){
        int i = 1, j = 1;
        try {
            i++;
            j--;
            if( i / j > 1)
                i++;
        }
        catch (Exception e){
            System.out.println("Exception");
        } 
        catch (ArithmeticException e){
            System.out.println("Arithmetic Exception");
        }
        catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Array Index Exception");
        }
        finally{
            System.out.println("finally");
        }
    } 
}
</code></pre>`,
            options : ["Exception", "Arithmetic Exception", "Array Index Exception", 
            "Compile time error: exception ArithmeticException has already been caught"],
            answer : "Compile time error: exception ArithmeticException has already been caught"
        },
        {
            id : 7,
            question : `What will happen when you attempt to compile and run this code
<pre class="language-java"><code>
public class Test {

    public static void main( String args[] ){
        int a = 5;
        System.out.println( cube(a) );
    }
    
    int cube ( int theNum ){
        return theNum * theNum * theNum;
    }
}
</code></pre>`,
            options : ["125", "5", "cube(a)", "Compile time error"],
            answer : "Compile time error"
        },
        {
            id : 8,
            question : `What will be the output of this code:
<pre class="language-java"><code>
public class Tester {
    int var;

    Tester (double var){
        this.var = (int)var;
    }

    Tester(int var){
        this("hello");
    }

    Tester(String s){
        this();
        System.out.println(s);
    }

    Tester(){
        System.out.println("good-bye");
    }

    public static void main( String[] args ){
        Tester t = new Tester(5);
    }
}
</code></pre>`,
            options : ["good-bye <br> hello", "hello", "5", "hello <br> good-bye"],
            answer : "good-bye <br> hello"
        },
        {
            id : 9,
            question : "Which of the following statement is false?",
            options : ["If a class has any abstract methods it must be declared abstract itself.", 
            "All methods in an abstract class must be declared as abstract", 
            "When applied to a class, the final modifier means it cannot be sub-classed", 
            "transient and volatile are Java modifiers"],
            answer : "All methods in an abstract class must be declared as abstract"
        },
        {
            id : 10,
            question : `What will be the output of this code:
<pre class="language-java"><code>
public class RTException {

    public static void throwit () {
        System.out.print("throw it ");
        throw new RuntimeException();
    }

    public static void main( String[] args){
        try{
            System.out.print("hello ");
            throwit();
        }
        catch (Exception re){
            System.out.print("caught ");
        }
        finally {
            System.out.print("finally ");
        }
        System.out.println("after ");
    }
}
</code></pre>`,
            options : ["hello throw it caught finally after", "hello caught", "hello finally after", "Compile time error"],
            answer : "hello throw it caught finally after"
        },
        {
            id : 11,
            question : "Which collection class allows you to access its elements by associating a key with an element's value, and provides synchronization?",
            options : ["java.util.SortedMap", "java.util.TreeMap", "java.util.TreeSet", "java.util.HashTable"],
            answer : "java.util.HashTable"
        },
        {
            id : 12,
            question : "Which statement is wrong?",
            options : ["Interface can extend an interface.", 
            "We can define a variable inside an interface.", 
            "Interface can implement an interface.", 
            "Interface is pure abstract class."],
            answer : "Interface can implement an interface."
        },
        {
            id : 13,
            question : `What access control keyword should you use to allow 
            other classes to access a method freely within its package, but to restrict 
            classes outside of the package from accessing that method?`,
            options : ["public", "protected", "private", "do not supply an access control keyword"],
            answer : "do not supply an access control keyword"
        },
        {
            id : 14,
            question : "Objects are passed by value or reference?",
            options : ["By value", "By reference", "it depends upon how you specify", "None of the above"],
            answer : "By value"
        },
        {
            id : 15,
            question : "If you write System.exit(0) at the end of try block, will the finally block still execute?",
            options : ["Yes", "No", "It depends upon return statement", "Can't say"],
            answer : "No"
        },
        {
            id : 16,
            question : "Which is not a method of Object class?",
            options : ["toString", "clone", "equals", "compare"],
            answer : "compare"
        },
        {
            id : 17,
            question : "Which is valid declaration of a String?",
            options : ["String s2 = 'null';", "String s3 = (String) 'abc';", 
            "String s1 = null;", "Strings4 = (String) '\ufeed'"],
            answer : "String s1 = null;"
        },
        {
            id : 18,
            question : "Which is valid declaration within an interface?",
            options : ["public static short stop = 23;", "protected short stop = 23;", 
            "transient short stop = 23;", "final void madness (short stop);"],
            answer : "public static short stop = 23;"
        },
        {
            id : 19,
            question : `What will be the output of this code:
<pre class="language-java"><code>
public class Equals{

    public static void main(String[] args){
        int x = 100;
        double y = 100.1;
        boolean b = (x == y);
        System.out.println(b);
    }
}
</code></pre>`,
            options : ["true", "false", "Compile time error", "Runtime error"],
            answer : "false"
        },
        {
            id : 20,
            question : "Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronised?",
            options : ["java.util.HashSet", "java.util.LinkedHashSet", "java.util.List", "java.util.ArrayList"],
            answer : "java.util.ArrayList"
        },
        {
            id : 21,
            question : `What will be the output of this code:
<pre class="language-java"><code>
String x = 'xyz';
x.toUpperCase();
String y = x.replace('Y', 'y');
y = y + "abc";
System.out.println(y);
</code></pre>`,
            options : ["abcXyZ", "XyZabc", "xyzabc", "compilation fails"],
            answer : "xyzabc"
        },
        {
            id : 22,
            question : "How can you serialize an object?",
            options : ["You have to make the class of the object implement the interface Serializable.", 
            "You must call the method serializeObject() (which is inherited from class Object) on the object.", 
            "You should call the static method serialize(Object obj) from class Serializer, with as argument the object to be serialized.", 
            "You don't have to do anything, because all objects are serializable by default."],
            answer : "You have to make the class of the object implement the interface Serializable."
        },
        {
            id : 23,
            question : `What will be the output of this code:
<pre class="language-java"><code>
class X {
    Y b = new Y();
    X() {
        System.out.print("X");
    }
}
class Y {
    Y() {
        System.out.print("Y");
    }
}
public class Z extends X {
    Y y = new Y();
    Z() {
        System.out.print("Z");
    }

    public static void main(String[] args) {
        new Z();
    }
}
</code></pre>`,
            options : ["Z", "YZ", "XYZ", "YXYZ"],
            answer : "YXYZ"
        },
        {
            id : 24,
            question : "Which of the following statements are true?",
            options : ["static methods do not have access to the implicit variable called this", 
            "A static method may be called without creating an instance of its class", 
            "All of Above", 
            "None of Above"],
            answer : "static methods do not have access to the implicit variable called this"
        },
        {
            id : 25,
            question : "Which of the following are methods of the Runnable interface?",
            options : ["run", "start", "yield", "stop"],
            answer : "run"
        },
        {
            id : 26,
            question : "What are a native methods?",
            options : ["Native methods are usually used to interface with system calls or libraries written in other programming languages.", 
            "Native methods are as same like as abstract method.", 
            "Both of these.", 
            "None of these."],
            answer : "Native methods are usually used to interface with system calls or libraries written in other programming languages."
        },
        {
            id : 27,
            question : `What will be the output of this code:
<pre class="language-java"><code>
class Base {
    void show(){
        System.out.println("Base Class");
    }
}

class Derived {
    void show(){
        System.out.println("Derived Class");
    }
}

public class MainClass {
    public static void main(String[] args) {
        Base b1 = new Base();
        Derived d1 = new Derived();
        b1.show();
        d1.show();
        Base b2 = d1;
        b2.show();
        d1.show();
    }
}
</code></pre>`,
            options : ["Error : Cannot convert Base to Derived", 
            "Base Class <br> Derived Class <br> Base Class <br> Derived Class", 
            "Base Class <br> Derived Class <br> Derived Class <br> Base Class", 
            "Base Class <br> Derived Class <br> Derived Class <br> Derived Class"],
            answer : "Error : Cannot convert Base to Derived"
        },
        {
            id : 28,
            question : "String Class is",
            options : ["is final", "is public", "is serializable", "All of the above"],
            answer : "All of the above"
        },
        {
            id : 29,
            question : "Which keyword when applied on a method indicates that only one thread should execute the method at a time. Select the one correct answer.",
            options : ["transient", "static", "final", "Synchronized"],
            answer : "Synchronized"
        },
        {
            id : 30,
            question : "which method is used to know the element add the top of the stack?",
            options : ["pop()", "top()", "peek()", "search()"],
            answer : "peek()"
        },
        {
            id : 31,
            question : "Which interface provides the capability to store objects using a key-value pair?",
            options : ["Java.util.Map", "Java.util.Set", "Java.util.List", "Java.util.Collection"],
            answer : "Java.util.Map"
        },
        {
            id : 32,
            question : "Which of the following statements about arrays is syntactically wrong?",
            options : ["Person[] p = new Person[5];", "Person p[5];", "Person[] p [];", "Person p [][] = new Person[2][];"],
            answer : "Person p[5];"
        },
        {
            id : 33,
            question : "Process of writing the state of object into byte stream",
            options : ["Deserialisation", "Externlisation", "serialization", "print"],
            answer : "serialization"
        },
        {
            id : 34,
            question : "To display text on the applet _________ method is used.",
            options : ["showString()", "drawString()", "println()", "printString()"],
            answer : "drawString()"
        },
        {
            id : 35,
            question : "Which of the following are true about interfaces.",
            options : ["Methods declared in interfaces are implicitly private.", 
            "Variables declared in interfaces are implicitly public, static, and final.", 
            "The keyword implements indicate that an interface inherits from another.", 
            "An interface can not extend any number of interfaces."],
            answer : "Variables declared in interfaces are implicitly public, static, and final."
        },
        {
            id : 36,
            question : "What is the process of defining two or more methods within same class that have same name but different parameters declaration?",
            options : ["method overloading", "method overriding", "method hiding", "none of the mentioned"],
            answer : "method overloading"
        },
        {
            id : 37,
            question : "Which package contains all the classes and interfaces for the Collection framework",
            options : ["java.lang", "java.collections", "java.util", "java.io"],
            answer : "java.util"
        },
        {
            id : 38,
            question : "Which of the below is invalid identifier with the main method?",
            options : ["public", "static", "private", "final"],
            answer : "private"
        },
        {
            id : 39,
            question : "Which keyword is used by the method to refer to the object that invoked it?",
            options : ["import", "catch", "abstract", "this"],
            answer : "this"
        },
        {
            id : 40,
            question : "Which function is used to perform some action when the object is to be destroyed?",
            options : ["finalize()", "delete()", "main()", "none of the mentioned"],
            answer : "finalize()"
        }
    ]
}
]


{/* <img class = 'mt-3' src='https://cceestudy.online/images/tests/images1.jpg' style='width : 100%;' /> */}

module.exports = data