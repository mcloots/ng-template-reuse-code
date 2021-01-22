import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ParentComponent } from './parent/parent.component';
import { SubComponent } from './sub-component/sub-component';
import { GetTemplateDirective } from "./get-template.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ParentComponent, SubComponent, GetTemplateDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
