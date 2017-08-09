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
        <p>It is a framework which helps us to build/develop HTTP services. So there will a client server communication using HTTP protocol.</p>`),
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
        <p>Below are the list of support given by Web API –</p>
        <ul><li>OData</li><br>
        <li>Filters</li><br>
        <li>Content Negotiation</li><br>
        <li>Self Hosting</li><br>
        <li>Routing</li><br>
        <li>Model Bindings</li></ul>`),
        new qList(`What is ASP.NET Web API?`,`
        <p>ASP.NET Web API is a framework that simplifies building HTTP services for broader range of clients (including browsers as well as mobile devices) on top of .NET Framework.</p>
        <p>Using ASP.NET Web API, we can create non-SOAP based services like plain XML or JSON strings, etc. with many other advantages including:</p>
        <ul><li>Create resource-oriented services using the full features of HTTP</li><br>
        <li>Exposing services to a variety of clients easily like browsers or mobile devices, etc.</li></ul>`),
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
        </pre>`),
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
    
}
