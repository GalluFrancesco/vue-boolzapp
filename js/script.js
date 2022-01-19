new Vue({
    el:"#app",
    data:{
        currentIndex: 0,
        currentMessage:"",
        timer:null,
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        randomMessages:[
            "Non ho capito",
            "Al tuo timer mancano 3 ere geologiche",
            "Al momento non esiste nessun promemoria",
        ]
    },
    methods:{
        thisContact: function(i){
            this.currentIndex=i;
        },
        sendMessage: function(){
            //al all'invio del messaggio pusho un oggetto nella lista di messaggi
            //dell'utente con cui sto parlando
            this.contacts[this.currentIndex].messages.push({
                date: 'ora',
                text: this.currentMessage,
                status: 'sent'
            })

            //pulisco il date currentMessage e di conseguenza l'imput
            this.currentMessage="";

            //dopo 1 secondo dal push del messaggio inviato  
            //genero un messaggio random ricevuto
            this.timer=setTimeout(() => {
                this.autoAnswer();
            }, 1000)
        },
        autoAnswer: function(){
            const randomNumber=Math.round(Math.random() * (this.randomMessages.length - 0));

            this.contacts[this.currentIndex].messages.push({
                date: 'ora',
                text: this.randomMessages[randomNumber],
                status: 'received'
            })            
        }
    }
})