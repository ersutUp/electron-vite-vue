import { defineStore, StoreDefinition } from "pinia"
import { reactive } from "vue"

let userStoreInstantiate = null;

export interface State {
  user: UserInfo;
}

export interface UserInfo {
  name: string,
  age: number
}

export const useUserStore = defineStore("list", () => {

  const user: UserInfo = reactive({
    name: "",
    age: 0
  })

  const ersut = () => {
    user.age = 28;
    user.name = "ersut"
  }

  return { user, ersut }
})
// export const userStore = defineStore("list", {

//   state: (): State => {
//     return {
//       user: { name: "", age: 0 }
//     }
//   },
//   actions:{
//     ersut(){
//       this.user.age = 28;
//       this.user.name = "ersut"
//     }
//   }
// })