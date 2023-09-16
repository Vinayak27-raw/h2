import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class EventService {
  
    constructor(private http:HttpClient) { }
  
    getAlltech():Observable<any[]>{
      return this.http.get<any[]>("http://127.0.0.1:5000/api/events");
    }
    
    addEvent(tech:any){
      return this.http.post("http://127.0.0.1:5000/api/events",tech);
    }
    
    deleteEvent(id:number):Observable<any>{
      const url = `http://127.0.0.1:5000/api/events/${id}`
      return this.http.delete(url);
    }
     

    geteventById(id:number):Observable<any[]>{
      return this.http.get<any[]>(`http://127.0.0.1:5000/api/events/${id}`);
    }
    
    updateEvent(id:number, Event:any){
      const url = `http://127.0.0.1:5000/api/events/${id}`;
      return this.http.put(url,Event);
    }
    
    }