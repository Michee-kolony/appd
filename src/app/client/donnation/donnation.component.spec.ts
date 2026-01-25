import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnationComponent } from './donnation.component';

describe('DonnationComponent', () => {
  let component: DonnationComponent;
  let fixture: ComponentFixture<DonnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonnationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
