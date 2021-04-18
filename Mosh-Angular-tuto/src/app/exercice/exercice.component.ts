import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent   {
  @Input() selected:any ;
  @Output() change = new EventEmitter();
  title="";

  OnClick(){
    this.selected = !this.selected;
    this.change.emit();
  }

}
