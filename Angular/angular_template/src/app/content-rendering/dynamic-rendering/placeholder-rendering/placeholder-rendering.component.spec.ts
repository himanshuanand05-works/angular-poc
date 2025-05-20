import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderRenderingComponent } from './placeholder-rendering.component';

describe('PlaceholderRenderingComponent', () => {
  let component: PlaceholderRenderingComponent;
  let fixture: ComponentFixture<PlaceholderRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderRenderingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
