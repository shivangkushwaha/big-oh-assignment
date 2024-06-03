const responseHandler = (req, res, next) => {
    res.success = (data, message = 'Success', statusCode = 200) => {
        res.status(statusCode).json({
            message,
            data,
            statusCode
        });
    };

    return res.error = (message, statusCode = 500) => {
        res.status(statusCode).json({
            message,
            data: null,
            statusCode
        });
    };

    next();
};

module.exports = responseHandler;
