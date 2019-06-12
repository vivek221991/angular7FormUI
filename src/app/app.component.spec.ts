import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let e1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);

      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      e1= de.nativeElement;

    });
  }));

  it('should set submit to be true', async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges()
    spyOn(comp, 'onSubmit');
    e1 = fixture.debugElement.query(By.css('button')).nativeElement;
    e1.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(1);
  }));

  it('form should be inValid', async(() => {
   comp.registerForm.controls['firstName'].setValue('');
   comp.registerForm.controls['email'].setValue('');
   comp.registerForm.controls['password'].setValue('');
    expect(comp.registerForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    comp.registerForm.controls['firstName'].setValue('vivek');
    comp.registerForm.controls['email'].setValue('vivek221991@gmail.com');
    comp.registerForm.controls['password'].setValue('admin@123');
     expect(comp.registerForm.valid).toBeTruthy();
   }));

});
