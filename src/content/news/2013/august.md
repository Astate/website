---
//layout: news
status: publish
published: true
title: Early August Status
permalink: /news/2013/august/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
description:
  The goal of having about 1500 packages available in the repositories has
  been reached ( this does not include any language packs yet).  Most packages are
  steadily rolling, which will be the norm for KdeOS.
wordpress_id: 452
wordpress_url: http://www.kde-os.tk/?p=452
pubDate: "2013-08-07 02:24:09 -0400"
date_gmt: "2013-08-07 02:24:09 -0400"
categories:
  - Uncategorized
tags: []
heroImage: "/blog-placeholder-4.jpg"
---

<p>The goal of having about 1500 packages available in the repositories has been reached ( this does not include any language packs yet). Most packages are steadily rolling, which will be the norm for KaOS. Expect that most in all repo's will follow upstream releases within a month at most. Some will be updated to the more stable, but still fully maintained versions (example atm libpng 1.5.x vs libpng 1.6.x and samba 3.6.x vs 4.0.x).</p>
<p>When considering the relatively low number of total available packaged, please keep one thing in mind. Since there is a focus on one toolkit, one DE, there is no need for excessive splitting of packages to try and make all work for all kinds of different environments. Were in other places, lots of packages are split into 3-4-5, at times 15-20 packages, KaOS simplifies things as much as possible and avoids splitting (examples are xorg apps, around 50 packages are combined in just 3, mesa consists of 2, instead of 15).</p>
<p>Theming for KaOS is completed too, with a set for gfxboot, grub, kdm, ksplash and wallpaper. And a first Live ISO is available for download. It does not include an installer, so can only be used in Live mode for evaluation.</p>
<p>Work has started to select and implement an installer. Yali (Pardus' installer) is the one looked at most, fits best with most goals from KaOS regarding an installer. Linux-Mints live-installer would be the easiest to make work, but has many drawbacks of integration with a KDE/Qt system. Chakra's Tribe is another option looked at, but lacks many features, though integrates very well.</p>
