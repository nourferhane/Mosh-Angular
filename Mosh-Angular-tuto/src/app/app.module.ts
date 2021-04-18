import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExerciceComponent } from './exercice/exercice.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    ExerciceComponent,
    TitleCasePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule    
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
