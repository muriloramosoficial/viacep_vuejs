<script lang="ts">
// defineProps<{
//   msg: string
// }>()
export default {

}
</script>

<template>
  <div>
    <div class="titleCEP">
      <h1 class="cepTitle">CEP</h1>
      <h1 class="cepNumber">87010-000</h1>
    </div>
    <div class="infoGlobal">
      <h3>AV. Cerro Azul, 300</h3><br />
      <h3>Zona 02</h3>
      <h3>Maringá</h3>/<h3>PR</h3>
      <h3>IBGE: 4115200</h3>
      <h3>DDD: 44</h3>
      <h3>SIAFI: 7691</h3>
    </div>
  </div>
</template>

<style>
.titleCEP {
  display: flex;
  justify-content: center;
  /* background-color: aliceblue; */
}

.cepTitle {
  background-color: rgb(26, 26, 26);
  padding: 20px;
  border-radius: 15px 0 0 15px;
}

.cepNumber {
  background-color: rgb(32, 32, 32);
  padding: 20px;
  border-radius: 0 15px 15px 0;
}

.infoGlobal {
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  padding: 20px;
  /* background-color: aliceblue; */
}
</style>
