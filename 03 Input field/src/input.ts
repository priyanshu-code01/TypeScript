const getInfo = () => {
    let nameInput: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
    let emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    let passwordInput: HTMLInputElement = document.getElementById('password') as HTMLInputElement;

    console.log(nameInput.value, emailInput.value, passwordInput.value);
};

(window as any).getInfo = getInfo;