import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketpageComponent } from './ticketpage.component';

describe('TicketpageComponent', () => {
  let component: TicketpageComponent;
  let fixture: ComponentFixture<TicketpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketpageComponent]
    });
    fixture = TestBed.createComponent(TicketpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
