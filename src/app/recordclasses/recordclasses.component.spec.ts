import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordclassesComponent } from './recordclasses.component';

describe('RecordclassesComponent', () => {
  let component: RecordclassesComponent;
  let fixture: ComponentFixture<RecordclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordclassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
