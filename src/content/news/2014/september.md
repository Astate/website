---
//layout: news
status: publish
description: Two things stand out for the last 4-5 weeks in the development of KaOS. A move to UEFI capable ISOs has been in the works for about 5 months
published: true
title: Early September &#039;14 Status
permalink: /news/2014/september/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2050
wordpress_url: http://kaosx.us/?p=2050
pubDate: "2014-09-10 02:44:16 -0400"
date_gmt: "2014-09-10 02:44:16 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>Two things stand out for the last 4-5 weeks in the development of KaOS.</p>
<p>A move to UEFI capable ISOs has been in the works for about 5 months, but there <a href="http://kaosx.us/wp-content/uploads/2014/09/snapshot126.png"><img src="http://kaosx.us/wp-content/uploads/2014/09/snapshot126-300x221.png" alt="snapshot126" width="300" height="221" class="alignright size-medium wp-image-2051" /></a>finally is a working version available.  The KaOS-kf5 2014.09.06 test-iso is a first that fully boots in BIOS, EFI and UEFI capable systems, using the simple but quite powerful and very transparent gummiboot as bootloader.<br />
No UEFI installable ISO yet though, for that lots of work is ongoing to get <a href="http://kaosx.us/wp-content/uploads/2014/09/snapshot124.png"><img src="http://kaosx.us/wp-content/uploads/2014/09/snapshot124-300x193.png" alt="snapshot124" width="300" height="193" class="alignleft size-medium wp-image-2051" /></a>Calamares fully ready (trying to use grub for BIOS systems, gummiboot for UEFI in this installer).<br />
Calamares development did see the addition of automated partitioning.</p>
<p>Second is the big strides in moving many more applications to frameworks 5/plasma 5.  Frameworks 5 themselves are fully stable and have moved to the regular apps repository and are available to all users.  A few regular applications (non KDE) are already using some parts of it, like Octopi using knotifyconfig for much better integration into KDE for octopi-notify.  The amount of applications fully ported is approaching one hundred, stability of many has greatly improved.  Just about all basics are available for plasma 5, like kmix, gwenview, kate, dolphin, okular and rekonq.  Just to mention a few of others marble, kile, kanagram, kbounce, plasma-volume-control, k3b and ark.</p>
<p>And as always, all repositories are steadily rolling.  Glew was a rather large update/rebuild, including LibreOffice 4.3.1.  Among others llvm, linux-next 3.16.2, tcl/tk 8.6.2, all the texlive packages, mesa 10.2.7, firefox 32.0, chrome 39, kdevelop packages 4.7.0 and gimp 2.8.14.</p>
