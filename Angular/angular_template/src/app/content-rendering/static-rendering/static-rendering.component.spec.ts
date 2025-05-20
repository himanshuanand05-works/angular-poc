import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticRenderingComponent } from './static-rendering.component';

describe('StaticRenderingComponent', () => {
  let component: StaticRenderingComponent;
  let fixture: ComponentFixture<StaticRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticRenderingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
