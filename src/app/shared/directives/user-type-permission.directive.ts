import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[userTypePermission]',
  standalone: true,
})
export class UserRoleDirective {
  private types: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
    this.types = this.authService.getUserRole();
  }

  @Input() set userTypePermission(type: string[]) {
    type.push('admin');
    this.updateView(type);
  }

  private updateView(types: string[]) {
    this.viewContainer.clear();
    if (types.some((permission) => this.types.includes(permission))) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
