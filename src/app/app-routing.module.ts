import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SquareToolsComponent} from './views/square-tools/square-tools.component';

const routes: Routes = [
  {path: '', component: SquareToolsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
