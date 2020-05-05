import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatDisplayComponent } from './mat-display/mat-display.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MatBadgesComponent } from './mat-badges/mat-badges.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatTabComponent } from './mat-tab/mat-tab.component';
import { MatInputModuleComponent } from './mat-input-module/mat-input-module.component';

@NgModule({
  declarations: [
    AppComponent,
    MatDisplayComponent,
    MatGridListComponent,
    MatButtonComponent,
    MatBadgesComponent,
    MatExpansionPanelComponent,
    MatCardComponent,
    MatTabComponent,
    MatInputModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
