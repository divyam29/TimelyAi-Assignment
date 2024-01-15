const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');

router.get('/', async (req, res) => {
    Posts.findAll()
        .then((posts) => {
            res.status(200).json({ Posts: posts });
        })
        .catch((err) => console.error(err));
});

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    Posts.findByPk(postId)
        .then((post) => {
            if (!post) {
                return res.status(404).json({ message: 'Post not found!' });
            }
            res.status(200).json({ Post: post });
        })
        .catch((err) => console.error(err));
});

router.post('/', async (req, res) => {
    const caption = req.body.caption;
    const media = req.body.media;
    const alttext = req.body.alttext;
    Posts.create({
        Caption: caption,
        media: media,
        altText: alttext,
    })
        .then((result) => {
            console.log('Created Post');
            res.status(201).json({
                message: 'Post created successfully!',
                Post: result,
            });
        })
        .catch((err) => {
            console.error(err);
        });
});

router.put('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const updatedCaption = req.body.caption;
    const updatedMedia = req.body.media;
    const updatedAlttext = req.body.alttext;
    Posts.findByPk(postId)
        .then((post) => {
            if (!post) {
                return res.status(404).json({ message: 'Post not found!' });
            }
            post.Caption = updatedCaption;
            post.media = updatedMedia;
            post.altText = updatedAlttext;
            return post.save();
        })
        .then((result) => {
            res.status(200).json({ message: 'Post updated!', Post: result });
        })
        .catch((err) => console.error(err));
});

router.delete('/:postId', async (req, res) => {
    const postId = req.params.postId;
    Posts.findByPk(postId)
        .then((post) => {
            if (!post) {
                return res.status(404).json({ message: 'Post not found!' });
            }
            return post.destroy({
                where: {
                    id: postId,
                },
            });
        })
        .then((result) => {
            res.status(200).json({ message: 'Post deleted!' });
        })
        .catch((err) => console.error(err));
});

module.exports = router;