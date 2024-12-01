import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnowComponent } from './testnow.component';

describe('TestnowComponent', () => {
  let component: TestnowComponent;
  let fixture: ComponentFixture<TestnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestnowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
