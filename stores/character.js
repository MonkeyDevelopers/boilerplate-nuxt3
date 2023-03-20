import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useCharacter = defineStore('character', {

   state() {
      return {
         characters: [],
         character: {}
      }
   },

   actions: {
      async listCharacter() {
         const page = Math.floor(Math.random() * 42) + 1;
         const data = await $fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
            method: 'GET',
         });

         this.characters = data.results.slice(0, 20);

         toast('Characters obtidos com sucesso!!', { position: toast.POSITION.BOTTOM_CENTER, transition: toast.TRANSITIONS.FLIP, type: toast.TYPE.SUCCESS });

      },
      // post method
      async newCharacter() {

         const data = await $fetch('https://qqd4z.mocklab.io/json', {
            method: 'POST',
            body: this.character
         });

         return console.log(data)

      },
      clearCharacters() {
         this.characters = []
      }
   },

   getters: {
      showCharacters() {
         return 'A listagem é essa: ' + this.characters
      }
   }

})

