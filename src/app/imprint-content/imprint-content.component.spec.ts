import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImprintContentComponent } from './imprint-content';

describe('ImprintContentComponent', () => {
  let component: ImprintContentComponent;
  let fixture: ComponentFixture<ImprintContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprintContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
