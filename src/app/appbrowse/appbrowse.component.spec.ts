import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbrowseComponent } from './appbrowse.component';

describe('AppbrowseComponent', () => {
  let component: AppbrowseComponent;
  let fixture: ComponentFixture<AppbrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
