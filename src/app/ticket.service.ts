import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  generateTicket(eventData: any): string {
    
    const ticketHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              
          </style>
      </head>
      <body>
          <div class="ticket">
         
              <h2>${eventData.title}</h2>
              <p>Hosted by: ${eventData.host}</p>
              <p>Time: ${eventData.time}</p>
              <!-- Add any additional ticket details here -->
          </div>
      </body>
      </html>
    `;
    
    return ticketHtml;
  }
}
