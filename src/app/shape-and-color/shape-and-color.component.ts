import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  AnimationTransitionMetadata,
  transition,
  animate
} from "@angular/animations";

/*
const transitions: AnimationTransitionMetadata[] = [
  transition("* => *", animate(".5s"))
];
*/

@Component({
  selector: "aa-shape-and-color",
  templateUrl: "./shape-and-color.component.html",
  styleUrls: ["./shape-and-color.component.scss"],
  animations: [
    trigger("color", [
      state(
        "hotpink",
        style({
          backgroundColor: "hotpink"
        })
      ),
      state(
        "dodgerblue",
        style({
          backgroundColor: "dodgerblue"
        })
      ),
      state(
        "slategray",
        style({
          backgroundColor: "slategray"
        })
      ),
      transition("* => *", animate(".5s"))
    ]),
    trigger("shape", [
      state(
        "square",
        style({
          borderRadius: "0%"
        })
      ),
      state(
        "circle",
        style({
          borderRadius: "50%"
        })
      ),
      state(
        "drop",
        style({
          borderRadius: "50% 0% 50% 50%",
          transform: "rotate(-45deg)"
        })
      ),
      transition("* => *", animate(".5s"))
    ])
  ]
})
export class ShapeAndColorComponent implements OnInit {
  colorState = "hotpink";
  shapeState = "square";

  constructor() {}

  ngOnInit() {}
}
