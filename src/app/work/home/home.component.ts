import { Component } from '@angular/core';
import { Card } from './image';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
imageObject = [{
  video: 'https://youtu.be/zIwLWfaAg-8',
  title: 'The Future we are building --boring',
  alt: 'youtube video'
}, {
  video: 'https://youtu.be/ixRanV-rdAQ',
  title: 'Google I/O 2023',
  alt: 'youtube video'
}, {
  video: 'https://youtu.be/lmvIvpn5Nqk',
  title: 'Amazon Women In Tech'
},
{
video: 'https://youtu.be/A5uMNMAWi3E',
title: 'OPENAI CEO Sam Altman',
alt: 'youtube video'
},
{
video: 'https://youtu.be/LttdPzox59A',
title: 'CES 2022 Summit',
alt: 'youtube video'
},
{
video: 'https://youtu.be/gQcT4mAmgwA',
title: 'Tech in Asia Conference 2022',
alt: 'youtube video'
},];

cards : Card[] = [

  {link:"https://img.freepik.com/premium-photo/rear-side-audiences-sitting-listening-speackers-stage-low-light_41418-2156.jpg?size=626&ext=jpg&ga=GA1.1.2010144879.1689428546&semt=ais",

  title:"AI Insights: Unleashing the Power of Artificial Intelligence",

  text:"Discover the transformative potential of Artificial Intelligence (AI)",

  host:"Hosted by: Pune Tech Society",

  time:"Sunday 6:00 PM IST"},




  {link:"https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346667.jpg?size=626&ext=jpg&ga=GA1.2.2010144879.1689428546&semt=ais",

  title:"Internet of Things (IoT): Connecting the World Around Us",

  text:"Discover the transformative potential of Internet Of Things (IOT) ",

  host:"Hosted by: IOT Global",

  time:"Saturday 10:00 AM IST"},




  {link:"https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346664.jpg?size=626&ext=jpg&ga=GA1.1.2010144879.1689428546&semt=ais",

  title:"UX/UI Design Masterclass: Creating Engaging User Experiences",

  text:"Discover the transformative potential of UI/UX with AI",

  host:"Hosted by: UI/UX Society",

  time:"Tuesday 4:00 PM IST"},




  {link:"https://img.freepik.com/free-photo/digital-blue-hud-interface-team-concept_53876-13728.jpg?size=626&ext=jpg&ga=GA1.1.2010144879.1689428546&semt=ais",

  title:"Cybersecurity Essentials: Protecting Your Digital Assets",

  text:"Discover the transformative potential of Cyber Acitivities and Digital Assests ",

  host:"Hosted by: Cyber Tech Space",

  time:"Friday 7:00 PM IST"}




 

];
}
