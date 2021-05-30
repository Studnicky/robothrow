const logger = require( '../logger' );
const errorTypes = require('./errorTypes');

class Errors {
  constructor() {}

    mapError ( err ) {

        const errType = Object.values( errorTypes ).find( ( errType ) => {
            return errType.isInstance( err ) === true;
        } );

        if ( errType.isRecoverable ) {
            //  This makes more sense when it is fully implemented, I promise
            errType( err ).recover();
        } else {
            const err = errType( err )
            logger.error(err.name, err);
            throw err;
        }

    }
}



module.exports = new Errors();
