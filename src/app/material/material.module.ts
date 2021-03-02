import { MatCardModule,MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatExpansionModule, MatTabsModule, MatStepperModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatExpansionModule,
  MatTabsModule,
  MatStepperModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
