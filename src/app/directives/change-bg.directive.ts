import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isSelected: Boolean = false

  constructor(private ef: ElementRef, private render: Renderer2) { }

  @HostListener('click') answer() {
    this.render.setStyle(this.ef.nativeElement, 'background', 'green')
    this.render.setStyle(this.ef.nativeElement, 'color', 'white')
  }
  // 2px solid var(--primary-color)

}
