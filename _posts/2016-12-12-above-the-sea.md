---
layout: post
title: Above The Sea
image: above-the-sea-featured-image.jpg
time: Winter 2016
tags:
- projects
---
Project Demo: [Above The Sea – Shanghai](/p5-above-the-sea/){:target="_blank"} (for a better experience, please open the link in Google Chrome)

Above The Sea translates weather forecast data(sea level and main weather condition) of a certain city into notes and chords and visualizes the data in a column system in p5. After being laser cut onto the clear acrylic board, the songs about the sea level and weather above the sea can be played on a record player.

<iframe src="https://player.vimeo.com/video/195638313" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/195638313">Above The Sea</a> from <a href="https://vimeo.com/user36907083">Zhang Zhan</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Video filmed and editted by Zhang Zhan

Music: Bon Iver - 666 ʇ

This projects gets weather forecast data from the 5 day/3 hour forecast API from [OpenWeatherMap](http://openweathermap.org/api){:target="_blank"}. Since the minimum unit of the data interval is 3 hours, the API gives me about 35-40 pairs of the sea level and main weather condition data. Each 3 hour interval represents one bar, and each bar has 8 beats of notes in membrane synth in one chord with a certain arrangement that represent main weather condition in that interval. There’s also a longer note created in FM synth representing the sea level. The API is live, which means it gets updated every 10 minutes(this interval is set in P5 so it can be changed easily).

With my professor Luisa’s help, I decided to map 4 main weather conditions received from the weather forecast API with notes in 4 different chords.

Clear – C major

Clouds – C minor

Rain – A minor

Snow – B minor

The sea level data aka the long note that lasts through one bar is mapped into a scale of C4, D4, E4, F4, G4, A4, B4, C5 note.

In order to preserve the songs, I opted to include [laser cut records](http://instructables.com/id/Laser-Cut-Record/?ALLSTEPS){:target="_blank"} as part of the project since the idea itself is really fascinating and you can play it back anytime you want. I needed to record the piece first and then run it through the python program and processing sketch provided by the instructables post. However, I had to make some modifications such as the size of the records, the radius of the most inner grove, rpm, maximum size of the pdf files(since one song’s groves on one pdf will be way too much to be imported into illustrator, so I had to split them into 9 pdfs and then import them so that no groves will be missing.) I bought a record player on Taobao–230kuai–the cheapest but legitimate one I could find. I then did testing with a random song in three settings suggested by the post–frequency 5000, speed 100, dpi 1200, and power 12, 20 and 24. It turns out that power 20 one sounds the best.

Then I laser cut three music pieces I recorded on Dec 6 of three cities–New York, Prague, and Shanghai–where I lived since last year.

![_config.yml]({{ site.baseurl }}/images/above-the-sea-1.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-2.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-3.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-4.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-5.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-6.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-7.jpg)

After the laser cut process was done, I washed those three records with water and soap to get rid of all the tiny dust from the cutting processing.

![_config.yml]({{ site.baseurl }}/images/above-the-sea-8.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-9.jpg)

Listen to the result in the video. :)

![_config.yml]({{ site.baseurl }}/images/above-the-sea-10.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-11.jpg)
![_config.yml]({{ site.baseurl }}/images/above-the-sea-12.jpg)
