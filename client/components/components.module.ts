import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  declarations: [NotFoundComponent, FooterComponent, SidebarComponent, NavbarComponent]
})
export class ComponentsModule { }
