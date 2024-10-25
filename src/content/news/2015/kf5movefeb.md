---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Kf5 move, KDE 4 removed
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kf5movefeb/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2487
wordpress_url: http://kaosx.us/?p=2487
pubDate: '2015-02-23 17:20:58 -0500'
date_gmt: '2015-02-23 17:20:58 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Anyone slightly familiar with KaOS knows this announcement was coming.<br />
Tomorrow, February 24th, this full move will take place.  This will mean the end of the KDE 4 desktop for KaOS.  All parts of the KDE 4 desktop will be fully replaced by Plasma 5.</p>
<p>What does this mean for KaOS users?<br />
With your next update, you will see that many package will be replaced, this can be anywhere between 80 to well over 200 packages being replaced.<br />
If you run this update with pacman, it will ask you for each replace to confirm, all defaults are correct ("Yes") so you can hold the "enter" key to confirm all.<br />
If you use Octopi, then all is automated, Octopi selects the default answer for you.<a href="http://kaosx.us/wp-content/uploads/2015/02/snapshot1.png"><img src="http://kaosx.us/wp-content/uploads/2015/02/snapshot1-300x188.png" alt="Plasma 5" width="300" height="188" class="alignleft size-medium wp-image-2496" /></a></p>
<p>During this update a helper application will pop-up, it will give you some more info about what is happening, gives instructions in case you already use sddm as login manager and gives you a GUI to be able to reboot or shutdown once the update is completed.</p>
<p>Theming for Qt4 applications, remaining KDE 4 applications and GTK based applications will slightly change.  To integrate all, best option right now is to use QtCurve.  This update will automatically install qtcurve and qtcurve4 for you, if you use GTK applications, install qtcurve-gtk too.<br />
A good way to integrate all is to create a symlink from your Plasma 5 settings to the old kde4:<br />
<code>ln -sf ~/.config/kdeglobals ~/.kde4/share/config/kdeglobals</code><br />
That way, anytime you make changes to Plasma 5 settings, they will automatically be applied to all.<br />
If some Qt4 apps do not integrate well, you can apply the qtcurve settings for those with:<br />
<code>qtconfig</code></p>
<p>Right from the start of this move in May last year, simpler naming and removing artificial split packages was implemented too.<br />
You won't find names like kdegraphics-gwenview or kdeutils-ark anymore, they follow the simple upstream naming as in just gwenview and ark.<br />
Same is done for packaging, all is set as KDE ships.  That means there is no longer a split package "kde-baseapps-dolphin or kdepim-kmail.  Those are all shipped as one package by KDE, so dolphin is part of kde-baseapps (just like konqueror), kmail is part of the one complete kdepim package.<br />
Others have been split by KDE, example is kdepimlibs, it is now split into 20 different packages.</p>
<p>As has been warned for four months, this update will fail if you have packages that are not from the KaOS repositories that depend on the KDE 4 desktop.  Make sure to remove any you might still have remaining.  Check your install with:<br />
<code>pacman -Qm</code><br />
If any package that the above command returns depends on KDE 4, remove prior to this update.  KaOS cannot and never will be responsible for packages you install not from the official repositories.</p>
<p>Another News post will follow tomorrow once the move is done and the new stable, Plasma 5 based ISO is released. </p>
