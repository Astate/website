---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS 2016.03
permalink: /news/2016/kaos03/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 277083
wordpress_url: http://kaosx.us/?p=277083
pubDate: '2016-03-13 22:28:18 -0400'
date_gmt: '2016-03-13 22:28:18 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>KaOS is proud to announce the availability of the March release of a new stable ISO.</p>
<p>The Plasma Desktop includes Frameworks 5.20.0, <a class="fancybox-iframe" href="https://www.kde.org/announcements/plasma-5.5.5.php" title="plasma 5.5.5">Plasma 5.5.5</a>, KDE Applications 15.12.2 and <strong>not yet released ports of KDE Applications</strong>. A few enhancements to the Plasma 5 experience have been added, these are KaOS specific extras.<br />
<a href="/wp-content/uploads/2016/02/Screenshot_20160206_125041.png" rel="attachment wp-att-123047"><img src="/wp-content/uploads/2016/02/Screenshot_20160206_125041-300x185.png" alt="Screenshot_20160206_125041" width="300" height="185" class="alignleft size-medium wp-image-123047" /></a>You now have the option to calculate the md5sum from any file from the Dolphin service menu.<br />
Since the kf5 move there has not been a fully working GUI for user management, there is one added now for KaOS, you will find it under systemsettings, account details.<br />
From there you can <strong>create new users</strong>, change existing user(s) role or delete a user. Also added it is a <strong>KCM for locale/language settings</strong>.</p>
<p><a href="/wp-content/uploads/2016/03/Screenshot_20160313_094128.png" rel="attachment wp-att-277089"><img src="/wp-content/uploads/2016/03/Screenshot_20160313_094128-300x169.png" alt="Screenshot_20160313_094128" width="300" height="169" class="alignright size-medium wp-image-277089" /></a>Thanks to the contributions of <strong>fabianalexisinostroza & forostm</strong> the artwork received a redesign in many elements. A new icon theme for light and dark themes has arrived. The Midna Dark theme received a complete overhaul with a new plasma theme, window decorations, colorscheme and new sddm & splash themes. The new work brings to Midna Dark a complete unified look.<a href="/wp-content/uploads/2016/03/Screenshot_20160312_222311.png" rel="attachment wp-att-277091"><img src="/wp-content/uploads/2016/03/Screenshot_20160312_222311-300x188.png" alt="Screenshot_20160312_222311" width="300" height="188" class="alignleft size-medium wp-image-277091" /></a></p>
<p>Most notable major updates to the base of the system  are a Glibc 2.23/Binutils 2.26 based new toolchain, a move of the xorg stack to 1.18, gstreamer group is at 1.6.3, a move to Pacman 5, Linux 4.4.5, Mesa 11.1.2, Pulseaudio 8.0 and Mariadb 10.1.12.</p>
<p><b><a title="Calamares" href="http://calamares.github.io/about">Calamares</a>, the used installer framework</b>, has moved to the 2.1 series.<br />
    Highlights of the changes and additions:</p>
<ul>
<li>Thoroughly rewritten partitioning feature, now based on KPMcore<br />
        (the same library used by KDE Partition Manager)</li><a href="/wp-content/uploads/2016/03/Screenshot_20160313_161712.png" rel="attachment wp-att-277094"><img src="/wp-content/uploads/2016/03/Screenshot_20160313_161712-300x186.png" alt="Screenshot_20160313_161712" width="300" height="186" class="alignright size-medium wp-image-277094" /></a></p>
<li>The choice page in the partitioning module now shows disk changes in<br />
        real life, with much improved preview widgets, which are now not just<br />
        preview but also selection widgets for the Replace feature</li></p>
<li>Tooltips in partition views.</li>
<li>All new non-blocking asynchronous device rescans with spinner UI throughout<br />
        the partitioning module</li></p>
<li>Added support for setting partition flags (including the EFI system partition flag)<br />
        while creating or editing a partition in the manual partitioning page.</li></p>
<li>Overhauled modules system, allowing for much more flexibility in configuring<br />
        and arranging views and jobs.</li><a href="/wp-content/uploads/2016/03/Screenshot_20160313_161755.png" rel="attachment wp-att-277098"><img src="/wp-content/uploads/2016/03/Screenshot_20160313_161755-300x186.png" alt="Screenshot_20160313_161755" width="300" height="186" class="alignright size-medium wp-image-277098" /></a></p>
<li>Added a check and warning when installing in EFI mode with manual partitioning<br />
        without setting up a mount point and/or flag for the EFI system partition.</li><br />
</ul></p>
<p>Among the new applications that are now fully ported to Qt5/Frameworks 5, Kjots, Keneric, Kcolorchooser, SqliteBrowser and Grub2-editor.</p>
<p>KaOS uses the Systemd provided Systemd-boot for UEFI installs.</p>
<p><b>Known issues:</b></p>
<ul>
<li>Clementine will segfault on start due to a change in Sqlite, please update your system to correct this, it will bring a new Sqlite.</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br></p>
