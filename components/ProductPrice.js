  app.component('product-price', {
    props: {   
      variant: {
        type: Object,
        required: true
      },
    },
    methods: {
      format(price) {
        return price + ' руб';
      }
    },
    computed: {
      finalPrice() {
        return this.variant.price - this.variant.discount;
      },
    },
    template: `
      <div v-if="variant.discount">
        {{ format(variant.price) + ' Цена со скидкой ' + format(finalPrice) }}
      </div>
      <div v-else>
        {{ format(variant.price) }}
      </div>
    `
  });
  