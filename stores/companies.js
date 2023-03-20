import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useCompany = defineStore('company', {

   state() {
      return {
         companies: [],
         company: {}
      }
   },
   
   actions: {
      async listCompanies(){
                  
         const data = await $fetch( 'https://rickandmortyapi.com/api/character', {
               method: 'GET',
         });
         
         this.companies = data.results.slice(0, 10);
         
          
          toast('Companias obtidas com sucesso!!', { position: toast.POSITION.BOTTOM_CENTER, transition: toast.TRANSITIONS.FLIP, type: toast.TYPE.SUCCESS });
                  
      },
      // post method
      async newCompany(){
         
         const data = await $fetch( 'https://qqd4z.mocklab.io/json', {
               method: 'POST',
               body: this.company
         });
         
         return console.log(data)
         
      },
      clearCompanies() {
         this.companies = []
      }
   },
   
   getters: {
      showCompanies() {
         return 'A listagem é essa: ' + this.companies
      }
   }
   
 })
 
 