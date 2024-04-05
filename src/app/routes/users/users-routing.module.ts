import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersUserListComponent } from './user-list/user-list.component';
import { UsersUserAddComponent } from './user-add/user-add.component';
import { UsersUserDataDumpComponent } from './user-data-dump/user-data-dump.component';

const routes: Routes = [
  { path: 'list', component: UsersUserListComponent },
  { path: 'add', component: UsersUserAddComponent },
  { path: 'data-dump', component: UsersUserDataDumpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
