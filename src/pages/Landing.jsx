import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.png'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/fea1.jpg'
import feature2 from '../assets/fea2.jpg'
import feature3 from '../assets/fea3.jpg'


const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio debitis nostrum temporibus ipsa rem, eum soluta rerum harum quasi, quis itaque mollitia natus magnam asperiores, minima maiores enim dolorum distinctio.</p>
          <Link to={'/home'} className='btn btn-info'>Get Started!</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg 6">
          <img src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className='row mt-5'>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>Saxophone</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>Violin</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>Drum</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple , fast and powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero tempore eum! Nulla nobis, aspernatur porro autem rem animi. Distinctio est perferendis magnam a pariatur ut ad maxime eveniet quaerat!</p>
          <p style={{textAlign:'justify'}}> <span className='fs-5'>Categorise videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero tempore eum! Nulla nobis, aspernatur porro autem rem animi. Distinctio est perferendis magnam a pariatur ut ad maxime eveniet quaerat!</p>
          <p style={{textAlign:'justify'}}> <span className='fs-5'>Manage History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero tempore eum! Nulla nobis, aspernatur porro autem rem animi. Distinctio est perferendis magnam a pariatur ut ad maxime eveniet quaerat!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="497" height="360" src="https://www.youtube.com/embed/xJ_fFLgGHiU" title="VJ LOOP NEON Red Blue Tunnel Abstract Background Video Simple Light Pattern 4k Screensaver" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing