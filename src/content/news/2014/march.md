---
//layout: news
status: publish
description: This time a combined Status report and ISO release announcement, quite a lot has happened, so a bit longer article then usual.
published: true
title: Early March Status/KaOS 2014.03
permalink: /news/2014/march/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1217
wordpress_url: http://kaosx.us/?p=1217
pubDate: "2014-03-04 20:07:27 -0500"
date_gmt: "2014-03-04 20:07:27 -0500"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>This time a combined Status report and ISO release announcement, quite a lot has happened, so a bit longer article then usual.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2014/03/snapshot28.png"><img class="alignleft size-medium wp-image-1221" src="http://kaosx.us/wp-content/uploads/2014/03/snapshot28-300x197.png" alt="midna-kdm" width="300" height="197" /></a>KaOS is very proud to announce the availability of the March release of a new stable ISO. The last month a lot of work has gone into redoing the whole artwork and theming of KaOS to give this distribution more of it's own identity. <strong>Midna</strong> is the name of the set, and includes midna-ksplash, midna-kdm and midna plasma. The theme is based on the wallpaper especially designed for KaOS by <a title="Gfxcoorpinc" href="http://dsings.deviantart.com/">Gfxcoorpinc</a> and is a move to a modern flat look, which includes the flattr-icons set.<a href="http://kaosx.us/wp-content/uploads/2014/03/kaos-wall-1.png"><img class="alignright size-medium wp-image-1219" src="http://kaosx.us/wp-content/uploads/2014/03/kaos-wall-1-300x168.png" alt="kaos-wall" width="300" height="168" /></a></p>
<p>To further complement KaOS theming, this ISO contains a new package, <a href="http://kaosx.us/wp-content/uploads/2014/03/snapshot16.png"><img class="alignleft size-medium wp-image-1224" src="http://kaosx.us/wp-content/uploads/2014/03/snapshot16-300x194.png" alt="KaOS wallpapers" width="300" height="194" /></a>KaOS_wallpapers.</p>
<p>A new ISO was not needed just because of new artwork, as usual, many packages received updates, this time very much at the base of the system. The toolchain was updated and includes <strong>glibc 2.19 &amp; binutils 2.24</strong>. The boost/icu plus libgcrypt stack were updated to the latest, included kernel is <strong>linux 3.13.5</strong>. Systemd had a major new release after more than 3000 commits over the last 5 months, included is 210. After staying with Samba 3 as long as possible, it was time to move to the new 4 series, since maintenance of 3 seized in December.<br />
<a class="fancybox-iframe" title="kde 4.12.3" href="http://kde.org/announcements/announce-4.12.3.php"> KDE is at 4.12.3</a> for this ISO. Plasma-nm underwent quite a big change, and has clearer functions now, including airplane mode. <a href="http://kaosx.us/wp-content/uploads/2014/03/snapshot42.png"><img class="alignright size-medium wp-image-1226" src="http://kaosx.us/wp-content/uploads/2014/03/snapshot42-300x152.png" alt="plasma-nm" width="300" height="152" /></a></p>
<p>New additions to the ISO are <strong>kdeconnect-kde</strong>, an application to make your computer aware and seamless integrated with all your devices, to simplify your daily tasks and <strong>kde-touchpad-config</strong> <a href="http://kaosx.us/wp-content/uploads/2014/03/snapshot43.png"><img class="alignleft size-medium wp-image-1229" src="http://kaosx.us/wp-content/uploads/2014/03/snapshot43-300x225.png" alt="touchpad kcm" width="300" height="225" /></a></p>
<p>Current users of KaOS can easily convert to the new look. For the Midna packages, it is easiest to use octopi, search for midna, mark all entries listed for installation. Once installed, go to system-settings > workspace appearance and change ksplash and desktop theme to midna. For kdm, go to login screen in system-settings, click the theme tab, and select midna.<br />
The new icon theme can be installed, either using octopi, or:<br />
<code>sudo pacman -Syu<br />
sudo pacman -S flattr-icons</code><br />
The source for these packages is available at:<br />
http://sourceforge.net/projects/kaosx/files/sources/midna/<br />
and:<br />
https://github.com/KaOSx/flattr-icons-kde/releases</p>
<p>Some notable new additions to the repositories are brackets, redshift-plasmoid, bitcoin, aria, converseen, ultimate-control and <a title="tlp" href="http://kaosx.us/packages/index.php?act=search&amp;subdir=&amp;sortby=date&amp;order=descending&amp;searchpattern=tlp">tlp</a>.<br />
Major apps that were updated to their latest include Calligra 2.8.0, LibreOffice 4.2.1, google-chrome 35, firefox 27.0.1</p>
<p>For further info about the ISO please see <a class="fancybox-iframe" title="release notes" href="http://kaosx.us/RELEASE_NOTES_20140301.html">the release notes</a> and the <a title="Download" href="http://kaosx.us/download/">Download</a> page.</p>
<p>About 480 packages will be moved, so for all current users, give your mirror a few hours to fully sync, or wait until tomorrow to do your update.</p>
