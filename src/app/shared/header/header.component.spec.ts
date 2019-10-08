import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Chart Base', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header-item').textContent).toContain('Chart Base');
  });

  it('should render UL', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-div').innerHTML).toContain('ul');
  });

  it('should render img', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-div ul li').innerHTML).toContain('img');
  });
});
