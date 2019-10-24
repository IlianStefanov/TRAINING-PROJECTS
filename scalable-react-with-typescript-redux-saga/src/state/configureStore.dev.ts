import { applyMiddleware, createStore, Store, compose } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "./ducks/index";
import sagaMiddleware from "./middlewares/sagas";

export default function configureStore(
	initialState: IApplicationState
): Store<IApplicationState> {
	const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const middlewares = composeEnhancers(applyMiddleware(sagaMiddleware)); // Create Store
	const store = createStore(rootReducer, initialState, middlewares);

	sagaMiddleware.run(rootSaga);

	return store;
}
