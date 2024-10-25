---
//layout: news
status: publish
description: With a late October post about how to proceed with kf5 and the announcement of a new stable ISO November 6, last month was skipped
published: true
title: Early December 2014 Status
permalink: /news/2014/december/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2207
wordpress_url: http://kaosx.us/?p=2207
pubDate: "2014-12-06 17:25:48 -0500"
date_gmt: "2014-12-06 17:25:48 -0500"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>With a late October post about how to proceed with kf5 and the announcement of a new stable ISO November 6, last month was skipped for one of these "Early Month" posts.  Resuming it again this month.</p>
<p>It is a bit of a chaotic situation for packagers regarding KDE, many things are very unclear, so for KaOS, just trying to do the best with the limited info that comes from KDE devs.<br />
<strong>KDE for all stable users was updated to 4.14.3</strong>, with kde-workspace staying at 4.11 (currently 4.11.14), kactivities no more releases for KDE 4.  KDE-workspace is supposed to keep getting releases until August 2015, but nothing is posted anywhere for such releases after the November release, see <a href="https://techbase.kde.org/Schedules/KDE4/4.11_Release_Schedule" title="schedule 4.11">the bottom of the 4.11 release schedule</a>.<br />
Frameworks 5 is quite clear how it is released, and is fully stable, so no issues there.<br />
Plasma 5 is getting regular releases, but not clear what is supposed to be in Plasma 5 (pretty much most of the old kde-workspace), some parts are needed for applications, like a kf5 version of kdepimlibs, but that one is not part of Plasma 5, nor are there any stable tars for it, no mention were it will go in the future, Plasma 5 or KDE Applications.....<br />
And mentioning <strong>KDE Applications</strong>, there it gets really unclear.  First release with the naming scheme of <code>year_month</code> is due next week, 14.12.<br />
The beta and rc versions of the kf5 parts of that release have been build for KaOS, and are available in the kde-next repo, but only 12 applications are kf5 based, all the rest is still KDE 4, BUT, very large parts of the old KDE 4 are NOT released with 14.12.  Completely unclear if they will be released at all anymore, if they will be released as another 4.14.xx release, maybe 14.12, only documentation available <a href="https://community.kde.org/Applications/14.12_Release_Notes" title="14.12 notes">are these release notes</a>, try to  figure how this is supposed to be packaged and when.....<br />
<a href="http://kaosx.us/wp-content/uploads/2014/12/snapshot26.png"><img src="http://kaosx.us/wp-content/uploads/2014/12/snapshot26-300x187.png" alt="Kden port" width="300" height="222" class="alignleft size-medium wp-image-2077" /></a><br />
With all this being so unclear, <strong>the goal of moving KaOS fully to kf5 by late February</strong> is really taking shape so the focus can go back to just one Desktop Environment, and tons of work toward that has been done the last 4-6 weeks, including the release of <a href="http://kaosx.us/phpBB3/viewtopic.php?f=19&t=733" title="KaOS-kf5">KaOS-kf5 2014.12.04 test ISO</a>.  Dozens and dozens of early ports have been added to kde-next, many Qt5 builds have been done to get ready as soon as possible for Qt 5.4, Plasma 5.2 will be based on that and (5.2.0 is due to be released early February).  Calligra has made a schedule to start their major move to Qt5 in January, then they will use the 1-2 months after that move to try and stabilize all, so it looks like there will be a working Calligra Qt5 version available be late February.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/12/snapshot164.png"><img src="http://kaosx.us/wp-content/uploads/2014/12/snapshot164-300x222.png" alt="Calamares Locale" width="300" height="222" class="alignright size-medium wp-image-2077" /></a><br />
The new installer Calamares has seen hundreds of commits over the last one plus month, and is ready for KaOS to be used.  Not bug free or fully complete, but the best option available to come with an UEFI ready stable ISO and install.</p>
<p>For the rest, the usual updates for this rolling distro have come in at there normal pace.  One bigger update to mention is the new toolchain, based on GCC 4.9.2 and glibc 2.20.  That new toolchain was delayed somewhat by the major known issues in GCC 4.9.0 and 4.9.1, which made those no candidates for KaOS, see one such comment of <a href="http://lkml.iu.edu//hypermail/linux/kernel/1407.3/00650.html" title="gcc 4.9">the state of gcc 4.9</a>.</p>
<p>KCP added a few more functions.  <strong>Cellix</strong> created the option to use bash-completion with kcp, show the full content of KCP with <code>kcp --list-all</code> and --help can show the version.</p>
