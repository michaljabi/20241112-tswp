import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionItem } from '../auction-item';

import { AuctionCardComponent } from './auction-card.component';

describe('AuctionCardComponent', () => {
  let component: AuctionCardComponent;
  let fixture: ComponentFixture<AuctionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionCardComponent ],
      imports: [],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should 2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('should present valid auction Title', () => {

    // Arrange
    component.auction = {title: 'Hello Auction'} as AuctionItem;
    fixture.detectChanges();

    // Act
    const header = fixture.nativeElement.querySelector('.card-header');

    // Assert
    expect(header.textContent).toBe('Hello Auction');
  });


  it('should emit event when button clicked - GOOD IDEA - testowanie zachowania (użycie buttona tak jakby to zrobił User)', () => {

    // Arrange
    const addToCartSpy = spyOn(component.addToCart, 'emit');
    component.auction = {title: 'Other Title'} as AuctionItem;
    fixture.detectChanges();

    // Act
    const button = fixture.nativeElement.querySelector('.btn');
    button.click();

    // Assert
    expect(addToCartSpy).toHaveBeenCalledWith({title: 'Other Title'} as AuctionItem);
  });

  it('should emit event when button clicked - ZŁY POMYSŁ - bo testuje szczegół implementacji !!!!', () => {

    // Arrange
    const addToCartSpy = spyOn(component.addToCart, 'emit');
    component.auction = {title: 'Other Title2'} as AuctionItem;

    // Act
    component.handleAddToCart();

    // Assert
    expect(addToCartSpy).toHaveBeenCalledWith({title: 'Other Title2'} as AuctionItem);
  });
});
