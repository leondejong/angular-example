import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'ex-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [Title]
})
export class AppComponent {
	public static readonly title: string = 'Angular2 Example';

	private titleService: Title;

	public constructor(titleService: Title) {
		this.titleService = titleService;
		this.setTitle(AppComponent.title);
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
