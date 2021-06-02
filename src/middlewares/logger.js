import logger from '../config/logger'
import { v4 as uuidV4 } from 'uuid'

const loggerMiddleware = (req, res, next) => {
    logger.requestId = uuidV4()
    logger.method = req.method

    next()
}

export default loggerMiddleware
