import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages =[
     {text:'hello', author: 'vince', date: '7/1'},
     {text:'hi', author:  'vjay', date: '7/2'},
     {text:'what up', author: 'joe', date: '7/2'}
];
 

  constructor() { }

  public getMessagesFrom(username) {
    return this.messages.filter( message => {
      return message.author === username;
    });
  }
  public getMessageByDate(date){
    return this.messages.filter(message =>{
      return message.author === date;
    });
  }
}
