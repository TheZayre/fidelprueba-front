export default class Api {
    
    constructor() {
        this.url = process.env.REACT_APP_SERVICES;
    }

    get(endpoint, options = {}) {
        return this.call('GET', endpoint, options);
    }

    post(endpoint, body, options = {}) {
        options.body = JSON.stringify(body);
        return this.call('POST', endpoint, options);
    }

    put(endpoint, body, options = {}) {
        options.body = JSON.stringify(body);
        return this.call('PUT', endpoint, options);
    }

    delete(endpoint, body, options = {}) {
        options.body = JSON.stringify(body);
        return this.call('DELETE', endpoint, options);
    }

    call(method, endpoint, options = {}) {
        // Especifica el método de la llamada HTTP al recurso.
        options.method = method;
        // Completa la información de las cabeceras con cabeceras comunes por llamada a API.
        options.headers = {};
        options.headers['Content-Type'] = 'application/json';
        /*options.headers["-?"] = "-?"*/

        // Realiza la llamada a la API con las cabeceras y la URL base de la llamada.
        let call = fetch(this.url + endpoint, options)
        // Transforma los datos a JSON y devuelve el resultado (o el error en su caso).
        return call.then(async res => await res.json()).catch(async res => await res.json());
    }
}
