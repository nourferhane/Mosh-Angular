import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

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
   console.log("Enter clicked")
  }
}
