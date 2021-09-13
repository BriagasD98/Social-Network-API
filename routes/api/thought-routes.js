const router = require('express').Router();

const { 
    createThought,
    addReaction,
    deleteThought,
    removeReaction,
    getAllThoughts,
    getThoughtById,
    updateThought 
} = require('../../controllers/thought-controller');

//  at /api/thoughts/
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// at /api/thoughts/:id/reactions
router
    .route('/:id/reactions')
    .post(addReaction);

// at /api/thoughts/:id/reactions/:reactionId
router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;