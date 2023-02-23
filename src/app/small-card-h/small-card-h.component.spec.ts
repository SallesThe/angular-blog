import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardHComponent } from './small-card-h.component';

describe('SmallCardHComponent', () => {
  let component: SmallCardHComponent;
  let fixture: ComponentFixture<SmallCardHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
