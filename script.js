let num = [];
let ope = [];

function insereNum(num) {
    if (ope[ope.length - 1] === '=') {
        limpaNum();
    }
    document.getElementById('painel').value += num;
}

function limpaNum() {
    document.getElementById('painel').value = null;
    document.getElementById('resultArea').innerHTML = ' ';
    num = [];
    ope = [];
}

function igualResult() {
    if (ope[ope.length - 1] === '%') {
        limpaNum();
    }

    if (ope[ope.length - 1] === '/') {
        ope.push('=')
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        let result = num[num.length - 1] / numPai;
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }

    if (ope[ope.length - 1] === '*') {
        ope.push('=')
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        let result = num[num.length - 1] * numPai;
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }

    if (ope[ope.length - 1] === '+') {
        ope.push('=')
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        let result = num[num.length - 1] + numPai;
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }

    if (ope[ope.length - 1] === '-') {
        ope.push('=')
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        let result = num[num.length - 1] - numPai;
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }
}

function efetuaCont(operacao) {
    if (operacao === 'divisao') {
        ope.push('/');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        if (num.length === 0 || ope[ope.length - 2] === '=') {
            let result = numPai;
            num.push(result);
        } else if (num.length !== 0 && ope[ope.length - 2] !== '=') {
            ope.push(ope[ope.length - 2])
            igualResult();
            ope.length -= 2;
        } else {
            let result = num[num.length - 1] / numPai;
            num.push(result);
        }
        document.getElementById('painel').value = null;
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }

    if (operacao === 'multiplicacao') {
        ope.push('*');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        if (num.length === 0 || ope[ope.length - 2] === '=') {
            let result = numPai;
            num.push(result);
        } else if (num.length !== 0 && ope[ope.length - 2] !== '=') {
            ope.push(ope[ope.length - 2])
            igualResult();
            ope.length -= 2;
        } else {
            let result = num[num.length - 1] * numPai;
            num.push(result);
        }
        document.getElementById('painel').value = null;
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }

    if (operacao === 'soma') {
        ope.push('+');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        if (num.length === 0 || ope[ope.length - 2] === '=') {
            let result = numPai;
            num.push(result);
        } else if (num.length !== 0 && ope[ope.length - 2] !== '=') {
            ope.push(ope[ope.length - 2])
            igualResult();
            ope.length -= 2;
        } else {
            let result = num[num.length - 1] + numPai;
            num.push(result);
        }
        document.getElementById('painel').value = null;
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
        console.log(num);
    }

    if (operacao === 'subtracao') {
        ope.push('-');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        if (num.length === 0 || ope[ope.length - 2] === '=') {
            let result = numPai;
            num.push(result);
        } else if (num.length !== 0 && ope[ope.length - 2] !== '=') {
            ope.push(ope[ope.length - 2])
            igualResult();
            ope.length -= 2;
        } else {
            let result = num[num.length - 1] - numPai;
            num.push(result);
        }
        document.getElementById('painel').value = null;
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
    }
}

function efetuaPerc() {
    if (ope[ope.length - 1] === '/') {
        ope.push('%');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        num.push(numPai);
        let result = numPai / 100 * num[num.length - 2];
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
        num = [];
    }

    if (ope[ope.length - 1] === '*') {
        ope.push('%');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        num.push(numPai);
        let result = (numPai / 100 * num[num.length - 2]);
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
        num = [];
    }

    if (ope[ope.length - 1] === '+') {
        ope.push('%');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        num.push(numPai);
        let result = num[num.length - 2] + (numPai / 100 * num[num.length - 2]);
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
        num = [];
    }

    if (ope[ope.length - 1] === '-') {
        ope.push('%');
        let input = document.querySelector('#painel');
        let numPai = parseFloat(input.value);
        num.push(numPai);
        let result = num[num.length - 2] - (numPai / 100 * num[num.length - 2]);
        num.push(result);
        document.getElementById('painel').value = null;
        document.getElementById('painel').value = num[num.length - 1];
        document.getElementById('resultArea').innerHTML = num[num.length - 1];
        num = [];
    }

}
