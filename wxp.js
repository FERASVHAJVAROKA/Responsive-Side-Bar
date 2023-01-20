// Ändern Sie keine der Funktionsnamen
var cars = [ "Bmw" , "Volvo" , "audi"];
var ganzzahlen_array = [1,2,3,4,5,6,7,8,9,10];
var sentence_array = ["Helo","ich","lern","javascript"];
var test_scores =[80,85,85,67,70,69,64,90,99,99,84,83];
function returnFirst(arr){
    // gibt das erste Element aus dem Array zurück
    return arr[0];
  }
  console.log(returnFirst(test_scores));
  
  function returnLast(arr) {
    // gibt das letzte Element des Arrays zurück
       return arr[arr.length-1];
  }
  ///console.log(returnLast(test_scores));
  function getArrayLength(arr) {
    // gibt die Länge des Arrays zurück
    return arr.length
  }
  console.log(getArrayLength(test_scores));
  function incrementByOne(arr) {
    // arr ist ein Array von Ganzzahlen
    // jede ganze Zahl um eins erhöhen
    // Rückgabe des Arrays
    for (i = 0 ; i< arr.length -1 ; i++);{
        arr[i]=arr[i]+ 1
    }
    return arr;
  }
  //console.log(incrementByOne(test_scores));
  function addItemToArray(arr, item) {
    // fügt den Eintrag an das Ende des Arrays an
    // Rückgabe des Arrays
    arr.push(item);
    
  addItemToArray(test_scores,90); 
 }

  //console.log(test_scores);
  function addItemToFront(arr, item) {
    // fügt das Element an den Anfang des Arrays
    // Rückgabe des Arrays
    // Hinweis: Verwenden Sie die Array-Methode .unshift
    arr.unshift(item);
    return arr;
  }
  //console.log(addItemToFront(test_scores,20));
  function wordsToSentence(words) {
    // wörter ist ein Array von Zeichenketten
    // Rückgabe einer Zeichenkette, die aus allen Wörtern besteht, die aneinandergereiht sind
    // Leerzeichen müssen zwischen jedem Wort stehen
    // Beispiel: ['Hallo', 'Welt!'] -> 'Hallo Welt!'
    var sentence ="";
     for ( i=0 ; i < words.length ; i++ ) ;
     {
     sentence = { `$(sentence) + $(words[i])`};
     }
     return sentence;
  }
  //console.log(wordsToSentence(sentence_array));

  function contains(arr, item) {
    // prüfen, ob Element innerhalb von arr ist
    // falls ja, wird true zurückgegeben, andernfalls wird false zurückgegeben
  }
 
//   function addNumbers(numbers) {
//     // Zahlen ist ein Array von Ganzzahlen.
//     // Addiere alle Ganzzahlen und gib den Wert zurück
//     var sum = 0;
//    for( i=0 ; i< numbers.length; i++)
//    { sum =sum +numbers[i];
    
//    }
//  return sum;
//   }
//   console.log(addNumbers(ganzzahlen_array));
//   function averageTestScore(testScores) {
//     // testScores ist ein Array.Iteriere über testScores und berechne den Durchschnitt.
//     // Rückgabe des Durchschnittswerts
//     var summe = 0;
//     for ( i=0 ; i<testScores.length ; i++) {
//        summe = summe + summe[i];

//     }
//      return  summe / testScores.length;
//   }
//   console.log (averageTestScore(testScores));
var nummer =[80,85,67,200,80,50,60];
  function largestNumber(numbers) {
    // Zahlen ist ein Array von Ganzzahlen
    // Rückgabe der größten Ganzzahl
    let x = 0;
    for(i = 0; i<= numbers.length;i++){
        if( x< numbers[i]){
          x = numbers[i]}
        }
    return x;
  }
  console.log(nummer);
  console.log(largestNumber(nummer));
 
  function multiplyArguments() {
    // Mit dem Schlüsselwort arguments werden alle Argumente miteinander multipliziert und das Produkt zurückgegeben
    // falls keine Argumente übergeben werden, wird 0 zurückgegeben
    // wenn ein Argument übergeben wird, wird es zurückgegeben
    if()
    let produkt =1
    for (i=0; i<= arguments.length;i++){
      produkt = produktc* arguments[isNaN]
    }
    
  }
  console.log(arguments)
  console.log(arguments[0])
  console.log("arguments length:", arguments.length)
  // Ändern Sie den Code unterhalb dieser Zeile nicht.
  // --------------------------------
