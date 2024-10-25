---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
permalink: /news/2015/
heroImage: "/blog-placeholder-2.jpg"
title: Early December &#039;15 Status
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3342
wordpress_url: http://kaosx.us/?p=3342
pubDate: '2015-12-08 17:21:03 -0500'
date_gmt: '2015-12-08 17:21:03 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>As is now customary when new major releases for the different KDE parts are getting ready, the [kde-next] repository was opened three weeks ago to prepare for Plasma 5.5 and KDE Applications 15.12.<br />
A few release candidates have been compiled since.  Latest still up in [kde-next] is KDE Applications 15.11.90.  Plasma 5.5 is now in a stable version and will move to all KaOS users today.<br />
For the Applications, biggest news is that about twenty more are now fully kf5 based, so they no longer need a git build in KaOS.  This includes all thumbnailers packages, kamera, libraries like libksane & libkipi needed by  kipi-plugins and krfb.<br />
<a  class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.5.0.php">Plasma 5.5</a> saw the return of the legacy system tray icons, so your GTK applications and things like Dropbox will have an icon again.  Noto Fonts is now the default font for Plasma 5, replacing Oxygen Fonts.  A few new useful widgets were added like the color picker and user switcher.  Also implemented now are a way to start the wayland session from sddm.  I it is no longer needed for KaOS to provide such a session implementation.  Wayland is slightly more useful than it was in 5.4, but nowhere near ready for daily use.<br />
To test all these changes an internal minimal ISO, build on the [kde-next] repo was made available, not meant for stable installs or daily use. <a href="http://sourceforge.net/projects/kaos-test/files/iso/KaOS-2015.12.04-x86_64.iso" target="_blank">KaOS next ISO</a></p>
<p><iframe width="560" height="315" src="https://www.youtube.com/embed/kFmx8p6I9Y0" frameborder="0" allowfullscreen></iframe><br />
For the artists in KaOS, there is some exciting news, Krita is now available with the highly anticipated Animation plugin.  This was made possible by <a  class="fancybox-iframe" href="https://krita.org/item/krita-2-9-animation-edition-beta-released/">the Krita Kickstarter</a>.</p>
<p>The default media player in KaOS, Smplayer, is now build with two more icon themes.  Not yet released versions of Breeze & Breeze-dark icons are an option to choose.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/12/Screenshot_20151208_120230.png"><img src="http://kaosx.us/wp-content/uploads/2015/12/Screenshot_20151208_120230-300x204.png" alt="Screenshot_20151208_120230" width="300" height="204" class="alignright size-medium wp-image-3345" /></a></p>
<p>New Qt5/kf5 ports include ktorrent this month, one that looked abandoned, but working very well now with Plasma 5.  New addition to the repositories includes a Qt5 based Truecrypt replacement, <a  class="fancybox-iframe" href="http://mhogomchungu.github.io/zuluCrypt/">ZuluCrypt</a>.  New to the repositories is also nginx.</p>
<p>One update that will affect many installs is the Python 3.5.1 update currently in the [build] repository.  This is a major update and all that depend on python3 were rebuilt for this.  Once this moves to all users, make sure to rebuild all the python3 packages you might have from KCP or any you build yourself locally.  Expect python3 to move by this coming weekend.</p>
