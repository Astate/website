---
//layout: news
status: publish
description: It is a great pleasure to present to you the September release of a new stable ISO.
published: true
title: KaOS 2016.04
permalink: /news/2016/kaos04/
heroImage: "/blog-placeholder-2.jpg"
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 277149
pubDate: '2016-04-20 18:42:47 -0400'
date_gmt: '2016-04-20 18:42:47 -0400'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Not the customary bi-monthly release this time, but celebrating the three-year anniversary of KaOS by releasing 2016.04. Reason for this earlier release is the move to <strong>Qt 5.6</strong> and with that an update and/or rebuild of the complete Desktop.</p>
<p><a href="/wp-content/uploads/2016/04/Screenshot_20160319_190215.png" rel="attachment wp-att-277121"><img src="/wp-content/uploads/2016/04/Screenshot_20160319_190215-300x205.png" alt="Screenshot_20160319_190215" width="300" height="205" class="alignleft size-medium wp-image-277121" /></a><br />
QtWebengine has now replaced QtWebkit as the base for the default web-browser <strong>Qupzilla</strong>. You will find a much better multimedia experience, were full-screen video is now supported, sites like Vimeo just work and there is no longer a need to use the unmaintained since 2012 flashplugin. Pepperflash is fully compatible with new Qupzilla 2.0.<br />
The Plasma Desktop includes Frameworks 5.21.0, <strong>Plasma 5.6.2</strong>, <a class="fancybox-iframe" href="https://www.kde.org/announcements/announce-applications-16.04.0.php" title="KDE Applications 16.04.0">KDE Applications 16.04.0</a> and <strong>not yet released ports of KDE Applications</strong>.<br />
Most notable major updates to the base of the system are Boost 1.60.0, ICU 57.1, Xorg-server 1.18.3, gstreamer group is at 1.8.0, Libarchive 3.2RC, Alsa packages moved to 1.1.1, Linux 4.4.5, Mesa 11.2.1, Pulseaudio 8.0 and Mariadb 10.1.12.<a href="/wp-content/uploads/2016/04/Screenshot_20160330_184510.png" rel="attachment wp-att-277125"><img src="/wp-content/uploads/2016/04/Screenshot_20160330_184510-300x196.png" alt="Screenshot_20160330_184510" width="300" height="196" class="alignright size-medium wp-image-277125" /></a><br />
Some KDE applications look like they might not make the kf5 migration. One such app is kget, it was partially ported, but all work on it has stalled for too long to keep it an option for KaOS. A new and very complete download manager has replaced kget. <strong>Fatrat</strong> will be part of KaOS default installs from now on. Another change is the move to <strong>Cantata</strong> as the default Music Manager, Clementine's focus is still on developing for Qt 4 plus has security issues which new Sqlite tried to avoid. Cantata is fully Qt 5 ported and very well-integrated in the Plasma 5 desktop.</p>
<p><b><a title="Calamares" href="http://calamares.github.io/about">Calamares</a>, the used installer framework</b>, has moved to the 2.2.1 series.<br />
    Highlights of the changes and additions:</p>
<ul>
<li>Full support for NVME SSDs</li>
<li>Replaced QtWebKit with QtWebEngine in webview module if building with Qt 5.6 or greater;</li>
<li>Tooltips in partition views.</li>
<li>Automated Breakpad and GDB-based crash reporting with libcrashreporter-qt</li>
<li>Added much deserved credit for translators in About dialog.</li>
<li>Support for &ldquo;replacing&rdquo; free space</li>
<li>Added a check and warning when installing in EFI mode with manual partitioning without setting up a mount point and/or flag for the EFI system partition.</li><br />
</ul><br />
<a class="fancybox-iframe" href="https://kaos-community-packages.github.io/" title="KCP">KCP</a> has been an integral part of KaOS for quite some time with the needed tools to make building from this Community repository easier always included in the ISO.  Now browsing this repository has received a major overhaul, with clear groups, visual applications listing and needed dependencies to build all visible with one click.<img src="https://lh3.googleusercontent.com/proxy/uQCaGORn-NBSzepL28fDgiqYJYV4ZwyIpZOxLmLesaIOaXLwMZ-2jg6WXEeIYtY-TDDh4H7niEQEdDCOeAajHlwjuY6Z5ly-pBPZzq__m4tqrn-CzQ=w426-h370-p" alt="KCP" /></p>
<p>KaOS uses the Systemd provided Systemd-boot for UEFI installs.</p>
<p><b>Known issues:</b></p>
<ul>
<li>On systems running the Nouveau graphics driver, Qupzilla will not start.  Either install the <a class="fancybox-iframe" href="/switching-between-free-and-non-free-nvidia/" title="non-free nvidia">non-free nvidia driver</a> or use another browser.  Nouveau is not compatible with QtWebEngine.</li>
<li>If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a title="GPT on BIOS" href="http://kaosx.us/gpt-partitioning/">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI</li>
<li>Installing on RAID, LVM, LUKS is currently not possible</li><br />
        </ul><br />
        To create <b>reliable</b> installation media, please follow the instructions from the <a href="http://kaosx.us/download/">Download</a> page. KaOS's ISO's <b>do not support unetbootin or rufus</b>, and DVDs need a burn speed <b>no higher than 4x</b>.</br></p>
