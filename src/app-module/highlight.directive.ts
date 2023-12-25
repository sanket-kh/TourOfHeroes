import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef) {

  }
  highlight(color:string){
    this.elementRef.nativeElement.style.backgroundColor=color;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

}
