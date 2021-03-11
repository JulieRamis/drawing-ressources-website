import React from 'react'



const Sets = () => (
  <>
    <section className="clothes">
      <article className="section-link-gallery blue-bc">
        <h2>Ma sélection Pinterest</h2>
        <div className="gallery">
          <figure className="figure-portfolio">

            <figcaption className="figcaption-gallery"><h3>Décors extérieurs photos</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/d%C3%A9cors-ext%C3%A9rieurs-photos/">
              <div className="border">
                <img src="img/sets/decors-ext-p-pinterest.png" alt="miniature-sets-w-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Décors extérieurs dessins</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/d%C3%A9cors-ext%C3%A9rieurs-dessins/">
              <div className="border">
                <img src="img/sets/decors-ex-d-pinterest.png" alt="miniature-sets-m-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>

          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Décors intérieurs photos</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/d%C3%A9cors-int%C3%A9rieurs-photos/">
              <div className="border">
                <img src="img/sets/decors-int-p-pinterest.png" alt="miniature-sets-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Décors intérieurs dessins</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/d%C3%A9cors-int%C3%A9rieurs-dessins/">
              <div className="border">
                <img src="img/sets/decors-int-d-pinterest.png" alt="miniature-sets-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

        </div>
      </article>
      <article className="section-link-gallery yt">
        <h2>Ma sélection Youtube</h2>
        <div className="gallery">
          <iframe width="410" height="229" src="https://www.youtube.com/embed/4ppjcEWmqQE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/-iKaxTo5VmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/Vo3CEtzIORg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/IRsXVYjZYVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </article>

      <article className="section-link-gallery blue-bc">
        <h2>Ma sélection de sites</h2>
        <div className="gallery">
          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessiner un paysage sur le vif</h3></figcaption>
            <a href="https://dessin-creation.com/dessiner-paysage-vif-a/">
              <div className="border">
                <img src="img/sets/sets-site.png" alt="miniature-sets-site" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span></div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessiner un paysage de neige</h3></figcaption>
            <a href="https://apprenez-a-dessiner.com/apprenez-a-dessiner-un-paysage-de-neige/">
              <div className="border">
                <img src="img/sets/sets-site-2.png" alt="miniature-sets-site-2" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>

          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessiner une pièce meublée</h3></figcaption>
            <a href="http://peinturemamanlotus.fr/?p=23471">
              <div className="border">
                <img src="img/sets/sets-site-3.png" alt="miniature-sets-site-3" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

        </div>
      </article>
    </section>
  </>
)

export default Sets