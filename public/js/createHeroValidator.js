document.addEventListener('DOMContentLoaded' , (event) => {
    console.log('Estoy validando');

    const createHeroForm = document.getElementById('createHeroForm');

    // const [a,b,c,d,e,f] = createHeroForm.elements;
    // console.log(a.name);

    createHeroForm.addEventListener('submit', (event) =>{
        const errorsArray = [];
        event.preventDefault();
        Array.from(createHeroForm.elements).forEach((element) => {
            if(element.type !== 'submit'){
                if(element.value === '' || element.value === null || element.value === undefined){
                    element.classList.add('is-invalid');
                    // errorsArray = [...errorsArray, {element.name: 'El campo no puede estar vacío'}]
                    errorsArray.push(`El campo <strong>${element.dataset.name}</strong> no puede estar vacío`);
                }else{
                    element.classList.remove('is-invalid');
                    console.log(element.name, ': ', element.value);
                }
                console.log(element.name, ': ', element.value);
            }
        });
        if(errorsArray.length === 0){
            createHeroForm.submit();
        }else{
            const errorsDiv = document.getElementById('errorsDiv');
            errorsDiv.innerHTML = '';
            errorsArray.forEach((error) => {
                errorsDiv.hidden = false;
                errorsDiv.innerHTML += `<p>- ${ error }</p>`;
            });
            // errorsDiv.innerHTML = '';
        }
        // console.log('Estoy Cortando el envio');
    });
});