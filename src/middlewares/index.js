import { apiMiddleware } from "./core/api.middleware";
import { postsMiddleware } from "./posts.middleware";

export  const middlewares = [postsMiddleware, apiMiddleware];