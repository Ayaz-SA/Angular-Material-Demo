import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
} from "@angular/material";

const MaterialComponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule {}
