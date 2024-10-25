---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early July &#039;15 Status
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/july/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3150
wordpress_url: http://kaosx.us/?p=3150
pubDate: '2015-07-03 17:11:09 -0400'
date_gmt: '2015-07-03 17:11:09 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>A major Qt update is moving to all users today, so a good time to combine that with one of these monthly status reports.</p>
<p>An early Qt 5.5 release entered the kde-next repositories almost three weeks ago so all needed rebuilds and new KDE versions could be build on this version.  Now that <a class="fancybox-iframe" href="http://blog.qt.io/blog/2015/07/01/qt-5-5-released/" title="Qt 5.5.0">Qt 5.5.0 final</a> has been released all is ready to move to the stable repositories.  Qtwebengine 5.5.0 is a major step forward of getting Qt based web-browser ready to use the chromium engine and will hopefully lead to a much more complete Qt base web-browser.  Kf5-Qupzilla is an early port of Qupzilla away from qtwebkit to qtwebengine.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150620_122920.png"><img src="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150620_122920-300x240.png" alt="Tellico" width="300" height="240" class="alignleft size-medium wp-image-3152" /></a>This move includes <a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.3.2.php" title="Plasma 5.3.2">Plasma 5 5.3.2</a> and <a class="fancybox-iframe" href="https://www.kde.org/announcements/announce-applications-15.04.3.php" title="KDE Applications 15.04.3">KDE Applications 15.04.3</a>.  KaOS has been able to help to get some of the KDE packages ready for the Qt 5.5 move, about a dozen patches send upstream where accepted to make all build as should.<br />
The move to Qt 5.5 also means that gstreamer0.10 is finally complete obsolete, nothing in the KaOS repositories needs this version anymore, so all gstreamer0.10 packages are removed.<br />
The freed up space left vacated by this group gave room to have some new <a href="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150617_141228.png"><img src="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150617_141228-300x173.png" alt="Kmahjongg" width="300" height="173" class="alignright size-medium wp-image-3154" /></a>applications enter the repositories.  This includes Tellico, newly ported to frameworks 5.  Another just ported that entered is the Kmahjongg.  A FOSS game, Megaglest,  that is in the process of making the switch from wxwidgets to Qt5 is also added in its Qt5 version.<br />
Slowly but surely more plasmoids are becoming available for plasma 5, new for the KaOS repositories is Gmailfeed an email checker & feed plasmoid.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150620_150645.png"><img src="http://kaosx.us/wp-content/uploads/2015/07/Screenshot_20150620_150645-300x182.png" alt="Welcome page" width="300" height="182" class="alignleft size-medium wp-image-3156" /></a><br />
Work continues steadily on Calamares, branding option is expanded to a Welcome page image implementation.  Since its start Calamares has depended on the KDE partitionmanager, cooperation between Calamares & KDE partitionmanager developers has led to changes for partitionmanager which is now split into two components, the core libraries and the GUI part.  This will make future partitioning improvements much easier to implement.</p>
<p>Xorg has moved to 1.17, all that depend on it were rebuild.  Also moving today is the Glib2 2.44.2 stack update, this effected some sixty packages including gtk3 moving to 3.16.<br />
In all a good 600  packages have moved so as always make absolute sure your mirror has synced before updating to all this latest.</p>
