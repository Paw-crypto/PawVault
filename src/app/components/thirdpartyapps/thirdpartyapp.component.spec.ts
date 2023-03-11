import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyAppComponent } from './thirdpartyapp.component';

describe('ThirdPartyAppComponent', () => {
  let component: ThirdPartyAppComponent;
  let fixture: ComponentFixture<ThirdPartyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});