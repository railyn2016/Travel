<template>
<div>
  <city-header></city-header>
  <city-search :cities="cities"></city-search>
  <city-list 
  :cities="cities" 
  :hot="hotCities"
  :letter="letter"></city-list>
  <city-alphabet 
  :cities="cities"
  @change="handleLetterChange"></city-alphabet>
</div>
</template>

<script>
import axios from 'axios'
import cityHeader from "./components/Header"
import citySearch from "./components/Search"
import cityList from "./components/List"
import cityAlphabet from "./components/Alphabet"
export default {
  name:"city",
  components:{
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data (){
    return{
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo (){
      axios.get('./api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res){
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter){
      //console.log(letter)
      this.letter=letter
    }
  },
    mounted (){
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped>

</style>

