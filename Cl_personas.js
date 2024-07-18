export default class cl_personas{
    constructor(nombre,edad){
        this._nombre = n;
        this._edad = e;
    }

    set nombre(n){
        this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set edad(e){
        this._edad = e;
    }

    get edad(){
        return this._edad;
    }
}