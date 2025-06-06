import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompComponent } from './skills.component';

describe('CoreCompComponent', () => {
  let component: CoreCompComponent;
  let fixture: ComponentFixture<CoreCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
