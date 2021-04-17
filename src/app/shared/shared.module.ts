import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DraggableDirective} from './directives/draggable.directive';
import {WorkspaceComponent} from './components/workspace/workspace.component';
import {PanelMonitorComponent} from './components/panel-monitor/panel-monitor.component';

@NgModule({
  declarations: [
    DraggableDirective,
    WorkspaceComponent,
    PanelMonitorComponent
  ],
  exports: [
    CommonModule,
    DraggableDirective,
    WorkspaceComponent,
    PanelMonitorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
