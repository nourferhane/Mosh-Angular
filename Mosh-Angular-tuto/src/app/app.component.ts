import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mosh-Angular-tuto';


  LogEvent(event: { isSelected: boolean }) {
    console.log(event);
  }

  LogInfo() {
    console.log("information");
  }
}
