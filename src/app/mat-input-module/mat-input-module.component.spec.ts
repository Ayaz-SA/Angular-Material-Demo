import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModuleComponent } from './mat-input-module.component';

describe('MatInputModuleComponent', () => {
  let component: MatInputModuleComponent;
  let fixture: ComponentFixture<MatInputModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatInputModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
