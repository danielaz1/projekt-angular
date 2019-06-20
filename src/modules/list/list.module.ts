import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [ListComponent, ListItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: ListComponent }
    ])
  ]
})
export class ListModule { }
