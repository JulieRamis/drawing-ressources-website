import React from 'react'



const Creature = () => (
  <>
    <section className="clothes">
      <article className="section-link-gallery blue-bc">
        <h2>Ma sélection Pinterest</h2>
        <div className="gallery">
          <figure className="figure-portfolio">

            <figcaption className="figcaption-gallery"><h3>Photos animaux</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/animaux-photos/">
              <div className="border">
                <img src="img/creatures/animals-p-pinterest.png" alt="miniature-creatures-w-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessins animaux</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/animaux-dessins/">
              <div className="border">
                <img src="img/creatures/animals-d-pinterest.png" alt="miniature-creatures-m-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>

          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Créatures</h3></figcaption>
            <a href="https://www.pinterest.fr/julierda1/cr%C3%A9atures-dessins/">
              <div className="border">
                <img src="img/creatures/creatures-pinterest.png" alt="miniature-creatures-pinterest" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

        </div>
      </article>
      <article className="section-link-gallery yt">
        <h2>Ma sélection Youtube</h2>
        <div className="gallery">
          <iframe width="410" height="229" src="https://www.youtube.com/embed/58jdCD6fTWc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/Q_hDmse4QUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/Ygx6d8Pvj9o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="410" height="229" src="https://www.youtube.com/embed/Oa61ewAW6vs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
        </div>
      </article>

      <article className="section-link-gallery blue-bc">
        <h2>Ma sélection de sites</h2>
        <div className="gallery">
          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessiner des animaux "moelleux et gras"</h3></figcaption>
            <a href="https://tips.clip-studio.com/fr-fr/articles/2360">
              <div className="border">
                <img src="img/creatures/creatures-site.png" alt="miniature-creatures-site" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span></div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessiner les chats et leur anatomie</h3></figcaption>
            <a href="https://fr.accentsconagua.com/articles/design/how-to-draw-animals-cats-and-their-anatomy.html">
              <div className="border">
                <img src="img/creatures/creatures-site-2.png" alt="miniature-creatures-site-2" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>

          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Comment dessiner les dragons ?</h3></figcaption>
            <a href="https://www.dessindigo.com/blog/comment-dessiner-dragon">
              <div className="border">
                <img src="img/creatures/creatures-site-3.png" alt="miniature-creatures-site-3" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Dessiner des dragons fantastiques</h3></figcaption>
            <a href="https://www.clipstudio.net/comment-dessiner/archives/157143">
              <div className="border">
                <img src="img/creatures/creatures-site-4.png" alt="miniature-creatures-site-4" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

          <figure className="figure-portfolio">
            <figcaption className="figcaption-gallery"><h3>Etapes pour la création d'une créature</h3></figcaption>
            <a href="https://tips.clip-studio.com/fr-fr/articles/2081">
              <div className="border">
                <img src="img/creatures/creatures-site-5.png" alt="miniature-creatures-site-5" className="img-gallery" />
                <span className="span1"></span><span className="span2"></span>
              </div>
            </a>
          </figure>

        </div>
      </article>
    </section>
  </>
)

export default Creature