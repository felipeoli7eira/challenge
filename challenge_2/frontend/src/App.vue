<template>
  <div id="app">
    <div class="text-center mt-5">
      <h1>CRUD de produtos</h1>
    </div>

    <div class="container mt-5">
      <div class="row">

        <div class="col col-4">
          <form class="p-1 product-data pt-5">
            <input v-model="product.name" type="text" name="product_name" class="form-control mb-1" placeholder="Nome">
            <input v-model="product.desc" type="text" name="product_desc" class="form-control mb-1" placeholder="Descrição">
            <input v-model="product.price" type="text" name="product_price" class="form-control mb-3" placeholder="Preço">
            <button @click="submit()" type="button" class="btn btn-primary btn-block">{{create ? 'salvar' : 'atualizar'}}</button>
          </form>
        </div>

        <div class="col col-8">
          <div class="text-center">
            <h4>lista de produtos</h4>
          </div>

          <button @click="getProducts()">buscar</button>
          <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">produto</th>
                  <th scope="col">descrição</th>
                  <th scope="col">preço</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product._id">
                  <td>{{product.name}}</td>
                  <td>{{product.desc}}</td>
                  <td>R$ {{product.price}}</td>
                  <td>
                    <button @click="destroy(product._id)" class="btn btn-danger btn-sm">deletar</button>
                    <button @click="edit(product._id)" class="btn btn-secondary btn-sm">editar</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        create: true,
        product: {
          name: '',
          desc: '',
          price: 0,
          _id: ''
        },
        products: []
      }
    },

    methods: {

      submit()
      {
        if (this.create === true) {
          axios.post('http://localhost:3030/product')
          .then(response => console.log(response))
          .catch(err => console.log(err))
        }
        else {
          axios.put('http://localhost:3030/product/' + this.product._id, { name: this.product.name, desc: this.product.desc, price: this.product.price })
          .then(response => {
            console.log(response)

            this.create = true
            this.product.name = ''
            this.product.desc = ''
            this.product.price = ''
            this.product._id = ''
          })
          .catch(err => console.log(err))
        }
      },

      getProducts()
      {
        axios.get('http://localhost:3030/products').then(response => {
          this.products = response.data.data
        })
        .catch(err => console.log(err))
      },

      destroy(id)
      {
        axios.delete('http://localhost:3030/product/' + id).then(response => {
          console.log(response)
          this.getProducts()
        }).catch(err => console.log(err))
      },

      edit(id)
      {
        this.create = false

        let productFroEdit = this.products.filter(product => product._id == id)

        this.product = productFroEdit [0]
        console.log(this.product)
      }
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

*
{
  font-family: 'Noto Sans JP', sans-serif !important;
}

body
{
  background-color: #eaeaea !important;
}

form.product-data button
{
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px
}

</style>
