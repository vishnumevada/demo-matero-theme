import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesKitchenSinkEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: TablesKitchenSinkEditComponent;
  let fixture: ComponentFixture<TablesKitchenSinkEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesKitchenSinkEditComponent]
    });
    fixture = TestBed.createComponent(TablesKitchenSinkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
