import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOriginalPageComponent } from './angular-original-page.component';

describe('AngularOriginalPageComponent', () => {
  let component: AngularOriginalPageComponent;
  let fixture: ComponentFixture<AngularOriginalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularOriginalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularOriginalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
