import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPermissionDirective]'
})
export class PermissionDirectiveDirective {



  constructor(private elementRef:ElementRef) { 


    elementRef.nativeElement.style.color="red"
  }

}
