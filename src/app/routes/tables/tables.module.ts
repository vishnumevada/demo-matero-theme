import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesKitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { TablesRemoteDataComponent } from './remote-data/remote-data.component';
import { TablesKitchenSinkEditComponent } from './kitchen-sink/edit/edit.component';

const COMPONENTS: any[] = [
  TablesKitchenSinkComponent,
  TablesRemoteDataComponent,
  TablesKitchenSinkEditComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, TablesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class TablesModule {}
