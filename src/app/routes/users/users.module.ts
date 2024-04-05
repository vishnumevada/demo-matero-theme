import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersUserListComponent } from './user-list/user-list.component';
import { UsersUserAddComponent } from './user-add/user-add.component';
import { UsersUserDataDumpComponent } from './user-data-dump/user-data-dump.component';

const COMPONENTS: any[] = [
  UsersUserListComponent,
  UsersUserAddComponent,
  UsersUserDataDumpComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class UsersModule {}
