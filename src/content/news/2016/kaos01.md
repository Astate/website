---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS 2016.01
permalink: /news/2016/kaos01/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3364
wordpress_url: http://kaosx.us/?p=3364
pubDate: '2016-01-15 02:49:03 -0500'
date_gmt: '2016-01-15 02:49:03 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>It is with great pleasure to present to you a first KaOS ISO for 2016.</p>
<p>As always with this rolling distribution you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.18.0, Plasma 5.5.3, KDE Applications 15.12.1 and <strong>not yet released ports of KDE Applications</strong>.  <a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.5.0.php" title="plasma 5.5.0">Plasma 5.5</a> has brought new features in the Widget Explorer, expanded options in the Applications Launchers, new widgets including Color Picker & Disk Quota, restored support for legacy system tray icons, default font has moved to Noto and Desktop Tweaks for different handling of widgets plus option to disable the desktop toolbox.<br />
Among the new Applications in 15.12 are Spectacle, the new screenshot capture program.<br />
Many more are now fully ported to Frameworks 5 and are part of the stable tar release in their frameworks version.<br />
<a href="/wp-content/uploads/2016/01/Screenshot_20160106_165729.png"><img src="/wp-content/uploads/2016/01/Screenshot_20160106_165729-300x230.png" alt="GRUB 2" width="300" height="230" class="alignleft size-medium wp-image-3365" /></a><br />
Most notable major updates to the base of the system  are a Glibc 2.22 based new toolchain, a move of python 3 to 3.5, GRUB updated with the latest security fixes, Ruby 2.3.0 stack, Linux 4.3.3,  Mesa 11.1.0 and LLVM/Clang moved to 3.7.1.</p>
<p>The artwork received a complete overhaul for 2016.  It is back to the original simple gray look as was used when KaOS started in 2013.  Work has gone into integrating all parts for one complete uniform look.  You now will see one continuous theme starting with the grub bootloader to the logout screen.<br />
<a href="/wp-content/uploads/2016/01/Screenshot_20160114_210343.png"><img src="/wp-content/uploads/2016/01/Screenshot_20160114_210343-300x169.png" alt="Splash" width="300" height="169" class="alignright size-medium wp-image-3367" /></a></p>
<p>With the move to Linux 4.3.3 came the end of nvidia 304xx as the legacy Nvidia version.  It no longer works with the latest kernels so it is time to move to nvidia 340xx as the legacy Nvidia option.  This means systems running GeForce 6000/7000 GPUs (graphics cards from around 2004) need to switch to Nouveau.</p>
<p>This ISO uses the <b>CRC and finobt enabled</b> XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability  of  various  tools to validate and repair metadata corruptions when they are found.  The  free  inode  btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.</p>
<p>KaOS specific settings for kinit make it possible to start a Plasma Wayland session right from the login manager.  An X11 session is of course still default, but the drop-down menu has a wayland entry too.  With Plasma 5.5, the Wayland session is now possible on more systems.</p>
<p>This ISO KaOS uses the Systemd provided Systemd-boot for UEFI installs.</p>
<p>Among the new applications that are now fully ported to Qt5/Frameworks 5, Rosegarden, Doxygen, Genymotion, Ktorrent, Kwave and Kbibtex.<br />
<a href="/wp-content/uploads/2016/01/Screenshot_20160115_022821.png"><img src="/wp-content/uploads/2016/01/Screenshot_20160115_022821-300x188.png" alt="Screenshot_20160115_022821" width="300" height="188" class="alignleft size-medium wp-image-3370" /></a><br />
<b><a title="Calamares" href="http://calamares.github.io/about">Calamares</a>, the used installer framework</b>, has moved to the 2.0 series.  Highlights of the changes and additions:</p>
<ul>
<li>Calamares no longer uses an internal version of partitionmanager, instead it now uses     the libraries provided by KPMCore</li>
<li>The choice page in the partitioning module now shows disk changes in real life with much improved preview widgets.</li>
<li>Updated bootloader picker when the chosen device changes.</li>
<li>All new non-blocking asynchronous device rescans with spinner UI throughout the partitioning module</li>
<li>Copying of the installation log to the target system is implemented</li>
<li>Many improvements in the manual partitioning interface (including rescans and selection)</li>
<li>Several bug fixes in the partitioning component.</li><br />
</ul></p>
<p><b>Known issues:</b></p>
<ul>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a href="/gpt-partitioning/" title="GPT on BIOS">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br><br />
        <br /></p>
