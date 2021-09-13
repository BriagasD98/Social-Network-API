const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controllers');

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

router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;