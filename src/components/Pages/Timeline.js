import React from 'react';
import '../../App.css';
import './Timeline.css';
import blue_butterfly_transparent from '../../images/Blue_Butterfly_Transparent.png';
import dark_blue_butterfly from '../../images/Dark_Blue_Butterfly.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import sideBarRectangle from '../../images/SideBarRectangle_New.png';
import Footer from './Footer';

function Timeline() {
  return (
    <>
    <div className="timeline-container">
      <h1>Timeline</h1>
    </div>
    <div className="timeline-cards-container">
      <div className="line-divider"></div>
        <div className="bbt">
          <img src={blue_butterfly_transparent} alt="A blue butterfly"/>
        </div>
        <Card sx={{ml: "36%", mt: '-18vw', width: '56%', height: '20vw', maxHeight: '20vw', borderRadius: '1%', boxShadow: 1, overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '2vw', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89'}}>500 BCE - The Classical Era</Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%'}}>
                Around 500 BCE, the central ruling dynasty Zhou's power over China weakened, the nation was divided into multiple regional powers,
                this is known as Chinas's Spring and Autumn period. The divide of power and continuous conflicts between smaller nations
                gave birth to hundreds of schools of thought, which formed the classical period of Chinese Philosophy. </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%'}}>
                In "Records of the Grand Historian" by Sima Qian published in 100 BCE, historians classified Classical school of thoughts into six main streams: 
              </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', lineHeight: '170%'}}>
                1. Yin and Yang Believers
              </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', lineHeight: '170%'}}>
                2. Confucianism
              </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', lineHeight: '170%'}}>
                3. Mohism
              </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', lineHeight: '170%'}}>
                4. School of Forms and Names
              </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', lineHeight: '170%'}}>
                5. Legalism
              </Typography>
              <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89', lineHeight: '170%'}}>
                6. Daoism
              </Typography>
            </CardContent>
        </Card>
        <Card sx={{ml: "8%", mt: '9vw', width: '56%', height: '20vw', maxheight: '20vw', borderRadius: '2%', boxShadow: 2, overflow: 'auto'}}>
          <CardContent>
            <Typography align="center" sx={{fontSize: '2vw', mt: '3%', fontFamily: 'Inter', fontWeight: 'bold', color: '#0B3D89'}}>Early Daoists</Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'light', color: '#0B3D89', lineHeight: '170%'}}>
                In his book "A Short History of Chinese Philosophy", professor You Lan Feng classified 
                early Daoist philosophy into three stages: Yang Zhu, Lao Zi, and Zhuang Zi. 
            </Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'light', color: '#0B3D89', lineHeight: '170%'}}>
                Stage 1: The broad idea represented by the works of Yang Zhu (approximately 440 - 360 BCE) 
                mainly roots in the idea self protection during an uncertain time of constant warfare, which shares similar traits as escapism. 
                These early Daoists - "The Hermits", believed that living a quietly in a deserted area (such as deep in the mountains or in a forest) 
                is the solution, so they won't be in direct contact with the "evils" of the world. 
                Nevertheless, no matter how far away from the world one can hide, some "evil" 
                are ultimately unavoidable. 
            </Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'light', color: '#0B3D89', lineHeight: '170%'}}>
                Stage 2: Lao Zi (translated as "the old master") was born in the state Chu in 547 BCE.
                His "Dao De Jing" (Sutra of the Way and Its Power) highlighted common patterns within all occurrences
                in our universe. Lao Zi believed that it is important for one to observe these patterns, know these 
                patterns by heart, and act accordingly to turn things in a direction of best interest for themselves.  
            </Typography>
            <Typography align="left" sx={{fontSize: '1.5vw', m: '5%', mt: '3%', fontFamily: 'Inter', fontWeight: 'light', color: '#0B3D89', lineHeight: '170%'}}>
                Stage 3: Zhuang Zi reflected on Lao Zi's principles and observed that, no matter how intricate one's analysis 
                of the physical world might be, how careful one behaves, pain is still unavoidable. Thus, Zhuang 
                Zi invented one solution - to view the occurrences in one's life from a higher and broader angle, whether 
                it is life, death, or self. He believes that through this practice, men can transcend their physical realm. 
                Interestingly, 
                Daoism originated as a search for self-protection and 
                self-interest, Zhuang Zi's ideas cancel out the self 
                completely, and seeks objectivity within everything. And he argues, it is 
                precisely cancelling out the self that makes one happier. 
            </Typography>
        </CardContent>
    </Card>
      <div className="dbbt">
        <img src={dark_blue_butterfly} alt="A blue butterfly"/>
      </div>
      <div className="line-divider"></div>
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '4%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
                571 BCE: Lao Zi (the Old Master), generally accepted as the founder of Daoism, 
                was born in the village of Quren in the Southern state of Chu, present day Luyi in Henan province. 
      </Typography>
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
                Lao Zi worked as the royal archivist for the Zhou Dynasty royal court at Wangcheng (present day Luoyang). 
                Traditionally it is believed that he wrote the Daoism classic - Dao De Jing (Sutra of the Way and Its Power). 
      </Typography>
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
                Sima Qian wrote in "Records of the Grand Historian", Confucius, who was younger than Lao Zi by 20 years, 
                visited Lao Zi several times and consulted him on certain ritual matters, and praised him 
                lavishly afterwards. 
      </Typography>
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
        369 BCE: The Zhou dynasty has now collapsed, China entered its Warring States period. Zhuang Zhou 
        (Zhuang Zi) was born in the town of Meng 
        (in present day Anhui province) in the state of Song. Little is known about Zhuang Zi's early life 
        and education, although Sima Qian describes him as extremely knowledgeable, having read thousands of 
        ancient books. 
      </Typography>  
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
        Zhuang Zi liked using a naturalist approach and funny wordplay in his 
        writings. His "The Collection of Writings by Master Zhuang" is a classical text in Daoism.
        Heavily influenced by Lao Zi, Zhuang Zi also added new dimensions to Lao Zi's ideas.  
      </Typography> 
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
        221 BCE: China's Warring state period ended when Qin Shi Huang, the first emperor of China, 
        conquered the six nations and the unified Qin Dynasty was born.
      </Typography> 
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
        134 BCE: To strengthen his rule over a long divided China, Emperor Wu of the Western Han dynasty made 
        Confucianism the state's official school of thought.
        This constitutional change ended the diverse "hundreds of schools of thought" tradition 
        which was the foundation of China's golden age of Philosophy.
      </Typography>
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
        58AD - 75AD: Emperor Ming of the Eastern Han Dynasty dreamt of a golden figure and was inspired to introduce Buddhism 
        into China from Western regions. China's very first Buddhist temple, the White Horse Temple, was established
        in the capital city Luoyang. 
      </Typography>
      <Typography align="left" sx={{fontSize: '1.75vw', ml: '25%', mt: '3%', fontFamily: 'Inter', 
      fontWeight: 'medium', color: '#0B3D89', lineHeight: '170%', maxWidth: '65%'}}>
        Present Day: Confucianism, Daoism, and Buddhism, "the three teachings" remains the three most prominent 
        philosophy / religion in China.
      </Typography>    
      <div className="side-key">
        <img src={sideBarRectangle} alt="Light beams"/>
      </div>
      <div className="line-divider"></div>
    </div>
    <Footer />
    </>
  )
}

export default Timeline;