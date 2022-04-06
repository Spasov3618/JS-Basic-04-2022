function password(input){
    let pass = 's3cr3t!P@ssw0rd';
    let tryPass = input[0];
    if(tryPass==pass){
        console.log('Welcome');
    }
    else   {
        console.log('Wrong password!')
    }
}
