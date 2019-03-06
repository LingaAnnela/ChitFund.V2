import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { Subscription } from 'rxjs';

@Component({
    selector : 'app-clients',
    templateUrl : './clients.component.html',
    styleUrls : ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
    clients: Client[];
    private clients$ : Subscription;

    constructor(private clientSvc: ClientsService){}

    ngOnInit(){
        //Where should we get these details?
        this.clientSvc.getClients();
        this.clients$ = this.clientSvc.getClientsUpdatedListener().subscribe((clients) => {
            this.clients = clients;
        });
    }

    onDeleteClick(id: string){
        confirm('Are you sure want to delete?');
    }
}