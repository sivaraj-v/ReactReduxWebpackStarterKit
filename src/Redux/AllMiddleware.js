import { applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const middlewares = []

const AuthenticationMiddleware = (store)=> (next) => (action) => {
    next(action)
}

middlewares.push(ReduxThunk)
middlewares.push(AuthenticationMiddleware)

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ) {
    const { logger } = require('redux-logger')
    middlewares.push(logger)
}

const AllMiddleWare = applyMiddleware(...middlewares)
export default AllMiddleWare