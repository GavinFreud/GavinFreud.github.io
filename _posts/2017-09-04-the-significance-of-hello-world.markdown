---
layout: post
title:  "The Significance of Hello World"
date:   2017-09-02 00:00:00 
categories: Programming
comments: true
---

### **Introduction: A humble beginning**

The year is 1972. Brian Kernighan is sitting in his office, currently writing what would become *A Tutorial Introduction to the Language B*. He scratches his head, thinking about which example would best represent the use of external variables. He already demonstrated how to print characters in the previous example, outputting "hi!" to the terminal, but what should he do here? After several minutes in deep thought, he decides to use the following code:

{% highlight B %}
main(){
  extrn a,b,c;
  putchar(a); putchar(b); putchar(c); putchar('!*n');
  }

a 'hell';
b 'o, w';
c 'orld';
{% endhighlight %}

This symbolized the birth of "Hello, World!"

Today, writing a program that outputs "Hello World" is a rite of passage in the world of programming. I'm sure that anyone, regardless of experience, fondly remembers the memory of watching "Hello World!" pop up on their computer screen. The Hello World program was most likely your introduction to computer programming, and for many programmers it was probably the first thing that they wrote when they began to learn a new one. That being said, just *why* is Hello World so popular? 

Three main reasons are attributed to this. First of all, as mentioned already, it is an excellent way for programmers who are new either to a certain language or to programming in general to understand the core characteristics and facets of a language. Hackers use Hello World to prove that code can be executed through an exploit where system designers did not intend for code to be executed. Some coders use it to compare the size of the executable that the language generates. The uses are many in number, and we won't be covering them all. 

In this post, I want to look at the first use from the view of a somewhat experienced programmer. I want to know what exactly we can infer about a language from the way that its Hello World program is written. I want to see if we can detect any traces of inspiration between Hello World in two different languages. 


To this end, I want to look at Hello World in a few different languages, starting with the language that popularized the program.

### **Part 1: C**

{% highlight C %}
#include<stdio.h>

main()
{
printf("hello, world\n");
return 0;
}
{% endhighlight %}

Straight out of Kernighan (yes, same guy from before) and Ritchie's authoritative reference on C: *The C Programming Language*, this snippet of C code is credited for starting the "Hello World!" craze. From a glance, this is what we can see:

**1)** At the very top, we see that we are importing something called `stdio.h`. This is a preprocessor command, telling the compiler to include the contents of stdio.h in the program. If you use the `printf()` function without including `stdio.h`, the program won't compile.

**2)** The last statement of the program says `return 0`. What does this mean? This probably doesn't make sense to those who haven't studied C or a similar language simply because they probably haven't heard of *returning something in a main method.* In this case, returning 0 represents the exit statement within the program. 

**3)** We see that the `main()` function begins the program.

**4)** The `printf()` function. This is the function from stdio.h that displays `Hello World` to the screen.

**5)** We see semicolons after every statement. This is most likely the proverbial "period" after every command. 

**6)** We see brackets enclosing the code of a method. This is probably to separate methods from each other. 

Just like that, we managed to get several pieces of important information about C from a 6 line program! 

That being said, it can also be an interesting exercise to try and find similarities between languages through their implementations of Hello World. Let us now look at Java, find out how it works, and compare it to C.

### **Part 2: Java**

{% highlight java %}
class HelloWorld{

	public static void main(String[] args) {
		System.out.println("Hello, world!");
	}
}
{% endhighlight %}

As you can probably tell, there is quite a bit more going on within the Java implementation. Despite it being around the same size as the C program, it's significantly denser, proving how verbose Java actually is. That being said, can we say that it's similar to C? Let's find out. 

**1)** Like C, we see that there are brackets surrounding the code operating behind a method. 

**2)** Like C, we see that semicolons act as the breaking point between lines of code.

**3)** The main method begins the program, also like C.

**4)** While we didn't see so in the C program, we see that there are arguments within the parentheses following a method, which holds true for both languages.

As we can see here, Java borrows syntax quite heavily from C. However, that isn't to say that they don't have difference either:

**1)** Java is an OOP language, as seen by the use of a class. C is not OOP (C++ however, is).

**2)** We see lots of keywords in front of the main method as a sign of the verbose nature of Java. The keywords `public` and `static` can be written in either order (i.e. `public static` or `static public`), but the convention is to write it as `public static`. The term `public` defines a method which can be called by any object, while the word `static` means that it belongs to a class rather than an object. 

**3)** You probably noticed that I didn't mention `void` above. This is because this in itself is another difference from C in the sense that void methods have *no* return type. This conflicts with `return 0` found in the C program.

**4)** Let us look at the line where we actually print `Hello World`. In C, it was a simple `printf()` command. Here, however, we have `System.out.println()`. What does all of that mean? Well, `System` is a class, while `out` is a static PrintStream variable within the `System` class. It is also a `PrintStream` object and can access the method `println()` that resides within the same class. Essentially, Java already imported the System class into our program, saving us the trouble of having to import it every time like in C. 

Differences aside, we can clearly see the influence that C had on Java development through the implementation of Hello World. Lastly, I want to look at the implementation in a slightly different language than those that we have been discussing.

### **Part 3: Python**

{% highlight Python %}
print('Hello, world!')
{% endhighlight %}

This is the absolute beauty of a scripting language. Only one line of code. No imports, no main method, heck there aren't even *semicolons*. In fact, I don't think that any part of that line really needs to be explained at all! Someone who isn't acquainted with programming whatsoever could probably figure out what it does, and the simplicity of Python is probably why it's such a popular language. However, why *does* Python require less code than Java to do the same thing? This can actually be attributed to Python's dynamic typing and built-in high level data types. This is useful because no one wastes any time declaring the types of variables or arguments, and because those aforementioned high level types (which include dictionaries and a polymorphic list) find use in almost every program. 

That being said, every language has their uses. This is unfortunately where Hello World is lacking; it can't really tell us the *capabilities* and *main uses* of each language. 

### **Conclusion**

As hopefully you've been able to see, one can tell quite a bit about a language from the implementation of Hello World. You can analyze the syntax of a language, find relations to other languages, and hopefully figure out whether or not it's a language that you would be comfortable programming in. While it may be hard to believe that a program first introduced in 1968 has lasted this long, it's certainly not hard to expect it to be around in the far future. Thanks for reading!








