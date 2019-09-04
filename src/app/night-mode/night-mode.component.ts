import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "aa-night-mode",
  templateUrl: "./night-mode.component.html",
  styleUrls: ["./night-mode.component.scss"],
  animations: [
    trigger("night", [
      state(
        "off",
        style({
          opacity: 0
        })
      ),
      state(
        "on",
        style({
          opacity: 1
        })
      ),
      transition("on <=> off", [animate(".5s")])
    ]),
    trigger("sun-and-moon", [
      state(
        "on",
        style({
          transform: "translateY(0%)"
        })
      ),
      state(
        "off",
        style({
          transform: "translateY({{offPosition}})"
        }),
        { params: { offPosition: "0%" } }
      ),
      transition("on <=> off", [animate(".5s")])
    ])
  ]
})
export class NightModeComponent implements OnInit {
  nightState = "off";
  _sunState = "on";
  _moonState = "off";

  constructor() {}

  ngOnInit() {}

  toggleNightMode(checked: boolean) {
    this.nightState = checked ? "on" : "off";
    this._sunState = checked ? "off" : "on";
    this._moonState = checked ? "on" : "off";
  }

  get sunState() {
    return this.getState(this._sunState, "500%");
  }

  get moonState() {
    return this.getState(this._moonState, "-500%");
  }

  getState(state, offPosition) {
    return {
      value: state,
      params: {
        offPosition: offPosition
      }
    };
  }
}
