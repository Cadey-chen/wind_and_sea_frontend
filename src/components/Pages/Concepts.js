import React from 'react';
import '../../App.css';
import './Concepts.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import zzmd from '../../images/Zhuang_Zhou_Meng_Die.jpg';
import mountainsWithin from '../../images/Mountains_Within.jpg';
import qljs from '../../images/forest_painting.jpg';
import cloud_sea from '../../images/cloud_sea.jpg';

function Concepts() {
  return (
    <>
    <div className="concepts-container">
      <h1>Concepts</h1>
    </div>
    <div className="concept-cards-container">
      <div>
        <Card sx={{ml: '8%', width: '50%', height: '32vw', borderRadius: '2%', boxShadow: 1, overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.45vw', mt: '3.5%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89'}}>Dream & Butterfly</Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{fontSize: '1.5vw', m: '5%', mt: '0%', ml: '6%', lineHeight: '170%'}}>Zhuang Zhou (Zhuang Zi), who lived in 4th century BCE, is a pivotal figure in Daoism. He had a dream one day where he was a butterfly.
              During the dream, the butterfly has no conciousness of Zhuang Zhou, his identity or his memory. It was just a butterfly, existing 
              in the world in the form like any other butterfly.
            </Typography>
            <Typography sx={{fontSize: '1.5vw', m: '5%', lineHeight: '170%'}}>
              Awakening, Zhuang Zhou is Zhuang Zhou again, all his memories and habits are back. Reflecting back on his butterfly dream, he doesn't 
              know whether reality is that Zhuang Zhou had dreamt of the butterfly or the butterfly he became in his dream has dreamt of Zhuang Zhou. 
            </Typography>
            <Typography sx={{fontSize: '1.5vw', m: '5%', lineHeight: '170%'}}>
              Through this dream, Zhuang Zhou poses the question: Is the boundary of reality limited to factual occurrence - actually being the butterfly 
              or being Zhuang Zhou, or experiences and sensations with no objective substance can also serve as a form of reality?
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="zz">
        <img src={zzmd} alt="Zhuang Zi's dream about the butterfly"/>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '82%', height: '20vw', borderRadius: '1%', boxShadow: 2, mt: '6vw', overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.5vw', m: '2%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', fontStyle: 'oblique'}}>" Uniformity "</Typography>
            <Typography sx={{fontSize: '1.5vw', m: '5%', mt: '0%', lineHeight: '170%'}}>
              In his writing "Essay on the Uniformity of All Things", known as Qi Wu Lun in Chinese, Zhuang Zi argues that all things are equal in their core. 
              Through five independent stories, Zhuang Zi highlights common patterns within the mode of existence of different beings. Even though by appearence no two things 
              in the universe are exactly the same, observing shared patterns and motivations behind an action reveals a deeper logic that is universal for all forms of existence. 
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="mw">
        <img src={mountainsWithin} alt="Mountains"/>
      </div>
      <div>
        <Typography sx={{fontSize: '3vw', fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'Italic', ml: '57%', mt: '-39%', color: '#0B3D89'}}>Searching Freedom</Typography>
        <Typography sx={{fontSize: '1.5vw', m: '3%', mt: '3%', ml: '51vw', lineHeight: '170%', maxWidth: '40vw', color: '#0B3D89'}}>
              "Xiao Yao" (literal translation is "freely wandering afar") represents Zhuang Zi's aspiration for absolute freedom. In his essay "A Journey of Xiao Yao", Kun is a mystical creature of the North Sea with the body of a giant Whale and the 
              wings of a Pheonix like clouds in the sky. 
        </Typography>
        <Typography sx={{fontSize: '1.5vw', m: '3%', mt: '0%', ml: '51vw',lineHeight: '170%', maxWidth: '40vw', color: '#0B3D89'}}>
              Aspiring to ascend 90 thousand miles up towards the sky and landing at the Southern Oblivion, Kun's dream is mocked by the cicada and the fledging dove, they only dare imagine travelling
              from the ground to the top of a sandalwood tree and are confused by Kun's goal. Zhuang Zi mocks the small mindedness of the cicada and dove. 
        </Typography>
        <Typography sx={{fontSize: '1.5vw', m: '3%', mt: '5%', ml: '9vw',lineHeight: '170%', maxWidth: '83vw', color: '#0B3D89'}}>
              Within Kun, Zhuang Zi sees a body who can travel unimaginable distances and wind the everchanging tides of the sky and sea (Zhuang Zi lived in the 4th century BCE after all!). Above 
              all, Kun has the ability to explore experiences that transcends beyond physical beings that can be seen or touched. This limitless wandering towards any destination (even a non physical one) is Zhuang Zi's vision of true freedom. 
        </Typography>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '83%', height: '28vw', borderRadius: '2%', boxShadow: 2, mt: '5%', overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.35vw', mt: '2%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89'}}>"道可道， 非常道。 名可名，非常名。"</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="qljs">
        <img src={qljs} alt="Lakes and Mountains"/>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '30%', height: '25vw', borderRadius: '3%', boxShadow: 2, mt: '5%', overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '1.6vw', mt: '3.5%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89'}}>Definition</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Typography align="right" sx={{fontSize: '3vw', fontFamily: 'Inter', fontWeight: 'semibold', fontStyle: 'Italic', mr: '10%', mt: '-20%', color: '#0B3D89'}}>Quote</Typography>
      </div>
      <div>
        <Typography align="left" sx={{fontSize: '3vw', fontFamily: 'Inter', fontWeight: 'semibold', fontStyle: 'Italic', ml: '10%', mt: '25%', color: '#0B3D89'}}>Content</Typography>
      </div>
      <div className="cloud_sea">
        <img src={cloud_sea} alt="Cloud and Sea"/>
      </div>
    </div>
    <div className="space-divider">
    </div>
    </>
  )
}

export default Concepts;