import { Component } from '@angular/core';

@Component({
  selector: 'clock-component',
  templateUrl: './clock.component.html'
})
export class ClockComponent {
  date = null;
  interval;

  start() {
    this.date = new Date();
    this.interval = setInterval(()=>(
      this.date = new Date()
    ), 100);
  }

  stop() {
    clearInterval(this.interval);
  }
}
