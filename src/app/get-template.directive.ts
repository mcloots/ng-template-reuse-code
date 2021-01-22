import { Directive, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[appGetTemplate]'
})
export class GetTemplateDirective {

  @Input("name") name: string = "";
  
  constructor(public template: TemplateRef<any>) {  }
}
