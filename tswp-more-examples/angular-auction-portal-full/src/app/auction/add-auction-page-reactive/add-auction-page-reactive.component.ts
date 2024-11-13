import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

@Component({
  selector: 'app-add-auction-page-reactive',
  templateUrl: './add-auction-page-reactive.component.html',
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
export class AddAuctionPageReactiveComponent {

  auctionForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    price: [undefined, Validators.required],
    imgUrl: [10, Validators.required],
    description: [''],
  })

  constructor(private fb: FormBuilder, private auctionsService: AuctionsService, private snackBar: MatSnackBar) { }

  handleFormSubmit(): void {
    // console.dir(form);
    if (this.auctionForm.invalid) {
      this.auctionForm.markAllAsTouched();
      return;
    }


    // To nie jest rzutowanie !!! a asercja typu:
    const auctionItem: AuctionItem = this.auctionForm.value as AuctionItem;
    // Asercja typu === Zaufaj mi TS wiem co robię.
    auctionItem.imgUrl = this.imagePreview;
    // console.log(auctionItem);
    this.auctionsService.add(auctionItem).subscribe({
      next: (auction: AuctionItem) => {
        console.log('Server response data:', auction);
        this.auctionForm.reset({imgUrl: 10});
      },
      error: (response: HttpErrorResponse) => {
        const { message = 'Brak połączenia' } = response.error;
        this.snackBar.open('Nie udało się dodać aukcji: ' + message)
      }
    });
  }

  get imagePreview() {
    return 'https://picsum.photos/id/'  + this.auctionForm.value.imgUrl + '/600/600'
  }

  get titleErrors() {
    const errors: string[] = [];
    const {required, minlength} = this.auctionForm.get('title')?.errors || {};
    required && errors.push('To pole jest wymagane');
    minlength && errors.push(`Pole powinno mieć min. ${minlength.requiredLength} znaki`);

    return errors.join(', ')
  }
}
