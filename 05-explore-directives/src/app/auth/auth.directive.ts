import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  //structured directive with input alias

  userType = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService);
  //injecting TemplateRef and ViewContainerRef to manipulate the DOM. its very important. TemplateRef gives us access to the template that this directive is applied to, and ViewContainerRef allows us to create or clear views based on that template.
  
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
