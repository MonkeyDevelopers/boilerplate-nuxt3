export const useCounter = defineStore('counter', {

  state() {
    return {
      name: '',
      names: []
    }
  },
  
  actions: {
    updateName(name) {
      this.names.push(name)
    },
    limparNomes() {
      this.names = []
    }
  },
  
  getters: {
    showNames() {
      return 'A lista de nome completa é: ' + this.names
    }
  }
  
})

