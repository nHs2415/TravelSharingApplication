const getUserById = (req, res, next) => {
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });

    
    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided user id.', 404)
        );
    } 
    res.json({ place });
};