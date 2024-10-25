---
//layout: news
status: publish
published: true
title: Second October snapshot ISO
permalink: /news/2013/kaos10/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 805
wordpress_url: https://kaosx.us/?p=805
pubDate: "2013-10-25 15:06:05 -0400"
date_gmt: "2013-10-25 15:06:05 -0400"
categories:
  - Uncategorized
tags: []
comments:
  - id: 3
    author: GregKoval
    author_email: greg.koval07@gmail.com
    author_url: https://kdefamily.pl
    date: "2013-11-02 16:08:01 -0400"
    date_gmt: "2013-11-02 16:08:01 -0400"
    content: |-
      >>"This ISO will be the last of the twice a months snapshot, with the release of KDE 3.11.3 early November,"

      3.11.3? :)
  - id: 4
    author: demm
    author_email: veritasfarm@gmail.com
    author_url: ""
    date: "2013-11-02 16:10:58 -0400"
    date_gmt: "2013-11-02 16:10:58 -0400"
    content: |-
      Oops...
      Thanks for noticing, corrected.
heroImage: "/blog-placeholder-4.jpg"
description: Bi-weekly did not work for this release, updates/rebuilds to systemd/toolchain/util-linux among many other core packages, changed a lot of how the live system started all the needed services.
---

<p>Bi-weekly did not work for this release, updates/rebuilds to systemd/toolchain/util-linux among many other core packages, changed a lot of how the live system started all the needed services.  About 25 ISO builds were needed to get all working as before again.</p>
<p>After the October 1st release, many users came with suggestions/requests to add certain applications.  Most of these were added over the last weeks. Examples vokoscreen, virtualbox, mkvtoolnix, handbrake. Expect a few more request to be filled soon (engineering applications for one, probably 4-5 of the more well known games too).  End goal is  around 2000-2200 packages in the repositories, no more.<br />
A full switch to plasma-nm from networkmanager-applet is implemented in this release.  Also added to the repo is a very early preview/release of qsystemd, a Qt5/qml GUI frontend for systemd services.<a href="https://kaosx.us/wp-content/uploads/2013/10/qsystemd.png"><img src="https://kaosx.us/wp-content/uploads/2013/10/qsystemd-300x168.png" alt="qsystemd" width="300" height="168" class="alignright size-medium wp-image-808" /></a></p>
<p>This ISO will be the last of the twice a months snapshot, with the release of KDE 4.11.3 early November, KaOS will go for a public release and be submitted to DistroWatch, from then on expect new releases closely tied to KDE updates (every 4-6 weeks a new ISO, so new users are never faced with a complicated first pacman -Syu).  Existing users will always have the latest, no need to reinstall, just update regularly.</p>
