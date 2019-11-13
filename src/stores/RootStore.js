import { types as t } from "mobx-state-tree";
import { TodoListModel } from "./TodoStore";
import { GroupListModel } from "./GroupStore";

const RootStore = t.model('RootStore', {
    todos: t.optional(TodoListModel, {}),
    groups: t.optional(GroupListModel, {})
})
    .views((store) => ({
        getFavorites() {
            return store.todos.list.filter(item => item.isFavorite);
        }
    }));

export const rootStore = RootStore.create({});

rootStore.groups.addGroup('Favorites');
rootStore.groups.addGroup('for today');
rootStore.todos.add('finish home work');
rootStore.todos.add('finish learning mobx');

const todo0 = rootStore.todos.list[0];
const todo1 = rootStore.todos.list[1];
const group = rootStore.groups.list[0];

group.addTodo(todo0);
group.addTodo(todo1);


