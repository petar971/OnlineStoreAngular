import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendProductsComponent } from './recommend-products.component';

describe('RecommendProductsComponent', () => {
  let component: RecommendProductsComponent;
  let fixture: ComponentFixture<RecommendProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
