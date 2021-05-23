<template>
  <div id="app">
    <div class="container mt-5 border border-dark">
      <div class="row">
        <div class="col col-6 border border-danger">
          <form class="p-5 product-data">
            <input type="text" name="product_name" class="form-control mb-1" placeholder="Nome">
            <input type="text" name="product_desc" class="form-control mb-1" placeholder="Descrição">
            <input type="text" name="product_price" class="form-control mb-1" placeholder="Preço">
            <button type="button" class="btn btn-primary btn-block">salvar</button>
          </form>
        </div>
        <div class="col col-6 border border-danger">
          2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
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
}

</style>
