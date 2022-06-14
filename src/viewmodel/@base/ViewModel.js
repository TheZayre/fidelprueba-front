export default class ViewModel {
    data = [];
    listeners = [];

    listen(listener) {
        this.listeners.push(listener);
    }

    unlisten(listener) {
        let index = this.listeners.find(l => l === listener);
        this.listeners.splice(index, 1);
    }

    notify(data) {
        // Actualiza el dato principal del ViewModel
        this.data = data;
        // Notifica a los observadores de la vista del cambio del dato.
        this.listeners.map(listener => {
            try {
                listener?.(this.data);
            } catch (ignored) {}
        });
    return this.data
    }
}
