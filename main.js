// get Button 
const btnSuccess = document.querySelector('.show-success');
const btnWarning = document.querySelector('.show-warning');
const btnError = document.querySelector('.show-error');


// hande Click btn 
btnSuccess.onclick = function() {
    handleShowAndHideToast('success');
}

btnWarning.onclick = function() {
    handleShowAndHideToast('warning');
}

btnError.onclick = function() {
    handleShowAndHideToast('error');
}

function handleShowAndHideToast(type) {

    // Create card div 
    var toast = document.createElement('div');
    // add class toast
    toast.classList.add('toast', type);
    
    if(type === 'success') {
        toast.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <p>This is success message!</p>
                <div class="cout-down">
        `;
    }

    if(type === 'warning') {
        toast.innerHTML = `
               <i class="fa-solid fa-circle-exclamation"></i>
                <p>This is warning message!</p>
                <div class="cout-down">
        `;
    }

    if(type === 'error') {
        toast.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>This is error message!</p>
                <div class="cout-down">
        `;
    }

    // get parentElement is #toast
    const toastList = document.querySelector('#toast');
    toastList.appendChild(toast);


    // hide Toast
    setTimeout(() => {
        // add animation hide for toast
        toast.style.animation = `hideToast ease 3s forwards`;
    },3000
    )

    // delete Toast in DOM 
    setTimeout(() => {
        toast.remove();
    },3000 + 3000)
}