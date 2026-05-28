import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta01 } from './pregunta01';

describe('Pregunta01', () => {
  let component: Pregunta01;
  let fixture: ComponentFixture<Pregunta01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta01],
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
