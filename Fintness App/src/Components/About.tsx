import Footer from './Footer'
import Nav from './Nav'
import BrandAboutBlog from '../assets/p1.jpg'

function About() {

  return (
    <>
      <Nav />
      <div className='justify-between pt-5'>
        <div className='w-full'>
          <div className='container mx-auto px-4 pt-5 pb-5'>
            <div className="flex w-full pt-10 pb-10">
              <div className="md:flex-1 w-50">
                <img className=" rounded-xl gap-1 " src={BrandAboutBlog} />
              </div>
              <div className="p-2 md:flex-1 w-50 pl-5">
                <p className='text-sm md:text-2xl font-bold uppercase'> the stream fitness </p>
                <p className='text-2xl md:text-7xl font-bold text-primary-500 uppercase'> ABOUT US </p>
                <p className='text-sm md:text-2xl font-bold pb-2 uppercase'> project for maxwell inc </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nam, facilis assumenda quasi aut earum eius? Delectus harum animi ducimus sit accusantium fugiat! Iure iusto voluptas est consequatur eum. Harum.</p>
              </div>
            </div>
            <div>
            <h2 className='font-bold'>Where does it come from?</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About