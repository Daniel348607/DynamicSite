import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdmainComponent } from './prodmain.component';

describe('ProdmainComponent', () => {
  let component: ProdmainComponent;
  let fixture: ComponentFixture<ProdmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
