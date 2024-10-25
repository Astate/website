---
//layout: news
status: publish
description: Since the repositories are one year old now, such rebuilds have started, many in core were rebuild last month, one very large group in main was a rebuild of the complete sound stack
published: true
title: Early May 2014 Status
permalink: /news/2014/may/
heroImage: "/blog-placeholder-4.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ""
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1351
wordpress_url: http://kaosx.us/?p=1351
pubDate: "2014-05-05 16:48:02 -0400"
date_gmt: "2014-05-05 16:48:02 -0400"
categories:
  - Uncategorized
tags: []
comments: []
---

<p>These "Early Month Status" reports are full cycle now, first one was published a year ago, <a class="fancybox-iframe" title="May 2013 status" href="http://kaosx.us/early-may-status/">May 2013 Status</a>, so a year indication will be added from now on.</p>
<p>One of the goals from the start has been to keep all packages in all repositories as <strong>fully integrated and well maintained as possible</strong>, to that end, any package that does not receive an upstream update will be rebuild when it reaches one year of age. Since the repositories are one year old now, such rebuilds have started, many in core were rebuild last month, one very large group in main was a rebuild of the complete sound stack. This included a major update of ffmpeg.</p>
<p>KaOS has also started a complete <strong>phasing out of gstreamer0.10</strong>. It is 2-3 years since maintenance has stopped for it. Most packages are fully ready to use gstreamer 1, a few were patched to be fully functional with this move. One is not ready yet, Clementine, but upstream has a gstreamer 1.2 move branch, so hopefully a release for Clementine based on gstreamer 1 will be out soon. In the meantime, this is causing one conflict for users who have both Digikam and Clementine installed, you'll need to pacman -Rdd gstreamer0.10-good-plugins, if you want to use Digikam, and re-install it again when using Clementine.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/05/snapshot55.png"><img class="alignleft size-medium wp-image-1352" src="http://kaosx.us/wp-content/uploads/2014/05/snapshot55-300x194.png" alt="Octopi_05" width="300" height="194" /></a><br />
<strong>Octopi</strong> has undergone a major code change. One of the results, much easier to define different list/view parameters. Now you can also list packages by repository, plus when a mirror is not synced you have a much clearer output.<br />
<a href="http://kaosx.us/wp-content/uploads/2014/05/snapshot54.png"><img class="alignright size-medium wp-image-1354" src="http://kaosx.us/wp-content/uploads/2014/05/snapshot54-300x252.png" alt="Flattr-icons" width="300" height="252" /></a><br />
After the 2014.04 ISO, KaOS has all of a sudden become much more visible on major Linux websites. It was added to the <a class="fancybox-iframe" title="KaOS on DW" href="http://distrowatch.com/table.php?distribution=kaos">database of DistroWatch</a>, featured on SourceForge as one of the <a class="fancybox-iframe" title="SourceForge weekly project" href="http://sourceforge.net/blog/projects-of-the-week-april-28-2014/?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=projects-of-the-week-april-28-2014">Projects of the Week</a> and mentioned as a news item on <a class="fancybox-iframe" title="Softpedia" href="http://news.softpedia.com/news/KaOS-2014-04-Is-a-Beautiful-OS-Built-from-Scratch-Based-on-KDE-4-13-440531.shtml">Softpedia</a>.</p>
<p>Work continues on the <strong>flattr icon set for KaOS</strong>, just few of the latest are shown here.</p>
