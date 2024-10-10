import Api from '@/services/Api'
export default {
    index() {
        return Api().get('keyboards')
    },
    show(keyboardId) {
        return Api().get('keyboard/' + keyboardId)
    },
    post(keyboard) {
        return Api().post('keyboard', keyboard)
    },
    put(keyboard) {
        return Api().put('keyboard/' + keyboard.id, keyboard)
    },
    delete(keyboard) {
        return Api().delete('keyboard/' + keyboard.id, keyboard)
    },
}