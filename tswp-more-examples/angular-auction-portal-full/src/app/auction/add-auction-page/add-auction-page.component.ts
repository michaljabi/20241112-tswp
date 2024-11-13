import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';

@Component({
  templateUrl: './add-auction-page.component.html',
  styles: [
    `
      .form-field {
         width: 100%;
      }

      .btn-disabled {
         opacity: .5;
      }
    `
  ]
})
export class AddAuctionPageComponent  {

  imgId = 10;

  constructor(private auctionsService: AuctionsService, private snackBar: MatSnackBar) { }

  handleFormSubmit(form: NgForm): void {
    // console.dir(form);
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }


    // To nie jest rzutowanie !!! a asercja typu:
    const auctionItem: AuctionItem = form.value as AuctionItem;
    // Asercja typu === Zaufaj mi TS wiem co robię.
    auctionItem.imgUrl = 'https://picsum.photos/id/' + this.imgId + '/200/200';
    // console.log(auctionItem);
    this.auctionsService.add(auctionItem).subscribe({
        next: (auction: AuctionItem) => {
          console.log('Server response data:', auction);
          form.resetForm();
          this.imgId = 1;
        },
        error: (response: HttpErrorResponse) => {
          const { message = 'Brak połączenia' } = response.error;
          this.snackBar.open('Nie udało się dodać aukcji: ' + message)
        }
      });
  }

}
