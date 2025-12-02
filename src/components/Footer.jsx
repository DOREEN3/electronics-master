import React from 'react';

const Footer = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Message sent successful!")
  }
  return (
    <>
      <div className="container-fluid bg-success">
        <section className="row g-3">
          <div className="col-md-4  text-center">
            <h2 className='text-white'>About Us</h2>
            <p>Welcome to ElectroMart, your trusted destination for the latest and most innovative electronics. We believe technology should make life easier, smarter, and more exciting—so we’ve built a shopping experience that delivers exactly that.</p>
       
            <p>we curate high-quality gadgets, devices, and accessories from leading global brands and emerging tech innovators. Whether you’re upgrading your workspace, enhancing your home, or searching for the perfect gift, our collection is designed to bring cutting-edge performance straight to your fingertips.</p>
          </div>

          <div className="col-md-4 text-white">
            <h2 className="text-center">Contact Us</h2>
            <input type="email" placeholder="Enter your email" className="form-control" required />
            <br />
            <textarea placeholder="Leave a message" className="form-control" required></textarea>
            <br />
            <button className="btn btn-outline-danger mb-2" onClick={handleSubmit}>Send Message</button>
          </div>

          <div className="col-md-4 ">
            <h2 className="text-white text-center">Stay Connected</h2>
            <div className="d-flex justify-content-center ">
             <img src="assets/fb.png" alt="facebook" style={{ width: '10%',height:"50px",padding:"5px"}} />
             <img src="assets/in.png" alt="instagram" style={{ width: '10%',height:"50px",padding:"5px"}} />
             <img src="assets/x.png" alt="x" style={{ width: '10%',height:"50px" ,padding:"5px"}} />
            </div>
            <p className='mt-4'>Stay updated with the latest tech trends, exclusive deals, and new product drops!
            Follow us on our social channels and join our growing community of tech enthusiasts.</p>
          </div>
        </section>
      </div>

      <div className="container-fluid bg-dark">
        <p className="mb-0 py-4 text-white text-center">
          Developed by Doreen.&copy; 2025. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;