const arr1 = [2, 0, 26, 28, -2]; // Di soal minta diubah jadi itu

function mulOfArray(arr) { 
    let result = 1; //nilai awal resultnya = 1 karena ini tuh operasi perkalian
    for (let i = 0; i < arr.length; i++) { // >= 0 diubah jadi > 0 karena 0 itu bukan bilangan positif, nah kalp pake >= 0 itu 0 nya ikut dikaliin nanti hasilnya jadi 0
       if (arr[i] > 0) {
           result = result * arr[i];
       }
    }
    
    return result;
}

console.log(mulOfArray(arr1));