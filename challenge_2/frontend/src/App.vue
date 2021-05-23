<template>
  <div id="app">
    <div class="text-center mt-5">
      <h1>CRUD de produtos</h1>
    </div>

    <div class="container mt-5">
      <div class="row">

        <div class="col col-4">
          <form class="p-1 product-data pt-5">
            <input type="text" name="product_name" class="form-control mb-1" placeholder="Nome">
            <input type="text" name="product_desc" class="form-control mb-1" placeholder="Descrição">
            <input type="text" name="product_price" class="form-control mb-3" placeholder="Preço">
            <button type="button" class="btn btn-primary btn-block">salvar</button>
          </form>
        </div>

        <div class="col col-8">
          <div class="text-center">
            <h4>lista de produtos</h4>
          </div>

          <table class="table table-primary table-striped">
              <thead>
                <tr>
                  <th scope="col">produto</th>
                  <th scope="col">descrição</th>
                  <th scope="col">preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Feijão</td>
                  <td>Feijão de minas</td>
                  <td>R$ 15,00</td>
                </tr>
              </tbody>
            </table>
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
  font-weight: 600;
  font-size: 15px
}

</style>
