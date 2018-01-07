import { observable } from "mobx";

class TodoStore {
    @observable todos = [];
    @observable filter = "";
}