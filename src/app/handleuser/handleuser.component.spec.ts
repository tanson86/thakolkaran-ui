import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleuserComponent } from './handleuser.component';

describe('HandleuserComponent', () => {
  let component: HandleuserComponent;
  let fixture: ComponentFixture<HandleuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
