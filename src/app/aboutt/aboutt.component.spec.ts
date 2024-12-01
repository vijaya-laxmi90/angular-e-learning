import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttComponent } from './aboutt.component';

describe('AbouttComponent', () => {
  let component: AbouttComponent;
  let fixture: ComponentFixture<AbouttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouttComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
