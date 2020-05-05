import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBadgesComponent } from './mat-badges.component';

describe('MatBadgesComponent', () => {
  let component: MatBadgesComponent;
  let fixture: ComponentFixture<MatBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
