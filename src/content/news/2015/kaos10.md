---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS 2015.10
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kaos10/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3260
wordpress_url: http://kaosx.us/?p=3260
pubDate: '2015-10-02 18:08:04 -0400'
date_gmt: '2015-10-02 18:08:04 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>It is with great pleasure to present to you the <b>2015.10 ISO</b>. As always with this rolling       distribution you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.14.0, Plasma 5.4.1 and KDE Applications 15.08.1.<br/><br />
Bigger news though are two changes.  This ISO is the first time that the default XFS filesystem is <b>CRC and finobt enabled</b>.  CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability  of  various  tools to validate and repair metadata corruptions when they are found.  The  free  inode  btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.<br/><br />
<a href="http://kaosx.us/wp-content/uploads/2015/10/unnamed.png"><img src="http://kaosx.us/wp-content/uploads/2015/10/unnamed-300x188.png" alt="License page" width="300" height="188" class="alignleft size-medium wp-image-3264" /></a><br />
Second is not so much an enhancement for the user, but vital for this distribution, the addition of a License Approval page to the installer.  Since KaOS ships with the option to install with proprietary graphics drivers, users accepting the EULA for such drivers was sorely needed.<br/></p>
<p>Changes to SDDM, kwin and kinit make it now possible to start a <strong>Plasma Wayland session right from the login manager</strong>.  An X11 session is of course still default, but the drop-down menu has now a wayland entry too.  The default web-browser Qupzilla is one of the first applications that heavily relied on X11 in its code that now is fully ported to run a Wayland session too. <br/><br />
<a href="http://kaosx.us/wp-content/uploads/2015/10/Screenshot_20150909_204515.png"><img src="http://kaosx.us/wp-content/uploads/2015/10/Screenshot_20150909_204515-300x214.png" alt="Screenshot_20150909_204515" width="300" height="214" class="alignright size-medium wp-image-3267" /></a><br />
Most notable major updates over the last two months are the Ncurses 6.0 stack, OpenCV 3.0.0 stack, Xfsprogs 4.2.0, grub 2.02beta, Networkmanager packages moved to 1.0.6, all of gstreamer is at 1.6.0 and Systemd 226. <br/><br />
Many more applications are now fully ported to Qt5/Frameworks 5, examples of the recent ports are Sweeper, KRFB, ksuperkey, Basket and Lyx.<br />
<b><a title="Calamares" href="http://calamares.github.io/about">Calamares</a>, the used installer framework</b>, has received a lot of work. Highlights of the additions:</p>
<ul>
<li>An all new WebView module, which allows the deployer to show any web page in a WebKit environment.</li>
<li>An all new License module, which allows the deployer to require acceptance of licensing terms for proprietary components</li>
<li>Enhanced autologin defaults customization.</li>
<li>Swap partition support in automatic partitioning</li>
<li>Support for blacklisting modules at build time.</li>
<li>Service disabling support in the Services module.</li>
<li>Fixed a bug with swap partitions needlessly getting new UUIDs.</li>
<li>Fixed a bug with alongside install being allowed even if the DOS MBR partition table limit of 4 primary partitions is reached.</li>
<li>Several bug fixes in the partitioning component.</li><br />
</ul></p>
<p>Changes for <strong>Octopi</strong> include: At Info tab, packages in "depends On" field are shown as clickable anchors. Information tab now supports "ctrl+F" searching.  Help/About dialog now shows Pacman information.  StatusBar msg got updated with number of selected packages more visible. When outdated packages are printed at Output tab, you can see their information just hovering the mouse over them.  The built-in tool to access <a href="https://github.com/KaOS-Community-Packages">KCP</a> has now a much clearer place with the addition of its own "foreign" icon in the menu-bar.</p>
<p>For UEFI installs, KaOS uses the simple, transparent but quite powerful systemd-boot as bootloader.</p>
<p>The ISO ships with <b>Frameworks 5.14.0, <b><a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.4.1.php" title="plasma 5.4.1">Plasma 5.4.1</a></b>, KDE Applications 15.08.1 &amp; not yet released ports of KDE Applications</b>, Linux 4.1.9, Systemd 226, Kmod 21, Networkmanager 1.0.6, Calligra 3.0Alpha, Clementine, Plasma-nm 5.4.1, Xorg-server 1.17.2, Mesa 11.0.2, Glibc 2.21, GCC 4.9.4, non-free Nvidia 352.41 and Python3 3.4.3 to name a few.</p>
<p><b>Known issues:</b></p>
<ul>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a href="http://kaosx.us/gpt-partitioning/" title="GPT on BIOS">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="http://kaosx.us/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br><br />
        <br /></p>
