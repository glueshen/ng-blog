import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularOriginalPageComponent } from './angular-original-page/angular-original-page.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularOriginalPageComponent,    
  ],
  imports: [
    TaskManagerComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
