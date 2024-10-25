---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early May &#039;15 Status
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/may/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3030
wordpress_url: http://kaosx.us/?p=3030
pubDate: '2015-05-08 21:10:03 -0400'
date_gmt: '2015-05-08 21:10:03 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>With <strong>Frameworks 5.10.0</strong> moving to all users today, time to announce the many changes again.<br />
Last week <a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.3.0.php" title="Plasma 5.3.0">Plasma 5 5.3.0</a> became available for all KaOS users, today also adds Calligra 2.9.4 and LibreOffice 4.4.3.<br />
Most users will have noticed larger updates then the usual, those were triggered by major updates to <strong>boost, icu, nettle and gnutls</strong>.  All those required rebuilds for all that depend on them, so those four alone created updates to a good two hundred.<br />
Then there is an ongoing update/rebuild for any older package in the [Main] repository, as per KaOS policy no package should go longer then one year without any rebuild should no update be available during that time.  So far this has involved a good two hundred and fifty packages the last three weeks.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/05/snapshot85.png"><img src="http://kaosx.us/wp-content/uploads/2015/05/snapshot85-300x165.png" alt="Midna sddm" width="300" height="165" class="alignleft size-medium wp-image-3033" /></a><br />
Though as will be clear from the above, most work went into packaging, artwork received some updates too.<br />
The sddm theme used so far was a slightly modified upstream default "Maui".  Now there is a brand new "Midna" sddm theme written in qml for KaOS.  If you would like to use it, either edit<code>kdesu kate /etc/sddm.conf</code> look for the [Theme] section and change to <code>Current=midna</code>, or adjust in system-settings > startup & shutdown > login screen > select Midna and save.</p>
<p>The translations of the KaOS website has moved to Transifex too joining all translation projects.  The previous way of handling translations became impossible to maintain and with more translators interested in helping to add more languages, a change was needed.  <a class="fancybox-iframe" href="https://www.transifex.com/product/transifexlive/" title="Transifex-Live">Transifex_live</a> is a very new way of handling website translations, hopefully this will be the best long-term solution.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/05/snapshot79.png"><img src="http://kaosx.us/wp-content/uploads/2015/05/snapshot79-300x167.png" alt="kscreengenie" width="300" height="167" class="alignright size-medium wp-image-3035" /></a><br />
Some interesting new additions to the repositories from the last four weeks include vnstat (Console-based network traffic monitor), kde-dev-scripts (Scripts and setting files useful during development of KDE software) and an all new Screenshot Utility "kscreengenie" has replaced ksnapshot in the KaOS repositories.<br />
Vokoscreen and seafile-client are the latest applications who have been fully ported to Qt5.</p>
<p>Quite a large amount of packages is moving with this announcement, including some vital core packages that received major updates and will break your install should you try to update <strong>without your mirror being synced</strong>.  So please check in Octopi or run mirror-check before updating, better yet, wait a day.</p>
