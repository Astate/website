---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early June&#039;15 Status
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/june/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3064
wordpress_url: http://kaosx.us/?p=3064
pubDate: '2015-06-03 03:01:35 -0400'
date_gmt: '2015-06-03 03:01:35 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>This time quite early in the month a status post. Reason is this is just not news, but also a warning that a new way of building Calligra is finally moving to all users.<br />
With your next upate you will be asked to replace all of the split Calligra with one combined "Calligra" package.  This is a first Plasma 5/Frameworks 5 version for stable users.  Make sure to answer "Yes" to all replaces questions.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2015/06/Screenshot_20150528_113811.png"><img src="http://kaosx.us/wp-content/uploads/2015/06/Screenshot_20150528_113811-300x169.png" alt="karbon" width="300" height="169" class="alignleft size-medium wp-image-3065" />Karbon Frameworks 5 based working on the new Midna icons</a></p>
<p>Also moving to all users today is <a class="fancybox-iframe" href="https://www.kde.org/announcements/announce-applications-15.04.2.php" title="KDE Applications 15.04.2">KDE Applications 15.04.2</a>, a monthly bug fix release.</p>
<p>KaOS user <strong>MerMouY</strong> has been so kind to provide a much needed second European mirror.  This one is located in France.  You will notice a new pacman-mirrorlist package with your next update, make sure to merge<br />
the mirrorlist.pacnew file if you plan to use this new mirror.</p>
<p>To complete the Plasma 5 artwork set, work has started to provide a "Midna" icon set.  It combines influences from <a class="fancybox-iframe" href="http://vinceliuice.deviantart.com/art/Emerald-icons-theme-490755152" title="emerald">Emerald icons</a>, the previously used KaOS flattr icons and newly created icons based on these two.</p>
<p>Calamares is making big strides forward.  Automating all installs is now almost implemented, meaning that UEFI installs no longer need to use the manual option only.<a href="http://kaosx.us/wp-content/uploads/2015/06/Screenshot_20150526_133823.png"><img src="http://kaosx.us/wp-content/uploads/2015/06/Screenshot_20150526_133823-300x166.png" alt="cala_auto_uefi" width="300" height="166" class="alignright size-medium wp-image-3069" /></a>  Image shows the "Replace" option, also notice the much expanded summary page.</p>
<p>Among the many updates and worked on the last month, a few more need mentioning here. First one is systemd 220.  This is a first release where this init system makes the logic combination of including a bootloader.  Gummiboot is now depreciated, systemd-boot wil be the UEFI bootloader for KaOS from now on.  This is a first step to get secure boot implemented.  Another feature added with systemd 220 and UEFI installs, there is no longer a need for a /boot entry in fstab.  Anytime the boot partition is needed, systemd will mount it automatically, unmount it after two minutes of no use.  This came in quite handy working on some internal test ISOs and the Calamares changes......<br />
Second is a new toolchain.  A glibc 2.21, binutils 2.25 based new toolchain includes a new way way of building gcc.  It is a build more in line with LFS, no longer split in six different packages, it is now just two.<br />
Third change effects the kernel build.  How intel microcode is loaded has changed some lately.  Instead of having the user make all kinds of bootloader changes to have the microcode load correctly, the build of the kernel was adjusted so all is automated.  Systemd can now handle the microcode update loading from the kernel modules.  This change is currently only in linux-next, but will move shortly to the stable kernel too.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/06/av4.png"><img src="http://kaosx.us/wp-content/uploads/2015/06/av4-300x196.png" alt="av4" width="300" height="196" class="alignleft size-medium wp-image-3074" /></a><br />
Quite a few more applications made the Qt5 move last month.  Mkvtoolnix is one that moved from gtk to Qt5, new added to the repo Avidemux also made such a move.  Clementine & Suse Imagewriter moved from Qt4 build to Qt5.  Kup, a back-up program is fully plasma 5 integrated, also among the newly added.<br />
Font selection is now very complete for KaOS.  Smaller font packages added are ttf-ms-fonts & cantarell-fonts.  One package that adds a huge amount of fonts is the ttf-google-fonts package.</p>
<p>From all the above, it is clear a new ISO is very much needed soon, expect the first minimal test ISO to be up within the next 24-48 hours.</p>
