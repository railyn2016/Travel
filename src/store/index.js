import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex)

//index一个文件开发
// let defaultCity = '成都'
// try { 
//   if (localStorage.city){
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default new Vuex.Store({
  state:state,
  mutations,
  getters:{
    doubleCity (state) {
      return state.city +' '+state.city
    }
  }
})
  //state:{
    //city:'成都'    简单开发一
    //city:localStorage.city || '成都'
    //city:defaultCity index一个文件开发

  //},
  // actions: {
  //   changeCity (ctx,city){
  //     //console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },//简化部分
  // mutations: {
  //   changeCity (state, city){
  //     state.city = city
  //     //localStorage.city = city  简单开发一
  //     try {  //index一个文件开发
  //       localStorage.city = city
  //     } catch (e) {}
  //   }
  // }
