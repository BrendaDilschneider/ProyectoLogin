import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFinComponent } from './prueba-fin.component';

describe('PruebaFinComponent', () => {
  let component: PruebaFinComponent;
  let fixture: ComponentFixture<PruebaFinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaFinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
