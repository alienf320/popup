import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectPopupComponent } from './reject-popup.component';

describe('RejectPopupComponent', () => {
  let component: RejectPopupComponent;
  let fixture: ComponentFixture<RejectPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
