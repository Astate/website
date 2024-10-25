---
//layout: news
status: publish
description: Following those discussions, you know KaOS switching to Plasma 5 is getting closer. From all that was said in those discussions, it was getting clear a good target date
published: true
title: Plasma 5/Frameworks 5 plans & test ISO
permalink: /news/2014/kf5plans/
heroImage: "/blog-placeholder-4.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2096
wordpress_url: http://kaosx.us/?p=2096
pubDate: "2014-10-30 21:19:16 -0400"
date_gmt: "2014-10-30 21:19:16 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>There has been a lot of internal talk since May this year, and lately discussions <a href="http://kaosx.us/phpBB3/viewtopic.php?f=9&t=682" title="on the forum">on the forum</a> and on <a href="https://plus.google.com/115793168478540780255/posts/6EmVKbqKmEg" title="the KaOS G+ channel">the KaOS G+ channel</a> about when and how to move to Plasma 5/Frameworks 5.  Following those discussions, you know KaOS switching to Plasma 5 is getting closer.<br />
From all that was said in those discussions, it was getting clear a good target date for this full switch to a pure Plasma 5/Frameworks based KaOS will be somewhere middle January to early February, with the release of Plasma 5.2 (planned to be based on Qt 5.4).<br />
To get fully ready, the kf5 test ISOs will get their <a href="http://kaosx.us/phpBB3/viewtopic.php?f=19&t=686#p3464" title="forum thread">own forum threads from now</a> , so it will be easier to discuss the findings from each ISO.</p>
<p>Latest test ISO, KaOS-kf5 2014.10.30 is based on Qt 5.4, meaning intel issues are present (and known upstream).  To make it usable for many more intel users, kwin is set to use XRender as default, not OpenGl.  For those with other then intel gfx, it is easy to switch in systemsettings > display & monitor.<br />
This ISO is also quite complete in regards what apps will be shipped in the final version.  Many more were ported to Frameworks, added to this ISO from that are kget, kruler, kcharselect as a few examples.  Qt 5.4 brings a stable qtwebengine, Qupzilla on this ISO is an early qtwebengine port.  Missing is (and probably will be on the final version too) an office suite.  Calligra won't be ready anytime soon, libreoffice works very nice now on Plasma 5, see <a href="http://kaosx.us/phpBB3/viewtopic.php?f=18&t=683" title="LibreOffice for Plasma 5">LibreOffice for Plasma 5</a>, but needs GTK for that.</p>
<p>With this ISO, branding for KaOS has started, no more vanilla Plasma 5 as shipped by KDE.  The Midna theme shows now throughout, just wallpaper set is not possible at this moment, just one of the known bugs.  List of known bugs (mostly upstream bugs at this point):</p>
<ul>
<li>opening a second document from Dolphin in Kate, or trying to create a new folder/document with right click fails <a href="https://bugs.kde.org/show_bug.cgi?id=337889" title="KDE bug 337889">KDE bug 337889</a></li>
<li>Wallpaper settings not applied <a href="https://bugs.kde.org/show_bug.cgi?id=337757" title="KDE wallpaper bug">KDE bug 337757</a></li>
<li>kdeconnect crashing on clicking systemtray icon <a href="https://bugs.kde.org/show_bug.cgi?id=338420" title="kdeconnect bug">KDE bug 338420</a></li>
<li>kactivities is curently broken, so far a KaOS only issue, most probably due to Qt 5.4 though</li>
<li>many just ported apps miss a correct .desktop file, so can't be launched from the menu, need to be launched from krunner or the terminal (.desktop has an erroneous % still there)</li>
<li>Logout/reboot/shutdown from GUI is non-functional, <a href="https://bugs.kde.org/show_bug.cgi?id=338360" title="KDE bug 338360">KDE bug 338360</a><br />
</ul></p>
<p>Calamares has gotten quite a bit of work again, but the 2 main features missing are not resolved.  Working now are setting the hostname as a variable, if a selected EFI boot partition is not labeled as such yet, it does get that needed label.  Theming is improved, also following the Midna theme.  Text is added in areas were previous testers showed things were unclear.<br />
BUT not implemented yet are:</p>
<ul>
<li>setting the correct locale and keyboard</li>
<li>proper shutting down the installer, once the install is finished</li>
<li>unmounting on a failed install still has to be done manually (or by rebooting), before a next install can be attempted.<br />
 <a href="https://github.com/calamares/calamares/issues/97" title="unmount issue">issue 97</a></li></p>
<li>the link to "Known Issue" just leads to the download page, no section there yet for known issues</li>
<li>Calamares can't correctly create a GPT partition table on a BIOS system <a href="https://github.com/calamares/partitionmanager/issues/2" title="issue 2">issue 2</a></li><br />
</ul></p>
<p>ISO sets the needed repos by default for these next few months, so it is easier to use for more users.<br />
To download:<br />
<a href="http://sourceforge.net/projects/kaosx/files/test-iso/KaOS-kf5-2014.10.30-x86_64.iso" title="KaOS-kf5 2014.10.30 ISO">KaOS-kf5 2014.10.30 ISO</a><br />
Versions on this ISO:<br />
linux 3.16.6<br />
Qt 5.4 Beta<br />
Frameworks 5.3.1<br />
Plasma 5.1.0.1<br />
KDE Applications (soon to be 14.12), git versions only</p>
