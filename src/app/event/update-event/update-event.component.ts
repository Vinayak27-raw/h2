import { EventService } from './../event.service';
import { Event } from './../event';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {

  event:any;

  constructor(private eventService:EventService,
    private route:ActivatedRoute,private router:Router){}
  id:number;
  ngOnInit(){

    this.id=this.route.snapshot.params["id"];
    this.eventService.geteventById(this.id).subscribe(data=>{
      console.log(data);
      this.event = data; 
    })
   
  }
  
  onUpdate(event:any){
    
    this.eventService.updateEvent(this.id,this.event).subscribe(data=>{
      console.log(data);
    })
   
    this.router.navigate(["/event"]);
  }
 
}
