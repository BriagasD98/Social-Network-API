const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// at /api/users/:id/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;