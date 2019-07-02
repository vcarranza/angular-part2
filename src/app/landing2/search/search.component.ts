import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'gw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public messages = [];

  constructor(public messageService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessageByDate('7/2')
  }

}
