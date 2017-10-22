var IMC = (function(){
        var imc = function(){
            var nome = "";
            var peso = 0;
            var altura = 0;
        };
        imc.prototype.pegarValores = function() {
            var novoNome = document.querySelector("#inputNome");
            this.nome = novoNome.value;

            var novoPeso = document.querySelector("#peso");
            this.peso = parseInt(novoPeso.value);

            var novaAltura = document.querySelector("#altura");
            this.altura = parseFloat(novaAltura.value);
        }

        imc.prototype.inserirValores = function() {
            var tabela = document.querySelector("tbody");
            var tr = document.createElement("tr");
            var tdNome = document.createElement("td");
            var tdPeso = document.createElement('td');
            var tdAltura = document.createElement('td');
            var tdIMC = document.createElement('td');
            var tdCategoria = document.createElement('td');

            tdNome.innerText = this.nome;
            tdPeso.innerText = this.peso;
            tdAltura.innerText = this.altura;
            tdIMC.innerText = this.calcularIMC();
            tdCategoria.innerText = atribuirCategoria(this.calcularIMC());

            tr.appendChild(tdNome);
            tr.appendChild(tdAltura);
            tr.appendChild(tdPeso);
            tr.appendChild(tdIMC);
            tr.appendChild(tdCategoria);
            tabela.appendChild(tr);
        }

        imc.prototype.calcularIMC = function(){
                var qualquercoisa = this.peso / (this.altura * this.altura);
                qualquercoisa = qualquercoisa * 100;
                qualquercoisa = Math.round(qualquercoisa);
                qualquercoisa = qualquercoisa / 100
                return qualquercoisa;
        }

        function atribuirCategoria(aux) {
          if(aux < 17) {
            return 'Muito abaixo do peso';
          } else if (aux >= 17 && aux < 18.5) {
            return 'Abaixo do peso';
          } else if (aux >= 18.5 && aux < 25) {
            return 'Peso Ideal';
          } else if (aux >= 25 && aux < 30) {
            return 'Acima do Peso';
          } else if (aux >= 30 && aux < 35) {
            return 'Obesidade I';
          } else if (aux >= 35 && aux < 40) {
            return 'Obesidade II (Severa)';
          } else {
            return 'Obesidade III (Mórbida)';
          }
        }

        return imc;
    }
)();
