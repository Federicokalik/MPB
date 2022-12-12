
const CommentBox=()=>{
return(
<>
<form id="contact-form" action="mail.php" method="POST" className="contact-input mt-100">
<div className="contact-title">
    <h1>Post a comment</h1>
</div>
<div className="row py-3">
    <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
        <input type="text" name="name" placeholder="Enter your name"/>
    </div>
    <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
        <input type="email" name="email" placeholder="Enter your email address"/>
    </div>
    <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
        <textarea name="message" id="message" cols="30" rows="4" placeholder="Write your message..."></textarea>
    </div>
    <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
        <label className="shop-check">Save my name, email, and website in this browser for the next time.
        <input type="checkbox"/>
        <span className="checkmark"></span>
        </label>
    </div>
    <div className="contact-btn-wrap">
        <button type="submit" className="common-btn btn-hrrd-1">Send Message</button>
    </div>
    <p className="form-message"></p>
</div>
</form>
</>
)
}
export default CommentBox