const PHARAM_ID = "?"

const libreria = {
    'login' : "SELECT username, email, password FROM utente WHERE username = "+PHARAM_ID+" OR email = "+PHARAM_ID,
    'findArticolo' : "SELECT * FROM articolo WHERE id = "+PHARAM_ID
}

function esegui(...parametri: Array<string>){

}
export default esegui()