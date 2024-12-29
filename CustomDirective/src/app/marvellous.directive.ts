import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appMarvellous]'
})
export class MarvellousDirective 
{
  constructor(private obj : ElementRef) 
  {}

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.color = 'blue';
    this.obj.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.color = 'black';
    this.obj.nativeElement.style.background = 'white';
  }
}
