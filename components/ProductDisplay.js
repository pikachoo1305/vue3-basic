app.component('product-display', {
  props: {
    shipping: {
      type: Boolean,
      required: true
    }
  },
  template: 
      /*html*/ 
      `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img 
              v-bind:src="variants[selectedVariant].image"
              :class="{ 'out-of-stock-img': !inStock }"
              :disabled="!inStock"
              />
            </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 0">В наличии ({{ inventory + ' шт ' }})</p>
            <p v-else>Закончилось</p>
            <product-price :variant="variants[selectedVariant]"></product-price>
            <p v-if="variants[selectedVariant].premium">Бесплатная доставка</p>
            <p v-else>2.99 руб</p>
            <product-details :details="details"></product-details>
            <div 
              v-for="(variant, index) in variants" 
              :key="variant.id" 
              @mouseover="updateVariant(index)"
              class="color-circle" 
              :style="{ backgroundColor: variant.color}"
              >
            </div>
            <button 
              class="button" 
              :class="{ disabledButton: !inStock }" 
              :disabled="!inStock" 
              @click="addToCart">
              Add to Cart
            </button>
            <button 
              class="button" 
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock" 
              @click="removeFromCart">
              Remove
            </button>
            <button 
              class="button" 
              :class="{ disabledButton: !inStock }" 
              :disabled="!inStock" 
              @click="addTenToCart">
                Add 10
            </button>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
          </div>
        </div>
      </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'E.A.',
        selectedVariant: 0,
        onSale: true,
        reviews: [],
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, price: 30, discount: 3, premium: true },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 30, price: 40, discount: 10, premium: false },
          { id: 2236, color: 'red', image: './assets/images/socks_red.jpg', quantity: 20, price: 70, discount: 0, premium: true },
        ]
        }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    addTenToCart() {
       this.$emit('add-ten-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateImage(index) {
          this.selectedVariant = index;
    },
    updateVariant(index) {
        this.selectedVariant = index 
        
      },
    addReview(review) {
        this.reviews.push(review)
    }  
},
computed: {
    title() {
        return this.brand + ' ' + this.product + (this.onSale ? ' is on sale' : '');
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity > 0;
    },
    
    inventory() {
        return this.variants[this.selectedVariant].quantity;
       
    },
   
          
}
}
)
