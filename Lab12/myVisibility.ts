import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myVisibility]'
})


export class myVisibilityDirective {

    constructor(private e: ElementRef, private r: Renderer) { }

    @Input('showMe') showMe:boolean
    
    ngOnInit(){
    if(this.showMe) {
      //this.e.nativeElement.style.display = 'true';
      console.log("It is viewable");
    }else{
        this.e.nativeElement.style.display = 'none';
      console.log("it is hidden");
    }
  }
    
}
