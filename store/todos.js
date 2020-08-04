import Vue from 'vue';
import Vuex from 'vuex';
export const state = () => ({
    list: [],
    counter: 3,
  })
  
  export const mutations = {
    add(state, text) {
      state.list.push({
        text,
        done: false
      })
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    },
    increment(state,mydata){
        state.counter  = state.counter * mydata;
    },
    by15(state){
        state.counter  = state.counter / 4;
    }
  }
 export const actions = {
    passPara:({commit} , mydata)=>{
        commit('increment' , mydata)
    }
 }
  export const getters = {

  }