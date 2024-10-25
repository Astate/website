---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early April &#039;15 Status
heroImage: "/blog-placeholder-2.jpg"
permalink: /news/2015/april/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2807
wordpress_url: http://kaosx.us/?p=2807
pubDate: '2015-04-01 16:41:21 -0400'
date_gmt: '2015-04-01 16:41:21 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>With so many news post leading up to the full Plasma 5 move and new ISO late last February, March was skipped for these monthly status reports.<br />
Now that all is settled after all those massive changes, it is nice to bring you a monthly status report again focusing on what this distribution is about, not just reporting all the changes for a new Desktop Environment and installer.</p>
<p>The last six weeks so a tremendous amount of updates to all of the KaOS repositories.  Updates and changes that had to wait until the full plasma 5 was done were all implemented.  For the base of the system the most noticeable were systemd 219 and pacman 4.2.1.  The latter brought a change in the databases which needed a manual update from the user.  For Octopi it was the first time in it's two years existence that such a change occurred.  The message to manual update the database did not come through, thus needed a change in Octopi.  For future such events, Octopi is now prepared.</p>
<p><a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot60.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot60-300x199.png" alt="Sysinfo" width="300" height="199" class="alignleft size-medium wp-image-2808" /></a>Speaking of Octopi, that was not the only change it received.  Major code changes were implemented to speed up all processes, what used to take 4 seconds, takes now 0.4 seconds.<br />
A much needed addition to Octopi is the <strong>Sysinfo tool</strong>.  This powerful tool makes it possible to create a full report of your system, including hardware info, what ISO was used, which repos activated, a pacman log among them.  You will find it under the "Tools" menu.  After clicking it (or use the keyboard shortcut Ctrl-Shift-S while in Octopi), Sysinfo will gather all needed info, paste it and returns with a link to the paste.  KCP has its own icon in Octopi now, it is no longer (somewhat) hidden among all the groups.</p>
<p>That brings us to KCP for which the kcp tool received a great addition.  Whenever you want to submit new files to KCP you can now automatically verify the correctness of your PKGBUILD by running <code>pckcp</code> in the directory of your PKGBUILD.</p>
<p>When all was moved away from KDE 4 that also meant a major clean-up of no longer compatible packages and <a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot49.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot49-300x169.png" alt="Frescobaldi" width="300" height="169" class="alignright size-medium wp-image-2811" /></a>removing of packages that had not seen any maintenance for years.  That created room in the KaOS repositories for new packages.  Some came from KCP where they were used by many (examples frescobaldi, vorbis-tools, lilypond-doc) , some replaced no longer available applications (example coulr), others are just new additions for previous not available options like transifex-client and the now fully Qt5 ported wireshark.<a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot67.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot67-300x228.png" alt="Wireshark" width="300" height="228" class="alignleft size-medium wp-image-2812" /></a></p>
<p>A change most of you probably already noticed is the complete redesign of the KaOS website.  Previous design was focused on text and reading with colors easy on the eyes and minimal navigation needed to get to large amounts of text.  That design did not get the needed info out clear enough, many just skipped reading and missed the major points about what this distribution is and what it it is not.  The new layout tries to correct that, with a much more visual design and short, quick bursts of text to get the major points across.<br />
That doesn't mean the need for better info and good articles was forgotten.  The new site has a much clearer way to get all kinds of articles, tutorials, guides and links.  It is all in one central place from now on, see the <a href="http://kaosx.us/knowledge-base/" title="Knowledge Base">Knowledge Base</a> page.<a href="http://kaosx.us/wp-content/uploads/2015/04/snapshot66.png"><img src="http://kaosx.us/wp-content/uploads/2015/04/snapshot66-300x281.png" alt="website" width="300" height="281" class="alignright size-medium wp-image-2815" /></a></p>
