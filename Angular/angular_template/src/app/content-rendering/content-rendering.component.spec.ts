import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRenderingComponent } from './content-rendering.component';

describe('ContentRenderingComponent', () => {
  let component: ContentRenderingComponent;
  let fixture: ComponentFixture<ContentRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRenderingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
