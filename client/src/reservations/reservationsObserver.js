import {makeAutoObservable} from "mobx";

export default class reservationsObserver {
    constructor() {
        this._isBooked = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsBooked(bool){
        this._isBooked = bool
    }

    setUser(user){
        this._user = user
    }

    get user() {
        return this._user
    }

    get isBooked() {
        return this._isBooked
    }

}