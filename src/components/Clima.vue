<template>
    <div>
    <div class="cloud" v-if="nuvem">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="160" fill="currentColor" class="bi bi-cloud-haze2 nu" viewBox="0 0 16 16" >
            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="160" fill="currentColor" class="bi bi-cloud-haze2 nu" viewBox="0 0 16 16">
            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="160" fill="currentColor" class="bi bi-cloud-haze2 nu" viewBox="0 0 16 16">
            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </div>


    <div class="sol" v-if="sol"></div>
        <div class="d-flex " v-if="chuva">
            <div class="chuva"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva"></div>
            <div class="chuva terceira"></div>
            <div class="chuva terceira"></div>
            <div class="chuva "></div>
            <div class="chuva terceira"></div>
            <div class="chuva "></div>
            <div class="chuva terceira"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva "></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
            <div class="chuva "></div>
            <div class="chuva "></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
            <div class="chuva "></div>
            <div class="chuva terceira"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva "></div>
            <div class="chuva "></div>
            <div class="chuva terceira"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
            <div class="chuva "></div>
            <div class="chuva "></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
            <div class="chuva segundaAnima"></div>
            <div class="chuva terceira"></div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="@/assets/jundiai.jpeg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Previsao do tempo</h5>
                <p class="card-text">Cidade: {{cidade.name}}</p>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="campoTemp" @click="pegarValor" >Temperatura:{{verValor}}</li>  
                <li class="list-group-item" >Umidade:{{tempo.humidity}}</li>
                <li class="list-group-item" v-for="(condicao,index) in descri" :key="index">{{descricao}}</li>

            </ul>
        </div>
    </div>    
</template>

<script>
    import api from '@/api'


    export default{
        name:'Clima',
        data() {
            return {
                cidade:[],
                tempo:[],
                descri:{},
                valorTemp:'',
                chuva:false,
                sol:false,
                nuvem:false

            }
        },
        methods:{
            pegarValor(e){
                const valorCampo =e.target.innerText;
                const somenteNumero =valorCampo.slice(12)
                const valorParaNumero =parseFloat(somenteNumero)
                this.valorTemp = valorParaNumero
                console.log(valorParaNumero)
                console.log(somenteNumero)
                console.log(e.target.innerText)
                
            }
        },
        mounted() {
            api.get('').then(response=>{
                this.cidade = response.data
                this.tempo = response.data.main
                this.descri = response.data.weather
                console.log(response.data.main)
                console.log(this.cidade)
                console.log(this.descri) 
            })


            
        },
        computed:{
            verValor(){
                return this.tempo.temp
            },
            descricao(){
                return this.descri[0].description
            }
        },
        watch:{
            tempo(){
                if ((this.descri[0].description==='nuvens dispersas') & ((parseFloat(this.tempo.temp)>20))){
                    this.sol = false
                    this.nuvem = true
             }
            },

        }

}



</script>
<style scoped>
    .chuva{
        width: 3px;
        background-color: rgb(97, 185, 207);
        height: 20px;
        margin-left: 5px;
        top: -200px;
        display: flex;
        z-index: 1;
        position: relative;
        animation: anima1 2s ease-in infinite;
        border-radius: 20px;
        border: 1px solid rgb(97, 185, 207);
    }
    @keyframes anima1{
        from{
            transform: translateY(100px);
        }
        to{
            transform: translateY(200px);
        }
    }
    .segundaAnima{
        animation: anima1 3s ease-in infinite ;
    }
    .terceira{
        animation: anima1 4s ease-in infinite;
    }
    .sol{
        width: 100px;
        height: 100px;
        background-color: yellow;
        opacity: .3;
        border-radius: 50%;
        box-shadow: 10px 10px 10px 10px yellow;
        border: 1px solid yellow;
        position:absolute;
        z-index: 1;
        top: 100px;
    }
    .nu{
        animation: anima-nuvem 2s infinite alternate;
    }
    @keyframes anima-nuvem  {
        from{
            transform: translateX(0);
        }
        to{
            transform: translateX(150px);
        }
        
    }
</style>