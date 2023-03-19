<script lang="ts">
import axios from 'axios';

interface InfoCep {
  cep: null;
  logradouro: null;
  complemento: null;
  bairro: null;
  localidade: null;
  uf: null;
  ibge: null;
  gia: null;
  ddd: null;
  siafi: null;
}

export default {
  data() {
    return {
      inputValue1: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
      inputValue5: '',
      inputValue6: '',
      inputValue7: '',
      inputValue8: '',
      error: null,
      timer: '',
      infoCep: {} as InfoCep,
      alert: {},
      status: {},
      cepVar: {},
      errorCep: false,
    }
  },
  created() {
    this.infoCep;
    this.alert;
  },
  methods: {
    buscarCEP() {
      const cep = `${this.inputValue1}${this.inputValue2}${this.inputValue3}${this.inputValue4}${this.inputValue5}${this.inputValue6}${this.inputValue7}${this.inputValue8}`;
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      if (cep.length == 8) {
        axios.get(url)
          .then(response => {
            this.errorCep = false;
            this.status = response.status;
            this.cepVar = cep.length;
            if (response.status == 200) {
              this.infoCep = response.data;
              console.log(response.status);
              if (this.infoCep.ddd == null) {
                this.errorCep = true;
              } else {
                console.log('erroooooooooooooooooooor')
              }

            } else {
              this.errorCep = true;
            }
          })
          .catch(error => {
            console.log('Erro ao buscar CEP:', error);
            console.log(error.response.status);
          });
      } else {
        this.cepVar = {};
        this.errorCep = true;
        console.log(`CEP inválido: ${this.infoCep} ${this.inputValue1} ${url}`);
      }
    }

  },
  // mounted() {
  //   const url = 'https://viacep.com.br/ws/';
  //     axios.get(`${url}${this.inputValue1}${this.inputValue2}${this.inputValue3}${this.inputValue4}${this.inputValue5}${this.inputValue6}${this.inputValue7}${this.inputValue8}/json/`)
  //       .then(response => {
  //         this.infoCep = response.data;
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
}

</script>

<template>
  <div class="container">
    <div class="inputs">
      <input v-model="inputValue1" type='number' v-bind:tabindex="1" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput1 = ''; this.value = ''; console.log($data.infoCep.cep)} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput1 = '';" autofocus />
      <input v-model="inputValue2" type='number' v-bind:tabindex="2" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput2 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput2 = '';" />
      <input v-model="inputValue3" type='number' v-bind:tabindex="3" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput3 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput3 = '';" />
      <input v-model="inputValue4" type='number' v-bind:tabindex="4" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput4 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput4 = '';" />
      <input v-model="inputValue5" type='number' v-bind:tabindex="5" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput5 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput5 = '';" />
      <input v-model="inputValue6" type='number' v-bind:tabindex="6" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput6 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput6 = '';" />
      <input v-model="inputValue7" type='number' v-bind:tabindex="7" v-bind:maxlength="1"
        onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput7 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};"
        onfocusin="this.valueInput7 = '';" />
      <input v-model="inputValue8" type='number' v-bind:tabindex="8" v-bind:maxlength="1"
        onkeydown="javascript: if(this.value === ''){if (event.key === 'Backspace') { var prevInput = this.previousElementSibling;  if (prevInput) { prevInput.focus(); }}} else {this.valueInput8 = ''}"
        oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);}"
        onfocusin="this.valueInput8 = '';" @input="buscarCEP" />
      <!-- <button v-if="inputValue != null">asdasdasd</button> -->
    </div>
    <div class="info" v-if="(cepVar == 8) && infoCep.ddd != null">
      <div class="infoContent" id="infoContent">
        <div>
          <div class="titleCEP">
            <h1 class="cepNumber">{{ infoCep.cep }}</h1>
          </div>
          <div class="infoGlobal">
            <h3>{{ infoCep.logradouro }}, {{ infoCep.complemento }}</h3>
            <h3>{{ infoCep.bairro }}</h3>
            <h3>{{ infoCep.localidade }}/{{ infoCep.uf }}</h3>
            <h3>IBGE: {{ infoCep.ibge }}</h3>
            <h3>DDD: {{ infoCep.ddd }}</h3>
            <h3>SIAFI: {{ infoCep.siafi }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="wait" v-else>
      <div v-if="(errorCep == true) && (infoCep.ddd == null)">
        <p class="errortxt">CEP NÃO ENCONTRADO. TENTE NOVAMENTE!</p>
        <!-- <v-progress-circular indeterminate color="red"></v-progress-circular> -->
      </div>
    </div>
  </div>
</template>


<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.waitxt {
  margin-bottom: 10px;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input {
  background-color: rgb(34, 34, 34) !important;
  width: 60px !important;
  height: 60px !important;
  padding: 20px !important;
  margin: 10px !important;
  border: 1px solid rgb(37, 37, 37) !important;
  border-radius: 30px !important;
  font-size: 30px !important;
  color: grey !important;
}

input:focus {
  box-shadow: none;
  outline: 0;
}

/* input:hover{
    background-color: rgb(43, 43, 43);
    box-shadow: rgb(245, 8, 8);
    
  } */
.searchBtn {
  background-color: rgb(34, 34, 34);
  width: 60px;
  height: 60px;
  padding: 20px;
  margin: 10px;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 30px;
  font-size: 30px;
  color: grey;
}

.searchBtn:hover {
  background-color: rgb(54, 54, 54);
  transition: color 0.3s, background-color 0.5s;
  cursor: pointer;
}

.info {
  display: flex;
  justify-content: center;
  width: 90%;
}

.infoContent {
  background-color: rgb(34, 34, 34);
  text-align: center;
  width: 430px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 15px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

}

.inputs {
  text-align: center;
  width: 700px;
  background-color: rgb(43, 43, 43);
  border-radius: 0 0 20px 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(168, 168, 168);
  /* background-color: red; */
}

.wait {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 30px;
  margin-top: 30px;
}

.errortxt {
  color: red;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .infoContent {
    background-color: rgb(34, 34, 34);
    text-align: center;
    width: 90%;
    padding: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 15px;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .inputs {
    text-align: center;
    width: 90%;
    background-color: rgb(43, 43, 43);
    border-radius: 0 0 20px 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(168, 168, 168);
    /* background-color: red; */
  }

  .infoContent {
    background-color: rgb(34, 34, 34);
    text-align: center;
    width: 200%;
    padding: 20px;
    margin-top: 30px;
    border-radius: 15px;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;

  }
}
</style>