import React from 'react'



const Anatomy = () => (
  <>

    <section className="clothes">
      <article className="section-link-gallery blue-bc">
        <h2>Ma sélection Pinterest</h2>
        <div className="gallery">
          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Squelette</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/squelette/">
              <div className="border">
                <img src="img/anatomy/skeleton-pinterest.png" alt="miniature-anatomy-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Muscles</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/muscles/">
              <div className="border">
                <img src="img/anatomy/muscular-pinterest.png" alt="miniature-anatomy-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>

          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessins mains</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/mains-dessins/">
              <div className="border">
                <img src="img/anatomy/hands-d-pinterest.png" alt="miniature-anatomy-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Photos mains</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/photos-mains/">
              <div className="border">
                <img src="img/anatomy/hands-p-pinterest.png" alt="miniature-anatomy-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessins pieds</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/pieds-dessins/">
              <div className="border">
                <img src="img/anatomy/foot-d-pinterest.png" alt="miniature-anatomy-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Photos pieds</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/photos-pieds/">
              <div className="border">
                <img src="img/anatomy/foot-p-pinterest.png" alt="miniature-anatomy-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>
        </div>
      </article>
      <article className="section-link-gallery yt">
        <h2>Ma sélection Youtube</h2>
        <div className="gallery">
          <iframe width="410" height="229" src="https://www.youtube.com/embed/Iev4P9tam18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/2Dpxh4HvDN0?start=43" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/7DG4N56XeTU?start=43" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/2L94JHsxYi8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/W6fosbzZMSY?start=43" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/bE4UsPWgIik?start=43" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </article>

      <article className="section-link-gallery blue-bc">
        <h2>Ma sélection de sites</h2>
        <div className="gallery">
          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>PDF Anatomie Artistique</h3></figcaption>
            <a href="https://pierres-info.fr/biblio_sculpture/anatomie-artistique.pdf">
              <div className="border">
                <img src="img/anatomy/site-anatomy.png" alt="miniature-anatomy-site" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span></div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Etapes pour apprendre l'anatomie</h3></figcaption>
            <a href="https://www.lecarnetdigital.com/5-etapes-pour-apprendre-anatomie-artistique/">
              <div className="border">
                <img src="img/anatomy/site-anatomy-2.png" alt="miniature-anatomy-site-2" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Tuto mains et pieds</h3></figcaption>
            <a href="https://www.clipstudio.net/comment-dessiner/archives/156379">
              <div className="border">
                <img src="img/anatomy/site-anatomy-3.png" alt="miniature-anatomy-site-3" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>

          </figure>
        </div>
      </article>
    </section>
  </>
)

export default Anatomy