import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsDatetimeComponent } from './datetime/datetime.component';
import { FormsDynamicComponent } from './dynamic/dynamic.component';
import { FormsElementsComponent } from './elements/elements.component';
import { FormsSelectComponent } from './select/select.component';
import { FormsSelectEditComponent } from './select/edit/edit.component';

const COMPONENTS: any[] = [
  FormsDatetimeComponent,
  FormsDynamicComponent,
  FormsElementsComponent,
  FormsSelectComponent,
  FormsSelectEditComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, FormsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class FormsModule {}
