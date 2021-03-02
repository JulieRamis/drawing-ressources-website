import React from 'react'



const Clothes = () => (
  <>
  <h2>Ma sélection Pinterest</h2>
  <section className="section-link-gallery">
    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Photos vêtements féminins</h3></figcaption>
      <a href="https://www.pinterest.fr/julieramis1/v%C3%AAtements-femmes/">
        <div className="border">
        <img src="img/cloth/cloth-w-pinterest.png" alt="miniature-cloth-w-pinterest" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span></div>
      </a>
    </figure>

    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Photos vêtements masculins</h3></figcaption>
      <a href="https://www.pinterest.fr/julieramis1/v%C3%AAtements-hommes/">
        <div className="border">
        <img src="img/cloth/cloth-m-pinterest.png" alt="miniature-cloth-m-pinterest" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span></div>
      </a>
      
    </figure>

    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Dessins vêtements féminins</h3></figcaption>
      <a href="https://www.pinterest.fr/julieramis1/v%C3%AAtements-dessins-femmes/">
        <div className="border">
        <img src="img/cloth/cloth-draw-w-pinterest.png" alt="miniature-cloth-draw-w-pinterest" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span></div>
      </a>
    </figure>

    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Dessins vêtements féminins</h3></figcaption>
      <a href="https://www.pinterest.fr/julieramis1/v%C3%AAtements-dessins-hommes/">
        <div className="border">
        <img src="img/cloth/cloth-draw-m-pinterest.png" alt="miniature-cloth-draw-m-pinterest" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span></div>
      </a>
    </figure>

 </section>
 </>
)

export default Clothes