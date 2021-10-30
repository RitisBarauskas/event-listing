class Api {
    constructor(config) {
        this._url = config.url;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getAllEvents() {
        return fetch(this._url)
            .then(this._checkResponse);
    }
}

const api = new Api({
    url: 'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json',
})

export default api;