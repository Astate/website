---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS ISO 2015.06
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kaos06/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3092
wordpress_url: http://kaosx.us/?p=3092
pubDate: '2015-06-13 03:43:02 -0400'
date_gmt: '2015-06-13 03:43:02 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>KaOS is proud to present the <b>2015.06 ISO</b>. The policy is, once a first pacman -Syu becomes a major update, it is time for a new ISO so new users are not faced with a difficult first update.  With the magnitude of changes the last two months, that new ISO is more than due.<br />
Most notable major updates are the Boost/ICU stack, Gnutls/Nettles stack, a new Glibc 2.21 & Binutils 2.25 based toolchain, a move to Libpng 1.6 series, Linux 4 (4.0.5) and Systemd 220.<br />
The latter now made the logical step to merge a bootloader with an init system.  With this ISO KaOS moves to the Systemd provided <strong>Systemd-boot</strong> for UEFI installs, Gummiboot is depreciated.<br />
With Linux 4.0.5 a much simpler way for users to make sure their intel microcode is always updated on boot is implemented.  The needed in-kernel modules are now built in such a way that Systemd can handle the microcode updates.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2015/05/snapshot79.png"><img src="http://kaosx.us/wp-content/uploads/2015/05/snapshot79-300x167.png" alt="kscreengenie" width="300" height="167" class="alignleft size-medium wp-image-3035" /></a><br />
As for the desktop this ISO brings all the latest of Plasma 5 (<strong>Frameworks 5.9.11, Plasma 5.3.1</strong>), <strong>KDE Applications 15.04.2 and not yet released ports of KDE Applications</strong>.  All build on Qt 5.4.2.  Plasma-volume-control has replaced kmix for sound plasmoid, Kscreengenie has replaced Ksnapshot.  Many more applications are now fully ported to <a href="http://kaosx.us/wp-content/uploads/2015/05/snapshot85.png"><img src="http://kaosx.us/wp-content/uploads/2015/05/snapshot85-300x165.png" alt="Midna sddm" width="300" height="165" class="alignright size-medium wp-image-3033" /></a>Qt5/Frameworks 5, biggest among those is the Calligra Suite.  Also moved to Qt5 and back on this ISO is Clementine.  New additions to the repositories includes applications very recently switching to Qt5, examples are Avidemux, Mixxx and Kup.  The Midna artwork has expanded to now also provide a custom, modern flat icon set and a new sddm theme written in QML for KaOS.</p>
<p><b><a class="fancybox-iframe" href="http://calamares.github.io/about" title="Calamares">Calamares</a>, the used installer framework</b>, has received a lot of work.  Highlights of the additions:</p>
<ul>
<li>Automated EFI support for partitioning and boot loader</li>
<li>Switch from Gummibot to Systemd-boot for UEFI systems</li>
<li>More robust partition detection and mounting/unmounting</li>
<li>Swap partition support in automatic partitioning</li>
<li>An improved Python modules API</li>
<li>User experience improvements, including all new Welcome and Summary pages</li>
<li>A greatly improved branding mechanism, with QML and translations support</li><br />
</ul><a href="http://kaosx.us/wp-content/uploads/2015/06/Screenshot_20150610_144118.png"><img src="http://kaosx.us/wp-content/uploads/2015/06/Screenshot_20150610_144118-300x191.png" alt="Calamares_UEFI" width="300" height="191" class="alignright size-medium wp-image-3104" /></a><br />
Current KaOS users, please give your mirrors time to sync before updating, well over 300 packages are moved with the release of this ISO.</p>
<p>        <b>Known issues:</b></p>
<ul>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a href="http://kaosx.us/gpt-partitioning/" title="GPT on BIOS">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li>
<li>When a drive contains a LUKS partition, Calamares will not start, see <a href="http://calamares.io/bugs/browse/CALAPM-4" title="LUKS Bug report">LUKS Bug report</a>.  It is needed to remove the LUKS partition before starting the installer</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="http://kaosx.us/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br><br />
        <br /></p>
