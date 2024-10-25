---
//layout: news
status: publish
description: Last 4-5 weeks no visual major changes, weeks were more marked with update, rebuild and prepare.
published: true
title: Early August 2014 Status
permalink: /news/2014/august/
heroImage: "/blog-placeholder-4.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1926
wordpress_url: http://kaosx.us/?p=1926
pubDate: "2014-08-11 18:49:02 -0400"
date_gmt: "2014-08-11 18:49:02 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>Last 4-5 weeks no visual major changes, weeks were more marked with update, rebuild and prepare.</p>
<p>Preparation is in full swing to be ready for <strong>KDE 4.14</strong> later this month, latest RC is build and currently tested on an ISO. KDE 4.13.3 is the latest currently available to all KaOS users.</p>
<p>Lots of work is ongoing (not visible yet for most users) in preparing to switch to a new installer. &nbsp;One is fully working, is in the final testing <a href="http://kaosx.us/wp-content/uploads/2014/08/snapshot4_1.png"><img class="alignright size-medium wp-image-1932" src="http://kaosx.us/wp-content/uploads/2014/08/snapshot4_1-300x187.png" alt="snapshot4_1" width="300" height="187" /></a>phase and will be used on an interim base until what hopefully will be the end solution for an installer, Calamares, is ready. &nbsp;<a class="fancybox-iframe" title="Calamares preview" href="http://kaosx.us/media/cala_web.webm">A video is up</a> to see were Calamares is currently.</p>
<p>Another section were lots is done to prepare, is the eventual move to kf5/plasma 5. &nbsp;Several kf5 ISOs have been made available last month, a new one with all the latest from frameworks 5.1.0, plasma 5.0.1, many newly ported to frameworks 5 applications will be released within the next 24 hours. It will include the option to try both new installers.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2014/08/wayland-screenshot.png"><img class="alignleft size-medium wp-image-1927" src="http://kaosx.us/wp-content/uploads/2014/08/wayland-screenshot-300x187.png" alt="wayland-screenshot" width="300" height="187" /></a>Wayland saw a nice step forward to be able to use in the future too, the addition of many Qt5 applications (including all the plasma 5 apps) and the availability of qtwayland makes it now possible to truly run a wayland desktop.</p>
<p>To speed up the use of the <strong>kcp application</strong>, Cellix completely rewrote it using the Go language. Searches with kcp are now almost instantaneously.</p>
<p>But as always, most hours are spent on keeping all the repositories updated, rebuild any that need in large group updates. Major updates were seen with the move to xorg 1.16, glib2 moving to 2.40.0 (which included moving gtk3 to 3.12.2), python3 3.4 group update is almost ready to move to all users--<em>make sure to rebuild any package you have from KCP that depends on python3, once you see python 3.4 being part of an update</em>--, linux 3.15.9 or 10 and all that depend on it will move in about 8 days, systemd 215 and mesa 10.2.5, to mention some of the hundreds and hundreds of new packages at the base of the system. <a href="http://kaosx.us/wp-content/uploads/2014/08/snapshot114.png"><img class="alignright size-medium wp-image-1939" src="http://kaosx.us/wp-content/uploads/2014/08/snapshot114-300x168.png" alt="snapshot114" width="300" height="168" /></a><br />
Changes among the applications from the [apps] repo is the move of libreoffice to 4.3.0, with a complete rewrite of the PKGBUILD and a very simplified install for all users. Among the application that are now available in a Qt5 version include qbittorrent, webcamoid and gcompris (this is a complete rewrite of the app from GTK to Qt5).</p>
