import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  //approach 1: using @Input and @Output
  // @Input({required: true}) size!:  {width:string, height:string};
  // @Output() sizeChange = new EventEmitter<{width:string, height:string}>();

  size = model.required<{width:string, height:string}>()

  onReset() {
    // approach 1: using @Input and @Output
    // this.sizeChange.emit({width:'100', height:'100'});

    // approach 2: using model
    this.size.update((value) => {
      value.width = '101';
      value.height = '101';
      return value;
    });
  }
}
