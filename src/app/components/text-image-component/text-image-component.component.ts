import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-image-component',
  templateUrl: './text-image-component.component.html',
  styleUrls: ['./text-image-component.component.css']
})
export class TextImageComponentComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() image: string;
  @Input() position: boolean;

  ngOnInit(): void {
  }

}
