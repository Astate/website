---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Libpng 1.6 update
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/libpng/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3047
wordpress_url: http://kaosx.us/?p=3047
pubDate: '2015-05-20 17:43:51 -0400'
date_gmt: '2015-05-20 17:43:51 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>KaOS has stayed with libpng 1.5 for as long as possible (and while that version was still fully maintained).<br />
With 1.5.22 it seems maintenance has come to an end so there is no choice but to move to 1.6.<br />
Libpng effects virtually all applications in the KaOS repositories so a large rebuild was needed (poppler was also effected, thus updated, which also triggered a rebuild of all depending on poppler).</p>
<p>With your next update you will receive this libpng change.<br />
Reason to make this a news time though is this update will break most of your applications you build yourself (KCP or otherwise not from the KaOS repositories).  Make sure to rebuild your non-repo packages depending on libpng after this update.</p>
