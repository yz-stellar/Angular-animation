import { Component, OnInit } from "@angular/core";
import {
  trigger,
  query,
  style,
  animate,
  transition,
  stagger,
  keyframes
} from "@angular/animations";

@Component({
  selector: "aa-stagger",
  templateUrl: "./stagger.component.html",
  styleUrls: ["./stagger.component.scss"],
  animations: [
    trigger("boxes", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("100ms", [
            style({
              opacity: 0,
              transform: "translateX(-50%) scale(.5)"
            }),
            animate(".150s")
          ]),
          { optional: true }
        ),
        query(
          ":leave",
          stagger("-100ms", [
            animate(
              "100ms ease-out",
              keyframes([
                style({ opacity: 1, transform: "scale(1.1)", offset: 0 }),
                style({ transform: "scale(.5)", offset: 0.35 }),
                style({ opacity: 0, transform: "scale(0)", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class StaggerComponent implements OnInit {
  boxes: number[] = [];
  constructor() {}

  ngOnInit() {}

  addBox() {
    this.boxes.push(0);
  }

  addBoxes() {
    this.boxes = [...this.boxes, 0, 0, 0, 0, 0];
  }

  removeBox() {
    this.boxes.pop();
  }

  removeAll() {
    this.boxes.length = 0;
  }
}
