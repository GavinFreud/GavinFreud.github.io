---
layout: post
title:  "Install Gentoo"
date:   2017-08-28 00:00:00 
categories: Linux
---

### **Introduction: A Piece of Magic Mix**

It's 3 AM. You've been sitting at your desk for hours, trying to find the solution to challenging, yet easily googleable technological problem. You look to your window, hoping to take in the nice scenery of the clear, dark night to clear your head as you tackle your dilemma, only to remember that you boarded it up in order to prevent the glares of sunlight from ruining your view of your monitor.

You've had enough. You decide to visit your fellow tech enthusiasts on 4chan's /g/ board, hoping that anyone there will be able to give you the solution that you have been incessantly searching for. After you posted a new thread highlighting your problem, you lie in wait. Soon enough, you get a response along the lines of: 

![Install Gentoo]({{GavinFreud.github.io}}/assets/install_gentoo_screenshot_1.png)

You scratch your head. Gentoo? What's that? As soon as you press enter after typing "what is gentoo" into Google, the first thing you see is that it's a type of penguin due to Google's dictionary entry being the first result. After leaving an unnecessarily hostile reply to the poster that referred you to Gentoo, you navigate back to the google search and notice that there is also a Linux distribution under the same name.

On the basis that you've successfully installed Ubuntu on your 6 year old cousin's laptop, you decide to install Gentoo without looking at the guide. You then boot up your computer with your newly made Gentoo boot stick, wipe all your drives, and begin your descent down the dark rabbit hole that is the Gentoo installation.

Just to be clear, this post isn't going to be a guide on how to install Gentoo. That's what [the guide](https://wiki.gentoo.org/wiki/Handbook:AMD64) is for. Something else that this post will not cover is the meme "install gentoo" itself. The people over at [knowyourmeme](http://knowyourmeme.com/memes/install-gentoo) describe the history and humor much more eloquently than I ever could. What this post is going to be, however, is the experience of installing Gentoo from the viewpoint of someone who, despite having very little experience with Linux in general (a few months each with Ubuntu and Arch Linux), wanted to truly try to "install gentoo" and hopefully become more knowledgeable about Linux in the process.

### **Part 1: Creating the USB**

Normally, this part is self-explanatory. Simply procure the proper version, and create a bootstick with Rufus if on Windows, Etcher on Mac, etc. Gentoo is by no means any different. However, I can't really say that I've given you my full experience of attempting to install gentoo if I didn't mention how _I somehow managed to mess this up horribly._

Look at this screenshot of the Gentoo downloads page:

![Gentoo Downloads]({{Gavinfreud.github.io}}/assets/install_gentoo_screenshot_2.png)

You probably noticed separate downloads for two separate architectures: amd64 and x86. Something else that you've probably noticed is that right next to the emphasized "amd64" heading, is that there is also a faded label that says "aka x86-64." This is something that I either did not see, or something that I just plain ignored, and downloaded the x86 image when I wasn't installing gentoo on a computer with an x86 architecture CPU. A few hours later, my first attempt at installation failed, and it took a call to my linux-enthusiast college roommate (and good friend) to figure out where exactly I went wrong. When I finally understood what happened, I rage-quit for the night and cried myself to sleep. Fortunately though, that was the last and only time that I failed to install Gentoo. That said, if there was one thing that you should take away from this post, I would say that it would be that _if you are installing gentoo, for the love of Richard Stallman make sure that the image you are downloading is for the **correct** architecture._

### **Part 2: Not too bad...at first**

Before I continue, I should probably mention the kind of hardware that I'm using for this little exploratory study. Originally, I was using an [ASUS U31SD](https://www.asus.com/Laptops/U31SD/), which I did manage to successfully install Gentoo onto, but I switched to a [Thinkpad X60](https://www.cnet.com/products/thinkpad-x60/specs/) shortly after because I didn't feel like I recorded enough of my experience to adequately write this post, and since I had an X60 lying around at college to use. Hopefully things won't be confusing now when I mention that I followed this [guide](https://wiki.gentoo.org/wiki/Handbook:X86/Full/Installation) almost to the letter, since the Thinkpad _actually has an x86 processor._

Once I made sure that I possessed the __correct__ image, I proceeded to boot up into the gentoo installation environment. Thanks to my experience with Arch Linux, I was already somewhat acquainted with the terminal interface. Immediately after being thrown into the terminal, I already began to stray off of the installation guide and proceed to partition my disk. This was surprisingly simple, thanks to the fact that you need to do this in Arch as well, and also because the documentation is _very_ well written. 

After partitioning my drive, I installed ext4 on /dev/sda2 and /dev/sda4, activated the swap partition, and mounted the root partition. I then realized that I completely skipped the network configuration section of the guide.

This part wasn't challenging for every attempt aside from the first. The reason for this is that I naively decided to avoid using ethernet simply because my router was in a closet, and I thought it would be troublesome to sneak an ethernet cable underneath the door. 

This may be my 20/20 hindsight speaking here, but this is probably the most foolish thought that crept into my mind throughout the entirety of this install, and keep in mind that I _downloaded the wrong image because I couldn't read a downloads page properly._ To put into context how amazing ethernet can be, let me just say that every time I used the wire, it authenticated within seconds and I had a working internet connection, just with the plug of a wire (granted things would get slightly more complicated if authentication failed). With my bright (not really) wireless idea however, not only would I have to input several commands to get it working, but since my wireless network was set up with WPA, I would've had to use a separate package called wpa_supplicant to get it working! What makes this all the more entertaining lies within the irony that in order to even _download_ wpa_supplicant, I would've had to input the following command:

{% highlight bash %}
root # emerge --ask net-wireless/wpa_supplicant
{% endhighlight %}

I can't even execute that without a working connection unless I had the source package!

Needless to say, I got over my laziness in a heartbeat after stumbling upon that realization, and just wired the ethernet cable. 

### **Part 3: Failing to Install the Stage Tarball**

Similarly to creating a boot stick, this shouldn't be difficult. you simply boot up a browser (command line browsers are my favorite), navigate towards the autobuilds directory for your CPU Architecture, and download the tarball. For me, this went wrong in two places. First off, this is where I ended up finding out that I was using the wrong image all along, so I kept installing the wrong stage tarball. The second is just as foolish. Once you navigate towards the autobuilds directory for your architecture, you may see something like this (quick note here, most pictures I have of my gentoo installation look absolutely horrible since I shot from my phone, so most of these pictures are screenshots taken with my Macbook):

![Autobuilds for i686]({{gavinfreud.github.io}}/assets/install_gentoo_screenshot_3.png)

Once you navigate into one of those folders with the date as their name, you would most likely see something like this: 

![Autobuilds directory]({{gavinfreud.github.io}}/assets/install_gentoo_screenshot_4.png)

Here is where the stupidity ensued, as for 20 minutes I kept downloading the _folder that contained the tarball_ rather than _the tarball itself._ My aforementioned roommate was the one who finally corrected me, and then proceed to point out that I downloaded the wrong image. It is at this point that _I seriously cannot stress how bad my first installation attempt was._

Thankfully, my later attempts did not provide me with nearly as much trouble. That being said, what followed wasn't exactly stressful, yet not exactly desirable either.

### **Part 4: Waiting**

During my second attempt, I finally reached the tarball stage (which took only around 30 minutes now that I was acquainted with the gentoo installation environment). As I hit the download button on the tarball, I heaved a huge sigh of relief at the sight of the tarball _actually downloading._ This, however, was followed by seven minutes of staring at the screen, waiting for it to finish. After it finished, I quickly typed the install command, and proceeded to wait for another seven minutes. 

After that was done, I easily went through configuring the compile options, selecting mirrors, mounting necessary filesystems, configuring portage, etc. I then selected a default desktop profile with the intention of installing a desktop environment (such as xfce) in mind, and then I proceeded to update the world set.

I'm going to say at this point that I had absolutely _no idea_ beforehand how much waiting I would end up doing before this was completed. 

In the process of updating the world set, Gentoo had to download _178_ packages. 178! During my second installation attempt, I was able to watch [The Room](https://en.wikipedia.org/wiki/The_Room_(film))(great film by the way) twice before hitting even _89._ When I started the update, it was around 1:15 AM. I stayed up until 4:30, which was when I collapsed. When I woke up at around 11, I saw that there was still _40 packages left._ The icing on the cake, however, was easily when I saw that after the update had finished, _only profiles selected with systemd were required to do this._ To my pleasant surprise, this process took a little less time when I tried it the third time, however that is probably thanks to Pitt's decent ethernet. After configuring the locales, I arrive at something even many of the Linux elites believe to be one of the more advanced procedures that a Linux user could perform. 

### **Part 5: Kernel Configuration**

Okay, this wasn't nearly as hard for me to figure out as some of the other parts of the installation. The main reason for this wasn't because of my skills with kernel configuration (which are nonexistent) or my knowledge of the hardware I was using (which can be considered average at best), but once again due to the easy-to-follow, well written guide that the Gentoo wiki provides. My apologies for the anticlimactic result, but in exchange let me tell you something useful. If you're not sure what an option in the Kernel Configuration Menu does, you can press H, which will bring up the info page for it (once again, something I got from my roommate). 

Everything afterwards essentially led to final tweaks to prepare the environment. This included setting the root password, setting up a system logger, installing a boot loader, etc. Once all this was done, I restarted my computer, and I beheld the sight of the completed installation.

### **Conclusion**

As you can probably tell, the installation worked. I was able to log in as root, and set up another user as well as install xfce. I am now a proud member of the group that was successfully able to "install gentoo!"

If I am speaking honestly, I don't really think it was as difficult as many would believe it to be, if not due to the well-written guide. While I may be more technically savvy when compared to many others, my lack of experience with more advanced Linux distributions makes me a bit relatable to the masses who want to at least try to install the distribution, but are intimidated by the process, the use of a terminal, or anything else that could be perceived scary about an advanced distribution. What I'm trying to say is that if I can do it, many other people could. 

That being said, it was by no means easy. Although most of my problems were caused by either my lack of attention to detail or because of blatant stupidity on my part, I don't think that many inexperienced users could get by without hitting a snag at some point in the process. Installing Gentoo is something that requires time, patience, and a bit of computer know-how. It also isn't something that I would recommend doing on a whim, as it's can be quite annoying to have to back up all your files just to install a random Operating System on an old computer, only to reinstall Windows immediately after.

With that in mind, I'm not planning on this being the last time that I talk about Gentoo. I want to use it for a few weeks, and see how quickly I can get used to it. I want to see if I can conveniently surf the internet, write a few programs, and maybe even play some games on it. Check back in a few weeks to see the results, and thanks for reading!























