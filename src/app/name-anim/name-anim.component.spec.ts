import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAnimComponent } from './name-anim.component';

describe('NameAnimComponent', () => {
  let component: NameAnimComponent;
  let fixture: ComponentFixture<NameAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAnimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
