import { CommonModule } from '@angular/common';
import { Component, EmbeddedViewRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-content-rendering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-rendering.component.html',
  styleUrl: './content-rendering.component.scss'
})
export class ContentRenderingComponent {

  dynamicRenderSequenceNumber = 0

  /** we used static: true option to tell angular compiler that this element reference will be available
   * before the view is initialized. This is useful when we want to access the template reference in the 
   * constructor or ngOnInit lifecycle hook. It was unnecessary to use it below but added as it's good
   * to know concept
   */
  @ViewChild('tpl', { static: true }) template!: TemplateRef<any>;

  /**
   * The read: ViewContainerRef option is essential when you want to dynamically render templates or 
   * components into a specific location in your layout. Without it, Angular would retrieve the default 
   * reference (e.g., ElementRef), which is not suitable for dynamic view insertion. If I don't provide
   * the read option, Angular will pick elementRef instead which do not provide the createEmbeddedView 
   * method. So the call will fail with an error.
   */
  @ViewChild('dynamicContent', { read: ViewContainerRef, static: true }) dynamicContent!: ViewContainerRef;
  
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

  renderPlaceholderTemplate() {
    const templateContext:{ message: string, viewRef: EmbeddedViewRef<any> | null, dynamicRenderSequenceNumber: number | null } = {
      message: 'This is rendered dynamically in the layout!',
      viewRef: null,
      dynamicRenderSequenceNumber: null
    }
    templateContext.dynamicRenderSequenceNumber = this.dynamicRenderSequenceNumber++
    // Render the template dynamically in the placeholder
    templateContext.viewRef = this.dynamicContent.createEmbeddedView(this.template, templateContext);
  }

  clearPlaceholderTemplate() {
    // Clear all dynamically rendered views in the placeholder
    this.dynamicContent.clear();
  }

  // Remove only a specific render instead of last render
  clearSpecificRender(viewRef: EmbeddedViewRef<any>) {
    this.dynamicContent.remove(this.dynamicContent.indexOf(viewRef))
  }
  
}
