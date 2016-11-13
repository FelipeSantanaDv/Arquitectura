var res = new Array;
var no = new Array;
var ture = new Array;
var explicares = new Array;
var calif = 0;

res[1] = "c";
res[2] = "d";
res[3] = "a";
res[4] = "b";
res[5] = "c";
res[6] = "d";
res[7] = "a";
res[8] = "c";
res[9] = "c";
res[10] = "d";

explicares[1]="Fallaste, la respuesta correcta es la c";
explicares[2]="Fallaste, la respuesta correcta es la d";
explicares[3]="Fallaste, la respuesta correcta es la a";
explicares[4]="Fallaste, la respuesta correcta es la b";
explicares[5]="Fallaste, la respuesta correcta es la c";
explicares[6]="Fallaste, la respuesta correcta es la d";
explicares[7]="Fallaste, la respuesta correcta es la a";
explicares[8]="Fallaste, la respuesta correcta es la c";
explicares[9]="Fallaste, la respuesta correcta es la c";
explicares[10]="Fallaste, la respuesta correcta es la d";

function Engine(question, answer) {
    ture[question] = answer;
    
}
function Score() {
    var answertext = "RESULTADOS\n";
    calif = 0;
    for(i = 1; i<=10;i++) {
        answertext = answertext+"\nPregunta"+" "+i+":"+" ";
        if(res[i]!= ture[i]) {
            answertext = answertext+explicares[i]+"\n";
        } else {
            answertext = answertext+"¡Bien hecho!\n";
            calif++;
        }
        }
    answertext = answertext+"\nCalificacion:"+" "+calif;
    answertext = answertext+"\nDiagnostico:"+" ";
    if(calif>=0 || calif>=4) {
        answertext = answertext+" "+"¿Seguro que te preparaste bien?";
    }
    if(calif>=2 && calif<=5) {
        answertext = answertext+" "+"No eres tan bueno, ni tan malo de lo que pareces.";
    }
    if(calif>=6 && calif<=8) {
        answertext = answertext+" "+"Por poco lo logras, ¡animo!";
    }
    if(calif>=10) {
        answertext = answertext+" "+"¡Felicitaciones has tenido el puntaje maximo!";
    }
    alert(answertext);
}
    
    
