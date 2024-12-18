import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import ScrollToTop from './components/scrolltotop';
import HomePage from './pages/homePage';
import LanguageDetails from './pages/languages';
import { IoLogoWhatsapp } from 'react-icons/io';
import PolicyPage from './pages/Policy';
import AboutUs from './pages/AboutUs';
import Modal from 'react-modal';
import ApplyForm from './components/languagesection/applyForm';
import React from 'react';
const customStyles = {
  overlay:{
    backgroundColor:'rgb(0,0,0,0.7)',
    zIndex:'50'
  },
  content: {
    backgroundColor:'transparent',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition:'all 1s ease-in'
  },
};
function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const languages=[
    {
      name:'dutch',
      place:"Netherlands",    
    },
    {
      name:'spanish',
      place:"Spain",
    },
    {
      name:'english',
      place:"England",
    },
    {
      name:'japanese',
      place:"Japan",
    },
    {
      name:'chinese',
      place:"China",
    },
    {
      name:'french',
      place:"France",
    },
  ]

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" w-[20rem] sm:w-[22rem] md:w-[24rem] lg:w-[28rem] xl:w-[30rem] font-Poppins">
        <ApplyForm/>
        </div>
      </Modal>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<HomePage openModal={openModal}/>}/>
        {
          languages.map((lang)=>{return <Route key={lang.name} path={`/learn/${lang.name}`} element={<LanguageDetails lang={lang} openModal={openModal}/>}/>}
          )
        }
        {/* <Route path='/learn/dutch' element={<LanguageDetails lang='dutch' openModal={openModal}/>}/>
        <Route path='/learn/spanish' element={<LanguageDetails lang='spanish' openModal={openModal}/>}/>
        <Route path='/learn/english' element={<LanguageDetails lang='english' openModal={openModal}/>}/>
        <Route path='/learn/japanese' element={<LanguageDetails lang='japanese' openModal={openModal}/>}/>
        <Route path='/learn/chinese' element={<LanguageDetails lang='chinese' openModal={openModal}/>}/>
        <Route path='/learn/french' element={<LanguageDetails lang='french' openModal={openModal}/>}/> */}
        <Route path='/ourPolicy' element={<PolicyPage/>}/>
        <Route path='/about' element={<AboutUs openModal={openModal}/>}/>
      </Routes>
    </Router>
    <a href={`https://wa.me/917398331119?text=${encodeURIComponent("Hello Global Vakya Team, I'd like to chat with you")}`} className="p-2 fixed z-30 bottom-6 right-6 border-2 rounded-full border-green-500 bg-white "><IoLogoWhatsapp className='text-green-500' style={{fontSize:'2rem'}}/></a>
    </div>
  );
}

export default App;
