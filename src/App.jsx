
import './App.css'
import sec1 from './images/sec1.png'
import sec2 from './images/sec2.png'
import third from './images/third.png'
import brocoli from './images/brocoli.png'
import banana from './images/banana.png'
import pista from './images/pista.png'
import tomato from './images/tomato.png'
import pea from './images/pea.png'
import hazel from './images/hazel.png'
import egg from './images/egg.png'
import bread from './images/bread.png'
import green from './images/green.png'






function App() {

  return (
    <>
    <nav className="navbar  ms-5 border ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <i className="fa-brands fa-canadian-maple-leaf d-inline-block align-text-top me-2" style={{color: "green"}}><b>Organick</b></i>
    
    </a>
  </div>
</nav>
     <div className='container ms-5'>
        <div className='row'>
          <div className="col-lg-12">
            <h5 className='text-success mt-5 ms-5'>100% Natural Food</h5>
            <h1 className='mt-5 text-danger ms-5'>Choose the best <br />
              <span>    healthier way</span>
               <br /> of life</h1>
               <button className='btn btn-warning ms-5 mt-3 btn1'>Enquire here</button>
          </div>
          </div>
          {/* <div className="col-lg-6">
            <img src={img1}alt="" />
          </div> */}
        </div>
       <div className='container ms-5'>
          <div className='sec mt-5'>
            <div className="row mt-5">
              <div className="col-lg-6">
                <img src={sec1} alt="" className='w-100'/>
              </div>
              <div className="col-lg-6">
                <img src={sec2} alt="" className='w-100' />
              </div>
            </div>
          </div>
       </div>
       <div className="container mt-5">
        <div className='row'>
          <div className="col-lg-6">
            <img src={third} alt="" className='w-100' />
          </div>
          <div className="col-lg-6 ">
            <h3 className='mt-5 head3'>We Believe in working Accredited Farmers</h3>
            <p className='mt-2 para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptates autem excepturi voluptatum cum at debitis exercitationem aspernatur laboriosam nulla, mollitia quod, ducimus dolorum pariatur amet asperiores, minus non delectus.</p>
          <h6 className='ms-3 mt-3 he6'>Organic Foods Only</h6>
          <p className='ms-3 para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptates autem excepturi voluptatum</p>
          <h6 className='ms-3 he6'>Quality Standards</h6>
          <p className='ms-3 para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptates autem excepturi voluptatum</p>
          <button className='btn btn-dark text-white ms-5 btn1'>Shop Now</button>
          </div>
        </div>
       </div>
       <div className="container mt-5 ms-5">
       <p className='text-success text-center para'>Categories</p>
       <h4 className=' text-center justify-content-center head3'>Our Products</h4>
        <div className="row ">
          <div className="col-lg-3">
          <div className="card c">
            <img src={brocoli} className="card-img-top c-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center  he6">Calabress Brocoli</h5>
              </div>
          </div>
          </div>
          <div className="col-lg-3"> 
          <div className="card c" >
            <img src={banana} className="card-img-top c-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center  he6">Fresh banana</h5>
              </div>
          </div>
           </div>
          <div className="col-lg-3">
          <div className="card c">
            <img src={pista} className="card-img-top c-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center  he6">White Nuts</h5>
              </div>
          </div>
          </div>
          <div className="col-lg-3">
          <div className="card c" >
            <img src={tomato} className="card-img-top c-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center  he6">Vegan Red tomato</h5>
              </div>
          </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3">
          <div className="card c">
            <img src={pea} className="card-img-top c-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center  he6">Mung Bean</h5>
              </div>
          </div>
          </div>
          <div className="col-lg-3"> 
          <div className="card c" >
            <img src={hazel} className="card-img-top c-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center he6">Brown Hazelnut</h5>
              </div>
          </div>
           </div>
          <div className="col-lg-3">
          <div className="card c" >
            <img src={egg} className="card-img-top c-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center he6">Eggs</h5>
              </div>
          </div>
          </div>
          <div className="col-lg-3">
          <div className="card c" >
            <img src={bread} className="card-img-top c-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center  he6">Zeico Bread</h5>
              </div>
          </div>
          </div>
        </div>
        <button className='btn btn-dark text-white ms-5 mt-5 btn1'>Load More</button>
       </div>
       <div className="container ms-5">
       <div className='row video border p-5 mt-5 rounded mb-5 align-items-center'>
        <div className="col-lg-6">
          <p className='text-success para'>Eco Friendly</p>
          <h2 className='head3 '><b>Econis is a Friendly Organic Store</b></h2>
          <p className='para' style={{textAlign:'justify'}}> <span className='fs-4 sp'>Start with our Company First:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit laudantium exercitationem est assumenda ipsam veritatis commodi animi beatae fugit dignissimos eaque in corporis accusamus delectus, molestias nemo sapiente iure.</p>
          <p className='para' style={{textAlign:'justify'}}> <span className='fs-4 sp'>Learn how to grow yourself:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit laudantium exercitationem est assumenda ipsam veritatis commodi animi beatae fugit dignissimos eaque in corporis accusamus delectus, molestias nemo sapiente iure.</p>
          <p className='para' style={{textAlign:'justify'}}> <span className='fs-4 sp'>Farming Categories:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit laudantium exercitationem est assumenda ipsam veritatis commodi animi beatae fugit dignissimos eaque in corporis accusamus delectus, molestias nemo sapiente iure.</p>
          </div>
          <div className="col-lg-6">
            <img className='w-100 ms-2' src={green} alt="" />
          </div>
        </div>
       </div>
       <div className="container">
        <div className="row p-4 back">
          
          <div className="col-lg-6">
            <h2 className='text-white text-center p-5 he2'>Subscribe to<span>    Our Newsletter</span></h2>
          </div>
          <div className="col-lg-6">
            <button className='btn btn-light w-50 p-3 mt-5 b1'>Your Email Address</button>
            <button className='btn btn-dark w-25 p-3 mt-5 b2'>Subscribe</button>

          </div>
        </div>
       </div>
       <div  style={{height:'300px'}} className='container ms-3 mt-5 w-100 footer'>
       <div className="footer-content d-flex justify-content-between">
       <div className="links d-flex flex-column mt-5">
            <h3><b>Contact Us</b></h3>
            <h6><b>Email:</b></h6>
            <a  style={{textDecoration:'none'}}>feedhopeo@organic.com</a>
            <h6><b>Phone No:</b></h6>
            <a style={{textDecoration:'none'}}>9895514844</a>
            <h6><b>Address:</b></h6>
            <a style={{textDecoration:'none'}}>98 Road,Borgail Street,USA</a>
          
        </div>
        <div style={{width:'400px'}} className="media mt-5">
            <h3 className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-cloud-meatball me-3"></i><b>Organick</b></h3>
            <p style={{textAlign:'justify'}}>Design and built with all the love in the world by the bootstrap team with the help of our Contributors</p>
            <div className='icons d-flex justify-content-between mt-3'>
              <a style={{textDecoration:'none'}}><i class='fa-brands fa-twitter fa-1x'></i></a>
              <a  style={{textDecoration:'none'}}><i class='fa-brands fa-instagram fa-1x'></i></a>
              <a  style={{textDecoration:'none'}}><i class='fa-brands fa-facebook fa-1x'></i></a>
              <a  style={{textDecoration:'none'}}><i class='fa-brands fa-linkedin fa-1x'></i></a>
              <a style={{textDecoration:'none'}}><i class='fa-brands fa-github fa-1x'></i></a>
              <a style={{textDecoration:'none'}}><i class='fa-brands fa-phone fa-1x'></i></a>

            </div>
        </div>
        <div className="guides d-flex flex-column mt-5">
            <h3><b>Utility Pages</b></h3>
            <a  style={{textDecoration:'none'}}>Style Guide</a>
            <a style={{textDecoration:'none'}}>404 not found</a>
            <a  style={{textDecoration:'none'}}>password protector</a>
            <a  target='_blank' style={{textDecoration:'none'}}>Licence</a>
            <a style={{textDecoration:'none'}}>Chargering</a>

        </div>
       </div>
       </div>
        
      
    </>
  )
}

export default App
