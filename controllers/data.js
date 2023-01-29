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
            question : `Consider the set of 5 processes whose arrival time and burst time are given below-
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
                        Find out the number of page faults using LRU (Lease recently used) Page Replacement Algorithm`,
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
            question : `
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
            question : "To access a protected variable or method of a Class outside the package, you need to ____ in Java.",
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
           -------------------------------------------------------
           |  25  |  60  |  34  |  7  |  9  |  54  |  76  |  81  |  <-- Top
           -------------------------------------------------------  
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
            question : "Which of the following is the correct syntax for referring the external style sheet?",
            options : [
`<pre class="HTML"><code>
<style src = example.css>
</code></pre>`,
`<pre class="HTML"><code>
<style src = "example.css">
</code></pre>`,
`<pre class="HTML"><code>
<stylesheet> example.css </stylesheet>
</code></pre>`,
`<pre class="HTML"><code>
<link rel="stylesheet" type="text/css" href="example.css">
</code></pre>`
],
            answer : 
`<pre class="HTML"><code>
<link rel="stylesheet" type="text/css" href="example.css">
</code></pre>`
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
            question : "Which of the following HTML code will make an image clickable?",
            options : [
`<pre class="HTML"><code>
<a href="https://www.cceestudy.com/">Home page</a>
</code></pre>`,
`<pre class="HTML"><code>
<img src="https://www.cceestudy.com/logo.jpg">
<a href="https://www.cceestudy.com/">Home page</a>
</img>
</code></pre>`,
`<pre class="HTML"><code>
<a href="https://www.cceestudy.com/">Home page</a>
<img src="https://www.cceestudy.com/logo.jpg" />
</code></pre>`,
`<pre class="HTML"><code>
<a href="https://www.cceestudy.com/"><img src="https://www.cceestudy.com/logo.jpg"></a>
</code></pre>`
            ],
            answer : 
`<pre class="HTML"><code>
<a href="https://www.cceestudy.com/"><img src="https://www.cceestudy.com/logo.jpg"></a>
</code></pre>`
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
            question : "Which is the correct symbol to insert a comment in HTML?",
            options : ["//", "/* ... */", "<!-- ... -->", "HTML doesn't support the comments"],
            answer : "<!-- ... -->"
        },
        {
            id : 15,
            question : "ReactJS uses _______ to increase performance.",
            options : ["Virtual DOM", "Original DOM", "Primary DOM", "All of the above"],
            answer : "Virtual DOM"
        },
        {
            id : 16,
            question : `<pre class="JavaScript"><code>
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
    return <h1> ComponentOne </h1>;
}

function ComponentTwo(){
    return <h1> ComponentTwo </h1>;
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
            question : `Which is the correct code of functional component in ReactJs application to create below 
            button which increase the counter value by 1?
            <h5>1</h5>
            <button className='btn btn-primary'>Click</button>`,
            options : [
`<pre class="JavaScript"><code>
import React from "react";
import { useState } from 'react';

export default function Counter() {
    
    const[count , setCount] = useState(1);

    return (
        <div>
        <h5>{count}</h5>
        <button className='btn btn-primary' onClick = {()=> setCount(count+1);}>Click</button>
        </div>
    );
}
</code></pre>`,
`<pre class="JavaScript"><code>
import React from "react";
import { useState } from 'react';

export default function Counter() {
    
    const[count , setCount] = useState(1);

    return (
        <h5>{count}</h5>
        <button className='btn btn-primary' onClick = {()=> setCount(count+1);}>Click</button>
    );
}
</code></pre>`,
`<pre class="JavaScript"><code>
import React from "react";

export default function Counter() {
    return (
        <div>
        <h5>{count}</h5>
        <button className='btn btn-primary' onClick = {count++}>Click</button>
        </div>
    );
}
</code></pre>`,
`<pre class="JavaScript"><code>
import React from "react";

export default function Counter() {
    
    const[count , setCount] = useState(1);

    return (
        <div>
        <h5>{count}</h5>
        <button className='btn btn-primary' onClick = {()=> setCount(count+1);}>Click</button>
        </div>
    );
}
</code></pre>`],
            answer : 
`<pre class="JavaScript"><code>
import React from "react";
import { useState } from 'react';

export default function Counter() {
    
    const[count , setCount] = useState(1);

    return (
        <div>
        <h5>{count}</h5>
        <button className='btn btn-primary' onClick = {()=> setCount(count+1);}>Click</button>
        </div>
    );
}
</code></pre>`
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
            question : "Which is the correct symbol to insert a comment in JSON?",
            options : ["//", "/* ... */", "<!-- ... -->", "JSON doesn't support the comments"],
            answer : "JSON doesn't support the comments"
        }
    ]
},
{
    moduleName : "Web-based Java Programming",
    questions : [
        {
            id : 1,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 2,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 3,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 4,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 5,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 6,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 7,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 8,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 9,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 10,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 11,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 12,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 13,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 14,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 15,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 16,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 17,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 18,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 19,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 20,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 21,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 22,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 23,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 24,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 25,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 26,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 27,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 28,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 29,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 30,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 31,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 32,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 33,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 34,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 35,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 36,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 37,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 38,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 39,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 40,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        }
    ]
},
{
    moduleName : "Microsoft .Net Technologies",
    questions : [
        {
            id : 1,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 2,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 3,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 4,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 5,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 6,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 7,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 8,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 9,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 10,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 11,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 12,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 13,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 14,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 15,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 16,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 17,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 18,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 19,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 20,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 21,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 22,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 23,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 24,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 25,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 26,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 27,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 28,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 29,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 30,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 31,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 32,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 33,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 34,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 35,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 36,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 37,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 38,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 39,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 40,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        }
    ]
},
{
    moduleName : "Software Development Methodologies",
    questions : [
        {
            id : 1,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 2,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 3,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 4,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 5,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 6,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 7,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 8,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 9,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 10,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 11,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 12,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 13,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 14,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 15,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 16,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 17,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 18,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 19,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 20,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 21,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 22,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 23,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 24,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 25,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 26,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 27,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 28,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 29,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 30,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 31,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 32,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 33,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 34,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 35,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 36,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 37,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 38,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 39,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        },
        {
            id : 40,
            question : "",
            options : ["", "", "", ""],
            answer : ""
        }
    ]
}
]


{/* <img class = 'mt-3' src='https://cceestudy.online/images/tests/images1.jpg' style='width : 100%;' /> */}

let abc = {
    id : 2,
    question : ``,
    options : [],
    answer : ""
}

module.exports = data