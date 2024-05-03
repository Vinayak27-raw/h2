import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticketpage',
  templateUrl: './ticketpage.component.html',
  styleUrls: ['./ticketpage.component.css']
})
export class TicketpageComponent implements OnInit{

  eventData: any;
  generatedTicket: string;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.eventData = {
        title: params['title'],
        host: params['host'],
        time: params['time']
      };

      // Generate ticket when component initializes
      this.generatedTicket = this.ticketService.generateTicket(this.eventData);
    });
  }
}

