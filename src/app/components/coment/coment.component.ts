import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
  @Input()
  coment: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
