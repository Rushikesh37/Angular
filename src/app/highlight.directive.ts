

import { Directive, ElementRef, HostListener, Input } from '@angular/core';@Directive({  selector: '[appHighlight]'})export class HighlightDirective {@Input() appHighlight="";@Input() fontColor="";@Input() fontBold="";@Input() textSize="";   constructor(private el:ElementRef) {    this.el.nativeElement.style.fontSize='';      }


   @HostListener('mouseenter') onMouseEnter(){



    this.highlight(this.appHighlight='violet', this.fontColor='black', this.fontBold='100', this.textSize='50px')



  }



  @HostListener('mouseleave') onMouseLeave(){



    this.highlight('','','','')



  }



  private highlight(color:string, fontColor:string, fontBold:string, textSize:string) {



    this.el.nativeElement.style.backgroundColor=color;



    this.el.nativeElement.style.color=fontColor;



    this.el.nativeElement.style.fontWeight=fontBold;



    this.el.nativeElement.style.fontSize=textSize;


  }
}