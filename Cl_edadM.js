export default class Cl_edadM{
    constructor(){
            this.contadormujeres = 0;
            this.edadmayor = 0;
            this.contadormujeresM = 0;
            this.acumuladorEdad = 0;
            this.contadorpersonas = 0;
            }

            procesarPersonas(p){
                this.acumuladorEdad += e.edad;
                this.contadormujeresM++;
                this.contadorpersonas++;
                
                if(e.edad> this.edadmayor){
                    this.edadmayor = p.edad;
                    this.contadormujeresM = p.mujeres;

            }
              if (p.edad == "M"){
                this.contadormujeres++;
                if(p.edad > 18 ){
                    this.contadormujeresM++;

                }
              }
            edadpromedio();
                return this.acumuladorEdad / this.contadorpersonas;
             }
               
            edadmayorentreM(){
                return this.edadmayor
             }
            }
        
      
