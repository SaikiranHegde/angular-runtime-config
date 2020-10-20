import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureToggleDirective, NotFeatureToggleDirective } from './directives/feature-toggle.directive';
import { FeatureTogglePipe, NotFeatureTogglePipe } from './pipes/feature-toggle.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    FeatureToggleDirective,
    NotFeatureToggleDirective,
    FeatureTogglePipe,
    NotFeatureTogglePipe
  ],
  exports: [
    FeatureToggleDirective,
    NotFeatureToggleDirective,
    FeatureTogglePipe,
    NotFeatureTogglePipe
  ]
})
export class FeatureToggleModule {}
