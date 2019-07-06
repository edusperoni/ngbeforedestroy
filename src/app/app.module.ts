import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
