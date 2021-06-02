const {
    NODE_ENV
} = process.env

const IS_TEST = NODE_ENV === 'test'

const LOGGER_LEVEL = 'debug'

export {
    IS_TEST,
    LOGGER_LEVEL
}
