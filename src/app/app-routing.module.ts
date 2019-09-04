import { EnterLeaveComponent } from "./enter-leave/enter-leave.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NightModeComponent } from "./night-mode/night-mode.component";
import { ShapeAndColorComponent } from "./shape-and-color/shape-and-color.component";
import { StaggerComponent } from "./stagger/stagger.component";

const routes: Routes = [
  {
    path: "night-mode",
    component: NightModeComponent
  },
  {
    path: "enter-leave",
    component: EnterLeaveComponent
  },
  {
    path: "shape-and-color",
    component: ShapeAndColorComponent
  },
  {
    path: "stagger",
    component: StaggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
