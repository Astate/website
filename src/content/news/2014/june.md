---
//layout: news
status: publish
description: A very busy month for KaOS is behind us. To start with the usual, though it was a bit more then normal, a good 700 packages were updated
published: true
title: Early June 2014 Status
permalink: /news/2014/june/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1379
wordpress_url: http://kaosx.us/?p=1379
pubDate: "2014-06-06 02:39:08 -0400"
date_gmt: "2014-06-06 02:39:08 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>A very busy month for KaOS is behind us. To start with the usual, though it was a bit more then normal, a good 700 packages were updated, this combined with the 500 or so more the month before, makes it clear, a new ISO is needed soon to stay with the policy to have the first pacman -Syu for new users be an uncomplicated one.<br />
Just a glimpse of all that is new, KDE moved to 4.13.1 (4.13.2 build will start shortly, expect that version to be on the upcoming ISO), linux 3.14.5, gcc 4.8.3, Qt 5.3.0, poppler 0.26.1, nvidia 337.25, llvm 3.4.1, google-chrome moved to 64bit with the 37 series and libreoffice 4.2.4.</p>
<p>To accommodate Linux-users living in the Eastern globe, a full set of <strong>Input Method packages</strong> (fcitx) were added to the repositories. Among others added are a good amount of python3 packages.</p>
<p>Those addition do not change that the repositories of KaOS are limited. To help users with adding to and maintaining needed packages for their system <a title="KCP" href="http://github.com/KaOS-Community-Packages">KaOS Community Packages</a> was opened rather quietly last January. This last month though, a lot more activity has happened in KCP, and the available packages<a href="http://kaosx.us/wp-content/uploads/2014/06/snapshot64.png"><img class="alignright size-medium wp-image-1380" src="http://kaosx.us/wp-content/uploads/2014/06/snapshot64-300x202.png" alt="snapshot64" width="300" height="202" /></a> there are well over one hundred.<br />
But it was still a bit of a chore to use.<br />
Thanks to <strong>Cellix</strong>, this has changed, the application <a class="fancybox-iframe" title="kcp" href="http://kaosx.us/packages/index.php?act=show&amp;subdir=apps&amp;sortby=date&amp;file=kcp-0.8-1-x86_64.pkg.tar.xz">"kcp"</a> was developed and added to the repositories.<br />
With it any user can easily search for any package in KCP with:<br />
<code>kcp -s partial_package_name</code><br />
Or build and install with:<br />
<code>kcp -i package_name</code><br />
Octopi was also adjusted for this addition, kcp is fully integrated in octopi.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/06/snapshot56.png"><img class="alignleft size-medium wp-image-1382" src="http://kaosx.us/wp-content/uploads/2014/06/snapshot56-300x225.png" alt="snapshot56" width="300" height="225" /></a><br />
The preparation to move KaOS to the new kde-frameworks/plasma-next has started in earnest too. The kde-next repo is now only used for these packages. Two full builds were done (kf5 beta 2 &amp; 3, plasma-next 4.96.0 &amp; 4.97.0). The results already bring a quite usable system. If development of kf5 continues as is now, expect KaOS to fully switch 2-3 months after KDE declares kf5/plasma-next stable.</p>
<p>The move to kf5 will also hasten the need for a new installer, currently used is fully depending on KDE 4/Qt4, and would need a major rewrite. That still would not eliminate the need for many missing parts (UEFI support, automated partitioning, support for LVM, LUKS to name some).<br />
Transition to a new installer has entered a testing phase. To see this new installer, plus an early test ISO with kf5, a <a class="fancybox-iframe" title="kf5/thus video" href="http://kaosx.us/kf5.mp4">kf5/plasma-next video</a> is up.</p>
<p>More exciting news is underway for a possible brand new installer, there is a start of cooperation between KaOS and a few other distributions to come to one universal, <a title="calamares" href="https://github.com/calamares/calamares/blob/master/README.md">Qt5 based installer.</a></p>
