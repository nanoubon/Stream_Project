import Nav from './Nav'
import { Link } from 'react-router-dom';
import promotion from '../assets/Home.png'
import BrandAboutBlog from '../assets/p1.jpg';
import '../App.css'
import Footer from './Footer';
import FitnessClass from './scenes/FitnessClass';
import SponsorsBrand from '../assets/p1.jpg'

function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <Nav />
        <div>
          {/* Heading */}
          <div className='container-2xl'>
            <div className='class=" pt-10 pb-0'>
              <img className='object-cover w-full' src={promotion} alt="" />
            </div>
          </div>
        </div>
        {/* About Blog */}
        <div className='justify-between pt-0'>
          <div className='w-full bg-primary-500'>
            <div className='container mx-auto px-4 pt-5 pb-5'>
              <div className="flex w-full pt-10 pb-10">
                <div className="md:flex-1 w-50">
                  <img className=" rounded-xl gap-1 " src={BrandAboutBlog} />
                </div>
                <div className="p-2 md:flex-1 w-50 pl-5">
                  <p className='text-sm md:text-2xl font-bold uppercase'> the stream fitness </p>
                  <p className='text-2xl md:text-7xl font-bold text-white uppercase'> ABOUT US </p>
                  <p className='text-sm md:text-2xl font-bold pb-2 uppercase'> project for maxwell inc </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nam, facilis assumenda quasi aut earum eius? Delectus harum animi ducimus sit accusantium fugiat! Iure iusto voluptas est consequatur eum. Harum.</p>
                  <Link to="/login">Detail</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Blog End */}
        <div className='container mx-auto px-4 pt-5 pb-5'>
          <div className="flex pt-10 pb-10">
            <div className="flex-1 w-50">
              <p className='text-sm md:text-2xl font-bold uppercase'> the stream fitness </p>
              <p className='text-2xl md:text-7xl font-bold text-red-400 uppercase'> ABOUT US </p>
              <p className='text-sm md:text-2xl pb-2 font-bold uppercase'> project for maxwell inc </p>
            </div>
            <div className="flex-1  w-50 pl-5">
              <p className=' text-stone-900 pt-0 pb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nam, facilis assumenda quasi aut earum eius? Delectus harum animi ducimus sit accusantium fugiat! Iure iusto voluptas est consequatur eum. Harum.</p>
            </div>
          </div>
        </div>
        <div>
          <FitnessClass />
        </div>
        <div>
        <div className="w-full bg-primary-100 p-10">
                <div className="text-center p-5">
                    <h2>SPONSORS</h2>
                  </div>
                    <div className="flex justify-center gap-8 md:flex-auto">
                        <img alt="redbull-sponsor" className=' w-16 md:w-28 rounded-md gap-1' src={SponsorsBrand} />
                        <img alt="redbull-sponsor" className=' w-16 md:w-28 rounded-md gap-1' src={SponsorsBrand} />
                        <img alt="redbull-sponsor" className=' w-16 md:w-28 rounded-md gap-1' src={SponsorsBrand} />
                        <img alt="redbull-sponsor" className=' w-16 md:w-28 rounded-md gap-1' src={SponsorsBrand} />
                        <img alt="redbull-sponsor" className=' w-16 md:w-28 rounded-md gap-1' src={SponsorsBrand} />
                       
                    </div>
                </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home