import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Directive({
  selector: '[appFeature]'
})
export class FeatureToggleDirective {
  hasView = false;

  @Input() set appFeature(featureName: string) {
    const condition = this.configService.getFeatureValue(featureName);
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private configService: ConfigService) {}
}

@Directive({
  selector: '[appNotFeature]'
})
export class NotFeatureToggleDirective {
  hasView = false;

  @Input() set appNotFeature(featureName: string) {
    const condition = !this.configService.getFeatureValue(featureName);
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private configService: ConfigService) {}
}
