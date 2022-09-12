import './post.css'


export default function post() {
  return (
    <div className='post'>
        <img src="https://bobraley.files.wordpress.com/2016/08/image1.jpeg" alt="" className="postImg" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas magni assumenda nesciunt voluptatem, totam, quod, quaerat quia deleniti est corrupti reprehenderit aspernatur velit enim odio praesentium at alias quae!</p>
    </div>
  )
}
