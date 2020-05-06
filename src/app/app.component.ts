import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;
  menu = [
    { icon: 'home', link: '', title: 'Home'},
    { icon: 'format_shapes', link: 'typography', title: 'Typography'},
    { icon: 'gamepad', link: 'mat-button', title: 'Mat-Button'},
    { icon: 'notification_important', link: 'mat-badges', title: 'Mat-Badge'},
    { icon: 'reorder', link: 'mat-expansion', title: 'Mat-Expansion-Panel'},
    { icon: 'view_compact', link: 'mat-card', title: 'Mat-Card'},
    { icon: 'table_chart', link: 'mat-tabs', title: 'Mat-Tab & Mat-Stepper'},
    { icon: 'create', link: 'mat-input', title: 'Mat-Input'},
    { icon: '', link: 'scrolling', title: 'Virtual Scrolling'},
  ]
  ngOnInit() {
  }
}
