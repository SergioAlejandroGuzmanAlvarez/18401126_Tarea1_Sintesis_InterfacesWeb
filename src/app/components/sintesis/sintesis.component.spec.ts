import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintesisComponent } from './sintesis.component';

describe('SintesisComponent', () => {
  let component: SintesisComponent;
  let fixture: ComponentFixture<SintesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SintesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SintesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
