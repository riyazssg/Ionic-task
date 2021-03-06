import {Injectable} from '@angular/core';

export class qList {
  constructor(public qus: string, public ans: string) { }
}

@Injectable()
export class Questions{
   public cProgramming=[
        new qList("C program to find factorial of a number?",
        `<p>
The factorial of a positive number n is given by: <br>
factorial of n (n!) = 1*2*3*4....n
</p>

<pre>
#include &ltstdio.h&gt
int main()
{
    int n, i;
    unsigned long long factorial = 1;

    printf("Enter an integer: ");
    scanf("%d",&n);

    // show error if the user enters a negative integer
    if (n < 0)
        printf("Error! Factorial of a negative number doesn't exist.");

    else
    {
        for(i=1; i<=n; ++i)
        {
            factorial *= i;              // factorial = factorial*i;
        }
        printf("Factorial of %d = %llu", n, factorial);
    }

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter an integer: 10
Factorial of 10 = 3628800
</pre>`),
        new qList("C program to check whether a number is palindrome or not?",
        `<p>
An integer is a palindrome if the reverse of that number is equal to the original number.
</p>

<pre>
#include &ltstdio.h>
int main()
{
    int n, reversedInteger = 0, remainder, originalInteger;

    printf("Enter an integer: ");
    scanf("%d", &n);

    originalInteger = n;

    // reversed integer is stored in variable 
    while( n!=0 )
    {
        remainder = n%10;
        reversedInteger = reversedInteger*10 + remainder;
        n /= 10;
    }

    // palindrome if orignalInteger and reversedInteger are equal
    if (originalInteger == reversedInteger)
        printf("%d is a palindrome.", originalInteger);
    else
        printf("%d is not a palindrome.", originalInteger);
    
    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter an integer: 1001
1001 is a palindrome.
</pre>
`),
new qList("Program to check entered number is whether prime or not?", 
`<p style="font-style:italic">
A prime number is a positive integer which is divisible only by 1 and itself. For example: 2, 3, 5, 7, 11, 13

</p>

<pre>
#include &ltstdio.h>
int main()
{
    int n, i, flag = 0;

    printf("Enter a positive integer: ");
    scanf("%d",&n);

    for(i=2; i<=n/2; ++i)
    {
        // condition for nonprime number
        if(n%i==0)
        {
            flag=1;
            break;
        }
    }

    if (flag==0)
        printf("%d is a prime number.",n);
    else
        printf("%d is not a prime number.",n);
    
    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter a positive integer: 29
29 is a prime number.

</pre>`),
new qList('program to print "Hello C" without using any semicolon ";" in program?', 
`<p style="font-style:italic">
Call printf statement within the if condition and there is no need to terminate printf statement with semicolon (;) in if condition.

</p>

<pre>
/*Program to print "Hello C" or any message 
without using any “;” in program*/
 
#include <stdio.h>
int main() 
{ 
    if(printf("Hello C")) 
    { } 
}
</pre>
<strong>Output</strong>
<br>
<pre>
Hello C

</pre>`)   ,
new qList(`C program to print all leap years from 1 to N?`, `
<p style="font-style:italic">
A leap year is exactly divisible by 4 except for century years (years ending with 00). The century year is a leap year only if it is perfectly divisible by 400.

</p>

<pre>
#include &ltstdio.h>

int main()
{
    int year;

    printf("Enter a year: ");
    scanf("%d",&year);

    if(year%4 == 0)
    {
        if( year%100 == 0)
        {
            // year is divisible by 400, hence the year is a leap year
            if ( year%400 == 0)
                printf("%d is a leap year.", year);
            else
                printf("%d is not a leap year.", year);
        }
        else
            printf("%d is a leap year.", year );
    }
    else
        printf("%d is not a leap year.", year);
    
    return 0;
}
</pre>
<strong>Output- 1</strong>
<br>
<pre>
Enter a year: 1900
1900 is not a leap year.

</pre>
<strong>Output- 2</strong>
<br>
<pre>
Enter a year: 2012
2012 is a leap year.

</pre>`), 
new qList(`c program to check whether number is even or odd?`, `<p style="font-style:italic">
An even number is an integer that is exactly divisible by 2. Example: 0, 8, -24 <br>

An odd number is an integer that is not exactly divisible by 2. Example: 1, 7, -11, 15

</p>

<pre>
#include &ltstdio.h>
int main()
{
    int number;

    printf("Enter an integer: ");
    scanf("%d", &number);

    // True if the number is perfectly divisible by 2
    if(number % 2 == 0)
        printf("%d is even.", number);
    else
        printf("%d is odd.", number);

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter an integer: -7
-7 is odd.

</pre>`) , 
new qList(`Program to check vowel or consonant?`, `
<p style="font-style:italic">
The five alphabets A, E, I, O and U are called vowels. All other alphabets except these 5 vowel letters are called consonants.<br>

This program assumes that the user will always enter an alphabet character.

</p>

<pre>
#include &ltstdio.h>
int main()
{
    char c;
    int isLowercaseVowel, isUppercaseVowel;

    printf("Enter an alphabet: ");
    scanf("%c",&c);

    // evaluates to 1 (true) if c is a lowercase vowel
    isLowercaseVowel = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');

    // evaluates to 1 (true) if c is an uppercase vowel
    isUppercaseVowel = (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

    // evaluates to 1 (true) if either isLowercaseVowel or isUppercaseVowel is true
    if (isLowercaseVowel || isUppercaseVowel)
        printf("%c is a vowel.", c);
    else
        printf("%c is a consonant.", c);
    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter an alphabet: G
G is a consonant.

</pre>`),
new qList(`c Program to find the Largest number among three numbers?`, `
<p style="font-style:italic">
This program uses only if statement to find the largest number.

</p>

<pre>
#include &ltstdio.h>
int main()
{
    double n1, n2, n3;

    printf("Enter three different numbers: ");
    scanf("%lf %lf %lf", &n1, &n2, &n3);

    if( n1>=n2 && n1>=n3 )
        printf("%.2f is the largest number.", n1);

    if( n2>=n1 && n2>=n3 )
        printf("%.2f is the largest number.", n2);

    if( n3>=n1 && n3>=n2 )
        printf("%.2f is the largest number.", n3);

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter three numbers: -4.5
3.9
5.6
5.60 is the largest number.

</pre>`),
new qList(`c Program to find ASCII value of a character?`, `
<p style="font-style:italic">
A character variable holds ASCII value (an integer number between 0 and 127) rather than that character itself in C programming. That value is known as ASCII value. 

For example, ASCII value of 'A' is 65.

What this means is that, if you assign 'A' to a character variable, 65 is stored in that variable rather than 'A' itself.

</p>

<pre>
#include <&lttdio.h>
int main()
{
    char c;
    printf("Enter a character: ");

    // Reads character input from the user
    scanf("%c", &c);  
    
    // %d displays the integer value of a character
    // %c displays the actual character
    printf("ASCII value of %c = %d", c, c);
    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter a character: G
ASCII value of G = 71
</pre>`),
new qList(`c program to check whether a character is an alphabet or not ?`, 
`<pre>
#include &ltstdio.h>
int main()
{
    char c;
    printf("Enter a character: ");
    scanf("%c",&c);

    if( (c>='a' && c<='z') || (c>='A' && c<='Z'))
        printf("%c is an alphabet.",c);
    else
        printf("%c is not an alphabet.",c);

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter a character: *
* is not an alphabet
</pre>`)  ,
new qList(`c program to calculate the sum of natural numbers?`, 
`<p style="font-style:italic">
The positive numbers 1, 2, 3... are known as natural numbers. The programs below takes a positive integer (let say n) as an input from the user and calculates the sum up to n.

</p>

<pre>
#include &ltstdio.h>
int main()
{
    int n, i, sum = 0;
    
    printf("Enter a positive integer: ");
    scanf("%d",&n);

    for(i=1; i <= n; ++i)
    {
        sum += i;   // sum = sum+i;
    }

    printf("Sum = %d",sum);

    return 0;
}

</pre>
<strong>Output</strong>
<br>
<pre>
Enter a positive integer: 100
Sum = 5050
</pre>`),
new qList(`c program to find GCD of two numbers ?`, 
`<p style="font-style:italic">
The HCF or GCD of two integers is the largest integer that can exactly divide both numbers (without a remainder). <br>

There are many ways to find the greatest common divisor in C programming.

</p>

<pre>
#include &ltstdio.h>

int main()
{
    int n1, n2, i, gcd;

    printf("Enter two integers: ");
    scanf("%d %d", &n1, &n2);

    for(i=1; i <= n1 && i <= n2; ++i)
    {
        // Checks if i is factor of both integers
        if(n1%i==0 && n2%i==0)
            gcd = i;
    }

    printf("G.C.D of %d and %d is %d", n1, n2, gcd);

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter two positive integers: 81
153
GCD = 9
</pre>`),
new qList(`C program to reverse a number ?`, `
<pre>
#include &ltstdio.h>
int main()
{
    int n, reversedNumber = 0, remainder;

    printf("Enter an integer: ");
    scanf("%d", &n);

    while(n != 0)
    {
        remainder = n%10;
        reversedNumber = reversedNumber*10 + remainder;
        n /= 10;
    }

    printf("Reversed Number = %d", reversedNumber);

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter an integer: 2345
Reversed Number = 5432
</pre>`),
new qList(`C Program to find the length of a string with out using library Fn?`, `
<p style="font-style:italic">
You can use standard library function strlen() to find the length of a string but, this program computes the length of a string manually without using strlen() funtion.

</p>

<pre>
#include &ltstdio.h>
int main()
{
    char s[1000], i;

    printf("Enter a string: ");
    scanf("%s", s);

    for(i = 0; s[i] != '\0'; ++i);

    printf("Length of string: %d", i);
    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter a string: Profunia
Length of string: 8
</pre>`),
new qList(`C program to display characters from A to Z using loop ? `, `
<pre>
#include &ltstdio.h>
int main()
{
    char c;

    for(c = 'A'; c <= 'Z'; ++c)
       printf("%c ", c);
    
    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
</pre>`),
new qList(`C program to find sum of two numbers?`, `
<pre>
#include &ltstdio.h>
int main()
{
    int firstNumber, secondNumber, sumOfTwoNumbers;
    
    printf("Enter two integers: ");

    // Two integers entered by user is stored using scanf() function
    scanf("%d %d", &firstNumber, &secondNumber);

    // sum of two numbers in stored in variable sumOfTwoNumbers
    sumOfTwoNumbers = firstNumber + secondNumber;

    // Displays sum      
    printf("%d + %d = %d", firstNumber, secondNumber, sumOfTwoNumbers);

    return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter two integers: 12
11
12 + 11 = 23
</pre>`),
new qList(`program in c print 100 to 1 without using loop?`, `
<pre>
#include &ltstdio.h>
void printNos(unsigned int n)
{
  if(n > 0)
  {
    printNos(n-1);
    printf("%d ",  n);
  }
  return;
}
 
/* Driver program to test printNos */
int main()
{
  printNos(100);
  getchar();
  return 0;
}
</pre>`),
new qList(`write a c program to sorting array in ascending and descending order`, `
<pre>
#include &ltstdio.h>
int main(void)
{
	int a[10], i=0, j=0, n, t;

	printf ("\n Enter the no. of elements: ");
	scanf ("%d", &n);
	printf ("\n");

	for (i = 0; i <n; i++)
	{
		printf ("\n Enter the %dth element: ", (i+1));
		scanf ("%d", &a[i]);
	}

	for (j=0 ; j<(n-1) ; j++)
	{
		for (i=0 ; i<(n-1) ; i++)
		{
			if (a[i+1] < a[i])
			{
				t = a[i];
				a[i] = a[i + 1];
				a[i + 1] = t;
			}
		}
	}

	printf ("\n Ascending order: ");
	for (i=0 ; i<n ; i++)
	{
		printf (" %d", a[i]);
	}

	printf ("\n Descending order: ");
	for (i=n ; i>0 ; i--)
	{
		printf (" %d", a[i-1]);
	}

      /* indicate successful completion */
      return 0;
}
</pre>
<strong>Output</strong>
<br>
<pre>
Enter the no. of elements: 5


 Enter the 1th element: 25

 Enter the 2th element: 50

 Enter the 3th element: 75

 Enter the 4th element: 35

 Enter the 5th element: 100

 Ascending order:  25 35 50 75 100
 Descending order:  100 75 50 35 25
</pre>`)
    ];

    public cshapProgramming=[

    ];
    public dotNetFramework=[
        new qList(`What is the .NET Framework?`, `
        <p>
The .NET is a Framework, which is a collection of classes of  reusable libraries given by Microsoft to be used in other .NET applications and  to develop, build and deploy many types of applications on the Windows platform  including the following:

</p>

<ul> <li>Console Applications</li> <li>Windows Forms Applications</li> <li>Windows Presentation Foundation (WPF) Applications</li> <li>Web Applications</li> <li>Web Services</li> <li>Windows Services</li> <li>Services-oriented applications using Windows Communications Foundation (WCF)</li> <li>Workflow-enabled applications using Windows Workflow Foundation(WF)</li> </ul>
<p>That primarily runs on the Microsoft Windows Operating System. <br> <br> <img src="assets/Images/Microsoft Windows operating system.jpg"></p>
`),
new qList(`What is CLR?`, `
The CLR stands for Common Language Runtime and it is an Execution  Environment. It works as a layer between Operating Systems and the applications  written in .NET languages that conforms to
 the Common Language Specification (CLS).  The main function of Common Language Runtime (CLR) is to convert the Managed  Code into native code and then execute the program.
 The Managed Code compiled  only when it is needed, that is it converts the appropriate instructions when each  function is called. The Common Language Runtime (CLR)’s just in time (JIT) 
 compilation converts Intermediate Language (MSIL) to native code on demand at  application run time.<br> <br> When a .NET application is executed at that time the control will go to Operating  System,
 then Operating System create a process to load 
 <strong>CLR.<br> </strong><br> The program used by the operating system for loading CLR is called runtime host,  which are different depending upon the type of application that is desktop or  web based application i.e.<br>
 <br> The runtime host for <strong>desktop applications</strong> is API function called <strong> CorbinToRuntime</strong>.<br> <br> The runtime host for <strong>web based </strong>applications is ASP.NET worker process <strong> 
 (aspnet-wp.exe)</strong>.<br> <br> <img alt="process to load CLR" src="assets/Images/process to load CLR.jpg">
<strong></strong><br> <br> CLR runtime engine comes with set of services, which are classified as  follows<br> <br> <strong>CLR services</strong></p>
<ul> <li>Assembly Resolver</li> <li>Assembly Loader</li> <li>Type Checker</li> <li>COM marshalled</li> <li>Debug Manager</li> <li>Thread Support</li> <li>IL to Native compiler</li> <li>Exception Manager</li> <li>Garbage Collector </li> </ul>`),
new qList(`What is CTS?`, `

 The Common Type System (CTS) standardizes the data types of all 
 programming languages using .NET under the umbrella of .NET to a common data  type for easy and smooth communication among these .NET languages.<br> <br> 
 <img alt="CTS" src="assets/Images/CTS.jpg"><br> <br> To implement or see how CTS is converting the data type to a 
 common data type,  for example, when we declare an int type data type in C# and VB.NET, then they 
 are converted to int32. In other words, now both will have a common data type  that provides flexible communication between these two languages.`
),
new qList(`What is managed code?`, `
The resource, which is within your application domain is, managed  code. The resources that are within domain are faster.<br> <br> The code, which is developed in .NET framework, is known as managed code. This  code is directly executed by CLR with help of managed code execution. Any  language that is written in .NET Framework is managed code.<br> <br> Managed code uses CLR which in turn looks after your applications by managing  memory, handling security, allowing cross - language debugging, and so on.<br> <br> <img alt="CLR" src="assets/Images/CLR.jpg">`),
new qList(`What is MSIL?`, `
When we compile our .NET code then it is not directly converted 
 to native/binary code; it is first converted into intermediate code known as  MSIL code which is then interpreted by the CLR. MSIL is independent of hardware  and the operating system. Cross language relationships are
 possible since MSIL  is the same for all .NET languages. MSIL is further converted into native code.<br>
 <br> <img alt="MSIL" src="assets/Images/MSIL.jpg">`),
 new qList(`What is JIT?`, ` A Web Service or Web Forms file must be compiled to run within the CLR.  Compilation can be implicit or explicit. Although you could explicitly call the  appropriate compiler to compile your Web Service or Web Forms files, it is  easier to allow the file to be complied implicitly. Implicit compilation occurs  when you request the .asmx via HTTP-SOAP, HTTP-GET, or HTTP-POST. The  parser (xsp.exe) determines whether a current version of the assembly resides in  memory or in the disk. If it cannot use an existing version, the parser makes  the appropriate call to the respective compiler (as you designated in the <strong> Class</strong> property of the .asmx page).<br> <br> When the Web Service (or Web Forms page) is implicitly compiled, it is actually  compiled twice. On the first pass, it is compiled into IL. On the second pass,  the Web Service (now an assembly in IL) is compiled into machine language. This  process is called Just-In-Time JIT compilation because it does not occur until  the assembly is on the target machine.<br> <br> <strong>JIT Types:</strong><br> <br> <img alt="JIT Types" src="assets/Images/JIT Types.jpg">`),
 new qList(`What is portable executable (PE)?`, `
 Every .NET program first compiles with an appropriate compiler  like if we write a program in C# language then it gets compiled by C# compiler  (i.e. csc.exe). <br> <br> In .NET framework every program executes (communicate) 
in an operating system by  using CLR (Common Language Runtime).<br> <br> <img alt="portable executable" src="assets/Images/portable executable.jpg"><br> 
<br> Managed module is standard windows Portable Executable (PE) file which contains  the following parts.</p>
<ul> <li><strong>PE Header</strong><br> <br> 	It is similar to common object file format.<br><br> </li> <li><strong>CLR Header</strong><br> <br> 	This contains CLR version required to run this managed module,  	location &amp; metadata. This also contains entry point of function i.e. the  	address of entry point of function.<br><br> </li> <li><strong>Metadata</strong><br> <br> 	This contains table information means variable with its data types and  	default values, functions / methods which are declared &amp; defined in our  	program.</li> </ul>`),
new qList(`What is an assembly?`, `
An Assembly is a basic building block of .NET Framework applications. It  is basically compiled code that can be executed by the CLR. An assembly is a  collection of types and resources that are built 
to work together and form a  logical unit of functionality. An Assembly can be a DLL or exe depending upon  the project that we choose.<br> <br>Assemblies are basically the following two types: </p>
<ol> <li>Private Assembly</li> <li>Shared Assembly</li> </ol>`),
new qList(`What are the contents of assembly?`, `Assembly<ul> <li>An Assembly is a basic unit of application deployment and versioning.</li> <li>An Assembly is also called the building block of a .NET application.</li> <li>An Assembly is either a .exe or .dll file. </li> </ul>
<p>An Assembly structure consists of the following parts:</p>
<ul> <li>Assembly manifest (name, language and version).</li> <li>CIL code (logic part).</li> <li>Type information (Datatype).</li> <li>Resources.</li> </ul>`),
new qList(`What are the different types of assembly?`,`An Assembly contains metadata and manifest information. The reason for  the emergence of assembly concept was to overcome the common "<strong>DLL Hell</strong>" problem  in COM. The assembly contains all the code, resources, metadata and even version  information. Metadata contains the details of every "type" inside the assembly.  In addition to metadata, assemblies also have a special file called Manifest. It  contains information about the current version of the assembly, culture  information, public key token if available and other related information.<br> <br>There are in all 3 different types of assemblies:</p>
<ol> <li>Private Assembly</li> <li>Shared or Strong named assembly</li> <li>Satellite assembly</li> </ol>`),
new qList(`What is a dynamic assembly?`, `Technically, the act of loading external assemblies on demand is known  as Dynamic Loading. Using the Assembly class, we can dynamically load both  private and shared assemblies from the local location to a remote location as  well as, explore its properties.<br><br>To illustrate dynamic loading, we are creating a console based application that  loads an external TestLib.dll assembly. During the execution, the application  asks the user to specify the dynamic loading assembly name and that reference is  passed to the helper method that is responsible for loading the assembly.`),
new qList(`What is GAC?`, `The GAC is a shared location of computer where we can put an assembly so  that it will be accessible from many locations, I mean it is accessible from  another project or application. It's always a good practice to provide a strong  name to a public assembly, I mean the assembly to be registered in the GAC, &nbsp;otherwise the DLL hell problem may occur.<br> <br><strong>Problems that occurred<br> </strong><br>I have seen DLLs added to the GAC that you can't remove - very frustrating. I  have seen registered DLLs into the cache - verified everything is there ok using  ILDASM only to find the DLLs are no longer in the GAC.<br> <br><strong>Strongly naming the assembly<br> </strong><br>When doing this make sure you get the directory slashes \\ correct within the  assembly file (assembly.cs). - if not, you will get errors whilst the code is  looking for the .snk file. If you get errors which leave you scratching your  head - best bet is to remove the .snk file and start over.<br> <br><strong>Project References<br> </strong><br>Also be careful and watch where you build projects as the referenced DLLs can  easily be built to the development instead of the release folder - sometimes  even when you specify the release folder. This can be very, very frustrating.<br> <br><strong>Conclusion<br> </strong><br>My conclusion on using the GAC was only use it if you really need to as it isn't  the 'end of DLL hell' as first thought. Also only use it if you are using a DLL  that is shared by other projects. Don't put it in the GAC if you don't have to.<br> <br>For more details follow the link:</p>`),
new qList(`What is a garbage collector?`, `The Garbage Collector (GC) is the part of the .NET Framework that  allocates and releases memory for your .NET applications. The Common Language  Runtime (CLR) manages allocation and deallocation of a managed object in memory.  C# programmers never do this directly, there is no delete keyword in the C#  language. It relies on the garbage collector.<br><br><strong>Example<br> </strong><br>Assume the managed heap contains a set of objects named A, B, C, D, E, F and G.  During garbage collection, these objects are examined for active roots. After  the graph has been constructed, unreachable objects (that we will assume are  objects C and F) are marked as garbage in reddish color in the following diagram. <br><br> <img alt="manage heap" src="assets/Images/manage heap.jpg">`),
new qList(`What are generations and how are they used by the garbage collector?`, `
Basically the generation of Garbage Collection (GC) shows the life of  objects, it means it defines how long an object will stay in the memory. It's  categorized into the following three generations:</p>
<ul> <li>Generation 0</li> <li>Generation 1</li> <li>Generation 2</li> </ul>
<p><img alt="generations " src="assets/Images/generations.jpg">`),
new qList(`What is Reflection?`, `
<p><b>Reflection</b> objects are used for obtaining type information at runtime. The classes that give access to the metadata of a running program are in the <b>System.Reflection</b> namespace.</p>

<p>Reflection has the following applications:</p>
<ul class="list">
<li><p>It allows view attribute information at runtime.</p></li>
<li><p>It allows examining various types in an assembly and instantiate these types.</p></li>
<li><p>It allows late binding to methods and properties</p></li>
<li><p>It allows creating new types at runtime and then performs some tasks using those types. </p></li>
</ul>`), 
new qList(`What is a tuple?`, `
<p>A <em>tuple</em> is a data structure that provides an easy way to represent a single set of data. The System.Tuple class provides static methods to create tuple objects. </p>
<p>Tuples allow us to,</p>
<ul><li>Create, access, and manipulate a data set</li><li>Return a data set from a method without using out parameter</li><li>Pass multiple values to a method through a single parameter&nbsp;</li> </ul>`)
    ];
    public csharpDotNet=[
        new qList(`What is C#? `,`C# is the best language for writing Microsoft .NET applications. C# provides the rapid application development found in Visual Basic with the power of C++. Its syntax is similar to C++ syntax and meets 100% of the requirements of OOPs like the following:<ul>
<li>Abstraction</li>
<li>Encapsulation</li>
<li>Polymorphism</li>
<li>Inheritance</li>
<ul>`),
        new qList(`What is Boxing and Unboxing?`,`<b>Boxing:</b>
<p>Boxing is the process of converting a value type data type to the object or to any interface data type which is implemented by this value type. When the CLR boxes a value means when CLR is converting a value type to Object Type, it wraps the value inside a System.Object and stores it on the heap area in application domain. </p>

<img src="/assets/Images/boxing.png"/>
<b>Unboxing:</b>
<p>Unboxing is also a process which is used to extract the value type from the object or any implemented interface type. Boxing may be done implicitly, but unboxing have to be explicit by code. </p>

<img src="/assets/Images/Unboxing.png"/>
<p>The concept of boxing and unboxing underlines the C# unified view of the type system in which a value of any type can be treated as an object.</p>`),
        new qList(`What is the difference between a struct and a class in C#?`,`<p>Class and struct both are the user defined data type but have some major difference:</p>
<b>Struct</b>
<ul>
<li>The struct is value type in C# and it inherits from System.Value Type.</li>
<li>Struct is usually used for smaller amounts of data.</li>
<li>Struct can’t be inherited to other type.</li>
<li>A structure can't be abstract.</li>
<li>No need to create object by new keyword.</li>
<li>Do not have permission to create any default constructor.</li>
</ul>

<b>Class</b>
<ul>
<li>The class is reference type in C# and it inherits from the System.Object Type.</li>
<li>Classes are usually used for large amounts of data.</li>
<li>Classes can be inherited to other class.</li>
<li>A class can be abstract type.</li>
<li>We can’t use an object of a class with using new keyword.</li>
<li>We can create a default constructor.</li>
</ul>`),
        new qList(`What is the difference between Interface and Abstract Class?`,`<p>Theoretically their are some differences between Abstract Class and Interface which are listed below:</p>

<ul>
<li>A class can implement any number of interfaces but a subclass can at most use only one abstract class.</li>
<li>An abstract class can have non-abstract methods (concrete methods) while in case of interface all the methods has to be abstract.</li>
<li>An abstract class can declare or use any variables while an interface is not allowed to do so.</li>
<li>In an abstract class all data member or functions are private by default while in interface all are public, we can’t change them manually.</li>
<li>In an abstract class we need to use abstract keyword to declare abstract methods while in an interface we don’t need to use that.</li>
<li>An abstract class can’t be used for multiple inheritance while interface can be used as multiple inheritance.</li>
<li>An abstract class use constructor while in an interface we don’t have any type of constructor.</li>
</ul>`),
        new qList(`What is enum in C#?`,`<p>An enum is a value type with a set of related named constants often referred to as an enumerator list. The enum keyword is used to declare an enumeration. It is a primitive data type, which is user defined.</p>
<p>An enum type can be an integer (float, int, byte, double etc.). But if you used beside int it has to be cast.</p>
<pre>enum Dow {Sat, Sun, Mon, Tue, Wed, Thu, Fri};  </pre>
<b>Some points about enum</b>
<ul>
<li>Enums are enumerated data type in c#.</li>
<li>Enums are not for end-user, they are meant for developers.</li>
<li>Enums are strongly typed constant. They are strongly typed, i.e. an enum of one type may not be implicitly assigned to an enum of another type even though the underlying value of their members are the same.</li>
<li>Enumerations (enums) make your code much more readable and understandable.</li>
<li>The default type is int, and the approved types are byte, sbyte, short, ushort, uint, long, and ulong.</li>
<li>Enum values are fixed. Enum can be displayed as a string and processed as an integer.</li>
<li>Every enum type automatically derives from System.Enum and thus we can use System.Enum methods on enums.</li>
<li>Enums are value types and are created on the stack and not on the heap.</li>
</ul>`),
        new qList(`What is the difference between “continue” and “break” statements in C#?`,`Using break statement, you can 'jump out of a loop' whereas by using continue statement, you can 'jump over one iteration' and then resume your loop execution.
        <b>Eg. Break Statement </b>
        <pre>using System;  
using System.Collections;  
using System.Linq;  
using System.Text;  
  
namespace break_example   
    {  
        Class brk_stmt {  
            public static void main(String[] args) {  
                for (int i = 0; i <= 5; i++) {  
                    if (i == 4) {  
                        break;  
                    }  
                    Console.WriteLine("The number is " + i);  
                    Console.ReadLine();
  
                }  
            }  
        }  
  
    } </pre>
    <b>Output </b>
    <pre><pre>The number is 0; 
The number is 1; 
The number is 2; 
The number is 3;</pre><b>Eg.Continue Statement</b><pre>
using System;  
using System.Collections;  
using System.Linq;  
using System.Text;  
  
namespace continue_example  
{  
    Class cntnu_stmt   
    {  
        public static void main(String[]   
        {  
            for (int i = 0; i <= 5; i++)   
            {  
                if (i == 4)   
                {  
                    continue;  
                }  
                Console.WriteLine(“The number is "+ i); 
                Console.ReadLine();
                  
            }  
        }  
    }  
      
}  </pre><b>Output</b>
<pre>The number is 1;
The number is 2;
The number is 3;
The number is 5; </pre>`),
        new qList(`What is the difference between constant and read only in c#?`,`<p>Constant (const) and Readonly (readonly) both looks like same as per the uses but they have some differences: </p>
<p><b>Constant</b> is known as “const” keyword in C# which is also known immutable values which are known at compile time and do not change their values at run time like in any function or constructor for the life of application till the application is running.</p>
<p><b>Readonly</b> is known as “readonly” keyword in C# which is also known immutable values and are known at compile and run time and do not change their values at run time like in any function for the life of application till the application is running. You can assay their value by constructor when we call constructor with “new” keyword.</p>



`),
        new qList(`What is the difference between ref and out keywords?`,`In C Sharp (C#) we can have three types of parameters in a function. The parameters can be in parameter (which is not returned back to the caller of the function), out parameter and ref parameter. We have lots of differences in both of them.

<table border="1">
<tr>
<th>Ref </th>
<th>Out</th>
</tr>
<tr>
<td>
The parameter or argument must be initialized first before it is passed to ref.</td>
<td>It is not compulsory to initialize a parameter or argument before it is passed to an out.</td>
</tr>
<tr>
<td>It is not required to assign or initialize the value of a parameter (which is passed by ref) before returning to the calling method.</td>
<td>A called method is required to assign or initialize a value of a parameter (which is passed to an out) before returning to the calling method.</td>
</tr>
<tr>
<td>Passing a parameter value by Ref is useful when the called method is also needed to modify the pass parameter.</td>
<td>Declaring a parameter to an out method is useful when multiple values need to be returned from a function or method.</td>
</tr>
<tr>
<td>It is not compulsory to initialize a parameter value before using it in a calling method.</td>
<td>A parameter value must be initialized within the calling method before its use.</td>
</tr>
<tr>
<td>When we use REF, data can be passed bi-directionally.</td>
<td>When we use OUT data is passed only in a unidirectional way (from the called method to the caller method).</td>
</tr>
<tr>
<td colspan="2">Both ref and out are treated differently at run time and they are treated the same at compile time.</td>

</tr>
<tr>
<td colspan="2">Properties are not variables, therefore it cannot be passed as an out or ref parameter.</td>

</tr>
</table>`),
        new qList(`Can “this” be used within a static method?`,`We can't use this in static method because keyword 'this' returns a reference to the current instance of the class containing it. Static methods (or any static member) do not belong to a particular instance. They exist without creating an instance of the class and call with the name of a class not by instance so we can’t use this keyword in the body of static Methods, but in case of Extension Methods we can use it the functions parameters. Let’s have a look on “this” keyword.<p>The "this" keyword is a special type of reference variable that is implicitly defined within each constructor and non-static method as a first parameter of the type class in which it is defined. For example, consider the following class written in C#.</p>`),
        new qList(`What is extension method in c# and how to use them?`,`Extension methods enable you to add methods to existing types without creating a new derived type, recompiling, or otherwise modifying the original type. An extension method is a special kind of static method, but they are called as if they were instance methods on the extended type.<p><b>How to use extension methods?</b></p>
<p>An extension method is a static method of a static class, where the "this" modifier is applied to the first parameter. The type of the first parameter will be the type that is extended.</p>
<p>Extension methods are only in scope when you explicitly import the namespace into your source code with a using directive.</p>
<p>Like: suppose we have a class like bellow:</p>
<pre>
public class Class1 {  
    public string Display() {  
        return ("I m in Display");  
    }  
  
    public string Print() {  
        return ("I m in Print");  
    }  
}</pre>

<p>Now we need to extend the definition of this class so m going to create a static class to create an extinction method like:</p>
<pre>
public static class XX {  
    public static void NewMethod(this Class1 ob) {  
        Console.WriteLine("Hello I m extended method");  
    }  
}
</pre>
<p>Here I just create a method that name is NewMethod with a parameter using this to define which type of data I need to be extend, now let’s see how to use this function.</p>
<img src="/assets/Images/extentionMethod.JPG">




`),
        new qList(`What is the difference between dispose and finalize methods in c#?`,`finalizer and dispose both are used for same task like to free unmanaged resources but have some differences see. <p><b>Finalize:</b></p>
<ul>
<li>Finalize used to free unmanaged resources those are not in use like files, database connections in application domain and more, held by an object before that object is destroyed.</li>
<li>In the Internal process it is called by Garbage Collector and can’t called manual by user code or any service.</li>
<li>Finalize belongs to System.Object class.</li>
<li>Implement it when you have unmanaged resources in your code, and make sure that these resources are freed when the Garbage collection happens.</li>
</ul>
<p><b>Dispose:</b></p>
<ul>
<li>Dispose is also used to free unmanaged resources those are not in use like files, database connections in Application domain at any time.</li>
<li>Dispose explicitly it is called by manual user code.</li>
<li>If we need to dispose method so must implement that class by IDisposable interface.</li>
<li>It belongs to IDisposable interface.</li>
<li>Implement this when you are writing a custom class that will be used by other users.</li>
</ul>

`),
        new qList(`What is the difference between string and StringBuilder in c#?`,`<b>String: </b>
<ul>
<li>It’s an immutable object that hold string value.</li>
<li>Performance wise string is slow because its’ create a new instance to override or change the previous value.</li>
<li>String belongs to System namespace.</li>
</ul>
<img src="/assets/Images/string.png">

<b>StringBuilder:</b>
<ul>
<li>StringBuilder is a mutable object.</li>
<li>Performance wise StringBuilder is very fast because it will use same instance of StringBuilder object to perform any operation like insert value in existing string.</li>
<li>StringBuilder belongs to System.Text.Stringbuilder namespace.</li>
</ul>
<img src="/assets/Images/stringbuilder.png">`),
        new qList(`What is delegates in C# and uses of delegates?`,`C# delegates are same as pointers to functions, in C or C++. A delegate Object is a reference type variable that use to holds the reference to a method. The reference can be changed at runtime which is hold by an object of delegate, a delegate object can hold many functions reference which is also known as Invocation List that refers functions in a sequence FIFO, we can new functions ref in this list at run time by += operator and can remove by -= operator. <p>Delegates are especially used for implementing events and the call-back methods. 
        All delegates are implicitly derived from the System.Delegate class.</p><img src="/assets/Images/delegate.png">`),
        new qList(`What is sealed class in c#?`,`Sealed classes are used to restrict the inheritance feature of object oriented programming. Once a class is defined as a sealed class, the class cannot be inherited. <p>In C#, the sealed modifier is used to define a class as sealed. In Visual Basic .NET the Not Inheritable keyword serves the purpose of sealed. If a class is derived from a sealed class then the compiler throws an error. </p><p>If you have ever noticed, structs are sealed. You cannot derive a class from a struct. </p><pre>// Sealed class  
sealed class SealedClass  
{  
  
}</pre>`),
        new qList(`What are partial classes?`,`<p>A partial class is only use to splits the definition of a class in two or more classes in a same source code file or more than one source files. You can create a class definition in multiple files but it will be compiled as one class at run time and also when you’ll create an instance of this class so you can access all the methods from all source file with a same object.</p><p>Partial Classes can be create in the same namespace it’s doesn’t allowed to create a partial class in different namespace. So use “partial” keyword with all the class name which you want to bind together with the same name of class in same namespace, 
        let’s have an example:</p><img src="/assets/Images/pertialClass.png">`),
        new qList(`What is difference between late binding and early binding in c#?`,`Early Binding and Late Binding concepts belongs to polymorphism so let’s see first about polymorphism:<p>Polymorphism is an ability to take more than one form of a function means with a same name we can write multiple functions code in a same class or any derived class.</p><p>Polymorphism we have 2 different types to achieve that:</p><ul><li>Compile Time also known as Early Binding or Overloading.</li><li>Run Time also known as Late Binding or Overriding.</li></ul><b>Compile Time Polymorphism or Early Binding:</b>
<p>
In Compile time polymorphism or Early Binding we will use multiple methods with same name but different type of parameter or may be the number or parameter because of this we can perform different-different tasks with same method name in the same class which is also known as Method overloading.</p>
<img src="/assets/Images/compileTime.png" >

<b>Run Time Polymorphism or Late Binding:</b>
<p>
Run time polymorphism also known as late binding, in Run Time polymorphism or Late Binding we can do use same method names with same signatures means same type or same number of parameters but not in same class because compiler doesn’t allowed that at compile time so we can use in derived class that bind at run time when a child class or derived class object will instantiated that’s way we says that Late Binding. For that we have to create my parent class functions as partial and in driver or child class as override functions with override keyword. </p>
<img src="/assets/Images/runTime.png" >`),
        new qList(`What are the differences between IEnumerable and IQueryable?`,`<b>IEnumerable:</b>
<p>Is the parent interface for all non-generic collections in System.Collections namespace like ArrayList, HastTable etc. that can be enumerated. For the generic version of this interface as IEnumerable<T> which a parent interface of all generic collections class in System.Collections.Generic namespace like List<> and more.</p>
<b>IQueryable:</b>
<p>The IQueryable interface inherits the IEnumerable interface so that if it represents a query, the results of that query can be enumerated. Enumeration causes the expression tree associated with an IQueryable object to be executed. The definition of "executing an expression tree" is specific to a query provider. For example, it may involve translating the expression tree to an appropriate query language for the underlying data source. Queries that do not return enumerable results are executed when the Execute method is called.
</p>
<img src="/assets/Images/iemurable.JPG">`),
        new qList(`What happens if the inherited interfaces have conflicting method names?`,`If we implement multipole interface in the same class with conflict method name so we don’t need to define all or in other words we can say if we have conflict methods in same class so we can’t implement their body independently in the same class coz of same name and same signature so we have to use interface name before method name to remove this method confiscation let’s see an example:
        <pre>
        interface testInterface1 {  
    void Show();  
}  
interface testInterface2 {  
    void Show();  
}  
class Abc: testInterface1,  
testInterface2 {  
  
    void testInterface1.Show() {  
        Console.WriteLine("For testInterface1 !!");  
    }  
    void testInterface2.Show() {  
        Console.WriteLine("For testInterface2 !!");  
    }  
}
</pre><b>Now see how to use those in a class:</b><pre>
class Program {  
    static void Main(string[] args) {  
        testInterface1 obj1 = new Abc();  
        testInterface1 obj2 = new Abc();  
        obj1.Show();  
        obj2.Show();  
  
        Console.ReadLine();  
    }  
} </pre><b>Output:</b><pre>
For testInterface1 !!
For testInterface1 !!
</pre>`),
        new qList(`What is the Constructor Chaining in C#?`,`constructor chaining is a way to connect two or more classes in a relationship as Inheritance, in Constructor Chaining every child class constructor is mapped to parent class Constructor implicitly by base keyword so when you create an instance of child class to it’ll call parent’s class Constructor without it inheritance is not possible.`),
        new qList(`What’s the difference between the System.Array.CopyTo() and System.Array.Clone()?`,`<b>Clone: </b>
<p>Method creates a shallow copy of an array. A shallow copy of an Array copies only the elements of the Array, whether they are reference types or value types, but it does not copy the objects that the references refer to. The references in the new Array point to the same objects that the references in the original Array point to.</p>
<b>CopyTo:</b>
<p>The Copy static method of the Array class copies a section of an array to another array. The CopyTo method copies all the elements of an array to another one-dimension array. The code listed in Listing 9 copies contents of an integer array to an array of object types. 
</p>
`),
        new qList(`Can Multiple Catch Blocks executed in c#?`,`we can use multiple Catches block with every try but when any Exceptions is throw by debugger so every catches match this exception type with their signature and catch the exception by any single catch block so that means we can use multiple catches blocks but only one can executed at once like:<pre>
        using System;  
class MyClient {  
    public static void Main() {  
        int x = 0;  
        int div = 0;  
        try {  
            div = 100 / x;  
            Console.WriteLine("Not executed line");  
        } catch (DivideByZeroException de) {  
            Console.WriteLine("DivideByZeroException");  
        } catch (Exception ee) {  
            Console.WriteLine("Exception");  
        } finally {  
            Console.WriteLine("Finally Block");  
        }  
        Console.WriteLine("Result is {0}", div);  
    }  
}
</pre>`),
        new qList(`What is Singleton Design Patterns and How to implement in C#?`,`<b>Singleton Design Pattern </b>
<ol>
<li>Ensures a class has only one instance and provides a global point of access to it.</li>
<li>A singleton is a class that only allows a single instance of itself to be created, and usually gives simple access to that instance.</li>
<li>Most commonly, singletons don't allow any parameters to be specified when creating the instance, since a second request of an instance with a different parameter could be problematic! (If the same instance should be accessed for all requests with the same parameter then the factory pattern is more appropriate.)</li>
<li>There are various ways to implement the Singleton Pattern in C#. The following are the common characteristics of a Singleton Pattern.
   <ul>
   <li>A single constructor, that is private and parameterless.</li>
   <li>The class is sealed.</li>
   <li>A static variable that holds a reference to the single created instance, if any.</li>
   <li>A public static means of getting the reference to the single created instance, creating one if necessary.</li>
   
   </ul>
</li>
</ol>
<b>This is the example how to write the code with Singleton</b>
<pre>
namespace Singleton {  
    class Program {  
        static void Main(string[] args) {  
            Calculate.Instance.ValueOne = 10.5;  
            Calculate.Instance.ValueTwo = 5.5;  
            Console.WriteLine("Addition : " + Calculate.Instance.Addition());  
            Console.WriteLine("Subtraction : " + Calculate.Instance.Subtraction());  
            Console.WriteLine("Multiplication : " + Calculate.Instance.Multiplication());  
            Console.WriteLine("Division : " + Calculate.Instance.Division());  
  
            Console.WriteLine("\n----------------------\n");  
  
            Calculate.Instance.ValueTwo = 10.5;  
            Console.WriteLine("Addition : " + Calculate.Instance.Addition());  
            Console.WriteLine("Subtraction : " + Calculate.Instance.Subtraction());  
            Console.WriteLine("Multiplication : " + Calculate.Instance.Multiplication());  
            Console.WriteLine("Division : " + Calculate.Instance.Division());  
  
            Console.ReadLine();  
        }  
    }  
  
    public sealed class Calculate {  
        private Calculate() {}  
        private static Calculate instance = null;  
        public static Calculate Instance {  
            get {  
                if (instance == null) {  
                    instance = new Calculate();  
                }  
                return instance;  
            }  
        }  
  
        public double ValueOne {  
            get;  
            set;  
        }  
        public double ValueTwo {  
            get;  
            set;  
        }  
  
        public double Addition() {  
            return ValueOne + ValueTwo;  
        }  
  
        public double Subtraction() {  
            return ValueOne - ValueTwo;  
        }  
  
        public double Multiplication() {  
            return ValueOne * ValueTwo;  
        }  
  
        public double Division() {  
            return ValueOne / ValueTwo;  
        }  
    }  
}
</pre>`),
        new qList(`Difference between Throw Exception and Throw Clause. `,`The basic difference is that the Throw exception overwrites the stack trace and this makes it hard to find the original code line number that has thrown the exception.<p>Throw basically retains the stack information and adds to the stack information in the exception that it is thrown.</p>
        <pre>
        using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Text;  
  
namespace TestingThrowExceptions {  
    class Program {  
        public void ExceptionMethod() {  
            throw new Exception("Original Exception occurred in ExceptionMethod");  
  
        }  
  
        static void Main(string[] args) {  
            Program p = new Program();  
            try {  
                p.ExceptionMethod();  
            } catch (Exception ex) {  
  
                throw ex;  
            }  
        }  
    }  
} 
</pre>`),
        new qList(`What are Indexer in C# .Net?`,`Indexer allows classes to be used in more intuitive manner. C# introduces a new concept known as Indexers which are used for treating an object as an array. The indexers are usually known as smart arrays in C#. They are not essential part of object-oriented programming.<p>An indexer, also called an indexed property, is a class property that allows you to access a member variable of a class using the features of an array.</p><p>Defining an indexer allows you to create classes that act like virtual arrays. Instances of that class can be accessed using the [] array access operator.</p><b>Creating an Indexer</b>
        <pre>< modifier > <  
return type > this[argument list] {  
    get {  
        // your get block code  
    }  
  
    set {  
        // your set block code  
    }  
} </pre><b>In the above code:</b><pre>
&ltmodifier>

can be private, public, protected or internal.

&ltreturn type>

can be any valid C# types.
</pre>`),
        new qList(`What is multicast delegate in c#?`,`Delegate can invoke only one method reference has been encapsulated into the delegate.it is possible for certain delegate to hold and invoke multiple methods such delegate called multicast delegates.multicast delegates also know as combinable delegates, must satisfy the following conditions:<ul><li>The return type of the delegate must be void. None of the parameters of the delegate type can be delegate type can be declared as output parameters using out keywords.</li><li>Multicast delegate instance that created by combining two delegates, the invocation list is formed by concatenating the invocation list of two operand of the addition operation. Delegates are invoked in the order they are added.</li></ul><b>Implement Multicast Delegates Example:</b>
        <pre>using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Text;  
delegate void MDelegate();  
class DM {  
    static public void Display() {  
        Console.WriteLine("Meerut");  
    }  
    static public void print() {  
        Console.WriteLine("Roorkee");  
    }  
}  
class MTest {  
    public static void Main() {  
        MDelegate m1 = new MDelegate(DM.Display);  
        MDelegate m2 = new MDelegate(DM.print);  
        MDelegate m3 = m1 + m2;  
        MDelegate m4 = m2 + m1;  
        MDelegate m5 = m3 - m2;  
        m3();  
        m4();  
        m5();  
    }  
} </pre>`),
        new qList(`Difference between Equality Operator (==) and Equals() Method in C#.`,`Both the == Operator and the Equals() method are used to compare two value type data items or reference type data items. The Equality Operator (==) is the comparison operator and the Equals() method compares the contents of a string. The == Operator compares the reference identity while the Equals() method compares only contents. Let’s see with some examples.<p>In this example we assigned a string variable to another variable. A string is a reference type and in the following example, a string variable is assigned to another string variable so they are referring to the same identity in the heap and both have the same content so you get True output for both the == Operator and the Equals() method.</p><pre>
        using System;  
namespace ComparisionExample {  
    class Program {  
        static void Main(string[] args) {  
            string name = "sandeep";  
            string myName = name;  
            Console.WriteLine("== operator result is {0}", name == myName);  
            Console.WriteLine("Equals method result is {0}", name.Equals(myName));  
            Console.ReadKey();  
        }  
    }  
}  </pre>`),
        new qList(`Difference between is and as operator in C#.`,`<b>"is" operator</b>
<p>The IS operator checks whether the type of an given object is compatible with the new object type. It returns boolean type value : true if given object is compatible with new one, else false. In this way IS operator help you to do safe type casting.</p>
<pre>
Object obj = new Object(); // Creates a new Object obj
// checking compatibility of obj object with other type
Boolean b1 = (obj is Object); // b1 is set to true.
Boolean b2 = (obj is Employee); // The cast fails: no exception is thrown, but b2 is set to false.
//we can also use it 
if (obj is Employee) 
{
 Employee emp = (Employee) obj;
 // TO DO:
}
</pre>

<b>AS Operator</b>
<p>The AS operator also checks whether the type of an given object is compatible with the new object type. It returns non-null if given object is compatible with new one, else null. In this way AS operator help you to do safe type casting. The above code can be re-written by using AS operator in a better way.</p>
<pre>
Object obj = new Object(); // Creates a new Object obj
// checking compatibility of obj object with other type
Employee emp = obj as Employee; // The cast fails: no exception is thrown, but emp is set to null.
if (emp != null) 
{
 // TO:DO
}
</pre>
`),
       
        new qList(`What is an Object Pool in .Net?
`,`Object Pooling is something that tries to keep a pool of objects in memory to be re-used later and hence it will reduce the load of object creation to a great extent. This article will try to explain this in detail. The example is for an Employee object, but you can make it general by using Object base class.`),
        new qList(`What are generics in c#.net?`,`<p>Generics is a technique that enriches your programs in the following ways:</p>
<ul>
<li>It helps you to maximize code reuse, type safety and performance.</li>
<li>You can create generic collection classes. The .NET Framework class library contains several new generic collection classes in the System.Collections.Generic namespace. You may use these generic collection classes instead of the collection classes in the System.Collections namespace.</li>
<li>You can create your own generic interfaces, classes, methods, events and delegates.</li>
<li>You may create generic classes constrained to enable access to methods on specific data types.</li>
<li>You may get information on the types used in a generic data type at run-time using reflection.</li>
</ul><pre>
// Declare the generic class.   
public class GenericList<T>  
{  
    void Add(T input) { }  
}  
class TestGenericList  
{  
    private class ExampleClass { }  
    static void Main()  
    {  
        // Declare a list of type int.  
        GenericList<int> list1 = new GenericList<int>();  
  
        // Declare a list of type string.  
        GenericList<string> list2 = new GenericList<string>();  
  
        // Declare a list of type ExampleClass.  
        GenericList<ExampleClass> list3 = new GenericList<ExampleClass>();  
    }  
}</pre>`),
        new qList(`Describe the accessibility modifiers in c#.Net. OR Why to use access modifiers?`,`Access modifiers are an integral part of object-oriented programming. They support the concept of encapsulation, which promotes the idea of hiding functionality. Access modifiers allow you to define who does or doesn't have access to certain features.<p>In C# there are 5 different types of Access Modifiers.</p>
        <img src="/assets/Images/accessModifier.png">`),
        new qList(`What is Virtual Method in C#?`,`A virtual method is a method that can be redefined in derived classes. A virtual method has an implementation in a base class as well as derived the class. It is used when a method's basic functionality is the same but sometimes more functionality is needed in the derived class. A virtual method is created in the base class that can be overridden in the derived class. We create a virtual method in the base class using the virtual keyword and that method is overridden in the derived class using the override keyword.
        <p><b>Virtual Method</b></p>
        <ul><li>By default, methods are non-virtual. We can't override a non-virtual method.</li><li>We can't use the virtual modifier with the static, abstract, private or override modifiers.</li></ul>`),
        new qList(`What are the Difference between Array and ArrayList in C#.Net?`,`<b>Array</b>
<ul>
<li>Array is strongly typed. This means that an array can store only specific type of items\elements.</li>
<li>Array stores fixed number of elements. Size of an Array must be specified at the time of initialization.</li>
<li>No need to cast elements of an array while retriving because it is strongly type and stores specific type of items only.</li>
<li>Use static helper class Array to perform different tasks on the array.</li>
</ul>

<b>ArrayList</b>
<ul>
<li>ArrayList can store any type of items\elements.</li>
<li>ArrayList grows automatically and you don't need to specify size.</li>
<li>Items of ArrayList need to be cast to appropriate data type while retriving.</li>
<li>ArrayList itself includes various utility methods for various tasks.</li>
</ul>`),
        new qList(`What is the use of Using statement in C#?`,`The .Net Framework provides resource management for managed objects through the garbage collector - You do not have to explicitly allocate and release memory for managed objects. Clean-up operations for any unmanaged resources should performed in the destructor in C#. To allow the programmer to explicitly perform these clean-up activities, objects can provide a Dispose method that can be invoked when the object is no longer needed. The using statement in C# defines a boundary for the object outside of which, the object is automatically destroyed. The using statement is excited when the end of the "using" statement block or the execution exits the "using" statement block indirectly, for example - an exception is thrown. The "using" statement allows you to specify multiple resources in a single statement. The object could also be created outside the "using" statement. The objects specified within the using block must implement the IDisposable interface. The framework invokes the Dispose method of objects specified within the "using" statement when the block is exited. `),
        new qList(`What is Multithreading with .NET?`,`The real usage of a thread is not about a single sequential thread, but rather using multiple threads in a single program. Multiple threads running at the same time and performing various tasks is referred as Multithreading. A thread is considered to be a lightweight process because it runs within the context of a program and takes advantage of resources allocated for that program.<p>A single-threaded process contains only one thread while a multithreaded process contains more than one thread for execution.</p>
        <img src="/assets/Images/thread.jpg">`),
        new qList(`Explain Anonymous type in C#?`,`Anonymous types allow us to create new type without defining them. This is way to defining read only properties into a single object without having to define type explicitly. Here Type is generating by the compiler and it is accessible only for the current block of code. The type of properties is also inferred by the compiler.
        <pre>
        var anonymousData = new   
{  
    ForeName = "Jignesh",  
    SurName = "Trivedi"  
};  
Console.WriteLine("First Name : " + anonymousData.ForeName); 
</pre>`),
        new qList(`Difference between Hashtable and Dictionary in C#?`,`<table border="1">
<tr>
<th>Hashtable</th>
<th>Dictionary</th>
</tr>
<tr>
<td>Hashtable included in System.Collections namespace.</td>
<td>Dictionary included in System.Collections.Generic namespace.</td>
</tr>
<tr>
<td>Hashtable is loosely typed (non-generic) collection, this means it stores key-value pairs of any data types.</td>
<td>Dictionary is generic collection. So it can store key-value pairs of specific data types.</td>
</tr>
<tr>
<td>Hashtable is thread safe.</td>
<td>Only public static members are thread safe in Dictionary.</td>
</tr>
<tr>
<td>Hashtable returns/throws Exception if we try to find a key which does not exist.</td>
<td>Dictionary returns null if we try to find a key which does not exist.</td>
</tr>
<tr>
<td>Data retrival is slower than dictionary because of boxing-unboxing.</td>
<td>	Data retrival is faster than Hashtable.</td>
</tr>
</table>
`),
new qList(`Difference between Design Principle and Design Pattern`,`<b>Design Principle:</b>
<p>It provides high level guide lines to design better software applications. Design principles do not provide implementation and not bound to any programming language. E.g. SOLID (SRP, OCP, LSP, ISP, DIP) principles.</p>
<p>For example, Single Responsibility Principle (SRP) suggests that a class should have only one and one reason to change. This is high level statement which we can keep in mind while designing or creating classes for our application. SRP does not provide specific implementation steps but it's on you how you implement SRP in your application.</p>

<b>Design Pattern:</b>
<p>It provides low level solution (implementation) for the commonly occurring object oriented problem. In another word, design pattern suggest specific implementation for the specific object oriented programming problem. For example, if you want create a class that can only have one object at a time then you can use Singleton design pattern which suggests the best way to create a class that can only have one object.</p>
<p>Design patterns are tested by others and safe to follow. E.g. Gang of Four patterns: Abstract Factory, Factory, Singleton, Command etc.</p>`),
new qList(`SOLID principles in C#`,`<img src="/assets/Images/SOLID.jpg">
<b>1. What is Single Responsibility Principle (SRP)?</b>
<p>The single responsibility principle states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class.</p>
<p>All its services should be narrowly aligned with that responsibility</p>
<p>As per SRP, there should not be more than one reason for a class to change, or a class should always handle single functionality. If you put more than one functionality in one Class in C# it introduce coupling between two functionality and even if you change one functionality there is chance you broke coupled functionality, which require another round of testing to avoid any surprise on production environment.</p>

<b>2. What is Open Closed Principle (OCP)?</b>
<p>In object-oriented programming, the open/closed principle states “software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification”; that is, such an entity can allow its behaviour to be extended without modifying its source code.</p>
<p>Open Closed principle helps you write code that is extensible and cleaner.</p>

<b>3. What is Liskov substitution principle (LSP) ?</b>
<p>The Liskov substitution principle (LSP) is a particular definition of a subtyping relation, called (strong) behavioral subtyping, that was initially introduced by Barbara Liskov in a 1987 conference keynote address entitled Data abstraction and hierarchy</p>
<p>if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program</p>

<b>4. What is Interface Segregation principle (ISP) ?</b>
<p>The interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use.</p>
<ul>
<li>ISP splits interfaces which are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them.</li>
<li>ISP is intended to keep a system decoupled and thus easier to refactor, change, and redeploy.</li>
</ul>
<p>ISP is one of the five SOLID principles of Object-Oriented Design, similar to the High Cohesion Principle of GRASP</p>

<b>5. What is Dependency Inversion principle (DIP) ?</b>
<p>The Dependency Inversion principle refers to a specific form of decoupling software modules.It states:</p>
<ul>
<li>High-level modules should not depend on low-level modules. Both should depend on abstractions.</li>
<li>Abstractions should not depend on details. Details should depend on abstractions.</li>
</ul>
<p>The Dependency Inversion principle (DIP) helps us to develop loosely couple code by ensuring that high-level modules depend on abstractions rather than concrete implementations of lower-level modules</p>`),
new qList(`Factory Method Design Pattern - C#`,`In Factory pattern, we create object without exposing the creation logic. In this pattern, an interface is used for creating an object, but let subclass decide which class to instantiate. The creation of object is done when it is required. The Factory method allows a class later instantiation to subclasses.
<pre>
interface Product
{
 
}
 
class ConcreteProductA : Product
{
}
 
class ConcreteProductB : Product
{
}
 
abstract class Creator
{
 public abstract Product FactoryMethod(string type);
}
 
class ConcreteCreator : Creator
{
 public override Product FactoryMethod(string type)
 {
 switch (type)
 {
 case "A": return new ConcreteProductA();
 case "B": return new ConcreteProductB();
 default: throw new ArgumentException("Invalid type", "type");
 }
 }
}
</pre>
`),
new qList(`Where to Use Abstact Class and Where to Use Interface?`,`<b>Use an abstract class</b>
<ul>
<li>When creating a class library which will be widely distributed or reused—especially to clients, use an abstract class in preference to an interface; because, it simplifies versioning. This is the practice used by the Microsoft team which developed the Base Class Library. ( COM was designed around interfaces.)</li>
<li>Use an abstract class to define a common base class for a family of types.</li>
<li>Use an abstract class to provide default behavior.</li>
<li>Subclass only a base class in a hierarchy to which the class logically belongs.</li>
</ul>

<b>Use an interface</b>
<ul>
<li>When creating a standalone project which can be changed at will, use an interface in preference to an abstract class; because, it offers more design flexibility.</li>
<li>Use interfaces to introduce polymorphic behavior without subclassing and to model multiple inheritance—allowing a specific type to support numerous behaviors.</li>
<li>Use an interface to design a polymorphic hierarchy for value types.</li>
<li>Use an interface when an immutable contract is really intended.<li>
<li>A well-designed interface defines a very specific range of functionality. Split up interfaces that contain unrelated functionality.</li>
</ul>
`),
    ];
    public aspDotNet=[
        new qList(`What is ASP.NET?`,`<p>Answer: ASP.NET was developed in direct response to the problems that developers had with classic ASP. Since ASP is in such wide use, however, Microsoft ensured that ASP scripts execute without modification on a machine with the .NET Framework</p>
        <br><b>Advantages of ASP.NET</b><ul><li>Separation of Code from HTML: </li><br>
        <li>Support for compiled languages</li><br>
        <li>Use services provided by the .NET Framework</li><br>
        <li>Graphical Development Environment</li><br>
        <li>State management</li><br>
        <li>Update files while the server is running</li></ul>`),
        new qList(`What are the different validators in ASP.NET?`,`<p>ASP.NET validation controls define an important role in validating the user input data. Whenever the user gives the input, it must always be validated before sending it across to various layers of an application. If we get the user input with validation, then chances are that we are sending the wrong data. So, validation is a good idea to do whenever we are taking input from the user.</p>
        <p>There are the following two types of validation in ASP.NET:</p>
        <ul><li>Client-Side Validation</li><br>
        <li>Client-Side Validation</li></ul>`),
        new qList(`What is View State?`,`<p>View State is the method to preserve the Value of the Page and Controls between round trips. It is a Page-Level State Management technique. View State is turned on by default and normally serializes the data in every control on the page regardless of whether it is actually used during a post-back. </p>
        <p>A web application is stateless. That means that a new instance of a page is created every time when we make a request to the server to get the page and after the round trip our page has been lost immediately</p>`),
        new qList(`What are the different Session state management options available in ASP.NET?`,`<p>State Management in ASP.NET</p>
        <ul><li>A new instance of the Web page class is created each time the page is posted to the server</li><br>
        <li>In traditional Web programming, all information that is associated with the page, along with the controls on the page, would be lost with each roundtrip</li><br>
        <li>The Microsoft ASP.NET framework includes several options to help you preserve data on both a per-page basis and an application-wide basis</li></ul>
        <br><li>Client-Side State Management Options</li><br>
        <li>Server-Side State Management Options</li>`),
        new qList(`What is MVC?`,`<p>Model-View-Controller (MVC) is a pattern to separate an application into the following three main components:</p>
        <ul><li>Model</li><br>
        <li>View</li><br>
        <li>Controller</li></ul><p>The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating web applications. The ASP.NET MVC Framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentications. The MVC framework is defined in the System.Web.Mvc assembly</p>`),
        new qList(`What are Cookies in ASP.NET?`,`<p>Cookies are a State Management Technique that can store the values of control after a post-back. Cookies can store user-specific Information on the client's machine like when the user last visited your site. </p>
        <p>List of properties containing the HttpCookies Class:</p><ul><li>Domain-Using these properties we can set the domain of the cookie.</li><br>
        <li>Expires-This property sets the Expiration time of the cookies</li><br>
        <li>HasKeys-If the cookies have a subkey then it returns True</li><br>
        <li>Name-Contains the name of the Key.</li><br>
        <li>Path-Contains the Virtual Path to be submitted with the Cookies</li><br>
        <li>Secured-If the cookies are to be passed in a secure connection then it only returns True.</li><br>
        <li>Value-Contains the value of the cookies</li></ul>`),
        new qList(`What is Ajax in ASP.NET?`,`<p>Ajax stands for Asynchronous JavaScript and XML; in other words Ajax is the combination of various technologies such as a JavaScript, CSS, XHTML, DOM, etc.</p>
        <p>AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the entire page</p>
        <p>Ajax is platform-independent; in other words AJAX is a cross-platform technology that can be used on any Operating System since it is based on XML & JavaScript</p>`),
        new qList(`What are Web Services in ASP.NET?`,`<p>A Web Service is a software program that uses XML to exchange information with other software via common internet protocols. In a simple sense, Web Services are a way for interacting with objects over the Internet.</p>
        <b>A web service is:</b><ul><li>Language Independent</li><br>
        <li>Protocol Independent</li><br>
        <li>Platform Independent</li><br>
        <li>It assumes a stateless service architecture.</li><br>
        <li>Programmable (encapsulates a task).</li><br>
        <li>Based on XML (open, text-based standard).</li><br>
        <li>Self-describing (metadata for access and use).</li></ul>`),
        new qList(`What are the Advantages of ASP.NET?`,`<p>ASP.NET provides services to allow the creation, deployment, and execution of Web Applications and Web Services like ASP, ASP.NET is a server-side technology. Web Applications are built using Web Forms. ASP.NET comes with built-in Web Form controls, which are responsible for generating the user interface. They mirror typical HTML widgets such as text boxes or buttons. If these controls do not fit your needs, you are free to create your own user controls.</p>
        <b>Advantages of ASP.NET:</b><ul><li>Separation of Code from HTML</li><br>
        <li>Support for compiled languages</li><br>
        <li>Use services provided by the .NET Framework</li><br>
        <li>Graphical Development Environment</li><br>
        <li>Update files while the server is running</li><br>
        <li>XML-Based Configuration Files</li></ul>`),
        new qList(`What is the Web.config file in ASP?`,`<p>Configuration file is used to manage various settings that define a website. The settings are stored in XML files that are separate from your application code. 
        <br>In this way you can configure settings independently from your code. Generally a website contains a single Web.config file stored inside the application root directory. However there can be many configuration files that manage settings at various levels within an application.</p>`),
        new qList(`What is tracing in .NET?`,`<p>Tracing helps to see the information of issues at the runtime of the application. By default Tracing is disabled.</p>
        <p>Tracing has the following important features:</p><ul><li>We can see the execution path of the page and application using the debug statement.</li><br>
        <li>We can access and manipulate trace messages programmatically.</li><br>
        <li>We can see the most recent tracing of the data.</li></ul>`),
        new qList(`What are the data controls available in ASP.NET?`,`<p>The Controls having DataSource Property are called Data Controls in ASP.NET. ASP.NET allows powerful feature of data binding, you can bind any server control to simple properties, collections, expressions and/or methods. When you use data binding, you have more flexibility when you use data from a database or other means.</p>
        <ul><li>Repeater Control</li><br>
        <li>DataGrid Control</li><br>
        <li>DataList Control</li><br>
        <li>GridView Control</li><br>
        <li>DetailsView</li><br>
        <li>FormView</li><br>
        <li>DropDownList</li><br>
        <li>RadioButtonList</li></ul>`),
        new qList(`What is the authentication and authorization in ASP.NET?`,`<p>In ASP.NET authentication means to identify the user or in other words its nothing but to validate that he exists in your database and he is the proper user.</p>
        <ul><li>Authentication: Prove genuineness</li><br>
        <li>Authorization: process of granting approval or permission on resources.</li></ul>
        <p><b>Types of authentication and authorization in ASP.NET</b></p>
        <ul><li><b>Windows authentication:</b> In this methodology ASP.NET web pages will use local windows users and groups to authenticate and authorize resources.</li><br>
        <li><b>Forms Authentication:</b> This is a cookie based authentication where username and password are stored on client machines as cookie files or they are sent through URL for every request</li><br>
        <li><b>Passport authentication:</b> Passport authentication is based on the passport website provided by the Microsoft .So when user logins with credentials it will be reached to the passport website</li><br>
        <li><b>Anonymous access:</b> If you do not want any kind of authentication then you will go for Anonymous access</li></ul>`),
        new qList(`What are the authentication modes in ASP.NET for security?`,`<p>When you begin a program for a customer using ASP.NET, you should consider about security.
        <br><br> Security is one of the most important components of any application. Security is even more important when you are making a web application which is exposed to million of users. ASP.NET provides classes and methods that ensure that the application is secure from outside attacks. In this article we will investigate the different types of authentication provided by ASP.NET. In web.config file you can set authentication mode value 'windows' or 'forms'.</p>
        <pre>
        1.	<authentication mode="Windows">  
        2.	   <forms name=" AuthenticationDemo" loginUrl="logon.aspx" protection="All" path="/"timeout="30" />  
        3.	</authentication>  
        </pre>`),
        new qList(`What is the web API in ASP.NET?`,`<p>It is a framework provided by Microsoft for writing HTTP services. There are many frameworks available to build HTTP based services. They follow a common guideline of international standardization but with different flavors.</p>
        <p>For example, all framework must adhere to these status codes-</p>
        <ul><li>1xx - Informational Message</li><br>
        <li>2xx - Successful</li><br>
        <li>3xx - Redirection</li><br>
        <li>4xx - Client Error</li><br>
        <li>5xx - Server Error</li></ul>`),
        new qList(`What is the code behind and Inline Code?`,`<p><b>Code Behind</b></p>
        </p>Code Behind refers to the code for an ASP.NET Web page that is written in a separate class file that can have the extension of .aspx.cs or .aspx.vb depending on the language used. Here the code is compiled into a separate class from which the .aspx file derives. You can write the code in a separate .cs or .vb code file for each .aspx page</p>
        <p><b>Inline Code</b></p><p>Inline Code refers to the code that is written inside an ASP.NET Web Page that has an extension of .aspx. It allows the code to be written along with the HTML source code using a <Script> tag. It's major point is that since it's physically in the .aspx file it's deployed with the Web Form page whenever the Web Page is deployed.</p>`),
        new qList(`What is the ASP.NET page life Cycle?`,`<p>: When a page is requested by the user from the browser, the request goes through a series of steps and many things happen in the background to produce the output or send the response back to the client. The periods between the request and response of a page is called the "Page Life Cycle".</p>
        <p>There are four stages that occur during the Page Life Cycle before the HTML Response is returned to the client. Later in this article we"ll study all these stages and their sub events.</p>
        <ul><li>Initialization</li><br>
        <li>Loading</li><br>
        <li>Rendering</li><br>
        <li>Unloading</li></ul>`),
        new qList(`What is the ASP.NET page life cycle events?`,`<p>We have many events in ASP.NET page life cycle let’s see some most important events:</p>
        <ul><li><b>Page initialization </b>-At this stage, the controls on the page are assigned unique ID by setting the UniqueID property and themes are applied. For a new request postback data is loaded and the control properties are restored to the view-state values.</li><br>
        <li><b>Page load </b>-At this stage, control properties are set using the view state and control state values</li><br>
        <li><b>Validation </b>-Validate method of the validation control is called and if it runs successfully, the IsValid property of the page is set to true</li><br>
        <li><b>Postback event handling </b>-If the request is a postback (old request), the related event handler is called.</li><br>
        <li><b>Page rendering </b>-At this stage, view state for the page and all controls are saved. The page calls the Render method for each control and the output of rendering is written to the OutputStream class of the Page's Response property</li></ul>`),
        new qList(`What is the Difference between session and caching?`,`<p>The first main difference between session and caching is: a session is per-user based but caching is not per-user based, So what does that mean? Session data is stored at the user level but caching data is stored at the application level and shared by all the users.</p>
        <p>It means that it is simply session data that will be different for the various users for all the various users, session memory will be allocated differently on the server but for the caching only one memory will be allocated on the server and if one user modifies the data of the cache for all, the user data will be modified.</p>`),
        new qList(`What is page directives in ASP.NET?`,`<p>Basically Page Directives are commands. These commands are used by the compiler when the page is compiled.</p>
        <p>It is not difficult to add a directive to an ASP.NET page. It is simple to add directives to an ASP.NET page. You can write directives in the following format:
        <br><br><%@[Directive][Attributes]%><br><br>
        Here is the full list of directives:</p>
        <ul><li>@Page</li><br>
        <li>@Master</li><br>
        <li>@Control</li><br>
        <li>@Import</li><br>
        <li>@Implements</li><br>
        <li>@Register</li><br>
        <li>@Assembly</li><br>
        <li>@MasterType</li><br>
        <li>@Output Cache</li><br>
        <li>@PreviousPageType</li></ul>`),
        new qList(`What is HTTP Handler?`,`<p>Every request into an ASP.NET application is handled by a specialized component known as an HTTP handler. The HTTP handler is the most important ingredient while handling ASP.NET requests</p>`),
        new qList(``,`<p></p>`)
    ];
    public htmlCss=[
        new qList(`What is the difference between HTML and HTML5 ?`,`HTML5 is nothing more then upgraded version of HTML where in HTML5 supports the innovative features such as Video, Audio/mp3, date select function , placeholder , Canvas, 2D/3D Graphics, Local SQL Database added so that no need to do external plugin like Flash player or other library elemenents.`),
        new qList(`WHAT are some other advantages of HTML5?`,`<ul>
<li>Cleaner markup than earlier versions of HTML</li>
<li>Additional semantics of new elements like <header>, <nav>, and <time></li>
<li>New form input types and attributes that will (and in Opera’s case, do) take the hassle out of scripting forms</li>tionality.</li>
</ul>`),
new qList(`What are the New Media Elements in HTML5 Over HTML?`,`<table border="1">
<tr>
<th>TAG</th>
<th>DESCRIPTION</th>
</tr>
<tr>
<td>&ltaudio></td>
<td>For multimedia content, sounds, music or other audio streams</td>
</tr>
<tr>
<td>&ltvideo></td>
<td>For video content, such as a movie clip or other video streams</td>
</tr>
<tr>
<td>&ltsource></td>
<td>For media resources for media elements, defined inside video or audio elements</td>
</tr>
<tr>
<td>&ltembed></td>
<td>For embedded content, such as a plug-in</td>
</tr>
<tr>
<td>&lttrack></td>
<td>For text tracks used in mediaplayers</td>
</tr>
</table>`),
        new qList(`What is CSS ?`,`<p>The full form of CSS is Cascading Style Sheets. It is a styling language which is simple enough for HTML elements. It is popular in web designing, and its application is common in XHTML also.</p>`),
        new qList(`What is the origin of CSS ?`,`<p>Standard Generalized Markup Language marked the beginning of style sheets in 1980s.</p>`),
        new qList(`What are the limitations of CSS ?`,`<p>Limitations are:</p>
        <ul><li>Ascending by selectors is not possible</li><br>
        <li>Limitations of vertical control</li><br>
        <li>No expressions</li><br>
        <li>No column declaration</li><br>
        <li>Pseudo-class not controlled by dynamic behavior</li><br>
        <li>Rules, styles, targeting specific text not possible</li></ul>`),
        new qList(`What are the advantages of CSS ?`,`<p>Advantages are:</p>
        <ul><li>Bandwidth</li><br>
        <li>Site-wide consistency</li><br>
        <li>Page reformatting</li><br>
        <li>Accessibility</li><br>
        <li>Content separated from presentation</li></ul>`),
        new qList(`What are CSS frameworks?`,`<p>It is a pre-planned libraries, which allows easier and more standards-compliant webpage styling, using CSS language.</p>`),
        new qList(`How block elements can be centered with CSS1?`,`<p>Block level elements can be centered by:<br><br>The margin-left and margin-right properties can be set to some explicit value:</p>
        <pre>BODY {
 
                    width: 40em;
                    
                    background: fluorescent;
                    
                    }
                    
                    P {
                    
                    width: 30em;
                    
                    margin-right: auto;
                    
                    margin-left: auto
                    
                    }</pre>`),
        new qList(`Who maintains the CSS specifications?`,`<p>World Wide Web Consortium maintains the CSS specifications.</p>`),
        new qList(`In how many ways can a CSS be integrated as a web page?`,`<p>CSS can be integrated in three ways:</p>
        <ul><li>Inline: Style attribute can be used to have CSS applied HTML elements.</li><br>
        <li>Embedded: The Head element can have a Style element within which the code can be placed.</li><br>
        <li>Linked/ Imported: CSS can be placed in an external file and linked via link element.</li></ul>`),
        new qList(`What benefits and demerits do External Style Sheets have? `,`<p>Benefits:</p><ul><li>One file can be used to control multiple documents having different styles.</li><br>
        <li>Multiple HTML elements can have many documents, which can have classes.</li><br>
        <li>To group styles in composite situations, methods as selector and grouping are used.</li></ul>
        <p>Demerits:</p><ul><li>Extra download is needed to import documents having style information.</li><br>
        <li>To render the document, the external style sheet should be loaded.</li><br>
        <li>Not practical for small style definitions.</li></ul>`),
        new qList(`What does CSS selector mean?`,`<p>A string equivalent of HTML elements by which declarations or a set of it, is declared and is a link that can be referred for linking HTML and Style sheet is CSS selector.</p>`),
        new qList(`Enlist the media types CSS allows? `,`<p>he design and customization of documents are rendered by media. By applying media control over the external style sheets, they can be retrieved and used by loading it from the network.</p>`),
        new qList(`Differentiate Style Sheet concept from HTML?`,`<p>While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover, style sheets have better browser capabilities and formatting options.</p>`),
        new qList(`Describe ‘ruleset’?`,`<p>Ruleset : Selectors can be attached to other selectors to be identified by ruleset.<br><br>It has two parts:</p>
        <ul><li>Selector, e.g. R and</li><br>
        <li>declaration {text-indent: 11pt}</li></ul>`),
        new qList(`omment on the Case-sensitivity of CSS ?`,`<p>Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc is. Only when XML declarations along with XHTML DOCTYPE are being used on the page, CSS is case -sensitive.</p>`),
        new qList(`Enlist the various fonts’ attributes?`,`<p>They are:</p><ul><li>Font-style</li><br>
        <li>Font-variant</li><br>
        <li>Font-weight</li><br>
        <li>Font-size/line-height</li><br>
        <li>Font-family</li><br>
        <li>Caption</li><br>
        <li>Icon</li></ul>`),
        new qList(`Why is it easy to insert a file by importing it?`,`<p>Importing enables combining external sheets to be inserted in many sheets. Different files and sheets can be used to have different functions. Syntax:</p>
        <pre>@import notation, used with <Style> tag.</pre>`),
        new qList(`Differentiate Class selector from ID selector?`,`<p>While an overall block is given to class selector, ID selector prefers only a single element differing   from other elements</p>`),
        new qList(`How to overrule underlining Hyperlinks?`,`<p>Control statements and external style sheets are used to overrule underlining Hyperlinks.<br>Ex-</p>
        <pre>B {
 
                    text-decoration: none;
                    
                    }
                    
                    <B href="career.html" style="text-decoration: none">link text</B></pre>`),
        new qList(`Define Image sprites with context to CSS ?`,`<p>When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the loading every image on a webpage consumes time, using image sprites lessens the time taken and gives information quickly.</p>
        <p>CSS coding:</p><pre>img.add { width: 60px; height: 55px; background: url (image.god) 0 0; }</pre>`),
        new qList(`Define property?`,`<p>A style, that helps in influencing CSS. E.g. FONT. They have corresponding values or properties within them, like FONT has different style like bold, italic etc.</p>`),
        new qList(`Define Attribute Selector ?`,`<p>It is defined by a set of elements, value and its parts.</p>`),
        new qList(`Are quotes mandatory in URL’s?`,`<p>Quotes are optional in URL’s, and it can be single or double.</p>`),
        new qList(`Why is @import only at the top?`,`<p>@import is preferred only at the top, to avoid any overriding rules. Generally, ranking order is followed in most programming languages such as Java, Modula, etc. In C, the # is a prominent example of a @import being at the top.</p>`),
        new qList(`Which among the following is more precedent: CSS properties or HTML procedures?`,`<p>CSS is more precedent over HTML procedures. Browsers, which do not have CSS support, display HTML attributes.</p>`),
        new qList(`What is Inline style?`,`<p>The Inline style in a CSS is used to add up styling to individual HTML elements.</p>`)
    ];
    public javaScrips=[
        new qList(`What is JavaScript?`,`
        <p>JavaScript is a client-side as well as server side scripting language that can be inserted into
        HTML pages and is understood by web browsers. JavaScript is also an Object Oriented
        Programming language</p>`),
        new qList(`What is the use of isNaN function?`,`
        <p>isNan function returns true if the argument is not a number otherwise it is false.</p>`),
        new qList(`What are undeclared and undefined variables?`,`
        <p>Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.</p>
        <p>Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.</p>`),
        new qList(`Write the code for adding new elements dynamically?`,`
        <pre><html> 
        <head> <title>t1</title> 
        <script type="text/javascript"> 
        function addNode() { 
            var newP = document.createElement("p"); 
            var textNode = document.createTextNode(" This is a new text node"); 
            newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP); } 
        </script> 
        </head> 
        <body> 
        <p id="firstP">firstP<p> 
        </body> 
        </html>
        </pre>`),
         new qList(`What are global variables? How are these variable declared and what are the problems associated with using them?`,`
         <p>Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.</p>
         <p>The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.</p>`),
         new qList(`What is ‘this’ keyword in JavaScript?`,`<p>‘This’ keyword refers to the object from where it was called.</p>`),
         new qList(`What is === operator?`,`<p>=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.</p>`),
         new qList(`How can the style/class of an element be changed?`,`
         <p>It can be done in the following way:</p>
         <pre>document.getElementById(“myText”).style.fontSize = “20?;
            Or
            document.getElementById(“myText”).className = “anyclass”;
            </pre>`),
        new qList(`What are all the looping structures in JavaScript?`,`
        <p>Following are looping structures in Javascript:</p>
        <ul><li>For</li><br><li>While</li><br><li>do-while loops</li></ul>`),
        new qList(`How can you convert the string of any base to integer in JavaScript?`,`
        <p>The parseInt() function is used to convert numbers between different bases. parseInt() takes the string to be converted as its first parameter, and the second parameter is the base of the given string.</p>
        <br><p>In order to convert 4F (of base 16) to integer, the code used will be – <br><br>parseInt ("4F", 16);</p>`),
        new qList(`Explain the difference between “==” and “===”?`,`
        <p>“==” checks only for equality in value whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different</p>`),
        new qList(`What would be the result of 3+2+”7″?`,`
        <p>Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.</p>`),
        new qList(`What do mean by NULL in Javascript?`,`
        <p>The NULL value is used to represent no value or no object.  It implies no object or null string, no valid boolean value, no number and no array object.</p>`),
        new qList(`What is an undefined value in JavaScript?`,`
        <p>Undefined value means the</p><ul><li>Variable used in the code doesn’t exist</li><br>
        <li>Variable is not assigned to any value</li><br>
        <li>Property doesn’t exist</li></ul>`),
        new qList(`What is the use of Void(0)?`,`
        <p>Void(0) is used to prevent the page from refreshing and parameter “zero” is passed while calling.<br><br>Void(0) is used to call another method without refreshing the page</p>`),
        new qList(`What is the data type of variables of in JavaScript?`,`<p>All variables in the JavaScript are object data types.</p>`),
        new qList(`What is the difference between an alert box and a confirmation box?`,`
        <p>An alert box displays only one button which is the OK button.<br><br>But a Confirmation box displays two buttons namely OK and cancel.</p>`),
        new qList(`What are the two basic groups of datatypes in JavaScript?`,`<p>They are as –<br><br>•	Primitive<br>•	Reference types.</p><p>Primitive types are number and Boolean data types. Reference types are more complex types like strings and dates.</p>`),
        new qList(`How generic objects can be created?`,`<p>Generic objects can be created as:<br><br><b>var I = new object();</b></p>`),
        new qList(`What is the use of type of operator?`,`<p>‘Typeof’ is an operator which is used to return a string description of the type of a variable.</p>`),
        new qList(`Which keywords are used to handle exceptions?`,`<p>Try… Catch—finally is used to handle exceptions in the JavaScript</p>
        <pre>Try{
                Code
                }
                Catch(exp){
                Code to throw an exception
                }
                Finally{
                Code runs either it finishes successfully or after catch
                }
                </pre>`),
        new qList(`Which keyword is used to print the text in the screen?`,`<p>document.write(“Welcome”) is used to print the text – Welcome in the screen</p>`),
        new qList(`What is the use of blur function?`,`<p>Blur function is used to remove the focus from the specified object.</p>`),
        new qList(`What are the different types of errors in JavaScript?`,`
        <p>There are three types of errors:</p>
        <ul><li><b>Load time errors</b> Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.</li><br>
        <li><b>Run time errors</b> Errors that come due to misuse of the command inside the HTML language.</li><br>
        <li><b>Logical Errors</b> These are the errors that occur due to the bad logic performed on a function which is having different operation.</li></ul>`),
        new qList(`What is the use of Push method in JavaScript?`,`
        <p>The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments</p>`),
        new qList(`What is unshift method in JavaScript?`,`
        <p>Unshift method is like push method which works at the beginning of the array.  This method is used to prepend one or more elements to the beginning of the array.</p>
        <br><pre>var name = [ "john" ];<br>
            name.unshift( "charlie" );<br>
            name.unshift( "joseph", "Jane" );<br>
            console.log(name);<br>
            The output is shown below:<br>
            [" joseph "," Jane ", " charlie ", " john "]
            </pre>`),
        new qList(`What is the difference between JavaScript and Jscript?`,`<p>Both are almost similar. JavaScript is developed by Netscape and Jscript was developed by Microsoft .</p>`),
        new qList(`Explain what is pop()method in JavaScript?`,`
        <p>The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array.  Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.</p><br>
        <pre>Example:
            var cloths = [“Shirt”, “Pant”, “TShirt”];<br>
            cloths.pop();<br>
            //Now cloth becomes Shirt,Pant
            </pre>`),
        new qList(`What is the ‘Strict’ mode in JavaScript and how can it be enabled?`,`
        <p>Strict Mode adds certain compulsions to JavaScript. Under the strict mode, JavaScript shows errors for a piece of codes, which did not show an error before, but might be problematic and potentially unsafe. Strict mode also solves some mistakes that hamper the JavaScript engines to work efficiently.</p><br>
        <p>Strict mode can be enabled by adding the string literal “use strict” above the file. This can be illustrated by the given example:</p><br>
        <pre>function myfunction()
            {
            “use strict";
            var v = “This is a strict mode function";
            }
            </pre>`),
        new qList(`What is the way to get the status of a CheckBox?`,`
        <p>The status can be acquired as follows –<br><br>
            alert(document.getElementById(‘checkbox1’).checked);<br><br>
            If the CheckBox will be checked, this alert will return TRUE</p>`),
        new qList(`Explain window.onload and onDocumentReady?`,`
        <p>The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.</p><br>
        <p>onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code.</p>`),
        new qList(`How can a value be appended to an array?`,`<p>A value can be appended to an array in the given manner –<br><br>arr[arr.length] = value;</p>`),
        new qList(`Describe the properties of an anonymous function in JavaScript?`,`
        <p>A function that is declared without any named identifier is known as an anonymous function. In general, an anonymous function is inaccessible after its declaration.</p>
        <pre>Anonymous function declaration –<br>
            var anon = function() {
            alert('I am anonymous');
            };
            anon();
            </pre>`),
        new qList(`Is JavaScript case sensitive? Give an example?`,`
        <p>Yes, JavaScript is case sensitive. For example, a function parseInt is not same as the function Parseint.</p>`),
        new qList(`What boolean operators can be used in JavaScript?`,`
        <p>The ‘And’ Operator (&&), ‘Or’  Operator (||) and the ‘Not’ Operator (!) can be used in JavaScript.<br><br>*Operators are without the parenthesis.</p>`),
        new qList(`What are the decodeURI() and encodeURI()?`,`<p>EncodeURl() is used to convert URL into their hex coding. And DecodeURI() is used to convert the encoded URL back to normal</p>
        <pre><script>
            var uri="my test.asp?name=ståle&car=saab";
            document.write(encodeURI(uri)+ "<br>");
            document.write(decodeURI(uri));
            </script>
            </pre>
            <p>Output –<br><br>my%20test.asp?name=st%C3%A5le&car=saab<br>my test.asp?name=ståle&car=saab</p>`),
        new qList(`What does the following statement declares?`,`<p>var myArray = [[[]]];<br><br>It declares a three dimensional array.</p>`),
        new qList(`How are JavaScript and ECMA Script related?`,`<p>ECMA Script are like rules and guideline while Javascript is a scripting language used for web development.</p>`),
        new qList(`What is namespacing in JavaScript and how is it used?`,`
        <p>Namespacing is used for grouping the desired functions, variables etc. under a unique name. It is a name that has been attached to the desired functions, objects and properties. This improves modularity in the coding and enables code reuse.</p>`),
        new qList(`Define unescape() and escape() functions?`,`<p>The escape () function is responsible for coding a string so as to make the transfer of the information from one computer to the other, across a network.<br><br>For Example:</p>
        <pre><script>
                document.write(escape(“Hello? How are you!”));
                </script>
                Output: Hello%3F%20How%20are%20you%21<br>
                The unescape() function is very important as it decodes the coded string.<br>
                It works in the following way. For example:<br>
                <script>
                document.write(unescape(“Hello%3F%20How%20are%20you%21”));
            </script>
            </pre>
            <p>Output: Hello? How are you!</p>`),
            new qList(`What does "1"+2+4 evaluate to? `,`<p>Since 1 is a string, everything is a string, so the result is 124.</p>`)
    ];
    public jQuery=[
        new qList(`What is jQuery?`,`<p>jQuery is not a programming language but a well written JavaScript code. It is a JavaScript code, which do document traversing, event handling, Ajax interactions and Animations.</p>`),
        new qList(`Why jQuery is needed?`,`<p>jQuery is needed for the following list:</p>
        <ul><li>Used to develop browser compatible web applications</li><br>
        <li>Improve the performance of an application</li><br>
        <li>Very fast and extensible</li><br>
        <li>UI related functions are written in minimal lines of codes</li></ul>`),
        new qList(`Whether jQuery HTML work for both HTML and XML documents?`,`<p>No, jQuery HTML only works for HTML documents not for XML Documents.</p>`),
        new qList(`What are the methods used to provide effects?`,`<p>Some of the effects methods are:</p>
        <ul><li>Show()</li><br>
        <li>Hide()</li><br>
        <li>Toggle()</li><br>
        <li>FadeIn() and</li><br>
        <li>FadeOut()</li></ul>`),
        new qList(`What is the advantage of using minimized version of jQuery?`,`
        <p>Efficiency of web page increases when minimized version of jQuery is used.min.js file will be more than 50% less than the normal js file. Reduction in the file size makes the web page faster.</p>`),
        new qList(`Is jQuery is a JavaScript or JSON library file?`,`<p>jQuery is a library of JavaScript file and it consists of DOM, event effects and the Ajax functions. jQuery is said to be a single JavaScript file.</p>`),
        new qList(`In what scenarios jQuery can be used?`,`<p>jQuery can be used in following scenarios:</p>
        <ul><li>Apply CSS static or dynamic</li><br>
        <li>Calling functions on events</li><br>
        <li>Manipulation purpose</li><br>
        <li>Mainly for Animation effects</li></ul>`),
        new qList(`What is the difference between find and children methods?`,`<p>Find method is used to find all levels down the DOM tree but children find single level down the DOM tree</p>`),
        new qList(`What is jQuery connect?`,`<p>A ‘ jQuery connect’  is a plugin used to connect or bind a function with another  function. Connect is used to execute function from any other function or plugin is executed.</p>`),
        new qList(`How to use connect?`,`<p>Connect can be used by downloading jQuery connect file from jQuery.com and then include that file in the HTML file. Use $.connect function to connect a function to another function.</p>`),
        new qList(`What are the basic selectors in jQuery?`,`<p>Following are the basic selectors in jQuery:</p>
        <ul><li>Element ID</li><br>
        <li>CSS Name</li><br>
        <li>Tag Name</li><br>
        <li>DOM hierarchy</li></ul>`),
        new qList(`Can we call C# code behind using jQuery?`,`<p>Yes, we can call C# code from jQuery as it supports .net application</p>`),
        new qList(`What is the use jQuery.data method?`,`<p>jQuery.data methods is used to associate the data with the DOM nodes and the objects. This data method makes the jQuery code clear and concise.</p>`),
        new qList(`What is the use of each function in jQuery?`,`<p>Each function is used to iterate each and every element of an object. It is used to loop DOM elements, arrays and the object properties.</p>`),
        new qList(`What is the difference between size and length of jQuery?`,`<p>Size and length both returns the number of element in an object. But length is faster than the size because length is a property and size is a method.</p>`),
        new qList(`Can we add more than one ‘document.ready’ function in a page?`,`<p>Yes, we can add more than one document.ready function in a page. But, body.onload can be added once in a page.</p>`),
        new qList(`What is the use of jQuery load method?`,`<p>jQuery load method is a powerful AJAX method which is used to load the data from a server and assign the data into the element without loading the page.</p>`),
        new qList(`Whether our own specific characters are used in place of $ in jQuery?`,`<p>Yes, We can use our own variable in place of $ by using the method called no Conflict () method.<br><br>var sample = $.noConflict()</p>`),
        new qList(`What are the four parameters used for jQuery Ajax method?`,`<p>The four parameters are</p>
        <ul><li>URL – Need to specify the URL to send the request</li><br>
        <li>type – Specifies type of request(Get or Post)</li><br>
        <li>data – Specifies data to be sent to server</li><br>
        <li>Cache – Whether the browser should cache the requested page</li></ul>`),
        new qList(`What is the use of jQuery filter?`,`<p>The jQuery filter is used to filter the certain values from the object list based on the criteria. Example is to filter certain products from the master list of products in a cart website.</p>`),
        new qList(`What is CDN?`,`<p>CDN is abbreviated as Content Distribution network and it is said to be a group of companies in different location with network containing copies of data files to maximize bandwidth in accessing the data</p>`),
        new qList(`What are the two types of CDNs?`,`<p>There are two types of CDNs:<br><br>1. Microsoft – Load jQuery from Ajax CDN<br>2. Google – Load jQuery from Google libraries API</p>`),
        new qList(`Which sign is used as a shortcut for jQuery?`,`<p>Dollar ($) sign is used as a shortcut for jQuery</p>`),
        new qList(`Is jQuery is a client or server scripting?`,`<p>jQuery is a client scripting.</p>`),
        new qList(`What is the script build up by jQuery?`,`<p>jQuery is a Javascript file and it is single javascript file that contains common DOM, event effects and Ajax functions.</p>`),
        new qList(`How can we debug jQuery?`,`<p>There are two ways to debug jQuery:<br><br>Debugger keyword</p>
        <ul><li>Add the debugger to the line from where we have to start debugging and then run Visual Studio in Debug mode with F5 function key.</li><br>
        <li>Insert a break point after attaching the process</li></ul>`),
        new qList(`. What are all the ways to include jQuery in a page?`,`<p>Following are the ways to include jQuery in a page:</p>
        <ul><li>Local copy inside script tag</li><br>
        <li>Remote copy of jQuery.com</li><br>
        <li>Remote copy of Ajax API</li><br>
        <li>Local copy of script manager control</li></ul>`),
        new qList(`What is the use of jQuery.ajax method ()?`,`<p>jQuery.ajax method is used for asynchronous HTTP requests.</p>`),
        new qList(`Is jQuery is a replacement of JavaScript?`,`<p>No, jQuery is not a replacement of JavaScript.</p>`),
        new qList(`What is called chaining?`,`<p>Chaining is used to connect multiple events and functions in a selector.</p>`),
        new qList(`What are the advantages of jQuery?`,`<p>Following are the advantages of jQuery:</p>
        <ul><li>Just a JavaScript enhancement</li><br>
        <li>Coding is simple, clear, reusable</li><br>
        <li>Removal of writing more complex conditions and loops</li></ul>`),
        new qList(`What is the use of jQuery.data() method?`,`<p>jQuery data method is used to associate data with DOM nodes and JavaScript objects. This method will make a code very concise and neat.</p>`),
        new qList(`What is the difference between onload() and document.ready()?`,`<p>In a page, we can have only one onload function but we can have more than one document.ready function. Document.ready function is called when DOM is loaded but onload function is called when DOM and images are loaded on the page.</p>`),
        new qList(`Why jQuery is better than JavaScript?`,`<p>jQuery is a library used for developing Ajax application and it helps to write the code clean and concise. It also handles events, animation and Ajax support applications.</p>`),
        new qList(`What are the types of selectors in jQuery?`,`<p>There are three types of selectors in jQuery:</p>
        <ul><li>CSS Selector</li><br>
        <li>XPath Selector</li><br>
        <li>Custom Selector</li></ul>`),
        new qList(`What does dollar sign ($) means in jQuery?`,`<p>Dollar Sign is nothing but it's an alias for JQuery. Take a look at below jQuery code.</p>
        <pre>$(document).ready(function(){
            });
            </pre>
            <p>Over here $ sign can be replaced with "jQuery" keyword</p>
            <pre>jQuery(document).ready(function(){
                });
                </pre>`),
        new qList(`What is the difference between .js and .min.js?`,`<p>jQuery library comes in 2 different versions Production and Deployment. The deployment version is also known as minified version.
        <br><br> So .min.js is basically the minified version of jQuery library file. Both the files are same as far as functionality is concerned. but .min.js is quite small in size so it loads quickly and saves bandwidth.</p>`)
        
    ];
    public adoDotNet=[
        new qList(`What is an ADO.Net?`,`<p>ADO.Net is commonly termed as ActiveX Data Objects which is a part of .Net Framework. ADO.Net framework has set of classes which are used to handle data access by connecting with different databases like SQL, Access, Oracle, etc.</p>
        <p>Enterprise applications handle a large amount of data. This data is primarily stored in relational databases, such as Oracle, SQL Server, and Access and so on. These databases use Structured Query Language (SQL) for retrieval of data.</p>
        <p>To access enterprise data from a .NET application, an interface was needed. This interface acts as a bridge between an RDBMS system and a .NET application. ADO.NET is such an interface that is created to connect .NET applications to RDBMS systems.</p>`),
       new qList(`What are the Benefits of ADO.Net?`,`<b>Interoperability:</b>
<p>XML Format is one of the best formats for Interoperability.ADO.NET supports to transmit the data using XML format.</p>
<b>Scalability:</b>
<p>ADO.NET works on Dataset that can represent a whole database or even a data table as a disconnected object and thereby eliminates the problem of the constraints of number of databases being connected. In this way scalability is achieved.</p>
<p>Performance:</p>
<p>The performance in ADO.NET is higher in comparison to ADO that uses COM marshalling.</p>
<b>Programmability:</b>
<p>ADO.Net Data components in Visual studio help to do easy program to connect to the database.</p>`),
        new qList(` What are the ADO.NET components?`,`<p> ADO.NET components categorized in three modes: disconnected, common or shared and the .NET data providers.
       </p><p><b>The disconnected components</b> build the basic ADO.NET architecture. You can use these components (or classes) with or without data providers. For example, you can use a DataTable object with or without providers and shared or common components are the base classes for data providers.</p>
      <p><b>Shared or common components</b> are the base classes for data providers and shared by all data providers. The data provider components are specifically designed to work with different kinds of data sources. For example, ODBC data providers work with ODBC data sources and OleDb data providers work with OLE-DB data sources.</p>`),
      new qList(`How can you define the DataSet structure?`,`<p>A DataSet object falls in disconnected components series. The DataSet consists of a collection of tables, rows, columns and relationships.</p><img src="/assets/Images/dataset.jpg"></img><p>DataSet contains a collection of DataTables and the DataTable contains a collection of DataRows, DataRelations, and DataColumns. A DataTable maps to a table in the database. The previous DataSet contains a DataTable that maps to the Orders table because you filled it with a SELECT query executed on the Order table.</p>`),
      new qList(` What is Connection Pooling in ADO.NET?`,`<p> Connection pooling is the ability of reusing your connection to the database. This means if you enable Connection pooling in the connection object, actually you enable the re-use of the connection to more than one user.</p>
      A Connection String in the Web.Config file with connection pooling option:
      <pre>&ltconnectionStrings&gt  
       &ltadd name="sqlConnectionString" connectionString="Data Source=mySQLServer;Initial Catalog=myDatabase;Integrated Security=True;Connection Timeout=15;Connection Lifetime=0;Min Pool Size=0;Max Pool Size=100;Pooling=true;" /&gt  
      &lt/connectionStrings&gt </pre>`),
      new qList(`What is the difference between ExecuteScalar and ExecuteNonQuery?`,`<p>ExecuteScalar returns output value where as ExecuteNonQuery does not return any value but the number of rows affected by the query. ExecuteScalar used for fetching a single value and ExecuteNonQuery used to execute Insert and Update statements.</p>`),
      new qList(`What is SqlCommand Object?`,`<p>The SqlCommand carries the SQL statement that needs to be executed on the database. SqlCommand carries the command in the CommandText property and this property will be used when the SqlCommand calls any of its execute methods.</p>
      <ul><li>The Command Object uses the connection object to execute SQL queries.</li>
      <li>The queries can be in the form of Inline text, Stored Procedures or direct Table access.</li>
      <li>An important feature of Command object is that it can be used to execute queries and Stored Procedures with Parameters.</li>
      </ul>
      The three important methods exposed by the SqlCommand object is shown below:
      <p><b>ExecuteScalar</b> is useful for returning a single value from the database. For example, using this method we can retrieve a sum of sales made by a specific product, total number of records in the employee table, unique id by supplying filtering conditions and so on</p>
      <p><b>ExecuteNonQuery</b> is useful for performing data manipulation on the database. Simply, the ExecuteNonQuery is for executing the DML statements.</p>
      <p><b>ExecuteReader</b> is used when we need to retrieve rows and columns of data using the SQL select statements. As the data retrieved is a table of data, ExecuteReader returns SqlDataReader.</p>`),
      new qList(`What is the difference between Execute Reader, Execute Scalar and Execute Non Query methods?`,`<b>Execute Reader</b>
<p>Execute Reader will be used to return the set of rows, on execution of SQL Query or Stored procedure using command object.</p>
<b>Execute Scalar</b>
<p>Execute Scalar will be used to return the single value, on execution of SQL Query or Stored procedure using command object.</p>
<p>Execute Non Query</p>
<p>If the command or stored procedure performs INSERT, DELETE or UPDATE operations, then we use Execute Non Query method. Execute Non Query method returns an integer specifying the number of rows inserted, deleted or updated.</p>
`),
new qList(`What is difference between dataset and datareader ?`,`<ul><li>DataReader provides forward-only and read-only access to data, while the DataSet object can hold more than one table (in other words more than one rowset) from the same data source as well as the relationships between them.</li><li>Dataset is a disconnected architecture while datareader is connected architecture.</li><li>Dataset can persist contents while datareader can not persist contents, they are forward only.</li></ul>`),
      new qList(`What is the DataAdapter Object in ADO.NET?`,`<p> A Data Adapter represents a set of data commands and a database connection to fill the dataset and update a SQL Server database.
       </p><p>A Data Adapter contains a set of data commands and a database connection to fill the dataset and update a SQL Server database. Data Adapters form the bridge between a data source and a dataset.</p>
       A Data Adapter supports mainly the following two methods:<p><b>Fill ():</b> The Fill method populates a dataset or a data table object with data from the database. It retrieves rows from the data source using the SELECT statement specified by an associated select command property</p>
       <p><b>Update ():<b> The Update method commits the changes back to the database. It also analyzes the RowState of each record in the DataSet and calls the appropriate INSERT, UPDATE, and DELETE statements.</p>`),
       new qList(`What is the Use of DataSet object in ADO.NET?`,`<p>There are following uses of ADO.NET</p><ul><li>It is used in a disconnected architecture.</li>
       <li>Provides lower performance. A DataSet object has read/write access.</li>
       <li>A DataSet object supports multiple tables from various databases.</li>
       <li>A DataSet object is bound to multiple controls.</li>
       <li>A DataSet object has slower access to data.</li>
       <li>A DataSet object is supported by Visual Studio tools.</li>
       <li>We can create relations in a dataset.</li>
       <li>A Dataset supports integration with XML.</li>
       </ul>`),
       new qList(`What is DataTable in ADO.NET?`,`<ul><li>DataTable represents a single table in a database.</li>
       <li>In this show row and column.</li>
       <li>DataSet is a collection of data tables.</li>
       <li>In this store data record.</li>
       </ul>
       <pre>protected void BinddataTable()  
{  
    SqlConnection con = new SqlConnection("your database connection string");  
    con.Open();  
    SqlCommand cmd = new SqlCommand("Write your query or procedure", con);  
    SqlDataAdapter da = new SqlDataAdapter(cmd);  
    DataTable dt = new DataTable();  
    da.Fill(dt);  
    grid.DataSource = dt;  
    grid.DataBind();  
   } </pre>`), 
    new qList(`What is the DataReader in ADO.Net?`,`<ul>
  <li>DataReader holds only one table at a time.</li>
  <li>It only provides read only access mode and cannot write data.</li>
  <li>It is not required local storage to data store.</li>
   <li>Holds one row at a time.</li>
   <li>Uses less memory.</li>
   <li>DataReader do not maintain relation.</li>
   </ul><pre>    protected void Bind()  
    {  
        SqlConnection con = new SqlConnection("your database connection string ");  
        con.Open();  
        SqlCommand cmd = new SqlCommand("Write your query or procedure ", con);  
        SqlDataReader dr = cmd.ExecuteReader();  
        grid.DataSource = dr;  
        grid.DataBind();  
    }  
  </pre>`),
  new qList(`What is the SqlCommandBuilder?`,`<p>CommandBuilder helps you to generate update, delete, and insert commands on a single database table for a data adapter. Similar to other objects, each data provider has a command builder class. The OleDbCommandBuilder, SqlCommonBuilder, and OdbcCommandBuilder classes represent the CommonBuilder object in the OleDb, Sql, and ODBC data providers.
   </p> <p>Creating a CommonedBuider object is pretty simply. You pass a DataAdapter as an argument of the CommandBuilder constructor.<b> For example</b>,</p>SqlCommandBuilder builder = new SqlCommandBuilder(adapter);  `),
 new qList(`Describe the DataView in ADO.NET?`,`<p>A DataView enables you to create different views of the data stored in a DataTable, a capability that is often used in data binding applications. Using a DataView, you can expose the data in a table with different sort orders.</p><b>How we can create a DataView</b>
 <p>
  There are two ways to create a DataView. You can use the DataView constructor, or you can create a reference to the DefaultView property of the DataTable.</p><pre>DataView custDV = new DataView(customerDS.Tables["Customers"],   
   "Country = 'USA'",   
   "ContactName",   
     DataViewRowState.CurrentRows);  
    DataView custDV = customerDS.Tables["Customers"].DefaultView; </pre>`),
    new qList(`What are the methods of DataSet?`,`<p> It is used in disconnected architecture. It represent records in the form of Database table (Row and Column) format. It stores record of one or more tables.</p>
    <b>Methods of DataSet:  </b><ul><li><b>AcceptChanges():</b> This method saves changes which are made with records in a DataSet.</li>
    <li><b>Clear():</b> This method clears (removes) all rows from DataSet.</li>
    <li><b>Clone():</b> The clone method copy the structure of DataSet. Means it copy only schema not full records of DataSet.</li>
    <li><b>Copy():</b> It copies the whole records with structure of DataSet.</li>
    <li><b>RejectChanges():</b> This method discard changes which is made with DataSet and set the DataSet to previous stage (which was at first). </li>
    <li><b>HasChanges():</b> This method return boolean value to show whether record of DataSet has changed or not. It returns true if any changes has made and false if no other changes made. </li>
    <li><b>GetChanges():</b> This method keep copy of those record, which is changed or modified.</li>
    </ul>`),
    new qList(`What is the difference between DataSet and DataReader?`,`<b>DataReader</b><br/><br/><li>The ADO.NET DataReader is used to retrieve read-only (cannot update data back to datasource) and forward-only (cannot read backward/random) data from a database.</li>
    <li>
Using the DataReader increases application performance and reduces system overheads. This is due to one row at a time is stored in memory. </li>
<li>You create a DataReader by calling Command.ExecuteReader after creating an instance of the Command object. </li>
<li>This is a connected architecture: The data is available as long as the connection with database exists.</li>
<li>You need to open and close the connection manually in code.</li><br>
 <b>DataSet</b></br></br><li>The DataSet is a in-memory representation of data. </li>
 <li>It can be used with multiple data sources. </li> 
 <li>The DataSet represents a complete set of data including related tables, constraints, and relationships among the tables. </li> 
 <li>The DataAdapter acts as a bridge between a DataSet and a data source for retrieving and saving data. </li>
 <li>No need to manually open and close connection in code.</li>
 <li>The DataAdapter helps mapping the data in the DataSet to match the data in the data source.</li>
   `),
   new qList(`What do you understand by DataRelation class?`,`<p> The DataRelation is a class of disconnected architecture in the .NET framework. It is found in the System.Data namespace. It represents a relationship between database tables and correlates tables on the basis of matching column.
  </p><b>Example:</b><pre>    DataRelation drel;  
    drel = new DataRelation("All", ds.Tables[0].Columns[0], ds.Tables[1].Columns[0]);  
  </pre>`),
  new qList(`What are the important classes in ADO.NET?`,`<p>ADO.NET is a set of classes (a framework) to interact with data sources such as databases and XML files. ADO is the acronym for ActiveX Data Object. It allows us to connect to underlying data or databases. It has classes and methods to retrieve and manipulate data.</p>
  <b>Important classes in ADO.NET</b><br><ul><li>Connection Class</li>
  <li>Command Class</li><li>DataReader Class</li><li>DataAdaptor Class</li><li>DataSet Class</li></ul>`),
  new qList(` What do you understand by SqlTransaction class in ADO.NET?`,`<p>he SqlTransaction class is an important class of .NET Framework. It ensures that a body of code will affect a Database or kept the same as previous (Rollback).
  </p><p>At first we should know about it's two most important method which will be used here. They are given below.</p>
  <ul><li><b>Commit():</b> It commits the transaction. It save changes made in Database during transaction. In simple term we can also say that it shows the end of transaction at that time.</li>
  <li><b>Rollback():</b> It is used to rollback the transaction. It set the database in previous stage which was, before the begin of transaction. </li></ul>`),
  new qList(`What is clone() method of DataSet?`,`<p>The clone method copy the structure of DataSet. Means it copy only schema not full records of DataSet.</p>
  <p>Take another DataGridView and one button in your project and write the following code on button click event.</p>
  <pre>    private void btnclone_Click(object sender, EventArgs e)  
    {  
       DataSet daset = ds.Clone();  
       dataGridView2.DataSource = daset.Tables[0];  
    }  
 </pre>`),
 new qList(`What is the ADO.NET Data provider?`,`There are four .NET data providers available.<ul><li>
  <b>SQL Server:</b> It is used to work specifically with Microsoft SQL Server. It exists in a namespace within the System.Data.SqlClient.</li>
  <li><b>OLE DB:</b> It is used to work with the OLEDB provider. The System.Data.dll assembly implements the OLEDB .NET framework data provider in the System.Data.OleDb namespace.</li>
  <li><b>ODBC:</b> To use this type of provider, you must use an ODBC driver. The System.Data.ODBC.dll assembly implements the ODBC .NET framework data provider. This assembly is not part of the Visual Studio .NET installation.
 </li><li><b>Oracle:</b> The System.Data.OracleClient.dll assembly implements the Oracle .NET framework data provider in the System.Data.OracleClient namespace.</li></ul>`),
  new qList(`Explain the DataTable and Relationship between the DataTable, the DataRow, and the DataColumn.`,`<p>A DataTable object represents a database table. A data table is a collection of columns and rows. The DataRow object represents a table row, and the DataColumn object represents a column of the table.</p>
 <b> Figure shows the relationship between the DataTable, DataRow, and DataColumn.</b><br><br><img src="/assets/Images/ng_dtable.png"></img>`),
 new qList(`What is BindingSource class in ADO.NET?`,`<p>The BindingSource class is used to simplify data binding as well as various operations on records. It has different methods like AddNew( ), MoveFirst( ), MovePrevious( ), MoveNext( ), etc which provide easier way for adding new row, moving to first record, moving to previous record, moving to next record and many other operations without writing code for them.</p>`)
        
    ];
    public angular1=[
        new qList(`What is AngularJS & Why to use AngularJS?`,`<p>AngularJS has been introduced by  Google. It is a framework that helps you to create dynamic Web apps. Normally, AngularJS uses HTML as the backbone. AngularJS creates extended HTML tags that can be used as normal HTML tags. These tags will help you to write an efficient code. The interesting fact is that you can reduce the lines of code  you may need to write when you use normal JavaScript.</p>
   <ul><li>This framework is developed on MVC (Model-View-Controller) design pattern.</li>
   <li>It provides full featured SPA (Single Page Application) framework.</li>
   <li>It supports Dependency Injection.</li>
   <li>It supports two-way data binding.</li>
   <li>It provides routing features.</li>
   <li>Testing was designed right from the beginning; so you can build robust tests.</li>
   <li>For DOM manipulation, jqLite is built-in; which is kind of like the Mini-Me of jQuery.</li>
   <li>Separation of the client side of an Application from the Server side.</li>
   <li>The AngularJS framework uses Plain Old JavaScript Objects(POJO), it doesn’t need the getter or setter functions.</li>
   </ul>`),
   new qList(`What are the advantages of AngularJS?`, `<p>There are following advantages of AngularJS:</p>

<p>
<b>Data Binding -</b> AngularJS provides a powerful data binding mechanism to bind data to HTML elements by using scope.
</p>

<p>
<b>Customize & Extensible - </b>AngularJS is customized and extensible as per your requirement. You can create your own custom components like directives, services etc.
</p>

<p>
<b>Code Reusability -</b> AngularJS allows you to write code which can be reused. For example, custom directive which you can reuse.
</p>

<p>
<b>Support -</b> AngularJS is mature community to help you. It has widely support over the internet. Also, AngularJS is supported by Google which gives it an advantage.
</p>

<p>
<b>Compatibility -</b> AngularJS is based on JavaScript which makes it easier to integrate with any other JavaScript library and runnable on browsers like IE, Opera, FF, Safari, Chrome etc.
</p>

<p>
<b>Testing -</b> AngularJS is designed to be testable so that you can test your AngularJS app components as easy as possible. It has dependency injection at its core, which makes it easy to test.
</p>`),
new qList(`What are AngularJS features?`,`<p>The features of AngularJS are listed below:</p>

<ol>
<li>Modules</li>
<li>Directives</li>
<li>Templates</li>
<li>Scope</li>
<li>Expressions</li>
<li>Data Binding</li>
<li>MVC (Model, View & Controller)</li>
<li>Validations</li>
<li>Filters</li>
<li>Services</li>
<li>Routing</li>
<li>Dependency Injection</li>
<li>Testing</li>

</ul>`),
   new qList(`Explain Directives in AngularJS?`,`<p>AngularJS directives are only used to extend HTML and DOM elements' behavior. These are the special attributes, that start with ng- prefix, that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element.</p>
   <b>AngularJS has a set of built-in directives like</b>
   <ul><li>ng-App</li>
   <li>ng-Init</li>
   <li>ng-Model</li>
   <li>ng-bind</li>
   <li>ng-Class</li>
   <li>ng-Repeat </li>
   </ul>
   <b>ng-app</b>
   <p>It is the most important directive for an Angular Application, which is used to indicate starting of an Angular Application to AngularJS HTML compiler ($compile), like a “Main()” function in any compile time language like C#, Java or C++ etc. If we do not use this directive first and directly try to write other directives, it gives an error.</p>
   <b>ng-init</b>
   <p>ng-init directive is used to initialize an AngularJS  Application data variable's inline statement, so that we can use those in the specified block where we declare them</p>
   <b>ng-model</b>
   <p>ng-model directive is used to define the model/variables value to be used in AngularJS Application’s HTML controls like <input type=’text’/> and it also provides two-way binding behavior with the model value</p>
   <b>ng-bind</b>
   <p>ng-bind directive is also used to bind the model/variable's value to AngularJS Applications HTML controls as well as with HTML tags attributes like: <p/>, <span/> and more, but it does not support two way binding. </p>
   <b>ng-repeat</b>
   <p>ng-repeat directive is used to repeat HTML statements. Ng-repeat works the same as for each loop in C#, Java or PHP on a specific collection item like an array.</p>
     `),
     new qList(`What is restrict option in directive? & Can you define multiple restrict options on a directive?`,`<p>The restrict option in angular directive, is used to specify how a directive will be invoked in your angular app i.e. as an attribute, class, element or comment.</p>
<b>There are four valid options for restrict:</b>
<pre>'A' (Attribute)- &ltspan my-directive>&lt/span>
'C' (Class)- &ltspan class="my-directive:expression;">&lt/span>
'E' (Element)- <my-directive></my-directive>
'M' (Comment)- <!-- directive: my-directive expression -->
</pre>

<p>
You can also specify multiple restrict options to support more than one methods of directive invocation as an element or an attribute. Make sure all are specified in the restrict keyword as:</p>
<pre>restrict: 'EA'</pre>`),
new qList(`What is auto bootstrap process in AngularJS? or How AngularJS is initialized automatically?`, `<p>Angular initializes automatically upon DOMContentLoaded event or when the angular.js script is downloaded to the browser and the document.readyState is set to complete. At this point AngularJS looks for the ng-app directive which is the root of angular app compilation and tells about AngularJS part within DOM. When the ng-app directive is found then Angular will:</p>
<ol>
<li>Load the module associated with the directive.</li>
<li>Create the application injector.</li>
<li>Compile the DOM starting from the ng-app root element.</li>
</ol>
<p>This process is called auto-bootstrapping.</p>
<img src="/assets/Images/bootstrapangular.JPG">
<b>Example</b>
<pre>
&lthtml> &ltbody ng-app="myApp">
&ltdiv ng-controller="Ctrl">
Hello {{msg}}!
&lt/div>
&ltscript src="lib/angular.js">&lt/script>
&ltscript>
var app = angular.module('myApp', []);
app.controller('Ctrl', function ($scope) {
$scope.msg = 'World';
});
&lt/script>
&lt/body>
&lt/html>
</pre>`),
new qList(`What is manual bootstrap process in AngularJS? or How AngularJS is initialized manually?`,`<p>You can manually initialized your angular app by using angular.bootstrap() function. This function takes the modules as parameters and should be called within angular.element(document).ready() function. The angular.element(document).ready() function is fired when the DOM is ready for manipulation.</p>
<b>Example</b>
<pre>
&lthtml>
&ltbody>
&ltdiv ng-controller="Ctrl">
Hello {{msg}}!
&lt/div>
&ltscript src="lib/angular.js">&lt/script>
&ltscript>
var app = angular.module('myApp', []);
app.controller('Ctrl', function ($scope) {
$scope.msg = 'World';
});
//manual bootstrap process
angular.element(document).ready(function () {
angular.bootstrap(document, ['myApp']);
});
&lt/script>
&lt/body>
&lt/html>
</pre>
<b>Note</b>
<ol>
<li>You should not use the ng-app directive when manually bootstrapping your app.</li>
<li>You should not mix up the automatic and manual way of bootstrapping your app.</li>
<li>Define modules, controller, services etc. before manually bootstrapping your app as defined in above example.</li>
</ol>`),
     new qList(`What are expressions in AngularJS & How its different from the JavaScript expressions? `,`<p>Expressions in AngularJS are just like JavaScript code snippets. JavaScript code is usually written inside double braces: <strong>{{expression}}</strong>. In other words, Angular Expressions are JavaScript code snippets with limited sub-set. Expressions are included in the HTML elements.</p>
     For Example, <br><ul><li>{{ 2 + 2 }} (numbers)</li>
     <li>{{Name + " " + email}} (string)</li>
     <li>{{ Country.Name }} (object)</li>
     <li>{{ fact[4] }} (array)</li>
     </ul>
      <br> <img src="/assets/Images/angular_expression.jpg"></p> <p>AngularJS expressions are much like JavaScript expressions but they are different from JavaScript expressions in the following ways:</p><ul><li>Angular expressions can be added inside the HTML templates.</li><li>Angular expressions don’t support control flow statements (conditionals, loops, or exceptions).</li><li>Angular expressions support filters to format data before displaying it.</li></ul>`),
      new qList(`Explain currency filter in AngularJS`,`<p>One of the filters in AngularJS is the Currency Filter. This “currency” filter includes the “$” Dollar Symbol as the default. So we can use the following code as the html template format of Currency Filter.</p>
      <b>{{ currency_expression | currency : symbol : fractionSize}}</b><br><br><b>How to use Currency Filter in AngularJS</b><br>There are two ways by which we can use Currency Filter. 
      <br><ul><li><b>Default</b><br> If we did not provide any currency symbol then by default Dollar-Sign will be used; we can use it as follows: <br> <!-- by default -->

        <b>Default Currency </b>{{amount | currency}} 
       </li>
       <li><b>User Defined</b><br> To use different type of currency symbols we have to define our own symbol by using the unicode or Hexa-Decimal code of that Currency.<br>
       <b>e.g- For Example</b> If we want to define Indian Currency Symbol then we have to use (Unicode-value) or (Hexa-Decimal value)
      <br><b>Indian Currency {{amount | currency:"&# 8377"}}</b> 
      </li></ul>`),
      new qList(`What is scope in AngularJS?`,`<p>Scope is a JavaScript object that refers to the application model. It acts as a context for evaluating angular expressions. Basically, it acts as glue between controller and view.</p>
<img src="/assets/Images/scope.JPG">

<p>Scopes are hierarchical in nature and follow the DOM structure of your AngularJS app. AngularJS has two scope objects: $rootScope and $scope.</p>
      `),
      new qList(`What is $scope and $rootScope?`,`<p><b>$scope -</b> A $scope is a JavaScript object which is used for communication between controller and view. Basically, $scope binds a view (DOM element) to the model and functions defined in a controller.</p>
<img src="/assets/Images/rootScope.JPG">

<p><b>$rootScope -</b> The $rootScope is the top-most scope. An app can have only one $rootScope which will be shared among all the components of an app. Hence it acts like a global variable. All other $scopes are children of the $rootScope.</p>
<b>For example, suppose you have two controllers: Ctrl1 and Ctrl2 as given below:</b>

<pre>
&lt!doctype html>
&lthtml>
&ltbody ng-app="myApp">
&ltdiv ng-controller="Ctrl1" style="border:2px solid blue; padding:5px">
Hello {{msg}}!
&ltbr /> Hello {{name}}! (rootScope)
&lt/div>
&ltbr />
&ltdiv ng-controller="Ctrl2" style="border:2px solid green; padding:5px">
Hello {{msg}}!
&ltbr /> Hey {{myName}}!
&ltbr /> Hi {{name}}! (rootScope)
&lt/div>
&ltscript src="lib/angular.js">&lt/script>
&ltscript>
var app = angular.module('myApp', []);
app.controller('Ctrl1', function ($scope, $rootScope) {
$scope.msg = 'World'; $rootScope.name = 'AngularJS';
});
app.controller('Ctrl2', function ($scope, $rootScope) {
$scope.msg = 'IT Interview Guide'; $scope.myName = $rootScope.name;
});
&lt/script>
&lt/body>
&lt/html>
</pre>
<b>Output -1 </b>
Hello World <br>
Hello AngularJS! (rootScope)


<b>Output -2 </b>
Hello IT Interview Guide <br>
Hey AngularJS! <br>
Hi AngularJS! (rootScope)
`),
new qList(`How to call API using $http ?`,` The AngularJS $http service makes a request to the server, and returns a response.
<pre>
&ltdiv ng-app="myApp" ng-controller="myCtrl"> 

&ltp>Today's welcome message is:&lt/p>
&lth1>{{myWelcome}}&lt/h1>

&lt/div>

&ltscript>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});
&lt/script>
</pre>
<b>Another way to call $http with Error handling</b>
<pre>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "welcome.htm"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
</pre>
`),
new qList(`What is the difference between $scope and scope?`, `<p>The module factory methods like controller, directive, factory, filter, service, animation, config and run receive arguments through dependency injection (DI). In case of DI, you inject the scope object with the dollar prefix i.e. $scope. The reason is the injected arguments must match to the names of injectable objects followed by dollar ($) prefix.</p>

<p>For example, you can inject the scope and element objects into a controller as given below:</p>

<pre>
module.controller('MyController', function ($scope, $element) { // injected arguments
});
</pre>
<p>When the methods like directive linker function don’t receive arguments through dependency injection, you just pass the scope object without using dollar prefix i.e. scope. The reason is the passing arguments are received by its caller.</p>
<pre>
module.directive('myDirective', function () // injected arguments here
{
return {
// linker function does not use dependency injection
link: function (scope, el, attrs) {
// the calling function will passes the three arguments to the linker: scope, element and attributes, in the same order
}
};
});
</pre>
<p>In the case of non-dependency injected arguments, you can give the name of injected objects as you wish. The above code can be re-written as:<p>
<pre>
module.directive("myDirective", function () {
return {
link: function (s, e, a) {
// s == scope
// e == element
// a == attributes
}
};
});
</pre>
<p>In short, in case of DI the scope object is received as $scope while in case of non-DI scope object is received as scope or with any name.</p>`),
      new qList(`How to create custom directives in AngularJS?`, `<p>You can create your own custom directive by using following syntax:</p>

<pre>var app = angular.module('app', []);
//creating custom directive syntax
app.directive("myDir", function () {
return {
restrict: "E", //define directive type like E = element, A = attribute, C = class, M = comment
scope: { //create a new child scope or an isolate scope
title: '@' //@ reads the attribute value,
//= provides two-way binding,
//& works with functions
},
template: "&ltdiv>{{ myName }}&lt/div>",// define HTML markup
templateUrl: 'mytemplate.html', //path to the template, used by the directive
replace: true | false, // replace original markup with template yes/no
transclude: true | false, // copy original HTML content yes/no
controller: function (scope) { //define controller, associated with the directive template
//TODO:
},
link: function (scope, element, attrs, controller) {//define function, used for DOM manipulation
//TODO:
}
}
});
</pre>`),
      new qList('What is SPA  in AngularJS?',`<p>Single-Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app</p>
      <br><img src="/assets/Images/spa.jpg"></img><br><b>Key Points of Single-Page Applications</b><br>
      <ul><li>The application is responsive in the UI with no page flicker</li>
      <li>	The Back/Forward buttons work as expected</li>
      <li> More JavaScript than actual HTML</li>
      <li>Rich interaction among UI components</li></ul>`),
      new qList(`How to implement routing in AngularJS?`,`<p>Routing is a core feature in AngularJS. This feature is useful in building SPA (Single Page Application) with multiple views. In SPA application, all views are different Html files and we use Routing to load different parts of the application and it's helpful to divide the application logically and make it manageable. </p><br>
      <img src="/assets/Images/route.jpg"></img> <br><b>How to add routing</b><br><p>The $routeProvider definition contained by the module is called "ngRoute". In app.js file, I have defined an angular app using “angular. Module” method. After creating module, we need to configure the routes. The "config" method is used to configure $routeProvider. Using "when" and "otherwise" method of $routeProvider, we can define the route for our AngularJS application.</p>
      <pre>var app = angular.module("AngularApp", ['ngRoute']);  
app.config(['$routeProvider',  
    function($routeProvider)  
    {  
     $routeProvider.  
      when('/page1',   
       {  
         templateUrl: 'Modules/Page1/page1.html',  
         controller: 'Page1Controller'  
       })  
    when('/page2',   
       {  
        templateUrl: 'Modules/Page2/page2.html',  
        controller: 'Page2Controller'  
       }).otherwise  
        ({  
            redirectTo: '/page1'  
        });  
      }  
     ]);  </pre>`),
    new qList(`How are validations implemented in AngularJS?`,`<p>One of the coolest features of AngularJS is client-side validation. There are so many form directives available in AngularJS. We will talk about some of them here, we will also explain custom validation. Using it you can create your own validations.</p>
    <ul><li>Data type validation</li><li>Required field validation</li><li>Date Validation</li>
    <li>Email Validation</li>
    <li>Range Validation Max and Min</li>
        </ul><p>Angular provides properties on form which help you to get information about a form or its inputs and to validate them.</p>
<p><b>$valid -</b> It is a boolean property that tells whether the form or it's inputs are valid or not. If all containing form and controls are valid, then it will be true, otherwise it will be false.</p>
<b>Syntax</b>
<pre>
formName.$valid
formName.inputFieldName.$valid
</pre>

<p><b>$invalid - </b> It is a boolean property that tells whether the form or it's inputs are invalid or not. If at least one containing form and control is invalid then it will be true, otherwise it will be false.</p>
<b>Syntax</b>
<pre>
formName.$invalid
formName.inputFieldName.$invalid
</pre>

<p><b>$pristine -</b> It is a boolean property that tells whether the form or it's inputs are unmodified by the user or not. If the form or its inputs are unmodified by the user, then it will be true, otherwise it will be false.</p>
<b>Syntax</b>
<pre>
formName.inputFieldName.$pristine
</pre>

<p><b>$dirty -</b> It is a boolean property that is actually just reverse of pristine i.e. it tells whether the form or it's inputs are modified by the user or not. If the form or its inputs are modified by the user, then it will be true, otherwise it will be false.</p>
<b>Syntax</b>
<pre>formName.$dirty
formName.inputFieldName.$dirty
</pre>

<p><b>$error -</b> This is an object hash which contains references to all invalid controls or forms. It has all errors as keys: where keys are validation tokens (such as required, url or email) and values are arrays of controls or forms that are invalid with given error. For a control, if a validation fails then it will be true, otherwise it will be false.</p>
<b>Syntax</b>
<pre>formName.$error
formName.inputFieldName.$error
</pre>`),
new qList(`What is the difference between Factory, Service and Provider?`,`<p><b>Factory - </b>A factory is a simple function which allows you to add some logic before creating the object. It returns the created object.</p>
<pre>
//define a factory using factory() function
app.factory('MyFactory', function () {
var serviceObj = {};
serviceObj.function1 = function () {
//TO DO:
};
serviceObj.function2 = function () {
//TO DO:
};
return serviceObj;
});
</pre>

<p><b>When to use:</b> It is just a collection of functions like a class. Hence, it can be instantiated in different controllers when you are using it with constructor function.</p>

<p><b>Service -</b> A service is a constructor function which creates the object using new keyword. You can add properties and functions to a service object by using this keyword. Unlike factory, it doesn’t return anything.</p>
<b>Example</b>
<pre>
//define a service using service() function
app.service('MyService', function () {
this.function1 = function () {
//TO DO:
};
this.function2 = function () {
//TO DO:
</pre>
<p><b>When to use:</b> It is a singleton object. Use it when you need to share a single object across the application.</p>
<p><b>For example,</b> authenticated user details.</p>
<p><b>Provider -</b> A provider is used to create a configurable service object. It returns value by using $get() function.</p>
<b>Example</b>
<pre>
//define a provider using provider() function
app.provider('configurable', function () {
var privateName = '';
this.setName = function (newName) {
privateName = newName;
};
this.$get = function () {
return {
name: privateName
};
};
});
//configuring provider using config() function
app.config(function (configurableService) {
configurableService.setName('www.dotnet-tricks.com');
});</pre>
<p><b>When to use:</b> When you need to provide module-wise configuration for your service object before making it available.</p>


<pre>
&ltbody>
&ltdiv class="container" style="padding-top:20px;">
&ltdiv ng-app="myApp" ng-controller="myController">
&ltp>From Service: {{serviceName}}&lt/p>
&ltp>From Factory: {{factoryName}}&lt/p>
&ltp>From Provider: {{providerName}}&lt/p>
&lt/div>
&lt/div>
&ltscript>
//defining module
var app = angular.module('myApp', []);
//defining service
app.service('myService', function () {
this.name = '';
this.setName = function (newName) {
this.name = newName;
return this.name;
};
});
//defining factory
app.factory('myFactory', function () {
var serviceObj = {};
serviceObj.name = '';
serviceObj.setName = function (newName) {
serviceObj.name = newName;
};
return serviceObj;
});
//defining provider
app.provider('configurable', function () {
var privateName = '';
this.setName = function (newName) {
privateName = newName;
};
this.$get = function () {
return {
name: privateName
};
};
});
//configuring provider
app.config(function (configurableProvider) {
configurableProvider.setName("IT Interview Guide");
});
//defining controller
app.controller('myController', function ($scope, myService, myFactory, configurable) {
$scope.serviceName = myService.setName("IT Interview Guide");
myFactory.setName("IT Interview Guide");
$scope.factoryName = myFactory.name;
$scope.providerName = configurable.name;
});
&lt/script>
&lt/body>
</pre>
`),
new qList(`What is $q service and when to use it?`,`<p><b>$q</b> is a service that helps you to run functions asynchronously, and use their return values when they have done processing.</p>

<p><b>$q service </b>is said to be inspired by Chris Kowal's Q library which allow users to monitor asynchronous progress by providing a "promise" as a return from a call.</p>
<p><It is good when you need to process a number of asynchronous activities simultaneously. The $q.all() function lets you trigger several callbacks at the same time, and use a single then function to join them all together.</p>
<pre>
var first = $http.get("/app/data/first.json"),
second = $http.get("/app/data/second.json"),
third = $http.get("/app/data/third.json");
$q.all([first, second, third]).then(function (result) {
var tmp = [];
angular.forEach(result, function (response) {
tmp.push(response.data);
});
return tmp;
}).then(function (tmpResult) {
$scope.combinedResult = tmpResult.join(", ");
});</pre>`),
        new qList(`Explain what is Dependency Injection in AngularJS?`,`<p>Dependency Injection is one of the best features of AngularJS. It is a software design pattern in which objects are passed as dependencies. It helps us to remove hard coded dependencies and makes dependencies configurable. Using Dependency Injection, we can make components maintainable, reusable and testable.</p>
        <b>Dependency Injection is required for the following</b><br>
        <ul><li>Separating the process of creation and consumption of dependencies.</li>
        <li>It allows us to create independent development of the dependencies.</li>
        <li>We can change the dependencies when required.</li>
       <li>It allows injecting mock objects as dependencies for testing.</li>
       </ul>`),
       new qList(`Explain directives ng-if, ng-switch and ng-repeat?`,`<p><b>ng-if –</b> This directive can add / remove HTML elements from the DOM based on an expression. If the expression is true, it add HTML elements to DOM, otherwise HTML elements are removed from the DOM.</p>

<pre>
&ltdiv ng-controller="MyCtrl">
&ltdiv ng-if="data.isVisible">ng-if Visible&lt/div>
&lt/div>
&ltscript>
var app = angular.module("app", []);
app.controller("MyCtrl", function ($scope) {
$scope.data = {};
$scope.data.isVisible = true;
});
&lt/script>
</pre>
<p><b>ng-switch – </b>This directive can add / remove HTML elements from the DOM conditionally based on scope expression.</p>

<pre>
&ltdiv ng-controller="MyCtrl">
&ltdiv ng-switch on="data.case">
&ltdiv ng-switch-when="1">Shown when case is 1&lt/div>
&ltdiv ng-switch-when="2">Shown when case is 2&lt/div>
&ltdiv ng-switch-default>Shown when case is anything else than 1 and 2&lt/div>
&lt/div>
&lt/div>
&ltscript>
var app = angular.module("app", []);
app.controller("MyCtrl", function ($scope) {
$scope.data = {};
$scope.data.case = true;
});
&lt/script></pre>
<p><b>ng-repeat - </b>This directive is used to iterate over a collection of items and generate HTML from it.</p>
<pre>
&ltdiv ng-controller="MyCtrl">
&ltul>
&ltli ng-repeat="name in names">
{{ name }}
&lt/li>
&lt/ul>
&lt/div>
&ltscript>
var app = angular.module("app", []);
app.controller("MyCtrl", function ($scope) {
$scope.names = ['Shailendra', 'Deepak', 'Kamal'];
});
&lt/script>
</pre>
`),
new qList(`What are Templates in AngularJS?`,`<p>AngularJS templates are just plain old HTML that contains Angular-specific elements and attributes. AngularJS used these templates to show information from the model and controller.</p>
<b>Creating an AngularJS template</b>
<pre>
&lthtml ng-app>
<!-- body tag with ngController directive -->
&ltbody ng-controller="MyController">
&ltinput ng-model="txtName" value="shailendra"/>
<!-- button tag with ng-click directive & string expression 'btnText' wrapped in "{{ }}" markup -->
&ltbutton ng-click="changeName()">{{btnText}}&lt/button>
&ltscript src="angular.js">
&lt/body>
&lt/html>
</pre>`),
       new qList(`What is controller in AngularJS?`,`<p>A controller is a set of JavaScript functions which is bound to a specified scope, the ng-controller directive. Angular will instantiate the new controller object, and injects the new scope as a dependency. It contains business logic for the view and avoids using controller to manipulate the DOM. </p>
       <br><img src="/assets/Images/controller.jpg"></img><br><b>Controller Rules</b><br>
       <ul><li>We can use controller to set up the initial state of the scope object and add behavior to that object.</li>
       <li>We do not use controller to manipulate DOM. It should contain only business logic and can use data binding and directives for the DOM manipulation.</li>
       <li>We do not use controllers to format input but can use angular from controls instead of that.</li>
       <li>We do not use filter output but can use angular filters instead of that. </li>
       <li>We do not manage the life-cycle of other components.</li>
        </ul>`),
        new qList(`What are the filters in AngularJS?`,`<p>Filters are used to modify the data and can be clubbed in expression or directives using a pipe character. A filter formats the value of an expression for display to the user. They can be used in view templates, controllers, or services, and we can easily create our own filter.There are nine components of filter which are provided by AngularJS. We can write custom as well.</p>
          <ul><li>currency</li>
          <li>date</li><li>filter</li><li>json</li><li>limitTo</li>
          <li>lowercase</li>
         <li>number</li><li>uppercase</li><li>OrderBy</li>
        </ul><b>Filter Syntax</b>
<pre>{{ expression | filter}}</pre>
<b>Filter Example</b>
<pre>
&ltscript type="text/javascript">
{ { 14 | currency } } //returns $14.00
&lt/script>
</pre>`),
        new qList(`What are Modules in AngularJS?`,`<p>AngularJS modules are containers just like namespace in C#. They divide an angular app into small, reusable and functional components which can be integrated with other angular app. Each module is identified by a unique name and can be dependent on other modules. In AngularJS, every web page (view) can have a single module assigned to it via ng-app directive.</p>
<b>Creating an AngularJS module</b>
<pre>
&ltscript type="text/javascript">
// defining module
angular.module('myApp', []);
//OR defining module which has dependency on other modules
angular.module('myApp', ['dependentModule1', 'dependentModule2']);
&lt/script>
</pre>
<b>Using an AngularJS module into your app</b>
<p>You can bootstrap your app by using your AngularJS module as given below:</p>

<pre>
&lthtml ng-app="myApp">
&lthead>
...
&lt/head>
&ltbody>
...
&lt/body>
</pre>`),
new qList(`What is difference between config() and run() method in AngularJS?`,`<p>
<b>Configuration block-</b> This block is executed during the provider registration and configuration phase. Only providers and constants can be injected into configuration blocks. This block is used to inject module wise configuration settings to prevent accidental instantiation of services before they have been fully configured. This block is created using config() method.

</p>

<pre>
angular.module('myModule', []).
config(function (injectables) { // provider-injector
// This is an example of config block.
// You can have as many of these as you want.
// You can only inject Providers (not instances)
// into config blocks.
}).
run(function (injectables) { // instance-injector
// This is an example of a run block.
// You can have as many of these as you want.
// You can only inject instances (not Providers)
// into run blocks
});
</pre>
<p><b>Run block –</b> This block is executed after the configuration block. It is used to inject instances and constants. This block is created using run() method. This method is like as main method in C or C++.</p>
<p>The run block is a great place to put event handlers that need to be executed at the root level for the application. For example, authentication handlers.</p>`),
new qList(`What is core module in AngularJS? & How angular modules load the dependencies?`,`<p><b>ng</b> is the core module in angular. This module is loaded by default when an angular app is started. This module provides the essential components
 for your angular app like directives, services/factories, filters, global APIs and testing components.</p><p>An angular module use configuration and run blocks to inject dependencies (like providers, services and constants) which get applied to the angular app during the bootstrap process.</p>`),
        new qList(`What are the services in AngularJS?`,`<p>Services are one of the most important concepts in AngularJS. In general services are functions that are responsible for specific tasks in an application. AngularJS services are designed based on two principles.</p>
        <b>Lazily instantiated </b><br><p>Angular only instantiates a service when an application component depends on it using dependency injection for making the Angular codes robust and less error prone.</p>
        <b>Singletons</b><br><p>Each component is dependent on a service that gets a reference to the single instance generated by the service factory.</p>`),
        new qList(`Explain ng-app directive.`,`<p>ng-app directive is used to define AngularJS applications. We can use this to auto-bootstrap an AngularJS application. It designates the root element of AngularJS application and is generally kept near the  <body> or <html> tag. </p>
        <b>Example</b><img src="/assets/Images/ng_app_code.png"></img>`),
        new qList(` What are the advantages of AngularJS?`,`<ul><li>AngularJS has code reusability that allows us to write code & reuse it as required as Custom directive.</li>
      <li> AngularJS supports powerful data binding; it is two way data binding with the help of HTML & scope</li>
      <li>AngularJS is easily customizable as per our requirement. </li>
     <li>AngularJS has good support over the internet and over time it has new changes available for developers. </li>
     <li>AngularJS has inbuilt form validation & template with all old plain html.</li>
      </ul>`),
      new qList(`What are the different types of Directives in AngularJS?`,`<p>Directives are one of the most important components of AngularJS application. They are extended HTML attributes. In other words, directives are something that introduces new syntax. </p>
      <p>Their are many built in directives <b>such as ng-model, ng-repeat, ng-show, ng-bind etc</b>. All these directives provide special behavior to DOM elements</p>`),
      new qList(` Mention what are the characteristics of “Scope”?`,`$scope is a glue between the View and the Controller. It connects a Controller with the View,<br><img src="/assets/Images/scop.jpg"></img>
      <ul><li>$scope serves as the glue between the Controller and the View.</li>
      <li>The $scope is the connection between the HTML and the View. </li>
      <li>The View and the model both have access to the $scope.</li>
     <li>In the context of MVC, $scope can be seen as the ViewModel.</li>
      <li>$scope provides the execution context for the DOM and the expression.</li>
     <li>$scope provides an execution context in which the DOM element is bound.</li>
      <li>$scope is the source of the truth.</li>
     <li>$scope is modified when the View changes and the View is modified when $the scope changes its value.</li>
      <li>The $scope object is a plain JavaScript object. We can add and remove a property as required.</li>
       <li>$scope holds data and functions from the Controller that should be displayed and executed in the View.</li>
     </ul>`),
     new qList(`What is the difference between AngularJS and jQuery?`,`<p>jQuery and AngularJS have some common features like Unit test runner, animation support, AJAX/JSONP but they also have some differences.</p>
     <ul><li>AngularJS came with RESTful API whereas we don't have that in jQuery.</li>
     <li>AngularJS supports the MVC pattern whereas jQuery doesn't.</li>
     <li>ngularJS has the feature called Two Way Data Binding whereas we don't have that in jQuery.</li>
     <li>Deep Linking Routing is supported by AngularJS whereas jQuery doesn't.</li>
     <li>The AngularJS file size is quite heavier than that of the jQuery file size.
      We can prefer AngularJS only if we are developing a heavy web application.
     </li>
     </ul>`),
     new qList(`Explain Two-way and One-way data binding in AngularJS?`,`<p><b>Two-way data binding -</b> It is used to synchronize the data between model and view. It means, any change in model will update the view and vice versa. ng-model directive is used for two-way data binding.</p>
<img src="/assets/Images/OneTwoWay.JPG">
<p>
<b>One-way data binding -</b> This binding is introduced in Angular 1.3. An expression that starts with double colon (::), is considered a one-time expression i.e. one-way binding.</p>
<b>Two-Way and One-Way data binding Example</b>
<pre>
&ltdiv ng-controller="MyCtrl"> &ltlabel>Name (two-way binding):
 &ltinput type="text" ng-model="name" />&lt/label> 
 &ltstrong>Your name (one-way binding):&lt/strong> {{::name}}<br /> 
 &ltstrong>Your name (normal binding):&lt/strong> {{name}}
&lt/div>
&ltscript>
var app = angular.module('app', []);
app.controller("MyCtrl", function ($scope) {
$scope.name = "Shailendra Chauhan"
})
&lt/script>
</pre>`),
new qList(`What is the difference between $watch, $digest and $apply?`,`<p><b>$watch() -</b> This function is used to observe changes in a variable on the $scope. It accepts three parameters: expression, listener and equality object, where listener and equality object are optional parameters.</p>
<b>$watch(watchExpression, listener, [objectEquality])</b>
<pre>
&ltscript>
var myapp = angular.module("myapp", []);
var myController = myapp.controller("myController", function ($scope) {
$scope.name = 'dotnet-tricks.com';
$scope.counter = 0;
//watching change in name value
$scope.$watch('name', function (newValue, oldValue) {
$scope.counter = $scope.counter + 1;
});
});
&lt/script>
&lt/head>
&ltbody ng-app="myapp" ng-controller="myController">
&ltinput type="text" ng-model="name" />
<br /><br />
Counter: {{counter}}
&lt/body>
</pre>

<p>
<b>$digest() -</b> This function iterates through all the watches in the $scope object, and its child $scope objects (if it has any). When $digest() iterates over the watches, it checks if the value of the expression has changed. If the value has changed, AngularJS calls the listener with the new value and the old value.
</p>
<p>The $digest() function is called whenever AngularJS thinks it is necessary. For example, after a button click, or after an AJAX call. You may have some cases where AngularJS does not call the $digest() function for you. In that case you have to call it yourself.</p>
<pre>
&ltbody ng-app="app">
&ltdiv ng-controller="Ctrl">
&ltbutton class="digest">Digest my scope!&lt/button>
&ltbr />
&lth2>obj value : {{obj.value}}&lt/h2>
&lt/div>
&ltscript>
var app = angular.module('app', []);
app.controller('Ctrl', function ($scope) {
$scope.obj = { value: 1 };
$('.digest').click(function () {
console.log("digest clicked!");
console.log($scope.obj.value++);
//update value
$scope.$digest();
});
});
&lt/script>
</pre>

<p>
<b>$apply() -</b> Angular do auto-magically updates only those model changes which are inside AngularJS context. When you do change in any model outside of the Angular context (like browser DOM events, setTimeout, XHR or third party libraries), then you need to inform Angular of the changes by calling $apply() manually. When the $apply() function call finishes AngularJS calls $digest() internally, so all data bindings are updated.</p>
<b>$apply([exp])</b>
<pre>
&ltscript>
var myapp = angular.module("myapp", []);
var myController = myapp.controller("myController", function ($scope) {
$scope.datetime = new Date();
$scope.updateTime = function () {
$scope.datetime = new Date();
}
//outside angular context
document.getElementById("updateTimeButton").addEventListener('click', function () {
//update the value
$scope.$apply(function () {
console.log("update time clicked");
$scope.datetime = new Date();
console.log($scope.datetime);
});
});
});
&lt/script>
&lt/head>
&ltbody ng-app="myapp" ng-controller="myController">
&ltbutton ng-click="updateTime()">Update time - ng-click</button>
&ltbutton id="updateTimeButton">Update time</button>
<br />
{{datetime | date:'yyyy-MM-dd HH:mm:ss'}}
&lt/body>
</pre>`),
new qList(`What is $emit, $broadcast and $on in AngularJS?`,`<p>AngularJS provides $on, $emit, and $broadcast services for event-based communication between controllers.</p>
<p><b>$emit –</b> It dispatches an event name upwards through the scope hierarchy and notify to the registered $rootScope.Scope listeners. The event life cycle starts at the scope on which $emit was called. The event traverses upwards toward the root scope and calls all registered listeners along the way. The event will stop propagating if one of the listeners cancels it.</p>

<pre>
&ltscript>
var app = angular.module('app', []);
app.controller("firstCtrl", function ($scope) { $scope.$on('eventName', function (event, args) {
$scope.message = args.message;
console.log($scope.message);
});
});
app.controller("secondCtrl", function ($scope) {
$scope.handleClick = function (msg) { $scope.$emit('eventName', { message: msg });
};
});
&lt/script>
&ltbody ng-app="app">
&ltdiv ng-controller="firstCtrl" style="border:2px solid #E75D5C; padding:5px;">
&lth1>Parent Controller&lt/h1>
&ltp>Emit Message : {{message}}&lt/p>
<br />
&ltdiv ng-controller="secondCtrl" style="border:2px solid #428bca;padding:5px;">
&lth1>Child Controller&lt/h1>
&ltinput ng-model="msg">
&ltbutton ng-click="handleClick(msg);">Emit&lt/button>
&lt/div>
&lt/div>
&lt/body>
</pre>
<img src="/assets/Images/emit.JPG">
<p>
<b>$broadcast –</b> It dispatches an event name downwards to all child scopes (and their children) and notify to the registered $rootScope.Scope listeners. The event life cycle starts at the scope on which $broadcast was called. All listeners for the event on this scope get notified. Afterwards, the event traverses downwards toward the child scopes and calls all registered listeners along the way. The event cannot be canceled.</p>
<pre>
&ltscript>
var app = angular.module('app', []);
app.controller("firstCtrl", function ($scope) {
$scope.handleClick = function (msg) { $scope.$broadcast('eventName', { message: msg });
};
});
app.controller("secondCtrl", function ($scope) { $scope.$on('eventName', function (event, args) {
$scope.message = args.message;
console.log($scope.message);
});
});
&lt/script>
&ltbody ng-app="app">
&ltdiv ng-controller="firstCtrl" style="border:2px solid #E75D5C; padding:5px;">
&lth1>Parent Controller&lt/h1>
&ltinput ng-model="msg">
&ltbutton ng-click="handleClick(msg);">Broadcast&lt/button>
<br /><br />
&ltdiv ng-controller="secondCtrl" style="border:2px solid #428bca;padding:5px;">
&lth1>Child Controller&lt/h1>
<p>Broadcast Message : {{message}}&lt/p>
&lt/div>
&lt/div>
&lt/body>
</pre>
<p><b>$on –</b> It listen on events of a given type. It can catch the event dispatched by $broadcast and $emit.</p>
<p>
<b>Note - </b>If there is no parent-child relation between your scopes you can inject $rootScope into the controller and broadcast the event to all child scopes but you cannot emit your event. You can emit your event only when you have parent-child relation and event propagation is initiated by child. However, $emit can fire an event only for all $rootScope.$on listeners.</p>

`),
new qList(`Please explan about $evalAsync, $timeout, $watch and $observe?`,`<p><b>$evalAsync -</b> This executes the expression on the current scope on later time. The $evalAsync makes no guarantees as to when the expression will be executed, only that:</p>
<ul>
<li>If code is queued using $evalAsync from a directive, it will run after the DOM has been manipulated by Angular, but before the browser renders.</li>
<li>If code is queued using $evalAsync from a controller, it will run before the DOM has been manipulated by Angular and before the browser renders.</li>
</ul>
<p><b>$timeout -</b> This also executes the expression on the current scope on later time. When the code is queued using $timeout, it will run after the DOM has been manipulated by Angular and after the browser renders which may cause flicker in some cases.</p>
<p><b>$watch - </b> is a method on the scope object which is used to watch expressions. The expression can be either strings or functions. It can be called wherever you have access to scope (a controller or a directive linking function).</p>
<p><b>$observe -</b> is a method on the attrs object which is only used to observe the value change of a DOM attribute. It is only used inside directives.</p>

<p><b>Note -</b> All $observes and $watches are checked on every digest cycle.</p>`),
new qList(`What is issue with two-way data binding? or Why one-way data binding is introduced?`,`<p>In order to make data-binding possible, Angular uses $watch APIs to observe model changes on the scope. Angular registered watchers for each variable on scope to observe the change in its value. If the value, of variable on scope is changed then the view gets updated automatically.</p><p>This automatic change happens because of $digest cycle is triggered. Hence, Angular processes all registered watchers on the current scope and its children and checks for model changes and calls dedicated watch listeners until the model is stabilized and no more listeners are fired. Once the $digest loop finishes the execution, the browser re-renders the DOM and reflects the changes.</p><p>By default, every variable on a scope is observed by the angular. In this way, unnecessary variable are also observed by the angular that is time consuming and as a result page is becoming slow.</p><p>Hence to avoid <b>unnecessary observing</b> of variables on scope object, angular introduced one-way data binding.</p>`),

        
    ];
    public angular2=[
        new qList(`Explain the life cycle hooks of Angular 2 application`,`<p>Angular 2 component/directive has lifecycle events, managed by @angular/core. It creates the component, renders it, creates and renders its children, processes changes when its data-bound properties change, and then destroys it before removing its template from the DOM.</p><p>Some of the events are applicable for both component/directives while few are specific to components.</p>
        <ul><li><b>ngOnChanges</b>-Responds when angular sets its data-bound property which receives the current and previous object values.</li>
        <li><b>ngOnInit</b>-Initializes the component/directive after first ngOnChange triggers. This is most frequently used method to retrieve the data for the template from a back-end service.</li>
         <li><b>ngDoCheck</b>-Detect and act upon changes occuring outside Angular context. It is called when every change detection run.</li>
       <li><b>ngOnDestroy</b>-Cleanup just before Angular destroys the directive/component. Unsubscribe observables and detach event handlers to avoid memory leaks.</li>
        </ul>
        `),
        new qList(`Difference between Angular 1 VS Angular 2?`,`
<b>1). Angular 2 is mobile oriented & better in performance. </b>
<p>Angular 1.x was not built with mobile support in mind, where Angular 2 is mobile oriented. Angular 2 is using Hierarchical Dependency Injection system which is major performance booster. Angular 2 implements unidirectional tree based change detection which again increases performance. As per ng-conf meetup, angular 2 is 5 times faster as compared to angular 1.</p>
<img src="/assets/Images/ang-1.jpg">
<b>2). Angular 2 provides more choice for languages.</b>
<p>Angular 2 provides more choice for languages. You can use any of the languages from ES5, ES6, TypeScript or Dart to write Angular 2 code. Where, Angular 1.x has ES5, ES6, and Dart. Using of TypeScript is a great step as TypeScript is an awesome way to write JavaScript.</p>
<b>3). Angular 2 implements web standards like components.</b>
<p>Angular 2 implements web standards like components, and it provides better performance than Angular 1.</p>
<img src="/assets/Images/ang-2.jpg">
<b>4). AngularJS 2.0 is not easy to setup as AngularJS 1.x.</b>
<p>AngularJS 1.x is easy to setup. All you need to do is to add reference of library and you are good to go. Where AngularJS 2 is dependent on other libraries and it requires some efforts to set up it.
[UPDATE: Angular Team heard this and they introduced Angular CLI to create AngularJS 2 applications]</p>
<b>5). Angular 1.x controllers and $scope are gone.</b>
<p>Angular 1.x controllers and $scope are gone. We can say that controllers are replaced with “Components” in Angular 2. Angular 2 is component based. Angular 2 is using zone.js to detect changes.</p>
<pre>
//Angular 1.x Controller
var myApp = angular.module("myModule", []);
myApp.controller("productController", function($scope) {
     var prods = { name: "Prod1", quantity: 1 };
     $scope.products = prods;
});
</pre>
<pre>
//Angular 2 Components using TypeScript
import { Component } from '@angular/core';

@Component({
    selector: 'prodsdata',
    template: '&lth3>{{prods.name}}&lt/h3>'
})

export class ProductComponent {
    prods = {name: 'Prod1', quantity: 1 };
}
</pre>
<p><b>Note:</b> there is a class with ‘export’ keyword, @Componentannotation (that’s also new in Angular 2). The @Componentannotation adds the metadata to the class.</p>
<img src="/assets/Images/ang-3.jpg">

<b>6). Different ways to define local variables.</b>
<p>In Angular 2, local variables are defined using a Hash(#) prefix.</p>
<pre>&ltdiv *ngFor="#technicalDiary of technicalDiries"></pre>

<b>7). Structural directives syntax is changed.</b>
<p>In Angular 2, Structural directives syntax is changed. ng-repeat is replaced with. *ngFor
Angular 1.x structural directives:</p>
<pre>
&ltul>
   &ltli ng-repeat="technology in technologies">
     {{technology.name}}
   &lt/li>
&lt/ul></pre>

<p>Angular 2 structural directives:</p>
<pre>
&ltul>
  &ltli *ngFor="#technology of technologies">
    {{technology.name}}
  &lt/li>
&lt/ul></pre>
<p><b>Note:</b> Asterisk(*) sign is used as a prefix for structural directives, is replaced with and camelCase syntax is used.</p>
<b>8). Angular 2 uses camelCase syntax for built-in directives.</b>
<p>Angular 2 uses camelCase syntax for built-in directives. For example, ng-class is now and ngClass ng-model is now ngModel.</p>
<b>9). Angular 2, directly uses the valid HTML DOM element properties and events.</b>
<p>One of the major change in Angular 2 is, that it directly uses the valid HTML DOM element properties and events. Due to this, many of the available built-in directives in Angular 1.x are now no longer required. Like ng-href, ng-src, ng-show and ng-hide. Angular 2 uses href, src and hidden properties to get the same output. And same goes with event based directives like ng-click and ng-blur.</p>
<pre>&ltbutton ng-click=”doSomething()”></pre>
<p>And in Angular 2, take the HTML event and wrap it with parentheses.</p>
<pre>&ltbutton ng-click=”doSomething()”></pre>
<b>10). One-way data binding directive replaced with [property].</b>
<p>In Angular 1.x, ng-bind is used for one-way data binding, but with Angular 2 it is replaced with, [property] where ‘property’ is valid HTML DOM element property.
Angular 1.x, one-way data binding</p>
<pre>&ltinput ng-bind="name">&lt/input></pre>
<p>
Angular 2, one-way data binding is achieved via wrapping the properties with square brackets.</p>
<pre>&ltinput [ng-bind]="name">&lt/input></pre>

<b>11). Two-way data binding: ng-model replaced with [(ngModel)]</b>
<p>In Angular 1.x, ng-model is used for two-way data binding, but with Angular 2 it is replaced with [(ngModel)].</p>
<p>Angular 1.x, two-way data binding,</p>
<pre>&ltinput ng-model="technology.name">&lt/input></pre>
<p>In Angular 2,</p>
<pre>&ltinput [(ngModel)]="technology.name">&lt/input></pre>
<b>12). Way of Bootstrapping Angular Application is changed:</b>
<p>Angular 1.x has 2 ways to bootstrap Angular. One using ng-app attribute and other via code.</p>
<pre>&ltscript>
   angular.element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
   });
&lt/script></pre>

<p>In Angular 2, say goodbye to ng-app. The only way to bootstrap Angular is via code.</p>
<pre>
import { bootstrap } from 'angular2/platform/browser';
import { ProductComponent } from './product.component';

bootstrap(ProductComponent);</pre>
<p>The bootstrap function is used and it takes starting component which is also parent component of your angular application.</p>

<b>13). Ways of Dependency Injection is Changed- syntax changed.</b>
<p>One of the advantages of Angular is Dependency Injection. With Angular 2 DI is there but now there is a different way to inject dependencies. As everything is ‘class’ in Angular, so DI is achieving via constructors.</p>
<p>In Angular 1.x,</p>

<pre>var myApp = angular
   .module("myModule", [])
   .controller("productController", function($scope, $http) {
        var prods = { name: "Prod1", quantity: 1 };
        $scope.products = prods;
    });</pre>
	<p>In Angular 2,</p>
	<pre>import { Injectable } from 'angular2/core';

@Injectable()

export class TechnologyService {
    constructor(private _http: Http) { }
    getTechnologies() {
        return [new technology(1, 'Angular'),
            new technology(2, 'jQuery',
            new technology(3, 'Node'),
            new technology(4, 'Knockout')
        ];
    }
}</pre>

<p>Note: <b>@Injectable()</b> is added to service class. It is similar to Angular 1.x $inject used for DI.</p>
<b>14). Way of routing is Changed- syntax changed.</b>
<p>In Angular 1.x, we use $routeProvider.when() to configuring routing. Where in Angular 2, @RouteConfig{(...}) is used. ng-view present in Angular 1.x is replaced with <router-outlet></p>
<p>In Angular 1.x,</p>
<pre>var app = angular
        .module("MyModule", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
            .when("/home", { templateUrl: "home.html", controller: "homeController" })
            .when("/technology", { templateUrl: "technology.html", controller: "technologyController" })
        })
       .controller("homeController", function ($scope) {
            $scope.message = "Home Page";
        })   
       .controller("technologyController", function ($scope) {
             $scope.technologies = ["ASP.NET", "jQuery", "AngularJS", "JavaScript"];
       })</pre>
	   
	   <p>In Angular 2,</p>
	   <pre>import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyService } from './Technology/Technology.service';
 
@Component({
  selector: 'my-app',
  
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TechnologyService
  ]
})
@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/technology', name: 'Technology', component: TechnologyComponent },
])

export class AppComponent { }</pre>
<p>Routing is a separate module that’s why need to import it. And 2 more configurations need to be to make routing work, one is adding[ROUTER_DIRECTIVES] as directive and other is to add ROUTER_DIRECTIVES in providers list. And in HTML page,</p>
<pre>
&ltul>
  <&lti>&lta [routerLink]="['Home']" href="">Home&lt/a>&lt/li>
  &ltli>&lta [routerLink]="['Technology']" href="">Technology&lt/a>&lt/li>
&lt/ul>
</pre>

<p>ng-href is also replaced by [routerLink]</p>
<b>Conclusion:</b>
<p>Although angular 2, I consider this as a major upgrade from Angular 1. Angular 2 has very powerful routes. The Angular 2 Router will only load components when it absolutely needs them. Kind of partial loading which is a great feature I think. Angular 2 is 5 times faster as compared to Angular 1.</p>

<p>It certainly requires some efforts to migrate from Angular 1 to Angular 2, but it is in the right direction. Things are looking better and more inline with HTML. It is still in beta but eagerly waiting for the final release.</p>

`),
        new qList(`How routing works in Angular 2`,`<p>Routing is a mechanism which enables user to navigate between views/components. Angular 2 simplifies the routing and provide flexibility to configure and define at module level (Lazy loading). </p>
        <p>The angular application has single instance of the Router service and whenever URL changes, corresponding Route is matched from the routing configuration array. On successful match, it applies redirects and the router builds a tree of ActivatedRoute objects and contains the current state of the router. Before redirection, the router will check whether new state is permitted by running guards (CanActivate). Route Guards is simply an interface method that router runs to check the route authorization.</p><p> After guard runs, it will resolve the route data and activate the router state by instantiation the required components into &ltrouter-outlet&gt &lt/router-outlet&gt.</p>`),
        new qList(`What are Event Emitters and how it works in Angular 2?`,`<p>Angular 2 doesn’t have bi-directional digest cycle, unlike angular 1. In angular 2, any change occurred in the component always gets propagated from the current component to all its children in hierarchy. If the change from one component needs to be reflected to any of its parent component in hierarchy, we can emit the event by using Event Emitter api.</p>
        <p>In short, EventEmitter is class defined in @angular/core module which can be used by components and directives to emit custom events.</p>
        @output() somethingChanged = new EventEmitter();`),
        new qList(`What is lazy loading and How to enable lazy loading in angular 2?`,`<p>Most of the enterprise application contains various modules for specific business cases. Bundling whole application code and loading will be huge performance impact at initial call. Lazy lading enables us to load only the module user is interacting and keep the rest to be loaded at runtime on demand.</p>
<p>Lazy loading speeds up the application initial load time by splitting the code into multiple bundles and loading them on demand.</p>
<p>Every Angular application must have one main module say AppModule. The code should be splitted into various child modules (NgModule) based on the application business case.</p>
<ol>
<li>We don't require to import or declare lazily loading module in root module.</li>
<li>Add the route to top level routing (app.routing.ts) and set loadChildren. loadChildren takes absolute path from root folder followed by #{ModuleName}. RouterModule.forRoot() takes routes array and configures the router.</li>
<li>Import module specific routing in the child module.</li>
<li>In the child module routing, specify path as empty string ' ', the empty path. RouterModule.forChild again takes routes array for the child module components to load and configure router for child.</li>
<li>Then, export const routing: <pre>ModuleWithProviders = RouterModule.forChild(routes);</pre></li>
</ol>`),
new qList(`How to create API call in Angular 2?`,`<b>Step 1:</b> In the app.module.ts file include the HttpModule for enable the HTTP call.
<pre>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
<b>import { HttpModule } from '@angular/http';</b>

@NgModule ({
   imports:      [ BrowserModule,<b>HttpModule</b>],
   declarations: [ AppComponent],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
</pre>


<b>Step 2:</b> Create separate typescirpt file for Creating HTTP service for API Call. 

<pre>
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()
export class ProductService {
   private _producturl='https://app/products.json';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
</pre>

Following points need to be noted about the above program.
<ul>
<li>The <b>import {Http, Response} from '@angular/http'</b> statement is used to ensure that the http function can be used to get the data from the products.json file.</li>
<li>The following statements are used to make use of the Reactive framework which can be used to create an Observable variable. The Observable framework is used to detect any changes in the http response which can then be sent back to the main application.
<pre>
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
</pre>
</li>
<li>The statement private _producturl = 'app/products.json' in the class is used to specify the location of our data source. It can also specify the location of web service if required.</li>
<li>Next, we define a variable of the type Http which will be used to get the response from the data source.</li>
<li>Once we get the data from the data source, we then use the JSON.stringify(data) command to send the data to the console in the browser.</li>

</ul>




<b>Step 3:</b> need to inject & Subscribe the created service for API HTTP call. 

<pre>
import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'my-app',
   template: '<div>Hello</div>',
   providers: [<b>ProductService</b>]
})

export   class   ProductComponent  {
   iproducts: IProduct[];
   constructor(<b>private _product: ProductService</b>) {
   }
   
   ngOnInit() : void {
     <b> this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);</b>
   }
}</pre>

<p>Here, the main thing in the code is the subscribe option which is used to listen to the Observable getproducts() function to listen for data from the data source.
</p>

`),
     new qList(`What are the security threats should we be aware of in angular 2 application?`,`<p>Just like any other client side or web application, angular 2 application should also follow some of the basic guidelines to mitigate the security risks. Some of them are:</p>
     <ul><li>Avoid using/injecting dynamic Html content to your component.</li>
     <li>If using external Html, that is coming from database or somewhere outside the application, sanitize it</li>
     <li>Try not to put external urls in the application unless it is trusted. Avoid url re-direction unless it is trusted.</li>
     <li>Consider using AOT compilation or offline compilation.</li>
     <li>Try to prevent XSRF attack by restricting the api and use of the app for known or secure environment/browsers.</li>
     </ul>`),
     new qList(`How would you optimize the angular 2 application for better performance?`,`<p>Well, optimization depends on the type and size of application and many other factors. But in general, I would consider the following points while optimizing the angular 2 app:</p>
     <ul><li>Consider AOT compilation.</li>
     <li>Make sure the application is bundled, uglified, and tree shaking is done.</li>
     <li>Make sure the application doesn’t have un-necessary import statements.</li>
     <li>Make sure that any 3rd party library, which is not used, is removed from the application.</li>
     <li>Have all dependencies and dev-dependencies are clearly separated.</li>
     <li>I would consider lazy loading instead of fully bundled app if the app size is more.</li>
     </ul>`),
     new qList(`How would you define custom Typings to avoid editor warnings?`,`<p>Well, in most of the cases, the 3rd party library comes with its own .d.ts file for its type definition. In some cases, we need to extend the existing type by providing some more properties to it or if we need to define additional types to avoid Typescript warning.</p>
     <p>If we need to extend the type definition for external library, as a good practice, we should not touch the node_modules or existing typings folder. We can create a new folder, say “custom-typings” and keep all customized type definition in that.</p>`),
     new qList(`What is shadow DOM? How is it helping Angular 2 to perform better?`,`<p>Shadow DOM is a part of the HTML spec which allows developers to encapsulate their HTML markup, CSS styles and JavaScript. Shadow DOM, along with a few other technologies, gives developers the ability to build their own 1st class tags, web components and APIs just like the &ltaudio&gt tag.<br> Collectively, these new tags and APIs are referred to as Web Components. Shadow DOM provides better separation of concern along with lesser conflict of styles and scripts with other HTML DOM elements.</p>`),
     new qList(`What is AOT compilation?`,`<p>AOT compilation stands for Ahead Of Time compilation, in which the angular compiler compiles the angular components and templates to native JavaScript and HTML during the build time. </p>
     <b>Advantages</b><br><ul><li>Faster download </li>
     <li>Lesser No. of Http Requests</li>
     <li>Faster Rendering</li>
     <li>Detect error at build time</li>
     </ul><b>Disadvantages</b><br>
     <ul><li>Works only with HTML and CSS, other file types need a previous build step</li>
     <li>No watch mode yet, must be done manually (bin/ngc-watch.js) and compiles all the files</li>
     <li>Need to maintain AOT version of bootstrap file (might not be required while using tools like cli)</li>
     <li>Needs cleanup step before compiling</li>`),
     new qList(`What are the core differences between Observables and Promises?`,`<p>A Promise handles a single event when an async operation completes or fails.</p>
     <p>An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event. Often Observable is preferred over Promise because it provides the features of Promise and more. </p>
     <b>Promises</b><ul>
     <li>returns a single value</li>
     <li>not cancellable</li>
     </ul>
      <b>Observables</b><ul>
     <li>works with multiple values over time</li>
     <li>cancellable</li>
     <li>supports map, filter, reduce and similar operators</li>
     <li>proposed feature for ES 2016</li>
     </ul>`),
     new qList(`Explain local reference variables, ViewChild, and ContentChild.`,`<p>Local template variables in angular2 is used to refer HTML elements and use their properties to access siblings or children. Let’s consider you have an input field named username.

<pre>&ltinput type="text" required ... /></pre>

This HTMLInputField can be made available to the template using # symbol with a variable name say username.

 <pre>&ltinput type="text" #username required ... /></pre>

Now, this HTMLInputElement can be accessed from anywhere in the current template for example, checking validation and showing appropriate message based on the validation rule. But, username HTML reference is not accessible in the component/directive.

To access this in the component, angular 2 provides @ViewChild decorator which accepts the local reference variable.

<pre>@ViewChild('username') username: HTMLInputElement;</pre>

ViewChild element can be read after the view is initialized (ngAfterViewInit).

ContentChild is used to query the reference of the DOM within ng-content. Content Child are set before the ngAfterContentInit lifecycle hook.
</p>

<b>For Example</b>
<pre>
// &ltcode>app.component.ts&lt/code>
<my-component>
    &ltp #contentRef>{{test}}&lt/p>
</ my-component >
 
// MyComponent.component.ts
@Component({
    selector: ‘my-component',
    template: '
    &ltng-content></ng-content>
    &ltdiv> ContentChild Example &lt/div>
})
export class LifecycleComponent implements ngAfterContentInit{
                @ContentChild(‘contentRef’)   childContent: HTMLElement;
 
ngAfterContentInit() {
              this.log('ngAfterContentInit');
console.log(this.childContent);
    }
}
</pre>`),
new qList(`What are Modules in Angularjs 2.0?`,`<p>Both Angular 1.x and 2.0 apps are modular. However, in Angular2.0 NgModules  has been introduced as its modularity system. Every Angular2.0 must have one module which acts as the root module and conventionally named as AppModule. If the project has been created using angular-cli, AppModule is created in file src/app/app.module.ts.</p>

<b>However, there can be more than one module in a single Angular2.0 app.</b>
<p>
<b>@NgModule </b>decorators pass a metadata, with properties such as declaration, imports, providers, export and bootstrap in order to create the module class.</p>
<img src="/assets/Images/angularmodule.JPG">`),
        
    ];
    public sqlServer=[
       new qList(`What is SQL?`,`<p>SQL stands for Structured Query Language , and it is used to communicate with the Database. <br>
       This is a standard language used to perform tasks such as retrieval, updation, insertion and deletion of data from a database.<br><br>Standard SQL Commands are Select.</p>`),
       new qList(`What is a Database?`,`<p>Database is nothing but an organized form of data for easy access, storing, retrieval and managing of data.
       <br> This is also known as structured form of data which can be accessed in many ways<br><br>Example: School Management Database, Bank Management Database</p>`),
       new qList(`What are tables and Fields?`,`<p>A table is a set of data that are organized in a model with Columns and Rows. Columns can be categorized as vertical, and Rows are horizontal.
        A table has specified number of column called fields but can have any number of rows which is called record</p>`),
       new qList(`What is a candidate key ?`,`<p>A table may have more than one combination of columns that could uniquely identify the rows in a table; each combination is a candidate key. During database design you can pick up one of the candidate keys to be the primary key. For example, in the supplier table supplierid and suppliername can be candidate key but you will only pick up supplierid as the primary key.</p>`),       
       
       new qList(`What is a foreign key?`,`<p>A foreign key is one table which can be related to the primary key of another table. Relationship needs to be created between two tables by referencing foreign key with the primary key of another table.</p>`),
       new qList(`What are the different types of joins? What is the difference between them ?`,`<b>INNER JOIN</b>
<p>The INNER JOIN keyword selects all rows from both tables as long as there is a match between the columns in both tables (Table1 and Table2).</p>
<pre>SELECT column_name(s)
FROM Table1
INNER JOIN Table2
ON Table1.column_name=Table2.column_name;</pre>
<img src="/assets/Images/innerJoining.JPG">

<b>LEFT OUTER JOIN</b>
<p>The LEFT JOIN keyword returns all rows from the left table (Table1), with the matching rows in the right table (Table2). The result is NULL in the right side when there is no match.<p>
<pre>SELECT column_name(s)
FROM Table1
LEFT OUTER JOIN Table2
ON Table1.column_name=Table2.column_name;</pre>
<img src="/assets/Images/leftouterjoin.JPG">

<p>RIGHT OUTER JOIN</p>
<p>The RIGHT JOIN keyword returns all rows from the right table (Table2), with the matching rows in the left table (Table1). The result is NULL in the left side when there is no match.</p>
<pre>SELECT column_name(s)
FROM Table1
RIGHT OUTER JOIN Table2
ON Table1.column_name=Table2.column_name;</pre>
<img src="/assets/Images/rightOuterjoin.JPG">

<b>FULL JOIN</b>
<p>The FULL OUTER JOIN keyword returns all rows from the left table (Table1) and from the right table (Table2). The FULL OUTER JOIN keyword combines the result of both LEFT and RIGHT joins.</p>
<pre>
SELECT column_name(s)
FROM Table1
FULL OUTER JOIN Table2
ON Table1.column_name=Table2.column_name;</pre>
<img src="/assets/Images/FullJoin.JPG">`),
       
       new qList(`What is normalization? & What are all the different normalizations?`,`<p>Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database. The main aim of Normalization is to add, delete or modify field that can be made in a single table.</p> <p>The normal forms can be divided into 5 forms, and they are explained below-</p>
       <ul><li><b>First Normal Form (1NF)-</b>This should remove all the duplicate columns from the table. Creation of tables for the related data and identification of unique columns.</li><br>
       <li><b>Second Normal Form (2NF)-</b>Meeting all requirements of the first normal form. Placing the subsets of data in separate tables and Creation of relationships between the tables using primary keys.</li><br>
       <li><b>Third Normal Form (3NF)-</b>This should meet all requirements of 2NF. Removing the columns which are not dependent on primary key constraints</li><br>
       <li><b>Fourth Normal Form (4NF)-</b>Meeting all the requirements of third normal form and it should not have multi- valued dependencies</li></ul>`),
       new qList(`What is Denormalization?`,`<p>DeNormalization is a technique used to access the data from higher to lower normal forms of database. It is also process of introducing redundancy into a table by incorporating data from the related tables.</p>`),
       
       new qList(`What is a View?`,`<p>A view is a virtual table which consists of a subset of data contained in a table. Views are not virtually present, and it takes less space to store. View can have data of one or more tables combined, and it is depending on the relationship</p><b>Syntax :</b>
<pre>
Create view [ViewName] 
As 
Select ID, Name,Gender from Employee e 
Join Department d on d.ID=e.ID 
</pre>
Execute : select * from [ViewName]`),
       new qList(`What is the difference between a “Local Temporary Table” and “Global Temporary Table”?`,`<ol>
<li>A Local Temporary Table is created by giving it a prefix of # whereas a Global Temporary Table is created by giving it a prefix of ##.</li>
<li>A Local Temporary Table cannot be shared among multiple users whereas a Global Temporary Table can be shared among multiple users.</li>
<li>A Local Temporary Table is only available to the current DB connection for the current user and are cleared when the connection is closed whereas a Global Temporary Table is available to any connection once created. They are cleared when the last connection is closed.</li>
</ol>`),
new qList(`What is SQL Profiler?`,`<ol>
<li>SQL Profiler is a graphical tool that allows system administrators to monitor events in an instance of Microsoft SQL Server. You can capture and save data about each event to a file or SQL Server table to analyze later. For example, you can monitor a production environment to see which stored procedures are hampering performances by executing too slowly.</li>
<li>Use SQL Profiler to monitor only the events in which you are interested. If traces are becoming too large, you can filter them based on the information you want, so that only a subset of the event data is collected. Monitoring too many events adds overhead to the server and the monitoring process and can cause the trace file or trace table to grow very large, especially when the monitoring process takes place over a long period of time.</li>

</ol>`),
new qList(`What is CHECK Constraint? & What is NOT NULL Constraint?`,`<p>A <b>CHECK constraint</b> is used to limit the values that can be placed in a column. The check constraints are used to enforce domain integrity.</p>
<p>A <b>NOT NULL constraint</b> enforces that the column will not accept null values. The not null constraints are used to enforce domain integrity, as the check constraints.</p>
`),
       new qList(`What are indexes? What is the difference between clustered and nonclustered indexes?`,`<p>An index is performance tuning method of
        allowing faster retrieval of records from the table.<br> An index creates an entry for each value and it will be faster to retrieve data.</p>
        <p>Indexes in SQL Server are similar to the indexes in books. They help SQL Server retrieve the data quickly.</p><b>Syntax :</b>
<pre>
Create index [indexName] 
On [EmployeeTable] (Salary ASC)
</pre>
<b>difference between “Clustered Index” and “Non Clustered Index”</b>
<ol>
<li>A Clustered Index physically stores the data of the table in the order of the keys values and the data is resorted every time whenever a new value is inserted or a value is updated in the column on which it is defined, whereas a non-clustered index creates a separate list of key values (or creates a table of pointers) that points towards the location of the data in the data pages.</li>
<li>A Clustered Index requires no separate storage than the table storage. It forces the rows to be stored sorted on the index key whereas a non-clustered index requires separate storage than the table storage to store the index information.</li>
<li>A table with a Clustered Index is called a Clustered Table. Its rows are stored in a B-Tree structure sorted whereas a table without any clustered indexes is called a non-clustered table. Its rows are stored in a heap structure unsorted.</li>
<li>The default index is created as part of the primary key column as a Clustered Index.</li>
<li>In a Clustered Index, the leaf node contains the actual data whereas in a non-clustered index, the leaf node contains the pointer to the data rows of the table.</li>
<li>A Clustered Index always has an Index Id of 1 whereas non-clustered indexes have Index Ids > 1.</li>
<li>A Table can have only 1 Clustered Index whereas prior to SQL Server 2008 only 249 non-clustered indexes can be created. With SQL Server 2008 and above 999 non-clustered indexes can be created.</li>
<li>A Primary Key constraint creates a Clustered Index by default whereas A Unique Key constraint creates a non-clustered index by default.</li>
</ol>

`),
new qList(`What is SQl injection ?`,`<p>It is a Form of attack on a database-driven Web site in which the attacker executes unauthorized SQL commands by taking advantage of insecure code on a system connected to the Internet, bypassing the firewall. SQL injection attacks are used to steal information from a database from which the data would normally not be available and/or to gain access to an organization’s host computers through the computer that is hosting the database.</p>
<p>SQL injection attacks typically are easy to avoid by ensuring that a system has strong input validation.</p>
<p>
As name suggest we inject SQL which can be relatively dangerous for the database.
Example this is a simple SQL</p>
<pre>
SELECT email, passwd, login_id, full_name
FROM members
WHERE email = 'x'
Now somebody does not put “x” as the input but puts “x ; DROP TABLE members;”.
So the actual SQL which will execute is :-
SELECT email, passwd, login_id, full_name
FROM members
WHERE email = 'x' ; DROP TABLE members; Think what will happen to your database.
</pre>`),
new qList(`What is the difference between “Stored Procedure” and “Function”?`,`<ol>
<li>A procedure can have both input and output parameters, but a function can only have input parameters.</li>
<li>Inside a procedure we can use DML (INSERT/UPDATE/DELETE) statements. But inside a function we can't use DML statements.</li>
<li>We can't utilize a Stored Procedure in a Select statement. But we can use a function in a Select statement.</li>
<li>We can use a Try-Catch Block in a Stored Procedure but inside a function we can't use a Try-Catch block.</li>
<li>We can use transaction management in a procedure but we can't in a function.</li>
<li>We can't join a Stored Procedure but we can join functions.</li>
<li>Stored Procedures cannot be used in the SQL statements anywhere in the WHERE/HAVING/SELECT section. But we can use a function anywhere.</li>
<li>A procedure can return 0 or n values (max 1024). But a function can return only 1 value that is mandatory.</li>
<li>A procedure can't be called from a function but we can call a function from a procedure.</li>
</ol>
`),
       new qList(`What is a Cursor?`,`<p>A database Cursor is a control which enables traversal over the rows or records in the table. This can be viewed as a pointer to one row in a set of rows. Cursor is very much useful for traversing such as retrieval, addition and removal of database records</p>`),
       new qList(`What is a relationship and what are they?`,`<p>Database Relationship is defined as the connection between the tables in a database. There are various data basing relationships, and they are as follows-</p>
       <ul><li>One to One Relationship</li><br>
       <li>One to Many Relationship.</li><br>
       <li>Many to One Relationship</li><br>
       <li>Self-Referencing Relationship</li></ul>`),
       new qList(`What is a query?`,`<p>A DB query is a code written in order to get the information back from the database. Query can be designed in such a way that it matched with our expectation of the result set. Simply, a question to the Database.</p>`),
       new qList(`What is subquery?`,`<p>A subquery is a query within another query. The outer query is called as main query, and inner query is called subquery. SubQuery is always executed first, and the result of subquery is passed on to the main query.</p><pre>
SELECT * 
   FROM CUSTOMERS 
   WHERE ID IN (SELECT ID 
         FROM CUSTOMERS 
         WHERE SALARY > 4500) ;


</pre>`),
       new qList(`What is a trigger?`,`<p>A DB trigger is a code or programs that automatically execute with response to some event on a table or view in a database. Mainly, trigger helps to maintain the integrity of the database</p>
       <p>Example: When a new student is added to the student database, new records should be created in the related tables like Exam, Score and Attendance tables.</p><b>Syntax</b><pre>
Create trigger [triggerName] 
On [table Name] 
For [INSERT/UPDATE/DELETE] 
As 
Begin 
// sql query 
End
</pre>
`),
       new qList(`What is the difference between DELETE and TRUNCATE commands?`,`<ol>
<li>The DELETE command is used to remove rows from a table based on a WHERE condition whereas TRUNCATE removes all rows from a table.</li>
<li>So we can use a where clause with DELETE to filter and delete specific records whereas we cannot use a Where clause with TRUNCATE.</li>
<li>A table with a Clustered Index is called a Clustered Table. Its rows are stored in a B-Tree structure sorted whereas a table without any clustered indexes is called a non-clustered table. Its rows are stored in a heap structure unsorted.</li>
<li>DELETE is executed using a row lock, each row in the table is locked for deletion whereas TRUNCATE is executed using a table lock and the entire table is locked for removal of all records.</li>
<li>DELETE is a DML command whereas TRUNCATE is a DDL command.</li>
<li>DELETE retains the identity of the column value whereas in TRUNCATE, the Identify column is reset to its seed value if the table contains any identity column.</li>
<li>To use Delete you need DELETE permission on the table whereas to use Truncate on a table you need at least ALTER permission on the table.</li>
<li>DELETE uses more transaction space than the TRUNCATE statement whereas Truncate uses less transaction space than DELETE statement.</li>
<li>DELETE can be used with indexed views whereas TRUNCATE cannot be used with indexed views.</li>
<li>The DELETE statement removes rows one at a time and records an entry in the transaction log for each deleted row whereas TRUNCATE TABLE removes the data by deallocating the data pages used to store the table data and records only the page deallocations in the transaction log.</li>
<li>Delete activates a trigger because the operation is logged individually whereas TRUNCATE TABLE can't activate a trigger because the operation does not log individual row deletions.</li>
</ol>`),
new qList(`What is the difference between the “WHERE” clause and the “HAVING” clause?`,`<ol>
<li>WHERE clause can be used with a Select, Update and Delete Statement Clause but the HAVING clause can be used only with a Select statement.</li>
<li>We can't use an aggregate functions in the WHERE clause unless it is in a sub-query contained in a HAVING clause whereas we can use an aggregate function in the HAVING clause. We can use a column name in the HAVING clause but the column must be contained in the group by clause.</li>
<li>WHERE is used before the GROUP BY clause whereas a HAVING clause is used to impose a condition on the GROUP Function and is used after the GROUP BY clause in the query.</li>
<li>A WHERE clause applies to each and every row whereas a HAVING clause applies to summarized rows (summarized with GROUP BY).</li>
<li>In the WHERE clause the data that is fetched from memory depending on a condition whereas in HAVING the completed data is first fetched and then separated depending on the condition.</li>
</ol>`),
new qList(`What is the difference between “Primary Key” and “Unique Key”?`,`<ol>
<li>We can have only one Primary Key in a table whereas we can have more than one Unique Key in a table.</li>
<li>The Primary Key cannot have a NULL value whereas a Unique Key may have only one null value.</li>
<li>By default, a Primary Key is a Clustered Index whereas by default, a Unique Key is a unique non-clustered index.</li>
<li>A Primary Key supports an Auto Increment value whereas a Unique Key doesn't support an Auto Increment value.</li>
</ol>`),
       new qList(`What is Self-Join?`,`<p>Self-join is set to be query used to compare to itself. This is used to compare values in a column with other values in the same column in the same table. ALIAS ES can be used for the same table comparison</p>`),
       new qList(`What is Cross-Join?`,`<p>Cross join defines as Cartesian product where number of rows in the first table multiplied by number of rows in the second table. If suppose, WHERE clause is used in cross join then the query will work like an INNER JOIN.</p>`),
       new qList(`What is user defined functions?`,`<p>User defined functions are the functions written to use that logic whenever required. It is not necessary to write the same logic several times. Instead, function can be called or executed whenever needed</p><b>Syntax :</b>
<pre>
Create function [fn_FunctionName] (parameter )
Return table
As
Return 
(select Name, ID, Gender from Employee 
where Gender=@parameter)

</pre>
Execure : select * from fn_FunctionName(parametter)`),
new qList(`How to create stored procedure ?`,`<pre>
Create procedure sp_StoredProcedureName
@ID int,
@gender nvarchar(50)
As
Begin
Select * from Employee where ID=@ID and gender=@gender
end


</pre>
execure : exec sp_StoredProcedureName 1 ‘Male’`),
       new qList(`What are all types of user defined functions?`,`<p>Three types of user defined functions are-</p>
       <ul><li>Scalar Functions.</li><br>
       <li>Inline Table valued functions.</li><br>
       <li>Multi statement valued functions</li></ul>
       <p>Scalar returns unit, variant defined the return clause. Other two types return table as a return.</p>`),
       new qList(`What is collation?`,`<p>Collation is defined as set of rules that determine how character data can be sorted and compared. This can be used to compare A and, other language characters and also depends on the width of the characters.</p>`),
       new qList(`Advantages and Disadvantages of Stored Procedure?`,`<p>Stored procedure can be used as a modular programming – means create once, store and call for several times whenever required.
       <br> This supports faster execution instead of executing multiple queries. This reduces network traffic and provides better security to the data.</p>
       <p>Disadvantage is that it can be executed only in the Database and utilizes more memory in the database server.</p>`),
       new qList(`What is the difference between TRUNCATE and DROP statements?`,`<p>TRUNCATE removes all the rows from the table, and it cannot be rolled back. DROP command removes a table from the database and operation cannot be rolled back.</p>`),
       new qList(`How can you create an empty table from an existing table?`,`<p>Select * into studentcopy from student where 1=2</p>`),
       new qList(`How to fetch common records from two tables?`,`<pre>Select studentID from student. <strong>INTERSECT </strong> Select StudentID from Exam</pre>`)

    ];
    public aspDotNetMVC=[
        new qList(`What is MVC?`,`
        <p>MVC stands for Model-View-Controller. It is a software design pattern which was introduced in 1970s. Also, MVC pattern forces a separation of concerns, it means domain model and controller logic are decoupled from user interface (view).
         As a result maintenance and testing of the application become simpler and easier.</p><img src="/assets/Images/mvc-architecture.jpg">`),
        new qList(`Explain MVC design pattern? Or What does Model-View-Controller represent in an MVC application?`,`
        <p>MVC design pattern splits an application into three main aspects: Model, View and Controller,</p> <ul><li><b>Model–</b>It represents the application data domain. In other words applications business logic is contained within the model and is responsible for maintaining data</li></br>
        <li><b>View–</b>It represents the user interface, with which the end users communicates. In short all the user interface logic is contained within the VIEW</li></br>
        <li><b>Controller–</b>It is the controller that answers to user actions. Based on the user actions, the respective controller
         responds within the model and choose a view to render that display the user interface.  The user input logic is contained with-in the 
         controller</li></ul><img src="/assets/Images/mvcDesignPattern.JPG">`),
         new qList(`What is MVVM pattern?`, `<p>
MVVM stands for Model-View-View Model. This pattern supports two-way data binding between view and View model. This enables automatic propagation of changes, 
within the state of view model to the View. Typically, the view model uses the observer pattern to notify changes in the view model to model.
</p>
<p>
<b>Model -</b> The Model represents a set of classes that describes the business logic and data. It also defines business rules for data means how the data can be changed and manipulated.
</p>
<p>
<b>View -</b> The View represents the UI components like CSS, jQuery, html etc. It is only responsible for displaying the data that is received from the controller as the result. This also transforms the model(s) into UI.
</p>
<p>
<b>View Model - </b>The View Model is responsible for exposing methods, commands, and other properties that helps to maintain the state of the view, manipulate the model as the result of actions on the view, and trigger events in the view itself.
</p><img src="/assets/Images/mvvm.JPG">`),        
        new qList(`What is the advantages of MVC over Webform?`,`<p>
There are following advantages of ASP.NET MVC over Web Forms (ASP.NET):
</p>
<p>
<b>Separation of concern -</b> MVC design pattern divides the ASP.NET MVC application into three main aspects Model, View and Controller which make it easier to manage the application complexity.
</p>
<p>
<b>TDD -</b> The MVC framework brings better support to test-driven development.
</p>
<p>
<b>Extensible and pluggable -</b>MVC framework components were designed to be pluggable and extensible and therefore can be replaced or customized easier then Web Forms.
</p>
<p>
<b>Full control over application behaviour - </b>MVC framework doesn’t use View State or server based forms like Web Forms. This gives the application developer more control over the behaviors of the application and also reduces the bandwidth of requests to the server.
</p>
<p>
<b>ASP.NET features are supported-</b>MVC framework is built on top of ASP.NET and therefore can use most of the features that ASP.NET include such as the providers architecture, authentication and authorization scenarios, membership and roles, caching, session and more.
</p>
<p>
<b>URL routing mechanism -</b>MVC framework supports a powerful URL routing mechanism that helps to build a more comprehensible and searchable URLs in your application. This mechanism helps to the application to be more addressable from the eyes of search engines and clients and can help in search engine optimization.
</p>`),
new qList(`What is difference between 3-layer architecture and MVC architecture?`,`<p>
3-layer architecture separates the application into 3 components which consists of Presentation Layer Business Layer and Data Access Layer. In 3-layer architecture, user interacts with the Presentation layer. 3-layer is a linear architecture.
</p>
<img src="/assets/Images/3tierarchi.JPG">
<p>
MVC architecture separates the application into three components which consists of Model, View and Controller. In MVC architecture, user interacts with the controller with the help of view. MVC is a triangle architecture.
</p>
<img src="/assets/Images/mvcDesignPattern.JPG">
<p>
MVC does not replace 3-layer architecture. Typically 3-layer and MVC are used together and MVC acts as the Presentation layer.
</p>`),
new qList(`What is difference between ASP.NET WebForm and ASP.NET MVC?`, `<p>
The main differences between ASP.NET Web Form and ASP.NET MVC are given below:
</p>
<table border="1" style="padding:10px;">
<tr>
<th>ASP.NET Web Forms</th>
<th>ASP.NET MVC</th>
</tr>
<tr>
<td>ASP.NET Web Form follows a traditional event driven development model.</td>
<td>ASP.NET MVC is a lightweight and follow MVC (Model, View, and Controller) pattern based development model.</td>
</tr>
<tr>
<td>ASP.NET Web Form has server controls.</td>
<td>ASP.NET MVC has html helpers.</td>
</tr>
<tr>
<td>ASP.NET Web Form has state management (like as view state, session) techniques.</td>
<td>ASP.NET MVC has no automatic state management techniques.</td>
</tr>
<tr>
<td>ASP.NET Web Form has file-based URLs means file name exist in the URLs must have its physically existence.</td>
<td>ASP.NET MVC has route-based URLs means URLs are divided into controllers and actions and moreover it is based on controller not on physical file.</td>
</tr>
<tr>
<td>ASP.NET Web Form follows WebForm Syntax</td>
<td>ASP.NET MVC follow customizable syntax (Razor as default)</td>
</tr>
<tr>
<td>In ASP.NET Web Form, Web Forms (ASPX) i.e. views are tightly coupled to Code behind (ASPX.CS) i.e. logic.</td>
<td>In ASP.NET MVC, Views and logic are kept separately.</td>
</tr>
<tr>
<td>ASP.NET Web Form has Master Pages for consistent look and feels.</td>
<td>ASP.NET MVC has Layouts for consistent look and feels.</td>
</tr>
<tr>
<td>ASP.NET Web Form has User Controls for code re-usability.</td>
<td>ASP.NET MVC has Partial Views for code re-usability.</td>
</tr>
<tr>
<td>ASP.NET Web Form has built-in data controls and best for rapid development with powerful data access.</td>
<td>ASP.NET MVC is lightweight, provide full control over mark-up and support many features that allow fast & agile development. Hence it is best for developing interactive web application with latest web standards.</td>
</tr>
<tr>
<td>ASP.NET Web Form is not Open Source.</td>
<td>ASP.NET Web MVC is an Open Source.</td>
</tr>
</table>`),
        new qList(`What is ViewModel in ASP.NET MVC?`,`<p>
In ASP.NET MVC, ViewModel is a class that contains the fields which are represented in the strongly-typed view. It is used to pass data from controller to strongly-typed view.
</p>
<b>Key Points about ViewModel</b>
<ul>
<li>ViewModel contain fields that are represented in the view (for LabelFor, EditorFor, DisplayFor helpers)</li>
<li>ViewModel can have specific validation rules using data annotations.</li>
<li>ViewModel can have multiple entities or objects from different data models or data source.</li>
</ul>`),
        new qList(`What is Routing in ASP.NET MVC?`,`
        <p>Routing is a pattern matching system that monitor the incoming request and figure out what to do with that request. At runtime, Routing engine use the Route table for matching the incoming request's URL pattern against the URL patterns defined in the Route table. 
        You can register one or more URL patterns to the Route table at Application_Start event.</p><br>
        <p>The three segments that are important for routing is</p>
        <ul><li>ControllerName</li>
        <li>ActionMethodName</li>
        <li>Parameter</li></ul><img src="/assets/Images/routing.JPG">`),
        new qList(`What is difference between Routing and URL Rewriting?`, `<p>
Many developers compare routing to URL rewriting since both look similar and can be used to make SEO friendly URLs. But both the approaches are very much different. The main difference between routing and url rewriting is given below:
</p>
<ul>
<li>URL rewriting is focused on mapping one URL (new url) to another URL (old url) while routing is focused on mapping a URL to a resource.</li>
<li>URL rewriting rewrites your old url to new one while routing never rewrite your old url to new one but it map to the original route.</li>

</ul>`),
new qList(`What are important namespaces in ASP.NET MVC?`, `<p>
There are some important namespaces as given below:
</p>

<p>
<b>System.Web.Mvc -</b>This namespace contains classes and interfaces that support the MVC pattern for ASP.NET Web applications. This namespace includes classes that represent controllers, controller factories, action results, views, partial views, and model binders.
</p>
<p>
<b>System.Web.Mvc.Ajax - </b>This namespace contains classes that supports Ajax scripting in an ASP.NET MVC application. The namespace includes support for Ajax scripts and Ajax option settings as well.
</p>
<p>
<b>System.Web.Mvc.Html –</b>This namespace contains classes that help render HTML controls in an MVC application. This namespace includes classes that support forms, input controls, links, partial views, and validation.
</p>`),
new qList(`What is View Engine?`, `<p>A View Engine is a MVC subsystem which has its own markup syntax. It is responsible for converting server-side template into HTML markup and rendering it to the browser. Initially, ASP.NET MVC ships with one view engine, web forms (ASPX) and from ASP.NET MVC3 a new view engine, Razor is introduced. With ASP.NET MVC, you can also use other view engines like Spark, NHaml etc.</p>`),
new qList(`What is Razor View Engine?`, `<p>Razor Engine is an advanced view engine that was introduced with MVC3. This is not a new language but it is a new markup syntax. Razor has new and advance syntax that are compact, expressive and reduces typing. Razor syntax are easy to learn and much clean than Web Form syntax. Razor uses @ symbol to write markup as:</p><pre>@Html.ActionLink("SignUp", "SignUp")</pre>`),
new qList(`What is difference between Razor and WebForm engine?`, `<p>
The main differences between ASP.NET Web Form and ASP.NET MVC are given below:
</p>

<table border="1">
<tr>
<th>Razor View Engine</th>
<th>Webform View Engine</th>
</tr>
<tr>
<td><p text-wrap>Razor Engine is an advanced view engine that was introduced with MVC3. This is not a new language but it is a new markup syntax.</p></td>
<td><p text-wrap>Web Form Engine is the default view engine for the Asp.net MVC that is included with Asp.net MVC from the beginning.</p></td>
</tr>
<tr>
<td><p text-wrap>Razor Engine is an advanced view engine that was introduced with MVC3. This is not a new language but it is a new markup syntax.</p></td>
<td><p text-wrap>Web Form Engine is the default view engine for the Asp.net MVC that is included with Asp.net MVC from the beginning.</p></td>
</tr>
<tr>
<td><p text-wrap>The namespace for Razor Engine is System.Web.Razor.</p></td>
<td><p text-wrap>The namespace for Webform Engine is System.Web.Mvc.WebFormViewEngine.</p></td>
</tr>
<tr>
<td><p text-wrap>The file extensions used with Razor Engine are different from Web Form Engine. It has .cshtml (Razor with C#) or .vbhtml (Razor with VB) extension for views, partial views, editor templates and for layout pages.</p></td>
<td><p text-wrap>The file extensions used with Web Form Engine are also like Asp.net Web Forms. It has .aspx extension for views, .ascx extension for partial views & editor templates and .master extension for layout/master pages.</p></td>
</tr>
<tr>
<td><p text-wrap>Razor has new and advance syntax that are compact, expressive and reduces typing.</p></td>
<td><p text-wrap>Web Form Engine has the same syntax like Asp.net Web Forms uses for .aspx pages.</p></td>
</tr>
<tr>
<td><p text-wrap>Razor syntax are easy to learn and much clean than Web Form syntax. Razor uses @ symbol to make the code like as:
@Html.ActionLink("SignUp", "SignUp")</p></td>
<td><p text-wrap>Web Form syntax are borrowed from Asp.net Web Forms syntax that are mixed with html and sometimes make a view messy. Webform uses <% and %> delimiters to make the code like as:
<%: Html.ActionLink("SignUp", "SignUp") %></p></td>
</tr>
<tr>
<td><p text-wrap>By default, Razor Engine prevents XSS attacks (Cross-Site Scripting Attacks) means it encodes the script or html tags like <, > before rendering to view.</p></td>
<td><p text-wrap>Web Form Engine does not prevent XSS attacks means any script saved in the database will be fired while rendering the page</p></td>
</tr>
</table>`),
new qList(`What are HTML Helpers in ASP.NET MVC?`, `<p>An HTML Helper is just a method that returns a HTML string. The string can represent any type of content that you want. For example, you can use HTML Helpers to render standard HTML tags like HTML <input>, <button> and <img> tags etc.
You can also create your own HTML Helpers to render more complex content such as a menu strip or an HTML table for displaying database data.</p>`),
new qList(`What are different types of HTML Helpers?`, `<p>
There are three types of HTML helpers as given below:
</p>


<p>
<b>1. Inline Html Helpers -</b>These are create in the same view by using the Razor @helper tag. These helpers can be reused only on the same view.

@helper ListingItems(string[] items)
{
<ol>
@foreach (string item in items)
{
<li>@item</li>
}
</ol>
}
<h3>Programming Languages:</h3>
@ListingItems(new string[] { "C", "C++", "C#" })
<h3>Book List:</h3>
@ListingItems(new string[] { "How to C", "how to C++", "how to C#" })

</p>
<p>
<b>2. Built-In Html Helpers -</b>Built-In Html Helpers are extension methods on the HtmlHelper class. The Built-In Html helpers can be divided into three categories-
</p>
<p>
<b>Standard Html Helpers -</b>These helpers are used to render the most common types of HTML elements like as HTML text boxes, checkboxes etc. A list of most common standard html helpers is given below:
</p>

<table border="1">
<tr>
<th>HTML Element</th>
<th>Example</th>
</tr>
<tr>
<td><p>TextBox</p></td>
<td><p>@Html.TextBox("Textbox1", "val")
Output:
&ltinput id="Textbox1" name="Textbox1" type="text" value="val" /></p></td>
</tr>
<tr>

<tr>
<td><p>CheckBox</p></td>
<td><p>@Html.CheckBox("Checkbox1", false)
Output:
&ltinput id="Checkbox1" name="Checkbox1" type="checkbox" value="true" />
&ltinput name="myCheckbox" type="hidden" value="false" /></p>
</tr>
</table>

<p>
<b>Strongly Typed HTML Helpers -</b> These helpers are used to render the most common types of HTML elements in strongly typed view like as HTML text boxes, checkboxes etc. The HTML elements are created based on model properties.
The strongly typed HTML helpers work on lambda expression. The model object is passed as a value to lambda expression, and you can select the field or property from model object to be used to set the id, name and value attributes of the HTML helper. A list of most common strongly-typed html helpers is given below:

</p>
<table border="1">
<tr>
<th>HTML Element</th>
<th>Example</th>
</tr>
<tr>
<td><p>TextBox</p></td>
<td><p>@Html.TextBoxFor(m=>m.Name)
Output:
&ltinput id="Name" name="Name" type="text" value="Name-val" /></p></td>
</tr>
<tr>

<tr>
<td><p>CheckBox</p></td>
<td><p>@Html.CheckBoxFor(m=>m.IsApproved)
Output:
&ltinput id="Checkbox1" name="Checkbox1" type="checkbox" value="true" />
&ltinput name="myCheckbox" type="hidden" value="false" /></p>
</tr>
<tr>
<td><p>RadioButton</p></td>
<td><p>@Html.RadioButtonFor(m=>m.IsApproved, "val")
Output:
&ltinput checked="checked" id="Radiobutton1" name="Radiobutton1"type="radio" value="val" /></p>
</tr>
</table>

<p>
<b>Templated HTML Helpers -</b>These helpers figure out what HTML elements are required to render based on properties of your model class. This is a very flexible approach for displaying data to the user, although it requires some initial care and attention to set up. To setup proper HTML element with Templated HTML Helper, make use of DataType attribute of DataAnnitation class.
For example, when you use DataType as Password, A templated helper automatically render Password type HTML input element.
</p>

<table border="1">
<tr>
<th>Templated Helper</th>
<th>Example</th>
</tr>
<tr>
<td><p>Display</p></td>
<td><p>Renders a read-only view of the specified model property and selects an appropriate HTML element based on property’s data type and metadata.
Html.Display("Name")</p></td>
</tr>
<tr>

<tr>
<td><p>DisplayFor</p></td>
<td><p>Strongly typed version of the previous helper</p>
</tr>
</table>



<p>
<b>Extensible and pluggable -</b>MVC framework components were designed to be pluggable and extensible and therefore can be replaced or customized easier then Web Forms.
</p>`),
new qList(`What are Url Helpers?`, `<p>
Url helpers allows you to render HTML links and raw URLs. The output of these helpers is dependent on the routing configuration of your ASP.NET MVC application.
</p>


<table border="1">
<tr>
<th>HTML Element</th>
<th>Example</th>
</tr>
<tr>
<td><p>Relative URL</p></td>
<td><p>@Url.Content("~/Files/asp.netmvc.pdf")
Output: /Files/asp.netmvc.pdf</p></td>
</tr>
<tr>

<tr>
<td><p>Based on
action/controller</p></td>
<td><p>@Html.ActionLink("About Us", "About", "Home")
Output: &lta href="/Home/About">About Us&lt/a></p>
</tr>
<tr>
<td><p>Raw URL for
Action</p></td>
<td><p>Url.Action("About", "Home")
Output: /Home/About</p>
</tr>
</table>`),
new qList(`What are AJAX Helpers? & What is unobtrusive AJAX?`, `<p>AJAX Helpers are used to create AJAX enabled elements like as Ajax enabled forms and links which performs request asynchronously.
 AJAX Helpers are extension methods of AJAXHelper class which exist in System.Web.Mvc namespace.</p><p>ASP.NET MVC supports unobtrusive Ajax which is based on jQuery. The unobtrusive Ajax means that you use helper methods to
  define your Ajax features, rather than adding blocks of code throughout your views.</p>`),
new qList(`What are Layouts in ASP.NET MVC?`, `<p>Layouts are used to maintain a consistent look and feel across multiple views within ASP.NET MVC application. As compared to Web Forms, layouts serve the same purpose as master pages, but offer a simple syntax and greater flexibility. A basic structure of layout is given below:
<pre>&lt!DOCTYPE html>
&lthtml>
&lthead>
&ltmeta charset="utf-8" />
&ltmeta name="viewport" content="width=device-width" />
&lttitle>@ViewBag.Title</title>
@Styles.Render("~/Content/css")
@Scripts.Render("~/bundles/modernizr")
&lt/head>
&ltbody>
@RenderBody()
@Scripts.Render("~/bundles/jquery")
@RenderSection("scripts", required: false)
&lt/body>
&lt/html></pre>
You can use a layout to define a common template for your site. A layout can be declared at the top of view as:
<pre>@{
Layout = "~/Views/Shared/SiteLayout.cshtml";
}</pre></p>`),
new qList(`What are Sections in ASP.NET MVC?`, `<p>
A section allow you to specify a region of content within a layout. It expects one parameter which is the name of the section. If you don’t provide that, an exception will be thrown. A section in a layout page can be defined by using the following code.
<pre>
@section header{
&lth1>Header Content</h1>
}</pre>
You can render above defined section header on the content page as given below:
<pre>@RenderSection("header")</pre>
By default, sections are mandatory. To make sections optional, just provides the second parameter value as false, which is a Boolean value.
<pre>@RenderSection("header",false)</pre>
Note: A view can define only those sections that are referred to in the layout page otherwise an exception will be thrown.
</p>`),
        new qList(`What are differences among ViewData, ViewBag, TempData and Session?`,`<p>
In ASP.NET MVC there are three ways - ViewData, ViewBag and TempData to pass data from controller to view and in next request. Like WebForm, you can also use Session to persist data during a user session.
</p>
<p>
<b>ViewData </b> is a dictionary object that is derived from ViewDataDictionary class.</p>
public ViewDataDictionary ViewData { get; set; }
<ul>
<li>ViewData is used to pass data from controller to corresponding view.</li>
<li>Its life lies only during the current request</li>
<li>If redirection occurs then its value becomes null.</li>
<li>It’s required typecasting for getting data and check for null values to avoid error.</li>
</ul>
<p>
<b>ViewBag </b> is a dynamic property that takes advantage of the new dynamic features in C# 4.0.
public Object ViewBag { get;}
</p>
<ul>
<li>Basically it is a wrapper around the ViewData and also used to pass data from controller to corresponding view.</li>
<li>Its life also lies only during the current request.</li>
<li>If redirection occurs then its value becomes null.</li>
</ul>
It doesn’t required typecasting for getting data.
<img src="/assets/Images/viewData.JPG">
<p>
<b>TempData </b> is a dictionary object that is derived from TempDataDictionary class and stored in short lives session.
</p>
public TempDataDictionary TempData { get; set; }
<p>TempData is used to pass data from current request to subsequent request (means redirecting from one page to another.</p>
<ul>
<li>Its life is very short and lies only till the target view is fully loaded.</li>
</li>It’s required typecasting for getting data and check for null values to avoid error.</li>
<li>It’s used to store only one time messages like error messages, validation messages.</li>
</ul>

<p>
<b>Session </b> is an object that is derived from HttpSessionState class.
</p>
public HttpSessionState Session { get; }
Session is a property of HttpContext class.
<ul>
<li>Session is also used to pass data within the ASP.NET MVC application and Unlike TempData, it never expires.</li>
<li>Session is valid for all requests, not for a single redirect.</li>
<li>It’s also required typecasting for getting data and check for null values to avoid error.</li>
</ul>`),
new qList(`What are Action methods in ASP.NET MVC?`,`
<p>
Controller actions are methods defined in the controller class and responsible to perform required operations on the user's inputs like as form values, query strings values etc. with the help of Model and passing the results back to the View. Asp.net MVC has the following built-in ActionResults Type and Helper methods:
</p>
<p>
<b>1. ViewResult -</b>Returns a ViewResult which renders the specified or default view by using controller View() helper method.</p>

<p>
<b>2. PartialViewResult -</b>Returns a PartialViewResult which renders the specified or default partial view (means a view without its layout) by using controller PartialView() helper method.
</p>
<p>
<b>3. RedirectResult -</b>Returns a RedirectResult which Issues an HTTP 301 or 302 redirection to a specific URL by using controller Redirect() helper method.
</p>
<p>
<b>4. RedirectToRouteResult -</b>Returns a RedirectToRouteResult which Issues an HTTP 301 or 302 redirection to an action method or specific route entry by using controller RedirectToAction(), RedirectToActionPermanent(), RedirectToRoute(), RedirectToRoutePermanent() helper methods.
</p>
<p>
<b>5. ContentResult -</b>ReturnsReturns a ContentResult which renders raw text like as "Hello, DotNet Tricks!" by using controller Content() helper method.
</p>
<p>
<b>6. JsonResult -</b>Returns a JsonResult which serializes an object in JSON format ( like as "{ "Message": Hello, World! }") and renders it by using controller Json() helper method.
</p>
<p>
<b>7. JavaScriptResult -</b>Returns a JavaScriptResult which renders a snippet of JavaScript code like as "function hello() { alert(Hello, World!); }" by using controller JavaScript() helper method. This is used only in AJAX scenarios.
</p><p>
<b>8. FileResult -</b>Returns a FileResult which renders the contents of a file like as PDF, DOC, Excel etc. by using controller File() helper method.
</p><p>
<b>9. EmptyResult -</b>Returns no result returned by an action. This has no controller helper method.
</p><p>
<b>10. HttpNotFoundResult -</b>Returns an HttpNotFoundResult which renders a 404 HTTP Status Code response by using controller HttpNotFound() helper method.
</p>
<p>
<b>11. HttpUnauthorizedResult -</b>Returns an HttpUnauthorizedResult which renders a 401 HTTP Status Code (means "not authorized") response. This has no controller helper method. This is used for authentication (forms authentication or Windows authentication) to ask the user to log in.
</p>
<p>
<b>12. HttpStatusCodeResult -</b>Returns an HttpStatusCodeResult which renders a specified HTTP code response. This has no controller helper method.
</p>
`),
new qList(`How to make a Non-Action method in ASP.NET MVC?`,`<p>By default, the ASP.NET MVC framework treats all public methods of a controller class as action methods. If you do not want a public method to be an action method, you must mark that method with the NonActionAttribute attribute.
<pre>[NonAction]
public void DoSomething()
{
// Method logic
}</pre></p>`),
new qList(`Can you change action method name?`, `<p>You can also change action method name by using ActionName attribute. Now action method will be called by the name defined by the ActionName attribute.
<pre>[ActionName("DoAction")]
public ActionResult DoSomething()
{
//TODO:
return View();
}</pre></p>`),
new qList(`What is Data Annotations in ASP.NET MVC?`,`<p>
Data validation is a key aspect for developing web application. In Asp.net MVC, we can easily apply validation to web application by using Data Annotation attribute classes to model class. Data Annotation attribute classes are present in System.ComponentModel.DataAnnotations namespace and are available to Asp.net projects like Asp.net web application & website, Asp.net MVC, Web forms and also to Entity framework ORM models.
Data Annotations help us to define the rules to the model classes or properties for data validation and displaying suitable messages to end users.
</p>
<b>Data Annotation Validator Attributes</b>
<p>
<b>1. DataType -</b>Specify the datatype of a property</p>

<p>
<b>2. DisplayName -</b>specify the display name for a property.
</p>
<p>
<b>3. DisplayFormat -</b>specify the display format for a property like different format for Date property.
</p>
<p>
<b>4. Required -</b>Specify a property as required.
</p>
<p>
<b>5. ReqularExpression -</b>validate the value of a property by specified regular expression pattern.
</p>
<p>
<b>6. Range -</b>validate the value of a property within a specified range of values.
</p>
<p>
<b>7. StringLength -</b>specify min and max length for a string property.
</p><p>
<b>8. MaxLength -</b>specify max length for a string property.
</p><p>
<b>9. Bind -</b>specify fields to include or exclude when adding parameter or form values to model properties.
</p><p>
<b>10. ScaffoldColumn -</b>specify fields for hiding from editor forms.
</p>`),
new qList(`How to determine there is no error in Model State?`, `When server side model validation fails, errors are included in the ModelState.
Hence, by using ModelState.IsValid property you can verify model state. It returns true if there is no error in ModelState else returns false.
<pre>[HttpPost]
public ActionResult DoSomething(UserViewModel model)
{
if (ModelState.IsValid)
{
//TODO:
}
return View();
}</pre>`),
new qList(`What is Partial View in ASP.NET MVC?`, `<p>A partial view is like as user control in ASP.NET Web forms that is used for code re-usability. Partial views helps us to reduce code duplication. Hence partial views are reusable views like as Header and Footer views.
We can use partial view to display blog comments, product category, social bookmarks buttons, a dynamic ticker, calendar etc.
It is best practice to create partial view in the shared folder and partial view name is preceded by "_", but it is not mandatory. The "_" before view name specify that it is a reusable component i.e. partial view.</p>`),
        new qList(`What is the difference between “ActionResult” and “ViewResult” ?`,`
        <p>“ActionResult” is an abstract class while “ViewResult” is derived from “AbstractResult” class.  “ActionResult” has a number of derived classes like “JsonResult”, “FileStreamResult” and “ViewResult” .</p>
        <br><p>“ActionResult” is best if you are deriving different types of view dynamically.</p>`),
       new qList(`When to use _ViewStart?`, `<p>When a set of views shares common settings, the _ViewStart.cshtml file is a great place to put these common view settings. If any view needs to override any of the common settings then that view can set new values to common settings.</p>`),
       new qList(`What is App_Start folder in ASP.NET MVC?`, `<p>
App_Start folder has been introduced in MVC4. It contains various configurations files like as BundleConfig.cs, FilterConfig.cs, RouteConfig.cs, WebApiConfig.cs for your application. All these settings are registered within Application_Start method of Global.asax.cs file.
</p>
<p>
<b>BundleConfig.cs -</b>This is used to create and register bundles for CSS and JS files. By default, various bundles are added in this files including jQuery, jQueryUI, jQuery validation, Modernizr, and Site CSS.
</p>
<p>
<b>FIlterConfig.cs -</b>This is used to register global MVC filters like error filters, actions filters etc. By default it contains HandleErrorAttribute filter.
</p>
<p>
<b>RouteConfig.cs -</b>This is used to register various route patterns for your ASP.NET MVC application. By default, one route is registered here named as Default Route.
</p><p>
<b>WebApiConfig.cs -</b>This is used to register various WEB API routes like as ASP.NET MVC, as well as set any additional WEB API configuration settings.
</p>`),
new qList(`What are different ways of returning/rendering a view in ASP.NET MVC?`,`<p>
There are four different ways for returning/rendering a view in ASP.NET MVC as given below:
</p>
<p>
<b>1. Return View() -</b>This is used to create and register bundles for CSS and JS files. By default, various bundles are added in this files including jQuery, jQueryUI, jQuery validation, Modernizr, and Site CSS.</p>
<p>
<b>Return RedirectToAction() -</b>This tells MVC to redirect to specified action instead of rendering HTML. In this case, browser receives the redirect notification and make a new request for the specified action. This acts like as Response.Redirect() in ASP.NET WebForm.
</p>
<p>
<b>Return Redirect() -</b>This tells MVC to redirect to specified URL instead of rendering HTML. In this case, browser receives the redirect notification and make a new request for the specified URL. This also acts like as Response.Redirect() in ASP.NET WebForm. In this case, you have to specify the full URL to redirect.
</p><p>
<b>4.Return RedirectToRoute() -</b>This tells MVC to look up the specifies route into the Route table that is defined in global.asax and then redirect to that controller/action defined in that route. This also make a new request like RedirectToAction().
</p>`),
        new qList(`What is the difference between View and Partial View?`,`
        <b>View</b><br> <ul><li>It contains the layout page</li>
        <li>Before any view is rendered, viewstart page is rendered</li>
        <li>View might have markup tags like body, html, head, title, meta etc.</li>
        <li>View is not lightweight as compare to Partial View</li></ul>
        <br><br><b>Partial View</b><br><ul><li>It does not contain the layout page</li>
        <li>Partial view does not verify for a viewstart.cshtml. We cannot put common code for a partial view within the <b>viewStart.cshtml.page</b></li>
        <li>Partial view is designed specially to render within the view and just because of that it does not consist any mark up</li>
        <li>We can pass a regular view to the RenderPartial method</li></ul>`),      
        
        new qList(`Explain Bundle.Config in MVC?`,`
        <p>"BundleConfig.cs" in MVC is used to register the bundles by the bundling and minification system. Many bundles are added by default including jQuery libraries like - jquery.validate, Modernizr, and default CSS references.</p>`)
    ];
    public webAPI=[
        new qList(`What is Web API?`,`
        <p>ASP.NET Web API is a framework that simplifies building HTTP services for broader range of clients (including browsers as well as mobile devices) on top of .NET Framework. Using ASP.NET Web API we can create non-SOAP based services like plain XML or JSON strings etc. with many other advantages including:</p>
<ul>
<li>Create resource-oriented services using the full features of HTTP.</li>
<li><Exposing services to a variety of clients easily like browsers or mobile devices etc.</li>
</ul>
<img src="/assets/Images/ASP.NET-Web-API.png">`),
        new qList(`What is Representational state transfer or REST?`,`
        <p>REST is architectural style, which has defined guidelines for creating services which are scalable. REST used with HTTP protocol using its verbs GET, POST, PUT and DELETE.</p>`),
        new qList(`Explain Web API Routing?`,`
        <p>Routing is the mechanism of pattern matching as we have in MVC. These routes will get registered in Route Tables. Below is the sample route in Web API –</p>
        <br><pre>Routes.MapHttpRoute(
            Name: "MyFirstWebAPIRoute",
            routeTemplate: “api/{controller}/{id}
            defaults: new { id = RouteParameter.Optional
            }
            };
            </pre>`),
        new qList(`What are the advantages of Web API?`,`
        <p>Using ASP.NET Web API has a number of advantages, but core of the advantages are:</p>
<ul>
<li>It works the HTTP way using standard HTTP verbs like GET, POST, PUT, DELETE etc for all CRUD operations.</li>
<li>Complete support for routing.</li>
<li>Response generated in JSON or XML format using MediaTypeFormatter.</li>
<li>It has the ability to be hosted in IIS as well as self-host outside of IIS.</li>
<li>Supports Model binding and Validation.</li>
<li>Support for OData.</li?
</ul>`),
       
        new qList(`How to Return View from ASP.NET Web API Method?`,`
        <p>No, we can't return view from ASP.NET Web API method. We discussed in the earlier interview question about the difference between ASP.NET MVC and Web API that ASP.NET Web API creates HTTP services that renders raw data. <br>Although, it's quite possible in ASP.NET MVC application.<p>`),
        new qList(`Can we use Web API with ASP.NET Web Form?`,`
        <p>Yes, ASP.NET Web API is bundled with ASP.NET MVC framework but still it can be used with ASP.NET Web Form.</p>
        <p>It can be done in three simple steps as follows:</p> <ul><li>Create a Web API Controller<li><br>
        <li>Add a routing table to Application_Start method of Global.asax<li><br>
        <li>Make a jQuery AJAX Call to Web API method and get data<li></ul>`),
        new qList(`What are Exception Filters?`,`
        <p>Exception filters will be executed when some of the exceptions are unhandled and thrown from a controller method. The reason for the exception may be anything. Exception filters will implement "IExceptionFilter" interface.</p>`),
        new qList(`What is Attribute Routing in ASP.NET Web API 2.0?`,`
        <p>ASP.NET Web API v2 now support “Attribute Routing” along with convention-based approach. In convention-based routes, the route templates are already defined as follows:</p>
        <pre>Config.Routes.MapHttpRoute(
        name: "DefaultApi",
        routeTemplate: "api/{Controller}/{id}",
        defaults: new { id = RouteParameter.Optional }
        );
        </pre>
        <p>So, any incoming request is matched against already defined routeTemplate and further routed to matched controller action. But it’s really hard to support certain URI patterns using conventional routing approach like nested routes on same controller. For example, authors have books or customers have orders, students have courses etc.</p>
        <p>Such patterns can be defined using attribute routing i.e. adding an attribute to controller action as follows:</p>
        <pre>
        => books/1/authors

[Route("books/{bookId}/authors")]
public IEnumerable<Author> GetAuthorsByBook(int bookId) { ..... }
</pre>
<pre>
=> customers/1/orders

[Route("customers/{customerId}/orders")]
public IEnumerable<Order> GetOrdersByCustomer(int customerId) { ..... }
</pre>
<pre>
=> students/1/courses  

[Route("students/{studentId}/courses")]
public IEnumerable<Course> GetCoursesByStudent(int studentId) { ..... }</pre>
`),
new qList(`Explain CORS(Cross-Origin Resource Sharing)?`,`ASP.NET WebAPI is a trending technology in today’s world. Everyone tries to access the service through AJAX requests on the server side. The problem is when a WebAPI is hosted and the other applications on different domains try to access the WebAPI through a request. Here, enabling CORS plays a vital role in WebAPI.<p>CORS (Cross-origin resource sharing) is a technique that allows restricted resources on a web page to be requested from another domain outside the domain of which the first resource was served. A web page may freely attach cross-origin images, scripts, stylesheets, iframes, and videos. The same-origin security policy by default does not allow certain “cross-domain” requests, notably Ajax requests.</p>`),
        new qList(`WCF RESTful Service Vs ASP.NET Web API?`,`<b>WCF REST</b>
<ul>
<li>Microsoft introduced “WebHttpBinding” to be used for creating WCF RESTful Services.</li>
<li>HTTP Methods are mapped to attributes, for example, “WebGet” for GET method and “WebInvoke” for POST.</li>
</ul>

<b>ASP.NET Web API</b>
<ul>
<li>As compared with WCF REST, Web API supports full features of HTTP.</li>
<li>Its possible to host Web API in IIS as well as in an application.</li>
</ul>`),
new qList(`Is it true that ASP.NET Web API has replaced WCF?`,`It’s a misconception that ASP.NET Web API has replaced WCF. It’s another way of building non-SOAP based services, for example, plain XML or JSON string etc.
Yes, it has some added advantages like utilizing full features of HTTP and reaching more clients such as mobile devices etc.<p>But WCF is still a good choice for following scenarios:</p>
<ul>
<li>If we intended to use transport other than HTTP e.g. TCP, UDP or Named Pipes.</li>
<li>Messag Queuing scenario using MSMQ.</li>
<li>One-way communication or Duplex communication</li>
</ul>`),
new qList(`How to return View from ASP.NET Web API method?`,`(A tricky Interview Question) No, we can’t return view from ASP.NET Web API Method. As we discussed in earlier interview question about difference between ASP.NET MVC and Web API that ASP.NET Web API creates HTTP services that renders raw data. Although, it’s quite possible in ASP.NET MVC application.`),
new qList(`Write a code snippet for passing arraylist in Web API?`,`Below is the code snippet for passing arraylist –<pre>
ArrayList paramList = new ArrayList();

Category c = new Category { CategoryId = 1, CategoryName = "SmartPhones"};
Product p = new Product { ProductId = 1, Name = "Iphone", Price = 500, CategoryID = 1 };
 
paramList.Add(c);
paramList.Add(p);
</pre>`),
new qList(`How we can handle errors in Web API?`,`Below are the list of classes which can be used for error handling -<ul>
<li>HttpResponseException</li>
<li>Exception Filters</li>
<li>Registering Exception Filters</li>
<li>HttpError</li>
</ul>`),
new qList(`Explain how we can handle error from “HttpResponseException”?`,`This returns the HTTP status code what you specify in the constructor. Eg :<pre>
public TestClass MyTestAction(int id)
{
 TestClass c = repository.Get(id);
 if (c == null)
 {
 throw new HttpResponseException(HttpStatusCode.NotFound);
 }
 return c;
}
</pre>`),
new qList(`How to register Web API exception filters?`,`Below are the options to register Web API exception filters –<ul>
<li>From Action</li>
<li>From Controller</li>
<li>Global registration</li>
</ul>`),
new qList(`Write a code snippet to register exception filters from action?`,`Below is the code snippet for registering exception filters from action –
<pre>
[NotImplExceptionFilter]
public TestCustomer GetMyTestCustomer(int custid)
{
 //Your code goes here
}
</pre>`),
new qList(`Write a code snippet to register exception filters globally?`,`Below is the code snippet for registering exception filters globally –<pre>
GlobalConfiguration.Configuration.Filters
.Add( new MyTestCustomerStore.NotImplExceptionFilterAttribute());
</pre>`),
new qList(`Explain ASP.NET Identity?`,`This is the new membership system for ASP.NET. This allows to add features of login in our application.<p>Below are the list of features supported by ASP.NET Identity in Web API –</p>
<ul><li>One ASP.NET Identity System</li><li>Persistence Control</li></ul>`),
new qList(`Why to use “FromUri” in Web API?`,`In Web API to read complex types from URL we will use “FromUri” attribute to the parameter in action method. Eg:
<pre>
public MyValuesController : ApiController
{
 public HttpResponseMessage Get([FromUri] MyCustomer c) { ... }
}
</pre>`),
new qList(`Why to use “FromBody” in Web API?`,`This attribute is used to force Web API to read the simple type from message body. “FromBody” attribute is along with parameter. Eg:
<pre>
public HttpResponseMessage Post([FromBody] int customerid,
 [FromBody] string customername) { ... }</pre>
`),
new qList(`What is the Advantages of Token Based Authentication?`,`<p>
A token is a piece of data which is created by a server, and which contains enough data to identify a particular user. The process starts by allowing users to enter their username and password which accessing a service. Once the user provides the username/password, a token is issued which allows users to fetch a specific resource - without using their username and password every time. This token is sent to the server with each request made by the client and contains all necessary information to validate a user’s request. The following diagram explains how Token-Based authentication is used in communication between clients and server.</p>
<img src="/assets/Images/token-based-auth-working.png">
<b>Advantages of Token Based Authentication</b>
<ul>
<li>The client application is not dependent on a specific authentication mechanism. The token is generated by the server and the Web API have some APIs to understand, validate the token and perform the authentication. This approach provides Loose Coupling between client and the Web API.</li>
<li>Maintaining cookies in native mobile applications is not an easy task. Using token based authentication, we can now provide support for mobile applications with much ease.</li>
</ul>`),
        new qList(`What is ASP.NET Web API OData?`,`
        <p>The Open Data Protocol (OData) is a data access protocol created for the web. OData gives a consistent procedure to query and manipulates data sets via CRUD operations (Create, Retrieve, Update, and Delete). ASP.NET web API supports each of the v3 and v4 protocol.</p>`),
        new qList(`Differences between WCF and Web API?`,`
        <p><b>WCF </b></p>
        <ul><li>WCF is a framework used for buil/develop service oriented applications. </li><br>
        <li>WCF can be consumed by clients which can understand XML. </li><br>
        <li>WCF supports wide range of protocols like HTTP, TCP, Named Pipes and more.</li><br>
        <li>For each method there has to be attributes like – “WebGet” and “WebInvoke”</li><br>
        <li>For REST service we need to use attribute “WebInvoke”.</li></ul><br>
        <b>Web API:</b><br>
        <ul><li>Web API is a framework used to build/develop HTTP based services.</li><br>
        <li>Web API is an open source platform.</li><br>
        <li>It supports only HTTP protocol.</li><br>
        <li>Web API can be hosted in IIS or in application.</li><br>
        <li>his returns XML or JSON to client.</li></ul>`)

    ];
    public Linq=[
        new qList(`What is LINQ and why to use it?`,`<p>LINQ stands for "Language Integrated Query" and pronounced as "LINK". LINQ was introduced with .NET Framework 3.5 including Visual Studio 2008, C# 3.0 and VB.NET 2008 (VB 9.0). It enables you to query the data from the various data sources like SQL databases, XML documents, ADO.NET Datasets, Web services and any other objects such as Collections, Generics etc. 
        by using a SQL Query like syntax with .NET framework languages like C# and VB.NET.</p><p>LINQ has full type checking at compile-time and IntelliSense support in Visual Studio, since it used the .NET framework languages like C# and VB.NET. This powerful feature helps you to avoid run-time errors.
        </p><p>LINQ also provides a uniform programming model (i.e. common query syntax) to query various data sources. Hence you don’t need to learn the different ways to query different data sources.</p>`),
        new qList(`What are advantages & disadvantages of LINQ?`,`<b>There are following advantages of using LINQ:</b>

<ul>
<li>It provides a uniform programming model (i.e. common query syntax) to query data sources (like SQL databases, XML documents, ADO.NET Datasets, Various Web services and any other objects such as Collections, Generics etc.)</li>
<li>It has full type checking at compile-time and IntelliSense support in Visual Studio. This powerful feature helps you to avoid run-time errors.</li>
<li>It supports various powerful features like filtering, ordering and grouping with minimum code.</li>
<li>Its Query can be reused.</li>
<li>It also allows debugging through .NET debugger.</li>
</ul>

<b>There are following disadvantages of using LINQ:</b>

<ul>
<li>LINQ is not good to write complex queries like SQL.</li>
<li>LINQ doesn’t take the full advantage of SQL features like cached execution plan for stored procedure.</li>
<li>Performance is degraded if you don't write the LINQ query correctly.</li>
<li>If you have done some changes in your query, you have to recompile it and redeploy its dll to the server.</li>
</ul>`),
new qList(`What are different methods to write LINQ Query?`,`<p>
Data Annotations help us to define the rules to the model classes or properties for data validation and displaying suitable messages to end users.
</p>
<b>1. Query Expression (Query Syntax)</b>

<p>Query expression syntax is like as SQL query syntax with just a few minor deviations. The result of a query expression is a query object, which is usually a collection of type IEnumerable<T> or IQueryable<T>. This syntax is easy to read and write and at compile time, query expression is converted into Method Invocation.</p>
<b>Query Expression Syntax:</b>
<pre>
List&ltint> numbers = new List&ltint>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
// Query based syntax
IEnumerable&ltint> query =
from num in numbers
where num &gt 5 && num&lt 10
select num; //result: 6,7,8,9
</pre>
<b>2. Method Invocation (Method Syntax)</b>
<p>
Method syntax is complex as compared to Query expression since it uses lambda expression to write LINQ query. It is easily understood by .NET CLR. Hence at compile time, Query expression is converted into Method Invocation. The result of a Method syntax is also a query object, which is usually a collection of type IEnumerable<T> or IQueryable<T>.

</p>
<b>Method Invocation Example:</b>
<pre>
// Datasource
List&ltint> numbers = new List&ltint>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
// Method based syntax
IEnumerable&ltint> query = numbers.Where(num => num > 5 && num < 10);
//result: 6,7,8,9
</pre>
<b>3. Mixed Syntax</b>
<p>You can use a mixture of both syntax by enclosing a query expression inside parentheses and make a call to method.</p>
<pre>
// Datasource
List&ltint> numbers = new List&ltint>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
// Mixed syntax
int query = (from num in numbers
where num > 5 && num < 10
select num).Count();
//result: 4
Note: There are no semantic differences (in terms of performance, execution) between Query Syntax and Method Syntax.
</pre>`),
new qList(`What is difference between IEnumerable and IQueryable?`,`<p>There are following differences between ADO.NET and Entity Framework:</p>
<table border="1">
<tr>
<th>IEnumerable</th>
<th>IQueryable</th>
</tr>
<tr>
<td><p>Exists in System.Collections Namespace</p></td>
<td><p>Exists in System.Linq Namespace</p></td>
</tr>
<tr>

<tr>
<td><p>Best to query data from in-memory collections like List, Array etc.</p></td>
<td><p>Best to query data from out-memory (like remote database, service) collections.</p>
</tr>
</table>`) ,
new qList(`What is difference between ADO.NET and LINQ to SQL?`,`<p>There are following differences between ADO.NET and Entity Framework:</p>
<table border="1">
<tr>
<th>ADO.NET</th>
<th>LINQ to SQL</th>
</tr>
<tr>
<td><p>It is a part of .NET Framework since .NET Framework 1.0</p></td>
<td><p>It is a part of .NET Framework since .NET Framework 3.5</p></td>
</tr>
<tr>

<tr>
<td><p>SqlConnection/OleDbConnection is used for database connectivity.</p></td>
<td><p>We can use context for database connectivity.</p>
</tr>
<tr>
<td><p>Difficult to debug and cause syntax errors at run-time.</p></td>
<td><p>Easy to debug and cause syntax errors at compile-time.</p>
</tr>
<tr>
<td><p>It has full type checking at run-time and no IntelliSense support in Visual Studio, since it used the T-SQL to query the database.</p></td>
<td><p>It has full type checking at compile-time and IntelliSense support in Visual Studio, since it used the .NET Framework languages like C# and VB.</p>
</tr>
<tr>
<td><p>It used T-SQL to query the data to query the database and some other syntax for querying the other data source.</p></td>
<td><p>It used LINQ to query the data which provides the uniform programming model (means common query syntax) to query the various data sources.</p>
</tr>

</table>`),
new qList(`What is difference between LINQ and Stored Procedures?`, `<p>There are the following differences between LINQ and Stored Procedures.</p>

<ul>
<li>Stored procedures are faster as compared to LINQ query since they have a predictable execution plan and can take the full advantage of SQL features. Hence, when a stored procedure is being executed next time, the database used the cached execution plan to execute that stored procedure.</li>
<li>LINQ has full type checking at compile-time and IntelliSense support in Visual Studio as compared to stored procedure. This powerful feature helps you to avoid run-time errors.</li>
<li>LINQ allows debugging through .NET debugger as compared to stored procedure.</li>
<li>LINQ also supports various .NET framework features like multi –threading as compared to stored procedures.</li>
<li>LINQ provides the uniform programming model (means common query syntax) to query the multiple databases while you need to re-write the stored procedure for different databases.</li>
<li>Stored procedure is a best way for writing complex queries as compared to LINQ.</li>
<li>Deploying LINQ based application is much easy and simple as compared to stored procedures based. Since in case of stored procedures, you need to provide a SQL script for deployment but in case of LINQ everything gets complied into the DLLs. Hence you need to deploy only DLLs.</li>

</ul>`),
        
        new qList(`Explain what is lambda expressions in LINQ?`,`<p>
The concept of lambda expression was introduced in C# 3.0. Typically, lambda expression is a more concise syntax of anonymous method. It is just a new way to write anonymous method. At compile time all the lambda expressions are converted into anonymous methods according to lambda expression conversion rules. The left side of the lambda operator "=>" represents the arguments of anonymous method and the right side represents the method body.
</p>
<b>Lambda expression Syntax</b>

<p>(Input-parameters) => expression-or-statement-block</p>
<b>Types of Lambda expression</b>

<p>
<b>1. Statement Lambda -</b> Statement lambda has a statement block on the right side of the lambda operator "=>". <pre>x => { return x * x; };</pre>
</p>

<p>
<b>2. Expression Lambda -</b> Expression lambda has only an expression (no return statement or curly braces), on the right side of the lambda operator "=>".
x => x * x; // here x*x is expression Like - del d2 = (x, y) => { return x * y; };
</p>`),
new qList(`What is difference among Single, SingleOrDefault, First and FirstOrDefault?`,`<p>
<b>Single -</b> It returns a single specific element from a collection of elements if element match found. An exception is thrown, if none or more than one match found for that element in the collection.
</p>

<p>
<b>SingleOrDefault - </b>It returns a single specific element from a collection of elements if element match found. An exception is thrown, if more than one match found for that element in the collection. A default value is returned, if no match is found for that element in the collection.
</p>

<p>
<b>First -</b> It returns first specific element from a collection of elements if one or more than one match found for that element. An exception is thrown, if no match is found for that element in the collection.
</p>

<p>
<b>FirstOrDefault -</b> It returns first specific element from a collection of elements if one or more than one match found for that element. A default value is returned, if no match is found for that element in the collection.
</p>`),
new qList(`Which one is fast between SingleOrDefault and FirstOrDefault?`, `<p>FirstOrDefault usually perform faster as compared SingleOrDefault, since these iterate the collection until they find the first match. While SingleOrDefault iterate the whole collection to find one single match.</p>`),
new qList(`What are advantages of using LINQ on DataSet?`, `<p>LINQ to DataSet is useful to run strongly typed queries on multiple datasets. SQL query is able to populate the dataset from the database but not able to retrieve a particular value from the dataset. LINQ is the best way to do further data manipulation operations (like searching, filtering, sorting) on Dataset in an efficient way.</p>`),
        new qList(`Explain how LINQ with databases can be used?`,`<p>LINQ supports XML, SQL, Dataset and Objects. Through LINQ to objects or LINQ to Datasets one can use LINQ with other databases.<br><br> The objects and datasets take care of database particular operations, and LINQ only needs to deal with those objects and not the database operations directly</p>`),
        new qList(`Mention what is the role of DataContext classes in LINQ?`,`<p>Data context class is a LINQ to SQL class that acts as a medium between a SQL server database and LINQ to SQL entities classes mapped to that database. It has following responsibilities:</p>

<ul>
<li>Contains the connection string information, methods to connect to the database and manipulating the data in the database.</li>
<li>Contains several methods that send updated data from LINQ to SQL entity classes to the database.</li>
<li>Methods can also be mapped to stored procedures and functions.</li>
<li>With data context, we can perform select, insert, update and delete operations over the data in the database.</li>
</ul>`),
        new qList(`Explain what are LINQ query expressions?`,`<p>Query expression is nothing but an LINQ query. It is a combination of query clauses that identifies the data sources for a query. It contains information for sorting, filtering, grouping or joining to apply to the source data. It determines what information should be retrieved from the data source.CV.</p>`),
        new qList(`Explain what are compiled queries?`,`<p>In compiled LINQ queries, the plan is cached in a static class and static class is a global cache. Rather than preparing the query plan from scratch, LINQ prepares plan using stating class object.</p>`),
        new qList(`Explain how standard query operators useful in LINQ?`,`<p>Standard Query Operators useful in LINQ are:-</p>
        <ul><li>Get a total count of elements in the collection</li><br>
        <li>Order the results of a collection</li><br>
        <li>Grouping</li><br>
        <li>Computing average</li><br>
        <li>Joining two collections based on matching keys</li></ul>`),
        new qList(`Explain what is the purpose of LINQ providers in LINQ?`,`<p>LINQ providers are set of classes that take an LINQ query which generates method that executes an equivalent query against a particular data source</p>`),
        new qList(`Explain how you can retrieve a single row with LINQ?`,`<p>To retrieve a single row with LINQ we need</p>
        <pre>Public User GetUser (string userName)
            {
            DBNameDataContext myDB = new DBNameDataContext ( ) ;
            User user = myDB. Users. Single ( u, u.UserName => userName );
            Return user;
            }
            </pre>`),
        new qList(`LINQ query is executed in which statement?`,`<p>In VB, an LINQ query is executed in the For Each Statement, and in the foreach statement for C#.</p>`),
        new qList(`Explain what is “LINQ to Objects”?`,`<p>When LINQ queries any IEnumerable(Of T) collection or IEnumerable directly without the use of an intermediate LINQ provider or API such as LINQ to SQL or LINQ to XML is referred as “LINQ to Objects.”</p>`),
        new qList(`Explain how you can differentiate between Conversion Operator “ToDictionary” and “IEnumerable” of LINQ?`,`<p>To solve the conversion type problems “IEnumerable” and “ToDictionary” conversion operator are used.</p>
        <p>“ToDictionary” conversion operator is the instance of Dictionary (k, T). The “keySelector” predicate recognizes the key of each item, while “elementSelector”, is used to extract each single item, if it is given.</p>
        <p>Extension method on “IEnumerable” is.AsEnumerable. AsEnumerable simply returns the source sequence as an object of type IEnumerable <T>.</p>`),
        new qList(`What is the difference between First() and FirstOrDefault() selector methods in LINQ?`,`<p>First() always expects at least one element in result set, if there isn't any element is result, then First() returns an exception. While FirstOrDefault() is fine with a result set having 0 elements, it does not throw any exception</p>`),
        new qList(`What are the benefits of LINQ on dataset?`,`<p>Quick turn around for development Queries can be dynamically Tables are automatically created into class Columns are automatically created into properties Relationship are automatically appeaded to classes Lambda expressions are awesome Data is easy to setup and use.</p>`),
        new qList(`What are the advantages of LINQ over stored procedure?`,`<p><b>Debugging –</b> LINQ supports .Net debugger, so we can easily debug a LINQ query using .NET debugger but it is not supported by SQL stored procedure so it is hard to debug the stored procedure</p>
        <p><b>Deployment –</b> To deploy stored procedure it is necessary to write one more script to run them, while LINQ will complie by a single DLL statement and so the deployment will be simple. </p>
        <p><b>Type Safety -</b> As LINQ supports type safety so errors can be type checked in LINQ queries in compile time. It is better to use LINQ as it enable us to identify the errors while compilation rather than runtime execution.</p>`)
    ];
     public SqlQueries=[
        new qList(`How to change database, Table, Colum name ?`,`<b>database</b><p>Sp_renameDB ‘oldDB’ , ‘NewDB’</p>
        <b>Table</b><p>Sp_rename ‘oldTableName’, ‘newTableName’</p>
        <b>Column</b> <p>Sp_rename ‘oldColumnName’ , ‘NewColumnName’, ‘Column’</p>`),
        new qList(`How to find duplicate records from column?`,`<p>with tempEmp as(select [Name], row_number() over (PARTITION By Name order by Name) as [rn] from EMPLOYEE)
select * from tempEmp</p>`),
         new qList(`How to Delete duplicate records from column?`,`<p>with tempEmp as(select [Name], row_number() over (PARTITION By Name order by Name) as [rn] from EMPLOYEE)
delete tempEmp where [rn]>1</p>`),
        new qList(`How to check all existing table in the database ?`,`<b>Query :</b><p>Select * from sys.tables</pre><b>Notes :</b>
        <p>Select * from sys.view => use for displaying all the view in the database</p>
        <p>Select * from sys.procedure => it will display all the procedure which we used in the database.</p>`),
        new qList(`How to replace NULL value to default value ?`,`<b>Query :</b><p>Select Name, ISNULL(ManagerName, ‘No Manager’) from Employee;</p>`),
        new qList(`Please write the query for establishing foreign key primary key relation ?`,`<b>Query :</b><p>Alter table [TableName] add constraint 
        fkforeignKeyName Foreign key(EmployeeID) references Department(EmployeeID)</p>`),
        new qList(`How to find 2nd higher salary in employee table ?`,`<b>Query :</b><p>SELECT MAX (Salary) FROM Employee WHERE Salary NOT IN 
        (SELECT MAX(Salary) FROM Employee )</p>`),
        new qList(`How to FIND N'th higher salary in employee table?`,`<p>select salary(select salary,row_number() over (order by salary desc) as rownum from EMPLOYEE) tempEmp where rownum=3</p><p><b>Note :</b> rownum represent of N'th higher salary, which you want to display the number of records, like : rownum =3/4/5/6</p>`),
        new qList(`How to FIND N'th Lowest salary in employee table?`,`<p>select salary(select salary,row_number() over (order by salary asc) as rownum from EMPLOYEE) tempEmp where rownum=3</p><p><b>Note :</b> rownum represent of N'th lowest salary, which you want to display the number of records, like : rownum =3/4/5/6</p>`),
        new qList(`Write the query for add new column in table ?`,`<b>Query :</b><p>Alter table Employee add salary int</p>`),
        new qList(`Select first 3 characters of FIRST_NAME from EMPLOYEE`,`<b>Query :</b><p>select substring(FIRST_NAME,1,3) from employee</p>`),
        new qList(`Write a SQL query to find the products which does not have sales at all?`,`<b>Query :</b><p>SELECT P.PRODUCT_NAME FROM PRODUCTS P WHERE P.PRODUCT_ID NOT IN (SELECT DISTINCT PRODUCT_ID FROM SALES);</p>`),
        new qList(`Select TOP N salary from employee table`,`<b>Query :</b><p>select top (2) * from emp</p>`),
        new qList(`Get First_Name from employee table after replacing 'o' with '$'`,`<b>Query :</b><p>select REPLACE(FIRST_NAME,'o','$') from employee</p>`),
        new qList(`Get employee details from employee table whose first name starts with 'J'`,`<b>Query :</b><p>Select * from EMPLOYEE where FIRST_NAME like 'J%'</p>`),
        new qList(`Get employee details from employee table whose Salary greater than 600000`,`<b>Query :</b><p>Select * from EMPLOYEE where Salary > 600000</p>`),
        new qList(`Get employee details from employee table whose Salary between 500000 and 800000`,`<b>Query :</b><p>Select * from EMPLOYEE where Salary between 500000 and 800000</p>`),
        new qList(`Get department,total salary with respect to a department from employee table.`,`<b>Query :</b><p>Select DEPARTMENT,sum(SALARY) Total_Salary from employee group by department</p>`),
        new qList(`How can we get count of the number of records in a table?`,`<b>Query :</b><p>Select count(*) from tablename</p>`),
   

    ];
     public EF=[
         new qList(`What is Entity Framework?`,`<p>ADO.NET entity is an ORM (object relational mapping) which creates a higher abstract object model over ADO.NET components. So rather than getting into dataset, datatables, command, and connection objects , you work on higher level domain objects like customers, suppliers, etc.</p>`),
         new qList(`What are the benefits of using EF?`,`<p>The main and the only benefit of EF is it auto-generates code for the Model (middle layer), Data Access Layer, and mapping code, thus reducing a lot of development time.</p>`),
         new qList(`What is the importance of EDMX file in Entity Framework?`,`<p>EDMX (Entity Data Model XML) is an XML file which contains all the mapping details of how your objects map with SQL tables. The EDMX file is further divided into three sections: CSDL, SSDL, and MSL.</p> <img src="/assets/Images/a3.jpg"></img>`),
         new qList(`What are T4 templates?`,`<p>T4 (Text Template Transformation Toolkit) is a template based code generation engine. You can go and write C# code in T4 templates (.tt is the extension) files and those C# codes execute to generate the file as per the written C# logic.</p><pre><#@ template language=""C#"" #>
      Hello <# Write("World!") #> 
     </pre><br><b>Will generate the following C# output:</b><br><pre>Hello
      World !
      </pre>`),
      new qList(`How can we read records using Entity Framework classes?`,`<p>In order to browse through records you can create the object of the context class and inside the context class you will get the records.
    For instance, in the below code snippet we are looping through a customer object collection. This customer collection is the output given by the context class CustomermytextEntities.
     </p><pre>CustomermytestEntities obj = new CustomermytestEntities();
    foreach (Customer objCust in obj.Customers)
    {}
    </pre>`),
    new qList(`People say Entity Framework runs slow`,`<p>By default EF has lazy loading behavior. Due to this default behavior if you are loading a large number of records and especially if they have foreign key relationships, you can have performance issues. So you need to be cautious if you really need lazy loading behavior for all scenarios. For better performance, disable lazy loading when you are loading a large number of records or use stored procedures.</p>`),
    new qList(`Can you explain lazy loading in a detailed manner?`,`<p>Lazy loading is a concept where we load objects on demand rather than loading everything in one go. Consider a situation where you have 1 to many relationships between the Customer and Address objects. Now let’s say you are browsing the customer data but you do not want address data to be loaded at that moment. But the time you start accessing the address object you would like to load address data from the database.</p>
    <pre>MyEntities context = new MyEntities();

var Customers = context.Customers.ToList();

foreach (Customercust in Customers) // In this line no address object loaded
{
     foreach(Address add in cust.Addresses){}// Address object is loaded here
}
   </pre>`),
   new qList(`What is Code First approach in Entity Framework?`,`<p>In Code First approach we avoid working with the Visual Designer of Entity Framework. In other words the EDMX file is excluded from the solution. So you now have complete control over the context class as well as the entity classes.</p>`),
   new qList(`How can we do pessimistic locking in Entity Framework?`,`<p>We cannot do pessimistic locking using Entity Framework. You can invoke a stored procedure from Entity Framework and do pessimistic locking by setting the isolation level in the stored procedure. But directly, Entity Framework does not support pessimistic locking.</p>`),
   new qList(`What are complex types in Entity Framework?`,`<p>There can be situations where you have common properties across entities. For example, consider the below figure where we have Customer and Supplier entities. They have three fields in common: Address1, Address2, and PhoneNo. These fields have been duplicated both in the Customer and Supplier entities.</p>
  <p>So to remove these duplicate and redundant fields, we can move them to a common complex type called Address. Complex types group common fields so that they can be reused across entities.<img src="/assets/Images/a11.jpg"></img></p>`),
   new qList(`What’s the difference between LINQ to SQL and Entity Framework?`,`<ul><li>LINQ to SQL is good for rapid development with SQL Server. EF is for enterprise scenarios and works with SQL Server as well as other databases</li>
   <li>LINQ maps directly to tables. One LINQ entity class maps to one table. EF has a conceptual model and that conceptual model maps to the storage model via mappings. So one EF class can map to multiple tables, or one table can map to multiple classes.</li>
   <li>LINQ is more targeted towards rapid development while EF is for enterprise level where the need is to develop a loosely coupled framework.</li></ul>`),
   new qList(`In POCO classes do we need EDMX files?`,`<p>Yes, you will still need EDMX files because the context object reads the EDMX files to do the mapping.</p>`),
   new qList(`How can we turn off lazy loading?`,`<p>The opposite of lazy loading is eager loading. In eager loading we load the objects beforehand. So the first thing is we need to disable lazy loading by setting <b>LazyLoadingEnabled to false.<b> </p>
   <pre>context.ContextOptions.LazyLoadingEnabled = false;</pre><br><p>Now we have to explicitly tell EF what objects we want to load by using the include function. Below is a simple sample code where we tell EF to load customer as well as address objects by using the include function.</p>
   <p>Now the customer object and the related address objects will be loaded in one query rather than multiple queries.</p><pre>var employees = context.Customers.Include("Addresses").Take(5);</pre>`)
        
    ];

    public oops=[
        new qList(`What is OOPS?`,`<p>OOPS is abbreviated as Object Oriented Programming system in which programs are considered as a collection of objects. Each object is nothing but an instance of a class.</p>`),
        new qList(`Write basic concepts of OOPS?`,`<pFollowing are the concepts of OOPS and are as follows:.</p><ol><li>Abstraction.</li><li>Encapsulation.</li><li>Inheritance.</li><li>Polymorphism.</li></ol>`),
        new qList(`What is a class?`,`<p>A class is simply a representation of a type of object. It is the blueprint/ plan/ template that describe the details of an object.</p>`),
        new qList(`What is an object?`,`<p>Object is termed as an instance of a class, and it has its own state, behavior and identity.</p>`),
        new qList(`What is Encapsulation?`,`<p>Encapsulation is an attribute of an object, and it contains all data which is hidden. That hidden data can be restricted to the members of that class.</p><p>Levels are Public,Protected, Private, Internal and Protected Internal.</p>`),
        new qList(` What is Polymorphism?`,`Polymorphism is nothing butassigning behavior or value in a subclass to something that was already declared in the main class. Simply, polymorphism takes more than one form.`),
        new qList(`What is Inheritance?`,`Inheritance is a concept where one class shares the structure and behavior defined in another class. Ifinheritance applied on one class is called Single Inheritance, and if it depends on multiple classes, then it is called multiple Inheritance.`),
        new qList(`What are manipulators?`,`Manipulators are the functions which can be used in conjunction with the insertion (<<) and extraction (>>) operators on an object. Examples are endl and setw.`),
        new qList(`Define a constructor?`,`Constructor is a method used to initialize the state of an object, and it gets invoked at the time of object creation. Rules forconstructor are:.<ul><li>Constructor Name should be same asclass name.</li><li>Constructor must have no return type.</li></ul>`),
        new qList(`Define Destructor?`,`Destructor is a method which is automatically called when the object ismade ofscope or destroyed. Destructor name is also same asclass name but with the tilde symbol before the name.`),
        new qList(`What is Inline function?`,`Inline function is a technique used by the compilers and instructs to insert complete body of the function wherever that function is used in the program source code.`),
        new qList(`What is a virtual function?`,`Virtual function is a member function ofclass and its functionality can be overridden in its derived class. This function can be implemented by using a keyword called virtual, and it can be given during function declaration.<p>Virtual function can be achieved in C++, and it can be achieved in C Languageby using function pointers or pointers to function.</p>`),

        new qList(`What is friend function?`,`Friend function is a friend of a class that is allowed to access to Public, private or protected data in that same class. If the function is defined outside the class cannot access such information.

<p>Friend can be declared anywhere in the class declaration, and it cannot be affected by access control keywords like private, public or protected.</p>`),
        new qList(`What is function overloading?`,`Function overloading is defined as a normal function, but it has the ability to perform different tasks. It allowscreation of several methods with the same name which differ from each other by type of input and output of the function.
        <b>Example</b>
        <pre>void add(int& a, int& b);
void add(double& a, double& b);
void add(struct bob& a, struct bob& b);</pre>`),
        new qList(`What is operator overloading?`,`Operator overloading is a function where different operators are applied and depends on the arguments. Operator,-,* can be used to pass through the function , and it has their own precedence to execute.
        <b>Example</b>
        <pre>
        class complex { 
double real, 
imag; public: complex(double r, double i) : real(r), 
imag(i) {} complex operator+(complex a, complex b); 
complex operator*(complex a, complex b); 
complex& operator=(complex a, complex b);
}
</pre>
Output : a=1.2, b=6
        `),
        new qList(`What is an abstract class?`,`An abstract class is a class which cannot be instantiated. Creation of an object is not possible with abstract class , but it can be inherited. An abstract class can contain only Abstract method. Java allows only abstract method in abstract class while for other language it allows non-abstract method as well.`),
        new qList(`What is a ternary operator?`,`Ternary operator is said to be an operator which takes three arguments. Arguments and results are of different data types , and it is depends on the function. Ternary operator is also called asconditional operator.`),

        new qList(`What is the use of finalize method?`,`Finalize method helps to perform cleanup operations on the resources which are not currently used. Finalize method is protected , and it is accessible only through this class or by a derived class.`),
        new qList(`What are different types of arguments?`,`A parameter is a variable used during the declaration of the function or subroutine and arguments are passed to the function , and it should match with the parameter defined. There are two types of Arguments.<ul>
<li>Call by Value – Value passed will get modified only inside the function , and it returns the same value whatever it is passed it into the function.</li>
<li>Call by Reference – Value passed will get modified in both inside and outside the functions and it returns the same or different value.</li>
<ul>`),
        new qList(`What is super keyword?`,`Super keyword is used to invoke overridden method which overrides one of its superclass methods. This keyword allows to access overridden methods and also to access hidden members of the superclass.<p>It also forwards a call from a constructor to a constructor in the superclass.,</p>`),
        new qList(`What is method overriding?`,`Method overriding is a feature that allows sub class to provide implementation of a method that is already defined in the main class. This will overrides the implementation in the superclass by providing the same method name, same parameter and same return type.`),
        new qList(`What is an interface?`,`An interface is a collection of abstract method. If the class implements an inheritance, and then thereby inherits all the abstract methods of an interface.`),
        new qList(`What is exception handling?`,`Exception is an event that occurs during the execution of a program. Exceptions can be of any type – Run time exception, Error exceptions. Those exceptions are handled properly through exception handling mechanism like try, catch and throw keywords.`),
        new qList(`What are tokens?`,`Token is recognized by a compiler and it cannot be broken down into component elements. Keywords, identifiers, constants, string literals and operators are examples of tokens.<p>Even punctuation characters are also considered as tokens – Brackets, Commas, Braces and Parentheses.</p>`),
        new qList(`Difference between overloading and overriding?`,`Overloading is static binding whereas Overriding is dynamic binding. Overloading is nothing but the same method with different arguments , and it may or may not return the same value in the same class itself.<p>Overriding is the same method names with same arguments and return types associates with the class and its child class.</p>`),
        new qList(`Difference between class and an object?`,`An object is an instance of a class. Objects hold any information , but classes don’t have any information. Definition of properties and functions can be done at class and can be used by the object.<p>Class can have sub-classes, and an object doesn’t have sub-objects.</p>`),
        new qList(`What is an abstraction?`,`Abstraction is a good feature of OOPS , and it shows only the necessary details to the client of an object. Means, it shows only necessary details for an object, not the inner details of an object. Example – When you want to switch On television, it not necessary to show all the functions of TV. Whatever is required to switch on TV will be showed by using abstract class.`),
        new qList(`What are access modifiers?`,`Access modifiers determine the scope of the method or variables that can be accessed from other various objects or classes. There are 5 types of access modifiers , and they are as follows:.<ul>
<li>Private</li>
<li>Protected</li>
<li>Public</li>
<li>Friend</li>
<li>Protected Friend</li>
<ul>`),
        new qList(`What is sealed modifiers?`,`Sealed modifiers are the access modifiers where it cannot be inherited by the methods. Sealed modifiers can also be applied to properties, events and methods. This modifier cannot be applied to static members.`),
        new qList(`What is the difference between new and override?`,`The new modifier instructs the compiler to use the new implementation instead of the base class function. Whereas, Override modifier helps to override the base class function.`),
        new qList(`What are the various types of constructors?`,`There are three various types of constructors , and they are as follows:.<ul>
<li>Default Constructor – With no parameters.</li>
<li>Parametric Constructor – With Parameters. Create a new instance of a class and also passing arguments simultaneously.</li>
<li>Copy Constructor – Which creates a new object as a copy of an existing object.</li>
<ul>`),
        new qList(`What is early and late binding?`,`Early binding refers to assignment of values to variables during design time whereas late binding refers to assignment of values to variables during run time.`),
        new qList(`What is ‘this’ pointer?`,`THIS pointer refers to the current object of a class. THIS keyword is used as a pointer which differentiates between the current object with the global object. Basically, it refers to the current object.`),
        new qList(`What is the difference between structure and a class?`,`Structure default access type is public , but class access type is private. A structure is used for grouping data whereas class can be used for grouping data and methods. Structures are exclusively used for dataand it doesn’t require strict validation , but classes are used to encapsulates and inherit data which requires strict validation.`),
        new qList(`What is the default access modifier in a class?`,`The default access modifier of a class is Private by default.`),
        new qList(`What is pure virtual function?`,`A pure virtual function is a function which can be overridden in the derived classbut cannot be defined. A virtual function can be declared as Pure by using the operator =0.
        <b>Example</b>
        <pre>
        Virtual void function1() // Virtual, Not pure
Virtual void function2() = 0 //Pure virtual</pre>`),
        new qList(`What are all the operators that cannot be overloaded?`,`ollowing are the operators that cannot be overloaded -.<ul>
<li>Scope Resolution (:: )</li>
<li>Member Selection (.)</li>
<li>Member selection through a pointer to function (.*)</li>
<ul>`),
        new qList(`What is dynamic or run time polymorphism?`,`Dynamic or Run time polymorphism is also known as method overriding in which call to an overridden function is resolved during run time, not at the compile time. It means having two or more methods with the same name,same signature but with different implementation.`),
        new qList(`What is a copy constructor?`,`This is a special constructor for creating a new object as a copy of an existing object. There will be always only on copy constructor that can be either defined by the user or the system.`),
        new qList(`What is static and dynamic binding?`,`Binding is nothing but the association of a name with the class. Static binding is a binding in which name can be associated with the class during compilation time , and it is also called as early Binding.<p>Dynamic binding is a binding in which name can be associated with the class during execution time , and it is also called as Late Binding.</p>`),
        new qList(`How many instances can be created for an abstract class?`,`Zero instances will be created for an abstract class.`),
        new qList(`Which keyword can be used for overloading?`,`Operator keyword is used for overloading.`),
  

    ];
   public selfIntro=[
       new qList(`Self Introduction : 1`,`<p>Good Morning /Good After-Noon /Good Evening</p><p>My name is Mansur Haider from Kolkata. I am persuing my M.C.A in stream of Master of Computer Application from Acharya Institute Of Technology. I have completed CHSC from BB College and my SSC from Delhi High school with aggregate 73%.
</p>
</p>
We are five in my family. My father is a private employee and my mother is a homemaker. I have two sibblings.</p>
<p>About my achievements, I never made any achievements at state level. But in my schooling I got certificate in singing level competition. In college I got NSS certificate which I participated as volunteer in my 1st year of engineering.</p>
<p>My strengths are hardworker, self motivating and dedicated towards my work. And also I’m a good learner as well as teacher.</p>
<p>My hobbies are making crafts, painting, surfing net.</p>
<p>My short term goal to get placed in well reputed company.
</p>
<p>My long term goal to palced in any mnc company and give my best to your.</p>
<p>Organisation.
As a fresher, I don’t have any working experience, but I will prove once the opportunity comes.</p>`),
new qList(`Self Introduction : 2`,`<p>First of all, I would like to thank you for giving me an opportunity to introduce myself.</p>
<p>I am Ashish Kamble, I am from Wadsa Desaiganj Dist Gadchiroli State Maharashtra.
So, actually, I am pursuing my BE degree in CSE. In my field, I like c, c++ and java.
I like coding and I have an interest in the operating system and Data structures.
I have a completed my Diploma in Computer Engineering from Government Polytechnic college in 2016 at Gondia.</p>
<p>
Coming to my strength I am more confident punctual and Hard worker, the problem solver.
I have a good computer knowledge I'm an honest person and quick learner.
My weakness is believing people easily.</p>
<p>Coming to my family background; I have a small family of four members including me also. My father is labour and my mother is House maker, I have a younger sister.</p>
<p>My hobbies are playing video games and paying a cricket, listening to a song and puzzle solving, GK reading and run programs.</p>
<p>It's all about me.</p>
`),
new qList(`Self Introduction : 3`,`<p>Good morning mam/sir.</p>
<p>It's my pleasure to introduce my self. Well, I'm VINITHA born and raised in Anantapur.</p>
<p>I have done my schooling in Little flower Montessori English Medium High School with, then I did my plus 12 from NARAYANA JR COLLEGE and now I'm pursuing my final year B-Tech from CBIT.</p>
<p>My strengths are my attitude that I like to take challenges that I CAN do it, my way of thinking that I take both success and failure in a balanced manner.</p>
<p>I don't like to say weakness but I like to say scope for improvement that is I won't leave any ask in completely, I believe in my self and my hard work and I want perfection in every thing.</p>
<p>My short term goal is I want a such a platform where I can grow my career along with the organisation growth like yours and.</p>
<p>My Long term goal is I want to be one of the reason for the success of the organisation and I want to seeyour organisation as a bench mark to other organisations.</p>
<p>My ethic is "i never neglect an opportunity for my improvement".</p>
<p>Thats all about me sir. Thank you for giving me such a wonderful oppurtunity.</p>`),
new qList(`Self Introduction : 4`,`<p>Good morning Sir,</p>
<p>First of all I would like to thank you, for giving me an opportunity to introduce my self.</p>
<p>My name is Mohammed Aftab Munshi, I born and belong to Dharwad City.</p>
<p>I have completed B.Com from Anjuman College Karnataka University Dharwad in 2012.</p>
</p>In my family we are 7 members my father passed away 8 years ago my mother is housewife and 4 sisters.</p>
<p>I have 8 years of experience in 3 different work Supermarkt, Shoe shop and currently I am working in BPO company as Process Team Leader.
</p>
<p>My strength is I am very positive bout work and relationship, confident, Quick learner, hard worker out of my comfort zone.</p>
<p>My hobbies learning new things</p>
<p>That's all about me.</p>

`),
new qList(`Self Introduction (experience) - 1`,`<p>First of all, thank you very much for giving me this golden opportunity. Let me introduce myself, Myself Mona Choudhary. There are four members in my family; my father, mother, me and my sister. My father's name is Shyam Choudhary, he is a doctor. My mother's name is Dimple Choudhary, she is a housewife. My sister “Rina”, she is in 10th standard now.</p>
<p>About my education & qualification - in 2012, I had completed my engineering in computer science from Anna University, Tamilnadu, and schooling from Delhi Public School, Delhi. During my Graduation period, I had done three Mainframe projects and successfully completed a training course on the Mainframe. I am excellent in planning, analyzing, designing, and developing.</p>
<p>I am interested to work as a Mainframe web developer and my goal is to get good opportunities on the same profile in your company. I have done many successful Mainframe projects during college. Even though, I have just started my career and don't have any working experience, but once I get the opportunity, I will prove myself.</p>
<p>My hobbies are Internet browsing & searching for helpful applications, watching news & discovery channel, playing Indoor games, listening old songs, art & design. My strengths are self-confidence & dedication, positive attitude, and hard work. My weakness is my soft nature that sometime harms me. Thanks for giving me this golden opportunity.</p>`),
new qList(`Self Introduction (experience) - 2`,`<p>Thank you for giving me this opportunity to introduce myself in-front of you.</p>
<p>My-self Shiva from Bangalore. I am in Bangalore since my childhood, but I born in Chennai. I have done my schooling and college from Bangalore. In 10th and 12th I have scored more than 80% and in graduation (BE) I have scored more than 70%. I am 27 Years old, working in TCS as a Java software developer.</p>
<p>My role & responsibilities in my current company is to understand the client requirements and plan, develop, maintain and deploy the software project, help testers to test the particular software application, and help and co-operate with other team members.</p>
<p>My short term goal is to crack this interview and get the particular job position. My long term goal is to get higher position in top MNC companies.</p>`)

   ]; 

   public InterviewTips=[
       new qList(`Know the organization where you’re applying.`,`<p>You need to be familiar with both technological and business aspects of the organization where you want to work. When the interviewer asks you, “To what extent you are familiar with our company?” your answer needs to offer more than what one can gather by merely looking at the top page of the organization’s website for 60 seconds.</p>
<p>Find out how the company makes money, what challenges it’s facing, what its competition is doing and the role that IT plays in that ecosystem. Consider what it might be like to work in that environment and what contribution you could make. Be prepared to explain what past experiences have prepared you to excel at that company.</p>
<p>Your information sources should be not only the organization’s website, but also social networking sites such as LinkedIn and Facebook, people who used to work or still work at the company, the company’s customers, news publications, analyst reports, and so on.</p>


`),
       new qList(`Know the position for which you’re applying.`,`<p>Building upon your knowledge of the organization, consider the role that the position will play within the company. If the job is on the revenue-generating side, how will you help the company meets its revenue, profit and related business goals? If the job is within a cost center, what success factors has the company defined for the position? Be prepared to explain what experiences and skills will allow you to contribute and succeed in that context.</p>
<p>Understand “must have” and “nice to have” skills the hiring manager expects the candidate to possess. Some job postings use generic titles such as “Senior Consultant,” “Director” or “Information Analyst” and describe the position is high-level and abstract terms. Dig beyond the generic description to understand what the hiring manager is actually looking for. This will help you understand and explain the extent to which the position is a good match for you and vice-versa.</p>`),
       new qList(`Know thyself.`,`<p>These tips assume that you possess the baseline skills the position might require. However, you might not remember all the details of the projects you delivered throughout your career.  Practice describing your contributions to past projects so that the interviewer thinks, “Wow, I want this candidate to help me in that way!”</p>
<p>Jot down the work you’ve done and how the skills you learned map to the position’s requirements. In your discussions with the company, highlight not only your overall experience, but clarify how it directly applies to what they organization wants you to accomplish.</p>
<p>Review the technologies that you may be expected to know, but haven’t used recently. Remind yourself of the terminology and key concepts that might come up during interviews.</p>
<p>Understand your professional strengths and know how to explain them clearly, succinctly and in the context of the specific position for which you are applying. Be realistic about your weaknesses; know how to discuss them with the interviewer so you can assess the extent to which they might prevent you from being effective at the job.</p>
<p>Practice discussing the job and your candidacy. You might be a perfect match for the position, but the interviewer might not realize this unless you know how to articulate how your learning and experience prepared you for this job.</p>
<p>Notice how often the word “practice” came up in this section. It’s true what they say: practice makes perfect. You can conduct mock interviews with your friends or professional coaches.  At the same time, don’t over-prepare—you answers during the actual interview shouldn’t sound canned.</p>`),
       new qList(`Know the people you might work with.`,`<p>Sometimes we think of companies as monolithic entities, forgetting that organizations are comprised of individuals with various personalities, backgrounds, priorities, strengths and weaknesses. As part of the interviewing process, you will probably speak not only with the hiring manager, but also with your potential colleagues. Learn about them prior to the conversations. If you don’t know the names of these people, ask the HR representative or the hiring manager.</p>
<p>Chances are, you’ll find some information about the people with whom you’ll interview by mining the public web and social networking sites. If you find any blogs, Tweets, articles or books they have written, be sure to familiarize yourself with the content before talking to them. This will help you anticipate the questions they’ll ask and the answers they might expect. Even reviewing their LinkedIn profile to see their work history can help you understand the perspective they may have on the job position.</p>
<p>Also, ask the HR representative or the hiring manager to give you some background details about the people with whom you will interview: What is their personality, what role to they play on the team, what is their history with the company, what are their interviewing and work styles? You may be surprised how much information you can gather by simply asking for it.</p>
<p>Don’t overdo your research, though. You can freak people out if you tell them that you found out where they live, what their kids’ names are and what food they like. This information might be discoverable, but you don’t want to seem like a stalker, nor do you want to invade the person’s privacy.</p>
<p>You should know what “pain points” the interviewer experiences as part of the job and what help they are seeking. If you don’t know this, then probably haven’t done enough research, but you may be able to simply ask about this during the interview. Knowing how you may be able to help the person, once you’re hired, can allow you to position yourself in a way that is personally relevant to the individual.</p>
`),
       new qList(`Know the timeline of the interviewing process.`,`<p>Some companies seem to always have job openings, especially for positions with high turn-over, such as sales. However, when recruiting for IT positions, time is often critical factor: the company may have created the job opening only after a specific project got funded. The hiring manager may be in a hurry to find and hire the right candidate. If you are a good match for the job, you’ll increase your chances of getting hired by understanding and supporting the employer’s hiring time table.</p>
<p>Another issue related to time is the availability of the interviewers to speak with you. You might have a busy schedule, as do they. By making it easier for the interviewers to schedule conversations with you, you will help speed up the hiring process. This might put you at an advantage over candidates who cannot move through the process at a rapid pace.</p>
<p>Also, consider how quickly you will be able to start the new job if it is offered to you. Will you need to wrap up a project with your current employer? Do you plan to give a resignation notice 2 or 3 weeks prior to your departure? Discuss these items with the hiring manager to set his or her expectations and to avoid any surprises after your receive the job offer.</p>
<p>There you have it: the 5 key topics you must know to get the IT job that’s right for you. Having the prerequisite skills and knowledge is necessary, but not sufficient. To succeed in the interviewing process you should look at it from the perspective of the people who will make the hiring decision. That’s why I presented my tips from the hiring manager’s point of view.</p>`),
   new qList(`Ask Some Questions Yourself`,`Your interviewer shouldn't be the only one asking questions. This is your chance to not only make a good impression, but learn a bit more about the job you're applying for. Ask a few questions that will make you look good, as well as some questions that'll show you whether this is the right job for you. With the right questions prepared, you'll be one step ahead of the competition.`)    ,
   new qList(`Emphasize Your Good Qualities`,`You'll probably feel the need to be humble, but don't. Shameless self-promotion is a good thing in job interviews. In fact, it's the only thing you can really do to showcase your good qualities. If you don't have experience to tout, remember that potential is actually more valuable than experience: if you can show why you're a promising hire, you're in.`),
   new qList(`Avoid the Common Pitfalls`,`So you've learned what to do, but it's also important to know what to avoid. Even something as simple as negative body language can sabotage your chances, so make sure you aren't hurting yourself without knowing it. Research the subjects you should avoid and make sure you don't overshare, particularly when it comes to your personal life. As long as you don't raise any red flags, you should be good to go.`),
   new qList(`Recover When Things Go South`,`Hopefully, with the right preparation, your interview will go smoothly. But, if you end up answering a question terribly or hit a common brick wall (like claims of "overqualification"), learn how to turn the tide quickly so you can get back on good footing. If you leave the interview thinking the whole thing was a disaster, you can always request a second interview explaining the problems you had, too.`),
   new qList(`Follow Up Afterwards`,`Don't let your interview be the last they hear from you. If you follow up afterwards, you'll help them remember who you are, and make sure your resume doesn't fall into the abyss of the forgotten. Send a thank you note after your interview, and a short email later on to check in if you haven't heard back. Take into account how you've been communicating with them so far, though, as different modes of communication may be more beneficial. If you have a follow up interview, be sure to nail that too.`),
   new qList(`If You Don't Get Hired, Find Out Why`,`Not every interview will be a winner, sadly, even if you do everything right. If you don't get hired, the best thing you can do is find out why and apply that knowledge to your next round of interviews. Look back on your interview and think about what you could have done better, whether it's avoiding the "overqualification" trap or just simply using better grammar. There are any number of reasons someone might not hire you, and all you can do is use this round as practice for your next interview.`)
   ];
   public hrInterview=[
       new qList(`Why do you want to work in this company?`,`<p>This is a popular interview question</p>
<p><strong>Following are 4 sample answers</strong></p>
<p><strong>Sample Answer 1: </strong></p>
<p><em>I would be proud to work for a company like yours with such a long history of leadership in the industry.  </em>I have carried out web research and believe that the company’s XYZ products and its future projections are very impressive and promising.  The XXX team is the team I would take pride to work with. A place where my skills or background fits perfectly and can be utilized respectively.</p>
<p><strong>Sample Answer 2:</strong></p>
<p>Your company made its fortune for making great products that help people do X. But on top of that it is the kind of place where I can fit in and excel, so I was thrilled to see you have this opening.  Your company believes in providing superior service, to which I share the same value and enables me to not only fit into your organization but complement the team as well.</p>
<p><strong>Sample Answer 3: </strong></p>
<p>I was delighted to see on your website that your feature employees are talking about how great it is to work for your company. These days so many people seem to despise where they work for one reason or another. It&#8217;s wonderful to see that your employees are proud to talk about how much they love their jobs.</p>
<p><strong>Sample Answer 4:</strong></p>
<p>This company is on the list of most admired companies every year. I want to play a role in ensuring this company stays on that list. I want to be part of a company that offers no less than quality in terms of products and after sales services.</p>
<p><strong>Tips:</strong></p>
<ul>
<li>Conduct a thorough research of company and company’s top executive before facing interview</li>
<li>Learn about the company’s vision and how you can contribute to it</li>
<li>Demonstrate your eagerness to work for the company</li>
<li>Evidence that you understand the employer’s business</li>
<li>Mention why you rely on XYZ company for your growth and why it is the best place to utilize your skill and experience for the benefit of the company</li>
<li>Demonstrate your belief in company’s product or service</li>
</ul>`),
       new qList(`Do you consider yourself successful?`,`<p>This is a popular interview question</p>
<p><strong>Following are 5 sample answers</strong></p>
<p><strong>Sample answer #1</strong></p>
<p>I feel successful with continuous progress.  I find exciting when I am allowed to implement new ideas and see its fruition. I would define my success as what I have learned through years and use them when circumstances arises or demands.</p>
<p><strong>Sample answer #2</strong></p>
<p>I feel successful when I meet my short term as well as the long-term goals. I try to achieve the set goals and work hard as much as I can, I try to reach those goals and achieve the desired outcome. I want to recognize myself as someone with a progressive attitude who does his best and gives 100% to attain goals.  To me success is not just my personal achievements but also by the efforts of the people around me.</p>
<p><strong>Sample answer #3</strong></p>
<p>Success to me is knowing that I am excelling in my performance and filling fulfilled. My work should add value to the company and its customers. Knowing that each day I am making the world a better place is a success to me. I would define success at work as what I have learned from key job assignments experiences.</p>
<p><strong>Sample answer #4</strong></p>
<p>Success to me is spending the majority of the time focused on work that are fulfilling and increasing my efficiency to help the organization grow.  While I also believe that greater success can be achieved while working as a team towards a common goal.</p>
<p><strong>Sample answer #5</strong></p>
<p>Yes. During my ___ year career, I have learned to set goals and to make sure I meet each of it. I make sure obstacles do not hinder me from reaching my goals, but instead should inspire me to exert more. I believe the new position I am applying for will enable me to reach up higher and be more successful</p>
<p><strong>Tips:</strong></p>
<ul>
<li>Summarize your career goals</li>
<li>Don’t say something that sound self-centric</li>
</ul>`),
       new qList(`Are you willing to travel?`,`Yes. I love traveling. Adjusting in new places and meeting new people would be a delightful experience for me.`),
       new qList(`What are your salary expectations?`,`As of now, I haven&#8217;t thought much about it. I&#8217;m more focused on learning the requirements for this position that I am applying for.`),
       new qList(`What would you consider your greatest strengths weakness?`,`<p>This is a popular interview question</p>
<p><strong>Following are 4 sample answers</strong></p>
<p><strong>Sample answer #1</strong></p>
<p>My strength is my ability to convert negative work environment into a positive and at the same time, developing a supportive team. I am also capable of keeping many projects on track and ensuring deadlines are met. As far as my weakness is concerned I get impatient sometimes in order to get everything done very quickly. To tackle the problem, I am trying to re-consider the to-do list and prioritize the tasks.</p>
<p><strong>Sample answer #2</strong></p>
<p>I am very comfortable working with a different group of people. My strength is my analytical and planning skills, developed over the years, help me to complete my work before the deadline. I am a little bit nervous while speaking in a group, but I have given good number of paper presentation to overcome this.</p>
<p><strong>Sample answer #3</strong></p>
<p>I am efficient in a number of programming languages including HTML, C++, Java and AppleScript.  I have generated over 100% excess revenue for two separate companies through cost cutting programming efficiency, and I have leadership experience with a team of five IT professionals working on some of the popular iPhone apps online.  As far as weakness is concerned I have a tendency to remain quiet in meetings, but I am working on speaking up when I feel I have ideas to share.</p>
<p><strong>Sample answer #4</strong></p>
<p>I&#8217;m a highly motivated person. I don&#8217;t stop until I get things done. I value other people&#8217;s time and company&#8217;s resources. I work to become an asset, not a liability.</p>
<p>People say I sometimes act too much as a perfectionist. To counter this, I attended seminars that teach me how to manage myself well.</p>
<p><strong>Tips</strong></p>
<ul>
<li>Focus mostly on strengths</li>
<li>Show the interviewer how you are putting effort to overcome the weakness</li>
<li>Mention about your real weakness but do mention about how you are going to fix it</li>
<li>Make sure your strength and weakness don’t contradict each other</li>
<li>Research well about the position you are applying for and identify the area where you can apply your strength</li>
<li>Choose a weakness that is acceptable for the job in hand</li>
<li>Don’t confuse interests with strength or dislikes with weakness</li>
</ul>`),
       new qList(`What motivates you?`,`<p>This is a popular interview question</p>
<p><strong>Following are 4 sample answers</strong></p>
<p><strong>Sample Answer #1</strong></p>
<p>I am very result-oriented person; my primary motivation is to achieve the desired end result.  While I enjoy working on the project of my own, I am particularly motivated by the buzz of working in a team. It’s very exciting working closely with others, who share the same common goal. I also like to take on the challenge, and rise to that challenge as part of a concerted team effort.</p>
<p><strong>Sample Answer #2</strong></p>
<p>Primarily, my ability to work hard and delivering result motivates me.  But subsequent recognition of my efforts gives me the encouragement for my next efforts.</p><p><strong>Sample Answer #3</strong></p>
<p>Responsibility towards work motivates me the most and my aim within any company is to move up to greater levels of responsibility to achieve each goal with better responsibilities.</p>
<p><strong>Sample Answer #4</strong></p>
<p>Many things motivate me. My goal to be the best of what I can be often motivates me to go beyond my own expectations. When I see myself being productive everyday, it motivates me to continue.</p>
<p><strong>Tips:</strong></p>
<ul>
<li>Sometimes, the best solution is to be honest- you can say money is your motivational factor, but it should be your last option</li>
<li>Mention things like Job satisfaction, working towards a goal, contributing to a team effort or developing your skills- provide a specific example that supports your response</li>
<li>Excitement for new challenges</li>
<li>Quest for personal development</li>
</ul>
<p><strong>What not to say:</strong></p>
<ul>
<li>Do not mention that you are motivated by bragging rights, material things or fear of being disciplined</li>
</ul>`),
       new qList(`Tell me about your dream job.?`,`The only dream job I&#8217;ve always had was a job that keeps me busy, a job wherein I get to contribute to the company&#8217;s success.`),
       new qList(`Why did you leave your last job?`,`I left my previous job because I feel I want to do more, to get hold of a greater opportunity to serve.`),
       new qList(`Why should we hire you?`,`<p><strong>Following are 5 sample answers</strong></p>
<p><strong>Sample Answer 1:</strong></p>
<p>In my XXX years of experience as a manager, I have build-up a solid motivational and team-working skills. I was awarded twice as the manager-of-the-year for my excellent methodologies for motivating employees to encounter challenges and meeting deadlines. If hired, I will carry forward this ability of leadership and strategies for achieving profit gains to this position.</p>
<p><strong>Sample Answer 2:</strong></p>
<p>The subjects I chose while working for my degree in XXX subject have prepared me for this particular post. Also, my two-year experience working with company X has given me the platform to master the skills that I needed to deliver for this position. It seems as if I was prepared all my life to land this job.</p>
<p><strong>Sample Answer 3: </strong></p>
<p>For this particular job, I have the perfect combination of skills and experience that is required. I also bring the experience of strong analytical and problem-solving skills that I have gained while working with other companies. My dedication to excellent work standards will add value to the team and the company.</p>
<p><strong>Sample Answer 4:</strong></p>
<p>I am quite aware of the company’s mission of acquiring the largest consumer base in the area and to become the front-runner in supplier’s or provider’s community. My domain knowledge and hold over the customer base can make a big contribution towards this. I would really enjoy this challenge of growing this business bigger.</p>
<p><strong>Sample Answer 5:</strong></p>
<p>As I have said earlier, my years of experience in this field is something that can truly contribute to this company&#8217;s success. My sense of dedication in every task that I handle is definitely a big plus. I believe my skills and work attitude measures up to your company standards.</p>
<p><strong>Tips</strong></p>
<ul>
<li>Emphasize on your uniqueness but keep it concise</li>
<li>Highlight your strength, skills, and your accomplishments</li>
<li>Give an example that describes you as a quick learner</li>
<li>State or provide some evidence that shows how you contributed to the growth of the previous company in terms of revenue, goodwill, and brand</li>
<li>Include your research you made on the company- for a smaller company you can say- your company is open to new innovative ideas</li>
</ul>
<p><strong>What not to say</strong></p>
<ul>
<li>Try to avoid saying- I need a job, money or this place is close to where I live</li>
<li>Focus on what can you do for the company rather than what they can do for you</li>
<li>NEVER DO THIS- comparing your skills to others. The natural instinct to this question is we usually start comparing our skills to others, when this question is put through.</li>
</ul>`),
       new qList(`Are you a team player?`,`Yes, definitely. While I will deny the fact that I can work independently with minimal supervision, I&#8217;m also one companion every leader would ever wanted to be in his team. Whatever task is assigned to me, I make sure it meets and exceeds what is expected of me. I also make it a point to reach out to teammates whenever needed.`),
       new qList(`Are you willing to work overtime? Nights? Weekends?`,`I understand that being asked to work for an extended number of hours comes with a good reason in the first place, so I&#8217;m ok with it. It an extra effort means something for the company, I&#8217;ll be happy to do it.`),
       new qList(`What will you do if you don&#8217;t get this position?`,`I have high hopes that I will be hired. In case it turns the other way around, I would have to move on and search for another job.`),
       new qList(`What have you done to improve your knowledge in the last year?`,`I have attended in several self-improvement, time management and personality development seminars. I have also participated in training workshops related to [industry].`),
       new qList(`How you would be an asset to this company?`,`My skills in [&#8230;] are outstanding. I have earned a lot of awards and certifications from my past employers. As an employee, I handle pressure with ease and can work with minimal supervision.`),
       new qList(`How long would you expect to work for us in case you are hired?`,`As much as possible I would like to be in this company for a long time. For as long as management sees me as an asset, I am willing to stay.`),
       new qList(`Describe your ability to work under pressure.`,`I understand the nature of this position that I am applying for quite well, along with the pressure that comes with it. Being under pressure doesn&#8217;t discourage me, it motivates me more.`),
       new qList(`Why do you think you would do well at this job?`,`Because, I love this job. I feel very confident of myself and my ability to delivery nothing short of quality output. My years of experience helped me develop these skills.`),
       new qList(`What irritates you about co-workers?`,`I always get along fine with my co-workers. I tend to be open minded and very considerate.`),
       new qList(`What has disappointed you about a job?`,`I once felt that I was not being given enough challenges to work on. I was a bit disappointed because I was so eager to go for more.`),
       new qList(`If you were hiring a person for this job, what would you look for?`,`I would look into two essential things: the ability to do the job right and the proper attitude to do it. Skills without the right attitude will not contribute to a productive output.`),
       new qList(`What was the most difficult decision for you made?`,`It was a time when I had to choose between joining a group of employees protesting some issues in the company, and staying away from the issue. I ended up being a mediator between the employees and our immediate supervisor, and I was glad I made that decision because it all ended well and without further conflicts in the work place.`),
       new qList(`What qualities do you look for in a boss?`,`I look into my boss as a person who can easily relate with me, can make firm decisions, and is transparent. A boss with a sense of humor would also be a delightful idea.`),
       new qList(`Are you applying in other companies as well?`,`Yes. I have submitted my applications in some of the best companies like [&#8230;.]. Above all, my priority and hope is that I be able to land a job in your company.`),
       new qList(`Have you ever worked in a job that you hated?`,`Not exactly hated. I once had a job that does not exactly match my qualification. Nevertheless, I was glad I took the job because it was an opportunity to learn something new and added to my list of experience.`),
       new qList(`What would your previous supervisor say your best point is?`,`Some of my strongest points at work are being hardworking, patient and a quick learner.`),
       new qList(`What suggestion/s have you made in your previous employment that was implemented?`,`I once suggested that management and staff should have more regular meetings instead of quarterly meetings. I was happy that management took note of this and even commended me for making a good initiative.`),
       new qList(`How do you cope with stress?`,`I pause for a few minutes, look out into the window. Brief pauses in enough to get me charged again. I can manage stress well enough and does not decrease my productivity level.`),
       new qList(`Would you rather work for money or job satisfaction?`,`Job satisfaction is more important for me. Working just for the money may not be fulfilling if I don&#8217;t like the job in the first place. Job satisfaction makes me stay productive; money would naturally come along well.`),
       new qList(`Where do you see yourself in 5 years?`,`<p>This is a popular interview question asked in mock interviews</p>
<p><strong>Following are 3 sample answers</strong></p>
<p><em><strong>Sample Answer 1:</strong></em></p>
<p>In five years’ time, I see myself growing along with the team, developing and using new skills to the benefit of the organization. I find this position extremely motivating and exciting. I can imagine many challenges lying ahead of me, which I am excited to experience. And therefore, I am eager to invest my five years time learning all facets of the job towards professional advancement.</p>
<p><strong>Sample Answer 2:</strong></p>
<p>I am flexible with others and enjoy the roles that involves leadership. Although, my initial focus and priority would be to involve actively in the job I am applying for, I would very much keen to take management or supervisory role in 3-5 years&#8230;or less. I enjoy supporting my team members, and always try to set a good example for others.</p>
<p><strong>Sample Answer 3:</strong></p>
<p><em>I am obsessed to be the best at whatever I do. I would like to work in an organization where I’ll have the best chances to enhance my skills, doing interesting projects, and work along with team members that I can actually learn from.</em><em> Some of the most innovative peers in the industry work here and that’s one of the reasons why I would love to built a career overhere.</em></p>
<p><strong>Tips:</strong></p>
<ul>
<li>Analyze a reasonable career path which will flow from the position you are applying</li>
<li>Try emphasize your interest and goal in your answer</li>
<li>Talk in terms of responsibilities and achievements</li>
<li>Try mentioning things that bring value to an organization</li>
<li>Fresher’s can put forward their plan for next one or two years instead of five or ten years</li>
<li>Show your long term interest in the position</li>
</ul>
<p><strong>What not to say</strong></p>
<ul>
<li><strong>Don’t say this- </strong>I am not sure, I am thinking about xyz…</li>
<li>Don’t portray yourself overly ambitious by saying something like……I want to be CEO in next five years</li>
<li>Don’t say that you wanted to be in the interviewer’s role or I want your job some-day</li>
<li>Don’t put your personal plan like buying a new car or going for a long tour etc.</li>
</ul>`)
   ];
   public groupDiscusstion=[
       new qList(`How to Prepare for Group Discussion?`,`<p>In short, the GD panel is testing whether you know the topic well, are able to present your point of view in a logical manner, are interested in understanding what others feel about the same subject and are able to conduct yourself with grace in a group situation. </p>
<p>Outlined are some tips and suggestions that will help you prepare well for</p>
<b>Group Discussion:  </b>

<ol>
<li>Train yourself to be a good listener. Develop the patience to listen attentively.</li>
<li>Acknowledge that everyone has something valuable to say.</li>
<li>When speaking in a GD, your job is to articulate your point of view in a way that is easy for others to comprehend.</li>
<li>Inculcate the good habit of structuring your thoughts and presenting them logically.</li>
<li>Writing essays on a variety of topics is good practice developing thought structure.</li>
<li>The only way to prepare is to read more, develop a keen interest in current affairs.</li>
<li>Seek opportunities to discuss these in groups.</li>
<li>Learn to respect others for what they are.</li>
<li>Learn to be open-minded and recognize the fact that people think differently about issues.</li>
<li>Train your mind to think analytically.</li>
<li>Your GD arguments should have ‘meat’.</li>
</ol>

<b>Tips for Personal Interview</b>
<ol>
<li>Don’t start with the phrase – Myself XYZ – there’s no better way ti put the panel off.</li>
<li>Getting into details about siblings and cousins – especially the one who seem to have done well. Panelists want to know about you, not about your extended family.</li>
<li>Don’t cite – ‘making friends’ or ‘meeting new people’ – as a hobby. Wonder how one pursues a hobby like ‘meeting new people’!</li>
<li>Don’t say things like – I studied this in my first year – as an excuse for not knowing more basic stuff related to their subject of study. The panel members study this about 20 years back – they still remember about it.</li>
</ol>`),
new qList(`What skills are judged in group discussion?`,`<ul>
<li>How good you are at communication with others.</li>
<li>How you behave and interact with group.</li>
<li>How open minded are you.</li>
<li>Your listening skill.</li>
<li>How you put forward your views.</li>
<li>Your leadership and decision making skills.</li>
<li>Your analysis skill and subject knowledge.</li>
<li>Problem solving and critical thinking skill.</li>
<li>Your attitude and confidence.</li>
</ul>
`),
new qList(`Do’s and Don’ts of Group discussion`,`<b>1) Keep eye contact while speaking:</b>
<p>Do not look at the evaluators only. Keep eye contact with every team member while speaking.</p>
<b>2) Initiate the GD:</b>
<p>Initiating the GD is a big plus. But keep in mind – Initiate the group discussion only when you understood the GD topic clearly and have some topic knowledge. Speaking without proper subject knowledge is bad impression.</p>
<b>3) Allow others to speak:</b>
<p>Do not interrupt anyone in-between while speaking. Even if you don’t agree with his/her thoughts do not snatch their chance to speak. Instead make some notes and clear the points when it’s your turn.</p>
<b>4) Speak clearly:</b>
<p>Speak politely and clearly. Use simple and understandable words while speaking. Don’t be too aggressive if you are disagreeing with someone. Express your feelings calmly and politely.</p>
<b>5) Make sure to bring the discussion on track:</b>
<p>If by any means group is distracting from the topic or goal then simply take initiative to bring the discussion on the track. Make all group members aware that you all need to come to some conclusion at the end of the discussion. So stick to the topic.</p>
<b>6) Positive attitude:</b>
<p>Be confident. Do not try to dominate anyone. Keep positive body language. Show interest in discussion.</p>
<b>7) Speak sensibly:</b>
<p>Do not speak just to increase your speaking time. Don’t worry even if you speak less. Your thoughts should be sensible and relevant instead of irrelevant speech.</p>
<b>8 ) Listen carefully to others:</b>
<p>Speak less and listen more! Pay attention while others are speaking. This will make coherent discussion and you will get involved in the group positively. You will surely make people agree with you.</p>
<b>9) No need to go into much details:</b>
<p>Some basic subject analysis is sufficient. No need to mention exact figures while giving any reference. You have limited time so be precise and convey your thoughts in short and simple language.</p>
<b>10) Formal dressing:</b>
<p>Do not take it casually. No fancy and funny dressing. You should be comfortable while speaking in group. Positive gesture and body language will make your work easy.</p>
`),
new qList(`Sample 1 : Are digital payments secure enough for the Indian economy to go cashless?`,`<p>I agree with most of you.</p>
<p>Digital payment truly is the next big step towards our economic development. The demonetization has already made digital transactions common among the masses. It is fast, reliable and yes you don't have to worry for a change! No need to carry bags full of money. All you need is a mobile and data (which is also cheap nowadays).</p>
<p>Now coming to the main point, whether it is secure enough to make the entire economy to go cashless?</p>
<p>As of the current scenario, no it inst. A large majority of people living in the villages are still miles away from the word internet (the backbone of the digital transaction). Also, you have those rigid "why should I use digital transaction, if I have cash" people, who can be easily exploited.</p>
<p>While some of you have mentioned about the recent ransomware attacks and issues regarding cyber securities, indeed it is a matter of concern but digital transaction websites are nowadays are investing both their time and money to improve this.</p>
<p>I would like to end by saying that, to truly make our economy go cashless, it is necessary to educate people about it and then encourage them to practice the same. While it might take some time, cashless India can actually become a reality within the next decade.</p>`),
new qList(`Sample 2: Ban 500, 1000 notes :: Corruption Uprooted or just changing clothes!`,`<p>After the demonetization of 500 and 1000 rupee currency in our India, we have seen a lot of change in our country.</p>
<p>After the demonetization around 567 Naxal's group have surrendered in front of our govt because of the lack of money because most of the black money was in the form of 500 and 1000. Stone pelting incident in Kashmir was stopped.</p>
<p>Around 2 lac crore, black money was caught by the income tax department.</p>
<p>The people who did not had any black money was not affected by this policy of government But there was also some negative effects of this decision like workers who work on daily wages was very much affected.</p>
<p>So, I would like to stop with that something is always better than nothing and demonetization was a very gutsy move by the central govt.</p>`),
new qList(`Sample 3: Do we really need Smart Cities?`,`Well according to me, developing country like India should focus on the primary needs first. The Majority of the population lives in the villages. Most of them do not have even basic needs like roads, electricity, water supply, food and education. So rather than spending thousand of crore to make few smart city, the main target should be to improve the condition of villages, so that India develop evenly.<p>Secondly, our country is working on bullet trains, and the condition of the life line that is railways is getting worse day by day. Similarly rather than spending a huge amount of money to built bullet train, we should improve our railway and road system.</p>`),
new qList(`Sample 4: Should we change the present system of education in our country?`,`The Education system must be changed. Today education system is focused on mark basis rather on practical observation. Students are trained to memorise the answer and should write in their exams. This kind of educational system is not beneficial to students in any way. Students who are a topper in classes are very much weak in practical knowledge. They must be taught on real time experiments. Mark is important, but their IQ level is very much low. In an interview, they suffer a lot. Lack of communication skill, technical knowledge, general knowledge etc. Students must be known all about this, it is a necessary one. The Education system must be changed for the benefits of students. Thank you.`),

   ];
public confident=[
    new qList(`Aim to connect with interviewers, not impress them`,`<p>In an interview it’s important to come across as likeable. So, to maximise confidence, your energy should be focused on building a rapport with your interviewer rather than impressing him or her.</p>
<p>“We often get the idea that confidence is about holding court whereas it’s more to do with putting people at ease. It helps to focus on connecting with people rather than focusing on the performance,” says Dr Gary Wood, chartered psychologist and author.</p>`),
    new qList(`Use breathing techniques to boost confidence`,`<p>At the heart of confidence is feeling relaxed, so breathing and mindfulness exercises are helpful, adds Wood. “Staying present by focusing on your breathing just before an interview should help calm nerves,” says mindfulness teacher Gelong Thubten.</p>
<p>Business psychologist Dr Sarah Connell, agrees: “When we are anxious our blood flows away from our brains as we are in fight or flight mode, and our cognitive functions can suffer.” So slow, deep breathing will bring the oxygen back to your brains and help you to think clearly.</p>`),
    new qList(`Be kind to yourself before the interview`,`<p>It’s important to speak to yourself with compassion, like a best friend, and dispel any critical thoughts that stand in your way, adds Connell. “Don’t be afraid to sell yourself. People worry about appearing arrogant but the interview panel are not mind readers and do not automatically know what you have to offer, so it is up to you to tell them.”</p>`),
    new qList(`Use power poses and relaxation exercises to curb anxiety`,`<p>“Focus on the present moment, either by concentrating on your breathing or on body sensations, for a few moments. It will help calm you down,” says Thubten. In the interview also remember to speak slowly, as we tend to rush when we are nervous. “Don’t be afraid of silences. Sometimes leaving pauses in your sentences will help you command the situation better.”</p>`),
    new qList(`Imagine yourself succeeding`,`<p>Picturing yourself being successful at an upcoming job interview will give a boost to your confidence and self-esteem. “Before you go in start visualising a successful interview: imagine how you walk to the room, shake the interviewer’s hands and answer the questions with confidence,” says Margaret Buj. This technique will help calm any pre-interview nerves.</p>
<p>“If you have a strong belief that you are the best person for the job, and then you relax into that confidence, it should help,” agrees Thubten.</p>`),
    new qList(`Prepare and rehearse answers out loud`,`<p>If you go into an interview with prepared answers for most questions, it takes the pressure off and you walk in confident you’ll know your stuff, says Cathy Lovell, student services manager for The Open University. To make sure you’re well-equipped, rehearse potential interview answers with a friend. </p>
<p><strong>“</strong>Look at the skills, experience, knowledge and personal qualities you have and think of examples showing how you developed these. It’ll make all the difference to your confidence,” adds Lovell. </p>`),
    new qList(`Make friends with your anxiety, and smile`,`<p>A great confidence technique is to “make friends” with your anxiety, says mindfulness teacher Charlie Morley. “Before an interview, think to yourself ‘Ah my old friend anxiety. Thank you so much for coming. I know that you are there and I acknowledge you fully.’ Sounds a bit silly doesn’t it?</p>
<p>“It’s actually a great technique to smile at the anxiety, rather than trying to suppress it or overpower it with positive thinking.”</p>`)
];
public aspDotNetCore=[
    new qList(`What is .NET Core?`,`<p>.NET Core is a newer version of .NET, which is cross-platform, supporting Windows, macOS and Linux, and can be used in device, cloud, and embedded/IoT scenarios.</p>
<p>The following characteristics best define .NET Core:</p>
<ul>
<li><strong>Flexible deployment:</strong> Can be included in your app or installed side-by-side user- or machine-wide.</li>
<li><strong>Cross-platform:</strong> Runs on Windows, macOS and Linux; can be ported to other OSes. The supported Operating Systems (OS), CPUs and application scenarios will grow over time, provided by Microsoft, other companies, and individuals.</li>
<li><strong>Command-line tools</strong>: All product scenarios can be exercised at the command-line.</li>
<li><strong>Compatible</strong>: .NET Core is compatible with .NET Framework, Xamarin and Mono, via the .NET Standard Library.</li>
</ul>`),
new qList(`How is it different from existing .NET framework?`,`<p><strong>.NET Core and the .NET Framework</strong> have (for the most part) a subset-superset relationship. .NET Core is named &#8220;Core&#8221; since it contains the core features from the .NET Framework, for both the runtime and framework libraries. For example, .NET Core and the .NET Framework share the GC, the JIT and types such as <code>String</code> and <code>List<T></code>. </p>
<p><strong>.NET Core </strong>was created so that .NET could be open source, cross platform and be used in more resource-constrained environments. </p>
<h3>Where these 2 fits with ASP.NET</h3>
<p>Like .NET, ASP.NET now also has 2 flavors.</p>
<ol>
<li>ASP.NET 4.6</li>
<li>ASP.NET Core 1.0</li>
</ol>
<p><strong>ASP.NET 4.6</strong> is upgraded version of ASP.NET which we all are using from last 13 years. It started with 1.0 back in 2012 and now it has reached at 4.6. Applications built using ASP.NET 4.6 or prior version of ASP.NET run only on windows platform.</p>
<p>ASP.NET Core 1.0 is completely a new platform to build cross platform applications and it was written from scrath.</p>
<img src="/assets/Images/Difference-between-.NET-Framework-and-.NET-Core.png">
<p>So now you can build web application using ASP.NET Core 1.0 and you can target .NET Framework 4.6 and/or .NET Core. The .NET Framework 4.6 runs on top of Windows operating system, where .NET Core 1.0 is a cross platform framework and runs on top of Windows and Non-windows operating systems. Please note that .NET Core 1.0 doesn’t have all the features and functionality of .NET Framework 4.6 (at the time of writing).</p>`),
new qList(`What is ASP.NET Core?`,`ASP.NET Core 1.0 is the next version of ASP.NET. It is open source and cross-platform framework (supports for Windows, Mac and Linux) suitable for building cloud based internet connected applications like web apps, IoT apps and mobile apps. ASP.NET Core apps can run on .NET Core or on the full .NET Framework.`),
new qList(`What are the newly introduced functionalities in ASP.NET Core?`,`<ul>
<li>The first and most important change is that “<strong>ASP.NET Core is open source and cross platform</strong>.”</li>
<li>ASP.NET Core works with two runtime environment (.NET Core and .NET Framework). .NET core is for all platforms (windows, linux and OSx) where .NET framework is for windows.</li>
<li>ASP.NET Core project is now much cleaner. When you create a new project, it includes only required dependencies.</li>
<li><b>.NET Platform Standard</b> is the new approach for addressing real binary portability with PCL.</li>
<li>ASP.NET Core applications are built and run using the new <b>.NET Execution Environment (DNX)</b>. Every ASP.NET Core project is a DNX project. There are two main flavors, DNX 4.6.X (the  full framework) and DNX Core 5.0 (the light-weight open source .NET version that also runs on Linux and Mac). DNX Core contains almost everything but is missing a few Windows namespaces like System.Drawing for example.</li>
<li>We can use both the frameworks “<code>dotnet 4.6</code>” and “<code>dotnet core</code>” in our application. They are defined in <b>framework section of project.json file</b>. The advantage is that common compatible code can be shared, which works for both the frameworks. But there are some libraries which will not work with .NET core like reflection or drawing bit map. But we can separate code using #if directives. Like,
<pre >
#if DNX451
   //code targeted for .NET 4.5.1
#endif
#if DNXCORE50
   //Code targeted for core clr
#endif
</pre>
</li>
<li>There is also a command line tool named &#8220;<strong>DNVM &#8211; .NET version manager</strong>&#8220;. It allows to upgrade or install new dnx version.</li>
<li>ASP.NET Core works on file system which allows faster development cycle. It detects the code changes (even outside visual studio), compiles into memory and loads the application.</li>
<li>ASP.NET Core has inbuilt support for <strong>Dependency injection</strong>. ASP.NET Core includes a simple built-in container (represented by the <code>IServiceProvider</code> interface) that supports constructor injection by default, and ASP.NET makes certain services available through DI.</li>
<li>ASP.NET Core is also <strong>cloud ready</strong> as it supports environment-based configuration. Read more about environment-based configuration in <b>launchSetting.json</b> file.
<li>ASP.NET Core uses completly new light-weight and modular HTTP request pipeline.</li>
<li><code>HTTPHandler</code> and <code>HTTPModules</code> are also gone. Now they are replaced with <b>Middleware</b>.</li>
<li>The heart of ASP.NET application <strong>“System.web”</strong> DLL is no longer available.</li>
<li>With ASP.NET Core, webforms are history. Though, you can use webforms using .NET 4.6 framework.</li>
<li>JSON is preferred over XML for configuration settings.  </li>
<li>There is no <code>web.config</code> and <code>global.asax</code> files now. <code>web.config</code> is replaced with <code>appsettings.json</code> and <code>global.asax</code> is now <code>Startup.cs</code>. Startup.cs is entry point for application itself. Also read &#8220;<b>Static Void Main in ASP.NET Core startup.cs</b>.</li>
<li>The new <b>Project.json</b> file is heart of your project. It defines dependencies, runtime to use, and defines build and publish setup. It defines as project as DNX project.</li>
<li><code>wwwroot</code> directory in project is for static content like css, Js, images. And it’s the<br />
default root of your server. If a request comes in for a static file on disk, if the file is in this folder then it can go back to client. The name can be changed from project.json file. </li>
<li>Now you can directly add the reference of any assembly just via typing. Add assembly name with version in project.json file and Visual studio will add the reference for you.</li>
<li>ASP.NET Core is designed to integrate seamlessly with a variety of client-side frameworks, including <b>AngularJS</b>, <b>KnockoutJS</b> and <b>Bootstrap</b>.</li>
<li>ASP.NET Core has also inbuilt support for client side package manager <b>bower</b>. It now also supports JavaScript task runners <b>grunt</b><b>gulp</b>, web project scaffolding tool, <b>Yeoman</b></li>
<li>Bundling and minification is done using <b>grunt</b> or <b>gulp</b></a>, unlike defining bundles in BundleConfig file.</li>
<li>ASP.NET Core also comes with <strong>Unified Programming Model</strong> for MVC6 and Web API. In previous versions of ASP.NET MVC, MVC controllers were different from Web API controllers. An MVC controller used the <strong>System.Web.MVC.Controller</strong> base class and a Web API controller used the <strong>System.Web.Http.ApiController</strong> base class.</li>
<li><strong>.csproj becomes .xproj</strong>. The new project file doesn’t include manifest and list of all the files that are include in your project, as earlier with .csproj.</li>
<li>By default, a class library project when compiled, becomes a <strong>nuget package instead of DLL</strong>.</li>
<li>There is also a new code editor named &#8220;Visual studio code&#8221; to work on linux and mac. </li>
</ul>`),
new qList(`What is ASP.NET Core Middleware?`,`<p> Middleware in ASP.NET Core controls how our application responds to HTTP requests. It can also control how our application looks when there is an error, and it is a key piece in how we authenticate and authorize a user to perform specific actions.</p>
<ul class="list">
<li><p>Middleware are software components that are assembled into an application pipeline to handle requests and responses.</p></li>
<li><p>Each component chooses whether to pass the request on to the next component in the pipeline, and can perform certain actions before and after the next component is invoked in the pipeline.</p></li>
<li><p>Request delegates are used to build the request pipeline. The request delegates handle each HTTP request.</p></li>
<li><p>Each piece of middleware in ASP.NET Core is an object, and each piece has a very specific, focused, and limited role.</p></li>
<li><p>Ultimately, we need many pieces of middleware for an application to behave appropriately.</p></li>
</ul>
`),
new qList(`Difference between Middleware and HttpModule?`,`<table border="1" >
<tr>
<th>HttpModule</th>
<th>Middleware</th>
</tr>
<tr>
<td >HttpModules are configured via web.config or global.asax</td>
<td>Middleware are configured via code rather than web.config. ASP.NET Core 1.0 has <b>Startup.cs</b> file (entry point for application) where middlewares are added.</td>
</tr>
<tr>
<td >As a developer, you don&#8217;t have control on their order of execution. As order of modules is mainly based on application life cycle events.</td>
<td>Unlike modules, you are in full control of what get&#8217;s executed and in what order. As they are executed in the order in which they are added.</td>
</tr>
<tr>
<td>The execution order remains same for requests and responses.</td>
<td>Order of middleware for responses is the reverse from that for requests.</td>
</tr>
<tr>
<td>HttpModules helps you to attach code specific to a application events.</td>
<td>Middleware is independent of these events.</td>
</tr>
<tr>
<td>HttpModules are tied to <code>System.web</code>.</td>
<td>Middlewares are host independent.</td>
</tr>
</table>
<h3>Built-in Middleware</h3>
<p>ASP.NET Core 1.0 is shipped with the following Middleware components.</p>
<table border="1" >
<tr>
<td>Authentication</td>
<td>Provides authentication support.</td>
</tr>
<tr>
<td>CORS</td>
<td>Configures Cross-Origin Resource Sharing.</td>
</tr>
<tr>
<td>Routing</td>
<td>Define and constrain request routes.</td>
</tr>
<tr>
<td>Session</td>
<td>Provides support for managing user sessions.</td>
</tr>
<tr>
<td>Routing</td>
<td>Provides support for serving static files, and directory browsing.</td>
</tr>
<tr>
<td>Diagnostics</td>
<td>Includes support for error pages and runtime information.</td>
</tr>
</table>`),
new qList(`What are the various Json files in ASP.NET Core?`,`<ul>
<li><b>Global.json : </b> As the name suggests, the settings defined in the file should work for the solution as whole. The settings defined in global.json implies to all the projects in the solution. </li>
<li> <b>appsettings.json  : </b> appsettings.json file is used to define application related settings like connection string, logging settings, or any other custom key which we used to define in web.config file.</li>
<li> <b>Project.json  : </b> This file is used to define project settings and server side dependencies. It largely replaces the web.config file from previous versions of ASP.NET.</li>
<li> <b>launchSetting.json  : </b> This json file holds project specific settings associated with each profile Visual Studio is configured to use to launch the application, including any environment variables that should be used. You can define framework for your project for compliation and debugging for specific profiles.</li>
<li> <b>Bower.json  : </b> Bower is a package manager for the web. Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn’t concatenate or minify code or do anything else – it just installs the right versions of the packages you need and their dependencies. With ASP.NET 5 web projects jQuery and bootstrap packages are already installed and bower, gulp and NPM are already in place.</li>
<li> <b>Package.json : </b> npm is another package manager like bower. But npm is used for installing Node js modules where bower is used for managing front end components like html, css, js, etc</li>
</ul>`),
new qList(`What is Startup.cs file in ASP.NET Core?`,`In ASP.NET, Global.asax (though optional) acts as the entry point for your application. Startup.cs, it is entry point for application itself. The Startup class configures the request pipeline that handles all requests made to the application.`),
new qList(`What ConfigureServices() method does in Startup.cs?`,`This method is optional. It is the place to add services required by the application. For example, if you wish to use Entity Framework in your application then you can add in this method.<pre>
public void ConfigureServices(IServiceCollection services)  
{
    services.Configure<AppSettings>(Configuration.GetSubKey("AppSettings"));
    services.AddEntityFramework()
            .AddSqlServer()
            .AddDbContext<SchoolContext>();
    // Add MVC services to the services container.
    services.AddMvc();
}
</pre>`),

new qList(`What Configure() method does in Startup.cs?`,`The Configure method is used to specify how the ASP.NET application will respond to HTTP requests. The request pipeline is configured by adding middleware components to an IApplicationBuilder instance that is provided by dependency injection. There are some built-in middlewares for error handling, authentication, routing, session and diagnostic purpose.`),
new qList(`What is the difference between app.Use vs app.Run while adding middlwares?`,`<p>Middleware are executed in the same order in which they are added. The difference is, middleware defined using <strong><pre>app.Use</pre> may call next middleware component in the pipeline. On the other hand, middlware defined using <pre>app.Run</pre> will never call subsequent middleware.</strong>.</p>`),
new qList(`What is Kestral?`,`Kestrel is a cross-platform web server for ASP.NET Core based on libuv, a cross-platform asynchronous I/O library. Kestrel is the web server that is included by default in ASP.NET Core new project templates. If your application accepts requests only from an internal network, you can use Kestrel by itself.<p>If you expose your application to the Internet, you must use IIS, Nginx, or Apache as a reverse proxy server. A reverse proxy server receives HTTP requests from the Internet and forwards them to Kestrel after some preliminary handling. The most important reason for using a reverse proxy for edge deployments (exposed to traffic from the Internet) is security. Kestrel is relatively new and does not yet have a full complement of defenses against attacks.</p>`),
new qList(`What is WebListener?`,`<p><strong>Ans:</strong> ASP.NET Core ships two server implementations <strong>Kestral</strong> and <strong>WebListener</strong>. WebListener is also a web server for ASP.NET Core that runs only on Windows. It&#8217;s built on the Http.Sys kernel mode driver. WebListener is an alternative to Kestrel that can be used for direct connection to the Internet without relying on IIS as a reverse proxy server.  </p>`),
new qList(`What is ASP.NET Core Module (ANCM)?`,`<p><strong>Ans:</strong> ASP.NET Core Module (ANCM) lets you run ASP.NET Core applications behind IIS and it works only with Kestrel; it isn&#8217;t compatible with WebListener. ANCM is a native IIS module that hooks into the IIS pipeline and redirects traffic to the backend ASP.NET Core application. ASP.NET Core applications run in a process separate from the IIS worker process, ANCM also does process management. ANCM starts the process for the ASP.NET Core application when the first request comes in and restarts it when it crashes. In short, it sits in IIS and routes the request for ASP.NET Core application to Kestral.</p>`),
new qList(`What are different ASP.NET Core diagnostic middlwares and how to do error handling?`,`<p>ASP.NET Core comes with many built-in and ready to use middleware, and you add them to your application in the <code>Startup.Configure</code> method. These built-in middleware can be classified in the following categories.</p>
<b>Built-in Middleware</b>
<table border="1">
<tr>
<td>Authentication</td>
<td>Provides authentication support.</td>
</tr>
<tr>
<td>CORS</td>
<td>Configures Cross-Origin Resource Sharing.</td>
</tr>
<tr>
<td>Routing</td>
<td>Define and constrain request routes.</td>
</tr>
<tr>
<td>Session</td>
<td>Provides support for managing user sessions.</td>
</tr>
<tr>
<td>Routing</td>
<td>Provides support for serving static files, and directory browsing.</td>
</tr>
<tr>
<td>Diagnostics</td>
<td>Includes support for error pages and runtime information.</td>
</tr>
</table><b>Built-in diagnostics middleware</b>

<ul>
<li>UseDeveloperExceptionPage()</li>
<li>UseDatabaseErrorPage()</a></li>
<li>UseExceptionHandler()</a></li>
<li>UseStatusCodePages()</a></li>
<li>UseWelcomePage()</li>
<li>UseElmPage() and UseElmCapture()</li>
</ul>`),
new qList(`What is a Host and what’s the importance of Host in ASP.NET Core application?`,`ASP.NET Core apps require a host in which to execute. The host is responsible for application startup and lifetime management. Other responsibility of host&#8217;s includes ensuring the application&#8217;s services and the server are available and properly configured. <strong>Don&#8217;t confuse yourself with a Server.</strong> The host is responsible for starting the app and its management, where the server is responsible for accepting HTTP requests. The host is configured to use a particular server; the server is unaware of its host.</p>
<p>The host is typically created using an instance of a <code>WebHostBuilder</code>, which builds and returns a <code>WebHost</code> instance. The <code>WebHost</code> references the server that will handle requests.<br />`),
new qList(`How to handle 404 error in ASP.NET Core 1.0?`,`I found 2 ways to handle 404 error. In fact using these solution you can handle any HTTP status code errors. To handle the error, both the solution are using configure() method of Startup.cs class. <ul>
<li><b>Solution 1:</b> within configure method define a custom middleware via app.Use which checks for status code value in response object. And if is 404 then it redirects to Home controller. </li>
<li><b>Solution 2:</b> The other solution is to use a built-in middlware StatusCodePagesMiddleware. This middleware can be used to handle the response status code is between 400 and 600. This middleware allows to return a generic error response or allows you to also redirect to any controller action or another middleware.</li>
</ul>`),
new qList(`What is launchsetting.json in ASP.NET Core?`,`This json file holds project specific settings associated with each debug profile, Visual Studio is configured to use to launch the application, including any environment variables that should be used. You can define framework for your project for compilation and debugging for specific profiles.`),
new qList(`What are the differences between ASP.NET MVC 5 and ASP.NET MVC Core 1.0?`,`<ul>
<li><b>ASP.NET CORE MVC 1.0 is Cross Platform.</b></li>
<li><b>ASP.NET Core MVC 1.0 is Cloud Ready.</b></li>
<li><b>MVC + Web API + Web Pages = ASP.NET Core MVC 1.0</b></li>
<li><b>ASP.NET Core MVC 1.0 doesn't need IIS for hosting.</b> Since ASP.NET Core is to cross platform so you can host ASP.NET 5 applications not only on IIS but they can be self hosted or use kestrel web server on linux.</li>
<li><b>ASP.NET Core MVC 1.0 has inbuilt support for Dependency Injection.</b> ASP.NET Core MVC includes a simple built-in container (represented by the IServiceProvider interface) that supports constructor injection by default, and MVC makes certain services available through DI.</li>
<li><b>ASP.NET Core MVC 1.0 has a new project solution structure.</b> There is no App_Start, App_Data, Global.asax and root web.config file. App_Start is replaced by Startup.cs and web.config is replaced by appsetting.json. There is also a new configuration system, where JSON is preferred over XML for configuration settings.</li>
<li><b>Roslyn compiler for compiling code dynamically.</b> Now no need to compile your code, on any code changes that you make. Thanks to Roslyn in memory compilation. Just make changes -> save it and view in browser.</li>
<li><b>In ASP.NET Core MVC 1.0 "wwwroot" is now place for static files.</b> wwwroot directory in project is for static content like css, Js, images. And it’s the
default root of your server. If a request comes in for a static file on disk, if the file is in this folder then it can go back to client. The name can be changed from project.json file. </li>
<li><b>The new Project.json file defines dependencies, runtime to use, and defines build and publish setup, instead of .csproj file.</b></li>
<li><b>Everything is Nuget package in Core MVC 1.0. There is no dll by default.</b></li>
<li><b>Bundling and minification is done using Grunt or Gulp, unlike defining bundles in BundleConfig file.</b></li>
<li><b>Manage client side dependencies via NPM and Bower.</b></li>
<li><b>ASP.NET MVC 5 Child actions are gone. They are now replaced with View Components.</b></li>
<li><b>Introduction of _ViewImports.cshtml in Core MVC 1.0</b> It provides namespaces which can be used by all other views. In previous MVC projects, this was provided by the web.config file in the Views folder; since the web.config no longer exists, global namespaces are now provided by this file.</li>
<li><b>Introduction of Tag helpers.</b> Tag Helpers allows to enable server-side code to participate in creating and rendering HTML elements in Razor files.</li>
<li><b>It also support RESTful style routes with attribute routing</b> That means you can even declare RESTful like routes like
 [HttpGet("Our Route")] and [HttpPost("Our Route")]</li>
<li><b>In Core MVC 1.0, routes have new [controller] and [action] tokens.</b> These tokens allows you to reference controller and action names in the route template. These token are helpful when in future if you rename the controller or action, there is no need to update the routes.</li>
</ul>`)
];
public testing=[
    new qList(`What is a Bug? `,`When actual result deviates from the expected result while testing a software application or product then it results into a defect. Hence, any deviation from the specification mentioned in the product functional specification document is a defect. In different organizations it’s called a Bug.`),
    new qList(`What is a Defect? `,`If software misses some feature or function from what is there in requirement it is called as defect. `),
    new qList(`What is CMM? `,`The Capability Maturity Model for Software (CMM or SW-CMM) is a model for judging the maturity of the software processes of an organization and for identifying the key practices that are required to increase the maturity of these processes. `),
    new qList(`What is Beta Testing? `,`Beta testing is testing of a release of a software product conducted by customers. `),
    new qList(`What is Black Box Testing? `,`Testing based on an analysis of the specification of a piece of software without reference to its internal workings. The goal is to test how well the component conforms to the published requirements for the component. `),
    new qList(`What is Bottom Up Testing? `,`An approach to integration testing where the lowest level components are tested first, then used to facilitate the testing of higher level components. The process is repeated until the component at the top of the hierarchy is tested. `),
    new qList(`What is Boundary Testing? `,`Test which focus on the boundary or limit conditions of the software being tested. (Some of these tests are stress tests). `),
    new qList(`What is Boundary Value Analysis? `,`BVA is similar to Equivalence Partitioning but focuses on "corner cases" or values that are usually out of range as defined by the specification. This means that if a function expects all values in range of negative 100 to positive 1000, test inputs would include negative 101 and positive 1001. `),
    new qList(`What is Branch Testing? `,`Testing of all branches in the program source code is called Branch Testing. `),
    new qList(`What is Coding? `,`The generation of source code is called Coding. `),
    new qList(`What is Compatibility Testing? `,`Testing whether software is compatible with other elements of a system with which it should operate, e.g. browsers, Operating Systems, or hardware. `),
    new qList(`What is a Component? `,`A component is an identifiable part of a larger program or construction. Usually, a component provides a particular function or group of related functions. `),
    new qList(`What is Component Testing? `,`Testing of individual software components is called Component testing. `),
    new qList(`What is Acceptance Testing? `,`Testing conducted to enable a user/customer to determine whether to accept a software product. Normally performed to validate the software meets a set of agreed acceptance criteria. `),
    new qList(`What is Accessibility Testing? `,`Verifying a product is accessible to the people having disabilities (deaf, blind, mentally disabled etc.). `),
    new qList(`What is Ad Hoc Testing? `,`A testing phase where the tester tries to 'break' the system by randomly trying the system's functionality is called Ad Hoc testing. This can include negative testing also. `),
    new qList(`What is Agile Testing? `,`Testing practice for projects using agile methodologies, treating development as the customer of testing and emphasizing a test-first design paradigm. `),
    new qList(`What is Application Binary Interface (ABI)? `,`A specification defining requirements for portability of applications in binary forms across different system platforms and environments is called Application Binary Interface (ABI). `),
    new qList(`What is Application Programming Interface (API)? `,`A formalized set of software calls and routines that can be referenced by an application program in order to access supporting system or network services is called Application Programming Interface (API). `),
    new qList(`What is Automated Software Quality (ASQ)? `,`The use of software tools, such as automated testing tools, to improve software quality is called Automated Software Quality (ASQ). `),
    new qList(`What is Automated Testing? `,`Testing employing software tools which execute tests without manual intervention is called Automated Testing. Can be applied in GUI, performance, API, etc. testing. The use of software to control the execution of tests, the comparison of actual outcomes to predicted outcomes, the setting up of test preconditions, and other test control and test reporting functions. `),
    new qList(`What is Backus-Naur Form? `,`It is a meta-language used to formally describe the syntax of a language. `),
    new qList(`What is Basic Block? `,`A sequence of one or more consecutive, executable statements containing no branches is called Basic Block. `),
    new qList(`What is Basis Path Testing? `,`A white box test case design technique that uses the algorithmic flow of the program to design tests. `),
    new qList(`What is Basis Set? `,`The set of tests derived using basis path testing. `),
    new qList(`What is Baseline? `,`The point at which some deliverable produced during the software engineering process is put under formal change control. `),
    new qList(`What you will do during the first day of job? `,`Few things that you should be doing on the first day of your job are  <ul><li>Reach office at least 15 minutes early  </li><li>Be calm and relaxed  </li></li>Have a smile on your face  </li><li>Don’t be shy  </li><li>Don’t try too hard to impress your colleagues  </li><li>If you're offered to go have lunch with your new boss and co-workers then you should go. It's important to show that you're ready to mingle with your new team.  </li><li>Pay attention to how decisions are made. </li></ul>`),
    new qList(`What is Binary Portability Testing? `,`Testing an executable application for portability across system platforms and environments, usually for conformation to an ABI specification is called Binary Portability Testing. `),
    new qList(`What is Breadth Testing? `,`A test suite that exercises the full functionality of a product but does not test features in detail is called Breadth Testing. `),
    new qList(`What is CAST? `,`Computer Aided Software Testing refers to the computing-based processes, techniques and tools for testing software applications or programs. `),
    new qList(`What is Capture/Replay Tool? `,`A test tool that records test input as it is sent to the software under test. The input cases stored can then be used to reproduce the test at a later time. Most commonly applied to GUI test tools. `),
    new qList(`What is Cause Effect Graph? `,`A graphical representation of inputs and the associated outputs effects which can be used to design test cases. `),
    new qList(`What is Code Complete? `,`Phase of development where functionality is implemented entirety; bug fixes are all that are left. All functions found in the Functional Specifications have been implemented. `),
    new qList(`What is Code Coverage? `,`An analysis method that determines which parts of the software have been executed (covered) by the test case suite and which parts have not been executed and therefore may require additional attention. `),
    new qList(`What is Code Inspection? `,`A formal testing technique where the programmer reviews source code with a group who ask questions analyzing the program logic, analyzing the code with respect to a checklist of historically common programming errors, and analyzing its compliance with coding standards. `),
    new qList(`What is Code Walkthrough? `,`A formal testing technique where source code is traced by a group with a small set of test cases, while the state of program variables is manually monitored, to analyze the programmer's logic and assumptions. `),
    new qList(`What is Concurrency Testing? `,`Multi-user testing geared towards determining the effects of accessing the same application code, module or database records. Identifies and measures the level of locking, deadlocking and use of single-threaded code and locking semaphores. `),
    new qList(`What is Conformance Testing? `,`Conformance testing, also known as compliance testing, is a methodology used in engineering to ensure that a product, process, computer program or system meets a defined set of standards. `),
    new qList(`What is Context Driven Testing? `,`The context-driven school of software testing is flavour of Agile Testing that advocates continuous and creative evaluation of testing opportunities in light of the potential information revealed and the value of that information to the organization right now. `),
    new qList(`What is Conversion Testing? `,`Testing of programs or procedures used to convert data from existing systems for use in replacement systems. `),
    new qList(`What is Cyclomatic Complexity? `,`A measure of the logical complexity of an algorithm, used in white-box testing is called Cyclomatic Complexity. `),
    new qList(`What is Data Dictionary? `,`A database that contains definitions of all data items defined during analysis. `),
    new qList(`What is Data Flow Diagram? `,`A data flow diagram (DFD) is a graphical representation of the "flow" of data through an information system, modelling its process aspects. `),
    new qList(`What is Data Driven Testing? `,`Testing in which the action of a test case is parameterized by externally defined data values, maintained as a file or spreadsheet. This is a common technique used in Automated Testing. `),
    new qList(`What is Debugging? `,`The process of finding and removing the causes of software failures is called Debugging. `),
    new qList(`What is Defect? `,`When actual result deviates from the expected result while testing a software application or product then it results into a defect. `),
    new qList(`What is Dependency Testing? `,`Dependency Testing, a testing technique in which an application's requirements are pre-examined for an existing software, initial states in order to test the proper functionality. The impacted areas of the application are also tested when testing the new features or existing features. `),
    new qList(`What is Depth Testing? `,`A test that exercises a feature of a product in full detail is called Depth testing. `),
    new qList(`What is Dynamic Testing? `,`Testing software through executing it is called Dynamic testing.`),
    new qList(`What is Emulator? `,`A device, computer program, or system that accepts the same inputs and produces the same outputs in a given system is called Emulator. `),
    new qList(`What is Endurance Testing? `,`Checks for memory leaks or other problems that may occur with prolonged execution. `),
    new qList(`What is End-to-End testing? `,`Testing a complete application environment in a situation that mimics real-world use, such as interacting with a database, using network communications, or interacting with other hardware, applications, or systems if appropriate is called End-to-End testing. `),
    new qList(`What is Equivalence Class? `,`A portion of a component's input or output domains for which the component's behaviour is assumed to be the same from the component's specification. `),
    new qList(`What is Equivalence Partitioning?`,`A test case design technique for a component in which test cases are designed to execute representatives from equivalence classes. `),
    new qList(`What is Exhaustive Testing? `,`Testing which covers all combinations of input values and preconditions for an element of the software under test. `),
    new qList(`What is Functional Decomposition? `,`A technique used during planning, analysis and design; creates a functional hierarchy for the software. `),
    new qList(`What is Functional Specification? `,`A document that describes in detail the characteristics of the product with regard to its intended features is called Functional Specification. `),
    new qList(`What is Functional Testing? `,`Testing the features and operational behaviour of a product to ensure they correspond to its specifications. Testing that ignores the internal mechanism of a system or component and focuses solely on the outputs generated in response to selected inputs and execution conditions. or Black Box Testing. `),
    new qList(`What is Glass Box Testing? `,`White Box Testing is also known as Glass Box testing. `),
    new qList(`What is Gorilla Testing? `,`Gorilla Testing is a testing technique in which sometimes developers also join hands with testers to test a particular module thoroughly in all aspects. `),
    new qList(`What is Gray Box Testing? `,`A combination of Black Box and White Box testing methodologies is called Gray box testing. Testing a piece of software against its specification but using some knowledge of its internal workings. `),
    new qList(`What is High Order Tests? `,`Black-box tests conducted once the software has been integrated. `),
    new qList(`What is Independent Test Group (ITG)? `,`A group of people whose primary responsibility is software testing.`),
    new qList(`What is Inspection? `,`A group review quality improvement process for written material. It consists of two aspects; product (document itself) improvement and process improvement (of both document production and inspection). `),
    new qList(`What is Integration Testing? `,`After integrating two different components together we do the integration testing. Integration testing is usually performed after unit and functional testing. This type of testing is especially relevant to client/server and distributed systems. `),
    new qList(`What is Installation Testing? `,`Installation testing is a kind of quality assurance work in the software industry that focuses on what customers will need to do to install and set up the new software successfully. The testing process may involve full, partial or upgrades install/uninstall processes. `),
    new qList(`What is Load Testing? `,`A load testing is a type of software testing which is conducted to understand the behaviour of the application under a specific expected load. `),
    new qList(`What is Localization Testing? `,`This term refers to making software specifically designed for a specific locality. `),
    new qList(`What is Loop Testing? `,`A white box testing technique that exercises program loops in order to validate them. `),
    new qList(`What is Metric? `,`Metric is a standard of measurement. Software metrics are the statistics describing the structure or content of a program. A metric should be a real objective measurement of something such as number of bugs per lines of code. `),
    new qList(`What is Monkey Testing? `,`Testing a system or an Application on the fly, i.e just few tests here and there to ensure the system or an application does not crash out. `),
    new qList(`What is Negative Testing? `,`Testing aimed at showing software does not work. This is also known as "test to fail". See also Positive Testing. `),
    new qList(`What is Path Testing? `,`Testing in which all paths are in the program source code are tested at least once. `),
    new qList(`What is Performance Testing? `,`Testing conducted to evaluate the compliance of a system or component with specified performance requirements. Often this is performed using an automated test tool to simulate large number of users.  `),
    new qList(`What is Positive Testing? `,`Testing aimed at showing software works. This is also known as "test to pass". `),
    new qList(`What is Quality Assurance? `,`All those planned or systematic actions necessary to provide adequate confidence that a product or service is of the type and quality needed and expected by the customer.`),
    new qList(`What is Quality Audit? `,`A systematic and independent examination to determine whether quality activities and related results comply with planned arrangements and whether these arrangements are implemented effectively and are suitable to achieve objectives. `),
    new qList(`What is Quality Circle? `,`A group of individuals with related interests that meet at regular intervals to consider problems or other matters related to the quality of outputs of a process and to the correction of problems or to the improvement of quality. `),
    new qList(`What is Quality Control? `,`The operational techniques and the activities used to fulfil and verify requirements of quality. `),
    new qList(`What is Quality Management? `,`That aspect of the overall management function that determines and implements the quality policy. `),
    new qList(`What is Quality Policy? `,`In quality management system, a quality policy is a document jointly developed by management and quality experts to express the quality objectives of the organization, the acceptable level of quality and the duties of specific departments to ensure quality. `),
    new qList(`What is Quality System? `,`The organizational structure, responsibilities, procedures, processes, and resources for implementing quality management is called Quality System. `),
    new qList(`What is Race Condition? `,`A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly. `),
    new qList(`What is Ramp Testing? `,`Continuously raising an input signal until the system breaks down. `),
    new qList(`What is Recovery Testing? `,`Recovery testing confirms that the program recovers from expected or unexpected events without loss of data or functionality. Events can include shortage of disk space, unexpected loss of communication, or power out conditions. `),
    new qList(`What is Regression Testing? `,`Retesting a previously tested program following modification to ensure that faults have not been introduced or uncovered as a result of the changes made is called Regression testing. `),
    new qList(`What is Release Candidate? `,`A pre-release version, which contains the desired functionality of the final version, but which needs to be tested for bugs (which ideally should be removed before the final version is released). `),
    new qList(`What is Sanity Testing? `,`Brief test of major functional elements of a piece of software to determine if its basically operational. See also Smoke Testing. `),
    new qList(`What is Scalability Testing? `,`Performance testing focused on ensuring the application under test gracefully handles increases in work load. `),
    new qList(`What is Security Testing? `,`Testing which confirms that the program can restrict access to authorized personnel and that the authorized personnel can access the functions available to their security level. `),
    new qList(`What is Smoke Testing? `,`In Software testing context, smoke testing refers to testing the basic functionality of the build. `),
    new qList(`What is Soak Testing? `,`Running a system at high load for a prolonged period of time is called Soak testing. For example; run several times more transactions in an entire day (or night) than would be expected in a busy day, to identify the performance problems that appear after a large number of transactions have been executed. `),
    new qList(`What is Software Requirements Specification? `,`A deliverable that describes all data, functional and behavioural requirements, all constraints, and all validation requirements for software.`),
    new qList(`What is Software Testing? `,`A set of activities conducted with the intent of finding errors in software. `),
    new qList(`What is Static Analysis? `,`Analysis of a program carried out without executing the program. `),
    new qList(`What is Static Analyzer? `,`A tool that carries out static analysis is called Static Analyzer. `),
    new qList(`What is Static Testing? `,`Analysis of a program carried out without executing the program. `),
    new qList(`What is Storage Testing? `,`Testing that verifies the program under test stores data files in the correct directories and that it reserves sufficient space to prevent unexpected termination resulting from lack of space. This is external storage as opposed to internal storage. `),
    new qList(`What is Stress Testing? `,`Testing conducted to evaluate a system or component at or beyond the limits of its specified requirements to determine the load under which it fails and how. Often this is performance testing using a very high level of simulated load. `),
    new qList(`What is Structural Testing? `,`Testing based on an analysis of internal workings and structure of a piece of software. See also White Box Testing. `),
    new qList(`What is System Testing? `,`Testing that attempts to discover defects that are properties of the entire system rather than of its individual components is called System testing. `),
    new qList(`What is Testability? `,`The degree to which a system or component facilitates the establishment of test criteria and the performance of tests to determine whether those criteria have been met. `),
    new qList(`What is Testing? `,`The process of exercising software to verify that it satisfies specified requirements and to detect errors is called testing. The process of analyzing a software item to detect the differences between existing and required conditions (that is, bugs), and to evaluate the features of the software item (Ref. IEEE Std 829). The process of operating a system or component under specified conditions, observing or recording the results, and making an evaluation of some aspect of the system or component. `),
    new qList(`What is the difference between quality assurance and testing? `,`Quality assurance involves the entire software development process and testing involves operation of a system or application to evaluate the results under certain conditions. QA is oriented to prevention and Testing is oriented to detection. `),
    new qList(`Why does software have bugs? `,` Software have bugs because of the following reasons: 1) Miscommunication 2) programming errors 3) time pressures. 4) Changing requirements 5) software complexity `),
    new qList(`How do you do usability testing, security testing, installation testing, ADHOC, safety and smoke testing? `,`Usability testing : testing the user friendliness , simplicity of software. Security testing is testing the access rights for example admin has all rights, user1 has only right to read and open not to write . Installation testing is testing the software while installing it in different environment. Safety and security goes hand in hand most of the time it used logins. Smoke testing is to test the software whether the basic functionality is working or not. If u wants to Test the basic functionalities then we go for ADHOC it happens if we don’t have time to test procedure wise  `),
    new qList(`What are memory leaks and buffer overflows? `,`Memory leaks means incomplete de-allocation - are bugs that happen very often. Buffer overflow means data sent as input to the server that overflows the boundaries of the input area, thus causing the server to misbehave. `),
    new qList(`What are the major differences between stress testing, load testing, Volume testing? `,`Stress testing means increasing the load and checking the performance at each level. Load testing means at a time giving more load by the expectation and checking the performance at that level. Volume testing means first we have to apply initial. `),
    new qList(`What is Exhaustive Testing? `,`Testing which covers all combinations of input values and preconditions for an element of the software under test. `),
    new qList(`What is Functional Decomposition? `,`A technique used during planning, analysis and design; creates a functional hierarchy for the software. `),
    new qList(`What is Functional Specification? `,`A document that describes in detail the characteristics of the product with regard to its intended features is called Functional Specification. `),
    new qList(`What is Test Bed? `,`An execution environment configured for testing. It may consist of specific hardware, OS, network topology, configuration of the product under test, other application or system software, etc. The Test Plan for a project should enumerate the test beds(s) to be used. `),
    new qList(`What is Test Case? `,`Test Case is a commonly used term for a specific test. This is usually the smallest unit of testing. A Test Case will consist of information such as requirements testing, test steps, verification steps, prerequisites, outputs, test environment, etc. A set of inputs, execution preconditions, and expected outcomes developed for a particular objective, such as to exercise a particular program path or to verify compliance with a specific requirement. Test Driven Development? Testing methodology associated with Agile Programming in which every chunk of code is covered by unit tests, which must all pass all the time, in an effort to eliminate unit-level and regression bugs during development. Practitioners of TDD write a lot of tests, i.e. an equal number of lines of test code to the size of the production code. `),
    new qList(`What is Test Driver? `,`A program or test tool used to execute a test. `),
    new qList(`What is Test Environment? `,`The hardware and software environment in which tests will be run, and any other software with which the software under test interacts when under test including stubs and test drivers. `),
    new qList(`What is Test First Design? `,`Test-first design is one of the mandatory practices of Extreme Programming (XP).It requires that programmers do not write any production code until they have first written a unit test. `),
    new qList(`What is Test Harness? `,`A program or test tool used to execute tests. `),
    new qList(`What is Test Plan? `,`A document describing the scope, approach, resources, and schedule of intended testing activities. It identifies test items, the features to be tested, the testing tasks, who will do each task, and any risks requiring contingency planning. `),
    new qList(`What is Test Procedure? `,`A document providing detailed instructions for the execution of one or more test cases is called test Procedure. `),
    new qList(`What is Test Script? `,`Test script is commonly used to refer to the instructions for a particular test that will be carried out by an automated test tool. `),
    new qList(`What is Test Specification? `,`Test specification is a document specifying the test approach for a software feature or combination or features and the inputs, predicted results and execution conditions for the associated tests. `),
    new qList(`What is Test Suite? `,`A collection of tests used to validate the behaviour of a product. The scope of a Test Suite varies from organization to organization. There may be several Test Suites for a particular product for example. In most cases however a Test Suite is a high level concept, grouping together hundreds or thousands of tests related by what they are intended to test. `),
    new qList(`What is Test Tool? `,`Computer programs used for the testing of a system, a component of the system, or its documentation is called a test tool. `),
    new qList(`What is Thread Testing? `,`A variation of top-down testing where the progressive integration of components follows the implementation of subsets of the requirements, as opposed to the integration of components by successively lower levels. `),
    new qList(`What is Top Down Testing? `,`Top down testing is an approach to integration testing where the component at the top of the component hierarchy is tested first, with lower level components being simulated by stubs. Tested components are then used to test lower level components. The process is repeated until the lowest level components have been tested. `),
    new qList(`What is Total Quality Management? `,`Total Quality Management is a company commitment to develop a process that achieves high quality product and customer satisfaction. `),
    new qList(`What is Traceability Matrix? `,`Traceability Matrix is a document showing the relationship between Test Requirements and Test Cases. `),
    new qList(`What is Usability Testing?`,`Testing the ease with which users can learn and use a product. `),
    new qList(`What is Use Case? `,`Use case is the specification of tests that are conducted from the end-user perspective. Use cases tend to focus on operating software as an end-user would conduct their day-to-day activities. `),
    new qList(`What is Unit Testing? `,`Testing of individual software components is called Unit testing. `),
    new qList(`What is Validation? `,`The process of evaluating software at the end of the software development process to ensure compliance with software requirements is called Validation.  `),
    new qList(`What is Verification? `,`The process of determining whether or not the products of a given phase of the software development cycle meet the implementation steps and can be traced to the incoming objectives established during the previous phase. `),
    new qList(`What is White Box Testing? `,`Testing based on an analysis of internal workings and structure of a piece of software. This includes techniques such as Branch Testing and Path Testing. This also known as Structural Testing and Glass Box Testing. Contrast with Black Box Testing. White box testing is used to test the internal logic of the code for ex checking whether the path has been executed once, checking whether the branches has been executed at least once .This is used to check the structure of the code.`),
    new qList(`What is Workflow Testing? `,`Workflow processes technique in software testing by routing a record through each possible path. These tests are performed to ensure that each workflow process accurately reflects the business process. This kind of testing holds good for workflow-based applications. `),
    new qList(`What's the difference between load and stress testing ? `,`One of the most common, but unfortunate misuse of terminology is treating “load testing” and “stress testing” as synonymous. The consequence of this ignorant semantic abuse is usually that the system is neither properly “load tested” nor subjected to a meaningful stress test. Stress testing is subjecting a system to an unreasonable load while denying it the resources (e.g., RAM, disc, mips, interrupts, etc.) needed to process that load. The idea is to stress a system to the breaking point in order to find bugs that will make that break potentially harmful. The system is not expected to process the overload without adequate resources, but to behave (e.g., fail) in a decent manner (e.g., not corrupting or losing data). Bugs and failure modes discovered under stress testing may or may not be repaired depending on the application, the failure mode, consequences, etc. The load (incoming transaction stream) in stress testing is often deliberately distorted so as to force the system into resource depletion. Load testing is subjecting a system to a statistically representative (usually) load. The two main reasons for using such loads is in support of software reliability testing and in performance testing. The term 'load testing' by itself is too vague and imprecise to warrant use. For example, do you mean representative load,' 'overload,' 'high load,' etc. In performance testing, load is varied from a minimum (zero) to the maximum level the system can sustain without running out of resources or having, transactions >suffer (application-specific) excessive delay. A third use of the term is as a test whose objective is to determine the maximum sustainable load the system can handle. In this usage, 'load testing' is merely testing at the highest transaction arrival rate in performance testing. `),
    new qList(`What's the difference between QA and testing? `,`QA is more a preventive thing, ensuring quality in the company and therefore the product rather than just testing the product for software bugs? TESTING means 'quality control' QUALITY CONTROL measures the quality of a product QUALITY ASSURANCE measures the quality of processes used to create a quality product. `),
    new qList(`What is the best tester to developer ratio? `,`Tester : developer ratios range from 10:1 to 1:10. There's no simple answer. It depends on so many things, Amount of reused code, number and type of interfaces, platform, quality goals, etc. It also can depend on the development model. The more specs, the less testers. The roles can play a big part also. Does QA own beta? Do you include process auditors or planning activities? These figures can all vary very widely depending on how you define 'tester' and 'developer'. In some organizations, a 'tester' is anyone who happens to be testing software at the time -- such as their own. In other organizations, a 'tester' is only a member of an independent test group. It is better to ask about the test labour content than it is to ask about the tester/developer ratio. The test labour content, across most applications is generally accepted as 50%, when people do honest accounting. For life-critical software, this can go up to 80%. `),
    new qList(`How can new Software QA processes be introduced in an existing organization? `,`A lot depends on the size of the organization and the risks involved. For large organizations with high-risk (in terms of lives or property) projects, serious management buy-in is required and a formalized QA process is necessary. - Where the risk is lower, management and organizational buy-in and QA implementation may be a slower, step-at-a-time process. QA processes should be balanced with productivity so as to keep bureaucracy from getting out of hand. - For small groups or projects, a more ad-hoc process may be appropriate, depending on the type of customers and projects. A lot will depend on team leads or managers, feedback to developers, and ensuring adequate communications among customers, managers, developers, and testers. - In all cases the most value for effort will be in requirements management processes, with a goal of clear, complete, testable requirement specifications or expectations. `),
    new qList(`What are 5 common problems in the software development process? `,` The 5 common problems in the software development process are as follows: 
1) Poor requirements - if requirements are unclear, incomplete, too general, or not testable, there will be problems. 2) Unrealistic schedule - if too much work is crammed in too little time, problems are inevitable. 3) Inadequate testing - no one will know whether or not the program is any good until the customer complaints or systems crash. 4) Features - requests to pile on new features after development is underway; extremely common. 5) Miscommunication - if developers don't know what's needed or customer's have erroneous expectations, problems are guaranteed. 
`),
    new qList(`What are 5 common solutions to software development problems? `,`The 5 common solutions to software development problems as given below: 
1) Solid requirements - clear, complete, detailed, cohesive, attainable, testable requirements that are agreed to by all players. Use prototypes to help nail down requirements. 2) Realistic schedules - allow adequate time for planning, design, testing, bug fixing, re-testing, changes, and documentation; personnel should be able to complete the project without burning out. 3) Adequate testing - start testing early on, re-test after fixes or changes, plan for adequate time for testing and bug-fixing. 4) Stick to initial requirements as much as possible - be prepared to defend against changes and additions once development has begun, and be prepared to explain consequences. If changes are necessary, they should be adequately reflected in related schedule changes. If possible, use rapid prototyping during the design phase so that customers can see what to expect. This will provide them a higher comfort level with their requirements decisions and minimize changes later on. 5) communication - require walkthroughs and inspections when appropriate; make extensive use of group communication tools - e-mail, groupware, networked bug-tracking tools and change management tools, intranet capabilities, etc.; insure that documentation is available and up-to-date - preferably electronic, not paper; promote teamwork and cooperation; use prototypes early on so that customers' expectations are clarified. 
`),
    new qList(`What's the role of documentation in QA? `,`The role of documentation in QA is Critical. (Note that documentation can be electronic, not necessarily paper.) QA practices should be documented such that they are repeatable. Specifications, designs, business rules, inspection reports, configurations, code changes, test plans, test cases, bug reports, user manuals, etc. should all be documented. There should ideally be a system for easily finding and obtaining documents and determining what documentation will have a particular piece of information. Change management for documentation should be used if possible. `),
    new qList(`What's the big deal about 'requirements'? `,`One of the most reliable methods of insuring problems, or failure, in a complex software project is to have poorly documented requirements specifications. Requirements are the details describing an application's externally-perceived functionality and properties. Requirements should be clear, complete, reasonably detailed, cohesive, attainable, and testable. A non-testable requirement would be, for example, 'user-friendly' (too subjective). A testable requirement would be something like 'the user must enter their previously-assigned password to access the application'. Determining and organizing requirements details in a useful and efficient way can be a difficult effort; different methods are available depending on the particular project. Many books are available that describe various approaches to this task. Care should be taken to involve ALL of a project's significant 'customers' in the requirements process. 'Customers' could be in-house personnel or out, and could include endusers, customer acceptance testers, customer contract officers, customer management, future software maintenance engineers, salespeople, etc. Anyone who could later derail the project if their expectations aren't met should be included if possible. Organizations vary considerably in their handling of requirements specifications. Ideally, the requirements are spelled out in a document with statements such as 'The product shall.....'. 'Design' specifications should not be confused with 'requirements'; design specifications should be traceable back to the requirements. In some organizations requirements may end up in high level project plans, functional specification documents, in design documents, or in other documents at various levels of detail. No matter what they are called, some type of documentation with detailed requirements will be needed by testers in order to properly plan and execute tests. Without such documentation, there will be no clear-cut way to determine if a software application is performing correctly. `),
    new qList(`What steps are needed to develop and run software tests? `,`The following are some of the steps to consider: - Obtain requirements, functional design, and internal design specifications and other necessary documents - Obtain budget and schedule requirements - Determine project-related personnel and their responsibilities, reporting requirements, required standards and processes (such as release processes, change processes, etc.) - Identify application's higher-risk aspects, set priorities, and determine scope and limitations of tests - Determine test approaches and methods - unit, integration, functional, system, load, usability tests, etc. - Determine test environment requirements (hardware, software, communications, etc.) -Determine testware requirements (record/playback tools, coverage analyzers, test tracking, problem/bug tracking, etc.) - Determine test input data requirements - Identify tasks, those responsible for tasks, and labor requirements - Set schedule estimates, timelines, milestones - Determine input equivalence classes, boundary value analyses, error classes - Prepare test plan document and have needed reviews/approvals - Write test cases - Have needed reviews/inspections/approvals of test cases - Prepare test environment and testware, obtain needed user manuals/reference 
documents/configuration guides/installation guides, set up test tracking processes, set up logging and archiving processes, set up or obtain test input data - Obtain and install software releases - Perform tests - Evaluate and report results - Track problems/bugs and fixes - Retest as needed - Maintain and update test plans, test cases, test environment, and testware through life cycle 
`),
    new qList(`What if the software is so buggy it can't really be tested at all? `,`The best bet in this situation is for the testers to go through the process of reporting whatever bugs or blocking-type problems initially show up, with the focus being on critical bugs. Since this type of problem can severely affect schedules, and indicates deeper problems in the software development process (such as insufficient unit testing or insufficient integration testing, poor design, improper build or release procedures, etc.) managers should be notified, and provided with some documentation as evidence of the problem. `),
    new qList(`How can it be known when to stop testing? `,`This can be difficult to determine. Many modern software applications are so complex, and run in such an interdependent environment, that complete testing can never be done. Common factors in deciding when to stop are: - Deadlines (release deadlines, testing deadlines, etc.)- Test cases completed with certain percentage passed - Test budget depleted - Coverage of 
code/functionality/requirements reaches a specified point - Bug rate falls below a certain level - Beta or alpha testing period ends 
`),
    new qList(`What if there isn't enough time for thorough testing? `,`Use risk analysis to determine where testing should be focused. Since it's rarely possible to test every possible aspect of an application, every possible combination of events, every dependency, or everything that could go wrong, risk analysis is appropriate to most software development projects. This requires judgement skills, common sense, and experience. (If warranted, formal methods are also available.) Considerations can include: - Which functionality is most important to the project's intended purpose? - Which functionality is most visible to the user? - Which functionality has the largest safety impact? - Which functionality has the largest financial impact on users? - Which aspects of the application are most important to the customer? - Which aspects of the application can be tested early in the development cycle? - Which parts of the code are most complex, and thus most subject to errors? - Which parts of the application were developed in rush or panic mode? - Which aspects of similar/related previous projects caused problems? - Which aspects of similar/related previous projects had large maintenance expenses? - Which parts of the requirements and design are unclear or poorly thought out? - What do the developers think are the highest-risk aspects of the application? - What kinds of problems would cause the worst publicity? - What kinds of problems would cause the most customer service complaints?- What kinds of tests could easily cover multiple functionalities? - Which tests will have the best high-risk-coverage to time-required ratio? `),
    new qList(`What can be done if requirements are changing continuously? `,`This is a common problem and a major headache. - Work with the project's stakeholders early on to understand how requirements might change so that alternate test plans and strategies can be worked out in advance, if possible. - It's helpful if the application's initial design allows for some adaptability so that later changes do not require redoing the application from scratch. - If the code is well-commented and well-documented this makes changes easier for the developers.- Use rapid prototyping whenever possible to help customers feel sure of their requirements and minimize changes. - The project's initial schedule should allow for some extra time commensurate with the possibility of changes.- Try to move new requirements to a 'Phase 2' version of an application, while using the original requirements for the 'Phase 1' version. - Negotiate to allow only easily-implemented new requirements into the project, while moving more difficult new requirements into future versions of the application. - Be sure that customers and management understand the scheduling impacts, inherent risks, and costs of significant requirements changes. Then let management or the customers (not the developers or testers) decide if the changes are warranted - after all, that's their job. - Balance the effort put into setting up automated testing with the expected effort required to re-do them to deal with changes. - Try to design some flexibility into automated test scripts. - Focus initial automated testing on application aspects that are most likely to remain unchanged. - Devote appropriate effort to risk analysis of changes to minimize regression testing needs. - Design some flexibility into test cases (this is not easily done; the best bet might be to minimize the detail in the test cases, or set up only higher-level generic-type test plans) - Focus less on detailed test plans and test cases and more on ad hoc testing (with an understanding of the added risk that this entails). `),
    new qList(`What if the project isn't big enough to justify extensive testing? `,`Consider the impact of project errors, not the size of the project. However, if extensive testing is still not justified, risk analysis is again needed and the same considerations as described previously in 'What if there isn't enough time for thorough testing?' apply. The tester might then do ad hoc testing, or write up a limited test plan based on the risk analysis. `),
    new qList(`What if the application has functionality that wasn't in the requirements? `,`It may take serious effort to determine if an application has significant unexpected or hidden functionality, and it would indicate deeper problems in the software development process. If the functionality isn't necessary to the purpose of the application, it should be removed, as it may have unknown impacts or dependencies that were not taken into account by the designer or the customer. If not removed, design information will be needed to determine added testing needs or regression testing needs. Management should be made aware of any significant added risks as a result of the unexpected functionality. If the functionality only effects areas such as minor improvements in the user interface, for example, it may not be a significant risk. `),
    new qList(`How can Software QA processes be implemented without stifling productivity? `,`By implementing QA processes slowly over time, using consensus to reach agreement on processes, and adjusting and experimenting as an organization grows and matures, productivity will be improved instead of stifled. Problem prevention will lessen the need for problem detection, panics and burn-out will decrease, and there will be improved focus and less wasted effort. At the same time, attempts should be made to keep processes simple and efficient, minimize paperwork, promote computerbased processes and automated tracking and reporting, minimize time required in meetings, and promote training as part of the QA process. However, no one - especially talented technical types - likes rules or bureaucracy, and in the short run things may slow down a bit. A typical scenario would be that more days of planning and development will be needed, but less time will be required for latenight bug-fixing and calming of irate customers. `),
    new qList(`What if an organization is growing so fast that fixed QA processes are impossible? `,`This is a common problem in the software industry, especially in new technology areas. There is no easy solution in this situation, other than: - Hire good people - Management should 'ruthlessly prioritize' quality issues and maintain focus on the customer - Everyone in the organization should be clear on what 'quality' means to the customer `),
    new qList(`How does a client/server environment affect testing? `,`Client/server applications can be quite complex due to the multiple dependencies among clients, data communications, hardware, and servers. Thus testing requirements can be extensive. When time is limited (as it usually is) the focus should be on integration and system testing. Additionally, load/stress/performance testing may be useful in determining client/server application limitations and capabilities. There are commercial tools to assist with such testing. `),
    new qList(`How can World Wide Web sites be tested? `,`Web sites are essentially client/server applications - with web servers and 'browser' clients. 
Consideration should be given to the interactions between html pages, TCP/IP communications, Internet connections, firewalls, applications that run in web pages (such as applets, javascript, plug-in applications), and applications that run on the server side (such as cgi scripts, database interfaces, logging applications, dynamic page generators, asp, etc.). Additionally, there are a wide variety of servers and browsers, various versions of each, small but sometimes significant differences between them, variations in connection speeds, rapidly changing technologies, and multiple standards and protocols. The end result is that testing for web sites can become a major ongoing effort. `),
    new qList(`Will automated testing tools make testing easier? `,`- Possibly. For small projects, the time needed to learn and implement them may not be worth it. For larger projects, or on-going long-term projects they can be valuable. - A common type of automated tool is the 'record/playback' type. For example, a tester could click through all combinations of menu choices, dialog box choices, buttons, etc. in an application GUI and have them 'recorded' and the results logged by a tool. The 'recording' is typically in the form of text based on a scripting language that is interpretable by the testing tool. If new buttons are added, or some underlying code in the application is changed, etc. the application can then be retested by just 'playing back' the 'recorded' actions, and comparing the logging results to check effects of the changes. The problem with such tools is that if there are continual changes to the system being tested, the 'recordings' may have to be changed so much that it becomes very time-consuming to continuously update the scripts. 
Additionally, interpretation of results (screens, data, logs, etc.) can be a difficult task. Note that there are record/playback tools for text-based interfaces also, and for all types of platforms.- Other automated tools can include: code analyzers - monitor code complexity, adherence to standards, etc. coverage analyzers - these tools check which parts of the code have been exercised by a test, and may be oriented to code statement coverage, condition coverage, path coverage, etc. memory analyzers - such as bounds-checkers and leak detectors. load/performance test tools - for testing client/server and web applications under various load levels. web test tools - to check that links are valid, HTML code usage is correct, client-side and server-side programs work, a web site's interactions are secure. other tools - for test case management, documentation management, bug reporting, and configuration management. 
`),
    new qList(`What's the difference between black box and white box testing? `,`Black-box and white-box are test design methods. Black-box test design treats the system as a 
“black-box”, so it doesn't explicitly use knowledge of the internal structure. Black-box test design is usually described as focusing on testing functional requirements. Synonyms for black-box include: behavioural, functional, opaque-box, and closed-box. White-box test design allows one to peek inside the “box”, and it focuses specifically on using internal knowledge of the software to guide the selection of test data. Synonyms for white-box include: structural, glass-box and clear-box. While black-box and white-box are terms that are still in popular use, many people prefer the terms 'behavioural' and 'structural'. Behavioural test design is slightly different from black-box test design because the use of internal knowledge isn't strictly forbidden, but it's still discouraged. In practice, it hasn't proven useful to use a single test design method. One has to use a mixture of different methods so that they aren't hindered by the limitations of a particular one. Some call this 'gray-box' or 'translucent-box' test design, but others wish we'd stop talking about boxes altogether. It is important to understand that these methods are used during the test design phase, and their influence is hard to see in the tests once they're implemented. Note that any level of testing (unit testing, system testing, etc.) can use any test design methods. Unit testing is usually associated with structural test design, but this is because testers usually don't have well-defined requirements at the unit level to validate. 
`),
    new qList(`Why does software have bugs? `,`1) Miscommunication or no communication - as to specifics of what an application should or shouldn't do (the application's requirements). 2) Software complexity - the complexity of current software applications can be difficult to comprehend for anyone without experience in modern-day software development. Multi-tiered applications, client-server and distributed applications, data communications, enormous relational databases, and sheer size of applications have all contributed to the exponential growth in software/system complexity. programming errors - programmers, like anyone else, can make mistakes. 3) Changing requirements (whether documented or undocumented) - the end-user may not understand the effects of changes, or may understand and request them anyway - redesign, rescheduling of engineers, effects on other projects, work already completed that may have to be redone or thrown out, hardware requirements that may be affected, etc. If there are many minor changes or any major changes, known and unknown dependencies among parts of the project are likely to interact and cause problems, and the complexity of coordinating changes may result in errors. Enthusiasm of engineering staff may be affected. In some fast-changing business environments, continuously modified requirements may be a fact of life. In this case, management must understand the resulting risks, and QA and test engineers must adapt and plan for continuous extensive testing to keep the inevitable bugs from running out of control. 4) Poorly documented code - it's tough to maintain and modify code that is badly written or poorly documented; the result is bugs. In many organizations management provides no incentive for programmers to document their code or write clear, understandable, maintainable code. In fact, it's usually the opposite: they get points mostly for quickly turning out code, and there's job security if nobody else can understand it ('if it was hard to write, it should be hard to read'). 5) software development tools - visual tools, class libraries, compilers, scripting tools, etc. often introduce their own bugs or are poorly documented, resulting in added bugs.`),
    new qList(`What are the tables in test plans and test cases? `,`Test plan is a document that contains the scope, approach, test design and test strategies. It includes the following:-1) Test case identifier 2) Scope 3) Features to be tested 4) Features not to be tested. 5) Test strategy. 6) Test Approach 7) Test Deliverables 8) Responsibilities. 9) Staffing and Training 10)  Risk and Contingencies 11) Approval While A test case is a noted/documented set of steps/activities that are carried out or executed on the software in order to confirm its functionality/behaviour to certain set of inputs. `),
    new qList(`What automating testing tools are you familiar with? `,`Win Runner, Load runner, QTP , Silk Performer, Test director, Rational robot, QA run.`),
    new qList(`Why did you use automating testing tools in your job? `,`Automating testing tools are used because of the following reasons: 
1) For regression testing 2) Criteria to decide the condition of a particular build  
`),
    new qList(`How do you plan test automation? `,`1) Prepare the automation Test plan 2) Identify the scenario 3) Record the scenario 4) Enhance the scripts by inserting check points and Conditional Loops 5) Incorporated Error Handler 6) Debug the script 7) Fix the issue 8) Rerun the script and report the result. `),
    new qList(`Can test automation improve test effectiveness? `,`Yes, automating a test makes the test process: 1) Fast 2) Reliable 3) Repeatable 4) Programmable 5) Reusable 6) Comprehensive  `),
    new qList(`What are the main attributes of test automation? `,`software test automation attributes : Maintainability - the effort needed to update the test automation suites for each new release Reliability - the accuracy and repeatability of the test automation 
Flexibility - the ease of working with all the different kinds of automation test ware Efficiency - the total cost related to the effort needed for the automation Portability - the ability of the automated test to run on different environments Robustness - the effectiveness of automation on an unstable or rapidly changing system Usability - the extent to which automation can be used by different types of users 
`),
    new qList(`Does automation replace manual testing? `,`There can be some functionality which cannot be tested in an automated tool so we may have to do it manually. Therefore manual testing can never be replaced. (We can write the scripts for negative testing also but it is hectic task).When we talk about real environment we do negative testing manually. `),
    new qList(`How will you choose a tool for test automation? `,`Choosing of a tool depends on many things like 1) Application to be tested 2) Test environment 3) Scope and limitation of the tool. 4) Feature of the tool 5) Cost of the tool 6) Whether the tool is compatible with your application which means tool should be able to interact with your application 7) Ease of use `),
    new qList(`How you will describe testing activities? `,`Testing activities start from the elaboration phase. The various testing activities are preparing the test plan, Preparing test cases, Execute the test case, Log the bug, validate the bug & take appropriate action for the bug, Automate the test cases. `),
    new qList(`What are principles of good testing scripts for automation? `,`1) Proper code guiding standards 2) Standard format for defining functions, exception handler etc 3) Comments for functions 4.)Proper error handling mechanisms 5) The appropriate synchronisation techniques. `),
    new qList(`Can the activities of test case design be automated? `,`As I know it, test case design is about formulating the steps to be carried out to verify something about the application under test. And this cannot be automated. However, I agree that the process of putting the test results into the excel sheet. `),
    new qList(`What are the limitations of automating software testing? `,`Hard-to-create environments like “out of memory”, “invalid input/reply”, and “corrupt registry entries” make applications behave poorly and existing automated tools can’t force these condition - they simply test your application in “normal” environment. `),
    new qList(`How to test the Web applications? `,`The basic difference in web testing is here we have to test for URL's coverage and links coverage. 
Using Win Runner we can conduct web testing. But we have to make sure that Web test option is selected in "Add in Manager". Using WR we cannot test XML objects. 
`),
    new qList(`How testing is proceeded when SRS or any other document is not given? `,`If SRS is not there we can perform Exploratory testing. In Exploratory testing the basic module is executed and depending on its results, the next plan is executed.`),
    new qList(`How do we test for severe memory leakages? `,`Severe memory leakages can be tested by using Endurance Testing . Endurance Testing means checking for memory leaks or other problems that may occur with prolonged execution. `),
 
];

public wcf=[
    new qList(`Explain what is WCF?`,`WCF (Windows Communication Framework) is Microsoft framework to make inter-process communication easier.  Through various means, it lets you do the communication like MS messaging Queuing, Services, Remoting and so on.  It also allows you talk with other.NET apps, or non-Microsoft technologies (like J2EE).`),
    new qList(`Mention what are the main components of WCF?`,`Main components of WCF are <ul><li>Service:  The working logic</li><li>Host: The path where the data is saved. E.g., .exe, process, windows service</li><li>Endpoints: The way the service is exposed to the outside world</li></ul>`),
    new qList(`Explain how does WCF works?`,`WCF follows the “Software as a Service” model, where all units of functionality are defined as services.  For communication, each point is a portal or connection either with the client or other services. It is a program that exposes a collection of endpoints.`),
    new qList(`Explain what is the difference between ASMX web services and WCF?`,`The difference between WCF and ASMX or ASP.net web service is that ASMX is designed to send and receive messages using SOAP over HTTP only. While the WCF can exchange messages using any format over any transport protocol`),
    new qList(`Mention what is the endpoint in WCF and what are the three major points in WCF?`,`Every service must have an address that determines where the service is located, contract that defines what the service does and binding that tells how to communicate with the service.<ul>
    <li>Address: It specifies the location of the service which will be like http://Myserver/Myservice.  To communicate with our service client it will use this location</li>
    <li>Contract: It specifies the interface between the server and client. It’s a simple interface with some attribute</li>
    <li>Binding: It decides how two parties will communicate with each other in terms of transport and encoding and protocols</li>
    </ul>`),
    new qList(` Explain how many types of contract does WCF defines?`,`WCF defines four types of Contracts<ul><li>Service Contracts</li><li>Data Contracts</li><li>Fault Contracts</li><li>Message Contracts</li></ul>`),
    new qList(`What are the transport schemas does WCF supports?`,`<p>It supports</p><ul>
<li>HTTP</li>
<li>TCP</li>
<li>Peer network</li>
<li>IPC ( Inter Process Communication)</li>
<li>MSMQ</li>
</ul>`),
    new qList(`Mention what are the ways of hosting a WCF service?`,`<p>The ways of hosting a WCF service are</p>
<ul>
<li>IIS</li>
<li>Self-Hosting</li>
<li>WAS (Windows Activation Service)</li>
</ul>`),
    new qList(`Mention the address syntax and the different formats of WCF transport scheme?`,`<p>Address syntax of WCF transport scheme is</p>
<p>[transport]:// [machine or domain] [: optional port] format</p>`),
    new qList(`In WCF what are duplex contracts?`,`p>Duplex messaging or call-back is used in WCF to communicate with the client. Over different transport system Duplex messaging in WCF is done like TCP, Named pipe and even HTTP.  Collectively this is known as duplex contracts in WCF.</p>`),
    new qList(`Mention what are the different instance modes in WCF?`,`<p>To a particular service instance WCF binds an incoming message request, so the available modes are</p>
<ul>
<li>Per Call: This instance is created for each call, efficient in terms of memory but need to maintain session</li>
<li>Per Session: For a complete session of a user instance are created</li>
<li>Single: One instance is created which is shared among all the users and shared among all.  In terms of memory it is least efficient.</li>
</ul>`),
    new qList(`Explain what is a Service Proxy in windows Communication Foundation?`,`<p>In WCF, a service proxy enables applications to interact with WCF service by sending and receiving messages.  It&#8217;s a class that covers service details like service path, service implementation technology, platform and communication protocol and so on.  So, when the application interact the service through proxy, it gives the impression that it&#8217;s communicating a local object.</p>`),
    new qList(`Explain what is SOA?`,`<p>SOA (Service Oriented Architectural) is a collection of services that determines how two computing entities will communicate with each other to achieve certain business functionality and also how one entity can work on behalf of another entity.</p>`),
    new qList(`What are the types of Data Contracts in WCF?`,`<p>There are two types of Data Contracts</p>
<ul>
<li>Data Contract: Attribute used to define the class</li>
<li>Data Member: Attribute used to define the properties</li>
</ul>`),
    new qList(`What are the three types of transaction manager WCF supports`,`<p>The types of the transaction manager that WCF supports are</p>
<ul>
<li>Light Weight</li>
<li>WS- Atomic Transaction</li>
<li>OLE Transaction</li>
</ul>`),
    new qList(`List out the difference between XMLSerializer and the DataContractSerializer?`,`<table>
<tbody>
<tr>
<td width="281">                <strong> DataContractSerializer</strong></td>
<td width="272">                            <strong>XMLSerializer</strong></td>
</tr>
<tr>
<td width="281">&#8211;          For WCF, DataContractSerializer is the default serializer</td>
<td width="272">&#8211;          XMLSerializer is not a default serializer</td>
</tr>
<tr>
<td width="281">&#8211;          Compare to XMLSerializer it is faster</td>
<td width="272">&#8211;          XMLSerializer is slower</td>
</tr>
<tr>
<td width="281">&#8211;          It is used for simple schemes</td>
<td width="272">&#8211;          It is used for complex schemes</td>
</tr>
</tbody>
</table>`),
    new qList(`Explain what are the MEPs available in WCF?`,`<p>MEP stand for Message Exchange Pattern, three types of message exchanged patterns are allowed.</p>
<ul>
<li>Data Gram</li>
<li>Request and Response</li>
<li>Duplex</li>
</ul>`),
    new qList(`Name the namespace that is used to access WCF service?`,`<p>System.ServiceModel is used to access WCF service</p>
<p><strong>19)   </strong><strong>List out the types of binding available in WCF?</strong></p>
<p>The types of binding available in WCF are</p>
<ul>
<li>BasicHttpBinding</li>
<li>NetTcpBinding</li>
<li>WSHttpBinding</li>
<li>NetMsmqBinding</li>
</ul>`),
    new qList(`Explain what is DataContractSerializer?`,`<p>The process of changing an object instance to a portable and transferable format is known as the Serialization, and serialization of data is referred as DataContractSerializer.</p>`),
    new qList(`Mention what are the various address format in WCF?`,`<p>The various address format in WCF are</p>
<ul>
<li>HTTP Address Format: à http:// local host:</li>
<li>TCP Address Format:à net.tcp://local host:</li>
<li>MSMQ Address Format:ànet.msmq://localhost:</li>
</ul>`),
    new qList(`What is REST and what is the problem with WCF REST and how it can be resolved?`,`<p>REST stands for Representational State Transfer, for designing network application REST is used. It relies on a stateless, client server, cacheable communications protocol.  The reason behind creating WCF is to support SOA and not REST. It requires a lot of configuration in order to create HTTP REST service using WCF.  To overcome this tedious task, ASP.NET web API was introduced.</p>`),
    new qList(`List out what are the different isolation levels provided in WCF?`,`<p>The different isolation levels provided in WCF are</p>
<ul>
<li>Read Uncommitted</li>
<li>Read Committed</li>
<li>Repeatable Read</li>
<li>Serializable</li>
</ul>`)
];
public wpf=[
    new qList(`What is WPF?`,`<p>WPF is the latest presentation API by Microsoft Windows. It is 2D and 3D graphic engine. Its capabilities include:-</p>
<ul>
<li>All the common user controls. For example, check boxes, buttons, sliders etc.</li>
<li>Supports flow and fix format documents</li>
<li>all the functionality of Flash and HTML</li>
<li>Data binding</li>
<li>Multimedia</li>
<li>Animation</li>
</ul>`),
    new qList(`How is Silverlight different from WPF browser application?`,`One of the major differences is that .NET framework is required for running WPF browser applications on the client machine. But Silverlight runs using only the plug-in. Another point of difference is that applications made in WPF depend on the OS as .NET Framework only runs on Windows. On the other hand, the Silverlight plug-in can be installed on those OSs also, which are not Windows.`),
    new qList(`Is it possible to use Windows Forms in a WPF application?`,`Yes, Windows form can be used in WPF. Windows form can appear as a WPF pop. The controls of this Window form can be placed besides WPF controls in a WPF page by utilizing the functions of the WindowsFormsHost control that comes preinstalled.`),
    new qList(`Name the common assemblies used in WPF?`,`<ul>
<li>PresentationFoundation</li>
<li>WindowsBase</li>
<li>PresentaionCore</li>
</ul>`),
    new qList(`Explain Routed events in WPF.`,`An event, which can invoke handlers on more than one listeners present in an element tree, instead of the single object which called the event, is known as a Routed event.`),
    new qList(`How is System.Windows.Media.Visual dll utilized in WPF?`,`It is used whenever a requirement for creating custom user interface arises. It is a drawing object, which gives instructions for making an object. These instructions include opacity etc. of the drawing. The Visual class also bridges the functionalities of WPF managed classes and the MilCore.dll.`),
    new qList(`Write the differences between DynamicResource and StaticResource.`,`The most basic difference is that StaticResource evaluates the resource one time only, but DynamicResource evaluates it every time the resource is required. And due to this reason, DyanamicResource is heavy on the system but it makes pages or windows load faster`),
    new qList(`Explain MVVM pattern.`,`<p>MVVM pattern divides the UI code into 3 basic parts:</p>
<ul>
<li>Model – It represents a set of classes, which contain data received from databases.</li>
<li>View – It is the code that agrees with the visual representation of the data.</li>
<li>ViewModel – It is the layer that binds View and Model together. It presents this data in a manner, which is easy to understand. It also controls how View interacts with the application.</li>
</ul>`),
    new qList(`Why are layout panels needed for in WPF?`,`Layout Panels are needed so that the controls fit screens of different sizes or having different font sizes. If we arrange controls on fixed pixel coordinates, then this model will fail when moved to a different environment. For this reason, Layout panels are necessary.`),
    new qList(`What is an adorner?`,`They are a special kind of FrameworkElement that provide visual clues to the user. They are also used to add handles to elements and give information about the state of a control. Adorners are bound to the UIElement and are rendered on a surface that lies above the element, which is adorned. This surface is called an AdornerLayer. Adorners are mostly placed relatively to the bounded element.`),
    new qList(`Where does the execution start in a WPF application?`,`WPF applications created in Visual Studio run without a Main method. This is because the applications are special-cased when they are compiled from XAML. That means, Visual Studio attaches a Build Action of ApplicationDefinition to the XAML file. This results in the auto generation of a Main method.`),
    new qList(`Can Windows Service be created Using WPF?`,`No, Windows Services cannot be created using WPF. WPF is a presentation language. Windows services need specific permissions to execute some GUI related functions. Therefore, if it does not get the required permissions, it gives errors.`),
    new qList(`What are the different kinds of Routed events in WPF?`,`<p>There are three types of Routed events in WPF. They are:</p>
<ul>
<li>Direct &#8211; This event can only be raised by the element in which it was originated.</li>
<li>Tunneling &#8211; This event is first raised by the element in which it was originated and then it gets raised by each consecutive container in the visual tree.</li>
<li>Bubbling &#8211; This event is first raised by the uppermost container in the visual tree and then gets raised by each consecutive container lying below the uppermost one, till it reaches the element it where it was originated.</li>
</ul>`),
    new qList(`Explain what is XAML?  What is the difference between XML and XAML? `,`<p>XAML stands for eXtensible Application Markup Language. It is the language used to instantiate.NET objects.  It is the language developed by Microsoft to write user interface for next generation applications.</p>
<p>XML is designed to store data or to work with the stored data, whereas XAML is the extended version of XML used for.NET programming.</p>`),
    new qList(`Mention the advantage of using XAML?`,`<p>The advantage of using XAML is</p>
<ul>
<li>XAML code is clear to read, and they are short</li>
<li>Separation of designer code and logic</li>
<li>Tools like expression blend used for graphical design require XAML as source</li>
<li>It clearly separates the roles of designer and developer</li>
</ul>`),
    new qList(` What are the ways you can declare objects in XAML?`,`<p>To declare objects in XAML, there are three ways</p>
<ul>
<li>Directly, using object element syntax: This syntax is used to declare root objects or nested objects that set property values</li>
<li>Indirectly by using attribute syntax: This syntax uses an inline string value which has an instruction on how to create an object. To set the value of the property to a newly created reference, the XAML parser uses this string</li>
<li>Using a markup extension</li>
</ul>`),
    new qList(` Explain how you can display different data at run time and design time?`,`<ul>
<li>One way of displaying data at run time and design time is to declare your data in XAML.</li>
</ul>
<ul>
<li>Another way of doing it is by declaring it in XAML by using various data attributes from the designer XML namespace.  With a d: prefix, this namespace is typically declared.</li>
</ul>`),
    new qList(`Explain what is the function x: Key directive in XAML?`,`X: Key uniquely identifies elements that are created and referenced in an XAML defined dictionary. By adding an x: Key value to an XAML object element a resource in the resource dictionary can be identified and is the most common way to identify.`),
    new qList(`Explain what is the use of property element syntax?`,`With the help of property element syntax, you can add children element with a name in the form of parent.propertyName.`),
    new qList(`How custom classes used in XAML can be defined?`,`<p>Custom classes are used in two ways</p>
<ul>
<li>With the code that produces the Primary Windows Presentation Foundation (WPF) application or within the code behind</li>
<li>In a separate assembly as a class, such as an executable or DLL used as a class library</li>
</ul>`),
    new qList(`What is Xaml Namespace?`,`Namespace can be defined as an environment or an abstract container used to hold a logical grouping of unique identifiers or symbols`) 
];
}
