import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCardsComponent } from './radio-cards.component';

describe('RadioCardsComponent', () => {
  let component: RadioCardsComponent;
  let fixture: ComponentFixture<RadioCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
