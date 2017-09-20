import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  private title: string = 'Angular Example';
  private titleService: Title;

  public constructor(titleService: Title) {
    this.titleService = titleService;
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public currentYear(): number {
    return new Date().getFullYear();
  }
}
