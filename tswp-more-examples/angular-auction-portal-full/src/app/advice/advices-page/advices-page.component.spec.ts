import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesPageComponent } from './advices-page.component';

describe('AdvicesPageComponent', () => {
  let component: AdvicesPageComponent;
  let fixture: ComponentFixture<AdvicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvicesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
