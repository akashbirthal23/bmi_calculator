const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const message = document.querySelector('#message');

    if(((height === '') || (height < 0) || (isNaN(height))) && (weight === '' || weight < 0 || isNaN(weight)) ){
        result.innerHTML = "Please, provide a valid height as well as weight."
    } else if((height === '') || (height < 0) || (isNaN(height))){

        result.innerHTML = "Please, provide a valid height.";

    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please, provide a vaild weight.";
    } else{

        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`


        if(bmi<18.6) {
            message.innerHTML = "You are underweight.";
        } else if ( bmi >= 18.6 && bmi <= 24.9){
            message.innerHTML = "You are normal.";
        }
        else if (bmi > 24.9){
            message.innerHTML = "You are overweight.";
        }
    }
});