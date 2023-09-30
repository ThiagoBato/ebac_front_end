    <script setup>
        import { reactive } from 'vue';
        
        const operatorState = reactive({
            operatorValue: 'sum',
            result: null
        }) 

        function calculate(e) {
            
            const num1 = parseFloat(document.getElementById('number1').value);
            const num2 = parseFloat(document.getElementById('number2').value);

            operatorState.operatorValue = e.target.value;

            if (!isNaN(num1) && !isNaN(num2)) {
                switch(operatorState.operatorValue){
                    case 'sum': {
                        operatorState.result = num1 + num2;
                        break;
                    }
                    case 'subtraction': {
                        operatorState.result = num1 - num2;
                        break
                    }
                    case 'multiplication': {
                        operatorState.result = num1 * num2;
                        break
                    }
                    case 'division':
                        if (num2 !== 0) {
                            operatorState.result = num1 / num2;
                        } else {
                            operatorState.result = 'Divisão por zero não pode!';
                        }      
                        break
                    default: {
                        operatorState.result = 'Selecione uma operação válida!';
                    }
                }
            } else {
                operatorState.result = 'Digite números válidos para serem calculados!';
            }
        }
    </script>

    <template>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <form class="row">
            <div class="col-lg-4">
                <input class="form-control" type="number" name="" placeholder="Digite o primeiro número" id="number1">
            </div>
            <div class="col-lg-4">
                <input class="form-control" type="number" name="" placeholder="Digite o segundo número" id="number2"> 
            </div>
            <div class="col-lg-4">
                <select class="form-select" name="" id="selectOperator" @change="calculate">
                    <option value="---">Escolha uma operação</option>
                    <option value="sum">Adição</option>
                    <option value="subtraction">Subtração</option>
                    <option value="multiplication">Multiplicação</option>
                    <option value="division">Divisão</option>
                </select>
            </div>
        </form>
        <div class="p-5 text-center">
            <p class="fs-5">O resultado da operação é:</p>
            <span class="fs-1">{{ operatorState.result }}</span>
        </div>
            </div>
        </div>
        
    </template>

    <style scoped>
    @media (max-width: 991px) {
        form {
            gap: 25px;
        }
    }
    </style>