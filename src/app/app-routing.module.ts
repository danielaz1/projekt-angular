import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/modules/register/register/register.component';
import { RegisterModule } from 'src/modules/register/register.module';
import { ListModule } from 'src/modules/list/list.module';
import { ListComponent } from 'src/modules/list/list/list.component';
import { MapModule } from 'src/modules/map/map.module';
import { MapComponent } from 'src/modules/map/map/map.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path: 'map/:id', component: MapComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterModule,
    ListModule,
    MapModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
