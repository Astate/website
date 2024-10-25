---
//layout: news
status: publish
description: fter about three weeks of testing, the whole xorg 1.15 update (including new mesa and packages new to the repositories) is ready to move
published: true
title: Xorg 1.15 and KDE 4.12.1 update
permalink: /news/2014/xorg/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1108
wordpress_url: http://kaosx.us/?p=1108
pubDate: "2014-01-15 04:00:10 -0500"
date_gmt: "2014-01-15 04:00:10 -0500"
categories:
  - Uncategorized
tags: []
comments: []
---

<p><img src="http://kaosx.us/wp-content/uploads/2014/01/available_updates-150x150.png" alt="available_updates" width="150" height="150" class="alignleft size-thumbnail wp-image-1120" /> After about three weeks of testing, the whole xorg 1.15 update (including new mesa and packages new to the repositories) is ready to move to all users.</p>
<p><a class="fancybox-iframe" href="http://kde.org/announcements/announce-4.12.1.php" title="kde 4.12.1"> KDE 4.12.1</a> was build last week, brings more than 45 recorded bugfixes including improvements to the personal information management suite Kontact, the UML tool Umbrello, the document viewer Okular, the web browser Konqueror, the file manager Dolphin, and others.  It is included in your next update too.</p>
<p>Besides the above, a few more base packages had major updates, requiring rebuilds of many, so this is a large update. Best practice for this update, first make sure your mirror is fully synced:<br />
<code>mirror-check</code><br />
UppubDate:<br />
<code>sudo pacman -Syu</code><br />
And answer "yes" to the replaces questions pacman asks.</p>
