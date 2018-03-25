import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //newServerName = '';
  newServerContent = '';
  //@ViewChild(CockpitComponent) serverContentInput;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverContent: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverContent.value,
      serverContent: this.newServerContent
    });
  }
}
