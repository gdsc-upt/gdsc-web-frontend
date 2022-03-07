import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie'

@Component({
  selector: 'gdsc-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  options: AnimationOptions = {
    path: '../../../../assets/gdsc-animation/Loading-Logo-GDSC.json',
    loop: true,
    autoplay: true
  }
}
