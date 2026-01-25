import { Component } from '@angular/core';

@Component({
  selector: 'app-donnation',
  templateUrl: './donnation.component.html',
  styleUrl: './donnation.component.css'
})
export class DonnationComponent {

  // Méthode sélectionnée
  selectedPayment: string | null = null;

  // Données du formulaire
  donationData = {
    amount: null,
    name: '',
    email: '',
    phone: ''
  };

  // Sélection du moyen de paiement
  selectPayment(method: string) {
    this.selectedPayment = method;
  }

  // Soumission
  submitDonation() {
    if (!this.selectedPayment) {
      alert('Veuillez choisir un moyen de paiement');
      return;
    }

    console.log('Moyen de paiement :', this.selectedPayment);
    console.log('Données :', this.donationData);

    // ICI → appel API (Orange Money / M-Pesa / Stripe)
  }
}
