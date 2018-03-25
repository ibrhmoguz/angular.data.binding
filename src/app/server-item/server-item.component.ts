import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input, 
  ViewEncapsulation, 
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('Constructor called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called.');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called.');
  }

  ngDoCheck() {
    console.log('ngDoCheck called.');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called.');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called.');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called.');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called.');
  }
}
