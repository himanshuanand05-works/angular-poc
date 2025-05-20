import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-rendering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-rendering.component.html',
  styleUrl: './dynamic-rendering.component.scss'
})
export class DynamicRenderingComponent {
  
  /** we used static: true option to tell angular compiler that this element reference will be available
   * before the view is initialized. This is useful when we want to access the template reference in the 
   * constructor or ngOnInit lifecycle hook. It was unnecessary to use it below but added as it's good
   * to know concept
   */
  @ViewChild('tpl', { static: true }) template!: TemplateRef<any>;

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  renderTemplate() {
    // Render the template dynamically
    this.viewContainerRef.createEmbeddedView(this.template, {
      message: 'This is rendered dynamically!'
    });
  }

  /**
   * This won't clear any template created in HTML using structural directives like *ngIf or @if
   * because the viewRef Doesn't contain the ref to those renderings as they are owned and managed 
   * by angular internally.
   */
  clearTemplate() {
    // Clear all dynamically rendered views
    this.viewContainerRef.clear();
  }

  
}
