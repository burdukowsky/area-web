import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {SquareToolsComponent} from './square-tools.component';

@NgModule({
  declarations: [
    SquareToolsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SquareToolsModule {
}
