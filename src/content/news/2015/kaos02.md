---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS ISO 2015.02
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/kaos02/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2514
wordpress_url: http://kaosx.us/?p=2514
pubDate: '2015-02-24 18:18:58 -0500'
date_gmt: '2015-02-24 18:18:58 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>KaOS is very proud to announce the availability of the February release of a new stable ISO. This release brings the end of KDE 4 as the default Desktop Environment for KaOS. Almost ten months ago work started to fully migrate to a Frameworks 5, Plasma 5 based distribution and with the release of <strong>Plasma 5.2.1</strong> this migration is now deemed ready to bring a better user experience then KDE 4. From the unset of this migration there was never a plan to mix the two environments. What you will see on this ISO is a pure Plasma 5 based environment.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/02/snapshot1.png"><img src="http://kaosx.us/wp-content/uploads/2015/02/snapshot1-300x188.png" alt="Plasma 5" width="300" height="188" class="alignleft size-medium wp-image-2496" /></a><br />
As many might have noted KDE Applications 14.12 did not contain more then a handful of Plasma 5 applications. KaOS though has been shipping all ported applications from their frameworks branch in the many snapshot ISO it has released to get ready for this migration. Just about all applications that users have become used to seeing in a KDE 4 version are available as a Plasma 5 port. A few though are not ready yet, and those will be missing from the KaOS repositories until their ports are ready for daily use. An example is the application Skrooge, users are advised to use the fully ported Kmymoney until Skrooge can return back to the repositories.<a href="http://kaosx.us/wp-content/uploads/2015/01/splash4.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/splash4-300x169.png" alt="splash4" width="300" height="169" class="alignright size-medium wp-image-2338" /></a><br />
To give you an idea of what is available in the KaOS repositories from the well over 150 framework ports, kde-baseapps (including Dolphin, Konqueror, Kdialog), Okular, Choqok, Kdepim, Kdenlive, Ktuberling, Marble, Kpat, Kcmsystemd, Digikam, Kipi-plugins, Quassel, Kget, the KDE-telepathy packages and Kamoso.  Support packages ported to Qt5/Frameworks 5 for this include mlt, opencv, qca and frei0r-plugins.<br />
Look & Feel is a KaOS exclusive version "Midna", fully redone for the Plasma 5 move.</p>
<p><a href="http://calamares.github.io/about/" title="Calamares" target="_blank">Calamares</a>, the used installer framework, reached its first stable release early February. Since the December ISO where this installer was used for the first time, it received well over forty bug fixes. A few more of the planned features are implemented, this includes a proper closing page and the presentation of a slideshow during the install.<br />
For UEFI installs, KaOS uses the simple, transparent but quite powerful gummiboot as bootloader.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/01/snapshot2.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/snapshot2-300x188.png" alt="snapshot2" width="300" height="188" class="alignleft size-medium wp-image-2388" /></a><br />
Octopi received a new tool <strong>"Cache Cleaner"</strong>, with it you can selectively remove packages from your pacman cache.  That cache can grow to a significant size if never cleaned.</p>
<p>All current KaOS users, with the release of this ISO all packages needed to move your system to Plasma 5--<a href="http://kaosx.us/kf5-move-kde-4-removed/" title="kf5 move">see kf5 move News</a>-- will be moved too.  Make sure to give your mirror time to sync before attempting this update, or wait 1-2 days before doing this update.</p>
<p><b>Known issues:</b></p>
<ul>
<li>For UEFI installs it is not possible at this time to use any of the three automated partitioning options, only the fourth option can be used</li>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a title="GPT on BIOS" href="http://kaosx.us/phpBB3/viewtopic.php?f=7&amp;t=6">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>If for any reason the install fails, the installer currently does not unmount the partition it needed to use for the install. Before restarting the install either umount manually or restart the Live mode</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
</ul><br />
For further info about the ISO please see <a class="fancybox-iframe" title="release notes" href="http://kaosx.us/RELEASE_NOTES_20150224.html">the release notes</a> and the <a title="Download" href="http://kaosx.us/download/">Download</a> page.</p>
