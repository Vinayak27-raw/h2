import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  upcomingEvents = [

    {
      name: 'Javascript Conference',
      date: '2023-08-15',
      link: 'https://jsconf.in/',
    },
    {
      name: 'Google I/O',
      date: '2023-09-25',
      link: 'https://jsconf.in/',
    },
    {
      name: 'Apple Worldwide Developers Conference (WWDC)',
      date: '2023-10-15',
      link: 'https://jsconf.in/',
    },
    {
      name: 'Microsoft Build',
      date: '2024-09-12',
      link: 'https://jsconf.in/',
    },
    {
      name: 'AWS re:Invent',
      date: '2024-08-10',
      link: 'https://jsconf.in/',
    },
    {
      name: 'TensorFlow Dev Summit',
      date: '2023-12-01',
      link: 'https://jsconf.in/',
    }
    
  ]; 


}
