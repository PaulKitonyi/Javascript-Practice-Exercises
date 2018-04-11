'use scrict';

module.exports ={
    // find factorial of an integer
    computeFactorial: (value) => {
        // handles non-numeric
        if(typeof(value) != 'number'){
            return 'undefined'
        }
        // handles negative numbers
        else if(value<0){
            return 'undefined'
        }
        // handles normal input
        else{
            let factorial = 1;
            for(let counter = value; counter >=1; counter--){
                factorial = factorial * counter;
            }

            return factorial;
        }
    }
}