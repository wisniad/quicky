import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuickyComponent } from './add-quicky.component';

describe('AddQuickyComponent', () => {
  let component: AddQuickyComponent;
  let fixture: ComponentFixture<AddQuickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
