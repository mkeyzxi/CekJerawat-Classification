import '../../components/faq-item.js';

export default class FaqPage {
  constructor(faqData) {
    this.faqData = faqData;
  }

  render() {
    return `
      <section class="max-w-3xl mx-auto mt-18 p-4 space-y-2">
         <h2 class="text-center text-[#FF90BB] text-xl sm:text-2xl font-bold mb-8 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
        Pendapat <span class="text-[#8ACCD5] font-semibold">Pengguna</span> Kami
      </h2>
        ${this.faqData
          .map(
            (faq) => `
              <faq-item question="${faq.question}" answer="${faq.answer}"></faq-item>
            `
          )
          .join('')}
      </section>
    `;
  }
}
