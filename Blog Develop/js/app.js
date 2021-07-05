const express = require("express");
const app = express();
const Post = require('./api/models/post');
const postData = new Post();
var multer = require('multer');

const pathImages = require('path').join(__dirname,'/uploads');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`);
    }
});

const getExt = (MimeType) => {
    switch(MimeType){
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpeg";
    }
};

var upload = multer({storage: storage});

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/uploads', express.static(pathImages));

app.get('/api/posts/', (req, res) => {
    res.status(200).send(postData.get());
});

app.post('/api/posts/', upload.single("post-image"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const imageUrl = req.file.path.replace("\\", "/");
    const newPost = {
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post_image": imageUrl,
        "added_date": `${Date.now()}`
    }
    postData.add(newPost);
    res.status(200).send(newPost);
});

app.get("/api/posts/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postData.getInvidualBlog(postId);
    if(foundPost){
        res.status(200).send(foundPost);
    }else{
        res.status(404).send('No existe el blog que anda buscando');
    }
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});