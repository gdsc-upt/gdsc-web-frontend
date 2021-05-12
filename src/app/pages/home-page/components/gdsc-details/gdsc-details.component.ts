import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gdsc-details',
  templateUrl: './gdsc-details.component.html',
  styleUrls: ['./gdsc-details.component.css']
})
export class GdscDetailsComponent implements OnInit {

  constructor() {
  }

  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() fbImage: string;
  @Input() gitImage: string;
  @Input() webImage: string;

  ngOnInit(): void {
  }

}
