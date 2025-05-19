import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular_template';

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

  clearTemplate() {
    // Clear all dynamically rendered views
    this.viewContainerRef.clear();
  }

  renderPlaceholderTemplate() {
    // Render the template dynamically in the placeholder
    this.dynamicContent.createEmbeddedView(this.template, {
      message: 'This is rendered dynamically in the layout!'
    });
  }

  clearPlaceholderTemplate() {
    // Clear all dynamically rendered views in the placeholder
    this.dynamicContent.clear();
  }
  
}
