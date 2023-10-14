import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'My Billing Payments POC'`, () => {
    expect(app.title).toEqual('My Billing Payments POC');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.product-title')?.textContent).toContain('My Billing Payments POC');
  });

  it('should navigate to home page on successfull login', inject([Router], (mockRouter: Router) => {
    const spy = spyOn(mockRouter, 'navigate').and.stub();
    app.goHome();

    expect(spy.calls.first().args[0]).toContain('/home');    
  }));
});
