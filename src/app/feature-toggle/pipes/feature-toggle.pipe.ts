import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Pipe({
  name: 'appFeature'
})
export class FeatureTogglePipe implements PipeTransform {
  constructor(private configService: ConfigService) {}

  transform(featureName: string): boolean {
    return this.configService.getFeatureValue(featureName);
  }
}

@Pipe({
  name: 'appNotFeature'
})
export class NotFeatureTogglePipe implements PipeTransform {
  constructor(private configService: ConfigService) {}

  transform(featureName: string): boolean {
    return !this.configService.getFeatureValue(featureName);
  }
}
