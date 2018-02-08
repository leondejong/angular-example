import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { CoreModule} from '../core/core.module';
import { SharedModule} from '../shared/shared.module';
import { FeatureModule} from '../feature/feature.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RoutingModule,
        CoreModule,
        SharedModule,
        FeatureModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have test property`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.test).toEqual('12');
  }));

  it('should render test property', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.test').textContent).toContain('123');
  }));
});
