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
            <Typography align="center" sx={{fontSize: '1.8vw', mt: '3.5%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89'}}>Dream & Butterfly</Typography>
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
            <Typography align="center" sx={{fontSize: '1.8vw', m: '2%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', fontStyle: 'oblique'}}>" Uniformity "</Typography>
            <Typography sx={{fontSize: '1.5vw', m: '5%', mt: '0%', lineHeight: '170%'}}>
              In his writing "Essay on the Uniformity of All Things (Qi Wu Lun)", Zhuang Zi argues that all things are equal in their core. 
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
        <Typography sx={{fontSize: '1.5vw', m: '3%', mt: '3%', ml: '51vw', lineHeight: '170%', maxWidth: '40vw', color: '#0B3D89', fontWeight: '500'}}>
              "Xiao Yao" (literally translating to "freely wandering afar") is a state of absolute freedom according to Zhuang Zi. In his essay "A Journey of Xiao Yao", Kun is a mystical creature of the North Sea who has the body of a giant Whale and the 
              wings of a Pheonix like clouds in the sky. 
        </Typography>
        <Typography sx={{fontSize: '1.5vw', m: '3%', mt: '0%', ml: '51vw',lineHeight: '170%', maxWidth: '40vw', color: '#0B3D89', fontWeight: 'medium'}}>
              Aspiring to ascend 90 thousand miles up towards the sky and landing at the Southern Oblivion, Kun's dream is mocked by the cicada and the fledging dove, who can only imagine travelling
              from the ground to the top of a sandalwood tree. Zhuang Zi highlights the small mindedness of the cicada and dove. 
        </Typography>
        <Typography sx={{fontSize: '1.5vw', m: '3%', mt: '5%', ml: '9vw',lineHeight: '170%', maxWidth: '83vw', color: '#0B3D89', fontWeight: 'medium'}}>
              Within Kun, Zhuang Zi sees a mystical creature who can travel unimaginable distances and wind the everchanging tides of the sky and sea (Zhuang Zi lived in the 4th century BCE after all!). Kun has the ability to explore experiences that transcends beyond physical beings that can be seen or touched. Daring
              to adventure beyond one's own environment (unlike the cicada and the fledging dove), 
              this limitless wandering towards any destination (even a non physical one) is Zhuang Zi's vision of true freedom. 
        </Typography>
      </div>
      <div>
      <Card sx={{ml: '9%', width: '83%', height: '32vw', borderRadius: '2%', boxShadow: 2, mt: '5%', overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '2vw', mt: '2%', ml: '5%',fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', maxWidth: '90%'}}>"The Dao produced One; One produced Two; Two produced Three; Three produced All things."</Typography>
            <Typography align="center" sx={{fontSize: '1.5vw', mt: '2%', ml: '5%',fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', maxWidth: '90%'}}>-Chapter 42 of Lao Zi's "Classic of the Way and Virtue (Dao De Jing)"</Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', mt: '2%', ml: '5%',fontFamily: 'Inter', fontWeight: 'medium', maxWidth: '90%', lineHeight: '170%'}}>The word "Dao" translates to "the way" in English. In Dao De Jing, Lao Zi refers to this concept 
            as a mysterious substance that encompasses everything and transcends everything, including time itself. Dao has no start, no finish, not even a physical substance. It is unpredictable, unimaginable. </Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', mt: '2%', ml: '5%',fontFamily: 'Inter', fontWeight: 'medium', maxWidth: '90%', lineHeight: '170%'}}>"One" refers to the single-cellular state, where millions of atoms in the universe comes together and
            forms the fundamental unit of life. Those cells through reactions, give birth to living things. </Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', mt: '2%', ml: '5%',fontFamily: 'Inter', fontWeight: 'medium', maxWidth: '90%', lineHeight: '170%'}}>"Two" refers to yin and yang. Like how every force have an equal and opposite reaction, where there is 
            yang, there is a yin. Where there is day, there is night. Where there is light, there is darkness. The state of "being" and "non-being" are opposite, conflicting, but at the same time,
            they rely on each other to be complete. Without the balance of Yin and Yang, the natural order of "Dao" will be disrupted.</Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', mt: '2%', ml: '5%',fontFamily: 'Inter', fontWeight: 'medium', maxWidth: '90%', lineHeight: '170%'}}>"Three" is the product of the reaction between Yin and Yang. Such as chemical compounds that forms organs in the human body, or stars 
            that form a galaxy. From those sub-category of matters form larger systems, such as a forest, the human body, or the cosmos. Lao Zi explains everything within our universe as products of this fundamental pattern.</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="qljs">
        <img src={qljs} alt="Lakes and Mountains"/>
      </div>
      <div>
        <Typography align="left" sx={{fontSize: '2.5vw', fontFamily: 'Inter', fontWeight: 'light', fontStyle: 'Italic', ml: '9%', mt: '5%', maxWidth: '83%', color: '#0B3D89', lineHeight: '170%'}}>
          "The highest excellence is like (that of) water. The excellence of water appears in its benefiting all things, and in its occupying, without striving (to the contrary), 
          the low place which all men dislike. Hence (its way) is near to (that of) the Dao."  - Lao Zi</Typography>
      </div>
      <div className="cloud_sea">
        <img src={cloud_sea} alt="Cloud and Sea"/>
      </div>
      <div>
      <Card sx={{ml: '8%', width: '85%', height: '25vw', borderRadius: '3%', boxShadow: 2, mt: '5%', overflow: 'auto'}}>
          <CardContent>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '4%', fontFamily: 'Inter', fontWeight: 'medium', lineHeight: '180%'}}>
              In Chapter 8 of Dao De Jing, Lao Zi states that the purest kindness should resemble the nature of water. Water benfits everything everywhere, and at the same 
              time, water is a gentle yet consistent fluid that flows by the people and crops it nourished.
            </Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '4%', fontFamily: 'Inter', fontWeight: 'medium', lineHeight: '180%'}}>
              Since water gravitates downstream, a direction men despises, 
              Lao Zi argues preceisely because of this water is able to encompass everything it flew by upstream. Moreover, water forms a cycle of shapes and forms 
              in accordance with the changing seasons. Full on acceptance of one's environment and a gentle yet consistent ability to benefit everything one encounters
              is the key to true kindness Lao Zi observes within water. 
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
    <div className="space-divider">
    </div>
    </>
  )
}

export default Concepts;