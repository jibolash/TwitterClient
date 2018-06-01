import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DiscoverComponent } from './discover.component';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { DiscoverRoutingModule } from './discover-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DiscoverRoutingModule
  ],
  declarations: [
    DiscoverComponent
  ]
})
export class DiscoverModule {}
