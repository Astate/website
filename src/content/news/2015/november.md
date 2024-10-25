---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
permalink: /news/2015/november/
heroImage: "/blog-placeholder-2.jpg"
title: Early November &#039;15 Status
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3287
wordpress_url: http://kaosx.us/?p=3287
pubDate: '2015-11-05 17:33:09 -0500'
date_gmt: '2015-11-05 17:33:09 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>It might read as not so interesting to some, but since the most important for this distribution is packaging, always adding the latest, making sure every possible package is rebuild for any update and always checking in as many places as possible that updates are bringing improvements, this news article will begin with a long list of what was built the last month.</p>
<p>Builds affected over half of the KaOS repositories (currently at a little over 2100).  The usual were the monthly KDE updates (Frameworks 5 to 5.15.0, <a  class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.4.2.php">Plasma 5 to 5.4.2</a> and KDE Applications to 15.08.2).  Of course the latest Libreoffice 5.0.3, Firefox 42.0 and Chrome 48.0.2547.0 are among the most known available.<br />
Large rebuilds were triggered though by updates to Qt 5.5.1, Perl 5.22.0, Boost 1.59.0 and ICU 56.1.  All Texlive packages were updated to the latest 2015 release.<br />
A major change was done for Mariadb, it stayed with the stable 5 series, now that the 10 series has gone to 10.1, it is now the better, stable option for this distribution.<br />
The kernel has moved to Linux 4.1.5 for stable, linux-next is at 4.3.  Systemd has now settled on a regular 3-4 weeks update interval, 227 is the latest and available.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151105_115616.png"><img src="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151105_115616-300x200.png" alt="Screenshot_20151105_115616" width="300" height="200" class="alignleft size-medium wp-image-3291" /></a><br />
Calligra is undergoing a major change, it will be split up into complete separate applications, the first that is now fully independent from Calligra is Krita.  KaOS is following the Master branch of both, since they are kf5 based.<br />
Hundreds more were updated, just a glimpse of what entailed that, mesa 11.04, all gstreamer packages 1.6.1, xorg-server 1.17.4, Sqlite 3.9.2, the Sip/Qscintilla/PyQt stack and Apache 2.4.17.<br />
New to the repo are two very complete font packages, Noto-fonts and Noto-fonts-otf, they will become the default font for Plasma 5 with 5.5.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151029_155351.png"><img src="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151029_155351-300x177.png" alt="Gitter" width="300" height="177" class="alignright size-medium wp-image-3293" /></a><br />
For some users finding a way to communicate in KaOS might not have been ideal. Forums at times are too official, IRC has issues with the big difference in time zones every one is in.  To address this a new option is being tested, the use of <a  class="fancybox-iframe" href="https://gitter.im/KaOSx/KaOS/">Gitter</a>.  This offers an Instant Messaging option that anyone can join, all post are logged forever (no need to always be online as in IRC) and for those wanting to follow the work done for KaOS in the repositories, artwork, installer & other KaOS applications or see all changes in KCP, Gitter offers an activity stream.  Gitter is linked on the KaOS website, top & bottom right in the Social Media links, and there is a desktop application available in the Apps repository.  It does have an option to install as an Android app too.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151020_140132.png"><img src="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151020_140132-300x205.png" alt="Screenshot_20151020_140132" width="300" height="205" class="alignleft size-medium wp-image-3295" /></a><br />
Ports to Qt5/kf5 are slowing down, seems it is taking the longest to get the last Qt 4 holdouts to move. A few more though are now Qt5/kf5 based in KaOS, this includes Mumble, Subtitlecomposer and Qwinff.</p>
<p>Work on the installer "Calamares" is ongoing as usual.  Preparations are in place to start using the 2.0 series.  With this, partionmanager is no longer part of the Calamares code, but will use the Kpmcore application instead.  With the next release you will see big changes in the User Creation page and the Partitioning choice page.  Setting a separate root password can be disabled, any changes from choices you make to partitioning will be shown in real live.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151022_132747.png"><img src="http://kaosx.us/wp-content/uploads/2015/11/Screenshot_20151022_132747-300x208.png" alt="Liri" width="300" height="208" class="alignright size-medium wp-image-3299" /></a><br />
Last for this rather long News article is the addition of a new Qt based web-browser.  It is no secret that progress for a full featured Qt based web-browser has been slow.  Many seem abandoned (Rekonq is such an example, still in the repositories, but will be removed soon).  QtWebkit is being depreciated and will no longer be part of Qt 5.6.  The current default web-browser Qupzilla is in its stable form still QtWebkit based.  For over a year though a QtWebengine version of Qupzilla has been in the repositories, but is not ready for stable use, full switch from upstream has been pushed forward to every "next" Qt5 release, Qt 5.4 was supposed to be the version to make that happen.  There is one interesting development though on this front, an all new QML based browser, fully using QtWebengine, <a  class="fancybox-iframe" href="http://liriproject.me/browser/index.html#discover">Liri-Browser</a>.  It has entered the Apps repository and all upstream work is closely followed by providing weekly builds.  Using QML makes this a beautiful browser, but it is not complete enough for daily use.  Development is very active though, so it makes sense to follow this option.</p>
<p>It probably is clear from all the changes mentioned that a new ISO will be needed soon, updates to the October version are getting beyond the set rule of being a simple pacman -Syu when that involves updating almost the entire install.  Expect a new stable ISO around the third to fourth week of this month.</p>
