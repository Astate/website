---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early February &rsquo;15 Status
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/february/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2413
wordpress_url: http://kaosx.us/?p=2413
pubDate: '2015-02-10 17:32:05 -0500'
date_gmt: '2015-02-10 17:32:05 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>This time a short News post.<br />
So much work is happening in the background not visible to the regular that it doesn't make sense to expand too much on that.</p>
<p>KDE 4 was updated to KDE Applications 14.12.2, which included lts version of 4.14 and 4.11 based kdelibs, pim packages & kde-workspace.  This was the final build for KDE 4 in KaOS.</p>
<p>The full move to Frameworks 5, Plasma 5 and KDE Applications kf5 based is in full swing.  There no longer is a separate repository in use for it, all has moved to the [build] repo so the fully automated move from a KDE 4 based desktop to Plasma 5 based can be tested by many who have the [build] repo enabled.</p>
<p>Now is also the time to warn one more time to check all your packages you have that are not from the KaOS repositories.  Any that depend on the KDE 4 desktop will have to be removed or check if upstream has a frameworks 5 port ready.  If the ONLY depend your application has for KDE 4 is kde-runtime, rebuild it with replacing kde-runtime with kdelibs.</p>
<p>Expect the kf5 move to stable to happen in about 10-14 days.  This update will fail if you don't follow the advice posted above for non KaOS maintained packages.  One more News post will follow, one day prior to all packages moving to stable.</p>
