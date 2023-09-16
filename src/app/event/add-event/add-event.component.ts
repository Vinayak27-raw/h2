import { EventService } from './../event.service';
import { Event } from './../event';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

base64:any;

  constructor(private eventService:EventService,
    private router:Router){}

   onAdd(event:any){
   
    event.photo = this.base64;
    this.eventService.addEvent(event).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(["/event"])


  }
  convertToBase64(file:any){
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
            resolve(fileReader.result);
        }
        fileReader.onerror = (error)=>{
          reject(error);
        }
    })
  }
  async onFileUpload(event:any){
    const file = event.target.files[0];
    this.base64 = await this.convertToBase64(file);
  }

}