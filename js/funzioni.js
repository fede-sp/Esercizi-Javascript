let bisestile = function(d){
    if((d % 4 == 0 && d % 100 != 0) || (d % 400 == 0))
        return 1;
    else    
        return 0;
}

// esercizio 1
let contaGiorni = function(data) {
    let giorni = [0,31,28,31,30,31,30,31,31,30,31,30];
    let n = 0; 
    giorni[2] += bisestile(data[0]);
    for(var i = 1;i < data[1];i++){
        n += giorni[i];
    } 
    n += data[2];
    return n;        
}

// esercizio 2
let anniPerfetti = function(anno){
    let anni = "";
    for(var i = 1;i <= 100;i++)
        if((anno + i) % i == 0)
            anni += (a + i) + " ";
    return anni;        
}

// esercizio 3
let sommaReciproci = function(n){
    let r = 0;
    for(var i = 1;i <= n;i++)
        r += 1 / i;
    return r;    
}

// esercizio 4
let contaOccorrenze = function(s, c){
    let o = 0;
    let passo = c.length;
    let ok = true;
    for(i = 0;i < s.length;i++){
        for(j = 0;j < passo;j++){
            if(s[i + j] != c[j]){
                ok = false;
                break;
            }
        }
        if(ok) o++;
        ok = true;
    }
    return o;
}

//esercizio 5
let estraiStringa = function(s, d1, d2){
    let se = '';
    for(i = 0;i < s.length;i++){
        if(s[i] == d1){
            for(var j = i + 1;s[j] != d2 && j < s.length;j++)
                se += s[j];
        }
        if(s[j] == d2)
            break;    
        else    
            se = '';    
    }
    return se;
}


// esercizio 6

let indoviNumber = function (d) {
    let n = Math.round((Math.random() * 100) + 1)
    let finito = false
    let tentativi = 5
    while(!finito){
        if(!tentativi){
            alert('Mi dispiace, hai finito i tentativi!')
            break
        }
        let i = prompt('Inserisci un numero da 1 a 100')
        //alert(n + '->' + i)
        tentativi--        
        switch (d) {
            case 'facile':
                if(i < n)
                    alert('Valore troppo piccolo!')
                if(i > n)
                    alert('Valore troppo grande!')
                if(i == n){
                    alert('WOOOWWWW')
                    finito = true
                }
                break;
            case 'medio':
                
                break;
            case 'difficile':
                
                break;        
            default:
                break;
        }
    }
}


// MAIN

let ese1 = function(date){
    let s = "";
    for(d of date){
        var n = contaGiorni(d);
        s += d[2] + "/" + d[1] + "/" + d[0] + ": " + n + "\n";
    }
    console.log(s);
}

let ese2 = function(anni){
    let s = "";
    for(a of anni)
        s += a + ": " + anniPerfetti(a) + "\n";
    console.log(s);      
}

let ese3 = function(numeri){
    let s = "";
    for(n of numeri)
        s += n + ": " + sommaReciproci(n) + "\n";
    console.log(s);    
}

let ese4 = function(s, c){
    let o = contaOccorrenze(s, c);
    console.log('La stringa ' + s + ' contiene ' + o + ' occorrenze di ' + c);
}

let ese5 = function(s, d1, d2){
    let se = estraiStringa(s, d1, d2)
    console.log('Stringa estratta da ' + s + ': ' + se);
}

let ese6 = function(d){
    let r = indoviNumber(d);
}

