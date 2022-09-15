import React, { useRef, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import TestimonialCard from '../Cards/Testimonial';
import TitleIcon from '../Title/WithIcon';
import CompanyLogo from '../CompanyLogo';
import SquareParallax from '../Parallax/SingleSquare';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Working with Softroleum Limited was a smooth ride, even though we are not originally English speaker, language was not a barrier.',
    avatar: imgAPI.avatar[10],
    name: 'Knut Astrup',
    title: 'Perpendo Board Chairman',
    rating: 5
  },
  {
    text: 'We had complex requirement, it always a lot of work to bring people up to speed, but it was easier with them',
    avatar: imgAPI.avatar[1],
    name: 'Erik Stokhof',
    title: 'AllTrace IoT Senior Engineer',
    rating: 4
  },
  {
    text: 'Good working relationship, thump ups and hi fives',
    avatar: imgAPI.avatar[2],
    name: 'Seyi Akinajo',
    title: 'FINA Microfinance Supervisor',
    rating: 4
  },
  {
    text: 'It took them sometime to get up to speed but when they did, they never slowed down',
    avatar: imgAPI.avatar[3],
    name: 'Anthony Amadoo',
    title: 'ARM Financial Analyst',
    rating: 3
  },
  {
    text: 'It is interesting to know young people are doing great things out there.',
    avatar: imgAPI.avatar[4],
    name: 'Sanyaolu Omotayo',
    title: 'Former SSA Lagos State',
    rating: 5
  },
  {
    text: 'I moved to another company for some of my supply due to unavailability and later go back to them.',
    avatar: imgAPI.avatar[6],
    name: 'Ajani Adams',
    title: 'Business Admin SecureID',
    rating: 5
  },
  {
    text: 'Nice working with them though speed can be improved.',
    avatar: imgAPI.avatar[7],
    name: 'Alabi Blessing',
    title: 'Admin NOUN',
    rating: 4
  },
  {
    text: 'Good work, good experience... overall excellence!',
    avatar: imgAPI.avatar[10],
    name: 'Bolanle Oguntodu',
    title: 'CEO Bola Fast Food',
    rating: 5
  },
];

function Testimonials() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyle();

  // Carousel Setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }]
  };

  // Translation function
  const { t } = useTranslation('common');

  // Carousel
  const slider = useRef(null);
  useEffect(() => {
    if (theme.direction === 'ltr' && window.innerWidth > 1279) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(testiContent.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <SquareParallax />
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {isDesktop && (
            <div className={classes.item}>
              <div className={classes.itemPropsFirst} />
            </div>
          )}
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <TestimonialCard
                avatar={item.avatar}
                title={item.title}
                name={item.name}
                text={item.text}
                star={item.rating}
              />
            </div>
          ))}
          {isDesktop && (
            <div className={classes.item}>
              <div className={classes.itemPropsLast} />
            </div>
          )}
        </Carousel>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon text={t('agency-landing.testimonial_title')} icon="format_quote" />
          </div>
        </Container>
      </div>
      <CompanyLogo />
    </div>
  );
}

export default Testimonials;
