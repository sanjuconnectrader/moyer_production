import React from 'react';
import './Productions.css';

const services = [
  {
    title: 'Video Production',
    img: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/b06f163d-1242-4401-91d7-76999f57a7b4/82514692_3103064559707008_162892707784556544_o.jpg?format=1000w',
    text: `Our team blends cinematic storytelling with cutting-edge technology to produce
           videos that captivate and convert. We tailor every project to your brand
           voice, guaranteeing a cohesive look and feel across all platforms. From
           scriptwriting and location scouting to motion graphics and color grading,
           the entire production pipeline is handled in-house for maximum quality
           control. High-resolution deliverables are optimized for web, broadcast,
           and social media, ensuring your content looks flawless everywhere it
           plays. Transparent timelines and proactive communication keep you
           informed and on schedule from day one. With competitive pricing and
           unwavering professionalism, we turn your vision into video that drives
           results.`,
    link: '/video',
  },
  {
    title: 'Photography Production',
    img: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/301e48de-adee-4095-a48b-a667f4ebc117/100V2612.jpg?format=1000w',
    text: `We craft images with meticulous attention to lighting, composition, and brand
           consistency, so every photo tells your story at a glance. Fully insured
           and FAA-certified for aerial work, we capture stunning drone perspectives
           that elevate listings and event recaps alike. Our portable studio setup
           lets us shoot on-location with minimal disruption, bringing professional
           backdrops and lighting directly to your office or venue. Each gallery is
           delivered in multiple resolutions and aspect ratios—web-ready, print-ready,
           and social-optimized—saving you hours of post-processing. Flexible retainer
           packages lock in discounted rates and guarantee priority booking for
           recurring content needs. Most importantly, we stand behind every frame
           with a satisfaction promise: if you're not thrilled, we'll reshoot or
           re-edit until you are.`,
    link: '/photography',
  },
  {
    title: 'Restaurant Marketing',
    img: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/6d6b0cce-e25d-42ef-9ce3-1dcffb6aa803/Side+Shot+Dish+Small-29.jpg?format=750w',
    text: `Our lens fuses culinary artistry with modern techniques to plate images that
           tempt screens—and stomachs. We season every shoot to your restaurant's
           unique flavor profile, ensuring a unified visual palate across menus,
           socials, and ads. From concept boards and prop styling to meticulous lighting
           and post-production retouching, every step stays in-house for chef-level
           quality control. Crisp, color-balanced photos are delivered in print-ready
           and digital-optimized formats, so your dishes shine on websites, delivery
           apps, and billboards alike. Clear shoot schedules and collaborative mood
           boards keep you looped in and stress-free from prep to final export. All at
           competitive rates and with a service ethic as impeccable as your plating,
           we create food photography that drives bookings and boosts average spend.`,
    link: '/restaurant-marketing',
  },
];

const Productions = () => (
  <section className="prod">
    <div className="prod__container">
      {services.map(({ title, img, text, link }, idx) => (
        <React.Fragment key={title}>
          <div className="prod__card">
            <div className="prod__image-wrapper">
              <img 
                src={img} 
                alt={title} 
                loading="lazy" 
                className="prod__image"
              />
              <div className="prod__image-overlay"></div>
            </div>

            <div className="prod__content">
              <h3 className="prod__title">{title}</h3>
              <p className="prod__text">{text}</p>
              <a className="prod__btn" href={link}>
                <span>See More</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {idx < services.length - 1 && <div className="prod__divider"></div>}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default Productions;