---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS 2015.11
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kaos11/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3317
wordpress_url: http://kaosx.us/?p=3317
pubDate: '2015-11-24 17:54:01 -0500'
date_gmt: '2015-11-24 17:54:01 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>KaOS is proud to present the <b>2015.11 ISO</b>.<br />
The policy is, once a first pacman -Syu becomes a major update, it is time for a new ISO so new users are not faced with a difficult first update. With new builds effecting over half of the KaOS repositories (currently at about 2100), that new ISO is more than due.</p>
<p>As always with this rolling distribution you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.16.0, <a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.4.3.php" title="plasma 5.4.3">Plasma 5.4.3</a>, KDE Applications 15.08.3 and <strong>not yet released ports of KDE Applications</strong>.<br />
Most notable major updates to the base of the system  are the Boost 1.59.0/ICU 56.1 stack, Glib2 2.46.2 stack, a move of Mariadb to the 10 series, Perl 5.22.0 stack, Linux 4.2.6, all Texlive packages updated to their 2015 versions, Qt 5.5.1 and Systemd 228.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/11/new_logo_os.png"><img src="http://kaosx.us/wp-content/uploads/2015/11/new_logo_os-300x300.png" alt="Logo KaOS" width="300" height="300" class="alignleft size-medium wp-image-3319" /></a><br />
Artwork received several updates.  The all new logo is implemented over various parts of the system.<br />
A fully scalable slideshow with SVG based images and QML based text was designed for the installer, replacing the old png based slides.</p>
<p>This ISO uses the <b>CRC and finobt enabled</b> XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability  of  various  tools to validate and repair metadata corruptions when they are found.  The  free  inode  btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151124_173238.png"><img src="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151124_173238-300x188.png" alt="Slide Show" width="300" height="188" class="alignright size-medium wp-image-3322" /></a><br />
KaOS specific settings for SDDM, kwin and kinit make it possible to start a Plasma Wayland session right from the login manager.  An X11 session is of course still default, but the drop-down menu has a wayland entry too.  The default web-browser Qupzilla is one of the first applications that heavily relied on X11 in its code that is fully ported to run a Wayland session too.</p>
<p>This ISO KaOS uses the Systemd provided Systemd-boot for UEFI installs, Gummiboot is depreciated.</p>
<p><b><a title="Calamares" href="http://calamares.github.io/about">Calamares</a>, the used installer framework</b>, has moved to the 2.0 series.  Highlights of the changes and additions:</p>
<ul>
<li>Calamares no longer uses an internal version of partitionmanager, instead it now uses the libraries provided by KPMCore</li>
<li>The choice page in the partitioning module now shows disk changes in real life.  Any choice you make will immediately show a new disk layout.</li>
<li>Updated bootloader picker when the chosen device changes.</li>
<li>Swap partition support in automatic partitioning</li>
<li>Support for blacklisting modules at build time.</li>
<li>The user creation page has an option added to reuse the user password for root.</li>
<li>Several bug fixes in the partitioning component.</li><br />
</ul></p>
<p><b>Known issues:</b></p>
<ul>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a href="http://kaosx.us/gpt-partitioning/" title="GPT on BIOS">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="http://kaosx.us/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br><br />
        <br /></p>
