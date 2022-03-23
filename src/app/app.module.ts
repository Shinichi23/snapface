import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnapFaceComponent } from './snap-face/snap-face.component';
import { InspectorModule } from '@ngneat/inspector';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SnapFaceComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? [] : InspectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
