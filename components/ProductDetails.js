    app.component('product-details', {
        props: {    //Здесь мы определяем реквизит "details" для компонента. Реквизиты позволяют передавать данные внутрь компонента. В данном случае, мы ожидаем, что реквизит "details" будет массивом (тип Array) и он является обязательным (required: true).
          details: {
            type: Array,
            required: true
          }
        },
        template:
        /*html*/
        `
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `
}
)





