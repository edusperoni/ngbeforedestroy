import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, AfterViewInit, OnDestroy  {
  @ViewChild('vc', { read: ViewContainerRef, static: false }) vc: ViewContainerRef;
  @ViewChild('name', { read: TemplateRef, static: false }) templ: TemplateRef<any>;

  first = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.templ);
  }

  ngOnDestroy() {
    if (!this.first) { this.vc.detach(0); }
    this.first = true;
    console.log('toggle ondestroy');
  }

}
