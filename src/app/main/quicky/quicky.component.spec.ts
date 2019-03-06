import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickyComponent } from './quicky.component';

describe('QuickyComponent', () => {
  let component: QuickyComponent;
  let fixture: ComponentFixture<QuickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
