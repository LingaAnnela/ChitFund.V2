import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clients: Client[] = [];
  private clientsUpdated = new Subject<Client[]>();

  constructor(private http: HttpClient) { }

  getClients(){
    this.http.get<{message: string, clients: Client[]}>("http://localhost:3000/api/clients").subscribe((clients) => {
      this.clients =  clients.clients;
      this.clientsUpdated.next([...this.clients]);
    });
  }

  getClientsUpdatedListener(){
    return this.clientsUpdated.asObservable();
  }

}
