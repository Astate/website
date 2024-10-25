---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS ISO 2015.08
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kaos08/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3198
wordpress_url: http://kaosx.us/?p=3198
pubDate: '2015-08-13 17:33:06 -0400'
date_gmt: '2015-08-13 17:33:06 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>It is with great pleasure to present to you the <b>2015.08 ISO</b>. This ISO brings a long list of wonderful improvements to all of KDE.  Biggest part undoubtedly is the first time to have the option to run Plasma 5 in a Wayland session.  It still is in an early stage so kwin_x11 is of course the default still.  For all the latest on Plasma 5 see <b><a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.3.95.php" title="plasma 5.4RC">Plasma 5.4RC announcement</a></b></p>
<p>There are a few option to test a Wayland session, best working currently (possible in Live mode too) is to disable sddm <code>sudo systemctl stop sddm</code><br />
Log in at tty2: <code>Ctrl-Alt-F2</code> and use your user-name and password to login, in live mode those are <strong>live/live</strong><br />
Then run: <code>kwin_wayland --libinput --xwayland "plasmashell --platform wayland"</code></p>
<p>KaOS is also approaching  a completed switch from Qt 4 to Qt 5 only. This ISO has only one application left that depends on Qt 4, hplip, The repositories have about a dozen left that still need Qt 4.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/08/Screenshot_20150813_125406.png"><img src="http://kaosx.us/wp-content/uploads/2015/08/Screenshot_20150813_125406-300x169.png" alt="Screenshot_20150813_125406" width="300" height="169" class="alignright size-medium wp-image-3204" /></a><br />
Most notable major updates over the last two months are the Xorg 1.17 stack, Glib2 2.44.2 stack, Qt 5.50, GCC 4.9.3, Linux 4.1.5 and Systemd 224.<br />
This ISO KaOS uses the Systemd provided Systemd-boot for UEFI installs, Gummiboot is depreciated.</p>
<p>As for the desktop this ISO brings all the latest of Plasma 5 (<strong><a https://www.kde.org/announcements/kde-frameworks-5.13.0.php href="https://www.kde.org/announcements/kde-frameworks-5.13.0.php">Frameworks 5.13.0</a>, Plasma 5.4RC</strong>) and <strong>KDE Applications 15.07.90</strong>.  All build on Qt 5.5.0.  Plasma-volume-control is now part of the Plasma 5 group, renamed to Plasma-pa (for sound plasmoid).  Many more applications are now fully ported to Qt5/Frameworks 5, examples of the recent ports are Megaglest, Tellico, KMahjongg, lmms, smb4k, qmmp, Basket and Lyx.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150620_150645.png"><img src="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150620_150645-300x182.png" alt="Welcome page" width="300" height="182" class="alignleft size-medium wp-image-3156" /></a><br />
<b><a href="http://calamares.github.io/about" title="Calamares">Calamares</a>, the used installer framework</b>, has received a lot of work.  Highlights of the additions:</p>
<ul>
<li>Added the option of not installing a boot loader on MBR (legacy BIOS boot) systems.</li>
<li>Added the option of changing the file system type when editing a partition.</li>
<li>More robust partition detection and mounting/unmounting</li>
<li>Swap partition support in automatic partitioning</li>
<li>Fixed an issue which could result in the wrong mount point being set for a swap partition</li>
<li>Adjusted the Install page so that the QML slideshow is loaded and started exactly when the install operation starts</li>
<li>Improved branding mechanism, with distribution branding option on the Welcome page</li><br />
</ul></p>
<p>Changes for <strong>Octopi</strong> include: At Info tab, packages in "depends On" field are shown as clickable anchors. Information tab now supports "ctrl+F" searching.  Help/About dialog now shows Pacman information.  StatusBar msg got updated with number of selected packages more visible. When outdated packages are printed at Output tab, you can see their information just hovering the mouse over them.</p>
<p>Current KaOS users, please give your mirrors time to sync before updating, well over 300 packages are moved with the release of this ISO.</p>
<p><b>Known issues:</b></p>
<ul>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a href="http://kaosx.us/gpt-partitioning/" title="GPT on BIOS">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="http://kaosx.us/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br><br />
        <br /></p>
