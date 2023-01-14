// import './App.css';
import {PageBtn, LinkBtn} from './buttons.js';

function Home() {
    return (
        <div>
      
      <div className='grid grid-cols-1 divide-y'>
        
        <div>
          <h1>social media links</h1>
          <LinkBtn text='youtube' link='https://www.youtube.com/channel/UCYmN3cWC0kz3eu_Z8oqLfKg' target='_blank'></LinkBtn>
          <LinkBtn text='twitter' link='https://twitter.com/SneakyninjaMX' target='_blank'></LinkBtn>
        </div>
        <div>
          <h1 className='mt-3'>my discord server (join it!)</h1>
          <LinkBtn text='discord' link='https://discord.gg/Z9RgVUNRPc' target='_blank'></LinkBtn>
        </div>
        <div>
          <h1 className='mt-3'>my projects</h1>
          <LinkBtn text='github' link='https://github.com/sneakyninjaMX' target='_blank'></LinkBtn>
          <LinkBtn text='skindex' link='https://www.minecraftskins.com/profile/4807123/sneakyninjamx' target='_blank'></LinkBtn>
          <PageBtn text='just the general' link='/JTG'></PageBtn>
          <LinkBtn text='scratch' link='https://scratch.mit.edu/users/sneakyninjaMX7/'></LinkBtn>
        </div>
      </div>
    </div>
    );
}

export default Home;