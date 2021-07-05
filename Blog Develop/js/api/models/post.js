/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const PATH = (__dirname + '/data.json');
const fs = require('fs');
class Post{

    get(){
        /* Get Post global */
        return this.readData();
    }

    getInvidualBlog(postId){
        /* Get Individual Blog */
        const posts = this.readData();
        const foundPost = posts.find( (post) => post.id == postId  );
        return foundPost;
    }

    add(newPost){
        /* Add new Post */
        const currentPost = this.readData();
        currentPost.unshift(newPost);
        this.storeData(currentPost);
    }

    readData(){
        /* Read Data from data.json */
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }

}

module.exports = Post;
