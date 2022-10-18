import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../../../assets/gdsc-animation/Loading-Logo-GDSC.json',
    loop: true,
    autoplay: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
