<template>
  <div id="app">

    <div class="container mt-5">

      <div class="text-center mx-auto p-3 rounded shadow my-5 title-screen">
        <h2>CRUD de produtos</h2>
      </div>

      <div class="row">

        <div class="col col-4 p-4 rounded bg-white shadow">
          <form class="product-data">
            <div class="form-group mb-2">
              <label>Produto</label>
              <input
                v-model="product.name"
                type="text"
                class="form-control"
                placeholder="..."
              />
            </div>

            <div class="form-group mb-2">
              <label>Descrição</label>
              <input
                v-model="product.desc"
                type="text"
                class="form-control"
                placeholder="..."
              />
            </div>

            <div class="form-group mb-2">
              <label>Preço</label>
              <input
                v-model="product.price"
                type="text"
                class="form-control"
                placeholder="0,00"
              />
            </div>

            <button
              @click="submit()"
              type="button"
              class="btn btn-primary">
              {{create ? 'salvar' : 'atualizar'}}
            </button>
          </form>
        </div>

        <div class="col col-8">
          <div class="text-center">
            <h4 class="rounded shadow p-3 bg-white">Lista de produtos</h4>
          </div>

          <button @click="getProducts()">buscar</button>
          <table class="table table-striped">
              <thead>
                <tr>
                  <th class="bg-white border-0 rounded" scope="col">produto</th>
                  <th class="bg-white border-0 rounded" scope="col">descrição</th>
                  <th class="bg-white border-0 rounded" scope="col">preço</th>
                  <th class="bg-white border-0 rounded" scope="col">ação</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product._id">
                  <td>{{product.name}}</td>
                  <td>{{product.desc}}</td>
                  <td>R$ {{product.price}}</td>
                  <td>
                    <button @click="destroy(product._id)" class="btn btn-danger btn-sm me-1">apagar</button>
                    <button @click="edit(product._id)" class="btn btn-primary btn-sm">atualizar</button>
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
          _id: '',
          name: '',
          desc: '',
          price: 0
        },

        products: []
      }
    },

    methods: {

      submit()
      {
        if (this.create === true)
        {
          let product = {
            name: this.product.name,
            desc: this.product.desc,
            price: this.product.price
          }

          axios.post('http://localhost:3030/product', product)
          .then(response => {
            console.log(response)
            this.resetForm()
          })
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
      },

      resetForm(create = true)
      {

        this.product._id = ''
        this.product.name = ''
        this.product.desc = ''
        this.product.pricee = ''

        this.create = create
      }
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*
{
  font-family: 'Raleway', sans-serif;
}

body
{
  background-color: #eaeaea !important;
}

.title-screen
{
  /* max-width: 1143px; */
  background-color: #fff;
}

</style>
