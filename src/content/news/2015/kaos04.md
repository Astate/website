---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS ISO 2015.04
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kaos04/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2874
wordpress_url: http://kaosx.us/?p=2874
pubDate: '2015-04-18 17:21:48 -0400'
date_gmt: '2015-04-18 17:21:48 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>A nice way of celebrating the second anniversary if this distribution is releasing <strong>KaOS 2015.04</strong>.<br />
The previous two releases were the result of some drastic and fundamental changes to this distribution (new DE, new installer, move to UEFI).  With this release it is finally back to a much more simple focus as always intended for this distribution.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot1-1.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot1-1-300x188.png" alt="Midna" width="300" height="188" class="alignleft size-medium wp-image-2889" /></a>Most attention has gone in updating and rebuilding well over 1200 packages the last two months.  This includes updates to base packages like pacman, kmod, openssl, openssh, sudo, util-linux, cmake, ruby, nano, tzdata, full update of the complete glib2 stack and perl.  PHP moved to the 5.6 series and has a much simpler build and install working.</p>
<p>As for the desktop this ISO brings all the latest of Plasma 5 (<strong>Frameworks 5.9.0, Plasma 5.2.95</strong>) and <strong>KDE Applications 15.04.0</strong>.  All build on Qt 5.4.1.  Many more applications are now fully ported to Qt5/Frameworks 5, among those re-added since their port became available are Skrooge, Kid3, Choqok and Kgamma.  New additions to the repositories includes applications very recently switching to Qt5, examples are Wireshark, Frescobaldi and Musescore.  The Midna artwork has a complete new look and recieved a good dozen bug fixes to integrate much better in Plasma 5.  Issues to run <a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot64.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot64-300x169.png" alt="Apps" width="300" height="169" class="alignright size-medium wp-image-2878" /></a>KaOS in virtualbox with guest-additions and sddm are fixed.</p>
<p>What was not foreseen two years ago when this distribution started that although it is limited, there seems to be a much larger user-base looking for what KaOS offers then was expected.  The server in use was no longer capable to handle the tremendous increase in traffic.  A second server is now deployed, the main server has moved to a much larger system.  With all those infrastructure changes, the website did not stay behind, it too got a complete overhaul to show in a direct way, with clear focus what this distribution is about.  Added is a <a href="http://kaosx.us/knowledge-base/">Knowledge Base</a> page which gathers many tutorials, tips, video presentations in one central place.<a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot72.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot72-300x179.png" alt="Calamares" width="300" height="179" class="alignleft size-medium wp-image-2880" /></a></p>
<p><b><a href="http://calamares.github.io/about" title="Calamares">Calamares</a>, the used installer framework</b>, has added options in the partitioning stage, an expanded overview in the summary page, more translations added and an optional debug window.  Gone is the issue with partitions not being properly unmounted.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot59.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot59-300x196.png" alt="Octopi" width="300" height="196" class="alignright size-medium wp-image-2882" /></a><strong>Octopi</strong> is becoming a very crucial part of full system maintenance for KaOS.  It is not just a GUI frontend to pacman.  Tools like making sure a mirror is synced before starting any update, looking at the pacman logs were already included.  Added now are an option to get a paste from a complete snapshot of all info of a system with the new SysInfo tool.  Also included are very simple ways to open files, like copy to clipboard the file path shown in Octopi.  To make sure the system doesn't start using too much disk space for the pacman cache, but still giving the user the option to retain some recent packages, the cache-cleaner tool is a great addition.  The built-in tool to access <a href="https://github.com/KaOS-Community-Packages">KCP</a> has now a much clearer place with the addition of it's own "foreign" icon in the menu-bar.</p>
<p>        <b>Known issues:</b></p>
<ul>
<li>When using a ms-dos partition-table with <strong>extended partitions</strong>, the <strong>manual</strong> option to partition will fail to mount the needed target.  Either click on the intended target partition in Dolphin prior to starting the installer (that will mount the partition), or select any of the automated partitioning options</li>
<li>For UEFI installs it is not possible at this time to use any of the three automated partitioning options, only the fourth options can be used</li>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a href="http://kaosx.us/phpBB3/viewtopic.php?f=7&t=6" title="GPT on BIOS">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
Current KaOS users, please <strong>give your mirrors time to sync</strong> before updating, well over 300 packages are moved with the release of this ISO.</p>
<p>For further info about the ISO please see the <a href="http://kaosx.us/release-notes/">Release Notes</a> and the <a href="http://kaosx.us/download/">Download</a> page.<br />
Remember, KaOS ISOs are NOT compatible with unetbootin, and for DVDs, no write speed higher then 4x.</p>
