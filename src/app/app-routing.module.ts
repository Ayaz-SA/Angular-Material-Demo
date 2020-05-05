import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDisplayComponent } from './mat-display/mat-display.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MatBadgesComponent } from './mat-badges/mat-badges.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatTabComponent } from './mat-tab/mat-tab.component';
import { MatInputModuleComponent } from './mat-input-module/mat-input-module.component';


const routes: Routes = [
  {
    path: '',
    component: MatGridListComponent
  },
  {
    path: 'typography',
    component: MatDisplayComponent
  },
  {
    path: 'mat-button',
    component: MatButtonComponent
  },
  {
    path: 'mat-badges',
    component: MatBadgesComponent
  },
  {
    path: 'mat-expansion',
    component: MatExpansionPanelComponent
  },
  {
    path: 'mat-card',
    component: MatCardComponent
  },
  {
    path: 'mat-tabs',
    component: MatTabComponent
  },
  {
    path: 'mat-input',
    component: MatInputModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
