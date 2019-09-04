import { NightModeComponent } from "./night-mode/night-mode.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ShapeAndColorComponent } from "./shape-and-color/shape-and-color.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { StaggerComponent } from './stagger/stagger.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NightModeComponent,
    CheckboxComponent,
    ShapeAndColorComponent,
    RadioButtonComponent,
    EnterLeaveComponent,
    StaggerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
