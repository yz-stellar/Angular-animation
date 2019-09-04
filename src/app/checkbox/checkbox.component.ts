import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: ".aa-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"]
})
export class CheckboxComponent implements OnInit {
  get checked() {
    return this.elementRef.nativeElement.checked;
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}
}
