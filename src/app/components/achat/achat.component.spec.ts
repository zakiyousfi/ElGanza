import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { achatComponent } from './achat.component';

describe('achatComponent', () => {
  let component: achatComponent;
  let fixture: ComponentFixture<achatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ achatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(achatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
