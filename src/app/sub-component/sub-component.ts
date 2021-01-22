import { Component, ViewChild, ContentChildren, QueryList, ViewContainerRef, AfterViewInit, TemplateRef, OnInit, ContentChild, ViewChildren } from '@angular/core';
import { GetTemplateDirective } from '../get-template.directive';

@Component({
  selector: 'sub-component',
  templateUrl: 'sub-component.html'
})
export class SubComponent implements AfterViewInit, OnInit {
  
  @ViewChild('templateRenderer', { read: ViewContainerRef }) anchor: ViewContainerRef;
  @ContentChildren(GetTemplateDirective) templates: QueryList<GetTemplateDirective>;

  instanceChild : GetTemplateDirective;

  ngOnInit() {
  }

  ngAfterViewInit() {
    let desiredTemplateName = 'svg1';

    for (let t of this.templates.toArray()) {
      if (t.name === desiredTemplateName) {
        this.instanceChild = t;
        this.anchor.createEmbeddedView(this.instanceChild.template);
        break;
      }
    }
  }
}
