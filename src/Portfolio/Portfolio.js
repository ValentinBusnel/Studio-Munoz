import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink} from 'react-router-dom';

export const CoverArt = (props) => {
    return (
      <div>
        <Navbar />
          <div id="js-scroll">
            <div className="wrapper">
              <div className="container_of_button_project">
                <NavLink to='CoverArtforVenezuelanDJMrJoy'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
              <div className="project__container" data-scroll-section>
                  <div className="project__container-title" data-scroll>
                    <h1 className="anime-js-title">Cover Art Todas mienten</h1>
              </div>
              <div className="project__container-subtitle" data-scroll>
                  <p>Artwork</p>
              </div>
              <div className="project__container-images_cover_art">
                  <div className="project__image project__image-one_cover_art" data-scroll data-scroll-speed="1">
                  </div>
                  <div className="project__image project__image-two_cover_art" data-scroll data-scroll-speed="4">
                  </div>
              </div>
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
          <div id="js-scrollCoverArtforVenezuelanDJMrJoy">
            <div className="wrapper">
            <div className="container_of_button_project">
                <NavLink to='/coverart' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/PackshotParfum'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
              <div className="project__container" data-scroll-section>
                  <div className="project__container-title" data-scroll>
                    <h1 className="anime-js-title">Cover Art for Venezuelan DJ MrJoy</h1>
              </div>
              <div className="project__container-subtitle" data-scroll>
                  <p>Artwork</p>
              </div>
              <div className="project__container-images_cover_art_Dj_MrJoy">
                  <div className="project__image project__image-one_cover_art_Dj_MrJoy" data-scroll data-scroll-speed="1">
                  </div>
                  <div className="project__image project__image-two_cover_art_Dj_MrJoy" data-scroll data-scroll-speed="4">
                  </div>
                  <div className="project__image project__image-three_cover_art_Dj_MrJoy" data-scrol data-scroll-speed="2">
                  </div>
                  <div className="project__image project__image-four_cover_art_Dj_MrJoy" data-scrol data-scroll-speed="2">
                  </div>
              </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='CoverArtforVenezuelanDJMrJoy' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/PackshotlightLogo'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Packshot <br />Parfum</h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div className="project__container-images_PackshotParfum">
              <div className="project__image project__image-one_PackshotParfum" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_PackshotParfum" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-three_PackshotParfum" data-scrol data-scroll-speed="2">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/PackshotParfum' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/PersonalPosters'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Packshotlight <br />Logo</h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Visual Identity <br /> PHOTOGRAPHER: SÉBASTIEN MARCHAND</p>
          </div>
          <div className="project__container-images_PackshotlightLogo">
              <div className="project__image project__image-one_PackshotlightLogo" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_PackshotlightLogo" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-three_PackshotlightLogo" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-four_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-five_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-six_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-seven_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-height_PackshotlightLogo" data-scrol data-scroll-speed="2">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/PackshotlightLogo' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/BookTraces'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Personal <br /> Poster's</h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Visual design</p>
          </div>
          <div className="project__container-images_PersonalPosters">
              <div className="project__image project__image-one_PersonalPosters" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-three_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-four_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-five_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-six_PersonalPosters" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-seven_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-height_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-nine_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-ten_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-eleven_PersonalPosters" data-scroll data-scroll-speed="4">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/PersonalPosters' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/Monstrum'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Book <br />Traces</h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Editorial</p>
          </div>
          <div className="project__container-images_BookTraces">
              <div className="project__image project__image-one_BookTraces" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_BookTraces" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-three_BookTraces" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-four_BookTraces" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-five_BookTraces" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-six_BookTraces" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-seven_BookTraces" data-scrol data-scroll-speed="2">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/BookTraces' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/Venezuela'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Monstrum <br /></h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Editorial</p>
          </div>
          <div className="project__container-images_Monstrum">
              <div className="project__image project__image-one_Monstrum" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_Monstrum" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-three_Monstrum" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-four_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-five_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-six_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-seven_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-height_Monstrum" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-nine_Monstrum" data-scrol data-scroll-speed="2">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/Monstrum' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/Passages'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Venezuela <br /></h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Temporary Exhibition</p>
          </div>
          <div className="project__container-images_Venezuela">
              <div className="project__image project__image-one_Venezuela" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_Venezuela" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-three_Venezuela" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-four_Venezuela" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-five_Venezuela" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-six_Venezuela" data-scrol data-scroll-speed="2">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/Venezuela' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='ArgonjiCapitales'className='next_project'><span className='hover_next_and_previous_project'>NEXT PROJECT</span></NavLink>
              </div>
          <div className="project__container" >
              <div className="project__container-title">
                <h1 className="anime-js-title">Passages<br /></h1>
          </div>
          <div className="project__container-subtitle">
              <p>Visual Identity</p>
          </div>
          <div className="project__container-images_Passages">
              <div className="project__image project__image-one_Passages">
              </div>
              <div className="project__image project__image-two_Passages">
              </div>
              <div className="project__image project__image-three_Passages">
              </div>
              <div className="project__image project__image-four_Passages">
              </div>
              <div className="project__image project__image-five_Passages">
              </div>
              <div className="project__image project__image-six_Passages">
              </div>
              <div className="project__image project__image-seven_Passages">
              </div>
              <div className="project__image project__image-height_Passages">
              </div>
          </div>
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
        <div className="wrapper">
        <div className="container_of_button_project">
                <NavLink to='/Passages' className='previous_project'><span className='hover_next_and_previous_project'>PREVIOUS PROJECT</span></NavLink>
                <NavLink to='/contact'className='next_project'><span className='hover_next_and_previous_project'>CONTACT ME</span></NavLink>
              </div>
          <div className="project__container" data-scroll-section>
              <div className="project__container-title" data-scroll>
                <h1 className="anime-js-title">Argonji <br />Capitales</h1>
          </div>
          <div className="project__container-subtitle" data-scroll>
              <p>Typography Workshop</p>
          </div>
          <div className="project__container-images_ArgonjiCapitales">
              <div className="project__image project__image-one_ArgonjiCapitales" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-two_ArgonjiCapitales" data-scroll data-scroll-speed="1">
              </div>
              <div className="project__image project__image-three_ArgonjiCapitales" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-four_ArgonjiCapitales" data-scroll data-scroll-speed="4">
              </div>
              <div className="project__image project__image-five_ArgonjiCapitales" data-scrol data-scroll-speed="2">
              </div>
              <div className="project__image project__image-six_ArgonjiCapitales" data-scrol data-scroll-speed="2">
              </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

