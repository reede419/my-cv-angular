import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectComponentComponent } from './my-project-component.component';

describe('MyProjectComponentComponent', () => {
  let component: MyProjectComponentComponent;
  let fixture: ComponentFixture<MyProjectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
