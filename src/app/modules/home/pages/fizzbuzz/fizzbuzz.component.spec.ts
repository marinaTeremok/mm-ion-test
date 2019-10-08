import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render FizzBuzz coding challendge', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fb-container .title').textContent).toContain('FizzBuzz coding challendge');
  });

  it('should render UL', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-fizzbuzz').innerHTML).toContain('ul');
  });

  it('should render button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-fizzbuzz').innerHTML).toContain('button');
  });

  it('should render Start Fizz Buzz button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-fizzbuzz .fizzbuzz-start').textContent).toContain('Start Fizz Buzz');
  });

  it('should render Stop Fizz Buzz button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-fizzbuzz .fizzbuzz-stop').textContent).toContain('Stop Fizz Buzz');
  });
});
