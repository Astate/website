---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early September &#039;15 Status
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/september/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3227
wordpress_url: http://kaosx.us/?p=3227
pubDate: '2015-09-06 01:44:18 -0400'
date_gmt: '2015-09-06 01:44:18 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>After skipping last month status news due to the time coinciding with the August ISO release, it is back on track for one of these reports.</p>
<p>Since about twenty packages were removed from the repositories (example all of the gstreamer0.10 packages were finally obsolete), there was room to add some new packages.  One that was regularly requested, <a class="fancybox-iframe" href="https://www.torproject.org/">Tor</a> is now added.  The fcitx group had fcitx-anthy added, making the input method more complete for Japanese.  Porting of KDE apps to plasma 5 keeps continuing too, some that left the repo in plasma 5 move are now back this includes libkcompactdisc, Calligra applications Kchart & Kexi and poxml.  Another addition is ksuperkey.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/09/Screenshot_20150831_121052.png"><img src="http://kaosx.us/wp-content/uploads/2015/09/Screenshot_20150831_121052-300x216.png" alt="Sweeper" width="300" height="216" class="alignleft size-medium wp-image-3228" /></a><br />
From the remaining Qt 4 depending applications, sweeper is now Frameworks 5 based too.</p>
<p>Last month saw updates to a good five hundred packages, this included the releases of <a  class="fancybox-iframe" href="https://www.kde.org/announcements/announce-applications-15.08.0.php">KDE Applications 15.08.0</a>, Frameworks 5.13.0 and Plasma 5.4.0.  The base of the system updates included systemd 225, dbus 1.10.0, all the networkmanager packages moved to 1.0.6, openmpi 1.10.0 and nvidia packages to 352.41 & nvidia-304xx to 304.125.</p>
<p>There also is now a mirror available on the African continent, a new mirror was added in South-Africa.</p>
<p>kcp was completely rewritten, it now offers far more information on any application available in the <a href="https://github.com/KaOS-Community-Packages">KaOS Community Repository</a><br />
<a href="http://kaosx.us/wp-content/uploads/2015/09/Screenshot_20150905_212658.png"><img src="http://kaosx.us/wp-content/uploads/2015/09/Screenshot_20150905_212658-300x221.png" alt="ff_clang" width="300" height="221" class="alignright size-medium wp-image-3231" /></a><br />
The Clang compiler is being tested as a replacement compiler for some applications instead of GCC.  Advantage of Clang is that it has much clearer debug output while a build is ongoing, reduces build times significantly and often times results in a quite a bit smaller package.  The first that entered the repositories build with this compiler was Firefox.</p>
<p>Starting a Wayland session no longer needs any detailed instructions, SDDM had Wayland support added, kinit build was adjusted, so now you can select a regular Plasma session on your login screen, or select a Wayland session from the drop-down menu.  Don't expect too much of Plasma 5 Wayland based though it does not work on all graphics cards yet and when it works it all is still in an early stage.<br />
Qupzilla though is one of the first applications that heavily relied on X11 in its code that now is fully ported to run a Wayland session too.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/09/Screenshot_20150822_131050.png"><img src="http://kaosx.us/wp-content/uploads/2015/09/Screenshot_20150822_131050-300x193.png" alt="License page" width="300" height="193" class="alignleft size-medium wp-image-3233" /></a><br />
And last, but not least bit of News for these last four weeks is about Calamares.  Two new pages were added.  One will give the option to show some needed information about the current release a user is installing.  For this distribution the second page added is more significant.  It is not so exciting from a user standpoint, but since KaOS ships with proprietary software (the nvidia drivers), it is vital that users accept a license before such drivers are actually installed on their system.  Not having this License page in Calamares did open KaOS up for legal issues.  This is now addressed.  So far the code for this page is KaOS only, not accepted yet in Calamares master since they only accept complete modular pages, most of the License page is fully modular for any distribution to adjust easily for their needs, a small part is not yet.</p>
<p>As you see, a lot of changes again and especially the changes to Calamares warrant a new ISO sooner than the usual 6-8 weeks release cycle.  Expect a new release during September.</p>
