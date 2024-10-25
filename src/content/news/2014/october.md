---
//layout: news
status: publish
description: As with the goal of this distribution, packaging took most of the time.  Major groups were updated, resulting in well over 600 packages build
published: true
title: Early October 2014 Status
permalink: /news/2014/october/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2076
wordpress_url: http://kaosx.us/?p=2076
pubDate: "2014-10-08 20:36:00 -0400"
date_gmt: "2014-10-08 20:36:00 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>It probably looked like a quiet four weeks for most.  And it is true no major visible changes have occurred, but things were far from quiet.</p>
<p>As with the goal of this distribution, packaging took most of the time.  Major groups were updated, resulting in well over 600 packages build.  Expect new boost and icu to land in the stable repositories within a few days, all perl packages moved there about a week ago.  Systemd moved to 216, new make, cmake, ruby were among the many core packages updated.  New nvidia, gstreamer 1.0, mesa, xorg-server and mono were among those updated in main.  Of course the new KDE 4.14.1 were build, as did libreoffice and calligra.</p>
<p>The shellshock bug found in bash caused a whirlwind of updates for that package.  Partially because it took many people to find a good, final solution for that bug, and another part was because of finding the shellshock bug, bash code was reviewed by hundreds, maybe thousands.  Inadvertently that actually became a nice side effect, with that many reviewing, many bugs were found and fixed.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/10/snapshot4.png"><img src="http://kaosx.us/wp-content/uploads/2014/10/snapshot4-300x187.png" alt="snapshot4" width="300" height="187" class="alignleft size-medium wp-image-2077" /></a><br />
The new installer Calamares has been used successfully a few times to install KaOS into UEFI systems.  That part is not fully automated yet, neither is locale setup, but the last four weeks saw tremendous improvements for that installer, it is even hopeful it can be used as the default installer for the next stable ISO later this month.</p>
<p>Frameworks moved to the 5.3.0 release, plasma 5 to 5.1 beta, both were built on the pre-release of Qt 5.4.  It is a pity plasma 5 is not fully usable or stable yet, since it is looking so good compared to KDE 4.......<br />
Expect a new kf5 ISO as soon as plasma 5.1 has moved to a stable release (should be in 1-2 days).  Image shows just two of the many, many new things you will find, widget style "breeze" and the option to just use right-click to switch the taskmanager style.</p>
