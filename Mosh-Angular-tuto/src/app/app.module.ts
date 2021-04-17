import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorsService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
