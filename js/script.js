// Rifare l'esercizio della to do list argomento dell to-do list a piacere.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

const {createApp} = Vue

createApp({
    data(){
        return{
            // proprieta newTask all'inzio stringa vuota
            newtask: '',
            hasError: false,
            myList: [
                {
                    text: "Pulire la macchina",
                    done: false
                }, {
                    text: "Pagare le bollette",
                    done: false
                }, {
                    text: "Fare la spesa",
                    done: false
                }, {
                    text: "Fare gli esercizi",
                    done: true
                }
            ],
        }
    },
    methods:{
        addTask(){
            if(this.newtask.length >= 3 ){
                // unshift aggiungi all'inzio lista
                this.myList.unshift({text : this.newtask, done : false});
                this.hasError = false;
            }
            else{
                this.hasError = true;
            }
            this.newtask = '';
        },
        removeTask(index){
            this.myList.splice(index, 1);
        },
        doneTask(index){
            this.myList[index].done = !this.myList[index].done;
        },
    },
}).mount('#app');