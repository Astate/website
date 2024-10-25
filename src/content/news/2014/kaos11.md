---
//layout: news
status: publish
description: Testing for this ISO took longer then usual, due to the fact that getting ready for an UEFI capable ISO is a must.
published: true
title: KaOS ISO 2014.11
permalink: /news/2014/kaos11/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2133
wordpress_url: http://kaosx.us/?p=2133
pubDate: "2014-11-06 16:58:34 -0500"
date_gmt: "2014-11-06 16:58:34 -0500"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>KaOS is proud to announce the availability of the November release of a new stable ISO. Since August updates were done to a good 1200 packages and to stay with the policy that a first pacman -Syu should be an uncomplicated one for new users means a new ISO is needed.</p>
<p>Testing for this ISO took longer then usual, due to the fact that getting ready for an UEFI capable ISO is a must. &nbsp;For that, the interim installer is not a good option, so a lot of work was done to try and get the new Qt5 based installer, <a href="http://calamares.github.io/" title="Calamares">Calamares</a> ready, but it is just too early to use on a stable ISO.  So this is one last time a BIOS only ISO.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/11/snapshot128.png"><img src="http://kaosx.us/wp-content/uploads/2014/11/snapshot128-183x300.png" alt="seafile" width="183" height="300" class="alignright size-medium wp-image-2137" /></a><br />
At the base of the system some of the updates this ISO has, <strong>linux 3.16.7</strong>, gcc 4.8.3, llvm 3.5.0, <strong>Qt5 5.3.2</strong>, openssl 1.0.1.j, mesa 10.3.2, bash 4.3.030, poppler 0.26.1, systemd 216 and xorg-server 1.16.1.</p>
<p>The latest <a class="fancybox-iframe" title="KDE 4.14.2" href="http://kde.org/announcements/announce-4.14.2.php">KDE 4.14.2</a> version is available on this ISO, the second in a series of monthly stabilization updates to the 4.14 series. More than 35 recorded bugfixes include improvements to E-Mail client KMail, Umbrello UML Modeller, the document viewer Okular, the plot drawing application Kmplot and the file manager Dolphin.<br />
Large rebuilds were needed for the boost 1.56.0/icu 54.1, ffmpeg 2.4.3 and libimobiledvice/usbmuxd updates.</p>
<p>Major apps that were updated to their latest include Calligra 2.8.6, LibreOffice 4.3.3, Google-Chrome 40, Firefox 33.0.2<br />
The move to gstreamer 1.0 only in the KaOS repos is almost complete, with that, Clementine is back on this ISO since it too moved to gstreamer 1.0.<br />
New to this ISO is the Qt5 webcam app "webcamoid" and the opensource, Qt5 based, file sharing client <a href="http://seafile.com/en/home/" title="Seafile">Seafile</a></p>
<p>About 200 packages will be moved with the release of this ISO, so for all current users, give your mirror a few hours to fully sync, or wait until tomorrow to do your update.</p>
