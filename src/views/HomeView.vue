<script lang="ts">
// import InfoContent from '../components/HelloWorld.vue'
import axios from 'axios';
import type { InferCustomEventPayload } from 'vite/types/customEvent';

interface InfoCep {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        ibge: string;
        gia: string;
        ddd: string;
        siafi: string;
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
      timer: '',
      infoCep: {} as InfoCep,
    }
  },
  created() {
    this.infoCep;
    this.inputValue1;
  },
  methods: {
    buscarCEP() {
  if (this.inputValue1 && this.inputValue2 && this.inputValue3 && this.inputValue4 && this.inputValue5 && this.inputValue6 && this.inputValue7 && this.inputValue8) {
    const cep = `${this.inputValue1}${this.inputValue2}${this.inputValue3}${this.inputValue4}${this.inputValue5}${this.inputValue6}${this.inputValue7}${this.inputValue8}`;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    axios.get(url)
      .then(response => {
        this.infoCep = response.data;
      })
      .catch(error => {
        console.log('Erro ao buscar CEP:', error);
      });
  } else {
    console.log(`CEP inválido: ${this.infoCep.cep}`);
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

// var wait = true;

// // Espera 10 segundos antes de exibir a div
// setTimeout(function() {
//     document.getElementById("infoContent").style.display = "block";
// }, 10000);
</script>

<template>
  <div>
    <div class="container">
      <input v-model="inputValue1" type='number' v-bind:tabindex="1" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput1 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; console.log(this.value); if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput1 = '';" autofocus/>
      <input v-model="inputValue2" type='number' v-bind:tabindex="2" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput2 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput2 = '';" />
      <input v-model="inputValue3" type='number' v-bind:tabindex="3" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput3 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput3 = '';" />
      <input v-model="inputValue4" type='number' v-bind:tabindex="4" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput4 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput4 = '';" />
      <input v-model="inputValue5" type='number' v-bind:tabindex="5" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput5 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput5 = '';" />
      <input v-model="inputValue6" type='number' v-bind:tabindex="6" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput6 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput6 = '';" />
      <input v-model="inputValue7" type='number' v-bind:tabindex="7" v-bind:maxlength="1" onkeydown="if (event.key === 'Backspace') { var prevInput = this.previousElementSibling; if(this.value != ''){this.valueInput7 = ''; this.value = '';} if (prevInput) { prevInput.focus(); } }" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);} if(this.value != '') {var nextInput = this.nextElementSibling; if (nextInput) { nextInput.focus(); }};" onfocusin="this.valueInput7 = '';" />
      <input v-model="inputValue8" type='number' v-bind:tabindex="8" v-bind:maxlength="1" onkeydown="javascript: if(this.value === ''){if (event.key === 'Backspace') { var prevInput = this.previousElementSibling;  if (prevInput) { prevInput.focus(); }}} else {this.value = ''; this.valueInput8 = ''}" oninput="javascript: if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength);}" onfocusin="this.valueInput8 = ''; this.value = '';" @input="buscarCEP"/>
      <!-- <button v-if="inputValue != null">asdasdasd</button> -->
    </div>
    <div class="info" v-if="inputValue8 != ''" delay>
      <div class="infoContent" id="infoContent"> 
        <div>
        <div class="titleCEP">
          <h1 class="cepNumber">{{infoCep.cep}}</h1>
        </div>
        <div class="infoGlobal">
          <h3>{{ infoCep.logradouro }}, {{ infoCep.complemento }}</h3>
          <h3>{{ infoCep.bairro }}</h3>
          <h3>{{ infoCep.localidade }}/{{infoCep.uf}}</h3>
          <h3>IBGE: {{ infoCep.ibge }}</h3> 
          <h3>DDD: {{infoCep.ddd}}</h3>
          <h3>SIAFI: {{infoCep.siafi}}</h3>
        </div>
        </div>
      </div>
    </div>
    <div class="wait" v-else>
      <div>
        <p class="waitxt">Aguardando CEP...</p>
        <v-progress-circular indeterminate color="red"></v-progress-circular>
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

  .waitxt{
    margin-bottom: 10px;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  input{
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

  input:focus{
    box-shadow: none;
    outline: 0;
  }

  /* input:hover{
    background-color: rgb(43, 43, 43);
    box-shadow: rgb(245, 8, 8);
    
  } */
  .searchBtn{
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
  .searchBtn:hover{
    background-color: rgb(54, 54, 54);
    transition: color 0.3s, background-color 0.5s;
    cursor: pointer;
  }
  .info{
    display: flex;
    justify-content: center;
  }
  .infoContent{
    background-color: rgb(34, 34, 34);
    text-align: center;
    width: 430px;
    padding: 20px;
    margin-top: 30px;
    border-radius: 15px;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;

  }
  .container{
    display: flex;
    justify-content: center;
  }
  .wait{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 30px;
    margin-top: 60px;
  }
</style>