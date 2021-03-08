import React from 'react'



const Clothes = () => (
  <>
  
  <section className="clothes">
    <article className="section-link-gallery blue-bc">
      <h2>Ma sélection Pinterest</h2>
    <div className="gallery">
      <figure className="figure-portfolio">
        <figcaption className="figcaption-gallery"><h3>Photos vêtements féminin</h3></figcaption>
        <a href="https://www.pinterest.fr/julierda1/v%C3%AAtements-femmes/">
          <div className="border">
          <img src="img/cloth/cloth-w-pinterest.png" alt="miniature-cloth-w-pinterest" className="img-gallery" />
          <span className="span1"></span><span className="span2"></span>
          </div>
        </a>
      </figure>

      <figure className="figure-portfolio">
        <figcaption className="figcaption-gallery"><h3>Photos vêtements masculin</h3></figcaption>
        <a href="https://www.pinterest.fr/julierda1/v%C3%AAtements-hommes/">
          <div className="border">
          <img src="img/cloth/cloth-m-pinterest.png" alt="miniature-cloth-m-pinterest" className="img-gallery" />
          <span className="span1"></span><span className="span2"></span>
          </div>
        </a>
        
      </figure>

      <figure className="figure-portfolio">
        <figcaption className="figcaption-gallery"><h3>Dessins vêtements féminin</h3></figcaption>
        <a href="https://www.pinterest.fr/julierda1/v%C3%AAtements-dessins-femmes/">
          <div className="border">
          <img src="img/cloth/cloth-draw-w-pinterest.png" alt="miniature-cloth-draw-w-pinterest" className="img-gallery" />
          <span className="span1"></span><span className="span2"></span>
          </div>
        </a>
      </figure>

      <figure className="figure-portfolio">
        <figcaption className="figcaption-gallery"><h3>Dessins vêtements féminin</h3></figcaption>
        <a href="https://www.pinterest.fr/julierda1/v%C3%AAtements-dessins-hommes/">
          <div className="border">
          <img src="img/cloth/cloth-draw-m-pinterest.png" alt="miniature-cloth-draw-m-pinterest" className="img-gallery" />
          <span className="span1"></span><span className="span2"></span>
          </div>
        </a>
      </figure>
    </div> 
</article>
<article className="section-link-gallery yt">
  <h2>Ma sélection Youtube</h2>
  <div className="gallery">
    <iframe width="410" height="229" src="https://www.youtube.com/embed/08H6Jde82Fc?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="410" height="229" src="https://www.youtube-nocookie.com/embed/-LQ3obGc89o?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="410" height="229" src="https://www.youtube.com/embed/0i-kB5f-GeM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</article>
 
<article className="section-link-gallery blue-bc">
  <h2>Ma sélection de sites</h2>
  <div className="gallery">
    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Tuto avec Illustrator et Photoshop</h3></figcaption>
      <a href="http://www.clarimage.com/illustrator-cours-dessin-vetement-a-plat/">
        <div className="border">
        <img src="img/cloth/tuto-clothes-1.png" alt="miniature-clothes-tuto" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span></div>
      </a>
    </figure>

    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Comment dessiner les vêtements ?</h3></figcaption>
      <a href="https://artcademyatelier.fr/comment-dessiner-les-vetements/">
        <div className="border">
        <img src="img/cloth/tuto-clothes-2.png" alt="miniature-clothes-tuto" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span>
        </div>
      </a>
      
    </figure>

    <figure className="figure-portfolio">
      <figcaption className="figcaption-gallery"><h3>Conseils sur le dessin de vêtements</h3></figcaption>
      <a href="https://www.manga-designer.com/?p=273">
        <div className="border">
        <img src="img/cloth/tuto-clothes-3.png" alt="miniature-clothes-tuto" className="img-gallery" />
        <span className="span1"></span><span className="span2"></span>
        </div>
      </a>
    </figure>
      </div>
  </article>
</section>
 </>
)

export default Clothes