import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-image-component',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.css']
})
export class TextImageComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() position: boolean;

  ngOnInit(): void {
  }

}
