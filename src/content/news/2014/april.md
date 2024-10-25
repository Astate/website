---
//layout: news
status: publish
description: On the surface it has been a fairly quiet month since the ISO release March 4. That doesn't mean nothing was happening
published: true
title: Early April Status
permalink: /news/2014/april/
heroImage: "/blog-placeholder-3.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1270
wordpress_url: http://kaosx.us/?p=1270
pubDate: "2014-04-07 17:34:57 -0400"
date_gmt: "2014-04-07 17:34:57 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>On the surface it has been a fairly quiet month since the ISO release March 4. That doesn't mean nothing was happening, more the opposite, but not all is visible to all users yet.</p>
<p>One of the major changes that is worked on is the preparations for KDE 4.13. Some of you might wonder why KDE 4.12.4 has not entered the repositories. Due to very few changes from 4.12.3 and to put as much work as possible to get 4.13 in great shape, 4.12.4 will be skipped for KaOS, see the discussion <a title="KDE 4.12.4 discussion" href="https://plus.google.com/115793168478540780255/posts/JpJgthGzLhU">here</a>.<br />
KDE 4.13 will see a move away from nepomuk (and all the packages it depends on) replacing it with baloo. So far four complete builds of the betas and rc have entered the [kde-next] and now the [build] repository.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/04/snapshot29.png"><img class="alignright size-thumbnail wp-image-1276" src="http://kaosx.us/wp-content/uploads/2014/04/snapshot29-150x150.png" alt="3 flattr icons" width="150" height="150" /></a><br />
Systemd is another package that saw many more changes last month. 212 is ready to do pretty much all cron jobs, packages that used to depend on cronie have been rebuild to utilize this new feature of systemd.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/04/snapshot20.png"><img class="alignleft size-medium wp-image-1272" src="http://kaosx.us/wp-content/uploads/2014/04/snapshot20-300x208.png" alt="octopi with flattr" width="300" height="208" /></a><br />
As far as the art/look of KaOS goes, the flattr-icon set has been getting a lot of work. Applications like octopi and smplayer have now a complete custom flattr icon set for KaOS. A good 300 icons have been adjusted and/or added to the set last month.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/04/snapshot32.png"><img class="alignright size-thumbnail wp-image-1279" src="http://kaosx.us/wp-content/uploads/2014/04/snapshot32-150x150.png" alt="rekonq" width="150" height="150" /></a><br />
More applications are making the transition to Qt5 for KaOS, examples for this are smplayer and quassel. With these applications moving to Qt5, more dependencies are prepared and tested for an eventual move to the KDE frameworks 5.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/04/snapshot25.png"><img class="alignright size-medium wp-image-1274" src="http://kaosx.us/wp-content/uploads/2014/04/snapshot25-300x227.png" alt="smplayer Qt5/flattr" width="300" height="227" /></a><br />
The KaOS repositories are now almost one year in use, that means rebuilds have started of packages that are approaching being 12 months old and have had no updates from upstream. No package in KaOS will go longer then one year without a build/rebuild, this to make sure all will stay as well integrated as possible.</p>
