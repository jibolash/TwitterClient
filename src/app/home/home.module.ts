import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DiscoverComponent } from './discover.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { EditorComponent } from '../editor/editor.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent, EditorComponent, DiscoverComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
