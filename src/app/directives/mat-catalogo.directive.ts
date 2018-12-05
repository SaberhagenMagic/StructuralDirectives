import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMatCatalogo]'
})
export class MatCatalogoDirective {
  context;

  @Input() set appMatCatalogoFrom(param: string) {
    console.log(param);
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log('Mi Directiva');
  }

}
