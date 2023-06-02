
function onSubmit(e){
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt === ''){
        alert('Please add description');
        return;
    }
    generateImageRequest(prompt, size);
    console.log('success');
}

async function generateImageRequest(prompt, size){
    try {
        showSpinner();

        const response = await fetch('./openai/generateimage', {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });
        if (response.ok) {
            removeSpinner();
            throw new Error('Image Could Not Be Generated');
        }

        const data = await response.json();
        const imageUrl = data.data;
        querySelector('#image').src = imageUrl
        console.log(data);
        removeSpinner(); 
    } catch (error) {
        document.querySelector('.msg').textContent = error
    }
}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}
function removeSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);