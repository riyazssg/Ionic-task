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
        new qList(` What are the ADO.NET components?`,`<p> ADO.NET components categorized in three modes: disconnected, common or shared and the .NET data providers.
       </p><p><b>The disconnected components</b> build the basic ADO.NET architecture. You can use these components (or classes) with or without data providers. For example, you can use a DataTable object with or without providers and shared or common components are the base classes for data providers.</p>
      <p><b>Shared or common components</b> are the base classes for data providers and shared by all data providers. The data provider components are specifically designed to work with different kinds of data sources. For example, ODBC data providers work with ODBC data sources and OleDb data providers work with OLE-DB data sources.</p>`),
      new qList(`How can you define the DataSet structure?`,`<p>A DataSet object falls in disconnected components series. The DataSet consists of a collection of tables, rows, columns and relationships.</p><img src="/assets/Images/dataset.jpg"></img><p>DataSet contains a collection of DataTables and the DataTable contains a collection of DataRows, DataRelations, and DataColumns. A DataTable maps to a table in the database. The previous DataSet contains a DataTable that maps to the Orders table because you filled it with a SELECT query executed on the Order table.</p>`),
      new qList(` What is Connection Pooling in ADO.NET?`,`<p> Connection pooling is the ability of reusing your connection to the database. This means if you enable Connection pooling in the connection object, actually you enable the re-use of the connection to more than one user.</p>
      A Connection String in the Web.Config file with connection pooling option:
      <pre>&ltconnectionStrings&gt  
       &ltadd name="sqlConnectionString" connectionString="Data Source=mySQLServer;Initial Catalog=myDatabase;Integrated Security=True;Connection Timeout=15;Connection Lifetime=0;Min Pool Size=0;Max Pool Size=100;Pooling=true;" /&gt  
      &lt/connectionStrings&gt </pre>`),
      new qList(`What is SqlCommand Object?`,`<p>The SqlCommand carries the SQL statement that needs to be executed on the database. SqlCommand carries the command in the CommandText property and this property will be used when the SqlCommand calls any of its execute methods.</p>
      <ul><li>The Command Object uses the connection object to execute SQL queries.</li>
      <li>The queries can be in the form of Inline text, Stored Procedures or direct Table access.</li>
      <li>An important feature of Command object is that it can be used to execute queries and Stored Procedures with Parameters.</li>
      </ul>
      The three important methods exposed by the SqlCommand object is shown below:
      <p><b>ExecuteScalar</b> is useful for returning a single value from the database. For example, using this method we can retrieve a sum of sales made by a specific product, total number of records in the employee table, unique id by supplying filtering conditions and so on</p>
      <p><b>ExecuteNonQuery</b> is useful for performing data manipulation on the database. Simply, the ExecuteNonQuery is for executing the DML statements.</p>
      <p><b>ExecuteReader</b> is used when we need to retrieve rows and columns of data using the SQL select statements. As the data retrieved is a table of data, ExecuteReader returns SqlDataReader.</p>`),
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
        new qList(`What is AngularJS?`,`<p>AngularJS has been introduced by  Google. It is a framework that helps you to create dynamic Web apps. Normally, AngularJS uses HTML as the backbone. AngularJS creates extended HTML tags that can be used as normal HTML tags. These tags will help you to write an efficient code. The interesting fact is that you can reduce the lines of code  you may need to write when you use normal JavaScript.</p>
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
     new qList(`What are expressions in AngularJS? `,`<p>Expressions in AngularJS are just like JavaScript code snippets. JavaScript code is usually written inside double braces: <strong>{{expression}}</strong>. In other words, Angular Expressions are JavaScript code snippets with limited sub-set. Expressions are included in the HTML elements.</p>
     For Example, <br><ul><li>{{ 2 + 2 }} (numbers)</li>
     <li>{{Name + " " + email}} (string)</li>
     <li>{{ Country.Name }} (object)</li>
     <li>{{ fact[4] }} (array)</li>
     </ul>
      <br> <img src="assets/Images/angular_expression.jpg"></p>`),
      new qList(`Explain currency filter in AngularJS`,`<p>One of the filters in AngularJS is the Currency Filter. This “currency” filter includes the “$” Dollar Symbol as the default. So we can use the following code as the html template format of Currency Filter.</p>
      <b>{{ currency_expression | currency : symbol : fractionSize}}</b><br><br><b>How to use Currency Filter in AngularJS</b><br>There are two ways by which we can use Currency Filter. 
      <br><ul><li><b>Default</b><br> If we did not provide any currency symbol then by default Dollar-Sign will be used; we can use it as follows: <br> <!-- by default -->

        <b>Default Currency </b>{{amount | currency}} 
       </li>
       <li><b>User Defined</b><br> To use different type of currency symbols we have to define our own symbol by using the unicode or Hexa-Decimal code of that Currency.<br>
       <b>e.g- For Example</b> If we want to define Indian Currency Symbol then we have to use (Unicode-value) or (Hexa-Decimal value)
      <br><b>Indian Currency {{amount | currency:"&# 8377"}}</b> 
      </li></ul>`),
      new qList(`What is $scope in AngularJS ?`,`<p>$scope in AngularJS is an object which refers to an application model. It is an object that binds view (DOM element) with the controller. In controller, model data is accessed via $scope object. As we know, AngularJS supports MV* pattern, $scope object becomes the model of MV*.<br><img src="/assets/Images/ngular_scope.jpg"></img> </p>
      <br><b>Characteristics of scope object </b><ul><li>It provides the APIs to observe model<b> (example $watch)</b>.</li>
      <li>It can be nested, so that it limits access to the properties. Nested scopes are either child scope or isolated scope.</li>
      <li>It provides the APIs to propagate any model changes from the outside of "Angular realm" <b>(example $apply)</b>.</li>
      <li>It provides context against the expression to be evaluated.</li>
      </ul>
      `),
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
        </ul>`),
        new qList(`Explain what is Dependency Injection in AngularJS?`,`<p>Dependency Injection is one of the best features of AngularJS. It is a software design pattern in which objects are passed as dependencies. It helps us to remove hard coded dependencies and makes dependencies configurable. Using Dependency Injection, we can make components maintainable, reusable and testable.</p>
        <b>Dependency Injection is required for the following</b><br>
        <ul><li>Separating the process of creation and consumption of dependencies.</li>
        <li>It allows us to create independent development of the dependencies.</li>
        <li>We can change the dependencies when required.</li>
       <li>It allows injecting mock objects as dependencies for testing.</li>
       </ul>`),
       new qList(`Explain ng-repeat directive.`,`<p>The ng-repeat directive is the most used and very useful AngularJS Directive feature. It iterates over a collection of items and creates DOM elements. It constantly monitors the source of data to re-render a template in response to change.
       </p>`),
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
        </ul>`),
        new qList(`Explain Module  In AngularJS.`,`<p>AngularJS module is nothing but a container of all angular components like controller, services, directive, filter, config etc.Let me explain why module is required in AngularJS. In .NET console application there is a main method and what main method does is, it’s an entry point of application. It is the same as angular module and is an entry point. Using module we can decide how the AngularJS application should be bootstrapped.</p>
        `),
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
     new qList(`What is One-Way Data Binding in AngularJS?`,`<p>One-Way Data Binding simply means that HTML elements reflect the change. When the model values change the HTML elements don't change the values in the model.</p>
     <p>In other words, when the model changes, this change is reflected in the view but the view doesn't change the model. In other words the developer must write extra code for automatic synchronization of data between the model and the view components. One-Way binding may also be called one-direction binding.<br><img src="/assets/Images/bind.jpg"></img></p>`)

        
    ];
    public angular2=[
        new qList(`Explain the life cycle hooks of Angular 2 application`,`<p>Angular 2 component/directive has lifecycle events, managed by @angular/core. It creates the component, renders it, creates and renders its children, processes changes when its data-bound properties change, and then destroys it before removing its template from the DOM.</p><p>Some of the events are applicable for both component/directives while few are specific to components.</p>
        <ul><li><b>ngOnChanges</b>-Responds when angular sets its data-bound property which receives the current and previous object values.</li>
        <li><b>ngOnInit</b>-Initializes the component/directive after first ngOnChange triggers. This is most frequently used method to retrieve the data for the template from a back-end service.</li>
         <li><b>ngDoCheck</b>-Detect and act upon changes occuring outside Angular context. It is called when every change detection run.</li>
       <li><b>ngOnDestroy</b>-Cleanup just before Angular destroys the directive/component. Unsubscribe observables and detach event handlers to avoid memory leaks.</li>
        </ul>
        `),
        new qList(`What are the advantages of using Angular 2 over Angular 1?`,`<ul><li>Angular 2 is a platform not only a language</li>
        <li>Better Speed and Performance: No $Scope in Angular 2, AOT</li>
        <li>Simpler Dependency Injection</li>
        <li>Modular, cross platform</li>
        <li>Benefits of ES6 and Typescript.</li>
        <li>Flexible Routing with Lazy Loading Features</li>
        <li>Easier to Learn</li>
        </ul>`),
        new qList(`How routing works in Angular 2`,`<p>Routing is a mechanism which enables user to navigate between views/components. Angular 2 simplifies the routing and provide flexibility to configure and define at module level (Lazy loading). </p>
        <p>The angular application has single instance of the Router service and whenever URL changes, corresponding Route is matched from the routing configuration array. On successful match, it applies redirects and the router builds a tree of ActivatedRoute objects and contains the current state of the router. Before redirection, the router will check whether new state is permitted by running guards (CanActivate). Route Guards is simply an interface method that router runs to check the route authorization.</p><p> After guard runs, it will resolve the route data and activate the router state by instantiation the required components into &ltrouter-outlet&gt &lt/router-outlet&gt.</p>`),
        new qList(`What are Event Emitters and how it works in Angular 2?`,`<p>Angular 2 doesn’t have bi-directional digest cycle, unlike angular 1. In angular 2, any change occurred in the component always gets propagated from the current component to all its children in hierarchy. If the change from one component needs to be reflected to any of its parent component in hierarchy, we can emit the event by using Event Emitter api.</p>
        <p>In short, EventEmitter is class defined in @angular/core module which can be used by components and directives to emit custom events.</p>
        @output() somethingChanged = new EventEmitter();`),
        new qList(`What is lazy loading and How to enable lazy loading in angular 2?`,`<p>Lazy lading enables us to load only the module user is interacting and keep the rest to be loaded at runtime on demand.<br>
     Lazy loading speeds up the application initial load time by splitting the code into multiple bundles and loading them on demand.
     </p>Every Angular application must have one main module say AppModule. The code should be splitted into various child modules (NgModule) based on the application business case.`),
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
     new qList(`Modern browsers are supported in Angular 2? `,`<p>All the Angular 2 framework code is already being written in ECMAScript 6.</p>
     The set of modern browsers are <br>
     <ul><li>Chrome</li><li>Firefox</li><li>Opera</li><li>safari</li><li>IE version10 and 11</li></ul>`)
        
    ];
    public sqlServer=[
       new qList(`What is SQL?`,`<p>SQL stands for Structured Query Language , and it is used to communicate with the Database. <br>
       This is a standard language used to perform tasks such as retrieval, updation, insertion and deletion of data from a database.<br><br>Standard SQL Commands are Select.</p>`),
       new qList(`What is a Database?`,`<p>Database is nothing but an organized form of data for easy access, storing, retrieval and managing of data.
       <br> This is also known as structured form of data which can be accessed in many ways<br><br>Example: School Management Database, Bank Management Database</p>`),
       new qList(`What are tables and Fields?`,`<p>A table is a set of data that are organized in a model with Columns and Rows. Columns can be categorized as vertical, and Rows are horizontal.
        A table has specified number of column called fields but can have any number of rows which is called record</p>`),
       new qList(`What is a primary key?`,`<p>A primary key is a combination of fields which uniquely specify a row. This is a special kind of unique key, and it has implicit NOT NULL constraint. It means, Primary key values cannot be NULL</p>`),
       new qList(`What is a unique key?`,`<p>A Unique key constraint uniquely identified each record in the database. This provides uniqueness for the column or set of columns</p>
       <p>A Primary key constraint has automatic unique constraint defined on it. But not, in the case of Unique Key</p>
       <p>There can be many unique constraint defined per table, but only one Primary key constraint defined per table.</p>`),
       new qList(`What is a foreign key?`,`<p>A foreign key is one table which can be related to the primary key of another table. Relationship needs to be created between two tables by referencing foreign key with the primary key of another table.</p>`),
       new qList(`What is a join?`,`<p>This is a keyword used to query data from more tables based on the relationship between the fields of the tables. Keys play a major role when JOINs are used.</p>`),
       new qList(`What are the types of join and explain each?`,`<p>There are various types of join which can be used to retrieve data and it depends on the relationship between tables.</p>
       <ul><li><b>Inner join</b>-Inner join return rows when there is at least one match of rows between the tables.</li><br>
       <li><b>Right Join</b>-Right join return rows which are common between the tables and all rows of Right hand side table. Simply, it returns all the rows from the right hand side table even though there are no matches in the left hand side table.</li><br>
       <li><b>Left Join</b>-Left join return rows which are common between the tables and all rows of Left hand side table. Simply, it returns all the rows from Left hand side table even though there are no matches in the Right hand side table.</li><br>
       <li><b>Full Join</b>-Full join return rows when there are matching rows in any one of the tables. This means, it returns all the rows from the left hand side table and all the rows from the right hand side table.</li></ul>`),
       new qList(`What is normalization?`,`<p>Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database. The main aim of Normalization is to add, delete or modify field that can be made in a single table.</p>`),
       new qList(`What is Denormalization?`,`<p>DeNormalization is a technique used to access the data from higher to lower normal forms of database. It is also process of introducing redundancy into a table by incorporating data from the related tables.</p>`),
       new qList(`. What are all the different normalizations?`,`<p>The normal forms can be divided into 5 forms, and they are explained below-</p>
       <ul><li><b>First Normal Form (1NF)-</b>This should remove all the duplicate columns from the table. Creation of tables for the related data and identification of unique columns.</li><br>
       <li><b>Second Normal Form (2NF)-</b>Meeting all requirements of the first normal form. Placing the subsets of data in separate tables and Creation of relationships between the tables using primary keys.</li><br>
       <li><b>Third Normal Form (3NF)-</b>This should meet all requirements of 2NF. Removing the columns which are not dependent on primary key constraints</li><br>
       <li><b>Fourth Normal Form (3NF)-</b>Meeting all the requirements of third normal form and it should not have multi- valued dependencies</li></ul>`),
       new qList(`What is a View?`,`<p>A view is a virtual table which consists of a subset of data contained in a table. Views are not virtually present, and it takes less space to store. View can have data of one or more tables combined, and it is depending on the relationship</p>`),
       new qList(`What is an Index?`,`<p>An index is performance tuning method of allowing faster retrieval of records from the table.<br> An index creates an entry for each value and it will be faster to retrieve data.</p>`),
       new qList(`What are all the different types of indexes?`,`<p>There are three types of indexes -</p>
       <ul><li><b>Unique Index-</b>This indexing does not allow the field to have duplicate values if the column is unique indexed. Unique index can be applied automatically when primary key is defined.</li><br>
       <li><b>Clustered Index-</b>This type of index reorders the physical order of the table and search based on the key values. Each table can have only one clustered index.</li><br>
       <li><b>NonClustered Index-</b>NonClustered Index does not alter the physical order of the table and maintains logical order of data. Each table can have 999 nonclustered indexes</li></ul>`),
       new qList(`What is a Cursor?`,`<p>A database Cursor is a control which enables traversal over the rows or records in the table. This can be viewed as a pointer to one row in a set of rows. Cursor is very much useful for traversing such as retrieval, addition and removal of database records</p>`),
       new qList(`What is a relationship and what are they?`,`<p>Database Relationship is defined as the connection between the tables in a database. There are various data basing relationships, and they are as follows-</p>
       <ul><li>One to One Relationship</li><br>
       <li>One to Many Relationship.</li><br>
       <li>Many to One Relationship</li><br>
       <li>Self-Referencing Relationship</li></ul>`),
       new qList(`What is a query?`,`<p>A DB query is a code written in order to get the information back from the database. Query can be designed in such a way that it matched with our expectation of the result set. Simply, a question to the Database.</p>`),
       new qList(`What is subquery?`,`<p>A subquery is a query within another query. The outer query is called as main query, and inner query is called subquery. SubQuery is always executed first, and the result of subquery is passed on to the main query.</p>`),
       new qList(`What is a trigger?`,`<p>A DB trigger is a code or programs that automatically execute with response to some event on a table or view in a database. Mainly, trigger helps to maintain the integrity of the database</p>
       <p>Example: When a new student is added to the student database, new records should be created in the related tables like Exam, Score and Attendance tables.</p>`),
       new qList(`What is the difference between DELETE and TRUNCATE commands?`,`<p>DELETE command is used to remove rows from the table, and WHERE clause can be used for conditional set of parameters. Commit and Rollback can be performed after delete statement.</p>
       <p>TRUNCATE removes all rows from the table. Truncate operation cannot be rolled back</p>`),
       new qList(`What is Self-Join?`,`<p>Self-join is set to be query used to compare to itself. This is used to compare values in a column with other values in the same column in the same table. ALIAS ES can be used for the same table comparison</p>`),
       new qList(`What is Cross-Join?`,`<p>Cross join defines as Cartesian product where number of rows in the first table multiplied by number of rows in the second table. If suppose, WHERE clause is used in cross join then the query will work like an INNER JOIN.</p>`),
       new qList(`What is user defined functions?`,`<p>User defined functions are the functions written to use that logic whenever required. It is not necessary to write the same logic several times. Instead, function can be called or executed whenever needed</p>`),
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
        new qList(`Explain what is LINQ? Why is it required?`,`<p>Language Integrated Query or LINQ is the collection of standard query operators which provides query facilities into.NET framework language like C#, VB.NET.
        <br>LINQ is required as it bridges the gap between the world of data and world of objects.</p>`),
        new qList(`Explain how LINQ is useful than Stored Procedures?`,`<ul><li><b>Debugging</b>-It is difficult to debug a stored procedure but as LINQ is part of.NET, visual studios debugger can be used to debug the queries</li><br>
        <li><b>Deployment</b>-For stored procedure, additional script should be provided but with LINQ everything gets compiled into single DLL hence deployment becomes easy</li><br>
        <li><b>Type Safety</b>-LINQ is type safe, so queries errors are type checked at compile time</li></ul>`),
        new qList(`List out the three main components of LINQ? Explain what is the extension of the file, when LINQ to SQL is used?`,`<p>Three main components of LINQ are</p>
        <ul><li>Standard Query Operators</li><br>
        <li>Language Extensions</li><br>
        <li>LINQ Providers</li></ul>`),
        new qList(`Explain what is lambda expressions in LINQ?`,`<p>Lambda expression is referred as a unique function use to form delegates or expression tree types, where right side is the output and left side is the input to the method. For writing LINQ queries particularly, Lambda expression is used.</p>`),
        new qList(`Explain how LINQ with databases can be used?`,`<p>LINQ supports XML, SQL, Dataset and Objects. Through LINQ to objects or LINQ to Datasets one can use LINQ with other databases.<br><br> The objects and datasets take care of database particular operations, and LINQ only needs to deal with those objects and not the database operations directly</p>`),
        new qList(`Mention what is the role of DataContext classes in LINQ?`,`<p>DataContext class acts as a bridge between SQL Server database and the LINQ to SQL. For accessing the database and also for changing the data in the database, it contains connections string and the functions.</p>`),
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
        new qList(`What are the advantages of LINQ over stored procedure?`,`<p>Debugging – LINQ supports .Net debugger, so we can easily debug a LINQ query using .NET debugger but it is not supported by SQL stored procedure so it is hard to debug the stored procedure</p>
        <p>Deployment – To deploy stored procedure it is necessary to write one more script to run them, while LINQ will complie by a single DLL statement and so the deployment will be simple. </p>
        <p>Type Safety - As LINQ supports type safety so errors can be type checked in LINQ queries in compile time. It is better to use LINQ as it enable us to identify the errors while compilation rather than runtime execution.</p>`)
    ];
     public SqlQueries=[
        
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
     public practical=[
        
    ];
}
