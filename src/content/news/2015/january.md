---
//layout: post
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: Early January &rsquo;15 Status
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2327
wordpress_url: http://kaosx.us/?p=2327
pubDate: '2015-01-13 20:10:52 -0500'
date_gmt: '2015-01-13 20:10:52 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Quite a lot of news to relay this time.</p>
<p>But first it is needed to place a <strong>warning</strong>.  With your next update a <strong>conflict will arise from libspnav</strong>.  Any user that has either Calligra or freecad installed will have this conflict.  Old version of libspnav left an orphaned symlink.  When you get the conflict error with your next pacman -Syu, just remove the old file:<br />
<code>sudo rm /usr/lib/libspnav.so.0</code><br />
then run pacman -Syu again</p>
<p>With that out of the way, it is time to explain the <strong>transition phase KaOS</strong> is in now.  Since May last year work has been done to get ready for Plasma 5 as the default and only DE.  It was never planned to have Plasma 5 and KDE 4 co-exists.  Since the middle of December all Frameworks 5 (moved to 5.6.0), Plasma 5 <a class="fancybox-iframe" href="https://dot.kde.org/2015/01/13/plasma-52-beta-out-testing" title="plasma 5.2 beta"> (moved to 5.2 beta)</a> and KDE Applications 14.12 (kf5 based, currently at 14.12.1) have been rebuilt in such a way that the update from a KDE 4 install to Plasma 5 will be fully automated.  That is not finished yet, but about 80 % ready.</p>
<p>For a good amount of time it was not clear at all if KDE would still maintain the base packages from KDE 4, but with the release of all of <a class="fancybox-iframe" href="https://www.kde.org/announcements/announce-applications-14.12.1.php" title="KDE 14.12.1"> 14.12.1 (kf5 and KDE 4 based)</a>, things have become a lot clearer.  This release also included LTS versions of kdelibs, kdepimlibs, kdepim-runtime, kdepim and kde-workspace, plus kde-runtime is part of 14.12 releases.  This means the base of KDE 4 will see (some) maintenance until August 2015, that is when it is officially end of life.</p>
<p>With the discussion of last <a href="http://kaosx.us/plasma-5frameworks-5-plans-test-iso/" title="Oct discussion"> October</a> in mind, there was quite a bit of urgency then to move to Plasma 5, since it looked like KDE 4 would not be maintained.  That urgency is gone now.  The full move to Plasma 5 can be done now when it is ready.  Plus with the clear goal of KaOS to focus all work on one DE only, hopefully it is understood maintaining both KDE 4 and Plasma 5 is not a desirable situation.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/01/snapshot13.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/snapshot13-300x188.png" alt="digikam" width="300" height="188" class="alignleft size-medium wp-image-2332" /></a><br />
As you can expect, the real focus is now on Plasma 5/KDE Applications plasma 5 & frameworks based.<br />
It is now truly a full functional DE, all major apps are working.  All those are ports to plasma 5.  Some examples of the last 4-6 weeks, digikam, kdepim, kde telepathy packages.<a href="http://kaosx.us/wp-content/uploads/2015/01/snapshot14.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/snapshot14-300x188.png" alt="kdepim" width="300" height="188" class="alignright size-medium wp-image-2334" /></a><br />
For an office suite, Calligra now runs on Plasma 5.  It is not fully integrated, since this is a KDE 4 version build with only kdelibs (4), so it does not pick native colors and text, but it is stable and fully functional.<br />
<a href="http://kaosx.us/wp-content/uploads/2015/01/snapshot4.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/snapshot4-300x169.png" alt="calligra" width="300" height="169" class="alignleft size-medium wp-image-2336" /></a><br />
Getting the artwork integrated in Plasma 5 is coming along very nice too.<br />
A complete Look & Feel Midna package is created for KaOS. Plus a darker version is included in the midna-themes meta package.  Here an example, image of ksplash. <a href="http://kaosx.us/wp-content/uploads/2015/01/splash4.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/splash4-300x169.png" alt="splash4" width="300" height="169" class="alignright size-medium wp-image-2338" /></a><br />
And an image of the plasma 5 theme "Midna Dark"<br />
<a href="http://kaosx.us/wp-content/uploads/2015/01/snapshot3.png"><img src="http://kaosx.us/wp-content/uploads/2015/01/snapshot3-300x169.png" alt="midna dark" width="300" height="169" class="alignleft size-medium wp-image-2340" /></a><br />
So what does this all mean for the users of the stable repositories?  Expect no changes for January and at least most of February.  You will receive all monthly updates that KDE brings.<br />
But anyone using packages from KCP that are based on KDE 4, now is the time to check if there are ports to frameworks available, or start preparing to remove/replace those.  <strong>Anything you have from KCP based on KDE 4 will cause the update to fail once kf5 moves to stable</strong>.  You have about two more months to get this sorted.</p>
<p>Anyone wanting to have a more thorough review of the upcoming Plasma 5, a new snapshot ISO will be available later tonight.  Use it in Live mode to see what works for you and what not yet.  Install it if you want to help determine when it is ready to replace KDE 4 for all users.  Input from many is needed to determine the best time.</p>
<p>About 300 packages will be moved with the usual monthly KDE update in a few hours, so make sure to give your mirror time to sync.  Of course all the normal updates as you can expect from KaOS have continued.  Major groups updated were glib2 (including all gtk packages), poppler and mesa.  Security fixes for openssl, curl, libevent, file and bash.  Firefox 35.0 will be available with your next update too.</p>
<p>Concerning kcp, work was done during the last month to make the requests safer and faster. The update of the database takes around 4-5s, so it can be used each day. octopi fully integrates these modifications, and the system updating button will update the kcp database, too. Moreover, octopi implements the --list and --outdated options of kcp, now.</p>
