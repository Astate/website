---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
permalink: /news/2016/april/
title: Early April &#039;16 Status
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 277120
wordpress_url: http://kaosx.us/?p=277120
pubDate: '2016-04-07 19:26:42 -0400'
date_gmt: '2016-04-07 19:26:42 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Biggest news for KaOS the last month has been the release of Qt 5.6.  After a long delay it finally became available bringing many bug fixes to Plasma 5.  Especially users of dual monitor setups will benefit greatly from the move to Qt 5.6.</p>
<p>QtWebengine was another part of Qt 5.6 that really matured.  For KaOS this meant that the default web-browser Qupzilla moved away from its obsolete QtWebkit base to the new QtWebengine.  You will<a href="/wp-content/uploads/2016/04/Screenshot_20160319_190215.png" rel="attachment wp-att-277121"><img src="/wp-content/uploads/2016/04/Screenshot_20160319_190215-300x205.png" alt="Screenshot_20160319_190215" width="300" height="205" class="alignright size-medium wp-image-277121" /></a> find a much better multimedia experience, were full-screen video is now supported, sites like Vimeo just work and there is no longer a need to use the unmaintained since 2012 flashplugin.  Pepperflash is fully compatible with new Qupzilla 2.0.</p>
<p><a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.6.0.php" title="plasma 5.5.5">Plasma 5.6</a> also became available, currently at 5.6.2 with much improved Wayland support.  KDE Applications is getting ready for the 16.04 release.  16.03.80 (beta) has been available in the [kde-next] repository for the last two weeks, 16.03.90 (RC) will be up there later today.  That will bring another half-dozen fully stable builds for kf5 applications which were shipped as git builds in KaOS so far.</p>
<p>Octopi celebrated its three-year anniversary with the release of <a class="fancybox-iframe" href="https://octopiproject.wordpress.com/2016/03/27/third-year-anniversary/" title="octopi 3 yrs">Octopi 0.8.1</a>.  Highlights of this release are more shortcuts, making octopi easier on keyboard interaction and brand new output dialog for notifier, so users can do a system upgrade without a terminal.</p>
<p><a href="/wp-content/uploads/2016/04/Screenshot_20160330_184510.png" rel="attachment wp-att-277125"><img src="/wp-content/uploads/2016/04/Screenshot_20160330_184510-300x196.png" alt="Screenshot_20160330_184510" width="300" height="196" class="alignleft size-medium wp-image-277125" /></a>Some KDE applications look like they might not make the kf5 migration.  One such app is kget, it was partially ported, but all work on it has stalled for too long to keep it an option for KaOS.  A new and very complete download manager has replaced kget.  Fatrat will be part of KaOS default installs from now on.</p>
<p>The move to a new Qt meant a rebuild and/or update of well over four hundred packages, but that was not the only big change in the repository.  Boost & ICU received major updates triggering needed rebuilds to another one hundred, then there were major updates to mesa, xorg-server, all alsa packages, complete gstreamer stack, sqlite among the hundreds more.  This means the usual two months between ISO releases is not possible this time, test cycle of the KaOS 2016.04 ISO will start as soon as KDE Apps 16.04RC is build.</p>
