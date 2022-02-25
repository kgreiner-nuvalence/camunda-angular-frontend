import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioBuilderWrapperComponent } from './formio-builder-wrapper.component';

describe('FormioBuilderWrapperComponent', () => {
  let component: FormioBuilderWrapperComponent;
  let fixture: ComponentFixture<FormioBuilderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormioBuilderWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioBuilderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
