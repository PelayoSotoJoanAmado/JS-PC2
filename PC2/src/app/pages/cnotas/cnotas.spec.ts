import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnotas } from './cnotas';

describe('Cnotas', () => {
  let component: Cnotas;
  let fixture: ComponentFixture<Cnotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cnotas],
    }).compileComponents();

    fixture = TestBed.createComponent(Cnotas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
