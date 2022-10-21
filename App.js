import './assets/style/style.css';
import card1 from './assets/images/sofa.jpeg'
import card2 from './assets/images/chair.jpeg'
import card3 from './assets/images/table.jpeg'

  const App = () =>{
  return (
     <div>
      <header className="header" id="header">
          <div className="container header__container">
              <a href="#" className="header__logo">Furniture</a>
              <nav className="header__nav">
                  <a href="#" className="header__link">Home</a>
                  <a href="#" className="header__link">About</a>
                  <a href="#" className="header__link">Contacts</a>

              </nav>


          </div>




      </header>
         <section className="hero" id="hero">
             <h1 className="hero__title">Best Furniture Best Price</h1>
         </section>
           <section className="products">
            <div className="container products__grid">
              <div className="products__card">
                  <div className="products__img">
                      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fspotools.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F01%2Farmchair-poliform-1.jpg&imgrefurl=https%3A%2F%2Fspotools.com%2Fblog%2F2020%2F01%2F06%2F10-modern-chairs-for-a-contemporary-interior-design%2F&tbnid=Yt4FCyprIoRuOM&vet=12ahUKEwj9xNGGqcf6AhWS5RoKHfwjDBEQMygGegUIARDyAg..i&docid=kV4P9iG-GSunPM&w=800&h=509&q=contemporary%20modern%20chair%20design&hl=en&client=safari&ved=2ahUKEwj9xNGGqcf6AhWS5RoKHfwjDBEQMygGegUIARDyAg" alt=""/>
                      
                  </div>
                  <h4 className="products__title"> card1</h4>
              </div>
               <div className="products__card">
                   <div className="products__img">
                       <img src={card1} alt=""/>

                   </div>
                   <h4 className="products__title">card2</h4>
               </div>
               <div className="products__card">
                   <div className="products__img">
                       <img src={card2} alt=""/>

                   </div>
                   <h4 className="products__title">card3</h4>

               </div>
            </div>

           </section>
     </div>
  );
}

export default App;
