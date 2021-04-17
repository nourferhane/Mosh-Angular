import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  email :string = "test";
  text:string="testttitutiugiugiugiuogioug"

  ngOnInit(): void {
  }

  OnButtonClick($event: MouseEvent) {
    $event.stopPropagation();
    console.log("button clicked ");
  }
  OndivClick($event: MouseEvent) {

    console.log("Div clicked !");
  }
  OnKeyUp() {
   console.log(this.email)
  }
}
