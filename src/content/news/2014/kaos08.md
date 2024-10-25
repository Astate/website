---
//layout: news
status: publish
description: With KDE releasing the new major version, offering primarily improvements and bugfixes, KaOS is happy to be able to present you a new ISO with KDE 4.14.0 the same day it is released
published: true
title: KaOS ISO 2014.08
permalink: /news/2014/kaos08/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1965
wordpress_url: http://kaosx.us/?p=1965
pubDate: "2014-08-20 16:50:24 -0400"
date_gmt: "2014-08-20 16:50:24 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>With KDE releasing the new major version <a class="fancybox-iframe" title="KDE 4.13.2" href="http://kde.org/announcements/4.14/">KDE 4.14.0</a>, offering primarily improvements and bugfixes, KaOS is happy to be able to present you a <strong>new ISO with KDE 4.14.0</strong> the same day it is released. KDE Applications 4.14 is not about lots of "new and improved stuff". As with KaOS, many KDE developers are focused on the Next Experience (Plasma 5) or porting to KDE Frameworks (based on Qt5). Mostly, the 4.14 release is needed by aspects of the workflow. This release offers more software stability, with little emphasis on new and less-proven stuff.</p>
<p>For KaOS, a new major KDE is not the biggest news on this ISO, that part goes <a href="http://kaosx.us/wp-content/uploads/2014/08/snapshot119.png"><img class="alignright size-medium wp-image-1966" src="http://kaosx.us/wp-content/uploads/2014/08/snapshot119-300x209.png" alt="Installer" width="300" height="209" /></a>to the all new installer. The idea of always evaluating what is available and seeing what can be the best fit for KaOS really came through with selecting this installer. It is based on work from <strong>Cinchi by Antergos</strong> and <strong>Thus by ManjaroLinux</strong>, whose installers in turn used code from Ubiquity by Ubuntu and the old Anakonda (for partitioning) by Fedora. The postinstall jobs were written in python3 for KaOS (big thanks goes to <strong>arnt and cellix</strong> with helping to get this code ready). This new installer brings automated partitioning, option to encrypt the drive, much simpler locale selection and brings the minimal needed RAM to install KaOS down to 1 Gb.</p>
<p>Since the last ISO virtually every package available on that version has been updated. The <strong>Xorg group</strong> moved to 1.16.1, including mesa 10.2.5, libdrm 2.4.56. Another large stack was the glib2 2.40.0 update, this included a move to GTK3 3.12.2. Python3 is now at the 3.4 version, all that depend on it were rebuild to their latest available. At the core of the system you'll find the linux kernel at 3.15.10, systemd 215, kmod 18, util-linux 2.25.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2014/08/snapshot9.png"><img class="alignleft size-medium wp-image-1970" src="http://kaosx.us/wp-content/uploads/2014/08/snapshot9-300x187.png" alt="dropbox" width="300" height="187" /></a>KaOS is in a transition phase to move to Frameworks 5, plasma 5 and KDE Applications based on those two, with that as many applications as possible are moved to Qt5 too. This does not only include those moving from Qt4, but lately also a few that have moved from GTK, an example in the repositories for this is gcompris-qt and available on the ISO is the all new Qt5 based dropbox.</p>
<p><b>Known issues:</b><br />
Using the automated method for partitioning and selecting a separate /home fails to select the correct filesystem in fstab, to correct this there are 3 options:</p>
<ul>
<li>Use the advanced option to create partitions for root, home and if desired, swap</li>
<li>Do not select separate home, but <a href=http://kaosx.us/phpBB3/viewtopic.php?f=7&t=2>move the home partition after the install</a></li>
<li>Install the updated installer in live mode with "sudo pacman -Sy thus"</li><br />
</ul><br />
For further info about the ISO please see <a class="fancybox-iframe" title="release notes" href="http://kaosx.us/RELEASE_NOTES_20140820.html">the release notes</a> and the <a title="Download" href="http://kaosx.us/download/">Download</a> page.</p>
<p>About 420 packages will be moved with the release of this ISO, so for all current users, give your mirror a few hours to fully sync, or wait until tomorrow to do your update.</p>
