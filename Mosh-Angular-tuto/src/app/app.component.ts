import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mosh-Angular-tuto';
 
 
  LogEvent($event:boolean){
    console.log($event);
  }
}
