import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  //Create the object of event Emitter
  @Output() public Myevent = new EventEmitter();

  public SendMessage()
  {
    this.Myevent.emit('Hello Parent...');
  }
}
