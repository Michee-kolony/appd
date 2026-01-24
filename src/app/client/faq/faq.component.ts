import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: "Quelle est la mission principale de notre ONG ?",
      answer: "Notre mission est d'apporter une assistance permanente aux personnes défavorisées et vulnérables dans nos communautés.",
      open: false
    },
    {
      question: "Comment puis-je devenir bénévole ?",
      answer: "Vous pouvez remplir notre formulaire de bénévolat en ligne et notre équipe vous contactera pour les prochaines étapes.",
      open: false
    },
    {
      question: "Comment puis-je faire un don ?",
      answer: "Les dons peuvent être faits via notre site web en toute sécurité ou par virement bancaire à notre compte officiel.",
      open: false
    },
    {
      question: "Quels projets notre ONG réalise-t-elle actuellement ?",
      answer: "Nous réalisons des projets dans l'éducation, la santé, l'assainissement et le soutien aux familles vulnérables.",
      open: false
    },
    {
      question: "Puis-je visiter un centre de notre ONG ?",
      answer: "Oui, nous accueillons les visites sur rendez-vous pour mieux comprendre notre travail et nos activités sur le terrain.",
      open: false
    },
    {
      question: "Comment puis-je suivre nos actualités et événements ?",
      answer: "Abonnez-vous à notre newsletter et suivez-nous sur nos réseaux sociaux pour rester informé des activités et projets.",
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
