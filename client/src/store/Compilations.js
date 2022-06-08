import {makeAutoObservable} from 'mobx'
export default class compilations {
    constructor(){
        this._themes = [
        ]
        this._tasks = [] //Массив заданий по определенной тематике
        this._genre = [0, 1]
        this._page = 1
        this._totalcount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setThemes(theme) {
        this._themes = theme
    }

    setTotalCount(count) {
        this._totalcount = count
    }

    SetGenres(genres) {
        this._genre = genres
    }

    SetTasks(tasks) {
        this._tasks = tasks
    }

    get Themes() {
        return this._themes
    }
    
    get tasks() {
        return this._tasks
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalcount
    }

}