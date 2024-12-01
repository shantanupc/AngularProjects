import { DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, DecimalPipe, JsonPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  public Name : string = "Marvellous Infosystems";
  public Value : number = 12.345678;
  
  public Book =
  {
    "Name" : "Let us C",
    "Price" : "520",
    "Author" : "Y Kanetkar"
  }
}
