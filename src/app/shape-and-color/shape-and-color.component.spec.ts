import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeAndColorComponent } from './shape-and-color.component';

describe('ShapeAndColorComponent', () => {
  let component: ShapeAndColorComponent;
  let fixture: ComponentFixture<ShapeAndColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeAndColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeAndColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
