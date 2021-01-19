import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsComponentComponent } from './skils-component.component';

describe('SkilsComponentComponent', () => {
  let component: SkilsComponentComponent;
  let fixture: ComponentFixture<SkilsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
