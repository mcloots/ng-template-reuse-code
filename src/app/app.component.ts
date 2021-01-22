import { AfterViewInit, Component, ViewChildren } from "@angular/core";
import * as d3 from "d3";
@Component({
  selector: "app-root",
  //templateUrl: "./grondplan_corda_1_v2.svg",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  state = [
    { id: 1, selected: false },
    { id: 2, selected: true },
    { id: 3, selected: false },
    { id: 4, selected: true }
  ];
  @ViewChildren("desk") desks;

  ngAfterViewInit(): void {
    this.colorSVG();
    var svg = d3.select("svg");
    svg.call(
      d3
        .zoom()
        .scaleExtent([1, 5])
        .on("zoom", function() {
          svg.attr("transform", d3.event.transform);
        })
    );
  }

  demo(event) {
    this.toggleSelected(event.target.id);
  }

  toggleSelected(objectID) {
    this.state = this.state.map(elm => {
      if (elm.id == objectID) {
        elm.selected = !elm.selected;
      }
      return elm;
    });
    this.colorSVG();
    console.log(
      "Gelecteerde vlakken",
      this.state.filter(obj => obj.selected).map(obj => obj.id)
    );
  }

  colorSVG() {
    this.desks.toArray().forEach(desk => {
      const startObject = this.state.find(
        elm => elm.id == desk.nativeElement.id
      );
      if (startObject.selected) {
        desk.nativeElement.setAttribute("class", "st1");
      } else {
        desk.nativeElement.setAttribute("class", "st2");
      }
    });
  }
}

// https://stackblitz.com/edit/svg-edit?file=app%2Fsvg-editor%2Fsvg-editor.component.ts
