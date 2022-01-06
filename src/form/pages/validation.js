
const validation = (values) => {
    let errors={};



    if (!values.fullname){
        errors.fullname="Nom requis";
    }
    else if(!/^[A-Za-z]+$/.test(values.fullname)){
        errors.fullname="Nom invalide";
    }



    if (!values.prénom){
        errors.prénom="Prénom requis";
    }
    else if(!/^[A-Za-z]+$/.test(values.prénom)){
        errors.prénom="Prénom invalide";
    }



    if (!values.email){
        errors.email="Email requis";
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email invalide";
    }


    if (!values.password){
        errors.password="Mot de passe requis ";
    }else if (values.password.length < 8){
        errors.password="Le mot de passe doit contenir au moins 8 caractères";
    }else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!;./\\"'()-+_<>@#$%^&*]+$/.test(values.password))
    {
        errors.password="Le mot de passe doit inclure au moins 1 Minuscule, 1 Majuscule, 1 caractère spécial"
    }


    



    return errors;
};
export default validation;
    









