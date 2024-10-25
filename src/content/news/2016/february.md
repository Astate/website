---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early February &#039;16 Status
permalink: /news/2016/february/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 123044
wordpress_url: http://kaosx.us/?p=123044
pubDate: '2016-02-06 18:23:31 -0500'
date_gmt: '2016-02-06 18:23:31 -0500'
categories:
- 2016
tags: []
comments: []
---
<p>After a surprising record setting release for the KaOS 2016.01 ISO (no ISO for KaOS was downloaded as much in the first 5 days, nor did the website get the amount of hits as in that time period), it is time to go back to one of these regular monthly status reports.</p>
<p><a href="/wp-content/uploads/2016/02/Screenshot_20160206_125041.png" rel="attachment wp-att-123047"><img src="/wp-content/uploads/2016/02/Screenshot_20160206_125041-300x185.png" alt="Screenshot_20160206_125041" width="300" height="185" class="alignleft size-medium wp-image-123047" /></a>A few enhancements to the Plasma 5 experience have been added, these are KaOS specific extras.<br />
You now have the option to calculate the md5sum from any file from the Dolphin service menu.  Since the kf5 move there has not been a fully working GUI for user management, there is one added now for KaOS, you will find it under systemsettings, account details.  From there you can create new users, change existing user(s) role or delete a user.  Also added it is a KCM for locale/language settings.<br />
<a href="/wp-content/uploads/2016/02/Screenshot_20160206_124349.png" rel="attachment wp-att-123049"><img src="/wp-content/uploads/2016/02/Screenshot_20160206_124349-300x190.png" alt="Screenshot_20160206_124349" width="300" height="190" class="alignright size-medium wp-image-123049" /></a></p>
<p>You probably did notice the work that is done to enhance the website.  A cleaner and brighter home page, reduced size of the navigation bar and better, more consistent fonts throughout are small changes.  Bigger changes are for the package viewer and ongoing work for a complete new forum.  The package viewer is no longer hosted on a separate server.  It is now fully integrated in the main website.  Added options are to view the complete list of all packages available in KaOS and to list the details of flagged packages.<br />
The new forum is not active yet.  It will be offering a much easier tag based option to list what you are looking for plus will have a stream of the active topics on the opening page.<a href="/wp-content/uploads/2016/02/Screenshot_20160206_120432.png" rel="attachment wp-att-123051"><img src="/wp-content/uploads/2016/02/Screenshot_20160206_120432-300x256.png" alt="Screenshot_20160206_120432" width="300" height="256" class="alignleft size-medium wp-image-123051" /></a><br />
The Midna theme for KaOS is expanded with the addition of window-decoration.  Expect a complete redone Midna-Dark soon, two new artist have come forward and will make updating that one a priority.<a href="/wp-content/uploads/2016/02/MidnaFlatWide.png" rel="attachment wp-att-123053"><img src="/wp-content/uploads/2016/02/MidnaFlatWide-229x300.png" alt="MidnaFlatWide" width="229" height="300" class="alignright size-medium wp-image-123053" /></a></p>
<p>Packaging changes include Plasma 5.5.4, gstreamer group move to 1.6.3, latest for mariadb, vlc, grep and pulseaudio 8.0 among the 300+ updated last month.<br />
Pacman 5.0.0 is now available in the build repo.  It is bringing <a  class="fancybox-iframe" href="https://projects.archlinux.org/pacman.git/tree/NEWS?h=v5.0.0">many enhancements</a><br />
There where quite a few severe security issues, biggest involving the kernel and openssl.  All corrected packages were made available to all KaOS users within hours of upstream posted patches or new package releases.</p>
<p>Almost a dozen Qt 4 packages have been removed, a few were rebuild to no longer depend on those (old, unmaintained) that were removed.<br />
One old is now replaced, SqliteBrowser (Qt 5) has replaced Sqliteman (Qt 4, last release 2011).<br />
Re-added to the repo is kjots, it initially was not ported to kf5, but was released 2 days ago as kf5 app.<br />
Also added is Keneric, it allows for creating thumbnails that so far are not covered in KDE thumbnail packages, example Krita .kra files and Blender files.</p>
<p>KaOS is now getting close to be able to remove (officially) unmainted Qt 4.  Once hplijp moves to PyQt5 the last remaining Qt apps (which is now kdelibs 4 depending apps) will be removed.  Not waiting any longer after that to see if they will be ported.﻿</p>
