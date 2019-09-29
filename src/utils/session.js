class Session {
    
    set(key, value) {
        if (!key) return;

        value = typeof value === 'object' ? JSON.stringify(value) : value
        sessionStorage.setItem(key, value);
    }

    get(key) {
        let val = sessionStorage.getItem(key);
        try {
            val = JSON.parse(val);
        } catch(err) {
            return val;
        }
        return val
    }

    setToken(value) {
        localStorage.setItem('_token', value);
    }

    getToken() {
        return JSON.parse(localStorage.getItem('_token'))
    }

    lock(password) {
        localStorage.setItem('_lock', password);
    }

    unlock() {
        localStorage.removeItem('_lock');
    }

    getLock() {
        return JSON.parse(localStorage.getItem('_lock'));
    }
}

export default new Session();