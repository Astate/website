---
//layout: news
status: publish
description: Many might not know, but it is one year to this date the website went live, the repositories came online, the forum was activated for what has since become the distribution KaOS
published: true
title: One year Anniversary ISO KaOS 2014.04
permalink: /news/2014/kaos04/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1300
wordpress_url: http://kaosx.us/?p=1300
pubDate: "2014-04-17 16:32:27 -0400"
date_gmt: "2014-04-17 16:32:27 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>Many might not know, but it is one year to this date the website went live, the repositories came online, the forum was activated for what has since become the distribution KaOS. A nice way of celebrating this anniversary is with a new ISO featuring the major new release, <strong>KDE 4.13.0</strong>.</p>
<p>After a good six weeks of testing, five complete builds, many minor rebuilds to accommodate all the needed changes for a switch in the symantic desktop search KDE uses, it is a pleasure to present you with this exciting new release. Screenshot courtesy of Aur&eacute;lien G&acirc;teau:<img src="http://kaosx.us/out.gif" alt="KDE 4.13" align="right" /></p>
<p>KDE 4.13 features a move to <strong>Baloo</strong>, which poses a major improvement in the <a class="fancybox-iframe" title="baloo" href="http://dot.kde.org/2014/02/24/kdes-next-generation-semantic-search">symantic search for KDE.</a><br />
Other changes effected Kate, Okular, Marble and Palapelli, plus added the application Artikulate. For further news about this release <a class="fancybox-iframe" title="KDE 4.13 release notes" href="http://kde.org/announcements/4.13/">please read the KDE 4.13 release notes</a></p>
<p>Thanks to translators <strong>dagodax, castell73, ShalokShalom, drumBE, cellix, forerunner, arnt, fox909 and mustafakillic</strong> are the Welcome app and Installer available in many languages.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/04/snapshot36.png"><img class="alignleft size-medium wp-image-1310" src="http://kaosx.us/wp-content/uploads/2014/04/snapshot36-300x225.png" alt="Grub Midna" width="300" height="225" /></a><br />
Artwork had quite some changes too since the last ISO. A few hundred more icons were added to the flattr-icons-kde set, GRUB moved to the Midna theme.</p>
<p>Further news for this ISO includes the addition of the legacy non-free <strong>nvidia 304xx</strong> to accommodate frequent requests for supporting older nvidia cards better.<br />
The GRUB installation in the Installer is adjusted so the device settings for resume are automatically detected. <strong>Systemd 212</strong> has the ability to do many cron tasks, packages have been rebuild to use this feature. Core updates include Kmod 17, libssh 0.6.3, Linux 3.13.10 and of course openssl 1.0.1.g.</p>
<p>Major apps that were updated to their latest include Calligra 2.8.2, LibreOffice 4.2.2, Google-Chrome 35, Firefox 28.0</p>
<p>For further info about the ISO please see <a class="fancybox-iframe" title="release notes" href="http://kaosx.us/RELEASE_NOTES_20140416.html">the release notes</a> and the <a title="Download" href="http://kaosx.us/download/">Download</a> page.</p>
<p>About 470 packages will be moved, so for all current users, give your mirror a few hours to fully sync, or wait until tomorrow to do your update. This update will do some major replaces, the <strong>complete Nepomuk stack will be removed</strong> (including nepomuk, virtuoso, soprano), to be replaced by the new baloo packages. Octopi will be able to handle this update, but to better see what is happening, it is advised to update with <strong>pacman -Syu</strong> this time.</p>
