import {rootStore as store} from "../stores/RootStore";

const useButton = (props) => {
    function changeHandler(event) {
        props.setInputValue(event.target.value)
    }

    function pressHandlerForGroup(event) {
        if (event.key === "Enter") {
            store.groups.addGroup(props.inputValue);
            props.setInputValue("");
            props.onClick(false);
        }
    }

    function pressHandlerForTodos(event) {
        if (event.key === "Enter") {
            store.todos.add(props.inputValue);
            if (props.title === "Favorites") { store.todos.list[0].toggleFavorite() }
            store.groups.list[props.categoryNumber].addTodo(store.todos.list[0]);
            props.setInputValue("");
            props.onClick(false);
        }
    }

    return [changeHandler, pressHandlerForGroup, pressHandlerForTodos];
};

export default useButton
