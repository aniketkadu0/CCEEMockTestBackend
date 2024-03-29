let data = [
  {
    moduleName: "Concepts of Programming and Operating System",
    questions: [
      {
        id: 1,
        question: `What is the output of the below code snippet: 
<pre class="language-java"><code>
int marks = 29;
if ( marks &gt; 29 );
    System.out.println("PASS");
System.out.println("RANK");
</code></pre>`,
        options: ["RANK", "PASS", "PASS RANK", "Compiler error"],
        answer: "RANK",
      },
      {
        id: 2,
        question: `What is the output of the below code snippet:
<pre class="language-java"><code>
int a = 4, b = 6, c = 8;
boolean d = a &gt; 5 &amp;&amp; b &gt; 5 &amp;&amp; c++ &lt; 10;
System.out.println(c);
</code></pre>`,
        options: ["8", "9", "10", "Compiler error"],
        answer: "8",
      },
      {
        id: 3,
        question: `What is the output of the below code snippet:
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
        options: ["Seven", "Nine", "Ten", "None"],
        answer: "Seven",
      },
      {
        id: 4,
        question: `What is the output of the below code snippet:
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
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        id: 5,
        question: `What is the output of the below code snippet:
<pre class="language-java"><code>
public class Test{
    public static void main(String args[]){
            int[] x = { 120, 200, 016 };
            for(int i = 0; i &lt; x.length; i++)   
            System.out.println(x[i] + " ");      
    }
}
</code></pre>`,
        options: [
          "120 200 16",
          "120 200 14",
          "120 200 016",
          "016 is a compile error. It should be written as 16.",
        ],
        answer: "120 200 14",
      },
      {
        id: 6,
        question:
          "When an array is passed to a method, what does the method receive?",
        options: [
          "The reference of the array",
          "A copy of the array",
          "Length of the array",
          "Copy of first element",
        ],
        answer: "The reference of the array",
      },
      {
        id: 7,
        question:
          "To copy the content of a filename1.txt to filename2.txt in the same directory, enter",
        options: [
          "copy filename1.txt filename2.txt",
          "cp filename1.txt filename2.txt",
          "cp filename1.txt >> filename2.txt",
          "cp filename1.txt << filename2.txt",
        ],
        answer: "cp filename1.txt filename2.txt",
      },
      {
        id: 8,
        question: "Process control block has _________",
        options: [
          "Process State",
          "Process Number",
          "Program Counter",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 9,
        question:
          "In linux which command will give read, write, and execute permissions for everyone?",
        options: [
          "chmod all foldername",
          "chmod 644 foldername",
          "chmod 700 filename",
          "chmod 777 filename",
        ],
        answer: "chmod 777 filename",
      },
      {
        id: 10,
        question:
          "In bash script to compare if one number is greater than or equal to a number which expression will be used?",
        options: [
          "[ n1 -ge n2 ]",
          "[ n1 -gt n2 ]",
          "[ n1 > n2 ]",
          "All of the above",
        ],
        answer: "[ n1 -ge n2 ]",
      },
      {
        id: 11,
        question:
          "If a page number is not found in the TLB, then it is known as a ____________",
        options: ["TLB miss", "Buffer miss", "TLB hit", "All of the mentioned"],
        answer: "TLB miss",
      },
      {
        id: 12,
        question:
          "Which signal is used for immediate termination of a process?",
        options: ["SIGTERM", "SIGKILL", "SIGINT", "None of the above"],
        answer: "SIGKILL",
      },
      {
        id: 13,
        question: `Consider the set of 4 processes whose arrival time and burst time are given below-
                        <img class = 'mt-3' src='https://cceestudy.in/images/tests/fcfs problem.jpg' style='width : 100%;' />
                        If the CPU scheduling policy is FCFS, calculate the average waiting time and average turn around time.`,
        options: ["14.25, 8.75", "10, 7", "22.5, 12.5", "8.7, 6.7"],
        answer: "14.25, 8.75",
      },
      {
        id: 14,
        question:
          "Each entry in a translation lookaside buffer (TLB) consists of ____________",
        options: ["key", "value", "bit value", "constant"],
        answer: "key",
      },
      {
        id: 15,
        question:
          "Physical memory is broken into fixed-sized blocks called ________",
        options: ["pages", "frames", "backing store", "none of the mentioned"],
        answer: "frames",
      },
      {
        id: 16,
        question: "The technique that increases the system's productivity",
        options: [
          "multiprogramming",
          "multitasking",
          "multitasking",
          "single-programming",
        ],
        answer: "multiprogramming",
      },
      {
        id: 17,
        question: "What is Interprocess communication?",
        options: [
          "allows processes to communicate and synchronize their actions when using the same address space",
          "allows processes to communicate and synchronize their actions",
          "allows the processes to only synchronize their actions without communication",
          "none of the mentioned",
        ],
        answer: "allows processes to communicate and synchronize their actions",
      },
      {
        id: 18,
        question: `The following C program is exexuted on a Unix/Linux system :
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
        options: ["0", "31", "10", "99"],
        answer: "31",
      },
      {
        id: 19,
        question:
          "In which of the following directory does the configuration files are present?",
        options: ["/bin/", "/root/", "/etc/", "/dev/"],
        answer: "/etc/",
      },
      {
        id: 20,
        question:
          "To display all running processes for all users on your machine, including their usernames, and to show processes not attached to your terminal, which command is used?",
        options: ["ps", "ls -la", "ps aux", "ps -a"],
        answer: "ps aux",
      },
      {
        id: 21,
        question: "What is the entry point of a program in Java?",
        options: [
          "main() method",
          "The first line of code",
          "Last line of code",
          "main class",
        ],
        answer: "main() method",
      },
      {
        id: 22,
        question: `Number of levels of page table = 1,
                        TLB access time = 10ns,
                        Main memory access time = 50ns,
                        What is the effective memory access time (in ns) if 
                        the TLB hit ratio is 90% and there is no page fault ?`,
        options: ["54", "60", "65", "75"],
        answer: "65",
      },
      {
        id: 23,
        question: `In ___________ memory binding are changed in such manner that all free memory area
                        can be merged to form a single free memory.`,
        options: [
          "Memory Paging",
          "Memory Swapping",
          "Memory Compaction",
          "Memory Segmentation",
        ],
        answer: "Memory Compaction",
      },
      {
        id: 24,
        question: `Which set of necessary conditions causes a 'deadlock' in an
                         operating system?`,
        options: [
          "Blocking send, race condition, hold and wait and RAM overflow",
          "Blocking send, race condition, cache incoherency and RAM overflow",
          "Mutual exclusion, no pre-emption, hold and wait, and circular wait",
          "Mutual exclusion, race condition, cache incoherency and RAM overflow",
        ],
        answer:
          "Mutual exclusion, no pre-emption, hold and wait, and circular wait",
      },
      {
        id: 25,
        question: `Given a set of four, two resources with two units, each. The following resources allocation graph exits at a point in time:
                        <img class = 'mt-3' src='https://cceestudy.in/images/tests/deadlock.png' style='width : 100%;' />
                        The graph indicates:`,
        options: [
          "Cycle and deadlock",
          "No cycle but deadlock",
          "Neither cycle nor deadlock",
          "Cycle but no deadlock",
        ],
        answer: "Cycle but no deadlock",
      },
      {
        id: 26,
        question: "Which of these is a type of variable in Java?",
        options: [
          "Instance Variable",
          "Local Variable",
          "Static Varaible",
          "All of these",
        ],
        answer: "All of these",
      },
      {
        id: 27,
        question: `A process whose parent process no more exists i.e. either finished or 
                        terminated without waiting for its child process to 
                        terminate is called an ________`,
        options: [
          "Child process",
          "Zombie process",
          "Daemon process",
          "Orphan process",
        ],
        answer: "Orphan process",
      },
      {
        id: 28,
        question: `Most operating systems (including UNIX, Linux and Windows)
                        identify processes according to unique _________`,
        options: [
          "program counter",
          "process state",
          "process number",
          "process identifier",
        ],
        answer: "process identifier",
      },
      {
        id: 29,
        question: "Memory fragmentation can be defined as",
        options: [
          "The existence of usable area in the memory of computer system",
          "The existence of unusable area in the memory of computer system",
          "The existence of unreachable area in the memory of computer system",
          "None of the above",
        ],
        answer:
          "The existence of unusable area in the memory of computer system",
      },
      {
        id: 30,
        question: `Process A is waiting for the result produced by process B. 
                        Also, process A has higher priority than B. 
                        So the OS prefers process A and refuses to give CPU time to
                        B. Therefore, both A and B are stuck. What is this scenario called?`,
        options: ["Starvation", "Deadlock", "Livelock", "Cycle"],
        answer: "Starvation",
      },
      {
        id: 31,
        question:
          "The primary difference between user-level threads and kernel threads is ______",
        options: [
          "User level threads do not use OS services via system calls, whereas kernel threads require system calls.",
          "User level threads are independent of each other, whereas kernel threads can write into each other's memory space.",
          "User level threads require memory management where kernel threads do not.",
          "None of above.",
        ],
        answer:
          "User level threads do not use OS services via system calls, whereas kernel threads require system calls.",
      },
      {
        id: 32,
        question: "Scheduling of threads are done by:",
        options: ["Input", "Output", "Operating System", "Main Memory"],
        answer: "Operating System",
      },
      {
        id: 33,
        question:
          "_________ refer to the integer variables that are primarily used to solve the critical section problem via combining two of the atomic procedures, wait and signal, for the process synchronization.",
        options: ["Mutex", "Signals", "Semaphores", "Threads"],
        answer: "Semaphores",
      },
      {
        id: 34,
        question: `A memory page containing a heavily used variable that was initialized
                        very early and is in constant use is removed, then the page replacement
                        algorithm used is ____________`,
        options: ["LRU", "LFU", "FIFO", "None of the mentioned"],
        answer: "FIFO",
      },
      {
        id: 35,
        question: `Consider the page reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3 with 4 page frames. 
                        Find out the number of page faults using LRU (Lease recently used) Page Replacement Algorithm.`,
        options: ["10", "8", "6", "7"],
        answer: "6",
      },
      {
        id: 36,
        question: "Multithreading on a multi - CPU machine ___________",
        options: [
          "decreases concurrency",
          "increases concurrency",
          "doesn't affect the concurrency",
          "can increase or decrease the concurrency",
        ],
        answer: "increases concurrency",
      },
      {
        id: 37,
        question: "What is interprocess communication?",
        options: [
          "communication within the process",
          "communication between two process",
          "communication between two threads of same process",
          "none of the mentioned",
        ],
        answer: "communication between two process",
      },
      {
        id: 38,
        question: `A process terminates when it finishes executing its final statement
                        and asks the operating system to delete it by using the  ____________ system call.`,
        options: ["wait()", "exit()", "fork()", "exit()"],
        answer: "exit()",
      },
      {
        id: 39,
        question:
          "Calculate the number of bits required in the address for memory having size of 16 GB. Assume the memory is 4-byte addressable.",
        options: ["32 bits", "16 bits", "128 bits", "64 bits"],
        answer: "32 bits",
      },
      {
        id: 40,
        question: "What is Portability offered by Java language?",
        options: [
          "Small code size easy to carry occupying less disk space",
          "Generating suitable Byte Code for each machine by the Compiler",
          "Ability to run the Byte on different machines producing the same behaviour and output",
          "Java does not actually provide portability",
        ],
        answer:
          "Ability to run the Byte on different machines producing the same behaviour and output",
      },
    ],
  },
  {
    moduleName: "Object Oriented Programming with Java",
    questions: [
      {
        id: 1,
        question: `Which of the following statements is/are true regarding JAVA? <br>
                        A. Constants that cannot be changed are declared using the 'Static' keyword. <br>
                        B. A class can only inherit one class that can implement multiple interfaces.`,
        options: [
          "A is true",
          "B is true",
          "Both (A) and (B) are true",
          "Neither (A) nor (B) is true",
        ],
        answer: "B is true",
      },
      {
        id: 2,
        question: "Which package contains the String class",
        options: [
          "java.util package",
          "java.string package",
          "java.lang package",
          "java.io package",
        ],
        answer: "java.lang package",
      },
      {
        id: 3,
        question: `What will be the output of following snippet :
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
        options: ["Equal", "Not Equal", "Compile time error", "Runtime error"],
        answer: "Not Equal",
      },
      {
        id: 4,
        question: `What will be the output of following snippet :
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
        options: ["1", "123", "Compile time error", "12"],
        answer: "12",
      },
      {
        id: 5,
        question: "What is the extension of compiled java classes?",
        options: [".class", ".java", ".exe", ".txt"],
        answer: ".class",
      },
      {
        id: 6,
        question:
          "To access a protected variable or method of a Class outside the package, you need to _____________ in Java.",
        options: [
          "Create an instance and call the protected variable or method",
          "Create a Subclass by extending Class that have protected variable or method and call the same",
          "Both A & B",
          "Call the protected variable or method directly using Class name",
        ],
        answer:
          "Create a Subclass by extending Class that have protected variable or method and call the same",
      },
      {
        id: 7,
        question: `What will be the output for given statement?
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
        options: [
          "Value of i : 20",
          "Value of i : 10",
          "Compile time error",
          "method2() can't called using Class name",
        ],
        answer: "Compile time error",
      },
      {
        id: 8,
        question: "Which keyword is used to explicitly throw an exception",
        options: ["try", "throwing", "catch", "throw"],
        answer: "throw",
      },
      {
        id: 9,
        question: "What is Math.floor(3.6)?",
        options: ["3.0", "3", "4", "4.0"],
        answer: "3.0",
      },
      {
        id: 10,
        question: "Which is the correct option for creating thread?",
        options: [
          `<pre class="language-java"><code>
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
</code></pre>`,
        ],
        answer: `<pre class="language-java"><code>
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
      },
      {
        id: 11,
        question: "Runtime polymorphism is also known as ___________",
        options: [
          "Static binding",
          "Early binding",
          "Dynamic method dispatch",
          "Method overloading",
        ],
        answer: "Dynamic method dispatch",
      },
      {
        id: 12,
        question: `Consider the following code snippet in Java:
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
        options: ["4,4", "3,4", "4,2", "2,2"],
        answer: "4,2",
      },
      {
        id: 13,
        question: "What is the use of final keyword in Java?",
        options: [
          "When a class is made final, a subclass of it can not be created.",
          "When a method is final, it can not be overridden.",
          "When a method is final, it can not be overridden.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 14,
        question: `What will be the output?
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
        options: [
          "Class One method",
          "Compilation Error",
          "Class Two method",
          "None of these",
        ],
        answer: "Class Two method",
      },
      {
        id: 15,
        question:
          "In java, ________ can only test for equality, where as ________ can evaluate any type of the Boolean expression.",
        options: ["switch, if", "if, switch", "if, break", "continue, if"],
        answer: "switch, if",
      },
      {
        id: 16,
        question: "Which one is not unchecked exception",
        options: [
          "NumberFormat Exception",
          "IndexOutOfBound Exception",
          "Arithmatic Exception",
          "FileNotFound Exception",
        ],
        answer: "FileNotFound Exception",
      },
      {
        id: 17,
        question: "System class is defined in _________",
        options: [
          "java.lang package",
          "java.util package",
          "java.awt.package",
          "None of these",
        ],
        answer: "java.lang package",
      },
      {
        id: 18,
        question: "What is the size of double data type in java?",
        options: ["8 bytes", "4 bytes", "16 bytes", "2 bytes"],
        answer: "8 bytes",
      },
      {
        id: 19,
        question: "Which of these class represents mutable character sequence?",
        options: [
          "String",
          "StringBuffer",
          "StringBuilder",
          "Both StringBuffer & StringBuilder",
        ],
        answer: "Both StringBuffer & StringBuilder",
      },
      {
        id: 20,
        question: `What will be the output?
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
        options: [
          "CCEE study online CCEE online",
          "study",
          "CCEE study online",
          "CCEE study online CCEE",
        ],
        answer: "CCEE study online",
      },
      {
        id: 21,
        question:
          "Which of the following class we can used to read the data in the form of character from text file?",
        options: [
          "FileWriter",
          "FileReader",
          "FileInputStream",
          "FileOutputStream",
        ],
        answer: "FileReader",
      },
      {
        id: 22,
        question: `What will be the output of the following Java code?
<pre class="language-java"><code>  
enum Color
{
RED, WHITE, GREEN, BLUE
};
System.out.println(Color.WHITE.ordinal());          
</code></pre>`,
        options: ["0", "1", "2", "3"],
        answer: "1",
      },
      {
        id: 23,
        question: "Which is valid declaration of a float?",
        options: [
          "float f = 1F;",
          "float f = 1.0;",
          "float f = `1`;",
          "float f = 1.0d;",
        ],
        answer: "float f = 1F;",
      },
      {
        id: 24,
        question:
          "Which component is used to compile, debug and execute the java programs?",
        options: ["JRE", "JIT", "JDK", "JVM"],
        answer: "JDK",
      },
      {
        id: 25,
        question: "What is Ahead of Time Compiler in Java?",
        options: [
          "Ahead of time compiler compiles java files as and when you type and save.",
          "Ahead of time compiler turns byte code to executable code line by line based on requirement.",
          "Ahead of time compiler is a replacement for JIT compiler to translate all byte code to a single executable file or code to run the program fast and efficient.",
          "None of the above",
        ],
        answer:
          "Ahead of time compiler is a replacement for JIT compiler to translate all byte code to a single executable file or code to run the program fast and efficient.",
      },
      {
        id: 26,
        question: "The synchronized keyword is applicable for whom?",
        options: [
          "Variables and Methods",
          "Methods and Classes",
          "Variables and Classes",
          "Methods and Blocks",
        ],
        answer: "Methods and Blocks",
      },
      {
        id: 27,
        question: `You need to store elements in a collection that guarantees that no duplicates are 
            stored and all elements can be accessed in natural order. 
            Which interface provides that capability?`,
        options: [
          "java.util.Map",
          "java.util.Set",
          "java.util.List",
          "java.util.Collection",
        ],
        answer: "java.util.Set",
      },
      {
        id: 28,
        question: "How can you serialize an object?",
        options: [
          "You have to make the class of the object implement the interface Serializable.",
          "You must call the method serializeObject() on the object.",
          "You should call the static method serialize(Object obj) from class Serializer, with as argument the object to be serialized.",
          "You don't have to do anything, because all objects are serializable by default.",
        ],
        answer:
          "You have to make the class of the object implement the interface Serializable.",
      },
      {
        id: 29,
        question: `What is the output of the below Java Program?
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
        options: ["INDIA", "USA", "USA INDIA", "INDIA USA"],
        answer: "INDIA",
      },
      {
        id: 30,
        question:
          "Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
        options: [
          "java.lang.String",
          "java.lang.Double",
          "java.lang.StringBuffer",
          "java.lang.Character",
        ],
        answer: "java.lang.StringBuffer",
      },
      {
        id: 31,
        question: `<pre class="language-java"><code>  
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
        options: ["0", "1", "2", "3"],
        answer: "2",
      },
      {
        id: 32,
        question: "Inheritance represents the _________",
        options: [
          "HAS-A relationship",
          "AND relationship",
          "IS-A relationship",
          "All of the above",
        ],
        answer: "IS-A relationship",
      },
      {
        id: 33,
        question: "Object class have following methods :",
        options: ["equals()", "hashCode()", "toString()", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 34,
        question: `What is the output of the below Java Program?
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
        options: ["10", "0", "10%", "10/100"],
        answer: "0",
      },
      {
        id: 35,
        question: `What is the output of the below Java Program?
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
        options: ["a b c d e", "abcde", "97 98 99 100 101", "65 66 67 68 69"],
        answer: "97 98 99 100 101",
      },
      {
        id: 36,
        question: "Which statement is true about a static nested class?",
        options: [
          "You must have a reference to an instance of the enclosing class in order to instantiate it.",
          "It does not have access to nonstatic members of the enclosing class.",
          "It's variables and methods must be static.",
          "It must extend the enclosing class.",
        ],
        answer:
          "It does not have access to nonstatic members of the enclosing class.",
      },
      {
        id: 37,
        question: "Where an object of a class get stored?",
        options: ["Heap", "Stack", "Disk", "File"],
        answer: "Heap",
      },
      {
        id: 38,
        question:
          "Which mechanism helps in the process of naming as well as visibility control of the classes and their content?",
        options: ["Packages", "Interfaces", "Object", "Class"],
        answer: "Packages",
      },
      {
        id: 39,
        question:
          "_________ used to remove all the elements from the ArrayList.",
        options: ["removeAll()", "clear()", "deleteAll()", "remove()"],
        answer: "removeAll()",
      },
      {
        id: 40,
        question: "What is used to get class name in the reflection?",
        options: [
          "getClass().getName()",
          "getClass().getFields()",
          "getClass().getDeclaredFields()",
          "new getClass()",
        ],
        answer: "getClass().getName()",
      },
    ],
  },
  {
    moduleName: "Algorithms and Data Structures (Using Java)",
    questions: [
      {
        id: 1,
        question: "The time complexity of the binary search algorithm is ",
        options: ["O(logn)", "O(nlogn)", "O(n)", "O(n^2)"],
        answer: "O(logn)",
      },
      {
        id: 2,
        question: `What is the time comlexity of following code : 
<pre class="language-java"><code>
for(int i = n/2; i <= n; i++){
    for( int j = 1; j <= n; j = j * 2 ){
        System.out.println("Hello, World!");
    }
}
</code></pre>`,
        options: ["O(n^2)", "O(n)", "O(nlogn)", "O(n/2)"],
        answer: "O(nlogn)",
      },
      {
        id: 3,
        question: "The postfix form of the expression (A+B)*C+(D-E)/F+G",
        options: [
          "ABC+*DE-F+G/+",
          "A+BC+*DE-F+G+/",
          "AB+C*DE-F/+G+",
          "AB+C*DE/F-+G+",
        ],
        answer: "AB+C*DE-F/+G+",
      },
      {
        id: 4,
        question:
          "Which of the following statement is not true about the doubly linked list?",
        options: [
          "We can traverse in both the directions",
          "It requires extra space",
          "Implementation of doubly linked list is easier than the singly linked list",
          "It stores the addresses of the next and the previous node",
        ],
        answer:
          "Implementation of doubly linked list is easier than the singly linked list",
      },
      {
        id: 5,
        question:
          "If several elements are competing for the same bucket in the hash table, what is it called?",
        options: ["Diffusion", "Replication", "Collision", "Duplication"],
        answer: "Collision",
      },
      {
        id: 6,
        question:
          " The number of edges from the root to the node is called __________ of the tree.",
        options: ["Height", "Depth", "Length", "Width"],
        answer: "Depth",
      },
      {
        id: 7,
        question: `What does method1 do in following code : 
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
        options: [
          "Inserting node at end",
          "Inserting node at beginning",
          "Deleting node at end",
          "Deleting node at beginning",
        ],
        answer: "Inserting node at end",
      },
      {
        id: 8,
        question: `Consider the stack shown below: <br>
           ------------------------------------------------------- <br>
           |  25  |  60  |  34  |  7  |  9  |  54  |  76  |  81  |  <-- Top <br>
           -------------------------------------------------------  <br>
            After performing the following operations in sequence, which value will 
            be at the top of the stack ?
            pop, pop, push 55, pop, pop, push 12, push 48, pop, pop, pop`,
        options: ["48", "76", "9", "7"],
        answer: "7",
      },
      {
        id: 9,
        question:
          " The spanning tree of connected graph with 10 vertices contains",
        options: ["9 edges", "10 edges", "11 edges", "11 vertices"],
        answer: "9 edges",
      },
      {
        id: 10,
        question: `Which of the below diagram is following AVL tree property? <br>
            i. <img class = 'mt-3' src='https://cceestudy.in/images/tests/avl1.jpg' style='width : 100%;' />
            ii. <img class = 'mt-3' src='https://cceestudy.in/images/tests/avl2.jpg' style='width : 100%;' />`,
        options: ["only i", "only ii", "both i & ii", "None of the above"],
        answer: "both i & ii",
      },
      {
        id: 11,
        question:
          "What is taking a complex problem and breaking it down into a series of small more manageable problems called?",
        options: [
          "Decomposition",
          "Abstraction",
          "Pattern Recognition",
          "Algorithms",
        ],
        answer: "Decomposition",
      },
      {
        id: 12,
        question: `The keys 1, 3, 12, 4, 25, 6, 18, 20, 8 are inserted
            into empty hash table of length 10 using open addressing with hash
            function h(i) = i^2 mod 10 and linear probing,
            After adding all keys, which key will be at index 7?`,
        options: ["6", "12", "18", "1"],
        answer: "6",
      },
      {
        id: 13,
        question: `Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, 
            which of the following are TRUE? <br>
            I. Quicksort runs in Θ(n2) time <br>
            II. Bubblesort runs in Θ(n2) time <br>
            III. Mergesort runs in Θ(n) time <br>
            IV. Insertion sort runs in Θ(n) time`,
        options: [
          "I and II only",
          "I and III only",
          "II and IV only ",
          "I and IV only",
        ],
        answer: "I and IV only",
      },
      {
        id: 14,
        question: "Algorithm can be represented as",
        options: ["Flowchart", "Pseudocode", "All of above", "None"],
        answer: "All of above",
      },
      {
        id: 15,
        question: `Find the MST for below figure and List order in which 
            the edged are added in MST using Kruskals algorithm.
            <img class = 'mt-3' src='https://cceestudy.in/images/tests/graph.jpg' style='width : 100%;' />`,
        options: [
          "A-C, B-D, C-D, D-T, S-A",
          "B-D, D-T, A-C, C-D, S-A",
          "S-A, B-D, C-D, A-C, D-T",
          "A-C, C-D, B-D, D-T, S-A",
        ],
        answer: "B-D, D-T, A-C, C-D, S-A",
      },
      {
        id: 16,
        question:
          "Which of the following problems can’t be solved using recursion?",
        options: [
          "factorial of a number",
          "nth fibonacci number",
          "length of a string",
          "problems without base case",
        ],
        answer: "problems without base case",
      },
      {
        id: 17,
        question: `What is the inorder traversal following tree?
            <img class = 'mt-3' src='https://cceestudy.in/images/tests/tree.jpg' style='width : 100%;' />`,
        options: [
          "30 , 20 , 15 , 5 , 18 , 25 , 40 , 35 , 50 , 45 , 60",
          "5 , 18 , 15 , 25 , 20 , 35 , 45 , 60 , 50 , 40 , 30",
          "5 , 15 , 18 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 60",
          "5 , 18 , 15 , 60 , 50 , 40 , 30 , 25 , 20 , 35 , 45",
        ],
        answer: "5 , 15 , 18 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 60",
      },
      {
        id: 18,
        question:
          " A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as _____________",
        options: ["Queue", "Stack", "Tree", "Linked list"],
        answer: "Queue",
      },
      {
        id: 19,
        question:
          "Time Complexity of Breadth First Search is? (V - number of vertices, E - number of edges)",
        options: ["O(V + E)", "O(V)", "O(E)", "O(V*E)"],
        answer: "O(V + E)",
      },
      {
        id: 20,
        question: `Create a Binary search tree for the given set of strings : <br> 
            JAVA, OS, DBT, WPT, DOTNET, WBJ, ASDM, DSA <br>
            What are the leaf nodes generated in the tree?`,
        options: [
          "WPT, WBJ, OS",
          "DOTNET, DSA, WPT",
          "ASDM, DSA, WBJ",
          "ASDM, DSA, JAVA",
        ],
        answer: "ASDM, DSA, WBJ",
      },
      {
        id: 21,
        question:
          "What differentiates a circular linked list from a normal linked list?",
        options: [
          "You cannot have the 'next' pointer point to null in a circular linked list",
          "It is faster to traverse the circular linked list",
          "You may or may not have the 'next' pointer point to null in a circular linked list",
          "Head node is known in circular linked list",
        ],
        answer:
          "You may or may not have the 'next' pointer point to null in a circular linked list",
      },
      {
        id: 22,
        question: `Which of the following is recursive postorder traversal function,
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
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="language-java"><code>
void traversePostOrder(Node node)    
    {    
        if (node == null)    
            return;    
        traversePostOrder(node.left);    
        traversePostOrder(node.right);    
        System.out.print(node.value + " ");    
    } 
</code></pre>`,
      },
      {
        id: 23,
        question: "What will be the best case time complexity of merge sort?",
        options: ["O(n logn)", "O(n^2)", "O(n)", "O(n^2 logn)"],
        answer: "O(n logn)",
      },
      {
        id: 24,
        question:
          "Depth First Search is equivalent to which of the traversal in the Binary Trees?",
        options: [
          "Pre-order Traversal",
          "Post-order Traversal",
          "Level-order Traversal",
          "In-order Traversal",
        ],
        answer: "Pre-order Traversal",
      },
      {
        id: 25,
        question:
          "At least how many comparisons are required for merging two sorted lists of n elements each?",
        options: ["2n - 1", "n - 1", "2n + 1", "n"],
        answer: "2n - 1",
      },
      {
        id: 26,
        question:
          "A logical way of getting from the problem to the solution. If the steps you take to solve a problem follow an algorithm then they can be reused and adapted to solve similar problems in the future.",
        options: [
          "Decomposition",
          "Abstraction",
          "Programming",
          "Algorithmic Thinking",
        ],
        answer: "Algorithmic Thinking",
      },
      {
        id: 27,
        question: "The advantage of link list over array is",
        options: [
          "Link list can grow and shrink in size during the time",
          "Less space is required for storing elements",
          "Both 1 and 2 are correct",
          "None of the above",
        ],
        answer: "Link list can grow and shrink in size during the time",
      },
      {
        id: 28,
        question:
          "Consider the Array: 26, 35, 1, 49, 54, 30, 99. How array will look like after 2 (two) iterations of Bubble Sort?",
        options: [
          "26, 1, 35, 49, 54, 30, 99",
          "26, 1, 35, 49, 30, 54, 99",
          "1, 26, 35, 30, 49, 54, 99",
          "None of these",
        ],
        answer: "1, 26, 35, 30, 49, 54, 99",
      },
      {
        id: 29,
        question:
          "If already sorted array is passed to a sorting algorithm, which one will be the slowest?",
        options: [
          "Insertion sort",
          "Selection sort",
          "Heap sort",
          "Merge sort",
        ],
        answer: "Selection sort",
      },
      {
        id: 30,
        question: `Complete the following code if the function implements binary search
<pre class="language-java"><code> 
void binarySearch(int arr[], int first, int last, int key){  
    int mid = (first + last)/2;  
    
    ---------------- //code

    if ( first > last ){  
       System.out.println("Element is not found!");  
    }  
  }  
</code></pre>`,
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="language-java"><code>    
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
      },
      {
        id: 31,
        question:
          "Which is the correct list of complexities in increasing order?",
        options: [
          "O(1) -> O(nlogn) -> O(n^2) -> O(logn) -> O(n) -> O(n^3)",
          "O(n) -> O(logn) -> O(n) -> O(1) -> O(n^2) -> O(n^3)",
          "O(1) -> O(logn) -> O(n) -> O(nlogn) -> O(n^2) -> O(n^3)",
          "O(1) -> O(n) -> O(logn) -> O(nlogn) -> O(n^2) -> O(n^3)",
        ],
        answer: "O(1) -> O(logn) -> O(n) -> O(nlogn) -> O(n^2) -> O(n^3)",
      },
      {
        id: 32,
        question: "N-Queens Problem can be solved easily by",
        options: [
          "Dynamic Programming",
          "Backtracking Method",
          "Greedy Method",
          "Divide and Conquer Method",
        ],
        answer: "Backtracking Method",
      },
      {
        id: 33,
        question:
          "When new data are to be inserted into a data structure, but there is no available space; this situation is usually called",
        options: ["underflow", "overflow", "housefull", "saturated"],
        answer: "overflow",
      },
      {
        id: 34,
        question:
          "Which of the following algorithm can be used to detect negative cycle in a graph?",
        options: ["Prim", "Kruskal", "Dijkstra", "Bellman Ford"],
        answer: "Bellman Ford",
      },
      {
        id: 35,
        question:
          "Which of the following sorting algorithm has minimum worst case time complexity?",
        options: ["Selection Sort", "Bubble Sort", "Quick Sort", "Merge Sort"],
        answer: "Merge Sort",
      },
      {
        id: 36,
        question: `What is the time complexity of the following code:
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
        options: ["n^2", "n", "n^3", "nlogn"],
        answer: "n^2",
      },
      {
        id: 37,
        question:
          "In ________ , keys are stored in linked lists attached to cells of a hash table. Each list contains all the keys hashed to its cell.",
        options: [
          "Open hashing",
          "Close hashing",
          "linear hashing",
          "None of the above",
        ],
        answer: "Open hashing",
      },
      {
        id: 38,
        question: "Breadth First Traversal (BFS) is a method to traverse",
        options: [
          "Graph using shortest path",
          "All successors of a visited node before any successors of any of those successors",
          "A single path of the graph as far as it can go",
          "None of these",
        ],
        answer:
          "All successors of a visited node before any successors of any of those successors",
      },
      {
        id: 39,
        question:
          "Bellmann ford algorithm provides solution for ____________ problems.",
        options: [
          "All pair shortest path",
          "Sorting",
          "Network flow",
          "Single source shortest path",
        ],
        answer: "Single source shortest path",
      },
      {
        id: 40,
        question:
          "Applying Krushkal's algorithm to find Minimum Spanning Tree is more suitable for",
        options: [
          "Sparse Matrix",
          "Dense Graph",
          "Sparse Graph",
          "None of these",
        ],
        answer: "Sparse Graph",
      },
    ],
  },
  {
    moduleName: "Database Technologies",
    questions: [
      {
        id: 1,
        question:
          "A Key which uniquely identifies each row in the table is known as?",
        options: ["Primary Key", "Unique Key", "Composite Key", "Foreign Key"],
        answer: "Primary Key",
      },
      {
        id: 2,
        question: "Commands that comes under DDL is/are ",
        options: [
          "INSERT, UPDATE, DELETE",
          "CREATE, ALTER, DROP, TRUNCATE",
          "COMMIT, ROLLBACK, SAVEPOINT",
          "GRANT, REVOKE",
        ],
        answer: "CREATE, ALTER, DROP, TRUNCATE",
      },
      {
        id: 3,
        question:
          "By normalizing relations or sets of relations, one minimizes ___.",
        options: ["Data", "Fields", "Redundancy", "Database"],
        answer: "Redundancy",
      },
      {
        id: 4,
        question:
          "What does the following code snippet do? <br> ALTER TABLE STUDENT ADD(ADDRESS VARCHAR(20));",
        options: [
          "Adds a column called ADDRESS in the table student",
          "Checks if a column called ADDERESS is present in the table student",
          "Adds student details",
          "Invalid Syntax",
        ],
        answer: "Adds a column called ADDRESS in the table student",
      },
      {
        id: 5,
        question:
          "In the ER model, the derived attributes are represented by a __________",
        options: ["rectangle", "Ellipse", "Diamond", "Dashed oval"],
        answer: "Dashed oval",
      },
      {
        id: 6,
        question:
          "Which of the following is the correct syntax for using the HAVING clause?",
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="SQL"><code>
SELECT (column_name) 
FROM (entity_name)
GROUP BY (column_name)
HAVING (function condition);
</code></pre>`,
      },
      {
        id: 7,
        question:
          "Which triggers automatically invoked after adding a new row in the table?",
        options: [
          "AFTER CREATE",
          "BEFORE UPDATE",
          "AFTER INSERT",
          "AFTER DELETE",
        ],
        answer: "AFTER INSERT",
      },
      {
        id: 8,
        question: "In localhost MySQL connection runs on which port number?",
        options: ["8080", "8000", "3306", "3000"],
        answer: "3306",
      },
      {
        id: 9,
        question:
          "Which operator is used to test whether or not a value lies within a specified range?",
        options: ["LIKE", "BETWEEN", "IN", "FOR"],
        answer: "BETWEEN",
      },
      {
        id: 10,
        question: `__________ means that all clients see the same data at the same time, no matter which node they connect to &
            ____________ means that any client making a request for data gets a response, even if one or more nodes are down.`,
        options: [
          "Availability, Consistency",
          "Consistency, Availability",
          "Availability, Partition tolerance",
          "Consistency, Partition tolerance",
        ],
        answer: "Consistency, Availability",
      },
      {
        id: 11,
        question: "What is true about indexes?",
        options: [
          "Indexes enhance the performance even if the table is updated frequently",
          "It makes harder for sql server engines to work to work on index which have large keys",
          "It doesn't make harder for sql server engines to work to work on index which have large keys",
          "None of the mentioned",
        ],
        answer: "None of the mentioned",
      },
      {
        id: 12,
        question: "What is TRUE about the Third Normal Form (3NF)?",
        options: [
          "When a relation is in 2NF and does not contain transitive partial dependencies, it will be in 3NF.",
          "Data duplication is reduced by using 3NF.",
          "It helps maintain the integrity of the data.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 13,
        question:
          "How to select all data from studentinfo table with the name that have 'r' in the second position?",
        options: [
          "SELECT * FROM studentinfo WHERE sname LIKE 'r%';",
          "SELECT * FROM studentinfo WHERE sname LIKE '%r%';",
          "SELECT * FROM studentinfo WHERE sname LIKE '%r';",
          "SELECT * FROM studentinfo WHERE sname LIKE '_r%';",
        ],
        answer: "SELECT * FROM studentinfo WHERE sname LIKE '_r%';",
      },
      {
        id: 14,
        question: "Which of the following is TRUE about UNIQUE constraint?",
        options: [
          "In columns that are subject to the UNIQUE constraint, duplicate values are not allowed.",
          "In columns that are subject to the UNIQUE constraint, duplicate values are not allowed.",
          "A single table can have more than one unique constraint, since it can be applied to more than one column.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 15,
        question:
          "Relation R1 has 10 tuples and 5 attributes. Relation R2 has 0 tuples and 7 attributes. When a CROSS JOIN is achieved between R1 and R2, how many tuples would the resultant set have?",
        options: ["70", "10", "0", "35"],
        answer: "0",
      },
      {
        id: 16,
        question: "What is true about view?",
        options: [
          "Database views are created using the CREATE VIEW statement.",
          "To create a view, a user must have the appropriate system privilege according to the specific implementation.",
          "Both A & B",
          "None of these",
        ],
        answer: "Both A & B",
      },
      {
        id: 17,
        question: `Which of the following can replace the below query?
<pre class="SQL"><code>
SELECT Name, ID
FROM Student, Courses
WHERE Student_ID = Courses_ID;
</code></pre>`,
        options: [
          "Select Name, ID from Courses, Student where Student_ID = ID",
          "Select Name, ID from Student natural join Courses;",
          "Select Name, ID from Student;",
          "Select ID from Student join Courses;",
        ],
        answer: "Select Name, ID from Student natural join Courses;",
      },
      {
        id: 18,
        question: `In below diagram which type of cardinal relationship is shown?
            <img class = 'mt-3' src='https://cceestudy.in/images/tests/onetomany.jpg' style='width : 100%;' />`,
        options: ["One to One", "One to Many", "Many to One", "Many to Many"],
        answer: "One to Many",
      },
      {
        id: 19,
        question: `Consider a relation R(A, B, C, D) with the following functional dependencies: <br>
            A -> (B, C, D), (A, D) -> (B, C) and (C, D) -> (A, B). <br>
            Identify the candidate key(s).`,
        options: ["{A}", "{A}, {C, D}", " {A}, {C, D}, {A, D}", "{C, D}"],
        answer: "{A}, {C, D}",
      },
      {
        id: 20,
        question: `Which of the following MongoDB query is equivalent to the following SQL query: <br>
            UPDATE users SET status = "C" WHERE age > 25`,
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="SQL"><code>
db.users.update(
    { age: { $gt: 25 } },
    { $set: { status: "C" } },
    { multi: true }
)
</code></pre>`,
      },
      {
        id: 21,
        question: "MongoDB includes _________ in its bin folder",
        options: ["MongoData", "MongoFind", "Mongod", "All of the above"],
        answer: "Mongod",
      },
      {
        id: 22,
        question: "Joining a table with itself is called",
        options: ["Self Join", "Equi Join", "Join", "Full Join"],
        answer: "Self Join",
      },
      {
        id: 23,
        question:
          "__________ function in SQL is used to get the number of rows with the SELECT statement.",
        options: ["SUM()", "MAX()", "COUNT()", "MIN()"],
        answer: "COUNT()",
      },
      {
        id: 24,
        question: `SQL Database have below two tables : <br>
<img class = 'mt-3' src='https://cceestudy.in/images/tests/table.jpg' style='width : 100%;' />
What will be the query to fetch city names of Maharashtra state?`,
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="SQL"><code>
SELECT City_name FROM States INNER JOIN Cities WHERE State.State_id = Cities.State_id;
</code></pre>`,
      },
      {
        id: 25,
        question:
          "Modelling of relationship between a collection of entities and relationships is __________",
        options: [
          "Relational Algebra",
          "Relation schema",
          "Aggregation",
          "Relationship set",
        ],
        answer: "Aggregation",
      },
      {
        id: 26,
        question:
          "One table can combine upto ___ columns in a composite primary key.",
        options: ["2", "16", "12", "None of the above"],
        answer: "16",
      },
      {
        id: 27,
        question:
          "The DELETE command is used to _____________ from a table. The TRUNCATE command is used to ______________ from the table.",
        options: [
          "delete complete database, delete the table",
          "delete the complete data, delete particular records",
          "delete particular records, delete the complete data",
          "delete the table, delete the database",
        ],
        answer: "delete particular records, delete the complete data",
      },
      {
        id: 28,
        question:
          "Which operator is used to compare a value to a specified list of values?",
        options: ["ANY", "BETWEEN", "ALL", "IN"],
        answer: "IN",
      },
      {
        id: 29,
        question:
          "Which of the following statements does not change the state of the database?",
        options: ["Where", "Select", "Insert", "Drop"],
        answer: "Select",
      },
      {
        id: 30,
        question:
          "With ________ MongoDB supports a complete backup solution and full deployment monitoring.",
        options: ["MMS", "AMS", "CMS", "DMS"],
        answer: "MMS",
      },
      {
        id: 31,
        question: "When is it best to use a NoSQL database?",
        options: [
          "When providing confidentiality, integrity and availability id crucial",
          "When the data is predictable",
          "When the retrieval of large quantities of data is needed",
          "When the retrieval speed of data is not critical",
        ],
        answer: "When the retrieval of large quantities of data is needed",
      },
      {
        id: 32,
        question:
          "Which is the correct order (lowest to highest) in which MongoDB compares the BSON types?",
        options: [
          "Null, Number, String and Object",
          "Number, Null, String and Object",
          "String, Null, Number and Object",
          "Null, Number, Object and String",
        ],
        answer: "Null, Number, String and Object",
      },
      {
        id: 33,
        question: "What is the feature of Stored Procedure?",
        options: [
          "Stored Procedure increases the performance of the applications. Once stored procedures are created, they are compiled and stored in the database.",
          "Stored procedure reduces the traffic between application and database server. Because the application has to send only the stored procedure's name and parameters instead of sending multiple SQL statements.",
          "Stored procedures are reusable and transparent to any applications.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 34,
        question:
          "Which of the following represent column in NoSQL __________ ",
        options: ["Field", "Database", "Collection", "Document"],
        answer: "Field",
      },
      {
        id: 35,
        question:
          "Which one of the following provides the ability to query information from the database and to insert tuples into, delete tuples from, and modify tuples in the database?",
        options: [
          "DML(Data Manipulation Langauge)",
          "DDL(Data Definition Langauge)",
          "Query",
          "Relational Schema",
        ],
        answer: "DML(Data Manipulation Langauge)",
      },
      {
        id: 36,
        question:
          "Which of the following statement(s) is TRUE regarding subqueries?",
        options: [
          "Inner queries in WHERE clause can contain ORDER BY",
          "Outer query and inner query can get data from different tables",
          "Outer query and inner query must get data from the same table",
          "Inner queries cannot contain GROUP BY clause",
        ],
        answer:
          "Outer query and inner query can get data from different tables",
      },
      {
        id: 37,
        question: "Third normal form is based on the concept of _________",
        options: [
          "Closure Dependency",
          "Normal Dependency",
          "Transitive Dependency",
          "Functional Dependency",
        ],
        answer: "Transitive Dependency",
      },
      {
        id: 38,
        question: "What does BLOB in SQL stand for?",
        options: [
          "Binary Large Objects",
          "Big Large Objects",
          "Binary Language for Objects",
          "None of the above",
        ],
        answer: "Binary Large Objects",
      },
      {
        id: 39,
        question: "In MongoDB document '_id' uses how many bytes of storage?",
        options: ["12 bytes", "8 bytes", "16 bytes", "32 bytes"],
        answer: "12 bytes",
      },
      {
        id: 40,
        question:
          "Which ACID property specifies that once the transaction is committed, its permanent even in case of power failures?",
        options: ["Atomicity", "Consistency", "Isolation", "Durability"],
        answer: "Durability",
      },
    ],
  },
  {
    moduleName: "Web Programming Technologies",
    questions: [
      {
        id: 1,
        question:
          "Which HTML tag is called the root element of an HTML document?",
        options: [
          "<xmp><html></xmp>",
          "<xmp><body></xmp>",
          "<xmp><title></xmp>",
          "<xmp><head></xmp>",
        ],
        answer: "<xmp><html></xmp>",
      },
      {
        id: 2,
        question: "Node.js is an _________________",
        options: [
          "open source, cross-platform runtime environment for client-side JavaScript",
          "javaScript library for server-side JavaScript",
          "open source, cross-platform runtime environment for server-side JavaScript",
          "open source, platform dependant runtime environment for server-side JavaScript",
        ],
        answer:
          "open source, cross-platform runtime environment for server-side JavaScript",
      },
      {
        id: 3,
        question:
          "Which of the following are examples of block-level elements in HTML?",
        options: [
          "<xmp><div></xmp>",
          "<xmp><p></xmp>",
          "<xmp><h1></xmp>",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 4,
        question:
          "Which object can be used to exchange data with a server behind the scenes?",
        options: [
          "XMLHttpRequest",
          "HttpsRequest",
          "JSONHttpRequest",
          "All of the above",
        ],
        answer: "XMLHttpRequest",
      },
      {
        id: 5,
        question:
          "Which css properties will be applied for to p tag making text bold & italic in HTML page?",
        options: [
          "font-thickness & font-variant",
          "font-family & font-size",
          "font-size & font-style",
          "font-weight & font-style",
        ],
        answer: "font-weight & font-style",
      },
      {
        id: 6,
        question:
          "In HTML, which attribute is used to create a link that opens in a new window tab?",
        options: [
          "src = '_blank'",
          "alt = '_blank'",
          "target = '_self'",
          "target = '_blank'",
        ],
        answer: "target = '_blank'",
      },
      {
        id: 7,
        question:
          "Which of the following grid class in Bootstrap is used for desktops?",
        options: ["xs", "sm", "lg", "md"],
        answer: "md",
      },
      {
        id: 8,
        question: `What does following code do?
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
        options: [
          "Writes the data into sample.txt file",
          "Copies the data of sample.txt file to another file",
          "Reads the sample.txt file and logs the data of it to console",
          "None of these.",
        ],
        answer: "Reads the sample.txt file and logs the data of it to console",
      },
      {
        id: 9,
        question: "What is Babel?",
        options: [
          "JavaScript compiler",
          "JavaScript interpreter",
          "JavaScript transpiler",
          "None of the above",
        ],
        answer: "JavaScript compiler",
      },
      {
        id: 10,
        question: `In below code snippet, in what order will the margins be added?
<pre class="CSS"><code>
p {
    margin : 25px 50px 75px 100px;
}
</code></pre>`,
        options: [
          "Top, Right, Bottom, Left",
          "Top, Left, Bottom, Right",
          "Top, Bottom, Right, Left",
          "Right, Left, Top, Bottom",
        ],
        answer: "Top, Right, Bottom, Left",
      },
      {
        id: 11,
        question:
          "The correct order of CSS box model from outer to inner that wraps around HTML elements:",
        options: [
          "Margin, Border, Padding, Content",
          "Border, Margin, Padding, Content",
          "Margin, Padding, Border, Content",
          "Content, Margin, Border, Padding",
        ],
        answer: "Margin, Border, Padding, Content",
      },
      {
        id: 12,
        question: `The style of programming whereby instead of using a return value defined functions
            are called by the system when interesting events occur is called ___________`,
        options: [
          "Event-driven programming",
          "Synchronous programming",
          "Callback programming",
          "functional programming",
        ],
        answer: "Event-driven programming",
      },
      {
        id: 13,
        question:
          "Which of the following command is used to install create-react-app?",
        options: [
          "npm install -g create-react-app",
          "npm install create-react-app",
          "npm install -f create-react-app",
          "install -g create-react-app",
        ],
        answer: "npm install -g create-react-app",
      },
      {
        id: 14,
        question: "Which attribute specifies the path to the image?",
        options: ["href", "link", "src", "All of the above"],
        answer: "src",
      },
      {
        id: 15,
        question: "ReactJS uses _______ to increase performance.",
        options: [
          "Virtual DOM",
          "Original DOM",
          "Primary DOM",
          "All of the above",
        ],
        answer: "Virtual DOM",
      },
      {
        id: 16,
        question: `What will be the output of below javaScript code: 
<pre class="JavaScript"><code>
const numbers = [ 20, 21, 22 ];
const newNumbers = [ ...numbers, 5 ]
console.log(newNumbers)
</code></pre>`,
        options: [
          "[ 20, 21, 22, 23, 24, 25, 26, 27 ]",
          "[ 20, 21, 22, 5 ]",
          "[ [20, 21, 22] ,5 ]",
          "[ 5, 20, 21, 22 ]",
        ],
        answer: "[ 20, 21, 22, 5 ]",
      },
      {
        id: 17,
        question:
          "What is the correct syntax of writing JSON name/value pair, where the value is of string type?",
        options: [
          `"name" : "value"`,
          `"name" : value`,
          `name : "value"`,
          "'name' : 'value'",
        ],
        answer: `"name" : "value"`,
      },
      {
        id: 18,
        question:
          "Which is the default port on which the development server for React runs on?",
        options: ["3050", "8080", "3000", "8000"],
        answer: "3000",
      },
      {
        id: 19,
        question:
          "Which function is used to serialize an object into JSON string in Javascript",
        options: ["stringify()", "parse()", "convert()", "None of the above"],
        answer: "stringify()",
      },
      {
        id: 20,
        question: `<pre class="JavaScript"><code>
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
        options: [
          "ComponentOne",
          "ComponentTwo",
          "ComponentOne ComponentTwo",
          "ComponentTwo ComponentOne",
        ],
        answer: "ComponentTwo",
      },
      {
        id: 21,
        question: `Which file contains human-readable metadata about the project (like the project name and description) as well as
            functional metadata like the package version number and a list of dependencies required by the
            application?`,
        options: ["app.js", "index.html", "package.json", "pom.xml"],
        answer: "package.json",
      },
      {
        id: 22,
        question:
          "Which of the following tag insists to have a value in an input control in HTML5?",
        options: ["output", "placeholder", "autofocus", "required"],
        answer: "required",
      },
      {
        id: 23,
        question: "ES6 stands for?",
        options: [
          "ECMAScript 6",
          "ECMA 6",
          "ECMAJavaScript 6 ",
          "EJavascript 6",
        ],
        answer: "ECMAScript 6",
      },
      {
        id: 24,
        question:
          "Node.js uses the __________ Event Loop acrhitecture to handle multiple concurrent clients.",
        options: [
          "Single Threaded",
          "Multi Threaded",
          "Non Threaded",
          "All of the above",
        ],
        answer: "Single Threaded",
      },
      {
        id: 25,
        question: "Which of the following is not feature of jQuery?",
        options: [
          "Efficient query method fro finding the set of document elements",
          "Expressive syntax for referring to elements in the document",
          "Useful set of methods for manipulating selected elements",
          "Powerful functional programming techniques is not used fro operating on sets of elements as a group",
        ],
        answer:
          "Powerful functional programming techniques is not used fro operating on sets of elements as a group",
      },
      {
        id: 26,
        question:
          "The correct sequence of HTML tags for starting a webpage is -",
        options: [
          "Head, Title, HTML, body",
          "HTML, Body, Title, Head",
          "HTML, Head, Title, Body",
          "HTML, Body, Title, Head",
        ],
        answer: "HTML, Head, Title, Body",
      },
      {
        id: 27,
        question: "What are the two ways to handle data in React?",
        options: [
          "State & Props",
          "Services & Components",
          "State & Services",
          "State & Component",
        ],
        answer: "State & Props",
      },
      {
        id: 28,
        question:
          "How to get input text value given by user in input text box having id='userInput' using JavaScript",
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="JavaScript"><code>
var text = document.getElementId('userInput').value;
</code></pre>`,
      },
      {
        id: 29,
        question: `Below which line shows output without any error?
<pre class="JavaScript"><code>
const a = 10;  a = a + 10;  console.log(a); //line 1
const arr = [10,20,30];  arr.push(40);  console.log(arr); //line 2
</code></pre>`,
        options: ["line 1", "line 2", "both lines", "None of these"],
        answer: "line 2",
      },
      {
        id: 30,
        question:
          "How to change color to red of p tag having id text using jQuery?",
        options: [
          "$('#text').color('red')",
          "$('.text').css('color','red')",
          "$('#text').css('color','red')",
          "$('p').css('color','red')",
        ],
        answer: "$('#text').css('color','red')",
      },
      {
        id: 31,
        question: `What will be the output of following code?
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
        options: [
          "Hello world",
          "Hello world <br> Promise resolved",
          "Promise resolved <br> Hello world",
          "Promise resolved",
        ],
        answer: "Promise resolved <br> Hello world",
      },
      {
        id: 32,
        question:
          "Which method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI?",
        options: ["GET", "PUT", "SET", "POST"],
        answer: "POST",
      },
      {
        id: 33,
        question:
          "________ is a middleware which parses cookies attached to the client request object.",
        options: ["cookie", "req.cookies", "cookie-parser", "cookie-storage"],
        answer: "cookie-parser",
      },
      {
        id: 34,
        question: "Which is the correct arrow function to add two numbers?",
        options: [
          "add = (a,b) => a+b;",
          "add = (a,b) => return a+b;",
          "add = (a,b) => { return a+b;}",
          "both second and third option",
        ],
        answer: "both second and third option",
      },
      {
        id: 35,
        question:
          "Which statement is valid in using a Node module fs in a Node-based application?",
        options: [
          "import fs",
          "package fs",
          "var fs = require('fs')",
          "var fs = import('fs')",
        ],
        answer: "var fs = import('fs')",
      },
      {
        id: 36,
        question:
          "Redux solves this problem by managing application's state with a single global object called?",
        options: ["directory", "file", "store", "Component"],
        answer: "store",
      },
      {
        id: 37,
        question: `<pre class="JavaScript"><code>
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
        options: [
          "Hello World!",
          "Hi World!",
          "Hello World! Hi World!",
          "127.0.0.1 refused to connect will be shown",
        ],
        answer: "127.0.0.1 refused to connect will be shown",
      },
      {
        id: 38,
        question:
          "Third-party packages can be install/update/delete using ______",
        options: ["Node Package Manager", "Node.exe", "module.exports", "REPL"],
        answer: "Node Package Manager",
      },
      {
        id: 39,
        question:
          "The state in React can be updated by call to setState method. These calls are",
        options: [
          "Synchronous in nature",
          "Asynchronous in nature",
          "Are asynchronous but can be made synchronous when required",
          "None of above",
        ],
        answer: "Asynchronous in nature",
      },
      {
        id: 40,
        question: "Which is the correct symbol to insert a comment in HTML?",
        options: [
          "//",
          "/* ... */",
          "<pre><xmp><!-- ... --></xmp></pre>",
          "// ... //",
        ],
        answer: "<pre><xmp><!-- ... --></xmp></pre>",
      },
    ],
  },
  {
    moduleName: "Web-based Java Programming",
    questions: [
      {
        id: 1,
        question:
          "@SpringBootApplication is a combination of three annotations ________",
        options: [
          "@ComponentScan, @ResponseBody and @Controller",
          "@Autowired, @Component and @Bean",
          "@Controller, @Service and @Repository",
          "@EnableAutoConfiguration, @ComponentScan and @Configuration",
        ],
        answer: "@EnableAutoConfiguration, @ComponentScan and @Configuration",
      },
      {
        id: 2,
        question: "Which of the following is not a J2EE client?",
        options: ["Web applications", "Applets", "Applets", "JSP"],
        answer: "JSP",
      },
      {
        id: 3,
        question:
          "The __________ is responsible to instantiate, configure and assemble the objects.",
        options: ["Component", "Bean", "Class", "IoC container"],
        answer: "IoC container",
      },
      {
        id: 4,
        question: `What will be the output if we run MainApp.java: <br>
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
        options: [
          "I'm object B <br> I'm object B",
          "I'm object A <br> I'm object B",
          "I'm object B <br> I'm object A",
          "I'm object A <br> I'm object A",
        ],
        answer: "I'm object B <br> I'm object B",
      },
      {
        id: 5,
        question: "Which of the following statements is true?",
        options: [
          "BeanFactory implements ApplicationContext",
          "BeanFactory extends ApplicationContext",
          "ApplicationContext extends BeanFactory",
          "ApplicationContext implements BeanFactory",
        ],
        answer: "ApplicationContext extends BeanFactory",
      },
      {
        id: 6,
        question: "Which of the following is not a feature of Beans?",
        options: ["Introspection", "Events", "Persistence", "Serialization"],
        answer: "Serialization",
      },
      {
        id: 7,
        question: "What is Spring MVC framework?",
        options: [
          "Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",
          "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",
          "Spring MVC framework is used for Transaction management for Web Applications.",
          "Spring MVC framework is used for AOP for Web Applications.",
        ],
        answer:
          "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",
      },
      {
        id: 8,
        question:
          "Which of the following is used to rollback a JDBC transaction?",
        options: [
          "rollback()",
          "rollforward()",
          "deleteTransaction()",
          "RemoveTransaction()",
        ],
        answer: "rollback()",
      },
      {
        id: 9,
        question:
          "Servlet are used to program which component in a web application?",
        options: ["client", "server", "tomcat", "applet"],
        answer: "server",
      },
      {
        id: 10,
        question: "What POM stands for?",
        options: [
          "Project Object Mode",
          "Project Object Model",
          "Project Objective Mode",
          "Project Objective Model",
        ],
        answer: "Project Object Model",
      },
      {
        id: 11,
        question: "What is the correct syntax for annotation wiring?",
        options: [
          "<annotation-context:config /> to bean configuration.",
          "<annotation-config /> to bean configuration.",
          "<annotation-context-config /> to bean configuration.",
          "<context:annotaion-config /> to bean configuration.",
        ],
        answer: "<context:annotaion-config /> to bean configuration.",
      },
      {
        id: 12,
        question: "How are java web applications packaged?",
        options: ["jar", "war", "zip", "both jar and war"],
        answer: "both jar and war",
      },
      {
        id: 13,
        question:
          "Which design pattern provides a single class which provides simplified methods required by client and delegates call to those methods?",
        options: [
          "Adapter pattern",
          "Builder pattern",
          "Facade pattern",
          "Prototype pattern",
        ],
        answer: "Facade pattern",
      },
      {
        id: 14,
        question:
          "Which of the following is correct about messaging in RESTful web services?",
        options: [
          "A client sends a message in form of a HTTP Request and server responds in form of a HTTP Response.",
          "These messages contain message data and metadata i.e. information about message itself.",
          "Both of the above",
          "None of the above.",
        ],
        answer: "Both of the above",
      },
      {
        id: 15,
        question: "@Component annotation on class indicates",
        options: [
          "that a bean should be created for the class",
          "that a bean should not be created for the class",
          "that autowiring should be enabled for the class",
          "that autowiring should not be enabled for the class",
        ],
        answer: "that a bean should be created for the class",
      },
      {
        id: 16,
        question: "Which is mandatory in <xmp><jsp:useBean /></xmp> tag?",
        options: ["id, class", "id, type", "type, property", "type,id"],
        answer: "id, class",
      },
      {
        id: 17,
        question:
          "Sessionfactory can manage contextual sessions for you and allows you to retrieve them by the :-",
        options: [
          "getSession() method",
          "getCurrent() method",
          "getCurrentSession() method",
          "none of the mentioned",
        ],
        answer: "getCurrentSession() method",
      },
      {
        id: 18,
        question: `The classes in the _________ directory must be available for the "Classloader" of the application?`,
        options: [
          "/root/lib/classes/",
          "/root/classes/",
          "/WEB-INF/lib/classes/",
          "/WEB-INF/classes/",
        ],
        answer: "/WEB-INF/classes/",
      },
      {
        id: 19,
        question: "What is bean in Spring?",
        options: ["A component", "An Object", "A class", "A container"],
        answer: "An Object",
      },
      {
        id: 20,
        question: `find out correct annotations on mentioned letters A,B,C & D in below classes defined in SpringBoot Application:
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
        options: [
          "@Bean, @Entity, @RestController, @Component",
          "@Controller, @Component, @Service, @Autowired",
          "@SpringBootApplication, @Entity, @RestController, @Autowired",
          "@Spring, @Required, @RestController, @Autowired",
        ],
        answer: "@SpringBootApplication, @Entity, @RestController, @Autowired",
      },
      {
        id: 21,
        question: "What temporarily redirects response to the browser?",
        options: [
          "<xmp><jsp:forward></xmp>",
          "<%@directive%>",
          "response.sendRedirect(URL)",
          "response.setRedirect(URL)",
        ],
        answer: "response.sendRedirect(URL)",
      },
      {
        id: 22,
        question:
          "Once the hibernate session is closed, in which state the object remains?",
        options: ["detached", "transient", "persistent", "garbage collector"],
        answer: "detached",
      },
      {
        id: 23,
        question:
          "_________ annotation maps the HttpRequest body to a transfer or domain object, enabling automatic deserialization of the inbound HttpRequest body onto a Java object.",
        options: ["@RequestParams", "@RequestBody", "@RequestMapping", "@Body"],
        answer: "@RequestBody",
      },
      {
        id: 24,
        question:
          "Which element of hbm.xml automatically generate the primary key values?",
        options: ["id", "generator", "primaryKey", "None of the above"],
        answer: "generator",
      },
      {
        id: 25,
        question: "Which file is used to specify the packaging cycle?",
        options: ["build.xml", "pom.xml", "dependency.xml", "version.xml"],
        answer: "build.xml",
      },
      {
        id: 26,
        question:
          "Which of the following method is used to perform DML statements in JDBC?",
        options: [
          "executeResult()",
          "executeQuery()",
          "executeUpdate()",
          "execute()",
        ],
        answer: "executeUpdate()",
      },
      {
        id: 27,
        question:
          "Which of the following is true about 'build' Maven life cycle?",
        options: [
          "It cleans up artifacts created by prior builds.",
          "This is used to build the application.",
          "This generates site documentation for the project.",
          "None of the above.",
        ],
        answer: "This is used to build the application.",
      },
      {
        id: 28,
        question: `Which is the correct way of Constructor-based Dependency Injection for below code:
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
        options: [
          `<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="TextEditor"><br><constructor-arg ref="spellChecker"/>
</bean>
<bean id="spellChecker" class="SpellChecker"></bean>
</xmp>
</code></pre>`,
          `<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spellChecker"/>
</bean>
<bean id="spellChecker" class="online.cceestudy.SpellChecker">
</bean>
</xmp>
</code></pre>`,
          `<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spell"/>
</bean>
<bean id="spellChecker" class="online.cceestudy.SpellChecker">
</bean>
</xmp>
</code></pre>`,
          `<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spellChecker"/>
</bean>
</xmp>
</code></pre>`,
        ],
        answer: `<pre class="XML"><code>
<xmp>
<bean id="textEditor" class="online.cceestudy.TextEditor">
<constructor-arg ref="spellChecker"/>
</bean>
<bean id="spellChecker" class="online.cceestudy.SpellChecker">
</bean>
</xmp>
</code></pre>`,
      },
      {
        id: 29,
        question:
          "Which one of the following annotations is not used in Hibernate?",
        options: ["@Entity", "@Column", "@Basic", "@Query"],
        answer: "@Query",
      },
      {
        id: 30,
        question:
          "Why use Request Dispatcher to forward a request to another resource, instead of using a sendRedirect?",
        options: [
          "Redirects are no longer supported in the current servlet API",
          "Redirects are not a cross-platform portable mechanism",
          "The RequestDispatcher does not use the reflection API",
          "The RequestDispatcher does not require a rounf trip to the client, and thus is more efficient and allows ther server to maintain request state",
        ],
        answer:
          "The RequestDispatcher does not require a rounf trip to the client, and thus is more efficient and allows ther server to maintain request state",
      },
      {
        id: 31,
        question:
          "Which of the following statements about the fetch modes in Entity beans is FALSE?",
        options: [
          "There are two fetch modes: EAGER and LAZY",
          "The default fetching mode for a field in an Entity bean annotated by @Basic is LAZY",
          "The default fetching mode for a field in an Entity bean annotated by @Basic is LAZY",
          "Lob annotation does not have a default fetch mode",
        ],
        answer:
          "The default fetching mode for a field in an Entity bean annotated by @OneToMany is LAZY",
      },
      {
        id: 32,
        question: "What is the storage capacity of single cookie?",
        options: ["2048 MB", "2048 bytes", "4095 bytes", "4095 MB"],
        answer: "4095 bytes",
      },
      {
        id: 33,
        question:
          "Any client request to access resources in the WEb-INF/ directory must be returned with",
        options: [
          "BAD_REQUEST",
          "SC_NOT_FOUND",
          "SC_INTERNAL_SERVER_ERROR",
          "ESC_BAD_REQUEST",
        ],
        answer: "SC_NOT_FOUND",
      },
      {
        id: 34,
        question: "Which option is true about session scope?",
        options: [
          "Objects are accessible only from the page in which they are created",
          "Objects are accessible only from the pages which are in same session",
          "Objects are accessible only from the pages which are processing the same request",
          "Objects are accessible only from the pages which reside in same application",
        ],
        answer:
          "Objects are accessible only from the pages which are in same session",
      },
      {
        id: 35,
        question: "When the JPA Entities will become detached?",
        options: [
          "When the transaction (in transaction-scoped persistence context) commits, entities managed by the persistence context become detached.",
          "If an application-managed persistence context is closed, all managed entities become detached.",
          "Using a clear method",
          "All of these",
        ],
        answer: "Using a clear method",
      },
      {
        id: 36,
        question:
          "Which of the following statements are correct about the status of the Http response?",
        options: [
          "HTTP status codes in the 500 to 599 range indicate that the error is related to the client",
          "HTTP status codes in the 400 to 499 range indicate that the error is related to the server",
          "HTTP status codes in the 300 to 399 range are informational messages.",
          "HTTP status codes in the 200 to 299 range means that the client's request was successful.",
        ],
        answer:
          "HTTP status codes in the 200 to 299 range means that the client's request was successful.",
      },
      {
        id: 37,
        question: `What is the correct sequence to create a database connection? <br>
            i. Import JDBC packages. <br>
            ii. Open a connection to the database. <br>
            iii. Load and register the JDBC driver. <br>
            iv. Execute the statement object and return a query resultset. <br>
            v. Create a statement object to perform a query. <br>
            vi. Close the resultset and statement objects. <br>
            vii. Process the resultset. <br>
            viii. Close the connection.`,
        options: [
          "i, ii, iii, v, iv, vii, viii, vi",
          "i, iii, ii, v, iv, vii, vi, viii",
          "ii, i, iii, iv, viii, vii, v, vi",
          "i, iii, ii, iv, v, vi, vii, viii",
        ],
        answer: "i, iii, ii, v, iv, vii, vi, viii",
      },
      {
        id: 38,
        question: "What are the advantage of Hibernate?",
        options: [
          "Hibernate takes care of mapping Java classes to database tables using XML files and without writing any line of code.",
          "Provides simple APIs for storing and retrieving Java objects directly to and from the database.",
          "Minimizes database access with smart fetching strategies.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 39,
        question:
          "Which of the following is true about persistent state of a persistent entity?",
        options: [
          "You can make a transient instance persistent by associating it with a Session.",
          "A persistent instance has a representation in the database.",
          "A persistent instance has an identifier value.",
          "All of the above.",
        ],
        answer: "All of the above.",
      },
      {
        id: 40,
        question: "What are the types of IOC Containers in Spring:",
        options: [
          "Bean Factory",
          "ApplicationContext",
          "Both of the above",
          "None of these",
        ],
        answer: "Both of the above",
      },
    ],
  },
  {
    moduleName: "Microsoft .Net Technologies",
    questions: [
      {
        id: 1,
        question: "How many Bytes are stored by 'Long' Datatype in C# .net?",
        options: ["8", "4", "2", "1"],
        answer: "8",
      },
      {
        id: 2,
        question: `What will be the output of the following code snippet?
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
        options: ["2 16 4", "4 8 16", "2 4 8", "8 16 64"],
        answer: "2 16 4",
      },
      {
        id: 3,
        question: "Struct's data members are ___ by default.",
        options: ["Protected", "Public", "Private", "Default"],
        answer: "Private",
      },
      {
        id: 4,
        question: "In C# which keywords are used to declare reference types: ",
        options: ["class", "interface", "delegate", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 5,
        question: "Correct way to overload +operator?",
        options: [
          "public sample operator + (sample a, sample b)",
          "public abstract operator + (sample a,sample b)",
          "public static sample operator + (sample a, sample b)",
          "all of the mentioned",
        ],
        answer: "all of the mentioned",
      },
      {
        id: 6,
        question: `What could be the output for the set of code?
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
        options: ["8, 8", "0, 2", "8, 10", "7, 8"],
        answer: "7, 8",
      },
      {
        id: 7,
        question: `What will be the output for the given set of code?
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
        options: [
          "base method",
          "derived method",
          "Code runs successfully prints nothing",
          "Compile time error",
        ],
        answer: "derived method",
      },
      {
        id: 8,
        question:
          "If base class consist of two private integers, one static integer and derived class consist of two static integers and one private integer. What would be the size of derived class object?",
        options: [
          "size of object depends on sizes of its non static data members",
          "size of a derived class object is sum of sizes of non static data members of base class and derived class",
          "size of object is calculated using sizeof() method",
          "none of the mentioned",
        ],
        answer:
          "size of object depends on sizes of its non static data members",
      },
      {
        id: 9,
        question: `What will be the output for the given set of code?
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
        options: [
          "a is 60 and b is 120",
          "a is 10 and b is 20",
          "a is 50 and b is 100",
          "Compile time error",
        ],
        answer: "a is 10 and b is 20",
      },
      {
        id: 10,
        question: `In _________ , the value of an argument is copied into 
            the formal parameter of the method & in _________, the changes made to the
            Reference parameter will affect the actual argument passed.`,
        options: [
          "call-by-reference, call-by-value",
          "call-by-value, call-by-reference",
          "method overloading, method overriding",
          "call-by-value, call-by-reference",
        ],
        answer: "call-by-value, call-by-reference",
      },
      {
        id: 11,
        question: "What is true about Destructor in C#",
        options: [
          "A destructor is a method in a class that is called when the object is destroyed.",
          "Like constructors destructors will not have any return type.",
          "Destructors don't take any arguments & are always public.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 12,
        question: `What will be the output for the given set of code?
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
        options: [
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
        answer: "Compile time error",
      },
      {
        id: 13,
        question:
          "The ____________ is the execution engine for .NET applications and servers as the interface between .NET applications and the operating system.",
        options: [
          "Common Language Specifications (CLS)",
          "Common Language Runtime (CLR)",
          "Common Type System (CTS)",
          "Framework Class Library (FCL)",
        ],
        answer: "Common Language Runtime (CLR)",
      },
      {
        id: 14,
        question: `Which of the following statements are TRUE about the .NET CLR? <br>
1. It provides a language-neutral development & execution environment. <br>
2. It ensures that an application would not be able to access memory that it is not authorized to access. <br>
3. It provides services to run "managed" applications. <br>
4. The resources are garbage collected. <br>
5. It provides services to run "unmanaged" applications.`,
        options: [
          "Only 1 and 2",
          "Only 1, 2 and 4",
          "1, 2, 3, 4",
          "Only 3 and 4",
        ],
        answer: "1, 2, 3, 4",
      },
      {
        id: 15,
        question: "How can you comment using Razor Syntax?",
        options: [
          "*@ Comment me *@",
          "@* Comment me *@",
          "@* Comment me @*",
          "*@ Comment me @*",
        ],
        answer: "@* Comment me *@",
      },
      {
        id: 16,
        question:
          "Which HTML helper method is used for rendering the partial view in the parent view?",
        options: [
          "@html.Partial()",
          "@html.RenderPartial()",
          "@html.RenderAction()",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 17,
        question:
          "Which of the following is not a namespace in the .NET Framework Class Library?",
        options: [
          "System.Process",
          "System.Security",
          "System.Threading",
          "System.xml",
        ],
        answer: "System.Process",
      },
      {
        id: 18,
        question:
          "Two types of cookies are available in ASP.NET, ___________ resides on the client machine for a single session and is valid until the user logs out & ___________ resides on the user machine for a period specified for its expiry. It may be an hour, a day, a month, or never.",
        options: [
          "Session Cookie, Persistent Cookie",
          "Persistent Cookie, Session Cookie",
          "First-party Cookie, Permanent Cookie",
          "Persistent Cookie, Secure Cookie",
        ],
        answer: "Session Cookie, Persistent Cookie",
      },
      {
        id: 19,
        question:
          "_________ is a stored-value type that keeps track of each executing thread and its location. It is used for static memory allocation. __________ is a stored reference type that keeps track of the more precise objects or data. It is used for dynamic memory allocation.",
        options: [
          "Heap, Stack",
          "Stack, Heap",
          "RAM, Hard drive",
          "Queue, Heap",
        ],
        answer: "Stack, Heap",
      },
      {
        id: 20,
        question: `State whether the following statements about the Microsoft Intermediate Language (MSIL) are TRUE or FALSE. <br>
            i) The MSIL code includes instructions to load, initialize and invoke methods on objects. <br>
            ii) The MSIL code is collected and assembled in the form of byte codes and is converted to a .NET assembly.`,
        options: [
          "i-True, ii-False",
          "i-False, ii-True",
          "i-True, ii-True",
          "i-False, ii-False",
        ],
        answer: "i-True, ii-True",
      },
      {
        id: 21,
        question:
          "Which object in ASP.NET provides a global storage mechanism for state data that needs to be accessible to all pages in a given Web application?",
        options: ["Session", "Application", "ViewState", "None of the above"],
        answer: "Application",
      },
      {
        id: 22,
        question:
          "The __________ in MVC architecture handles any incoming URL request",
        options: ["Model", "Controller", "View", "All of the above"],
        answer: "Controller",
      },
      {
        id: 23,
        question:
          "How will you create the SQL Server Connection Objects in Code? Choose the correct option.",
        options: [
          `SqlConnection con = new SqlConnection ("Data Source=ServerName; <br>
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
          "All of the above codes are correct.",
        ],
        answer: "All of the above codes are correct.",
      },
      {
        id: 24,
        question: `Which of the following is the correct way to call the function MyFun() of the Sample class given below?
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
        options: [
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
        answer: `<pre class="language-java"><code>   
delegate int del(int i);
del d;
Sample s = new Sample();
d = new del(ref s.MyFun);
d(10);
</code></pre>`,
      },
      {
        id: 25,
        question: "ByDefault ASP.Net SessionID is stored in _________.",
        options: ["Application", "Session", "Cookies", "ViewState"],
        answer: "Cookies",
      },
      {
        id: 26,
        question:
          "How do you execute multiple SQL statements using a DataReader?",
        options: [
          "Call the ExecuteReadermethod of two Command objects and assign the results tothe same instance of a DataReader.",
          "Call the ExecuteReadermethod of a single Command object twice.",
          "Set the Command.CommandTextproperty to multiple SQL statements delimited by a semicolon.",
          "Set the Command.CommandTypeproperty to multiple result sets.",
        ],
        answer:
          "Set the Command.CommandTextproperty to multiple SQL statements delimited by a semicolon.",
      },
      {
        id: 27,
        question: "What is synchronization in reference to a thread?",
        options: [
          "It's a process of handling situations when two or more threads need access to a shared resource",
          "It's a process by which many threads are able to access the same shared resource simultaneously",
          "It's a process by which a method is able to access many different threads simultaneously",
          "It's a method that allows too many threads to access any information they require",
        ],
        answer:
          "It's a process of handling situations when two or more threads need access to a shared resource",
      },
      {
        id: 28,
        question:
          "The _________ namespace includes classes and interfaces that return information about types, methods, and fields.",
        options: [
          "system",
          "system.security",
          "system.data",
          "system.reflection",
        ],
        answer: "system.reflection",
      },
      {
        id: 29,
        question: `What will be the output of the following C# code?
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
        options: ["1234", "12345", "Run time error", "12345B"],
        answer: "12345B",
      },
      {
        id: 30,
        question: "RedirectToAction() Method for which Status code represents?",
        options: ["304", "302", "300", "None"],
        answer: "302",
      },
      {
        id: 31,
        question: `State whether the following statements about .NET assembly are True or False. <br>
i) Assembly physically exists as DLLs or EXEs. <br>
ii) Assembly can include any file types like image files, text files, etc. along with DLLs or EXEs. <br>
iii) One assembly can contain only one file.`,
        options: [
          "i-True, ii-True, iii-True",
          "i-False, ii-True, iii-True",
          "i-True, ii-False, iii-True",
          "i-True, ii- True, iii-False",
        ],
        answer: "i-True, ii- True, iii-False",
      },
      {
        id: 32,
        question: "How will you store and retrieve value in viewstate?",
        options: [
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

          "None of the above.",
        ],
        answer: `// Storing the data in viewstate
ViewState["SiteName"]="cceestudy";
// Retrieving Value from a View State
Label1.Text = ViewState["SiteName"].ToString();`,
      },
      {
        id: 33,
        question: `Which of the following are the advantages of Garbage Collector? <br>
            i) Allow us to develop an application without having worry to about free memory. <br>
            ii) Allocates memory for objects efficiently on the managed heap. <br>
            iii) Provides memory safety by making sure that an object cannot use the content of another object.`,
        options: [
          "i and ii only",
          "ii and iii only",
          "i and iii only",
          "All i, ii and iii",
        ],
        answer: "All i, ii and iii",
      },
      {
        id: 34,
        question: `Suppose a Student class has an indexed property. This property is used to set or retrieve values to/from an array of 5 integers called scores[]. We want the property to report "Invalid Index" message if the user attempts to exceed the bounds of the array. Which of the following is the correct way to implement this property?`,
        options: [
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
</code></pre>`,
        ],
        answer: `<pre class="language-java"><code>   
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
      },
      {
        id: 35,
        question: "What is the extension of MVC view when using C#?",
        options: ["cshtml", "vbhtml", "Both of the above", "None of these"],
        answer: "Both of the above",
      },
      {
        id: 36,
        question:
          "On call of which type of method the new created thread will not start executing?",
        options: ["Begin()", "Start()", "New()", "All of the mentioned"],
        answer: "Start()",
      },
      {
        id: 37,
        question:
          "Which of the following statements are correct about delegates?",
        options: [
          "Delegates cannot be used to call a static method of a class.",
          "Delegates cannot be used to call procedures that receive variable number of arguments.",
          "If signatures of two methods are same they can be called through the same delegate object.",
          "Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.",
        ],
        answer:
          "Delegates cannot be used to call procedures that receive variable number of arguments.",
      },
      {
        id: 38,
        question: `Choose the correct one.  
<pre class="language-java"><code>   
int[] A = { 0, 2, 4, 5, 6, 8 };
int[] B = { 1, 3, 5, 7, 8 };
  
var nums = A.Union(B);   
   
foreach (var n in nums)
{
    Console.Write(n + " ");
}
</code></pre>`,
        options: [
          "0 2 4 5 6 8 1 3 5 7 8",
          "0 2 4 5 6 8 1 3 7",
          "0 1 2 3 4 5 6 7 8",
          "None of the above",
        ],
        answer: "0 2 4 5 6 8 1 3 7",
      },
      {
        id: 39,
        question: "What is RouteConfig.cs in ASP.Net MVC?",
        options: [
          "RouteConfig.cs is used to register MVC config statements, route config.",
          "RouteCOnfig.css is used to register global MVC bundles.",
          "Both of the above",
          "None of these",
        ],
        answer: "Both of the above",
      },
      {
        id: 40,
        question: `For the given set of codes, what is the output?
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
        options: ["10 2 -4 -6", "5 1 -2 -3", "1 5 -2 -3", "Run time error"],
        answer: "10 2 -4 -6",
      },
    ],
  },
  {
    moduleName: "Software Development Methodologies",
    questions: [
      {
        id: 1,
        question: "Agile Software Development is based on",
        options: [
          "Incremental Development",
          "Iterative Development",
          "Both of the above",
          "Waterfall Model",
        ],
        answer: "Both of the above",
      },
      {
        id: 2,
        question: `__________ Testing <br>
            i) Performed by end-users and also by testers and developers <br>
            ii) Based on external expectations <br>
            iii) Exhaustive and the least timeconsuming <br>
            iv) The internal workings need not be known`,
        options: ["Black-Box", "Grey-Box", "White-Box", "None of these"],
        answer: "Black-Box",
      },
      {
        id: 3,
        question:
          "In V model, Validation refers a process of evaluating a system after successfully completion to find out whether __________ and __________ are meet or not.",
        options: [
          "Customer expectations, Requirements",
          "System development, Testing",
          "Analysis, design",
          "None of the mentioned above",
        ],
        answer: "Customer expectations, Requirements",
      },
      {
        id: 4,
        question:
          "Which of the following type of virtualization is also characteristic of cloud computing?",
        options: ["Storage", "Application", "CPU", "All of the mentioned"],
        answer: "All of the mentioned",
      },
      {
        id: 5,
        question:
          "A _________ keeps track of the contributions of the developers working as a team on the projects.",
        options: ["CVS", "DVF", "VCS", "LFS"],
        answer: "VCS",
      },
      {
        id: 6,
        question: "What is the correct sequence of stages of waterfall model?",
        options: [
          "Implementation --> Design --> Requirement Specification --> Verification and Testing --> Deployment --> Maintenance",
          "Implementation --> Design --> Requirement Specification --> Verification and Testing --> Deployment --> Maintenance",
          "Requirement Specification --> Design --> Implementation --> Verification and Testing --> Deployment --> Maintenance",
          "Requirement Specification --> Design --> Deployment --> Maintenance --> Implementation --> Verification and Testing",
        ],
        answer:
          "Requirement Specification --> Design --> Implementation --> Verification and Testing --> Deployment --> Maintenance",
      },
      {
        id: 7,
        question: "The files that can be committed are always present in git ",
        options: [
          "working directory",
          "staging area",
          "unstaged area",
          "Anywhere, there is no barrier",
        ],
        answer: "staging area",
      },
      {
        id: 8,
        question:
          "__________ is a tool for automating testing web applications & Interacts directly with the browser and uses the browser's engine to control it.",
        options: ["Selenuim", "WebDriver", "jUnit", "JIRA"],
        answer: "Selenuim",
      },
      {
        id: 9,
        question:
          "Under which condition the developers should use microservices?",
        options: [
          "When they want to develop apps for mobile phones that run quickly",
          "When they need to create large, enterprise-level applications that are subject to frequent changes",
          "When they want to develop scientific test equipment applications",
          "None of the above",
        ],
        answer:
          "When they need to create large, enterprise-level applications that are subject to frequent changes",
      },
      {
        id: 10,
        question: `Match the following problems with their appropriate solutions: 
            <img class = 'mt-3' src='https://cceestudy.in/images/tests/asdm.jpg' style='width : 100%;' />`,
        options: [
          "1-D, 2-E, 3-A, 4-C, 5-B",
          "1-D, 2-A, 3-E, 4-C, 5-B",
          "1-E, 2-B, 3-D, 4-C, 5-A",
          "1-D, 2-C, 3-A, 4-B, 5-E",
        ],
        answer: "1-D, 2-E, 3-A, 4-C, 5-B",
      },
      {
        id: 11,
        question:
          "___________, also known as K8s, is an open-source orchestartion system for automating deployment, scaling, and management of contanerized applications.",
        options: ["Atlassian Jira", "docker swarm", "Kubernetes", "GitHub"],
        answer: "Kubernetes",
      },
      {
        id: 12,
        question:
          "The intent of ___________ is to ensure that a change, such as a bug fix should not result in another fault being uncovered in the application?",
        options: [
          "functional testing",
          "regression testing",
          "integration testing",
          "unit testing",
        ],
        answer: "regression testing",
      },
      {
        id: 13,
        question:
          "Which term defines the process of project compliance with policies and procedures?",
        options: [
          "Quality control",
          "Quality assurances",
          "Quality audits",
          "Quality control management",
        ],
        answer: "Quality control management",
      },
      {
        id: 14,
        question: "Which command creates a copy of an existing git repository.",
        options: ["git copy", "git clone", "git replace", "git move"],
        answer: "git clone",
      },
      {
        id: 15,
        question: `In Agile product development, A __________ is a short (ideally two to 4 week) period 
            in which a development team implements and delivers functionality by completing stories.`,
        options: ["Story", "Task", "Event", "Sprint"],
        answer: "Sprint",
      },
      {
        id: 16,
        question: "Which of the following is not included in SRS?",
        options: [
          "Performance",
          "Functionality",
          "Design solutions",
          "External interfaces",
        ],
        answer: "Design solutions",
      },
      {
        id: 17,
        question:
          "_________ provides complete isolation from the host operating system and the other Virtual Machines (VMs), so it is fully secure.",
        options: ["Virtualization", "Containerization", "Security", "Cloud"],
        answer: "Virtualization",
      },
      {
        id: 18,
        question: "How many buckets can you create in AWS by default?",
        options: ["25 buckets", "50 buckets", "100 buckets", "200 buckets"],
        answer: "100 buckets",
      },
      {
        id: 19,
        question: "Jenkins was developed for",
        options: [
          "Continuous Integration",
          "Continuous Deployment",
          "Continuous Monitoring",
          "Continuous Delivery",
        ],
        answer: "Continuous Integration",
      },
      {
        id: 20,
        question:
          "__________ is a human-friendly data serialization language for all programming languages.",
        options: ["XAML", "XML", "YAML", "JSON"],
        answer: "YAML",
      },
      {
        id: 21,
        question:
          "A user story that is too large is broken into smaller stories called ________.",
        options: ["Epic", "Story", "Change", "Incident"],
        answer: "Epic",
      },
      {
        id: 22,
        question: "DevOps imroved collabration and productivity by",
        options: [
          "Automating infrastructure",
          "Automating workflow",
          "Continuously measuring application performance",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 23,
        question: "Which command is used to undone the commit in git?",
        options: ["git revert", "git undo", "git prev", "git reset"],
        answer: "git revert",
      },
      {
        id: 24,
        question:
          "In WebDriver, __________ command can be used to enter values onto text boxes?",
        options: [
          "selenium.type()",
          "type()",
          `sendKeys("text")`,
          `driver.type("text")`,
        ],
        answer: `sendKeys("text")`,
      },
      {
        id: 25,
        question: "How to remove a running container in docker?",
        options: [
          "docker container rm <container id/name>",
          "docker rm <container id/name>",
          "docker container delete <container id/name>",
          "docker container rm --force <container id/name>",
        ],
        answer: "docker container rm --force <container id/name>",
      },
      {
        id: 26,
        question:
          "Which of the following testing is also known as white-box testing?",
        options: [
          "Structural testing",
          "Error guessing technique",
          "Design based testing",
          "None of the above",
        ],
        answer: "Structural testing",
      },
      {
        id: 27,
        question:
          "_________ is a software development life cycle model that is chosen if the development team has less experience on similar projects.",
        options: ["Iterative Enhancement Model", "RAD", "Spiral", "Waterfall"],
        answer: "Spiral",
      },
      {
        id: 28,
        question:
          "Which of the following file you can configures to ensure that certain file types are never commited to the local Git repository?",
        options: [".gitignore", "gitignore.txt", "git.ignore", "ignore.git"],
        answer: ".gitignore",
      },
      {
        id: 29,
        question:
          "To get details of a selected node in Kubernets which command is used?",
        options: [
          "kubectl get nodes",
          "kubectl describe node <node name>",
          "kubestl select",
          "kubestl fetch",
        ],
        answer: "kubectl describe node <node name>",
      },
      {
        id: 30,
        question: "EC2 stands for ?",
        options: [
          "Elastic Compute Cloud",
          "Elastic Cloud Compute",
          "Elastic Configuration Cloud",
          "Elastic Cloud Configuration",
        ],
        answer: "Elastic Compute Cloud",
      },
      {
        id: 31,
        question: "Scrum development teams consist of ____________.",
        options: [
          "Developers",
          "Quality assurance specialists",
          "Scrum Masters",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 32,
        question: "What is version control?",
        options: [
          "a type of architecture used to manage large databases",
          "a system that shows, tracks, and controls changes to a set of files over time",
          "a programmatic design pattern used to manage code between multiple engineering teams",
          "a type of software that links a project with a gitHub repository",
        ],
        answer:
          "a system that shows, tracks, and controls changes to a set of files over time",
      },
      {
        id: 33,
        question:
          "In which of the following service models the hardware is virtualized in the cloud?",
        options: ["Saas", "Paas", "Caas", "Iaas"],
        answer: "Iaas",
      },
      {
        id: 34,
        question: "What is a microservice?",
        options: [
          "A design used primarily in functional programming and object-oriented programming",
          "A style of design for enterprise systems based on a loosely coupled component architecture",
          "A small program that represents discrete logic that executes within a well-defined boundary on dedicated hardware",
          "A very small piece of code that never gets any bigger than 10 lines",
        ],
        answer:
          "A style of design for enterprise systems based on a loosely coupled component architecture`",
      },
      {
        id: 35,
        question:
          "Object oriented technology's use of ___________ facilitates reuse of the code and architecture while its ______________ feature provides systems with stability, as a small change in requirements doesn't require massive changes in the system.",
        options: [
          "Inheritance, Encapsulation",
          "Inheritance, Polymorphism",
          "Encapsulation, Polymorphism",
          "Polymorphism, Abstraction",
        ],
        answer: "Inheritance, Encapsulation",
      },
      {
        id: 36,
        question:
          "The UML supports event-based modeling using _________ diagrams.",
        options: [
          "Deployment",
          "Collaboration",
          "State chart",
          "All of the mentioned",
        ],
        answer: "State chart",
      },
      {
        id: 37,
        question: "SDLC stands for",
        options: [
          "Software Development Life Cycle",
          "System Development Life cycle",
          "Software Design Life Cycle",
          "System Design Life Cycle",
        ],
        answer: "Software Development Life Cycle",
      },
      {
        id: 38,
        question: "Which is the most important feature of spiral model?",
        options: [
          "Quality management",
          "Risk management",
          "Performance management",
          "Efficiency management",
        ],
        answer: "Risk management",
      },
      {
        id: 39,
        question:
          "The SDLC Model most suitable for small projects with clear requirements is",
        options: [
          "Spiral Model",
          "Incremental Model",
          "Waterfall Model",
          "Prototyping Model",
        ],
        answer: "Waterfall Model",
      },
      {
        id: 40,
        question:
          "An Enterprise application runs on Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer. If one of these instances fails, what occurs?",
        options: [
          "The load balancer will automatically replace the failed instance.",
          "The load balancer will stop sending requests to the failed instance.",
          "The load balancer will terminate the failed instance.",
          "The load balancer will return 504 Gateway Timeout errors until the instance is replaced.",
        ],
        answer:
          "The load balancer will stop sending requests to the failed instance.",
      },
    ],
  },
  {
    moduleName: "Object Oriented Programming with Java - test 2",
    questions: [
      {
        id: 1,
        question: `What is the output of the below code snippet:
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
        options: [
          "Error: Type mismatch: cannot convert from Base to derived",
          "Base fun1() <br> Derived fun()",
          "Base fun1() <br> Base fun()",
          "Error : cannot call the method of the base class",
        ],
        answer: "Error: Type mismatch: cannot convert from Base1 to derived",
      },
      {
        id: 2,
        question: `What will happen when you attempt to compile and run this code
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
        options: [
          "It will print method",
          "Compile time error",
          "Runtime error",
          "It will compile but doesn't print anything",
        ],
        answer: "It will print method",
      },
      {
        id: 3,
        question: "Which assignments are illegal?",
        options: [
          "long test = 012;",
          "float f = -412;",
          "int other = (int)true;",
          "double d = 0x12345678;",
        ],
        answer: "int other = (int)true;",
      },
      {
        id: 4,
        question: `What will happen when you attempt to compile and run this code
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
        options: [
          "This code compiles, runs and displays over followed by Under",
          "This code compiles, runs and displays Under followed by over",
          "This code does not compile",
          "Code will compile but gives runtime error",
        ],
        answer: "This code compiles, runs and displays over followed by Under",
      },
      {
        id: 5,
        question: `What will be the output of this code:
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
        options: [
          "Equal",
          "Not Equal",
          "Compile time error",
          "Nothing will print",
        ],
        answer: "Not Equal",
      },
      {
        id: 6,
        question: `What will be the output of this code:
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
        options: [
          "Exception",
          "Arithmetic Exception",
          "Array Index Exception",
          "Compile time error: exception ArithmeticException has already been caught",
        ],
        answer:
          "Compile time error: exception ArithmeticException has already been caught",
      },
      {
        id: 7,
        question: `What will happen when you attempt to compile and run this code
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
        options: ["125", "5", "cube(a)", "Compile time error"],
        answer: "Compile time error",
      },
      {
        id: 8,
        question: `What will be the output of this code:
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
        options: ["good-bye <br> hello", "hello", "5", "hello <br> good-bye"],
        answer: "good-bye <br> hello",
      },
      {
        id: 9,
        question: "Which of the following statement is false?",
        options: [
          "If a class has any abstract methods it must be declared abstract itself.",
          "All methods in an abstract class must be declared as abstract",
          "When applied to a class, the final modifier means it cannot be sub-classed",
          "transient and volatile are Java modifiers",
        ],
        answer: "All methods in an abstract class must be declared as abstract",
      },
      {
        id: 10,
        question: `What will be the output of this code:
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
        options: [
          "hello throw it caught finally after",
          "hello caught",
          "hello finally after",
          "Compile time error",
        ],
        answer: "hello throw it caught finally after",
      },
      {
        id: 11,
        question:
          "Which collection class allows you to access its elements by associating a key with an element's value, and provides synchronization?",
        options: [
          "java.util.SortedMap",
          "java.util.TreeMap",
          "java.util.TreeSet",
          "java.util.HashTable",
        ],
        answer: "java.util.HashTable",
      },
      {
        id: 12,
        question: "Which statement is wrong?",
        options: [
          "Interface can extend an interface.",
          "We can define a variable inside an interface.",
          "Interface can implement an interface.",
          "Interface is pure abstract class.",
        ],
        answer: "Interface can implement an interface.",
      },
      {
        id: 13,
        question: `What access control keyword should you use to allow 
            other classes to access a method freely within its package, but to restrict 
            classes outside of the package from accessing that method?`,
        options: [
          "public",
          "protected",
          "private",
          "do not supply an access control keyword",
        ],
        answer: "do not supply an access control keyword",
      },
      {
        id: 14,
        question: "Objects are passed by value or reference?",
        options: [
          "By value",
          "By reference",
          "it depends upon how you specify",
          "None of the above",
        ],
        answer: "By value",
      },
      {
        id: 15,
        question:
          "If you write System.exit(0) at the end of try block, will the finally block still execute?",
        options: ["Yes", "No", "It depends upon return statement", "Can't say"],
        answer: "No",
      },
      {
        id: 16,
        question: "Which is not a method of Object class?",
        options: ["toString", "clone", "equals", "compare"],
        answer: "compare",
      },
      {
        id: 17,
        question: "Which is valid declaration of a String?",
        options: [
          "String s2 = 'null';",
          "String s3 = (String) 'abc';",
          "String s1 = null;",
          "Strings4 = (String) '\ufeed'",
        ],
        answer: "String s1 = null;",
      },
      {
        id: 18,
        question: "Which is valid declaration within an interface?",
        options: [
          "public static short stop = 23;",
          "protected short stop = 23;",
          "transient short stop = 23;",
          "final void madness (short stop);",
        ],
        answer: "public static short stop = 23;",
      },
      {
        id: 19,
        question: `What will be the output of this code:
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
        options: ["true", "false", "Compile time error", "Runtime error"],
        answer: "false",
      },
      {
        id: 20,
        question:
          "Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronised?",
        options: [
          "java.util.HashSet",
          "java.util.LinkedHashSet",
          "java.util.List",
          "java.util.ArrayList",
        ],
        answer: "java.util.ArrayList",
      },
      {
        id: 21,
        question: `What will be the output of this code:
<pre class="language-java"><code>
String x = "xyz";
x.toUpperCase();
String y = x.replace('Y', 'y');
y = y + "abc";
System.out.println(y);
</code></pre>`,
        options: ["abcXyZ", "XyZabc", "xyzabc", "compilation fails"],
        answer: "xyzabc",
      },
      {
        id: 22,
        question: "How can you serialize an object?",
        options: [
          "You have to make the class of the object implement the interface Serializable.",
          "You must call the method serializeObject() (which is inherited from class Object) on the object.",
          "You should call the static method serialize(Object obj) from class Serializer, with as argument the object to be serialized.",
          "You don't have to do anything, because all objects are serializable by default.",
        ],
        answer:
          "You have to make the class of the object implement the interface Serializable.",
      },
      {
        id: 23,
        question: `What will be the output of this code:
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
        options: ["Z", "YZ", "XYZ", "YXYZ"],
        answer: "YXYZ",
      },
      {
        id: 24,
        question: "Which of the following statements are true?",
        options: [
          "static methods do not have access to the implicit variable called this",
          "A static method may be called without creating an instance of its class",
          "All of Above",
          "None of Above",
        ],
        answer:
          "static methods do not have access to the implicit variable called this",
      },
      {
        id: 25,
        question:
          "Which of the following are methods of the Runnable interface?",
        options: ["run", "start", "yield", "stop"],
        answer: "run",
      },
      {
        id: 26,
        question: "What are a native methods?",
        options: [
          "Native methods are usually used to interface with system calls or libraries written in other programming languages.",
          "Native methods are as same like as abstract method.",
          "Both of these.",
          "None of these.",
        ],
        answer:
          "Native methods are usually used to interface with system calls or libraries written in other programming languages.",
      },
      {
        id: 27,
        question: `What will be the output of this code:
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
        options: [
          "Error : Cannot convert Base to Derived",
          "Base Class <br> Derived Class <br> Base Class <br> Derived Class",
          "Base Class <br> Derived Class <br> Derived Class <br> Base Class",
          "Base Class <br> Derived Class <br> Derived Class <br> Derived Class",
        ],
        answer: "Error : Cannot convert Base to Derived",
      },
      {
        id: 28,
        question: "String Class is",
        options: [
          "is final",
          "is public",
          "is serializable",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 29,
        question:
          "Which keyword when applied on a method indicates that only one thread should execute the method at a time. Select the one correct answer.",
        options: ["transient", "static", "final", "Synchronized"],
        answer: "Synchronized",
      },
      {
        id: 30,
        question:
          "which method is used to know the element add the top of the stack?",
        options: ["pop()", "top()", "peek()", "search()"],
        answer: "peek()",
      },
      {
        id: 31,
        question:
          "Which interface provides the capability to store objects using a key-value pair?",
        options: [
          "Java.util.Map",
          "Java.util.Set",
          "Java.util.List",
          "Java.util.Collection",
        ],
        answer: "Java.util.Map",
      },
      {
        id: 32,
        question:
          "Which of the following statements about arrays is syntactically wrong?",
        options: [
          "Person[] p = new Person[5];",
          "Person p[5];",
          "Person[] p [];",
          "Person p [][] = new Person[2][];",
        ],
        answer: "Person p[5];",
      },
      {
        id: 33,
        question: "Process of writing the state of object into byte stream",
        options: [
          "Deserialisation",
          "Externlisation",
          "serialization",
          "print",
        ],
        answer: "serialization",
      },
      {
        id: 34,
        question: "To display text on the applet _________ method is used.",
        options: ["showString()", "drawString()", "println()", "printString()"],
        answer: "drawString()",
      },
      {
        id: 35,
        question: "Which of the following are true about interfaces.",
        options: [
          "Methods declared in interfaces are implicitly private.",
          "Variables declared in interfaces are implicitly public, static, and final.",
          "The keyword implements indicate that an interface inherits from another.",
          "An interface can not extend any number of interfaces.",
        ],
        answer:
          "Variables declared in interfaces are implicitly public, static, and final.",
      },
      {
        id: 36,
        question:
          "What is the process of defining two or more methods within same class that have same name but different parameters declaration?",
        options: [
          "method overloading",
          "method overriding",
          "method hiding",
          "none of the mentioned",
        ],
        answer: "method overloading",
      },
      {
        id: 37,
        question:
          "Which package contains all the classes and interfaces for the Collection framework",
        options: ["java.lang", "java.collections", "java.util", "java.io"],
        answer: "java.util",
      },
      {
        id: 38,
        question:
          "Which of the below is invalid identifier with the main method?",
        options: ["public", "static", "private", "final"],
        answer: "private",
      },
      {
        id: 39,
        question:
          "Which keyword is used by the method to refer to the object that invoked it?",
        options: ["import", "catch", "abstract", "this"],
        answer: "this",
      },
      {
        id: 40,
        question:
          "Which function is used to perform some action when the object is to be destroyed?",
        options: ["finalize()", "delete()", "main()", "none of the mentioned"],
        answer: "finalize()",
      },
    ],
  },
  {
    moduleName: "Database Technologies - test 2",
    questions: [
      {
        id: 1,
        question: "What operator tests column for the absence of data?",
        options: [
          "IS NULL operator",
          "ASSIGNMENT operator",
          "LIKE operator",
          "NOT operator",
        ],
        answer: "IS NULL operator",
      },
      {
        id: 2,
        question:
          "The ___________ refers to the way data is organized in and accessible from DBMS.",
        options: [
          "database hierarchy",
          "data organization",
          "data sharing",
          "data model",
        ],
        answer: "data model",
      },
      {
        id: 3,
        question: "How many unique keys can a table have",
        options: ["1", "0", "2", "Multiple"],
        answer: "Multiple",
      },
      {
        id: 4,
        question:
          "Dropping a table has the following effects on a non-unique created for the table",
        options: [
          "No effect",
          "The index will be dropped",
          "The index will be rendered invalid",
          "The index will contain NULL values",
        ],
        answer: "The index will be dropped",
      },
      {
        id: 5,
        question: "A COMMIT statement",
        options: [
          "Saves the previous changes",
          "Saves the changes for the current session",
          "Saves the changes for all sessions",
          "None of the above",
        ],
        answer: "Saves the changes for the current session",
      },
      {
        id: 6,
        question: "Which of the following statement contain an error?",
        options: [
          "Select * from EMP where EMPNO = 493945;",
          "Select EMPNO from EMP where EMPNO = 493945;",
          "Select EMPNO from EMP;",
          "Select EMPNO where EMPNO = 56949 and LASTNAME = SMITH;",
        ],
        answer: "Select EMPNO where EMPNO = 56949 and LASTNAME = SMITH;",
      },
      {
        id: 7,
        question: "Choose the incorrect option related to DBMS",
        options: [
          "There is no Security of data",
          "Not support distributed database",
          "satisfy more than 8 rule of Dr.E.F.Codd",
          "none",
        ],
        answer: "satisfy more than 8 rule of Dr.E.F.Codd",
      },
      {
        id: 8,
        question: "What is the maximum size of a MongoDB document",
        options: [
          "2MB",
          "16MB",
          "12MB",
          "There is no maximum size. It depends on the RAM",
        ],
        answer: "16MB",
      },
      {
        id: 9,
        question: "Comments in a MySQL code are inserted using",
        options: ["--", "/**/", "Both A & B", "#"],
        answer: "Both A & B",
      },
      {
        id: 10,
        question: "The query associated with a cursor is executed in",
        options: ["Declare phase", "Open phase", "Fetch phase", "Close phase"],
        answer: "Open phase",
      },
      {
        id: 11,
        question:
          "Evaluate the SQL statement - SELECT ROUND (TRUNCATE (MOD (1600,10),-1),2) FROM dual, What will be displayed?",
        options: ["0", "1", "100", "An error statement"],
        answer: "0",
      },
      {
        id: 12,
        question:
          "Which of the following statements is true about while loops?",
        options: [
          "Explicit exit statements are required in while loops",
          "Counter variables are required in while loops",
          "An if-then statement is needed to signal when a while loop should end",
          "All exit conditions for while loops are handled in the exit when clause",
        ],
        answer: "Counter variables are required in while loops",
      },
      {
        id: 13,
        question: "Identifiers in MySQL can contain upto _________ characters",
        options: ["255", "30", "100", "none"],
        answer: "30",
      },
      {
        id: 14,
        question:
          "In MySQL if you need to deal with a group of rows, then you must place returned data into",
        options: ["Select Statement", "Cursors", "Into clause", "Code storage"],
        answer: "Cursors",
      },
      {
        id: 15,
        question: "Point out the wrong statement",
        options: [
          "NoSQL databases are built to allow the insertion of data without a predefined schema",
          "NewSQL databases are built to allow the insertion of data without a predefined schema",
          "Non Relational databases require that schemas be defined before you can add data",
          "All of the mentioned",
        ],
        answer:
          "Non Relational databases require that schemas be defined before you can add data",
      },
      {
        id: 16,
        question: "A subquery can be used to ___________",
        options: [
          "create groups of data",
          "sort data in a specific order",
          "convert data to a different format",
          "retrieve data based on an unknown condition",
        ],
        answer: "retrieve data based on an unknown condition",
      },
      {
        id: 17,
        question:
          "Update if Correct is an approach for which of the following concepts in MongoDB.",
        options: [
          "Concurrency Control",
          "Transaction Management",
          "Atomicity",
          "Performance Management",
        ],
        answer: "Concurrency Control",
      },
      {
        id: 18,
        question: "CHAR() function",
        options: [
          "Accepts a number & returns the character",
          "Accepts a character & returns the number",
          "Accepts a number & returns the number",
          "None of the above",
        ],
        answer: "Accepts a number & returns the character",
      },
      {
        id: 19,
        question:
          "A collection and a document in MongoDB is equivalent to ___________ concepts respectively.",
        options: [
          "Table and column",
          "Table and row",
          "Row and column",
          "Database and table",
        ],
        answer: "Table and row",
      },
      {
        id: 20,
        question: "Which one is a TCL (or DCL) statement?",
        options: ["update", "TRUNCATE", "AlTER", "ROLLBACK"],
        answer: "ROLLBACK",
      },
      {
        id: 21,
        question: "The DUAL table has",
        options: [
          "One row many columns",
          "One column and many Rows",
          "One row and One Column",
          "Many Rows and mant columns",
        ],
        answer: "One row and One Column",
      },
      {
        id: 22,
        question:
          "To suppress the duplicate values, you can use the keyword _________",
        options: [
          "Distinct",
          " Unique",
          "Either of the above",
          "None of the above",
        ],
        answer: "Either of the above",
      },
      {
        id: 23,
        question:
          "The MySQL blocks can contain __________ & __________ statements",
        options: ["DML, DCL", "DML, DDL", "GRANT, REVOKE", "TCL, DML"],
        answer: "TCL, DML",
      },
      {
        id: 24,
        question: "How should a many-to-many relationship be handled?",
        options: [
          "By adding a join table",
          "By adding an intersection table",
          "By adding union table",
          "By adding Cartesian table",
        ],
        answer: "By adding an intersection table",
      },
      {
        id: 25,
        question:
          "You define a multiple-row subquery in the WHERE clause of an SQL query with a comparison operator '=' What happens when the main query is executed?",
        options: [
          "the main query executes with the first value returned by the subquery",
          "the main query executes with the last value returned by the subquery",
          "the main query executes with all the values returned by the subquery",
          "The main query fails because the multiple-row subquery cannot be used with the comparison operator",
        ],
        answer:
          "The main query fails because the multiple-row subquery cannot be used with the comparison operator",
      },
      {
        id: 26,
        question: "Rollback and Commit affect",
        options: [
          "Only DML statements",
          "Only DDL statements",
          "All SQL statements executed",
          "All of the above",
        ],
        answer: "Only DML statements",
      },
      {
        id: 27,
        question:
          "Which of the following is an invalid rollback statement in MySQL?",
        options: [
          "ROLLBACK;",
          "ROLLBACK WORK;",
          "ROLLBACK TO SAVEPOINT A;",
          "None of the above",
        ],
        answer: "ROLLBACK TO SAVEPOINT A;",
      },
      {
        id: 28,
        question: "The value of INSTR('CALIFORNIA', 'A') is",
        options: ["2", "1", "10", "9"],
        answer: "2",
      },
      {
        id: 29,
        question: `Evaluate this SQL statement: SELECT ename, sal, 12*sal+100 FROM EMP; <br>
            The SAL column stores the monthly salary of the emplouee. Which change must be made to the above syntax to <br>
            calculate the annual compensation as "monthly salary plus a monthly bonus of $100, multiplied by 12?`,
        options: [
          "No change is required to achieve the desired results",
          "SELECT ename, sal, 12*(sal+100) FROM emp;",
          "SELECT ename, sal, (12*sal) + 100 FROM emp;",
          "SELECT ename, sal+100*12 FROM emp;",
        ],
        answer: "SELECT ename, sal, 12*(sal+100) FROM emp;",
      },
      {
        id: 30,
        question: "Logical operator ________ has higher precedence than OR.",
        options: ["NOT", "AND", "Both of the above", "None of the above"],
        answer: "Both of the above",
      },
      {
        id: 31,
        question: "________ holds the definitions of all of the data tables.",
        options: ["database", "data dictionary", "data mining", "data source"],
        answer: "data dictionary",
      },
      {
        id: 32,
        question:
          "The component of SQL that is used for granting and revoking privileges is known as",
        options: ["DDL", "DML", "DCL", "DQL"],
        answer: "DCL",
      },
      {
        id: 33,
        question: "The ________ operator is used for pattern matching.",
        options: ["Distinct", "Like", "Group By", "Order By"],
        answer: "Like",
      },
      {
        id: 34,
        question:
          "________ makes a string of certain length by adding a certain set of characters to the left",
        options: ["LTRIM", "LPAD", "SUBSTR", "INSTR"],
        answer: "LPAD",
      },
      {
        id: 35,
        question:
          "When we combine multiple columns in a single index, it is known as a __________ index.",
        options: ["Composite", "Multiple", "Multicol", "Complicated"],
        answer: "Composite",
      },
      {
        id: 36,
        question: "___________ is compulsory section of a MySQL block",
        options: [
          "Declaration section marked by the keyword DECLARE",
          "Executable section marked by the keyword BEGIN ____ END",
          "Exception section marked by the keyword EXCEPTION",
          "All of the above",
        ],
        answer: "Executable section marked by the keyword BEGIN ____ END",
      },
      {
        id: 37,
        question:
          "Omitting the WHERE clause from a DELETE statement has which of the following effects?",
        options: [
          "The delete statement will fail because there are no records to delete",
          "The delete statement will prompt the used to enter the criteria for the deletion",
          "The delete statement will fail because of syntax error",
          "The delete statement will remove all records from the table",
        ],
        answer: "The delete statement will remove all records from the table",
      },
      {
        id: 38,
        question:
          "________ loop if used properly can be used to ensure that the statements whithin the loop are executed iteratively but at least once.",
        options: [
          "Repeat",
          "While loop ..... end loop;",
          "for l in 1..10 loop ... end loop;",
          "All of the above",
        ],
        answer: "Repeat",
      },
      {
        id: 39,
        question:
          "Which describes the default behaviour when you create a table?",
        options: [
          "The table is accessible to all users.",
          "Tables are created in the public schema.",
          "Tables are created in your schema.",
          "Tables are created in the DBA schema.",
        ],
        answer: "Tables are created in your schema.",
      },
      {
        id: 40,
        question: "What kind of database MongoDB is?",
        options: [
          "Graph Oriented",
          "Document Oriented",
          "Key Value Pair",
          "Column Based",
        ],
        answer: "Document Oriented",
      },
    ],
  },
  {
    moduleName: "Web Programming Technologies - test 2",
    questions: [
      {
        id: 1,
        question: "What is the attribute for <xmp><image></xmp> tag?",
        options: ["pt", "url", "path", "src"],
        answer: "src",
      },
      {
        id: 2,
        question:
          "Each list item in an ordered or unordered list has which tag?",
        options: ["list tag", "ls tag", "li tag", "ol tag"],
        answer: "li tag",
      },
      {
        id: 3,
        question: "What are <xmp><div></xmp> tags used for?",
        options: [
          "To replace paragraphs. i.e. p tags",
          "To logically divide the paragraphs",
          "To logically divide the document",
          "To provide space between tables",
        ],
        answer: "To logically divide the document",
      },
      {
        id: 4,
        question: "What attribute is used to specify number of rows?",
        options: ["Rownum", "Rownumb", "rn", "Rowspan"],
        answer: "Rowspan",
      },
      {
        id: 5,
        question: "What are meta tags used for?",
        options: [
          "To store information usually relevant to browsers and search engines.",
          "To only store information usually relevant to browsers",
          "To only store information about search engines.",
          "To store information about external links",
        ],
        answer:
          "To store information usually relevant to browsers and search engines.",
      },
      {
        id: 6,
        question: "Which machine actually executes the Java Script?",
        options: [
          "The web server",
          "The machine which is running a web browser",
          "Java Script engine",
          "Both A and C",
        ],
        answer: "The machine which is running a web browser",
      },
      {
        id: 7,
        question: `Which of the following is correct to write "Hello World" on the web page?`,
        options: [
          `System.out.println("Hello World")`,
          `print("Hello World")`,
          `document.write("Hello World")`,
          `response.write("Hello World")`,
        ],
        answer: `document.write("Hello World")`,
      },
      {
        id: 8,
        question:
          "Which of the following is the correct way for writing Java Script array?",
        options: [
          "var salaries = new Array( 1:39438, 2:39839 3:83729)",
          "var salaries = new (Array:1=39438, Array:2=39839, Array:3=83729)",
          "var salaries = new Array(39438,39839,83729)",
          "var salaries = new Array() values=39438,39839,83729",
        ],
        answer: "var salaries = new Array(39438,39839,83729)",
      },
      {
        id: 9,
        question: "How does Java Script store dates in objects of Date type?",
        options: [
          "The number of days since January 1st, 1900",
          "The number of seconds since January 1st, 1970",
          "The number of milliseconds since January 1st, 1970",
          "The number of picoseconds since January 1st, 1970",
        ],
        answer: "The number of milliseconds since January 1st, 1970",
      },
      {
        id: 10,
        question: "Which of the following statements are true for Java script?",
        options: [
          "JavaScript is case sensitive",
          "JavaScript statements can be grouped together in blocks",
          "semicolon at the end of statement is mandatory",
          "Both a and b above",
        ],
        answer: "Both a and b above",
      },
      {
        id: 11,
        question: "React is a _________",
        options: [
          "Web development Framework",
          "JavaScript Library",
          "jQuery",
          "Web Server",
        ],
        answer: "JavaScript Library",
      },
      {
        id: 12,
        question: "Which ReactJS function renders HTML to the web page?",
        options: [
          "render()",
          "ReactDOM.render()",
          "renders()",
          "ReactDOM.renders()",
        ],
        answer: "ReactDOM.render()",
      },
      {
        id: 13,
        question: "JSX stands for _____.",
        options: [
          "JSON",
          "JSON XML",
          "JavaScript XML",
          "JavaScript and AngularJS",
        ],
        answer: "JavaScript XML",
      },
      {
        id: 14,
        question: "JSX allows us to write _____.",
        options: [
          "jQuery in React",
          "Angular Code in React",
          "MySQL in React",
          "HTML in React",
        ],
        answer: "HTML in React",
      },
      {
        id: 15,
        question: "What is the correct syntax to write expression in JSX?",
        options: [
          "[ expression ]",
          "{ expression }",
          "{{ expression }}",
          "_expression",
        ],
        answer: "{ expression }",
      },
      {
        id: 16,
        question: "A class component must include the _______ statement.",
        options: [
          "extends React.Component",
          "extends React",
          "extends Component",
          "extends React.Component.All",
        ],
        answer: "extends React.Component",
      },
      {
        id: 17,
        question: "What are Props?",
        options: [
          "Props are arguments passed into React components",
          "Props are functions in the ReactJS",
          "Props are used to returns multiple values from the function",
          "All of the above",
        ],
        answer: "Props are arguments passed into React components",
      },
      {
        id: 18,
        question: "What does props stand for?",
        options: [
          "Proper Arguments",
          "Properties",
          "Proper Return Values",
          "All of the above",
        ],
        answer: "Properties",
      },
      {
        id: 19,
        question: "Which ReactJS command is used to create a new application?",
        options: [
          "create-react-app",
          "new-react-app",
          "create-new-reactapp",
          "react-app",
        ],
        answer: "create-react-app",
      },
      {
        id: 20,
        question: `Consider the below function - which is the correct syntax of arrow function?
<pre class="language-javaScript"><code>
Msg = function() {
    return "Good Morning";
}  
</code></pre>`,
        options: [
          `Msg = () => {return "Good Morning";}`,
          `Msg = () => "Good Morning";`,
          "Both of the above",
          "None of the above",
        ],
        answer: "Both of the above",
      },
      {
        id: 21,
        question: "Which method is used to generate lists?",
        options: ["map()", "generate()", "new()", "maps()"],
        answer: "map()",
      },
      {
        id: 22,
        question: "What are components in ReactJS?",
        options: [
          "Components are like functions that return HTML elements.",
          "Components are the HTML elements.",
          "Components are the set of variables defined in ReactJS.",
          "None of the above",
        ],
        answer: "Components are like functions that return HTML elements.",
      },
      {
        id: 23,
        question: "Which method is used to make an asynchronous HTTP request?",
        options: [
          "jQuery.ajaxAsync()",
          "jQuery.async()",
          "jQuery.ajax()",
          "None of the above",
        ],
        answer: "jQuery.ajax()",
      },
      {
        id: 24,
        question: "AJAX and jQuery",
        options: [
          "With jQuery AJAX, you can request TXT, HTML, XML or JSON data from a remote server using both HTTP Get and HTTP Post",
          "jQuery provides a rich set of methods (functions) for AJAX web development",
          "AJAX and jQuery are cross-platform (you can develop in Windows and serve on a Unix platform)",
          "First two statements",
        ],
        answer: "First two statements",
      },
      {
        id: 25,
        question: "Which of the following is true about RESTful web services?",
        options: [
          "Web services based on REST architecture are known as RESTful web services",
          "Web services uses HTTP methods to implement the concept of REST architecture",
          "Both of the above",
          "None of the above",
        ],
        answer: "Both of the above",
      },
      {
        id: 26,
        question:
          "Which of the following types of applications can be built using Node.js?",
        options: [
          "Web Application",
          "Chat Application",
          "RESTful Service",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 27,
        question: `Consider the following code from React Route, What do you call:id in the path prop? <br><Route path="/:id" />`,
        options: [
          "This is a route modal",
          "This is a route parameter",
          "This is a route splitter",
          "This is a route link",
        ],
        answer: "This is a route parameter",
      },
      {
        id: 28,
        question:
          "Why might you use useReducer over useState in React component?",
        options: [
          "When you need to manage more complex state in an app",
          "When you want to replace redux",
          "When you want to improve performance",
          "When you want to break your production app",
        ],
        answer: "When you need to manage more complex state in an app",
      },
      {
        id: 29,
        question:
          "What do you call a React component that catches JavaScript errors anywhere in the child component tree?",
        options: [
          "error bosses",
          "error catchers",
          "error helpers",
          "error boundaries",
        ],
        answer: "error boundaries",
      },
      {
        id: 30,
        question:
          "The _________ specifies whether a border should be solid, dashed line, doted line, double line, groove etc.",
        options: [
          "border-layout",
          "border-decoration",
          "border-style",
          "border-weight",
        ],
        answer: "border-style",
      },
      {
        id: 31,
        question:
          "Linking to another place in the same or another web page requires two A (Anchor) tags, the first with the _________ attribute and the second the __________ attribute.",
        options: [
          "NAME & LINK",
          "LINK & HREF",
          "HREF & NAME",
          "TARGET & VALUE",
        ],
        answer: "HREF & NAME",
      },
      {
        id: 32,
        question: "How does the identity operator === compare two values?",
        options: [
          "It converts them to a common compatible data type and then compares the resulting values",
          "It returns True only if they are both of the same type and value",
          "If the two values are strings, it performs a lexical comparison",
          "It bases its comparison on the C strcmp function exclusively",
        ],
        answer:
          "It converts them to a common compatible data type and then compares the resulting values",
      },
      {
        id: 33,
        question:
          "When developers fail to protect their users sensitive information such as user names, passwords, and session tokens there is a possibility of _________",
        options: [
          "SQL Injection",
          "Insecure Direct Object Reference",
          "Cross-Site Request Forgery",
          "Broken Authentication and Session Management",
        ],
        answer: "Cross-Site Request Forgery",
      },
      {
        id: 34,
        question: "CSRF is stand for",
        options: [
          "Cross-Site Request Forgery",
          "Cross script format",
          "Cascading script format",
          "Cross site required format",
        ],
        answer: "Cross-Site Request Forgery",
      },
      {
        id: 35,
        question: "Which of the following is correct about Bootstrap?",
        options: [
          "Bootstrap is a sleek, intuitive, and powerful, mobile first front-end framework for faster andeasier web development.",
          "It uses HTML, CSS and Javascript.",
          "Bootstrap was developed by Mark Otto and Jacob Thornton at Twitter.",
          "All of the above.",
        ],
        answer: "All of the above.",
      },
      {
        id: 36,
        question:
          "Which of the following is correct about Bootstrap Grid System?",
        options: [
          "Predefined grid classes like .row and .col-xs-4 are available for quickly making grid layouts. LESSmixins can also be used for more semantic layouts.",
          "Columns create gutters (gaps between column content) via padding. That padding is offset inrows for the first and the last column via negative margin on .rows.",
          "Grid columns are created by specifying the number of twelve available columns you wish tospan. For example, three equal columns would use three .col-xs-4.",
          "All of the above.",
        ],
        answer: "All of the above.",
      },
      {
        id: 37,
        question:
          "In Nodejs how node based web servers differ from traditional web servers?",
        options: [
          "Node based server uses a single threaded model and can serve much larger number of requests compared to any traditional server like Apache HTTP Server.",
          "Node based server uses a single threaded model and can serve much larger number of requests compared to any traditional server like Apache HTTP Server.",
          "There is no much difference between the two.",
          "All of the above",
        ],
        answer:
          "Node based server uses a single threaded model and can serve much larger number of requests compared to any traditional server like Apache HTTP Server.",
      },
      {
        id: 38,
        question:
          "Which of the following class is used to create and consume custom events in Node.js?",
        options: ["EventEmitter", "Events", "NodeEvent", " None of the above"],
        answer: "EventEmitter",
      },
      {
        id: 39,
        question: "The Node.js modules can be exposed using",
        options: [
          "module.expose",
          "module",
          "module.exports",
          "All of the above",
        ],
        answer: "module.exports",
      },
      {
        id: 40,
        question: "Which sign is used to define/access jQuery?",
        options: ["$", ".", "&", "#"],
        answer: "$",
      },
    ],
  },
  {
    moduleName: "Algorithms and Data Structures (Using Java) - test 2",
    questions: [
      {
        id: 1,
        question:
          "Which of the following sorting algorithms in its typical implementation gives best performance when applied on an array which is sorted or almost sorted (maximum 1 or two elements are misplaced).",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Insertion sort"],
        answer: "Insertion sort",
      },
      {
        id: 2,
        question: "What is the best time complexity of bubble sort?",
        options: ["O(n)^2", "O(n) log n", "O(n)", "O(n) (Log n)^2"],
        answer: "O(n)",
      },
      {
        id: 3,
        question:
          "Consider a situation where swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?",
        options: [
          "Heap Sort",
          "Selection sort",
          "Insertion sort",
          "Merge sort",
        ],
        answer: "Selection sort",
      },
      {
        id: 4,
        question:
          "Which of the following algorithm design technique is used in Quick sort?",
        options: [
          "Greedy method",
          "Backtracking",
          "Dynamic programming",
          "Divide and Conquer",
        ],
        answer: "Divide and Conquer",
      },
      {
        id: 5,
        question: "Selection sort algorithm design technique is an example of",
        options: [
          "Greedy Method",
          "Divide and Conquer",
          "Dynamic programming",
          "Backtracking",
        ],
        answer: "Greedy Method",
      },
      {
        id: 6,
        question:
          "The result of evaluating postfix expression 539*74-/+62*- is",
        options: ["16", "2", "-7", "3"],
        answer: "2",
      },
      {
        id: 7,
        question:
          "What would be the time complexity of push and pop operation if, the stack implementated using linked list?",
        options: [
          "O(1) for insertion O(n) for deletion",
          "O(1) for insertion O(1) for deletion",
          "O(n) for insertion O(1) for deletion",
          "O(n) for insertion O(n) for deletion",
        ],
        answer: "O(1) for insertion O(1) for deletion",
      },
      {
        id: 8,
        question: `If one dimentional array A[MAXSIZE] is used to implement two stacks provided two stacks grow from opposite ends of the array. Variables top1 and top2 (top1 < top 2) 
            point to the location of the topmost element in each of the stacks, then which of the followings stetements must be true? <br>
            I. If the space is to be used efficiently, the condition for stack full is top1= top2 -1 <br>
            II. The condition for stack full is top1 + top2 = MAXSIZE`,
        options: [
          "Only I is true",
          "Only II is true",
          "Both I and II are true",
          "Both I and II are false",
        ],
        answer: "Only I is true",
      },
      {
        id: 9,
        question:
          "The ____________ data structure is used to check whether an arithmetic expression has balanced parenthesis or not",
        options: ["Queue", "List", "Tree", "Stack"],
        answer: "Stack",
      },
      {
        id: 10,
        question: "Which of the following is the disadvantage of the array?",
        options: [
          "If user wishes to store multiple values of similar type then the Array can be used and utilized efficiently.",
          "In arrays, the elements can be accessed randomly by using the index number.",
          "Insertion and deletion are quite difficult in an array as the elements are stored in consecutive memory locations and the shifting operation is costly.",
          "Arrays allocate memory in contiguous memory locations for all its elements.",
        ],
        answer:
          "Insertion and deletion are quite difficult in an array as the elements are stored in consecutive memory locations and the shifting operation is costly.",
      },
      {
        id: 11,
        question:
          "Which one of the following is an application of Queue Data Structure?",
        options: [
          "Spooling in printers",
          "Queues in routers/ switches",
          "Both of the above",
          "Evaluation of Arithmetic Expressions",
        ],
        answer: "Both of the above",
      },
      {
        id: 12,
        question:
          "Which of the following is true about linked list implementation of queue?",
        options: [
          "In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.",
          "In push operation, if new nodes are inserted at the end of linked list, then in pop operation, nodes must be removed from beginning.",
          "Queue data structure can be used to implement least recently used (LRU) page fault algorithm and Quick short algorithm.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 13,
        question: `Consider the following pseudo code. Assume that IntQueue is an integer queue. What does the function fun do?
<pre class="language-java"><code>  
void fun(int n)
{
    IntQueue q = new IntQueue();
    q.enqueue(0);
    q.enqueue(1);
    for (int i = 0; i < n; i++)
    {
        int a = q.dequeue();
        int b = q.dequeue();
        q.enqueue(b);
        q.enqueue(a + b);
        print(a);
    }
}        
</code></pre>`,
        options: [
          "Prints numbers from 0 to n-1",
          "Prints numbers from n-1 to 0",
          "Prints first n Fibonacci numbers",
          "Prints first n Fibonacci numbers in reverse order.",
        ],
        answer: "Prints first n Fibonacci numbers",
      },
      {
        id: 14,
        question:
          "________ is an abstract data type that generalizes a queue, for which elements can be added to or removed from either the front or rear end",
        options: ["Double ended queue", "Deque", "Both of the above", "Deck"],
        answer: "Both of the above",
      },
      {
        id: 15,
        question:
          "What will be queue full condition for circular queue if implemented using static array, provided rear and front are initially -1?",
        options: [
          "rear==SIZE",
          "rear==SIZE-1",
          "(rear+1)%size==front",
          "None of the above",
        ],
        answer: "(rear+1)%size==front",
      },
      {
        id: 16,
        question: `Which of the following statement is true about the complete binary tree? <br>
            I. In complete binary tree, every level must be filled from left to right direction <br>
            II. Every full binary tree can be considered as a complete binary tree but reverse is not true`,
        options: [
          "Only I is true",
          "Only II is true",
          "Both I and II are true",
          "None of the above",
        ],
        answer: "Both I and II are true",
      },
      {
        id: 17,
        question:
          "Which one of the following is an application of Graph Data Structure?",
        options: [
          "Electronic circuit simulation",
          "Path Optimization Algorithms.",
          "Scientific Computations",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 18,
        question:
          "In binary tree if non-leaf node has non-empty left sub-tree and non-empty right sub-tree then such binary tree is called as _________",
        options: [
          "Strictly binary tree",
          "Complete binary tree",
          "Full binary tree",
          "Skewed binary tree",
        ],
        answer: "Strictly binary tree",
      },
      {
        id: 19,
        question:
          "Suppose the numbers 80 110 120 60 40 70 90 100 85 are inserted in that order into an initially empty binary search tree. The binary search tree uses the usual ordering on natural numbers. What is the in-order traversal sequence of the resultant tree?",
        options: [
          "80 60 40 70 110 90 85 100 120",
          "40 60 70 80 85 90 100 110 120",
          "40 70 60 85 100 90 120 110 80",
          "40 60 70 85 90 100 110 120 80",
        ],
        answer: "40 60 70 80 85 90 100 110 120",
      },
      {
        id: 20,
        question:
          "Given an undirected graph G with 5 vertices and 7 edges, the sum of the degrees of all vertices is:",
        options: ["7", "5", "10", "14"],
        answer: "14",
      },
      {
        id: 21,
        question:
          "what would be the number of zeros in the adjacency matrix of given graph?",
        options: ["10", "6", "16", "0"],
        answer: "10",
      },
      {
        id: 22,
        question:
          "How many undirected graphs (not necessarily connected) can be constructed out of a given set V = {v1, v2, ... vn} of n vertices?",
        options: ["n(n-1)/2", "2^n", "n!", "2^n(n-1)/2"],
        answer: "2^n(n-1)/2",
      },
      {
        id: 23,
        question:
          "Which of the following statement is correct about flow chart and a pseudocode?",
        options: [
          "A flowchart is a diagram while the pseudo code is written in any programming language",
          "A flowchart is textual but the pseudocode is a diagram",
          "A flowchart is a schematic description of an algorithm, while pseudo-code is a textual description of an algorithm",
          "A flowchart and a pseudo-code are the same",
        ],
        answer:
          "A flowchart is a schematic description of an algorithm, while pseudo-code is a textual description of an algorithm",
      },
      {
        id: 24,
        question:
          "Which of the following is advantage of linked-list over array?",
        options: [
          "Inserting a new element in an linked-list of elements is easy as compared to array.",
          "The size of linked-list is fixed",
          "Extra memory space for a pointer is required with each element of the list",
          "Random access is not allowed.",
        ],
        answer:
          "Inserting a new element in an linked-list of elements is easy as compared to array.",
      },
      {
        id: 25,
        question: `Which of the following statement(s) is TRUE? <br>
            I. A hash function takes a message of arbitrary length and generates a fixed length code. <br>
            II. A hash function takes a message of fixed length and generates a code of variable length. <br>
            III. A hash function may give the same hash value for distinct messages.`,
        options: ["Only I", "Both II and III", "Both I and III", "Only II"],
        answer: "Both I and III",
      },
      {
        id: 26,
        question: `Which of the following statement(s) is/are correct regarding Bellman-Ford shortest path algorithm? <br>
            I. Always finds a negative weighted cycle, if one exists. <br>
            II. Finds whether any negative weighted cycle is reachable from the source.`,
        options: ["Only I", "Both I and II", "Only II", "None of the above"],
        answer: "Only II",
      },
      {
        id: 27,
        question: "Merge Sort works on two principles",
        options: [
          "To sort smaller size array and to merge two already sorted array operations are not efficient.",
          "To sort smaller size array and to merge two already sorted array operations are efficient.",
          "To sort smaller size array is efficient and to merge two already sorted array is not efficient.",
          "To sort smaller size array is not efficient and to merge two already sorted array is efficient.",
        ],
        answer:
          "To sort smaller size array and to merge two already sorted array operations are efficient.",
      },
      {
        id: 28,
        question:
          "How many pointers need to modify to insert any element at the front of the singly linear linked-list.",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        id: 29,
        question: "Dijkstra's Algorithm cannot be applied on _________",
        options: [
          "Directed and weighted graphs",
          "Graphs having negative weight function",
          "Unweighted graphs",
          "Undirected and unweighted graphs",
        ],
        answer: "Graphs having negative weight function",
      },
      {
        id: 30,
        question:
          "What is the worst case time complexity of traversal of doubly linked list ?",
        options: ["O(1)", "O(logn)", "O(n)", "O(nlogn)"],
        answer: "O(n)",
      },
      {
        id: 31,
        question:
          "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
        options: ["log(n)", "n", "n/2", "None of the above"],
        answer: "n",
      },
      {
        id: 32,
        question:
          "Which of the following is/are advantages of cicular linked list?",
        options: [
          "We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again.",
          "Circular Doubly Linked Lists are used for implementation of advanced data structures like Fibonacci Heap.",
          "Only first option",
          "Both first and second option",
        ],
        answer: "Only first option",
      },
      {
        id: 33,
        question:
          "The time required to search an element in a linked list of length n is",
        options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
        answer: "O(n)",
      },
      {
        id: 34,
        question:
          "Is it possible to add node before specified node in a singly linked list?",
        options: [
          "Not possible",
          "yes, possible but need to traverse the corresponding list twice.",
          "yes, possible by adding node after specified position and then by swapping the position.",
          "Both second and third option",
        ],
        answer:
          "yes, possible by adding node after specified position and then by swapping the position.",
      },
      {
        id: 35,
        question:
          "Which of the following is suitable data structure to implement priority queue?",
        options: [
          "Graph",
          "Heap data structure",
          "Linked List",
          "Both first and second options",
        ],
        answer: "Both first and second options",
      },
      {
        id: 36,
        question: "Which of the following are application of linked list?",
        options: [
          "It is used in the navigational systems where front and back navigation is required",
          "To implement stacks and queues",
          "To implement Hash tables",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 37,
        question:
          "Which of the following asymptotic notation is used represent lower bound?",
        options: [
          "Big-Oh (O) Notation",
          "Big-Omega (Ω) notation",
          "Big-Theta(Θ) notation",
          "None of the above",
        ],
        answer: "Big-Omega (Ω) notation",
      },
      {
        id: 38,
        question: "Prim's algorithm is a............",
        options: [
          "Divide and conquer algorithm",
          "Greedy algorithm",
          "Dynamic programming",
          "Approximation algorithm",
        ],
        answer: "Greedy algorithm",
      },
      {
        id: 39,
        question: `Consider the following AVL tree. <br>
<img class = 'mt-3' src='https://cceestudy.in/images/tests/tree1.jpg' style='width : 100%;' />
Which of the following operation need to do after insertion of 70?`,
        options: [
          "Rotate right and rotate left",
          "Rotate left and rotate right",
          "Need to Rotate left twice",
          "Need to Rotate right twice",
        ],
        answer: "Rotate right and rotate left",
      },
      {
        id: 40,
        question:
          "The type of expression in which operator succeeds its operands is?",
        options: [
          "Infix Expression",
          "pre fix Expression",
          "postfix Expression",
          "None",
        ],
        answer: "postfix Expression",
      },
    ],
  },
  {
    moduleName: "Microsoft .Net Technologies - test 2",
    questions: [
      {
        id: 1,
        question: `Which of the following are valid .NET CLR JIT performance counters? <br>
            1.Total memory used for JIT compilation <br>
            2.Average memory used for JIT compilation <br>
            3.Number of methods that failed to compile with the standard JIT <br>
            4.Percentage of processor time spent performing JIT compilation <br>
            5.Percentage of memory currently dedicated for JIT compilation <br>`,
        options: ["1, 5", "3, 4", "1, 2", "4, 5"],
        answer: "3, 4",
      },
      {
        id: 2,
        question:
          "Which of the following .NET components can be used to remove unused references from the managed heap?",
        options: [
          "Common Language Infrastructure",
          "CLR",
          "Garbage Collector",
          "CTS",
        ],
        answer: "Garbage Collector",
      },
      {
        id: 3,
        question: `There are the following Jobs given below, which of them are done by Common Language Runtime? <br>
            1. CLR provides garbage collection. <br>
            2. CLR enforces type safety strictly. <br>
            3. CLR provides memory and thread management. <br>
            4. CLR provides Code Access Security.`,
        options: ["1, 2", "3, 4", "All (1, 2, 3, 4)", "None of these"],
        answer: "All (1, 2, 3, 4)",
      },
      {
        id: 4,
        question:
          "There are the following assemblies given below, which of them can be stored in GAC (Global Assembly Cache)?",
        options: [
          "Public Assembly",
          "Private Assembly",
          "Protected Assembly",
          "Shared Assembly",
        ],
        answer: "Shared Assembly",
      },
      {
        id: 5,
        question:
          "Which of the following is the root of the .NET type hierarchy?",
        options: ["System.Object", "System.Type", "System.Base", "System.Root"],
        answer: "System.Object",
      },
      {
        id: 6,
        question:
          "Which of the following is NOT an Arithmetic operator in C#.NET?",
        options: ["**", "+", "/", "*"],
        answer: "**",
      },
      {
        id: 7,
        question: "Which of the following statements is correct?",
        options: [
          "A constructor can be used to set default values and limit instantiation.",
          "C# provides a copy constructor.",
          "Destructors are used with classes as well as structures.",
          "A class can have more than one destructor.",
        ],
        answer:
          "A constructor can be used to set default values and limit instantiation.",
      },
      {
        id: 8,
        question: `Which of the following statements are correct about static functions? <br>
            1.	Static functions can access only static data. <br>
            2.	Static functions cannot call instance functions. <br>
            3.	It is necessary to initialize static data. <br>
            4.	Instance functions can call static functions and access static data. <br>
            5.	this reference is passed to static functions.`,
        options: ["1, 2, 4", "2, 3, 5", "3, 4", "4, 5"],
        answer: "1, 2, 4",
      },
      {
        id: 9,
        question: `Which of the following will be the correct output for the C#.NET code snippet given below? <br>
            String s1 = "Nashik"; <br>
            String s2; <br>
            s2 = s1.Insert(6, "Mumbai"); <br>
            Console.WriteLine(s2);`,
        options: ["NashiMumbair", "NashikMumbai", "Mumbai", "Nashik"],
        answer: "NashikMumbai",
      },
      {
        id: 10,
        question:
          "How many times can a constructor be called during lifetime of the object?",
        options: [
          "As many times as we call it.",
          "Only once.",
          "Depends upon a Project Setting made in Visual Studio.NET.",
          "Any number of times before the object gets garbage collected.",
        ],
        answer: "Only once.",
      },
      {
        id: 11,
        question:
          "The variables in __________ access means they are accessible only from within their declaration context, including any nested procedures.",
        options: ["Protected", "Friend", "Protected Friend", "Private"],
        answer: "Private",
      },
      {
        id: 12,
        question:
          "C# has _______ operator, useful for making two way decisions.",
        options: ["Looping", "Functional", "Exponential", "Conditional"],
        answer: "Conditional",
      },
      {
        id: 13,
        question:
          "We use _________ to fully abstract a class from its implimentation.",
        options: ["Interfaces", "Objects", "Packages", "Function Definitions"],
        answer: "Interfaces",
      },
      {
        id: 14,
        question: "What is the full form of LINQ?",
        options: [
          "Local Integration Query",
          "Language Integrated Query",
          "Language Included Query",
          "None of the above",
        ],
        answer: "Language Integrated Query",
      },
      {
        id: 15,
        question:
          "Which among the given classes is present in System.Collection.Generic namespace?",
        options: ["Stack", "Tree", "Sorted Array", "All of the mentioned"],
        answer: "Stack",
      },
      {
        id: 16,
        question:
          "________ represents the ordered collection of an object that can be indexed individually.",
        options: ["ArrayList", "BitArray", "Stack", "SortedList"],
        answer: "ArrayList",
      },
      {
        id: 17,
        question:
          "To generate a simple notification for an object in runtime, the programming construct to be used for implementing this idea?",
        options: ["namespace", "interface", "delegate", "attribute"],
        answer: "delegate",
      },
      {
        id: 18,
        question:
          "What is the value returned by function compareTo( ) if the invoking string is less than the string compared?",
        options: [
          "Zero",
          "A value of less than zero",
          "A value greater than zero",
          "None of the mentioned",
        ],
        answer: "A value of less than zero",
      },
      {
        id: 19,
        question:
          "The exception classes in C# are mainly directly or indirectly derived from the ________ ?",
        options: [
          "System.Exception class",
          "Exception class",
          "System.ApplicationException class",
          "ApplicationException class",
        ],
        answer: "System.Exception class",
      },
      {
        id: 20,
        question:
          "Assume 2 columns named as Product and Category how can be both sorted out based on first by category and then by product name?",
        options: [
          "var sortedProds = _db.Products.Orderby(c => c.Category)",
          "var sortedProds = _db.Products.Orderby(c => c.Category) + ThenBy(n => n.Name)",
          "var sortedProds = _db.Products.Orderby(c => c.Category) . ThenBy(n => n.Name)",
          "all of the mentioned",
        ],
        answer:
          "var sortedProds = _db.Products.Orderby(c => c.Category) . ThenBy(n => n.Name)",
      },
      {
        id: 21,
        question: `Which of the following will be the correct output for the C#.NET code snippet given below?
<pre class="language-java"><code>  
enum color : int
{
    red = -3,
    green,
    blue 
}
Console.Write( (int) color.red + ", "); 
Console.Write( (int) color.green + ", "); 
Console.Write( (int) color.blue );       
</code></pre>`,
        options: ["-3, -2, -1", "-3, 0, 1", "0, 1, 2", "red, green, blue"],
        answer: "-3, -2, -1",
      },
      {
        id: 22,
        question: `Which of the following statements is correct about the C#.NET program given below if a value "6" is input to it?
<pre class="language-java"><code>  
using System;
namespace ConsoleApplication
{
    class MyProgram
    {
        static void Main (string[] args)
        {
            int index; 
            int val = 66; 
            int[] a = new int[5]; 
            try
            {
                Consote.Write("Enter a number: "); 
                index = Convert.ToInt32(Console.ReadLine()); 
                a[index] = val;
            }
            catch(Exception e)
            {
                Console.Write("Exception occurred ");
            }
            Console.Write("Remaining program ");
        }
    }
}
</code></pre>`,
        options: [
          "It will output: Exception occurred",
          "It will output: Remaining program",
          "It will output: Exception occurred Remaining program",
          "It will output: Remaining program Exception occurred",
        ],
        answer: "It will output: Exception occurred Remaining program",
      },
      {
        id: 23,
        question:
          "ADO.NET provides the ability to create and process in-memory databases called",
        options: ["views", "relations", "tables", "datasets"],
        answer: "views",
      },
      {
        id: 24,
        question: `How will you complete the foreach loop in the C#.NET code snippet given below such that it correctly prints all elements of the array a?
<pre class="language-java"><code>  
int[][]a = new int[2][];
a[0] = new int[4]{6, 1 ,4, 3};
a[1] = new int[3]{9, 2, 7}; 
foreach (int[ ] i in a)
{
    /* Add loop here */
    Console.Write(j + " ");
    Console.WriteLine(); 
}
</code></pre>`,
        options: [
          "foreach (int j = 1; j < a(0).GetUpperBound; j++)",
          "foreach (int j = 1; j < a(0).GetUpperBound; j++)",
          "foreach (int j in a.Length)",
          "foreach (int j in i)",
        ],
        answer: "foreach (int j in i)",
      },
      {
        id: 25,
        question: `Which of the following is the correct output of the C#.NET code snippet given below?
<pre class="language-java"><code>  
int[][] a = new int[2][];
a[0] = new int[4]{6, 1, 4, 3};
a[1] = new int[3]{9, 2, 7}; 
Console.WriteLine(a[1].GetUpperBound(0));
</code></pre>`,
        options: ["4", "7", "9", "2"],
        answer: "2",
      },
      {
        id: 26,
        question: "What is true about viewbag in mvc?",
        options: [
          "It is used to transfer temporary data from the controller to the view.",
          "ViewBag only transfers data from controller to view.",
          "ViewBag values will be null if redirection occurs.",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 27,
        question:
          "How to check Request coming from which controller using MVC ASP.Net?",
        options: [
          `var _controller = HttpContext.Current.Request.RequestContext.Values["Controller"].ToString();`,
          `var _controller = HttpContext.Current.Request.RequestContext.RouteData.Values["Controller"].ToString();`,
          `var _controller = RouteData.Values["Controller"].ToString();`,
          "none",
        ],
        answer: `var _controller = HttpContext.Current.Request.RequestContext.RouteData.Values["Controller"].ToString();`,
      },
      {
        id: 28,
        question: "Which Namespace is used for Razor View Engine ?",
        options: [
          "System.Web.Razor",
          "System.Web.Mvc.WebFormViewEngine",
          "Both of the above",
          "None",
        ],
        answer: "System.Web.Razor",
      },
      {
        id: 29,
        question: "What are the methods used in thread class?",
        options: ["join", "resume", "sleep", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 30,
        question:
          "What executable unit gets created when we build an ASP.Net application?",
        options: [".com", ".exe", ".dll", "none of these"],
        answer: ".dll",
      },
      {
        id: 31,
        question: "How do we Delete, Update, Select data in a Dataset?",
        options: [
          "Using SQLCommand",
          "Using SQLDataReader",
          "Using SQLDataAdapter",
          "None of these",
        ],
        answer: "Using SQLDataAdapter",
      },
      {
        id: 32,
        question: "What is the transport protocol used to call a webservice?",
        options: ["SMTP", "TCP", "SOAP", "HTTP"],
        answer: "SOAP",
      },
      {
        id: 33,
        question:
          "______ is a code that consists of CPU and platform-independent set of instructions, which can be easily converted to native code.",
        options: ["JIT", "FCL", "DLL", "MSIL"],
        answer: "MSIL",
      },
      {
        id: 34,
        question:
          "Which of the following .NET components can be used to remove unused references from the managed heap?",
        options: [
          "CLR",
          "Class Loader",
          "Garbage Collector",
          "None of the above",
        ],
        answer: "Garbage Collector",
      },
      {
        id: 35,
        question: "Which webserver is developed by Microsoft?",
        options: [
          "Caudium",
          "Internet Information Services (IIS)",
          "Apache Tomcat",
          "WEBrick",
        ],
        answer: "Internet Information Services (IIS)",
      },
      {
        id: 36,
        question:
          "Which commands are used to specify settings of an .aspx file?",
        options: ["Directives", "Class", "Validation", "Events"],
        answer: "Directives",
      },
      {
        id: 37,
        question: "In ASP.NET application DLL files are stored in_____________",
        options: ["App_Data", "App_LocalResources", "App_Code", "Bin"],
        answer: "Bin",
      },
      {
        id: 38,
        question:
          "Which method do you invoke on the Data Adapter control to load your generated dataset?",
        options: ["Fill( )", "Read( )", "ExecuteQuery( )", "None of above"],
        answer: "Fill( )",
      },
      {
        id: 39,
        question:
          "In ASP.NET web application configuration settings are defined in____________",
        options: [
          "machine.config",
          "System.config",
          "ProcompiledApp.config",
          "Web.config",
        ],
        answer: "Web.config",
      },
      {
        id: 40,
        question: "Which is not a validation control?",
        options: [
          "Required Field Validator",
          "Compare Validator",
          "Error Validator",
          "Regular Expression Validator",
        ],
        answer: "Error Validator",
      },
    ],
  },
  {
    moduleName: "Concepts of Programming and Operating System - test 2",
    questions: [
      {
        id: 1,
        question:
          "Identify the incorrect statement about compilation and execution of java programs",
        options: [
          "javac helps in compiling the java program and creates the .class files",
          "java runs the programs using the bytecode in .class files",
          "java runs the programs using the source code in .java files",
          "javac is in the JDK package and java is in the JRE package",
        ],
        answer: "java runs the programs using the source code in .java files",
      },
      {
        id: 2,
        question:
          "What command is used to save the standard output in a file, as well as display it on the terminal?",
        options: ["tee", "grep", "cat", "more"],
        answer: "tee",
      },
      {
        id: 3,
        question:
          "Which command is used to change the I/O characteristics of the terminal?",
        options: ["ctty", "ptty", "stty", "tty"],
        answer: "stty",
      },
      {
        id: 4,
        question: "Which Linux command list the content of all sub directory?",
        options: ["ls ~", "ls * /", "ls /", "ls ../"],
        answer: "ls * /",
      },
      {
        id: 5,
        question: "Which component is responsible for optimizing byte-codes?",
        options: ["JVM", "JDK", "JIT", "JRE"],
        answer: "JIT",
      },
      {
        id: 6,
        question: "Which of these cannot be declared static?",
        options: ["class", "object", "variable", "method"],
        answer: "object",
      },
      {
        id: 7,
        question: "Which of the following statements are incorrect?",
        options: [
          "static methods can call other static methods only",
          "static methods must only access static data",
          "static methods can not refer to this or super in any way",
          "when object of class is declared, each object contains its own copy of static variables",
        ],
        answer:
          "when object of class is declared, each object contains its own copy of static variables",
      },
      {
        id: 8,
        question:
          "When invoking a method with an object argument, ___________ is passed.",
        options: [
          "the contents of the object",
          "a copy of the object",
          "the reference of the object",
          "the object is copied, then the reference of the copied object",
        ],
        answer: "the reference of the object",
      },
      {
        id: 9,
        question: "Choose the correct option.",
        options: [
          "Recursion is always better than iteration.",
          "Recursion uses more memory compared to iteration.",
          "Recursion uses less memory compared to iteration.",
          "Iterative function is always better and simpler to write than recursion.",
        ],
        answer: "Recursion uses more memory compared to iteration.",
      },
      {
        id: 10,
        question:
          "The operating system and the other processes are protected from being modified by an already running process because ____________",
        options: [
          "They are in different memory spaces",
          "They are in different logical addresses",
          "They have a protection algorithm",
          "Every address generated by the CPU is being checked against the relocation and limit registers",
        ],
        answer:
          "Every address generated by the CPU is being checked against the relocation and limit registers",
      },
      {
        id: 11,
        question:
          "Where are placed the list of processes that are prepared to be executed and waiting?",
        options: [
          "Job queue",
          "Ready queue",
          "Execution queue",
          "Process queue",
        ],
        answer: "Ready queue",
      },
      {
        id: 12,
        question: "By shell into the parameter, __ reads the first argument",
        options: ["$1", "$3", "$$", "1$"],
        answer: "$1",
      },
      {
        id: 13,
        question:
          "The program is interrupted by_________ command in appropriate way.",
        options: ["kill", "SIGKILL", "trap", "INT"],
        answer: "trap",
      },
      {
        id: 14,
        question:
          "Which system call can be used by a parent process to determine the termination of child process?",
        options: ["wait()", "exit()", "fork()", "get()"],
        answer: "wait()",
      },
      {
        id: 15,
        question:
          "The entry of all the PCBs of the current processes is in __________",
        options: [
          "Process Register",
          "Program Counter",
          "Process Table",
          "Process Unit",
        ],
        answer: "Process Table",
      },
      {
        id: 16,
        question: "If one thread opens a file with read privileges then:",
        options: [
          "other threads in the another process can also read from that file",
          "other threads in the same process can also read from that file",
          "any other thread can not read from that file",
          "all of the mentioned",
        ],
        answer:
          "other threads in the same process can also read from that file",
      },
      {
        id: 17,
        question:
          "A computer system supports 32-bit virtual addresses as well as 32-bit physical addresses. Since the virtual address space is of the same size as the physical address space, the operating system designers decide to get rid of the virtual memory entirely. Which one of the following is true?",
        options: [
          "Efficient implementation of multi-user support is no longer possible",
          "The processor cache organization can be made more efficient now",
          "Hardware support for memory management is no longer needed",
          "CPU scheduling can be made more efficient now",
        ],
        answer: "Hardware support for memory management is no longer needed",
      },
      {
        id: 18,
        question:
          "In Process Address Space, The variable names, constants, and instruction labels are the basic elements of ____________.",
        options: [
          "Symbolic addresses",
          "Relative addresses",
          "Physical addresses",
          "None of the above",
        ],
        answer: "Symbolic addresses",
      },
      {
        id: 19,
        question:
          "In which type of Fragmentation, Memory block assigned to process is bigger. Some portion of memory is left unused, as it cannot be used by another process.",
        options: [
          "External fragmentation",
          "Internal fragmentation",
          "Both of the above",
          "None of the above",
        ],
        answer: "Internal fragmentation",
      },
      {
        id: 20,
        question:
          "A swapper manipulates ___________ whereas the pager is concerned with individual _______ of a process.",
        options: [
          "the entire process, parts",
          "all the pages of a process, segments",
          "the entire process, pages",
          "none of the mentioned",
        ],
        answer: "the entire process, pages",
      },
      {
        id: 21,
        question:
          "Segment replacement algorithms are more complex than page replacement algorithms because ____________",
        options: [
          "Segments are better than pages",
          "Pages are better than segments",
          "Segments have variable sizes",
          "Segments have fixed sizes",
        ],
        answer: "Segments have variable sizes",
      },
      {
        id: 22,
        question: "Command used to check shared memory is",
        options: ["ipcs", "ipcs -mS", "ipcs -s", "ipcs -q"],
        answer: "ipcs -mS",
      },
      {
        id: 23,
        question:
          "One process requires M resource to complete a job. What should be the minimum number of resources available for N processes so that at least one process can continue to execute without blocking/waiting?",
        options: ["M * N", "M * N - 1", "M * N + 1", "M"],
        answer: "M",
      },
      {
        id: 24,
        question: `Which of the following are the major disadvantages of requesting all resources while preventing deadlock? <br>
            i) delay process initiation <br>
            ii) future resources requirements must be known <br>
            iii) subject to cyclic restart`,
        options: [
          "i and ii only",
          "ii and iii only",
          "i and iii only",
          "i, ii and iii",
        ],
        answer: "i and ii only",
      },
      {
        id: 25,
        question: `Which of the following are the thread synchronization primitives supported by Solaris <br>
            i) Mutual exclusion <br>
            ii) Semaphores <br>
            iii) Signals <br>
            iv) Condition variables <br>`,
        options: [
          "i, ii and iii only",
          "ii, iii and iv only",
          "i, ii and iv only",
          "All i, ii, iii and iv",
        ],
        answer: "i, ii and iv only",
      },
      {
        id: 26,
        question:
          "In which of the following Algorithm where the reference bit is used to determine whether a page has been recently referenced, and some page that has not been recently referenced is replaced?",
        options: [
          "LRU Page replacement Algorithm",
          "FIFO page replacement Algorithm",
          "Optimal page replacement algorithm",
          "NRU Page replacement algorithm",
        ],
        answer: "NRU Page replacement algorithm",
      },
      {
        id: 27,
        question:
          "In which of the following Page replacement Policy, at every page fault the page replacement policy replaces the page that was loaded into memory earlier than any other page of the process?",
        options: [
          "LRU Page replacement Algorithm",
          "FIFO page replacement Algorithm",
          "Optimal page replacement algorithm",
          "NRU Page replacement algorithm",
        ],
        answer: "FIFO page replacement Algorithm",
      },
      {
        id: 28,
        question:
          "In UNIX, the set of masked signals can be set or cleared using the ________ function.",
        options: ["sigprocmask", "sigmask", "sigmaskproc", "sigproc"],
        answer: "sigprocmask",
      },
      {
        id: 29,
        question:
          "In most cases, if a process is sent a signal while it is executing a system call :",
        options: [
          "the system call will continue execution and the signal will be ignored completely",
          "the system call is interrupted by the signal, and the signal handler comes in",
          "the signal has no effect until the system call completes",
          "none of the mentioned",
        ],
        answer: "the signal has no effect until the system call completes",
      },
      {
        id: 30,
        question:
          "Both processes (the parent and the child) continue execution at the instruction after the fork(), with one difference: the return code for the fork() is ______ for the new (child) process, whereas the _____ process identifier of the child is returned to the parent.",
        options: [
          "Negative integer, Zero",
          "Zero, Negative integer",
          "Nonzero integer, Zero",
          "Zero, nonzero integer",
        ],
        answer: "Zero, nonzero integer",
      },
      {
        id: 31,
        question:
          "When the operating system has performed a_____ operation, it has two choices for selecting a process either admitting a newly created process or bring in a previously suspended process.",
        options: ["Swapping-in", "Swapping-out", "Blocked-in", "Blocked-out"],
        answer: "Swapping-out",
      },
      {
        id: 32,
        question: `There are the following statements that are given below, which of them are correct about Regular expressions in the Linux operating system? <br>
            A. The regular expressions are strings that are used for pattern matching in some Linux commands. <br>
            B. The regular expressions are also known as a regex. <br>
            C. The regular expressions use some characters that each has a different meaning. <br>
            D. Regular expressions can only be used in the Linux commands.`,
        options: ["A and B", "C and D", "A, B, and C", "A, B, C, and D"],
        answer: "A, B, and C",
      },
      {
        id: 33,
        question:
          "Which of the following command is used to display only directories that exist in the current directory?",
        options: [
          `ls -l | grep "^d`,
          `ls | grep "^d"`,
          `ls -l | grep "#d"`,
          `ls -l | grep "*d"`,
        ],
        answer: `ls -l | grep "^d`,
      },
      {
        id: 34,
        question:
          "A deadlock avoidance algorithm dynamically examines the __________ to ensure that a circular wait condition can never exist.",
        options: [
          "resource allocation state",
          "system storage state",
          "operating system",
          "resources",
        ],
        answer: "resource allocation state",
      },
      {
        id: 35,
        question: `Applying the LRU page replacement to the following reference string. <br>
            1 2 4 5 2 1 2 4 <br>
            The main memory can accommodate 3 pages and it already has pages 1 and 2. Page 1 came in before page 2. <br>
            How many page faults will occur?`,
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
      {
        id: 36,
        question: "Thread synchronization is required because ___________",
        options: [
          "all threads of a process share the same address space",
          "all threads of a process share the same global variables",
          "all threads of a process can share the same files",
          "all of the mentioned",
        ],
        answer: "all of the mentioned",
      },
      {
        id: 37,
        question: `The following program results in the creation of?<br>
<pre class="language-java"><code>
main()
{
    if( fork() > 0 )
    sleep(100);
}
</code></pre>`,
        options: [
          "an orphan process",
          "a zombie process",
          "a process that executes forever",
          "none of the mentioned",
        ],
        answer: "a zombie process",
      },
      {
        id: 38,
        question:
          "In paged memory systems, if the page size is increased, then the internal fragmentation generally ____________",
        options: [
          "becomes less",
          "becomes more",
          "remains constant",
          "none of the mentioned",
        ],
        answer: "becomes more",
      },
      {
        id: 39,
        question:
          "When the entries in the segment tables of two different processes point to the same physical location ____________",
        options: [
          "the segments are invalid",
          "the processes get blocked",
          "segments are shared",
          "all of the mentioned",
        ],
        answer: "segments are shared",
      },
      {
        id: 40,
        question:
          "The hardware mechanism that allows a device to notify the CPU is called _______",
        options: ["polling", "interrupt", "driver", "controlling"],
        answer: "interrupt",
      },
    ],
  },
  {
    moduleName: "Object Oriented Programming with Java - test 3",
    questions: [
      {
        id: 1,
        question: `Which of the following are legal lines of Java code? <br>
            1. int w = (int)888.8; <br>
            2. byte x = (byte)100L; <br>
            3. long y = (byte)100; <br>
            4. byte z = (byte)100L;`,
        options: [
          "1 and 2",
          "2 and 3",
          "3 and 4",
          "All statements are correct",
        ],
        answer: "All statements are correct",
      },
      {
        id: 2,
        question: `What is the output of this program?
<pre class="language-java"><code>
class average {
    public static void main(String args[])
    {
        double num[] = {5.5, 10.1, 11, 12.8, 56.9, 2.5};
        double result;
        result = 0;
        for (int i = 0; i < 6; ++i)
        result = result + num[i];
        System.out.print(result/6);
    }
}
</code></pre>`,
        options: [
          "16.34",
          "16.566666644",
          "16.46666666666667",
          "16.46666666666666",
        ],
        answer: "16.46666666666667",
      },
      {
        id: 3,
        question: "What is Truncation is Java?",
        options: [
          "Floating-point value assigned to an integer type",
          "Integer value assigned to floating type",
          "Floating-point value assigned to an Floating type",
          "Integer value assigned to floating type",
        ],
        answer: "Floating-point value assigned to an integer type",
      },
      {
        id: 4,
        question: "Which of these is an incorrect array declaration?",
        options: [
          "int arr[] = new int[5];",
          "int [] arr = new int[5];",
          "int arr[] = new int[5];",
          "int arr[] = int [5] new;",
        ],
        answer: "int arr[] = int [5] new;",
      },
      {
        id: 5,
        question:
          "What will this code print? <br> int arr[] = new int[5]; <br> System.out.println(arr);",
        options: [
          "0",
          "value stored in arr[0]",
          "00000",
          "Class name@ hashcode in hexadecimal form",
        ],
        answer: "Class name@ hashcode in hexadecimal form",
      },
      {
        id: 6,
        question: `What is the output of this program?
<pre class="language-java"><code>
class increment
{
    public static void main(String args[])
    {
        double var1 = 1 + 5;
        double var2 = var1 / 4;
        int var3 = 1 + 5;
        int var4 = var3 / 4;
        System.out.print(var2 + " " + var4);
    }
}
</code></pre>`,
        options: ["1 1", "0 1", "1.5 1", "1.5 1.0"],
        answer: "1.5 1",
      },
      {
        id: 7,
        question:
          "Which of the following methods is not used while Serialization and DeSerialization?",
        options: [
          "readObject()",
          "readExternal()",
          "readWriteObject()",
          "writeObject()",
        ],
        answer: "readWriteObject()",
      },
      {
        id: 8,
        question:
          "Which of these keywords are used for generating an exception manually?",
        options: ["try", "catch", "throw", "check"],
        answer: "throw",
      },
      {
        id: 9,
        question: `What is the output of this program?
<pre class="language-java"><code>
class Output
{
    public static void main(String args[])
    {
        try
        {
            int a = 0;
            int b = 5;
            int c = b / a;
            System.out.print("Hello");
        }
    }
}
</code></pre>`,
        options: ["Hello", "World", "HelloWorld", "Compilation Error"],
        answer: "Compilation Error",
      },
      {
        id: 10,
        question: "Which of these methods is used to print stack trace?",
        options: [
          "obtainStackTrace()",
          "printStackTrace()",
          "getStackTrace()",
          "displayStackTrace()",
        ],
        answer: "printStackTrace()",
      },
      {
        id: 11,
        question: "Which of these classes is super class of Exception class?",
        options: ["Throwable", "System", "RunTime", "Class"],
        answer: "Throwable",
      },
      {
        id: 12,
        question: `What is the output of this program?
<pre class="language-java"><code>
class exception_handling
{
    public static void main(String args[])
    {
        try
        {
            throw new NullPointerException ("Hello");
            System.out.print("A");
        }
        catch(ArithmeticException e)
        {
            System.out.print("B");
        }
    }
}
</code></pre>`,
        options: ["A", "B", "Compilation Error", "Runtime Error"],
        answer: "Runtime Error",
      },
      {
        id: 13,
        question: "Which of these class extend InputStream class?",
        options: [
          "ObjectStream",
          "ObjectInputStream",
          "ObjectOutput",
          "ObjectInput",
        ],
        answer: "ObjectInputStream",
      },
      {
        id: 14,
        question: "How many methods Serializable has?",
        options: ["1", "2", "3", "0"],
        answer: "0",
      },
      {
        id: 15,
        question:
          "Which of these is an interface for control over serialization and deserialization?",
        options: [
          "Serializable",
          "Externalization",
          "FileFilter",
          "ObjectInput",
        ],
        answer: "Externalization",
      },
      {
        id: 16,
        question:
          "Which of these methods of a Thread class is used to suspend a thread for a period of time?",
        options: ["sleep()", "terminate()", "suspend()", "stop()"],
        answer: "sleep()",
      },
      {
        id: 17,
        question: `What is the output of this program?
<pre class="language-java"><code>
class newthread implements Runnable
{
    Thread t;
    newthread()
    {
        t = new Thread(this,"My Thread");
        t.start();
    }
}

class multithreaded_programing
{
    public static void main(String args[])
    {
    new newthread();
    }
}
            </code></pre>`,
        options: [
          "My Thread",
          "Thread[My Thread,5,main]",
          "Compilation Error",
          "Runtime Error",
        ],
        answer: "My Thread",
      },
      {
        id: 18,
        question: "Which of these methods returns the class of an object?",
        options: ["getClass()", "Class()", "WhoseClass()", "WhoseObject()"],
        answer: "getClass()",
      },
      {
        id: 19,
        question: "Which of these class is a superclass of all other classes?",
        options: ["Math", "Process", "System", "Object"],
        answer: "Object",
      },
      {
        id: 20,
        question: `What is the output of this program?
<pre class="language-java"><code>
class Output
{
    public static void main(String args[])
    {
        int x = 3.14;
        int y = (int) Math.abs(x);
        System.out.print(y);
    }
}
</code></pre>`,
        options: ["0", "3", "3.0", "3.1"],
        answer: "3",
      },
      {
        id: 21,
        question:
          "Which of these method can set the out stream to OutputStream?",
        options: [
          "setStream()",
          "setosteam()",
          "setOut()",
          "streamtoOstream()",
        ],
        answer: "setOut()",
      },
      {
        id: 22,
        question:
          "Which of these class is not a member class of java.io package?",
        options: ["String", "StringReader", "Writer", "File"],
        answer: "String",
      },
      {
        id: 23,
        question:
          "Which of these interface is not a member of java.io package?",
        options: ["DataInput", "ObjectInput", "ObjectFilter", "FileFilter"],
        answer: "ObjectFilter",
      },
      {
        id: 24,
        question:
          "Which of these exceptions will be thrown if we declare an array with negative size?",
        options: [
          "IllegalArrayException",
          "IllegalArraySizeExeption",
          "NegativeArrayException",
          "NegativeArraySizeExeption",
        ],
        answer: "NegativeArraySizeExeption",
      },
      {
        id: 25,
        question:
          "Which of these class is used to create user defined exception?",
        options: ["java.lang", "Exception", "RunTime", "System"],
        answer: "Exception",
      },
      {
        id: 26,
        question:
          "Which of these is the interface of legacy is implemented by Hashtable and Dictionary classes?",
        options: ["Map", "Enumeration", "HashMap", "Hashtable"],
        answer: "Map",
      },
      {
        id: 27,
        question:
          "Which of these methods is used to retrieve the elements in properties object at specific location?",
        options: ["get()", "Elementat()", "ElementAt()", "getProperty()"],
        answer: "getProperty()",
      },
      {
        id: 28,
        question: `What is the output of this program?
<pre class="language-java"><code>
import java.util.*;
class properties
{
    public static void main(String args[])
    {
        Properties obj = new Properties();
        obj.put("AB", new Integer(3));
        obj.put("BC", new Integer(2));
        obj.put("CD", new Integer(8));
        System.out.print(obj.keySet());
    }
}
</code></pre>`,
        options: ["{AB, BC, CD}", "[AB, BC, CD]", "[3, 2, 8]", "{3, 2, 8}"],
        answer: "[AB, BC, CD]",
      },
      {
        id: 29,
        question: "Which of these packages contain all the collection classes?",
        options: ["java.util", "java.lang", "java.net", "java.awt"],
        answer: "java.util",
      },
      {
        id: 30,
        question: "What is Collection in Java?",
        options: [
          "A group of objects",
          "A group of classes",
          "A group of interfaces",
          "None of the mentioned",
        ],
        answer: "A group of objects",
      },
      {
        id: 31,
        question:
          "In order to restrict a variable of a class from inheriting to subclass, how variable should be declared?",
        options: ["Protected", "Private", "Public", "Static"],
        answer: "Private",
      },
      {
        id: 32,
        question:
          "If super class and subclass have same variable name, which keyword should be used to use super class?",
        options: ["super", "this", "upper", "classname"],
        answer: "super",
      },
      {
        id: 33,
        question:
          "Which of the following is used for implementing inheritance through class?",
        options: ["inherited", "using", "extends", "implements"],
        answer: "extends",
      },
      {
        id: 34,
        question: "What is use of interpreter?",
        options: [
          "They read high level code and execute them",
          "They convert bytecode to machine language code",
          "They are intermediate between JIT and JVM",
          "It is a synonym for JIT",
        ],
        answer: "They read high level code and execute them",
      },
      {
        id: 35,
        question:
          "Which concept of Java is a way of converting real world objects in terms of class?",
        options: [
          "Polymorphism",
          "Encapsulation",
          "Abstraction",
          "Inheritance",
        ],
        answer: "Abstraction",
      },
      {
        id: 36,
        question:
          "What is it called if an object has its own lifecycle and there is no owner?",
        options: ["Aggregation", "Composition", "Encapsulation", "Association"],
        answer: "Association",
      },
      {
        id: 37,
        question: "Attribute of an Object is also known as its ________.",
        options: ["state", "method", "behavior", "procedures"],
        answer: "state",
      },
      {
        id: 38,
        question: "Which dynamic class is threadsafe?",
        options: ["Vector", "ArrayList", "Linkedlist", "None of these"],
        answer: "Vector",
      },
      {
        id: 39,
        question: "Which statement is true? Select the one correct answer.",
        options: [
          "The compiler will fail to compile code that explicitly tries to call the finalize() method.",
          "An overriding finalize() method in any class can always throws checked exceptions.",
          "The finalize method() can be overloading.",
          "The body of the finalize() method can only access other objects that are eligible for garbage collection.",
        ],
        answer: "The finalize method() can be overloading.",
      },
      {
        id: 40,
        question:
          "Which of the following are true about the Error and Exception classes?",
        options: [
          "Both classes extends Throwable.",
          "The error class is final and the exception class is not.",
          "The exception class is final and the error class is not.",
          "Both class implement Throwable.",
        ],
        answer: "Both classes extends Throwable.",
      },
    ],
  },
  {
    moduleName: "Microsoft .Net Technologies - test 3",
    questions: [
      {
        id: 1,
        question:
          "Which of the following is used to overload user defined types by defining static member functions?",
        options: ["op", "opoverload", "operator", "operatoroverload"],
        answer: "operator",
      },
      {
        id: 2,
        question: "Operators that can be overloaded are?",
        options: ["||", "+=", "+", "[]"],
        answer: "+",
      },
      {
        id: 3,
        question: "What is the vector in operator overloading?",
        options: ["class", "method()", "data type", "none of the mentioned"],
        answer: "data type",
      },
      {
        id: 4,
        question: "what is Operator Overloading?",
        options: [
          "Enables user-defined operator implementations for various operators such as: =, typeof",
          "The ability to declare more than one method with the same name but a different signature",
          "Enables user-defined operator implementations for various operators such as: true, false",
          "none of these",
        ],
        answer:
          "Enables user-defined operator implementations for various operators such as: true, false",
      },
      {
        id: 5,
        question:
          "Which of the following is NOT an interface declared in System.Collections namespace?",
        options: [
          "IComparer",
          "lEnumerable",
          "lEnumerator",
          "IDictionaryComparer",
        ],
        answer: "IDictionaryComparer",
      },
      {
        id: 6,
        question:
          "Suppose value of the Capacity property of ArrayList Collection is set to What will be the capacity of the Collection on adding fifth element to it?",
        options: ["4", "8", "16", "32"],
        answer: "8",
      },
      {
        id: 7,
        question:
          "Which of the following is the correct way to find out the number of elements currently present in an ArrayList Collection called arr?",
        options: ["arr.Count", "arr.GrowSize", "arr.MaxIndex", "arr.Capacity"],
        answer: "arr.Count",
      },
      {
        id: 8,
        question:
          "The ... method removes and returns the object at the begining of the Queue.",
        options: [
          "public virtual void Dequeue();",
          "public virtual void Delete();",
          "public virtual void Clear();",
          "public virtual object DequeueQ;",
        ],
        answer: "public virtual object DequeueQ;",
      },
      {
        id: 9,
        question:
          "Which Property we can use to gets or sets the number of elements that the ArrayList can Contain",
        options: ["Count", "Item", "Capacity", "Length"],
        answer: "Capacity",
      },
      {
        id: 10,
        question: "Among the given collections which is the I/O index based?",
        options: ["ArrayList", "BitArray", "Both of the above", "Queue"],
        answer: "Both of the above",
      },
      {
        id: 11,
        question: "Choose the correct statement among the followings?",
        options: [
          "Indexers are location indicators",
          " Indexers are used to access class objects",
          "Indexer is a form of property and works in the same way as a property",
          "All of the mentioned",
        ],
        answer: "All of the mentioned",
      },
      {
        id: 12,
        question: "Choose the keyword which declares the indexer?",
        options: ["base", "this", "super", "extract"],
        answer: "this",
      },
      {
        id: 13,
        question:
          "Choose the operator/operators which is/are not used to access the operator in indexers?",
        options: ["get", "set", "access", "all of the mentioned"],
        answer: "access",
      },
      {
        id: 14,
        question:
          "Which among the following are the advantages of using indexers?",
        options: [
          "To use collection of items at a large scale we make use of indexers as they utilize objects of class that represent the collection as an array",
          "Indexers are also convenient as they can also make use of different types of indexers like int, string etc",
          "An indexer allows an object to be indexed such as an array",
          "All of the mentioned",
        ],
        answer: "All of the mentioned",
      },
      {
        id: 15,
        question:
          "Choose the correct statement about properties describing the indexers?",
        options: [
          "No need to use the name of the property while using an indexed propert",
          "An indexer property should accept at least one argumen",
          "Indexers can be overloaded",
          "All of the mentioned",
        ],
        answer: "All of the mentioned",
      },
      {
        id: 16,
        question:
          "Choose the correct option among the following indexers which correctly allows to index in same way as an array?",
        options: ["A class", "An interface", "A function", "A property"],
        answer: "A class",
      },
      {
        id: 17,
        question: "Select the modifiers which can be used with the properties?",
        options: [
          "Private",
          "Public",
          "Protected Internal",
          "All of the mentioned",
        ],
        answer: "All of the mentioned",
      },
      {
        id: 18,
        question:
          "To use the .NET Framework Data Provider for SQL Server, an application must reference thenamespace.",
        options: [
          "System.Data.Client",
          "System.Data.SqlClient",
          "System.Data.Sql",
          "None of the mentioned",
        ],
        answer: "System.Data.SqlClient",
      },
      {
        id: 19,
        question:
          "Choose the namespace which supports multithreading programming?",
        options: [
          "System.net",
          "System.Linq",
          "System.Threading",
          "All of the mentioned",
        ],
        answer: "System.Threading",
      },
      {
        id: 20,
        question:
          "What does the following C# code snippet specify? public Thread(ThreadStart start)",
        options: [
          "Defines a thread",
          "Declaration of a thread constructor",
          "Only Defines a thread",
          "Only Defines a thread & Declaration of a thread constructor",
        ],
        answer: "Only Defines a thread & Declaration of a thread constructor",
      },
      {
        id: 21,
        question: "Which of these classes is used to make a thread?",
        options: ["String", "System", "Thread", "Runnable"],
        answer: "Thread",
      },
      {
        id: 22,
        question:
          "On call of which type of method the new created thread will not start executing?",
        options: ["Begin()", "Start()", "New()", "All of the mentioned"],
        answer: "Start()",
      },
      {
        id: 23,
        question:
          "Which of these methods of Thread class is used to Suspend a thread for a period of time?",
        options: ["sleep()", "terminate()", "suspend()", "stop()"],
        answer: "sleep()",
      },
      {
        id: 24,
        question:
          "Which keyword is used for using the synchronization features defined by the Monitor class?",
        options: ["lock", "synchronized", "monitor", "locked"],
        answer: "lock",
      },
      {
        id: 25,
        question:
          "Which of these keywords are used to implement synchronization? ",
        options: ["synchronize", "syn", "synch", "synchronized"],
        answer: "synchronized",
      },
      {
        id: 26,
        question:
          "Which method is called when a thread is blocked from running temporarily?",
        options: ["Pulse()", "PulseAll()", "Wait()", "Both first and second"],
        answer: "",
      },
      {
        id: 27,
        question: "Which of these class is used to make a thread?",
        options: ["String", "System", "Thread", "Runnable"],
        answer: "Thread",
      },
      {
        id: 28,
        question:
          "Which of these method of Thread class is used to Suspend a thread for a period of time?",
        options: ["sleep()", "terminate()", "suspend()", "stop()"],
        answer: "sleep()",
      },
      {
        id: 29,
        question: `what will be the output of following code?
<pre class="language-java"><code>
public static void Main()
{
    int k;
    display(k);
}

static void display(int val = 0)
{
    Console.Write(val);
}
</code></pre>`,
        options: ["Null", "0", "compile time error", "runtime error"],
        answer: "compile time error",
      },
      {
        id: 30,
        question:
          "Which of the following statements is correct about a delegate?",
        options: [
          "inheritance is a prerequisite for using delegates",
          "delegates are not type safe",
          "delegates provides wrappers for function pointers",
          "none of the mentioned",
        ],
        answer: "delegates provides wrappers for function pointers",
      },
      {
        id: 31,
        question:
          "The infrastructure that supports these dynamic operations at run time iso called the",
        options: ["CLR", "CTS", "CLS", "DLR"],
        answer: "DLR",
      },
      {
        id: 32,
        question: "In C#, having unreachable code is always a/an ........",
        options: ["method", "function", "error", "itreative"],
        answer: "error",
      },
      {
        id: 33,
        question:
          "C# treats the multiple catch statements like cases in a .............. statement",
        options: ["if", "for", "while", "switch"],
        answer: "switch",
      },
      {
        id: 34,
        question:
          "Which component in Aso.net MVC can be used to pass data between controller to view (Assume you have to pass current date and time)",
        options: [
          `ViewData["DateTime"] = DateTime.Now.ToString();`,
          `ViewBag["DateTime"] = DateTime.Now.ToString();`,
          `ViewState["DateTime"] = DateTime.Now.ToString();`,
          `DataView["DateTime"] = DateTime.Now.ToString();`,
        ],
        answer: `ViewBag["DateTime"] = DateTime.Now.ToString();`,
      },
      {
        id: 35,
        question: "Choose the correct statement among the followings?",
        options: [
          "Indexers are location indicators",
          "Indexers are used to access class objects",
          "Indexer is a form of property and works in the same way as a property",
          "All of the mentioned",
        ],
        answer: "All of the mentioned",
      },
      {
        id: 36,
        question: `State whether the following statements about the Microsoft Intermediate Language (MSIL) are TRUE or FALSE. <br>
            i) The MSIL code includes instructions to load, initialize and invoke methods on objects <br>
            ii) The MSIL code is collected and assembled in the form of byte codes and is converted to a .NET assembly`,
        options: [
          "i-True, ii-False",
          "i-False, ii-True",
          "i-True, ii-True",
          "i-False, ii-False",
        ],
        answer: "i-True, ii-True",
      },
      {
        id: 37,
        question:
          "What function modifier can be put on a method in a base class to allow the child to override it?",
        options: ["Abstarct", "Sealed", "Virtual", "Must Override"],
        answer: "Virtual",
      },
      {
        id: 38,
        question:
          "ensures complete interoperability among applications, regardless of the language used to create the application",
        options: ["CLR", "CTS", "CLS", "FCL"],
        answer: "CLS",
      },
      {
        id: 39,
        question: "How do vou manage_states in an ASP.NET application?",
        options: [
          "Viewstate",
          "Application Objects",
          "Session Objects",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 40,
        question: "Choose the base class for string() method:",
        options: [
          "System.Array",
          "System.char",
          "System.String",
          "None of the mentioned",
        ],
        answer: "System.String",
      },
    ],
  },
];

{
  /* <img class = 'mt-3' src='https://cceestudy.in/images/tests/images1.jpg' style='width : 100%;' /> */
}

module.exports = data;
