import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  public Information : string = ""

  public MarvellousEvent()
  {
    console.log("Click Me button pressed")
  }

  public AngularEvent()
  {
    this.Information = "Angular button pressed"
  }

  public PythonEvent(Value : any)
  {
    console.log(Value)
  }
}
