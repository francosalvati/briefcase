import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancoComponent } from './franco.component';

describe('FrancoComponent', () => {
  let component: FrancoComponent;
  let fixture: ComponentFixture<FrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
