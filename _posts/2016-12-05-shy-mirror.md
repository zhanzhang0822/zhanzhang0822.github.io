---
layout: post
title: Shy Mirror
image: shy-mirror-featured-image.jpg
time: Winter 2016
tags:
- projects
---
Shy Mirror is the final project for Interactive Installation class created by Alexis Zerafa, Xiran Yang and me. Shy Mirror is a mirror that gently rotates 90 degrees when someone is in front of it, therefore the participant can not see his own reflection in the mirror.

<iframe src="https://player.vimeo.com/video/194319808" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/194319808">Shy Mirror</a> from <a href="https://vimeo.com/user36907083">Zhang Zhan</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Filmed by Alexis Zerafa, Xiran Yang and Zhang Zhan

Editted by Alexis Zerafa

This project focuses on the narcissistic behaviors shared by common human beings. We would like to raise the participant’s self-awareness of narcissism by angling the mirror that people tend to walk up to and where they look at themselves. This action disables them from looking at themselves in the mirror and, instead, participants are forced to look at the reflection of others in the room. We like this idea because not only is the concept persuasive and easy to convey, but also the physical object is simplistic and relevant to a broad audience.

The interaction part of the project is as simple as the concept–an infrared range finder and a stepper motor are connected to an Arduino Uno (a micro controller). Once the reading of the infrared range finder is smaller than the threshold we set according to many rounds of testing, which means an object is detected within the searching range, the Arduino Uno will tell the attached stepper motor to rotate 90 degrees. Once the reading of the infrared becomes bigger than the threshold, it means no more objects can be detected within the searching range, so the mirror would reset to the initial position as the reverse process after given the command to do so from the Arduino Uno. Participants are not required to actively interact with any electronic components; they need only get closer to the mirror. We would like the action to happen instinctively with very limited guidance, and in this way, the result–rotation of the mirror– triggered by the action would enhance the overall experience since it is unpredictable and, therefore, surprising.

A wood box frame(40x100cm) covered with white fabric functions as the base of the entire project, inside which the circuit hides. A thin but strong wood board drilled onto the fours legs of the wood box is the top of the box, and the stepper motor is placed in the center of the top with four screws drilled through the board and into the four mounting holes in the motor. Only the raft sticks out of the top of the box and the motor body is underneath the top hidden behind the white fabric.The mirror, a 2mm acrylic board(40x100cm) with a mirror-like reflective surface that has a wood frame in the back, is hanging from the top part of a bigger frame that stands on the box so that there is no weight resting on the raft. A small wood piece sticks out from the bottom of the mirror frame and touch nearly half of the raft. A paper clip and some clear tape are used to tie the raft and the small wood piece so they do not slip, and the stepper motor can rotate the mirror smoothly. The infrared range finder is installed on the top wood bar that is facing the participants.

The project is truly portable and easily reassembled due to the use of screws and lumber. It needs one socket nearby to power the circuit. We placed the project in a way that it was facing a white wall. Therefore the space in front of the range finder could be less crowded with a more still and pure background, which would definitely maintain the performance of the sensor at a good level. Even though the infrared range finder works well with normal room light, the room where Shy Mirror is exhibited should have as little bright sunlight as possible since sunlight would decrease the accuracy of the range finder.

![_config.yml]({{ site.baseurl }}/images/shy-mirror-1.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-2.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-3.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-4.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-5.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-6.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-7.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-8.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-9.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-10.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-11.jpg)

Photo credits: Xiran Yang
![_config.yml]({{ site.baseurl }}/images/shy-mirror-12.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-13.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-14.jpg)
![_config.yml]({{ site.baseurl }}/images/shy-mirror-15.jpg)

