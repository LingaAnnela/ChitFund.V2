import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.scss']
})
export class ClientsDetailsComponent implements OnInit {
  id : string;
  client : Client;
  transactionModel : Transaction;
  transactions : Transaction[];

  constructor() { }

  ngOnInit() {
    //Where should we get these details?
    this.client = {id : '123451', firstName : 'Linga' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'}
  ;

    this.transactions = [
      {id : '123451', name : 'Linga Annela' , amount : 100000 , date : new Date(), interest : 12, notification : false, interval : 12, duration : 'Duration', attachments : 'No', payments : [] },
      {id : '123451', name : 'Linga Annela' , amount : 100000 , date : new Date(), interest : 12, notification : false, interval : 12, duration : 'Duration', attachments : 'No', payments : [] },
      {id : '123451', name : 'Linga Annela' , amount : 100000 , date : new Date(), interest : 12, notification : false, interval : 12, duration : 'Duration', attachments : 'No', payments : [] },
      {id : '123451', name : 'Linga Annela' , amount : 100000 , date : new Date(), interest : 12, notification : false, interval : 12, duration : 'Duration', attachments : 'No', payments : [] },
      {id : '123451', name : 'Linga Annela' , amount : 100000 , date : new Date(), interest : 12, notification : false, interval : 12, duration : 'Duration', attachments : 'No', payments : [] },
      {id : '123451', name : 'Linga Annela' , amount : 100000 , date : new Date(), interest : 12, notification : false, interval : 12, duration : 'Duration', attachments : 'No', payments : [] }
  ];
  }

}
