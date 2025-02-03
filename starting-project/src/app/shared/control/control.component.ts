import { Component, ElementRef, input, inject, ViewEncapsulation, ContentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: "control", '(click)': 'onClick()'}
})
export class ControlComponent {

label = input.required<string>()
private el = inject(ElementRef);
@ContentChild("input") private control?: ElementRef<HTMLInputElement|HTMLTextAreaElement> ;
onClick()
{
  console.log("onClick!")
  console.log(this.el)
  console.log(" ddd---" + this.control?.nativeElement.textContent)
  
}
}
