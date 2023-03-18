<script setup lang="ts">
import HomeView from './views/HomeView.vue'
// import Info from './components/TheWelcome.vue'


</script>

<template>
  <div>
    <h1 class="title">VIA<b class="cep">CEP</b></h1>
    <div class="subT">
      <p class="subtitle">Informe abaixo o CEP desejado para efetuar a pesquisa</p>
    </div>
    <div>
      <HomeView />
    </div>
  </div>
</template>

<style scoped>
.cep {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(229, 255, 0);

}

.subT {
  display: flex;
  justify-content: center;

}

.subtitle {
  display: flex;
  justify-content: center;
  /* padding-bottom: 30px; */
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-transform: uppercase;
  color: rgb(75, 75, 75);
  background-color: rgb(29, 29, 29);
  width: 700px;
  padding: 20px;
  border-radius: 20px 20px 0 0;
}

.title {
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 60px;
  color: aliceblue;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

@media (max-width: 768px) {
  .cep {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(229, 255, 0);

  }

  .subT {
    display: flex;
    justify-content: center;

  }

  .subtitle {
    display: flex;
    justify-content: center;
    /* padding-bottom: 30px; */
    font-size: 70%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    color: rgb(75, 75, 75);
    background-color: rgb(29, 29, 29);
    width: 90%;
    padding: 20px;
    border-radius: 20px 20px 0 0;
  }

  .title {
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 60px;
    color: aliceblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  }
}
</style>
