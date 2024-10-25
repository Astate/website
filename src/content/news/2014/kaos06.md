---
//layout: news
status: publish
description: With this ISO, KaOS makes the switch to present XFS as the default filesystem, a good explanation for the reasons behind this switch can be found
published: true
title: KaOS ISO 2014.06
permalink: /news/2014/kaos06/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1411
wordpress_url: http://kaosx.us/?p=1411
pubDate: "2014-06-12 02:21:50 -0400"
date_gmt: "2014-06-12 02:21:50 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>KaOS is proud to announce the availability of the June release of a new stable ISO. The last two months updates were done to a good 1100 packages and to stay with the policy that a first pacman -Syu should be an uncomplicated one for new users means a new ISO is needed.</p>
<p>At the base of the system some of the updates this ISO has, <strong>linux 3.14.6 with the futex bug fix included</strong>, gcc 4.8.3, llvm 3.4.1, <strong>Qt5 5.3.0</strong>, openssl 1.0.1.h, mesa 10.2.1, bash 4.3.018, poppler 0.26.1. Systemd 213 was part of the updates tested but did not make the cut, 212 is the version of systemd on this ISO.</p>
<p>With this ISO, KaOS makes the switch to present XFS as the default filesystem, a good explanation for the reasons behind this switch can be found <a class="fancybox-youtube" title="XFS videos" href="https://www.youtube.com/watch?v=FegjLbCnoBw">in this XFS presentation.</a></p>
<p>The latest <a class="fancybox-iframe" title="KDE 4.13.2" href="http://kde.org/announcements/announce-4.13.2.php">KDE 4.13.2</a> version is available on this ISO, the second in a series of monthly stabilization updates to the 4.13 series. It includes 40 recorded bugfixes, includes improvements to Personal Information Management suite Kontact, Umbrello UML Modeller, the Desktop search functionality, web browser Konqueror and the file manager Dolphin.</p>
<p>The sound group had a complete rebuild, this included a move to ffmpeg 2 (2.2.3), and a bigger change, a full move away from gstreamer0.10 (maintenance for it stopped 2-3 years ago). This ISO only includes <strong>gstreamer 1</strong>. Most applications were ready for this move, a few needed some patching for this switch (qtwebkit for example). The only application left in the KaOS repositories needing gstreamer0.10 is clementine, that is why it is replaced on this ISO with <strong>Amarok</strong>.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/06/snapshot71.png"><img class="alignright size-medium wp-image-1415" src="http://kaosx.us/wp-content/uploads/2014/06/snapshot71-300x210.png" alt="snapshot71" width="300" height="210" /></a><br />
To include the community more into shaping how the end users' installs looks like, <a title="KCP" href="http://github.com/KaOS-Community-Packages">KaOS Community Packages</a> is available to locally build missing packages and share the needed files with other KaOS users. To automate the use of KCP, <strong>Cellix</strong> developed the package <a class="fancybox-iframe" title="kcp" href="http://kaosx.us/packages/index.php?act=show&amp;subdir=apps&amp;sortby=date&amp;file=kcp-0.8-1-x86_64.pkg.tar.xz">"kcp"</a>, which is also fully integrated in Octopi, the KaOS GUI package-manager. This ISO includes kcp and the base-devel group needed to build packages from the KaOS-Community-Packages. In octopi, just highlight the KCP group, type a few letters to search for a desired package, hit "enter" and a list will be shown. Marking a package for install will build and install. To use kcp as standalone application, type "kcp -h" for a list of options.<br />
This is not the only improvement you will find in octopi, the ability to search or list packages by repositories is also added.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/06/snapshot721.png"><img class="alignleft size-medium wp-image-1422" src="http://kaosx.us/wp-content/uploads/2014/06/snapshot721-300x234.png" alt="snapshot72" width="300" height="234" /></a><br />
A few hundred new icons have been added to the flattr-icons set.</p>
<p>Major apps that were updated to their latest include Calligra 2.8.3, LibreOffice 4.2.4, Google-Chrome 37, Firefox 30.0.</p>
<p>To accommodate Linux-users living in the Eastern globe, a full set of Input Method packages (fcitx) were added to the repositories.</p>
<p>For further info about the ISO please see <a class="fancybox-iframe" title="release notes" href="http://kaosx.us/RELEASE_NOTES_20140612.html">the release notes</a> and the <a title="Download" href="http://kaosx.us/download/">Download</a> page.</p>
<p>About 580 packages will be moved with the release of this ISO, so for all current users, give your mirror a few hours to fully sync, or wait until tomorrow to do your update.</p>
