import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta02 } from './pregunta02';

describe('Pregunta02', () => {
  let component: Pregunta02;
  let fixture: ComponentFixture<Pregunta02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta02],
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
