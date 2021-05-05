import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

export const CoverArt = (props) => {
    return (
      <div>
        <Navbar />
          <div id="js-scroll">
            <div class="wrapper">
              <div class="project__container" data-scroll-section>
                  <div class="project__container-title" data-scroll>
                    <h1 class="anime-js-title">Cover Art Todas mienten</h1>
              </div>
              <div class="project__container-subtitle" data-scroll>
                  <p>Visual design</p>
              </div>
              <div class="project__container-images_cover_art">
                  <div class="project__image project__image-one_cover_art" data-scroll data-scroll-speed="1">
                  </div>
                  <div class="project__image project__image-two_cover_art" data-scroll data-scroll-speed="4">
                  </div>
                  <div class="project__image_vertical  project__image-three_cover_art" data-scrol data-scroll-speed="2">
                  </div>
              </div>
              <NavLink to='/CoverArtforVenezuelanDJMrJoy' activeClassName='nav-active' className='project-next-link'>
                <li>Next</li>
             </NavLink>
            </div>
          </div>
        </div>
    </div>
    );
};

export const CoverArtforVenezuelanDJMrJoy = (props) => {
  return (
    <div>
        <Navbar />
          <div id="js-scroll">
            <div class="wrapper">
              <div class="project__container" data-scroll-section>
                  <div class="project__container-title" data-scroll>
                    <h1 class="anime-js-title">Cover Art Todas mienten</h1>
              </div>
              <div class="project__container-subtitle" data-scroll>
                  <p>Visual design</p>
              </div>
              <div class="project__container-images_cover_art_Dj_MrJoy">
                  <div class="project__image project__image-one_cover_art_Dj_MrJoy" data-scroll data-scroll-speed="1">
                  </div>
                  <div class="project__image project__image-two_cover_art_Dj_MrJoy" data-scroll data-scroll-speed="4">
                  </div>
                  <div class="project__image project__image-three_cover_art_Dj_MrJoy" data-scrol data-scroll-speed="2">
                  </div>
              </div>
              <NavLink to='/PackshotParfum'  className='project-next-link'>
              <li>Next</li>
             </NavLink>
            </div>
          </div>
        </div>
    </div>
  );
};





export const PackshotParfum = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Cover Art Todas mienten</h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_PackshotParfum">
              <div class="project__image project__image-one_PackshotParfum" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_PackshotParfum" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_PackshotParfum" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/PackshotlightLogo'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};


export const PackshotlightLogo = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Packshotlight <br />Logo</h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design <br /> PHOTOGRAPHER: SÉBASTIEN MARCHAND</p>
          </div>
          <div class="project__container-images_PackshotlightLogo">
              <div class="project__image project__image-one_PackshotlightLogo" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_PackshotlightLogo" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_PackshotlightLogo" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-five_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-six_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-seven_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-height_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/PersonalPosters'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

export const PersonalPosters = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Personal <br /> Poster's</h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_PersonalPosters">
              <div class="project__image project__image-one_PersonalPosters" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-five_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
          </div>
          <NavLink to='/BookTraces'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

export const BookTraces = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Book <br />Traces</h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_BookTraces">
              <div class="project__image project__image-one_BookTraces" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_BookTraces" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_BookTraces" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_BookTraces" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-five_BookTraces" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-six_BookTraces" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-seven_BookTraces" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/Monstrum'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

export const Monstrum = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Monstrum <br /></h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_Monstrum">
              <div class="project__image project__image-one_Monstrum" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_Monstrum" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_Monstrum" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-five_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-six_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-seven_Monstrum" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/Venezuela'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

export const Venezuela = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Venezuela <br /></h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_Venezuela">
              <div class="project__image project__image-one_Venezuela" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_Venezuela" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_Venezuela" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_Venezuela" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-five_Venezuela" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-six_Venezuela" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/Passages'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

export const Passages = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Venezuela <br /></h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_Passages">
              <div class="project__image project__image-one_Passages" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_Passages" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-three_Passages" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_Passages" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-five_Passages" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-six_Passages" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/ArgonjiCapitales'  className='project-next-link'>
              <li>Next</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

export const ArgonjiCapitales = (props) => {
  return (
    <div>
    <Navbar />
      <div id="js-scroll">
        <div class="wrapper">
          <div class="project__container" data-scroll-section>
              <div class="project__container-title" data-scroll>
                <h1 class="anime-js-title">Argonji <br />Capitales</h1>
          </div>
          <div class="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div class="project__container-images_ArgonjiCapitales">
              <div class="project__image project__image-one_ArgonjiCapitales" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-two_ArgonjiCapitales" data-scroll data-scroll-speed="1">
              </div>
              <div class="project__image project__image-three_ArgonjiCapitales" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-four_ArgonjiCapitales" data-scroll data-scroll-speed="4">
              </div>
              <div class="project__image project__image-five_ArgonjiCapitales" data-scrol data-scroll-speed="2">
              </div>
              <div class="project__image project__image-six_ArgonjiCapitales" data-scrol data-scroll-speed="2">
              </div>
          </div>
          <NavLink to='/about'  className='project-next-link'>
              <li>End</li>
          </NavLink>
        </div>
      </div>
    </div>
</div>
  );
};

