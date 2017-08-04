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
        
    ];
    public htmlCss=[
        
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
        
    ];
    public angular1=[
        
    ];
    public angular2=[
        
    ];
    public sqlServer=[
        
    ];
    public aspDotNetMVC=[
        new qList(`What is Model-View-Controller?`,`
        <p>MVC is a software architecture pattern for developing web application. It is handled by three objects Model-View-Controller.</p>`),
        new qList(`What does Model-View-Controller represent in an MVC application?`,`
        <p>In an MVC model,</p> <ul><li><b>Model–</b>It represents the application data domain. In other words applications business logic is contained within the model and is responsible for maintaining data</li></br>
        <li><b>View–</b>It represents the user interface, with which the end users communicates. In short all the user interface logic is contained within the VIEW</li></br>
        <li><b>Controller–</b>It is the controller that answers to user actions. Based on the user actions, the respective controller responds within the model and choose a view to render that display the user interface.  The user input logic is contained with-in the controller</li></ul>`),
        new qList(`List out few different return types of a controller action method?`,`
        <ul><li>View Result</li><li>Javascript Result</li><li>Redirect Result</li><li>JSON Result</li><li>Content Result</li></ul>`),
        new qList(`What is the difference between adding routes, to a webform application and an MVC application?`,`
        <p>To add routes to a webform application, we can use MapPageRoute() method of the RouteCollection class, where adding routes to an MVC application, you can use MapRoute() method. <br><br>
        <img src="assets/Images/mvc-architecture.png"></p>`),
        new qList(`What is the advantages of MVC?`,`<ul><li>MVC segregates your project into a different segment, and it becomes easy for developers to work on</li>
        <li>It is easy to edit or change some part of your project that makes project less development and maintenance cost</li>
        <li></li>MVC makes your project more systematic</ul>`),
        new qList(`What “beforFilter()”,“beforeRender” and “afterFilter” functions do in Controller?`,`
        <ul><li><b>beforeFilter(): </b>This function is run before every action in the controller. It’s the right place to check for an active session or inspect user permissions.</li>
        <li><b>beforeRender():  </b>This function is called after controller action logic, but before the view is rendered. This function is not often used, but may be required If you are calling render() manually before the end of a given action</li>
        <li><b>afterFilter(): </b>This function is called after every controller action, and after rendering is done. It is the last controller method to run</li></ul>`),
        new qList(`Explain what is routing? What are the three segments for routing is important?`,`
        <p>Routing helps you to decide a URL structure and map the URL with the Controller.</p><br>
        <p>The three segments that are important for routing is</p>
        <ul><li>ControllerName</li>
        <li>ActionMethodName</li>
        <li>Parameter</li></ul>`),
        new qList(`Explain how routing is done in MVC pattern?`,`
        <p>There is a group of routes called the RouteCollection, which consists of registered routes in the application.  
        The RegisterRoutes method records the routes in this collection.  A route defines a URL pattern and a handler to use if the request matches the pattern. The first parameter to the MapRoute method is the name of the route. The second parameter will be the pattern to which the URL matches.  
        The third parameter might be the default values for the placeholders if they are not determined.</p>`),
        new qList(`What is the difference between Temp data, View, and View Bag?`,`
        <ul><li>Temp data: It helps to maintain data when you shift from one controller to other controller.</li>
        <li>View data: It helps to maintain data when you move from controller to view</li>
        <li>View Bag: It’s a dynamic wrapper around view data</li></ul>`),
        new qList(`What is the difference between “ActionResult” and “ViewResult” ?`,`
        <p>“ActionResult” is an abstract class while “ViewResult” is derived from “AbstractResult” class.  “ActionResult” has a number of derived classes like “JsonResult”, “FileStreamResult” and “ViewResult” .</p>
        <br><p>“ActionResult” is best if you are deriving different types of view dynamically.</p>`),
        new qList(`What is the difference between View and Partial View?`,`
        <b>View</b><br> <ul><li>It contains the layout page</li>
        <li>Before any view is rendered, viewstart page is rendered</li>
        <li>View might have markup tags like body, html, head, title, meta etc.</li>
        <li>View is not lightweight as compare to Partial View</li></ul>
        <br><br><b>Partial View</b><br><ul><li>It does not contain the layout page</li>
        <li>Partial view does not verify for a viewstart.cshtml. We cannot put common code for a partial view within the <b>viewStart.cshtml.page</b></li>
        <li>Partial view is designed specially to render within the view and just because of that it does not consist any mark up</li>
        <li>We can pass a regular view to the RenderPartial method</li></ul>`),
        new qList(`What are the file extensions for razor views?`,`
        <p>For razor views the file extensions are</p>
        <ul><li>.cshtml: If C# is the programming language</li><li>.vbhtml: If VB is the programming language</li></ul>`),
        new qList(`What you mean by Routing in MVC?`,`
        <p>Routing is a pattern matching mechanism of incoming requests to the URL patterns which are registered in route table. Class – “UrlRoutingModule” is used for the same process.</p>`),
        new qList(`Explain Bundle.Config in MVC4?`,`
        <p>"BundleConfig.cs" in MVC4 is used to register the bundles by the bundling and minification system. Many bundles are added by default including jQuery libraries like - jquery.validate, Modernizr, and default CSS references.</p>`),
        new qList(`What is ViewStart Page in MVC?`,`
        <p>This page is used to make sure common layout page will be used for multiple views. Code written in this file will be executed first when application is being loaded.</p>`)
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
        
    ];
     public SqlQueries=[
        
    ];
     public EF=[
        
    ];
     public practical=[
        
    ];
}
