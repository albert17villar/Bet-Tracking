import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtVMenuItemComponent } from './bt-v-menu-item.component';

describe('BtVMenuItemComponent', () => {
  let component: BtVMenuItemComponent;
  let fixture: ComponentFixture<BtVMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtVMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtVMenuItemComponent);
    component = fixture.componentInstance;
    component.item = {
      'name':'Test'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
