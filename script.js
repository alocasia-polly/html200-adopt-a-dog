const blogPreviewFirst = ['Traveling With Your Dog', 'images/blog-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisl vitae lectus blandit viverra. Curabitur lacinia placerat tincidunt.'];
const blogPreviewSecond = ['How To Walk Multiple Dogs', 'images/blog-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisl vitae lectus blandit viverra. Curabitur lacinia placerat tincidunt.'];
const blogPreviewThird = ['Teach Your Dog To Fetch!', 'images/blog-3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisl vitae lectus blandit viverra. Curabitur lacinia placerat tincidunt.'];
const blogTitle = document.createElement('h2');

let container = document.getElementById('container');
let blogPreview = [blogPreviewFirst, blogPreviewSecond, blogPreviewThird];
let post = null;
let blogContent = null;


blogTitle.textContent = 'Adoptadog Blog';
document.body.insertBefore(blogTitle, container);


for (let i = 0; i < blogPreview.length; i++) {

    let blogPost = document.createElement('section');

    post = blogPreview[i];
    blogContent = '<img src="' + post[1] + '" alt=""> <div> <a href="#"><h3>' + post[0] + '</h3></a> <p>' + post[2] + '</p> </div>';
    blogPost.innerHTML = blogContent;

    document.body.insertBefore(blogPost, container);
}

