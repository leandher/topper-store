import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuClientComponent } from './sidebar-menu-client.component';

describe('SidebarMenuClientComponent', () => {
  let component: SidebarMenuClientComponent;
  let fixture: ComponentFixture<SidebarMenuClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
