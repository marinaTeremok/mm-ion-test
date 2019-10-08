import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialComponent } from './factorial.component';

describe('FactorialComponent', () => {
  let component: FactorialComponent;
  let fixture: ComponentFixture<FactorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Find the Factorail coding challendge', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fact-container .title').textContent).toContain('Find the Factorail coding challendge');
  });

  it('should render input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.inner-factorial').innerHTML).toContain('input');
  });

});
