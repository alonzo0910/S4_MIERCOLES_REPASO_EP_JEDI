var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jedi = /** @class */ (function () {
    function Jedi() {
        this.estado = new Iniciado(this);
    }
    Jedi.prototype.evaluar = function () {
        this.estado.evaluar();
    };
    return Jedi;
}());
var EstadoJedi = /** @class */ (function () {
    function EstadoJedi(jedi) {
        this.jedi = jedi;
    }
    return EstadoJedi;
}());
var Iniciado = /** @class */ (function (_super) {
    __extends(Iniciado, _super);
    function Iniciado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Iniciado.prototype.evaluar = function () {
        if (this.jedi.nivelFuerza > 100 && this.jedi.cantMisiones > 10) {
            this.jedi.estado = new Padawan(this.jedi);
        }
        else if (this.jedi.nivelFuerza < -100) {
            this.jedi.estado = new Observado(this.jedi);
        }
    };
    Iniciado.prototype.toString = function () {
        return "Iniciado";
    };
    return Iniciado;
}(EstadoJedi));
var Padawan = /** @class */ (function (_super) {
    __extends(Padawan, _super);
    function Padawan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Padawan.prototype.evaluar = function () {
        if (this.jedi.nivelFuerza > 200 && this.jedi.cantMisiones > 30) {
            this.jedi.estado = new Caballero(this.jedi);
        }
        else if (this.jedi.nivelFuerza < -100) {
            this.jedi.estado = new Observado(this.jedi);
        }
    };
    Padawan.prototype.toString = function () {
        return "Padawan";
    };
    return Padawan;
}(EstadoJedi));
var Caballero = /** @class */ (function (_super) {
    __extends(Caballero, _super);
    function Caballero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Caballero.prototype.evaluar = function () {
        if (this.jedi.nivelFuerza > 500 && this.jedi.cantMisiones > 50) {
            this.jedi.estado = new Maestro(this.jedi);
        }
        else if (this.jedi.nivelFuerza < -100) {
            this.jedi.estado = new Observado(this.jedi);
        }
    };
    Caballero.prototype.toString = function () {
        return "Caballero";
    };
    return Caballero;
}(EstadoJedi));
var Maestro = /** @class */ (function (_super) {
    __extends(Maestro, _super);
    function Maestro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maestro.prototype.evaluar = function () {
        if (this.jedi.nivelFuerza < -100) {
            this.jedi.estado = new Observado(this.jedi);
        }
    };
    Maestro.prototype.toString = function () {
        return "Maestro";
    };
    return Maestro;
}(EstadoJedi));
var Observado = /** @class */ (function (_super) {
    __extends(Observado, _super);
    function Observado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observado.prototype.evaluar = function () {
        if (this.jedi.nivelFuerza < 0) {
            this.jedi.estado = new Expulsado(this.jedi);
        }
        else {
            this.jedi.estado = new Iniciado(this.jedi);
        }
    };
    Observado.prototype.toString = function () {
        return "Observado";
    };
    return Observado;
}(EstadoJedi));
var Expulsado = /** @class */ (function (_super) {
    __extends(Expulsado, _super);
    function Expulsado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Expulsado.prototype.evaluar = function () { };
    Expulsado.prototype.toString = function () {
        return "Expulsado";
    };
    return Expulsado;
}(EstadoJedi));
//se instancia una sola vez, se podria hacer sigleton <-- a una clase
var Evaluador = /** @class */ (function () {
    function Evaluador() {
    } //para que nadie pueda crear otra instancia, solo acceder a getInstance 
    //se quiere devolver la instancia anterior, la cual es de clase por el static
    Evaluador.getInstance = function () {
        if (Evaluador.instance == null) {
            Evaluador.instance = new Evaluador();
        }
        return Evaluador.instance;
    };
    Evaluador.prototype.evaluarAscensos = function (jedi) {
        jedi.evaluar();
    };
    Evaluador.instance = null; //private para que no puedan acceder fuera de esta clase a la propiedad instance
    return Evaluador;
}());
var mainJediOrder = function () {
    var pepe = new Jedi();
    pepe.cantMisiones = 23;
    pepe.nivelFuerza = 300;
    pepe.evaluar();
    var evaluador = Evaluador.getInstance(); //se instancia una sola vez, se podria hacer sigleton
    evaluador.evaluarAscensos(pepe);
    console.log("El estado de Pepe es : " + pepe.estado.toString());
};
mainJediOrder();
