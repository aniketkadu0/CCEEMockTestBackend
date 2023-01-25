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
            question : `Which of the following statements is/are true regarding JAVA? 
                        A. Constants that cannot be changed are declared using the 'Static' keyword.
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
    moduleName : "Database Technologies",
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