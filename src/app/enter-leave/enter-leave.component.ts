import { Component, OnInit } from "@angular/core";
import {
  state,
  trigger,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "aa-enter-leave",
  templateUrl: "./enter-leave.component.html",
  styleUrls: ["./enter-leave.component.scss"],
  animations: [
    trigger("tapir", [
      //...................................................
      // :enter means "void => *"
      transition(":enter", [
        // animate from this
        style({
          opacity: 0,
          transform: "scale(.1) rotate(720deg)"
        }),
        animate(
          ".5s"
          // animate to that
          // nothing set, which means default styles
        )
      ]),
      //...................................................
      // :leave means "* => void"
      transition(":leave", [
        // animate from this
        style({
          opacity: 1,
          transform: "rotate(0deg) translateY(0%) rotate(0deg)"
        }),
        animate(
          ".5s",
          // animate to that
          style({
            opacity: 0,
            transform: "rotate(360deg) translateY(100%) rotate(360deg) scale(0)"
          })
        )
      ])
    ])
  ]
})
export class EnterLeaveComponent implements OnInit {
  tapirVisible = true;

  constructor() {}

  ngOnInit() {}
}
