import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema,
    ThunkExtraArgs,
    ThunkConfig,
} from './config/StateSchema';

export { StoreProvider, createReduxStore };
export type { StateSchema, ThunkExtraArgs, ThunkConfig, AppDispatch };
