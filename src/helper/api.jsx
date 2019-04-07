class Api {

    static get(params = {}) {
        const url = new URL("http://0.0.0.0:8080/api/mytable");

        Object.keys(params).forEach(key => params[key] && url.searchParams.append(key, params[key]))

        return fetch(url).then(res => res.json());
    }

}

export default Api;
