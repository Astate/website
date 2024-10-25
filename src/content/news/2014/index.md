---
//layout: news
status: publish
description: This ISO marks two major milestones for this distribution. Since it's inception almost two years ago, a need to be ready for UEFI installs has always been a priority
published: true
title: KaOS ISO 2014.12
permalink: /news/2014/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2246
wordpress_url: http://kaosx.us/?p=2246
pubDate: "2014-12-24 02:14:53 -0500"
date_gmt: "2014-12-24 02:14:53 -0500"
categories:
  - Uncategorized
tags: []
comments: []
---

<p><a href="http://kaosx.us/wp-content/uploads/2014/12/snapshot1a.png"><img class="alignleft size-medium wp-image-2247" src="http://kaosx.us/wp-content/uploads/2014/12/snapshot1a-300x187.png" alt="calamares" width="300" height="187" /></a>KaOS is very proud to announce the availability of the December release of a new stable ISO. This ISO marks two major milestones for this distribution. Since it's inception almost two years ago, a need to be ready for UEFI installs has always been a priority. That was tied though to getting a modern Qt based installer that could handle such UEFI installs. With this ISO, both are implemented.</p>
<p>The new, <strong>Qt5/python3 based installer</strong> is a joint effort of several distributions. In May of this year, developers of Netrunnner, KaOS and Manjaro got together to discuss the possibility to work jointly on a brand new, Qt5 based installer. The idea was born to create <a title="About Calamares" href="http://calamares.github.io/about/">Calamares</a>. By June the coding started and by August a first, raw usable version was put into testing for KaOS-kf5 based ISOs. Currently, Calamares is being developed with contributions from BBQLinux, Fedora, KaOS, Kubuntu, Manjaro, Maui and Netrunner.<a href="http://kaosx.us/wp-content/uploads/2014/12/snapshot7.png"><img class="alignright size-medium wp-image-2251" src="http://kaosx.us/wp-content/uploads/2014/12/snapshot7-300x182.png" alt="partitioning" width="300" height="182" /></a><br />
Calamares is an <strong>installer framework</strong>, entirely modular. Being that modular shows on this ISO, since it uses about 25 % of the modules that are KaOS specific, but all stays entirely integrated. Please understand though, Calamares is not at a stable version yet, it is at beta stage, and certain parts are not implemented yet. To see Calamares in action <a class="fancybox-iframe" title="Calamares video" href="http://kaosx.us/media/cala12_14.webm">see this video</a>.<br />
For UEFI installs, KaOS uses the simple, transparent but quite powerful <strong>gummiboot</strong> as bootloader.<a href="http://kaosx.us/wp-content/uploads/2014/12/snapshot14.png"><img class="alignleft size-medium wp-image-2264" src="http://kaosx.us/wp-content/uploads/2014/12/snapshot14-300x175.png" alt="EFI partition" width="300" height="175" /></a></p>
<p>This ISO is a first to have the split way of releasing from KDE. The applications are <a class="fancybox-iframe" title="KDE 4.13.2" href="https://www.kde.org/announcements/announce-applications-14.12.0.php">KDE Applications 14.12.0</a>, bringing new features and bug fixes to more than a hundred applications. The base of KDE is more in a frozen state now, those are at 4.14.3, were the lts kde-workspace is at 4.11.14.</p>
<p>The all new Qt 5.4.0 is bringing new features like the chromium based qtwebengine and qtwayland. The Qt5 based KDE Frameworks 5 packages are starting to get integrated into the KaOS repositories. Examples of packages using frameworks are the default web-browser Qupzilla, package-manager Octopi and the installer Calamares.</p>
<p>The base of the system underwent quite some change. An all new GCC 4.9.2 and GLIBC 2.20 toolchain was build. Systemd moved to 218, with that move firmware loading is no longer handled by systemd, but is now done by the kernel. Linux 3.17.7 was build in such a way that it can accommodate those changes.</p>
<p><strong>Cellix</strong> keeps improving the <a title="KCP" href="https://github.com/KaOS-Community-Packages">KaOS Community Packages</a> helper "kcp". It is now go based, can do searches for outdated packages, list all packages, list the packages by popularity, much faster searches and improved handling of building &amp; installing packages.</p>
<p>The default media-player, <a title="mpv in smplayer" href="http://blog.smplayer.info/how-to-install-smplayer-with-mpv/">smplayer</a>, added a new backend. It now can not only use mplayer, but also mpv. With mpv full streaming integration is implemented, the <a title="streaming sites" href="http://rg3.github.io/youtube-dl/supportedsites.html">list of sites</a> it can now handle in smplayer is large</p>
<p><b>Known issues:</b></p>
<ul>
<li>For UEFI installs it is not possible at this time to use any of the three automated partitioning options, only the fourth options can be used</li>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a title="GPT on BIOS" href="http://kaosx.us/phpBB3/viewtopic.php?f=7&amp;t=6">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>If for any reason the install fails, the installer currently does not unmount the partition it needed to use for the install. Before restarting the install either umount manually or restart the Live mode</li>
<li>Presenting a slideshow during the install is not implemented yet</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
</ul><br />
For further info about the ISO please see <a class="fancybox-iframe" title="release notes" href="http://kaosx.us/RELEASE_NOTES_20141224.html">the release notes</a> and the <a title="Download" href="http://kaosx.us/download/">Download</a> page.</p>
