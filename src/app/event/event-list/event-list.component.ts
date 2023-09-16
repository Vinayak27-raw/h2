import { Component, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './../event.service';
import { Event } from './../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  selectedValue:string="All"

  events:any;

  constructor(private eventService:EventService
    ,private router:Router){}

  ngOnInit(){
    this.eventService.getAlltech().subscribe(data=>{
      this.events= data;
    })
  }


  onUpdate(id:number){
    this.router.navigate(["/update",id])
    
  }

  onDelete(id:number){
    let response=confirm(`Do you wish to delete event`)
    if(response){
      this.eventService.deleteEvent(id).subscribe(data=>{
        console.log(data);
      });
    }
    this.router.navigate(["/event"])
    
  }


}
