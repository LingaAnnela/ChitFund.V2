import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chitfunds',
  templateUrl: './chitfunds.component.html',
  styleUrls: ['./chitfunds.component.scss']
})
export class ChitfundsComponent implements OnInit {
  clients: Client[];
  private clients$ : Subscription;
  
  constructor(private clientSvc: ClientsService) {
    
   }

  ngOnInit() {
    //Where should we get these details?
    this.clientSvc.getClients();
    this.clients$ = this.clientSvc.getClientsUpdatedListener().subscribe((clients) => {
        this.clients = clients;
    });
  }

}
