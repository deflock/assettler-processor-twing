import {TwingError} from 'twing';
import GenericProcessor from '@assettler/core/lib/generic-processor';

/**
 *
 */
export default class Processor extends GenericProcessor {
    /**
     * @param {TwingEnvironment} twingEnv
     * @param {Object} options
     */
    constructor(twingEnv, options = {}) {
        super(Object.assign({
            extensions: ['.twing', '.twig'],
        }, options));

        this.twingEnv = twingEnv;
    }

    /**
     * @param {Object} file
     * @param {Object} params
     * @returns {Promise<void>}
     */
    async onInit(file, params) {
        return this.doTrack(file, params);
    }

    /**
     * @param {Object} file
     * @param {Object} params
     * @returns {Promise<void>}
     */
    async onAdd(file, params) {
        return this.doTrack(file, params);
    }

    /**
     * @param {Object} file
     * @param {Object} params
     * @returns {Promise<void>}
     */
    async onChange(file, params) {
        return this.doTrack(file, params);
    }

    /**
     * @param {Object} file
     * @param {Object} params
     * @returns {Promise<void>}
     */
    async doTrack(file, params) {
        const relativePath = file.path;

        try {
            this.twingEnv.loadTemplate(relativePath);
        }
        catch (e) {
            if (!(e instanceof TwingError)) {
                throw e;
            }
        }
    }

    /**
     * @param {TwingEnvironment} env
     */
    setTwingEnvironment(env) {
        this.twingEnv = env;
    }
}
